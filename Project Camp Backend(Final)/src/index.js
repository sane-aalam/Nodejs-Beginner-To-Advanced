import express from "express";
const app = express();
const PORT = process.env.PORT || 3000;

import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

const instagramData = {
  _id: "u_1001",
  username: "travel.with.arya",
  fullName: "Arya Kapoor",
  bio: "✈️ Exploring the world, one city at a time. Photographer • Foodie • Storyteller",
  website: "https://aryakapoor.photos",
  isVerified: false,
  isPrivate: false,
  profilePicUrl: "https://cdn.example.com/profiles/arya.jpg",
  followersCount: 12450,
  followingCount: 540,
  postsCount: 128,
  savedCount: 318,
  joinedAt: new Date("2020-06-15T09:30:00.000Z"),
  location: {
    city: "Mumbai",
    country: "India",
  },
};

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/instagram", (req, res) => {
  res.json({ instagramData });
});

app.listen(PORT, () => {
  console.log(`Example app listening on PORT http://localhost:${PORT}`);
});
