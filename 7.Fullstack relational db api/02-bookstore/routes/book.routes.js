import { Router } from "express";
const router = Router();
import { attachRequestTimestamp } from "../middleware/middleware.js";

import {
  getAllBooks,
  getBookbyID,
  addNewBookCollection,
  deleteBookCollection,
} from "../controllers/book.controller.js";

router.get("/", attachRequestTimestamp, getAllBooks);
router.get("/:id", getBookbyID);
router.post("/", addNewBookCollection);
router.delete("/:id", deleteBookCollection);

export default router;
