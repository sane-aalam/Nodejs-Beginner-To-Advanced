import express from "express";
const userRouter = express.Router();
import { createUser, removeUser } from "./user.controller.js";

userRouter.post("/signup", createUser);
userRouter.post("/signout", removeUser);

export default userRouter;
