const express = require("express");
const router = express.Router();
const { attachRequestTimestamp } = require("../middleware/middleware.js");

const {
  getAllBooks,
  getBookbyID,
  addNewBookCollection,
  deleteBookCollection,
} = require("../controllers/book.controller.js");

router.get("/", attachRequestTimestamp, getAllBooks);
router.get("/:id", getBookbyID);
router.post("/", addNewBookCollection);
router.delete("/:id", deleteBookCollection);

module.exports = router;
