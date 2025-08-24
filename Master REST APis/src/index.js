import express from "express";
const app = express();
import ErrorHander from "../Middlewares/ErrorHandler.js";

// global Error handling
app.use(ErrorHander);

app.get("/", (req, res) => {
  throw new Error("Manual error!");
});

app.get("/test", (req, res) => {
  throw new Error("Tested error!");
});

export default app;
