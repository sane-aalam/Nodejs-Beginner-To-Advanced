import express from "express";
const app = express();
import ErrorHander from "../Middlewares/ErrorHandler.js";
import dotenv from "dotenv";

// global Error handling
app.use(express.json());
app.use(ErrorHander);
dotenv.config();

// import all routers here
// flow you understand : server.js > index.js > router.js > controller.js
import userRouter from "../Routes/User/user.router.js";
app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.send("Hello'world!");
});

export default app;
