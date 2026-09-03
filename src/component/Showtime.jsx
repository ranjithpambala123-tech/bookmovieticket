import { useLocation } from "react-router-dom";
import showData from "../data/showData";
import ShowtimeCard from './ShowtimeCard';


export default function Showtime() {
  const { state } = useLocation();

  const movieName = state?.movieName || "Movie";
  const movieImage = state?.movieImage;

  return (
    <section className="max-w-7xl mx-auto px-4 py-10">
      {/* Movie Title */}
      <h1 className="text-4xl font-bold text-center text-red-600 mb-4">
        {movieName}
      </h1>

      {/* Movie Image */}
      {movieImage && (
        <div className="flex justify-center mb-8">
          <img
            src={movieImage}
            alt={movieName}
            className="w-64 h-96 object-cover rounded-xl shadow-lg"
          />
        </div>
      )}

      <h2 className="text-2xl font-semibold text-center mb-8">
        Available Showtimes
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {showData.map((show, index) => (
          <ShowtimeCard
            key={index}
            movieName={movieName}
            theater={show.theater}
            location={show.location}
            date={show.date}
            timings={show.timings}
          />
        ))}
      </div>
    </section>
  );
} 