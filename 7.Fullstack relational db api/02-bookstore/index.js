import express, { json, urlencoded } from "express";
import router from "./routes/book.routes.js";
const app = express();
const PORT = 8000;

app.use(json());
app.use(urlencoded({ extended: true }));

app.use("/api/books", router);

try {
  app.listen(PORT, () => {
    console.log(`HTTP server is running on http://localhost:${PORT}`);
  });
} catch (err) {
  console.error("Failed to start server:", err);
}
