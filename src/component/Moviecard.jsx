import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MovieCards() {
  const movies = [
    {
      id: 1,
      title: "Avengers: Endgame",
      genre: "Action",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_dzAlQSJD0WUQ377RJqMzrKr60pppohRB9kNPPDPCjw&s",
      rating: "8.9",
    },
    {
      id: 2,
      title: "Avatar: The Way of Water",
      genre: "Sci-Fi",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf_21ac3w7tjl0d1mjn9jOArW9SzBbS3vp6l97gDVgkQ&s=10",
      rating: "8.5",
    },
    {
      id: 3,
      title: "Bahubali 2",
      genre: "Drama",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8o01VXR6ZEX_i8CwkedpHAEtBHXKieefEHbs0Z2JyJg&s=10",
      rating: "8.3",
    },
  ];

  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("All");
  const  navigate=useNavigate()

  const filteredMovies = movies.filter((movie) => {
    const matchesSearch = movie.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesGenre =
      selectedGenre === "All" ||
      movie.genre === selectedGenre;

    return matchesSearch && matchesGenre;
  });

  const genres = ["All", "Action", "Sci-Fi", "Drama","Comedy", "Romance"];

  return (
    <div className="max-w-7xl mx-auto px-4 py-10">
      {/* Search Bar */}
      <div className="max-w-2xl mx-auto mb-6">
        <input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 border rounded-lg shadow-md outline-none"
        />
      </div>

      {/* Genre Filter */}
      <div className="flex justify-center gap-3 mb-8 flex-wrap">
        {genres.map((genre) => (
          <button
            key={genre}
            onClick={() => setSelectedGenre(genre)}
            className={`px-4 py-2 rounded-lg font-medium ${
              selectedGenre === genre
                ? "bg-red-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            {genre}
          </button>
        ))}
      </div>

      {/* Movie Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredMovies.map((movie) => (
          <div
            key={movie.id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:scale-105 transition duration-300"
          >
            <img
              src={movie.image}
              alt={movie.title}
              className="w-full h-80 object-cover"
            />

            <div className="p-4">
              <h3 className="text-xl font-semibold">
                {movie.title}
              </h3>

              <p className="text-blue-600 font-medium mt-1">
                🎭 {movie.genre}
              </p>

              <p className="text-gray-600 mt-2">
                ⭐ Rating: {movie.rating}/10
              </p>

              <button
  onClick={() =>{
    localStorage.setItem("movieName", movie.title);
    navigate("/theatres", {
      state: {
        movieName: movie.title,
        movieImage: movie.image,
      },
    
    })}
  }
  className="w-full mt-4 bg-red-600 text-white py-2 rounded-lg hover:bg-red-700"
>
  Book Now
</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

