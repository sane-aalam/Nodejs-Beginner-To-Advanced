import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ silent: true });
const mongoURI = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error("MongoDB connection error:", error);
    console.log("MongoDB failed!!");
    process.exit(1);
  }
};

export default connectDB;
