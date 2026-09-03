import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-red-500"
          >
            MovieBook
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="hover:text-red-500">
              Home
            </Link>

            <Link
              to="/movies"
              className="hover:text-red-500"
            >
              Movies
            </Link>

            <Link
              to="/theatres"
              className="hover:text-red-500"
            >
              Theaters
            </Link>

            <Link
              to="/mybooking"
              className="hover:text-red-500"
            >
              My Bookings
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setOpen(!open)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden pb-4 flex flex-col space-y-3">
            <Link
              to="/"
              onClick={() => setOpen(false)}
            >
              Home
            </Link>

            <Link
              to="/movies"
              onClick={() => setOpen(false)}
            >
              Movies
            </Link>

            <Link
              to="/theatres"
              onClick={() => setOpen(false)}
            >
              Theaters
            </Link>

            <Link
              to="/mybooking"
              onClick={() => setOpen(false)}
            >
              My Bookings
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}