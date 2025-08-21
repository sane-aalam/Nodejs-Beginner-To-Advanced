import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ silent: true });
const MongoDBURL = process.env.MONGODB_URL_STRING;

const connectDB = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected to database successfully");
    });

    mongoose.connection.on("error", (err) => {
      console.log("Error in connecting to database.", err);
    });

    await mongoose.connect(MongoDBURL);
  } catch (err) {
    console.error("Failed to connect to database.", err);
    process.exit(1);
  }
};

export default connectDB;
