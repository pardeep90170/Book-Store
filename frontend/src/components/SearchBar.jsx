export default function SearchBar({ query, setQuery }) {
  return (
    <div className="flex justify-center mb-4">
      <input
        type="text"
        placeholder="Search by title, author, category, description..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-1/2 p-2 rounded-lg border border-gray-300 focus:outline-none focus:ring focus:ring-blue-400"
      />
    </div>
  );
}

