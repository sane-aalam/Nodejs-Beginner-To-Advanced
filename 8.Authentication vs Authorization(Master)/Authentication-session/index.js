import express from "express";
import "dotenv/config";
const app = express();
const PORT = 3000;

// Middleware to parse JSON request body
app.use(express.json());

// import all routers
import router from "./routers/user.router.js";
app.use("/user", router);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
