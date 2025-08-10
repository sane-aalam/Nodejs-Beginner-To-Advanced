const { error } = require("console");
const express = require("express");
const app = express();
const PORT = 8000;

// middleware
// For parsing json data
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// When you re-start datbase will lose.
// Mockdata
const bookStore = [
  { id: 1, title: "Eat That Frog", author: "Brian Tracy" },
  { id: 2, title: "The 7 Habits", author: "Stephen R. Covey" },
  { id: 3, title: "Atomic Habits", author: "James Clear" },
  { id: 4, title: "Deep Work", author: "Cal Newport" },
  { id: 5, title: "The Power of Now", author: "Eckhart Tolle" },
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

// 6.Setup DELETE Route — Remove Book by ID
// 7.Setup POST Route — Add New Book
app.post("/addNewBook", (req, res) => {
  const { tittle, author } = req.body;

  const safeTittle = tittle?.trim();
  const safeAuthor = author?.trim();

  if (!safeTittle) {
    return res
      .status(400)
      .json({ error: "Book title is required and cannot be empty" });
  }

  if (!safeAuthor) {
    return res
      .status(400)
      .json({ error: "Author name is required and cannot be empty" });
  }

  // Basic character validation (letters, numbers, spaces, some punctuation)
  const validationRegex = /^[a-zA-Z0-9\s.,'-]{2,100}$/;
  if (!validationRegex.test(safeTittle)) {
    return res.status(400).json({
      error: "Book title contains invalid characters",
    });
  }

  if (!validationRegex.test(safeAuthor)) {
    return res.status(400).json({
      error: "Book authur contains invalid characters",
    });
  }

  // newId of database(for new book)
  const id = bookStore.length + 1;

  // insert into DB(mock-data)
  bookStore.push({
    id: id,
    tittle: safeTittle,
    author: safeAuthor,
  });

  console.log("new data inserted!");

  // If everything passes:
  res.status(201).json({
    message: "new data inserted",
    tittle: safeTittle,
    author: safeAuthor,
    id: id,
  });
});

// app.listen
try {
  app.listen(PORT, () => {
    console.log(`✅ HTTP server is running on http://localhost:${PORT}`);
  });
} catch (err) {
  console.error("❌ Failed to start server:", err);
}
