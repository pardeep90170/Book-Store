import { FaTrash, FaEdit } from "react-icons/fa";

export default function BookCard({ book, onDelete, onEdit }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 hover:shadow-xl transition">
      <h2 className="text-xl font-bold">{book.title}</h2>
      <p className="text-gray-600">by {book.author}</p>
      <p className="text-sm text-blue-600 mt-1">{book.category}</p>
      <p className="text-gray-700 mt-2">{book.description}</p>
      <p className="text-lg font-semibold mt-3">₹{book.price}</p>

      <div className="flex gap-4 mt-3">
        <button
          onClick={() => onEdit(book)}
          className="bg-green-500 text-white px-3 py-1 rounded flex items-center gap-2"
        >
          <FaEdit /> Edit
        </button>
        <button
          onClick={() => onDelete(book._id)}
          className="bg-red-500 text-white px-3 py-1 rounded flex items-center gap-2"
        >
          <FaTrash /> Delete
        </button>
      </div>
    </div>
  );
}


