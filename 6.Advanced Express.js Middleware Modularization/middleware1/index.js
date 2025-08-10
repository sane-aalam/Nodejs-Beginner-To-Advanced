const { error } = require("console");
const express = require("express");
const app = express();
const PORT = 8000;

// middleware
// query parameters
app.use(express.json());

// For parsing application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// Custom middleware
// req.METHOd = which method
// req.url = URL
// date = currentTime
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url} at ${new Date().toISOString()}`);
  next(); // Pass control to the next middleware
};

// Custom Middleware 1
const middleware1 = (req, res, next) => {
  console.log(
    `[Middleware 1] Request received at: ${new Date().toISOString()}`
  );
  next();
};

// Custom Middleware 2
const middleware2 = (req, res, next) => {
  console.log(
    `[Middleware 2] HTTP Method: ${req.method}, URL: ${req.originalUrl}`
  );
  next();
};

// Custom Middleware 3
const middleware3 = (req, res, next) => {
  console.log(`[Middleware 3] Client IP: ${req.ip}`);
  next();
};

app.use(logger);
app.use(middleware1, middleware2, middleware3);

const bookStore = [
  { id: 1, title: "Eat That Frog", author: "Brian Tracy" },
  { id: 2, title: "The 7 Habits", author: "Stephen R. Covey" },
  { id: 3, title: "Atomic Habits", author: "James Clear" },
  { id: 4, title: "Deep Work", author: "Cal Newport" },
  { id: 5, title: "The Power of Now", author: "Eckhart Tolle" },
];

// setup get route to print Hello world!
app.get("/", (req, res) => {
  res.send("Book Store - REST-FULL API!");
});

// setup get route to fetech all books
app.get("/books", (req, res) => {
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

// Setup POST Route — Add New Book
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

// Setup DELETE Route — Remove Book by ID
app.delete("/deleteBook/:id", (req, res) => {
  const id = req.params.id;
  const bookId = parseInt(id);

  if (isNaN(bookId)) {
    return res.status(400).json({ error: "Book ID must be a valid number" });
  }

  const bookIndex = bookStore.findIndex((book) => book.id === bookId);

  // if not found book into mockData
  if (!bookIndex) {
    return res
      .status(404)
      .json({ error: `book with id ${id} does not exists!` });
  }

  // remove the book
  const deletedBook = bookStore.splice(bookIndex, 1);

  res.json({
    massage: "successefully deleted book!",
    deletedBook: deletedBook,
    deleteId: bookIndex,
  });
});

// app.listen
try {
  app.listen(PORT, () => {
    console.log(`HTTP server is running on http://localhost:${PORT}`);
  });
} catch (err) {
  console.error("Failed to start server:", err);
}
