import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const images = [
  "/img/bg-img/bg5.jpg",
  "/img/bg-img/bg2.jpg",
  "/img/bg-img/bg7.jpg",
];

function Home() {
  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-green-50 min-h-screen">

      {/* HERO SLIDER */}
      <section className="relative h-[90vh] flex items-center overflow-hidden">

        {/* Images */}
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${index === current ? "opacity-100" : "opacity-0"
              }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40" />
        {/* <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/30 to-black/10" /> */}

        {/* Content */}
        <div className="relative z-10 w-full">
          <div className="max-w-6xl mx-auto px-6">

            <div className="max-w-xl bg-black/60 backdrop-blur-sm p-10 rounded-xl border-l-4 border-green-500 shadow-lg">

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Delicious Homemade Recipes
              </h2>

              <p className="text-gray-300 mb-8 text-lg">
                Discover mouth-watering dishes shared by food lovers.
                Upload your own creations and inspire others.
              </p>

              <div className="flex gap-4">
                <Link
                  to="/recipes"
                  className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg shadow transition transition-all duration-300"
                >
                  View Recipes
                </Link>

                <Link
                  to="/upload"
                  className="bg-white hover:bg-gray-100 text-green-600 px-6 py-3 rounded-lg shadow transition transition-all duration-300"
                >
                  Upload Recipe
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Slider Dots */}
        <div className="absolute bottom-8 w-full flex justify-center gap-3 z-10">
          {images.map((_, index) => (
            <div
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full cursor-pointer transition ${index === current ? "bg-green-500 scale-125" : "bg-white/50"
                }`}
            />
          ))}
        </div>
      </section>

      {/* CATEGORY SECTION */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">

          {/* Section Heading */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800">
              Browse by Category 🍴
            </h2>
            <p className="text-gray-500 mt-2">
              Find recipes that match your lifestyle
            </p>
          </div>

          {/* Categories Grid */}
          <div className="grid md:grid-cols-3 gap-8">

            {/* VEG */}
            <div className="group bg-green-50 rounded-2xl p-8 text-center hover:shadow-lg transition duration-300 cursor-pointer">
              <div className="text-5xl mb-4">🥗</div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-600">
                Veg Recipes
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                Fresh & healthy vegetarian dishes
              </p>
            </div>

            {/* NON VEG */}
            <div className="group bg-green-50 rounded-2xl p-8 text-center hover:shadow-lg transition duration-300 cursor-pointer">
              <div className="text-5xl mb-4">🍗</div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-600">
                Non-Veg Recipes
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                Delicious meat & protein meals
              </p>
            </div>

            {/* VEGAN */}
            <div className="group bg-green-50 rounded-2xl p-8 text-center hover:shadow-lg transition duration-300 cursor-pointer">
              <div className="text-5xl mb-4">🌱</div>
              <h3 className="text-xl font-semibold text-gray-800 group-hover:text-green-600">
                Vegan Recipes
              </h3>
              <p className="text-gray-500 mt-2 text-sm">
                Plant-based & dairy-free delights
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* FEATURED SECTION */}
      <section className="max-w-6xl mx-auto px-6 py-16">

        <h3 className="text-3xl font-bold text-green-700 mb-10 text-center">
          Featured Recipes
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          <div className="bg-white rounded-xl shadow hover:shadow-lg hover:scale-105 transform transition overflow-hidden">
            <img
              src="/img/bg-img/bg2.jpg"
              alt=""
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h4 className="text-xl font-bold text-green-700">
                Strawberry Cake
              </h4>

              <p className="text-gray-600 mt-2">
                Simple & Delicious dessert recipe loved by everyone.
              </p>

              <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                See Recipe
              </button>
            </div>
          </div>

          <div className="bg-white rounded-xl shadow hover:shadow-lg hover:scale-105 transform transition overflow-hidden">
            <img
              src="/img/bg-img/bg3.jpg"
              alt=""
              className="w-full h-64 object-cover"
            />

            <div className="p-6">
              <h4 className="text-xl font-bold text-green-700">
                Chinese Noodles
              </h4>

              <p className="text-gray-600 mt-2">
                A quick and tasty meal perfect for busy days.
              </p>

              <button className="mt-4 bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg">
                See Recipe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* BEST RECIPES SECTION */}
      <section className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-green-700">
              The Best Recipes ✨
            </h3>
            <p className="text-gray-500 mt-2">
              Handpicked dishes loved by our community
            </p>
          </div>

          {/* Cards Row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <div className="relative group overflow-hidden">

                <img
                  src="/img/bg-img/r1.jpg"
                  alt=""
                  className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow">
                    View Recipe
                  </button>
                </div>
              </div>

              <div className="p-5 text-center">
                <h4 className="text-lg font-semibold text-gray-800">
                  Sushi Easy Recipe
                </h4>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <div className="relative group overflow-hidden">

                <img
                  src="/img/bg-img/r2.jpg"
                  alt=""
                  className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow">
                    View Recipe
                  </button>
                </div>
              </div>

              <div className="p-5 text-center">
                <h4 className="text-lg font-semibold text-gray-800">
                  Homemade Burger
                </h4>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-xl shadow hover:shadow-lg transition overflow-hidden">
              <div className="relative group overflow-hidden">

                <img
                  src="/img/bg-img/r3.jpg"
                  alt=""
                  className="w-full h-64 object-cover transition duration-500 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition flex items-center justify-center">
                  <button className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg shadow">
                    View Recipe
                  </button>
                </div>
              </div>

              <div className="p-5 text-center">
                <h4 className="text-lg font-semibold text-gray-800">
                  Vegan Smoothie
                </h4>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;
