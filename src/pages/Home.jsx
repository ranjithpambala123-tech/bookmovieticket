export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to MovieBook
          </h1>

          <p className="text-lg mb-8">
            Book movie tickets online anytime, anywhere.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/movies"
              className="bg-white text-red-600 px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-100 transition"
            >
              🎬 Browse Movies
            </a>

            <a
              href="/mybooking"
              className="bg-black text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:bg-gray-800 transition"
            >
              🎟️ My Bookings
            </a>
          </div>
        </div>
      </section>

      {/* Why Choose MovieBook */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-10">
          Why Choose MovieBook?
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition">
            <div className="text-5xl mb-4">🎬</div>
            <h3 className="text-xl font-semibold mb-2">
              Latest Movies
            </h3>
            <p className="text-gray-600">
              Explore trending movies and new releases every week.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition">
            <div className="text-5xl mb-4">🎟️</div>
            <h3 className="text-xl font-semibold mb-2">
              Easy Booking
            </h3>
            <p className="text-gray-600">
              Book your favorite seats in just a few clicks.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg text-center hover:scale-105 transition">
            <div className="text-5xl mb-4">🍿</div>
            <h3 className="text-xl font-semibold mb-2">
              Best Experience
            </h3>
            <p className="text-gray-600">
              Enjoy a seamless and hassle-free movie booking experience.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}