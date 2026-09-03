import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Seat from "../component/Seat";

export default function SeatSelection() {
  const { state } = useLocation();
  const navigate = useNavigate();

  // Get movie details
  const movieName =
    state?.movieName ||
    localStorage.getItem("movieName") ||
    "No Movie Selected";

  const theater = state?.theater || "PVR Cinemas";
  const location = state?.location || "Hyderabad";
  const date = state?.date || "01 Sep 2026";
  const time = state?.time || "10:00 AM";

  const SEAT_PRICE = 200;

  const seats = [
    "A1", "A2", "A3", "A4", "A5",
    "B1", "B2", "B3", "B4", "B5",
    "C1", "C2", "C3", "C4", "C5",
    "D1", "D2", "D3", "D4", "D5",
  ];

  const [selectedSeats, setSelectedSeats] = useState([]);

  const handleSeatSelect = (seat) => {
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  const totalAmount = selectedSeats.length * SEAT_PRICE;

  const handleConfirmBooking = () => {
    if (selectedSeats.length === 0) {
      alert("Please select at least one seat");
      return;
    }

    navigate("/payment", {
      state: {
        movieName,
        theater,
        location,
        date,
        time,
        selectedSeats,
        totalAmount,
      },
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-6">
        Select Your Seats
      </h2>

      {/* Booking Details */}
      <div className="bg-white shadow-md rounded-lg p-4 mb-6">
        <h3 style={{color:"red"}}
        className="text-xl font-semibold mb-3">
          Booking Details
        </h3>

        <div className="space-y-2">
          <p>
            <strong>🎬 Movie:</strong> {movieName}
          </p>

          <p>
            <strong>🏢 Theater:</strong> {theater}
          </p>

          <p>
            <strong>📍 Location:</strong> {location}
          </p>

          <p>
            <strong>📅 Date:</strong> {date}
          </p>

          <p>
            <strong>⏰ Time:</strong> {time}
          </p>
        </div>
      </div>

      {/* Screen */}
      <div className="bg-gray-300 text-center py-3 rounded-lg mb-8 font-semibold">
        SCREEN
      </div>

      {/* Seats */}
      <div className="grid grid-cols-5 gap-4 max-w-md mx-auto">
        {seats.map((seat) => (
          <Seat
            key={seat}
            seat={seat}
            isSelected={selectedSeats.includes(seat)}
            onSelect={handleSeatSelect}
          />
        ))}
      </div>

      {/* Summary */}
      <div className="mt-8 bg-white shadow-md rounded-lg p-4">
        <h3 style={{color:"red"}}
        className="text-lg font-semibold mb-2">
          Booking Summary
        </h3>

        <p className="text-gray-700">
          {selectedSeats.length > 0
            ? selectedSeats.join(", ")
            : "No seats selected"}
        </p>

        <p className="mt-2 font-bold">
          Total Seats: {selectedSeats.length}
        </p>

        <p className="mt-2 font-bold text-green-600">
          Total Amount: ₹{totalAmount}
        </p>

        <button
          onClick={handleConfirmBooking}
          disabled={selectedSeats.length === 0}
          className="mt-4 w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
}