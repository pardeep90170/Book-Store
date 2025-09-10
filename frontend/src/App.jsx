import React, { useState, useEffect } from "react";
import axios from "axios";
import BookCard from "./components/BookCard";
import SearchBar from "./components/SearchBar";
import BookForm from "./components/BookForm";

export default function App() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState("");
  const [editBook, setEditBook] = useState(null);

  const fetchBooks = async () => {
    const { data } = await axios.get(`/api/v1/books?search=${query}`);
    // console.log(data);
    setBooks(data.data);
    setQuery(null)
    
  };

  useEffect(() => {
    fetchBooks();
  }, [query]);

  const handleDelete = async (id) => {
    await axios.delete(`/api/v1/books/${id}`);

    fetchBooks();
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">📚 Bookstore</h1>
      <SearchBar query={query} setQuery={setQuery} />
      <BookForm
        fetchBooks={fetchBooks}
        editBook={editBook}
        setEditBook={setEditBook}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {books && books.length > 0 ? (
          books.map((book) => (
            <BookCard
              key={book._id}
              book={book}
              onDelete={() => handleDelete(book._id)}
              onEdit={() => setEditBook(book)} 
            />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No books found.
          </p>
        )}
      </div>
    </div>
  );
}


