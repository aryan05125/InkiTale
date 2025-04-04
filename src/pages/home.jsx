import React from "react";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookOpen, faStar, faTruck, faHandHoldingUsd } from "@fortawesome/free-solid-svg-icons";

const Home = () => {
  return (
    <div className="bg-white text-[#151515] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#151515] text-white py-20 text-center px-4 sm:px-8">
        <motion.h1
          className="text-3xl sm:text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to InkiTale Book Store
        </motion.h1>
        <motion.p
          className="mt-4 text-base sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Explore thousands of books & get them delivered to your door!
        </motion.p>
        <motion.button
          className="mt-6 px-6 py-3 bg-[#50f1be] text-[#151515] font-bold rounded-lg text-base sm:text-lg hover:bg-[#6ddee5] transition-all duration-300"
          whileHover={{ scale: 1.1 }}
        >
          Browse Now
        </motion.button>
      </section>

      {/* Features Section */}
      <section className="container mx-auto py-16 px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Why Choose Us?</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: faBookOpen, title: "Vast Collection", desc: "Thousands of books from various genres." },
            { icon: faStar, title: "Top Ratings", desc: "Highly rated books with reader reviews." },
            { icon: faTruck, title: "Fast Delivery", desc: "Quick and reliable book delivery." },
            { icon: faHandHoldingUsd, title: "Best Prices", desc: "Affordable rates & great discounts." }
          ].map((feature, idx) => (
            <motion.div
              key={idx}
              className="text-center p-6 bg-white shadow-lg rounded-lg"
              whileHover={{ scale: 1.05 }}
            >
              <FontAwesomeIcon icon={feature.icon} size="2x" className="text-[#50f1be] mb-4" />
              <h3 className="text-lg sm:text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm sm:text-base">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Trending Books Section */}
      <section className="bg-gray-100 py-16 px-4 sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10">Trending Books</h2>
        <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {[
            {
              src: "book1.jpg",
              title: "Don't Believe Everything You Think",
              author: "Joseph Nguyen",
            },
            {
              src: "book2.jpg",
              title: "The Psychology of Money",
              author: "James Clear",
            },
            {
              src: "book3.jpg",
              title: "The Handbook of P.M",
              author: "James T. Brown",
            },
          ].map((book, idx) => (
            <motion.div
              key={idx}
              className="p-4 bg-white shadow-lg rounded-lg text-center w-full sm:w-64"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={book.src}
                alt={book.title}
                className="w-28 h-40 sm:w-32 sm:h-48 mx-auto rounded-lg mb-4 object-cover"
              />
              <h3 className="text-base sm:text-lg font-semibold">{book.title}</h3>
              <p className="text-sm">{book.author}</p>
              <button className="mt-3 px-4 py-2 bg-[#6ddee5] text-[#151515] rounded-lg hover:bg-[#50f1be] transition-all text-sm sm:text-base">
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
