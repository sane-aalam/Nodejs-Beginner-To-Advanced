import { Schema, model } from "mongoose";

//User Schema
const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true, // removes extra spaces
    },
    email: {
      type: String,
      required: true,
      unique: true, // no duplicate emails
      lowercase: true, // normalize emails
    },
    password: {
      type: String,
      required: true,
      minlength: 6, // minimum length for security
    },
  },
  { timestamps: true } //createdAt & updatedAt
);

// Create Model
const User = model("User", userSchema);

export default User;
