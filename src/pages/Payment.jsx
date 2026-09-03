import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Payment() {
  const navigate = useNavigate();
  const { state } = useLocation();
  

  const movieName = state?.movieName || "Movie";
  const theater = state?.theater || "Theater";
  const time = state?.time || "Time";
  const seats = state?.selectedSeats || [];
  const totalAmount = state?.totalAmount || 0;

  const [paymentMethod, setPaymentMethod] = useState("");

  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [cardHolder, setCardHolder] = useState("");

  const handlePayment = () => {
  const booking = {
    movieName,
    theater,
    time,
    selectedSeats: seats,
    totalAmount,
    paymentMethod,
    bookingDate: new Date().toLocaleString(),
  };

  const existingBookings =
    JSON.parse(localStorage.getItem("bookings")) || [];

  existingBookings.push(booking);

  localStorage.setItem(
    "bookings",
    JSON.stringify(existingBookings)
  );

  alert("Payment Successful! 🎉");

  navigate("/mybooking");
};
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">
        Payment
      </h1>

      <div className="bg-white shadow-lg rounded-lg p-5 mb-6">
        <h2 style={{color:"red"}}
        className="text-xl font-semibold mb-4">
          Booking Summary
        </h2>

        <p><strong>🎬 Movie:</strong> {movieName}</p>
        <p><strong>🏢 Theater:</strong> {theater}</p>
        <p><strong>⏰ Time:</strong> {time}</p>
        <p>
          <strong>💺 Seats:</strong>{" "}
          {seats.length > 0 ? seats.join(", ") : "None"}
        </p>

        <p className="mt-3 text-xl font-bold text-green-600">
          ₹{totalAmount}
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-5">
        <h2 style={{color:"red"}} 
        className="text-xl font-semibold mb-4">
          Select Payment Method
        </h2>

        <div className="grid grid-cols-3 gap-4">
          <button
            onClick={() => setPaymentMethod("UPI")}
            className={`p-3 border rounded-lg ${
              paymentMethod === "UPI"
                ? "bg-green-600 text-white"
                : ""
            }`}
          >
            UPI
          </button>

          <button
            onClick={() => setPaymentMethod("CARD")}
            className={`p-3 border rounded-lg ${
              paymentMethod === "CARD"
                ? "bg-green-600 text-white"
                : ""
            }`}
          >
            Card
          </button>

          <button
            onClick={() => setPaymentMethod("NETBANKING")}
            className={`p-3 border rounded-lg ${
              paymentMethod === "NETBANKING"
                ? "bg-green-600 text-white"
                : ""
            }`}
          >
            Net Banking
          </button>
        </div>

        {paymentMethod === "CARD" && (
          <div className="mt-4 space-y-3">
            <input
              type="text"
              placeholder="Card Number"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              className="w-full border p-3 rounded-lg"
            />

            <div className="grid grid-cols-2 gap-3">
              <input
                type="text"
                placeholder="MM/YY"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                className="border p-3 rounded-lg"
              />

              <input
                type="password"
                placeholder="CVV"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                className="border p-3 rounded-lg"
              />
            </div>

            <input
              type="text"
              placeholder="Card Holder Name"
              value={cardHolder}
              onChange={(e) => setCardHolder(e.target.value)}
              className="w-full border p-3 rounded-lg"
            />
          </div>
        )}

        <button
          onClick={handlePayment}
          className="w-full mt-6 bg-green-600 text-white py-3 rounded-lg hover:bg-green-700"
        >
          Pay ₹{totalAmount}
        </button>
      </div>
    </div>
  );
}