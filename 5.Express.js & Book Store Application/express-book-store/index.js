const express = require("express");
const app = express();
const PORT = 8000;

const bookStore = [
  { id: 1, title: "Eat That Frog", author: "Brian Tracy" },
  { id: 2, title: "The 7 Habits", author: "Stephen R. Covey" },
  { id: 3, title: "Atomic Habits", author: "James Clear" },
  { id: 4, title: "Deep Work", author: "Cal Newport" },
  { id: 5, title: "The Power of Now", author: "Eckhart Tolle" },
  { id: 6, title: "Rich Dad Poor Dad", author: "Robert T. Kiyosaki" },
  { id: 7, title: "Think and Grow Rich", author: "Napoleon Hill" },
  { id: 8, title: "Can't Hurt Me", author: "David Goggins" },
  { id: 9, title: "Start with Why", author: "Simon Sinek" },
  { id: 10, title: "The Lean Startup", author: "Eric Ries" },
];

// setup get route to print Hello world!
app.get("/", (req, res) => {
  res.send("Hello world!");
});

// setup get route to fetech all books
app.get("/books", (req, res) => {
  // custom header start with
  res.setHeader("x-piysuh", "Piyush garg");
  res.status(200).json(bookStore);
});

// setup get route to fetech a book by Id
app.get("/book/:id", (req, res) => {
  const id = req.params.id;
  const bookId = parseInt(id);

  if (isNaN(bookId)) {
    return res.status(400).json({ error: "Book ID must be a valid number" });
  }

  const book = bookStore.find((book) => book.id === bookId);
  if (!book) {
    return res
      .status(404)
      .json({ error: `book with id ${id} does not exists!` });
  }
  res.json(book);
});

// app.listen
try {
  app.listen(PORT, () => {
    console.log(`✅ HTTP server is running on http://localhost:${PORT}`);
  });
} catch (err) {
  console.error("❌ Failed to start server:", err);
}

// /books/:id - dynamically add id
// query parameter can used here
// query parameter return string
// you have to convert into integer
// you have parseINT
// add : parseINT
// add : id must be integer only
// isNaN("123") // false
// isNaN("abc") // true
// isNaN(" ")   // false
