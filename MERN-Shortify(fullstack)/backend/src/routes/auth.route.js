import express from "express";
const router = express.Router();
// import login/regiser from the controller
import { login_user, register_user } from "../controllers/auth.controller.js";

router.post("/register", register_user);
router.post("/login", login_user);

export default router;
