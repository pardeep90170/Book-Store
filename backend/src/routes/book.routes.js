import express from 'express';
import { 
  createBook,
  getBooks,
  updateBook,
  deleteBook,
} from '../controllers/book.controller.js';

const router = express.Router();

// Routes for creating a book and fetching all books
router.route("/").post(createBook).get(getBooks);

// Routes for updating and deleting a single book by ID
router.route("/:id").put(updateBook).delete(deleteBook);
export default router;
