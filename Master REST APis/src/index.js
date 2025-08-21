import express from "express";
const app = express();

app.get("/login", (req, res) => {
  console.log("login route hit!");
});

export default app;
