const EventEmitter = require("events");
const express = require("express");
const app = express();

app.use(express.json());

// Create an EventEmitter instance for the chat app
const chatEmitter = new EventEmitter();
const users = new Set();

// Handle user joining the chat
chatEmitter.on("userJoined", (userId) => {
  users.add(userId);
  console.log(`User ${userId} joined the chat. Current users: ${[...users]}`);
  chatEmitter.emit("broadcast", {
    sender: "System",
    message: `User ${userId} has joined the chat!`,
  });
});

// Handle message sending
chatEmitter.on("sendMessage", ({ userId, message }) => {
  if (!message || typeof message !== "string" || message.trim() === "") {
    chatEmitter.emit("error", { userId, error: "Invalid or empty message" });
    return;
  }

  console.log(`Message from ${userId}: ${message}`);
  chatEmitter.emit("broadcast", { sender: userId, message });
});

// Handle broadcasting messages to all users
chatEmitter.on("broadcast", ({ sender, message }) => {
  users.forEach((userId) => {
    if (userId !== sender) {
      console.log(`Sending to ${userId}: [${sender}] ${message}`);
    }
  });
});

// Handle errors
chatEmitter.on("error", ({ userId, error }) => {
  console.log(`Error for ${userId}: ${error}`);
  // In a real app, notify the user of the error
});

// Express API for testing the chat app
app.post("/join", (req, res) => {
  const { userId } = req.body;
  if (!userId || users.has(userId)) {
    return res.status(400).json({ error: "Invalid or duplicate userId" });
  }
  chatEmitter.emit("userJoined", userId);
  res.status(200).json({ message: `User ${userId} joined` });
});

app.post("/message", (req, res) => {
  const { userId, message } = req.body;
  if (!users.has(userId)) {
    return res.status(400).json({ error: "User not in chat" });
  }
  chatEmitter.emit("sendMessage", { userId, message });
  res.status(200).json({ message: "Message sent" });
});

// Start server
const port = 3000;
app.listen(port, "localhost", () => {
  console.log(`Chat app server running on http://localhost:${port}`);
});
