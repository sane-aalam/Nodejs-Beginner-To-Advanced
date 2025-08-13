require("dotenv/config");
const db = require("./db");
const { userTable } = require("./drizzle/schema");

async function getAllUsers() {
  const user = await db.select().from(userTable);
  return user;
}

getAllUsers();
