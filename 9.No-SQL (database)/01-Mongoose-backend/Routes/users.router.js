import express from "express";
import User from "../models/user.models.js";
const router = express.Router();
import { randomBytes, createHmac } from "node:crypto";

/*
 * Algorithm (/singup)
 * Take input from user(name,email,password)
 * Check if email already exists
 * Email not already not store into DB data
 * before gonna to store planTextPassword - hashPassword to store into DB
 * create new document,store into DB
 */

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    console.log(name, email, password);

    // Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        error: "Email already registered!",
      });
    }

    const salt = randomBytes(16).toString("hex");
    const hashPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");

    // Create new user
    const newUser = new User({ name, email, password: hashPassword, salt });
    await newUser.save();

    res
      .status(201)
      .json({ message: "User registered successfully!", userId: newUser._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/*
 * Take input from user (email,password),just same to same facebook,instagram
 * checkout this email is already present into DB, you have signup or not
 * compare password = store DB into hashPassword
 * create playload (token) authentication
 * - jwt.sign(playload,scret_key)
 * finally login!
 */

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);

    // Check if email already exists
    const existingUser = await User.findOne({ email });

    if (!existingUser) {
      return res.status(400).json({
        error: "Email already registered!",
      });
    }

    const salt = randomBytes(16).toString("hex");
    const hashPassword = createHmac("sha256", salt)
      .update(password)
      .digest("hex");

    const existPassword = existingUser.password;
    if (hashPassword != existPassword) {
      return res.status(400).json({
        error: `invalid password`,
      });
    }

    res
      .status(200)
      .json({ message: "User login successfully!", userId: newUser._id });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;
