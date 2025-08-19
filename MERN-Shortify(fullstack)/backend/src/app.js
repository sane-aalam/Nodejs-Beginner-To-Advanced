import express from "express";
const app = express();
const PORT = process.env.PORT;
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";

dotenv.config("./.evn");

// Parses incoming JSON
// Express.js application sets up middleware to parse incoming URL-encoded data,
// typically from HTML form submissions.
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"));

// import all rountes & db
import connectDB from "./config/mongodb.config.js";
import { errorHandler } from "./services/ApiError.js";
import urlRoutes from "./routes/short_url.route.js";
import authRoutes from "./routes/auth.route.js";
import { redirectShortUrlToFullUrl } from "./controllers/short_url.controller.js";

// routes declaration
app.use("/api/auth", authRoutes);
app.use("/api/create", urlRoutes);
app.get("/:shortUrl", redirectShortUrlToFullUrl);

// Error handler — should be last
app.use(errorHandler);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`⚙️ Server is running at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
