require("dotenv/config");
console.log(process.env.DATABASE_URL);

const { drizzle } = require("drizzle-orm/node-postgres");

// DATABASE_URL=postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}/${DB_NAME}
const db = drizzle(process.env.DATABASE_URL);

module.exports = db;
