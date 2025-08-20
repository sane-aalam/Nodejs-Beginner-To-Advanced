import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ silent: true });
const mongoURI = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
    console.log(
      "------------------------working fine-----------------------------"
    );
  } catch (error) {
    console.error("MongoDB connection error:", error);
    console.log("MongoDB failed!!");
    process.exit(1);
  }
};

export default connectDB;
