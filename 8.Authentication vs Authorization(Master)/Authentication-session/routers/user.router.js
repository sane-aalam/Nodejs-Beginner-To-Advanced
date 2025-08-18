import express from "express";
const router = express.Router();
import db from "../db/index.js";
import { userSessions, usersTable } from "../db/schema.js";
import { eq } from "drizzle-orm";
import { randomBytes, createHmac } from "node:crypto";
import crypto from "crypto";

router.post("/signup", async (req, res) => {
  try {
    const { name, age, email, password } = req.body;

    // check if user exists
    const existingUser = await db
      .select()
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (existingUser.length > 0) {
      return res.status(400).json({
        error: "User already exists!",
      });
    }

    // hash password with salt
    const salt = randomBytes(16).toString("hex");
    const hashPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");

    // store user in DB
    const [user] = await db
      .insert(usersTable)
      .values({
        name,
        age,
        email,
        password: hashPassword,
        salt, // store salt into db
      })
      .returning({ id: usersTable.id });

    return res.status(201).json({
      status: "success",
      data: { userId: user.id },
      msg: `data is inserted!`,
    });
  } catch (err) {
    console.error("Signup error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log("debug-1");
    const [existingUser] = await db
      .select({
        id: usersTable.id,
        email: usersTable.email,
        salt: usersTable.salt,
        password: usersTable.password,
      })
      .from(usersTable)
      .where(eq(usersTable.email, email));

    if (!existingUser) {
      return res.status(400).json({
        error: "User not exists!",
        email: email,
      });
    }

    const salt = existingUser.salt;
    const exitingHash = existingUser.password;

    const hashPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");

    if (hashPassword != exitingHash) {
      return res.status(400).json({
        error: `incorrect password!`,
      });
    }

    console.log("debug-2");
    // generate the session for user
    // each user have unique sesssion
    console.log(existingUser.id);
    const session = await db
      .insert(userSessions)
      .values({
        userId: existingUser.id,
      })
      .returning({
        id: userSessions.id,
        createdAt: userSessions.createdAt,
      });

    console.log("debug-3");
    console.log("Session created:", session);
    return res.json({ status: true, msg: `succesfully login` });
  } catch (error) {
    console.error("Signup error:", error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
