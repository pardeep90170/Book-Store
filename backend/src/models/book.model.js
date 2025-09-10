import mongoose from 'mongoose';

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Title is required"]
  },
  author: {
    type: String,
    required: [true, "Author is required"]
  },
  category: {
    type: String,
    required: [true, "Category is required"]
  },
  description: {
    type: String,
    default: "No description available"
  },
  price: {
    type: Number,
    required: [true, "Price is required"],
  }
}, { timestamps: true });

export const Book = mongoose.model('Book', bookSchema);
