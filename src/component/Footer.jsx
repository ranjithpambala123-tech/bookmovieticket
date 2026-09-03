import React from "react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          <div>
            <h2 className="text-2xl font-bold text-red-500">
              MovieBook
            </h2>
            <p className="text-gray-400 mt-2">
              Book your favorite movies online anytime, anywhere.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">
              Quick Links
            </h3>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/" className="hover:text-red-500">Home</a></li>
              <li><a href="/movies" className="hover:text-red-500">Movies</a></li>
              <li><a href="/theaters" className="hover:text-red-500">Theaters</a></li>
              <li><a href="/bookings" className="hover:text-red-500">Bookings</a></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-3">
              Contact
            </h3>
            <p className="text-gray-400">support@moviebook.com</p>
            <p className="text-gray-400">+91 98765 43210</p>
          </div>

        </div>

        <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-500">
          © {new Date().getFullYear()} MovieBook. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}

