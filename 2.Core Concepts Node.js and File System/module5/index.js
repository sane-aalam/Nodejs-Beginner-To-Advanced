console.log("Node.js is working in module5!");

// app.js
const fs = require("fs");

// Write a file
fs.writeFileSync("data.txt", "Hello from Node.js");

// Read the file
const content = fs.readFileSync("data.txt", "utf-8");
console.log(content);

console.log("end of code!");
