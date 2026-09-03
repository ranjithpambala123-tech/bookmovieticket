export default function SearchBar({ search, setSearch }) {
  return (
    <div className="max-w-2xl mx-auto my-8 px-4">
      <div className="flex items-center bg-white rounded-lg shadow-md overflow-hidden">
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 outline-none text-gray-700"
        />

        <button className="bg-red-600 text-white px-6 py-3 hover:bg-red-700 transition">
          Search
        </button>
      </div>
    </div>
  );
}

