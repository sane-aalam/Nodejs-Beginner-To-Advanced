import express from "express";
const router = express.Router();

router.post("/signup", (req, res) => {
  res.send("hello signup router");
});

router.post("/login", (req, res) => {
  res.send("hello login router");
});

export default router;
