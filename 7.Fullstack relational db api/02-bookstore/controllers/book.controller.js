import bookStore from "../db/index";

const getAllBooks = (req, res) => {
  res.status(200).json(bookStore);
};
const getBookbyID = (req, res) => {
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
};
const addNewBookCollection = (req, res) => {
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
};
const deleteBookCollection = (req, res) => {
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
};

export default {
  getAllBooks,
  getBookbyID,
  addNewBookCollection,
  deleteBookCollection,
};
