import express from "express";
import "dotenv/config";
const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello, Express with pnpm!");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
