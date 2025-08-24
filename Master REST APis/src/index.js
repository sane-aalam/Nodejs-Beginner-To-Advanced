import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Let's countinue to bluid rest-apis");
});

export default app;
