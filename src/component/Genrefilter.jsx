import { useState } from "react";

export default function GenreFilter() {
  const genres = [
    "All",
    "Action",
    "Comedy",
    "Drama",
    "Horror",
    "Sci-Fi",
    "Romance",
  ];

  const [selectedGenre, setSelectedGenre] = useState("All");

  return (
    <div className="max-w-7xl mx-auto px-4 py-6">
     

      <div className="flex flex-wrap gap-3">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`px-4 py-2 rounded-full font-medium transition ${
              selectedGenre === genre
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-800 hover:bg-gray-300"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      <p className="mt-4 text-gray-600">
        Selected Genre: <span className="font-semibold">{selectedGenre}</span>
      </p>
    </div>
  );
}

