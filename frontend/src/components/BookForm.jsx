import React, { useState, useEffect } from "react";
import axios from "axios";

export default function BookForm({ fetchBooks, editBook, setEditBook }) {
  const [book, setBook] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    price: "",
  });

  useEffect(() => {
    if (editBook) setBook(editBook);
  }, [editBook]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (editBook) {
      await axios.put(`/api/v1/books/${editBook._id}`, book);
      setEditBook(null);
    } else {
      await axios.post("/api/v1/books", book);
    }

    setBook({ title: "", author: "", category: "", description: "", price: "" });
    fetchBooks();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 shadow-md rounded-lg flex flex-col gap-3 w-1/2 mx-auto"
    >
      <input
        type="text"
        placeholder="Title"
        value={book.title}
        onChange={(e) => setBook({ ...book, title: e.target.value })}
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Author"
        value={book.author}
        onChange={(e) => setBook({ ...book, author: e.target.value })}
        className="border p-2 rounded"
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={book.category}
        onChange={(e) => setBook({ ...book, category: e.target.value })}
        className="border p-2 rounded"
        required
      />
      <textarea
        placeholder="Description"
        value={book.description}
        onChange={(e) => setBook({ ...book, description: e.target.value })}
        className="border p-2 rounded"
      />
      <input
        type="number"
        placeholder="Price"
        value={book.price}
        onChange={(e) => setBook({ ...book, price: e.target.value })}
        className="border p-2 rounded"
        required
      />
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        {editBook ? "Update Book" : "Add Book"}
      </button>
    </form>
  );
}



