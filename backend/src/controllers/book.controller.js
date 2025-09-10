import { asyncHandler } from '../middlewares/asnycHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiRes } from '../utils/ApiRes.js';
import { Book } from '../models/book.model.js';

// CREATE Book
export const createBook = asyncHandler(async (req, res) => {
  const { title, author, category, price, description } = req.body;

  // Validate required fields
  if (!title || !author || !category || price === undefined) {
    throw new ApiError(400, "All required fields must be provided", [
      !title && "Title is required",
      !author && "Author is required",
      !category && "Category is required",
      price === undefined && "Price is required",
    ].filter(Boolean));
  }

  const book = await Book.create({ title, author, category, price, description });
  res.status(201).json(new ApiRes(201, book, "Book created successfully"));
});

// GET All Books (with optional search)
export const getBooks = asyncHandler(async (req, res) => {
  const { search } = req.query;
  let books;

  if (search) {
    books = await Book.find({
      $or: [
        { title: { $regex: search, $options: "i" } },
        { author: { $regex: search, $options: "i" } },
        { category: { $regex: search, $options: "i" } },
        { description: { $regex: search, $options: "i" } },
      ],
    });

    // Prioritize title > author > category > description
    books.sort((a, b) => {
      const fields = ["title", "author", "category", "description"];
      for (let field of fields) {
        const aMatch = a[field]?.toLowerCase().includes(search.toLowerCase());
        const bMatch = b[field]?.toLowerCase().includes(search.toLowerCase());
        if (aMatch && !bMatch) return -1;
        if (!aMatch && bMatch) return 1;
      }
      return 0;
    });
  } else {
    books = await Book.find({});
  }

  if (!books || books.length === 0) {
    throw new ApiError(404, "No books found");
  }

  res.status(200).json(new ApiRes(200, books, "Books fetched successfully"));
});

// UPDATE Book
export const updateBook = asyncHandler(async (req, res) => {
  const updatedBook = await Book.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!updatedBook) {
    throw new ApiError(404, "Book not found");
  }

  res.status(200).json(new ApiRes(200, updatedBook, "Book updated successfully"));
});

// DELETE Book
export const deleteBook = asyncHandler(async (req, res) => {
  const deletedBook = await Book.findByIdAndDelete(req.params.id);

  if (!deletedBook) {
    throw new ApiError(404, "Book not found");
  }

  res.status(200).json(new ApiRes(200, deletedBook, "Book deleted successfully"));
});