import { asyncWrapper } from "./AsyncWrapper.js";
import { createUserDB, findUserbyEmail } from "../dao/user.dao.js";
import { ConflictError } from "./ApiError.js";
import { signToken } from "./helper.js";
import bcrypt from "bcrypt";

export const registerUser = async (name, email, password) => {
  // to check user is already have loginned!
  const alredyUserExit = await findUserbyEmail(email);
  console.log("user exit or not", alredyUserExit);
  if (alredyUserExit) {
    throw new ConflictError("user already exists");
  }
  // create the document of user (newUser)

  const PasswordHash = await bcrypt.hash(password, 10); // 10 is salt rounds
  const user = await createUserDB(name, email, PasswordHash);
  const token = signToken({ id: user._id });
  console.log("token is this ->", token);
  return token;
};

export const loginUser = asyncWrapper((email, password) => {});
