import express from "express";
import User from "../../Models/user.model.js";
import bcrypt from "bcrypt";
import validationData from "../../utils/ValidationData.js";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res.status(400).json({
      success: false,
      message: "All fields (name, email, password) are required!",
    });
  }

  try {
    if (!validationData(name, email, password)) {
      return res.status(400).json({
        msg: "Invalid input fields!",
      });
    }

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({
        msg: "User is already registered!",
      });
    }

    // hash the password
    const saltRounds = 10;
    const hashPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      name,
      email,
      password: hashPassword,
    });

    await newUser.save();

    // jwt - authentication
    res
      .status(201)
      .json({ success: true, message: "User registered successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// login user
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email & password required" });
  }

  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // hash the password
    // dcrypt the password into db before gonna to into db
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch)
      return res.status(401).json({ message: "Invalid credentials" });

    // Generate JWT
    const playload = { id: user._id, email: user.email };
    const token = jwt.sign(playload, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });

    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// get user data
export const getUser = (req, res) => {
  res.json({
    message: "Welcome to your profile",
    user: req.user,
  });
};

// singout
export const signoutUser = (req, res) => {
  const { token } = req.cookies;
  res.cookie("token", null, {
    expires: new Date(Date.now()),
  });
  res.send("Logout Successfully!");
};
