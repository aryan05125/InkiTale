import React, { useState } from "react";
import { motion } from "framer-motion";

const books = [
  // Fiction
  { id: 1, title: "The Great Story", author: "John Doe", img: "fiction1.jpg", price: "₹260", category: "Fiction" },
  { id: 2, title: "Lost in Pages", author: "Nina Grey", img: "fiction2.jpg", price: "₹188", category: "Fiction" },
  { id: 3, title: "Love & War", author: "Emily Heart", img: "fiction3.jpg", price: "₹230", category: "Fiction" },
  { id: 4, title: "Whispers", author: "Olivia West", img: "fiction4.jpg", price: "₹149", category: "Fiction" },
  { id: 5, title: "Shadow Realm", author: "Rick Moon", img: "fiction5.jpg", price: "₹350", category: "Fiction" },

  // Mystery
  { id: 6, title: "Mystery Night", author: "Jane Smith", img: "Mystery1.jpg", price: "$9.99", category: "Mystery" },
  { id: 7, title: "Silent Clues", author: "Cleo Fox", img: "Mystery2.jpg", price: "$11.99", category: "Mystery" },
  { id: 8, title: "The Locked Room", author: "E. Black", img: "Mystery3.jpg", price: "$13.99", category: "Mystery" },
  { id: 9, title: "Murder in Mind", author: "Lara Stone", img: "Mystery4.jpg", price: "$10.50", category: "Mystery" },
  { id: 10, title: "Hidden Truth", author: "Jason Cole", img: "Mystery5.jpg", price: "$12.89", category: "Mystery" },

  // Adventure
  { id: 11, title: "Adventure Begins", author: "Alex Brown", img: "Adventure1.jpg", price: "$15.99", category: "Adventure" },
  { id: 12, title: "Jungle Trails", author: "Tina Ray", img: "Adventure2.jpg", price: "$14.50", category: "Adventure" },
  { id: 13, title: "Island Escape", author: "Chris Nolan", img: "Adventure3.jpg", price: "$16.99", category: "Adventure" },
  { id: 14, title: "Mountain Quest", author: "Zack Lee", img: "Adventure4.jpg", price: "$13.75", category: "Adventure" },
  { id: 15, title: "Ocean Secrets", author: "Amy Coral", img: "Adventure5.jpg", price: "$12.65", category: "Adventure" },

  // Technology
  { id: 16, title: "The Art of Coding", author: "Aryan Dev", img: "Technology1.jpg", price: "$20.00", category: "Technology" },
  { id: 17, title: "AI Revolution", author: "Alan Smith", img: "Technology2.jpg", price: "$19.99", category: "Technology" },
  { id: 18, title: "Web Wonders", author: "Jessica Web", img: "Technology3.jpg", price: "$18.75", category: "Technology" },
  { id: 19, title: "Tech Explained", author: "Mark Nerd", img: "Technology4.jpg", price: "$17.80", category: "Technology" },
  { id: 20, title: "Blockchain Basics", author: "Eliot Chain", img: "Technology5.jpg", price: "$21.25", category: "Technology" },

  // Science
  { id: 21, title: "Secrets of Universe", author: "Carl Sagan", img: "Science1.jpg", price: "$18.50", category: "Science" },
  { id: 22, title: "Quantum Leap", author: "Neil Armstrong", img: "Science2.jpg", price: "$16.45", category: "Science" },
  { id: 23, title: "Biology Basics", author: "Dr. Emily Gene", img: "Science3.jpg", price: "$14.25", category: "Science" },
  { id: 24, title: "Physics Power", author: "Isaac Newton", img: "Science4.jpg", price: "$17.35", category: "Science" },
  { id: 25, title: "Chemistry World", author: "Marie Curie", img: "Science5.jpg", price: "$15.60", category: "Science" },
];

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredBooks =
    selectedCategory === "All"
      ? books
      : books.filter((book) => book.category === selectedCategory);

  return (
    <div className="bg-white text-[#151515] min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#151515] text-white py-16 px-4 text-center">
        <motion.h1
          className="text-3xl sm:text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Explore Our Book Collection
        </motion.h1>
        <motion.p
          className="mt-4 text-base sm:text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Find your next favorite book from our vast collection.
        </motion.p>
      </section>

      {/* Category Filters */}
      <section className="container mx-auto py-10 px-4">
        <h2 className="text-2xl sm:text-3xl font-bold text-center mb-6">
          Filter by Category
        </h2>
        <div className="flex justify-center gap-3 sm:gap-4 flex-wrap">
          {["All", "Fiction", "Mystery", "Adventure", "Technology", "Science"].map(
            (category) => (
              <motion.button
                key={category}
                className={`px-4 sm:px-5 py-2 rounded-lg font-semibold text-sm sm:text-base ${
                  selectedCategory === category
                    ? "bg-[#50f1be] text-[#151515]"
                    : "bg-[#6ddee5] text-[#151515]"
                }`}
                whileHover={{ scale: 1.1 }}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </motion.button>
            )
          )}
        </div>
      </section>

      {/* Book Grid */}
      <section className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <motion.div
                key={book.id}
                className="p-4 bg-white shadow-md rounded-xl text-center flex flex-col items-center justify-between h-[370px] w-full max-w-[300px] mx-auto"
                whileHover={{ scale: 1.05 }}
              >
                <img
                  src={book.img}
                  alt={book.title}
                  className="h-36 w-28 object-cover rounded-lg mb-2"
                />
                <h3 className="text-lg font-semibold">{book.title}</h3>
                <p className="text-gray-600 text-sm">{book.author}</p>
                <p className="text-md font-bold mt-1">{book.price}</p>
                <button className="mt-2 px-4 py-1 bg-[#6ddee5] text-[#151515] rounded-md hover:bg-[#50f1be] transition-all text-sm">
                  Add to Cart
                </button>
              </motion.div>
            ))
          ) : (
            <p className="text-center text-xl col-span-1 sm:col-span-2 md:col-span-3">
              No books available in this category.
            </p>
          )}
        </div>
      </section>
    </div>
  );
};

export default Shop;