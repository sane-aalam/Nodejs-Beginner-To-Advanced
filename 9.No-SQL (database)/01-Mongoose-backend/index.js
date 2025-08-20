import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;
import connectDB from "./DB/db.js";

// Express to use its built-in middleware to parse incoming requests with URL-encoded data
// Express to read json data into our DB
app.use(express.json());
app.use(express.urlencoded());

// import all routers
import router from "./Routes/users.router.js";
app.use("/api/user", router);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`⚙️ Server is running at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGO db connection failed !!! ", err);
  });
