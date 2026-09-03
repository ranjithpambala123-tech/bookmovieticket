import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function MyBookings() {
  const [bookings, setBookings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const savedBookings =
      JSON.parse(localStorage.getItem("bookings")) || [];

    setBookings(savedBookings);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleBookAgain = () => {
    navigate("/movies");
  };

  const handleDelete = (index) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this ticket?"
    );

    if (confirmDelete) {
      const updatedBookings = bookings.filter(
        (_, i) => i !== index
      );

      localStorage.setItem(
        "bookings",
        JSON.stringify(updatedBookings)
      );

      setBookings(updatedBookings);

      alert("Ticket deleted successfully!");
    }
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">
        🎟️ My Bookings
      </h1>

      {bookings.length === 0 ? (
        <div className="text-center text-gray-500 text-lg">
          No bookings found.
        </div>
      ) : (
        bookings.map((booking, index) => (
          <div
            key={index}
            className="relative bg-white shadow-lg rounded-xl p-6 mb-6 border border-gray-200"
          >
            {/* Delete Button */}
            <button
              onClick={() => handleDelete(index)}
              className="absolute top-3 right-3 w-8 h-8 rounded-full bg-red-600 text-white font-bold hover:bg-red-700"
            >
              ✖
            </button>

            <h2 style={{color:"red"}} 
            className="text-2xl font-bold text-red-600 mb-4">
              🎬 {booking.movieName}
            </h2>

            <div className="space-y-2 text-gray-700">
              <p>
                <strong>🏢 Theater:</strong>{" "}
                {booking.theater}
              </p>

              <p>
                <strong>⏰ Show Time:</strong>{" "}
                {booking.time}
              </p>

              <p>
                <strong>💺 Seats:</strong>{" "}
                {booking.selectedSeats?.length > 0
                  ? booking.selectedSeats.join(", ")
                  : "No Seats"}
              </p>

              <p className="font-bold text-green-600">
                💰 Amount: ₹{booking.totalAmount}
              </p>

              <p>
                <strong>💳 Payment Method:</strong>{" "}
                {booking.paymentMethod || "N/A"}
              </p>

              <p>
                <strong>📅 Booking Date:</strong>{" "}
                {booking.bookingDate || "N/A"}
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mt-6">
              <button
                onClick={handlePrint}
                className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
              >
                🖨️ Print Ticket
              </button>

              <button
                onClick={handleBookAgain}
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
              >
                🎬 Book Tickets Again
              </button>
            </div>
          </div>
        ))
      )}
    </div>
  );
}