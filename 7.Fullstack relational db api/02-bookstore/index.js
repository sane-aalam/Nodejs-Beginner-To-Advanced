import db from "./config/db.js";
import usersTable from "./drizzle/schema.js";

async function getAllUsers() {
  const user = await db.select().from(usersTable);
  return user;
}

// Function to add a single user to the database
async function addUser(userData) {
  const { name, age, email } = userData;
  const newUser = await db.insert(usersTable).values({ name, age, email });

  console.log(newUser);
  return newUser;
}

const userData = {
  name: "John Doe",
  age: 30,
  email: "john.doe@example.com",
};

addUser(userData);
