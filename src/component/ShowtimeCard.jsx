import { useNavigate } from "react-router-dom";

export default function ShowtimeCard({
  movieName,
  theater,
  location,
  date,
  timings,
}) {
  const navigate = useNavigate();

  console.log("ShowtimeCard movieName:", movieName);

  const handleTimeClick = (time) => {
    console.log({
      movieName,
      theater,
      location,
      date,
      time,
    });

    navigate("/seatselection", {
      state: {
        movieName,
        theater,
        location,
        date,
        time,
      },
    });
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-5">
  <h2 style={{color:"red"}}
   className="text-2xl font-bold text-red-600">
    🎬 {theater}
  </h2>

  <p className="text-gray-600 mt-2">
    📍 {location}
  </p>

  <p className="text-gray-600">
    📅 {date}
  </p>

  <div className="flex flex-wrap gap-2 mt-4">
    {timings.map((time, index) => (
      <button
        key={index}
        onClick={() => handleTimeClick(time)}
        className="px-4 py-2 border border-green-500 text-green-600 rounded-md hover:bg-green-500 hover:text-white transition"
      >
        {time}
      </button>
    ))}
  </div>
</div>
  );
}