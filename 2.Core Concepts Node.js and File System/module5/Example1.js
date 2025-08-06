console.log("Reading File-1");

const fs = require("fs").promises;

// cleaner async/await syntax:
async function readFileExample() {
  try {
    // File content: Promise { <pending> }
    const content = await fs.readFile("data.txt", "utf-8");
    console.log("File content:", content);
  } catch (error) {
    console.log("error:", error);
  }
}

readFileExample();

console.log("Reading File-2");

// first: Reading File-1
// second: Reading File-2
// thrid: File content: Hello from Node.js
