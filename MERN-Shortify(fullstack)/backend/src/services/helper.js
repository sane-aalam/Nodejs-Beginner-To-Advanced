import { nanoid } from "nanoid";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const generateNanoid = (lengthText) => {
  return nanoid(lengthText);
};

// create method of signToken - which can generateToken into SignUp(new-use)
// create method of verifyToken
export const signToken = (payload) => {
  const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "7d" });
  return token;
};

export const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET);
};
