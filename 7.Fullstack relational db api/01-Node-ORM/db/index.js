require("dotenv").config();
console.log(process.env.DATABASE_URL);

const { drizzle } = require("drizzle-orm/node-postgres");

const db = drizzle(process.env.DATABASE_URL);

module.exports = db;
