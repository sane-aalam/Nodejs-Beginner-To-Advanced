import express from "express";
const app = express();
import ErrorHander from "../Middlewares/ErrorHandler.js";

// global Error handling
app.use(ErrorHander);

// import all routers here
// flow you understand : server.js > index.js > router.js > controller.js
import userRouter from "../Routes/User/user.router.js";
app.use("/api", userRouter);

app.get("/", (req, res) => {
  res.send("Hello'world!");
});

export default app;
