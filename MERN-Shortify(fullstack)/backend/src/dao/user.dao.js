import User from "../models/user.model.js";

// create method to find user by email
export const findUserbyEmail = async (email) => {
  console.log("debug code-1");
  return await User.findOne({ email });
};

// create method to find user by id
export const findUserbyId = async (id) => {
  return await User.findById({ id });
};

// Creates a new user instance with provided name, email, and password.
// Saves the user to the MongoDB database using Mongoose.
// Returns the saved user document.
export const createUserDB = async (name, email, PasswordHash) => {
  console.log("debug code-2");
  const user = new User({ name, email, password: PasswordHash });
  console.log(user);
  await user.save();
  return user;
};
