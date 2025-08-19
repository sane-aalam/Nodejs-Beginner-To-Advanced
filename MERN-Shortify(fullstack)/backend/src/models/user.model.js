import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      minLength: 4,
      maxLength: 50,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
    avtar: {
      type: String, // dummy avtar pic
      default:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUZr8J_NnQJMD6bl8-AdMIwE0eP_3jOmCv6xL59PRTuwllTH4uiiU-9h0YdR31H2c09jc&usqp=CAU",
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("User", userSchema);
export default User;
