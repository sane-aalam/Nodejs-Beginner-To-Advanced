import express from "express";
const userRouter = express.Router();
import {
  createUser,
  loginUser,
  getUser,
  signoutUser,
} from "./user.controller.js";
import auth from "../../Middlewares/auth.js";

userRouter.post("/signup", createUser);
userRouter.post("/login", loginUser);
userRouter.get("/profile", auth, getUser);
userRouter.post("/logout", auth, signoutUser);

export default userRouter;
