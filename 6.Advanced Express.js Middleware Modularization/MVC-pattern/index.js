const express = require("express");
const router = require("./routes/book.routes.js");
const app = express();
const PORT = 8000;

// default middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/books", router);

try {
  app.listen(PORT, () => {
    console.log(`HTTP server is running on http://localhost:${PORT}`);
  });
} catch (err) {
  console.error("Failed to start server:", err);
}
