import React from "react";
import { motion } from "framer-motion";

const teamMembers = [
  { name: "Aryan Chauhan", role: "Founder & CEO", img: "Aryan.jpg" },
  { name: "Malhar Chauhan", role: "Creative Head", img: "mallu.jpg" },
  { name: "Keval Chauhan", role: "Lead Developer", img: "keval.jpg" },
  { name: "Heet Parmar", role: "Marketing Manager", img: "heet.jpg" },
];

const About = () => {
  return (
    <div className="bg-[#151515] text-white min-h-screen">
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-[#50f1be]"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="mt-4 text-base md:text-lg text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          We are a passionate team dedicated to creating innovative and user-friendly digital solutions.
        </motion.p>
      </section>

      {/* Our Mission & Vision */}
      <section className="max-w-6xl mx-auto py-16 px-4">
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            className="p-6 bg-[#202020] rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-[#50f1be]">Our Mission</h2>
            <p className="text-gray-300 mt-4 text-sm md:text-base">
              To deliver high-quality, innovative, and user-friendly digital experiences that make a difference.
            </p>
          </motion.div>

          <motion.div
            className="p-6 bg-[#202020] rounded-lg shadow-lg"
            whileHover={{ scale: 1.05 }}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-[#50f1be]">Our Vision</h2>
            <p className="text-gray-300 mt-4 text-sm md:text-base">
              To be a global leader in digital solutions, pushing the boundaries of creativity and technology.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#50f1be] mb-10">
          Meet Our Team
        </h2>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="p-6 bg-[#202020] rounded-lg shadow-lg hover:shadow-xl transition-all"
              whileHover={{ scale: 1.1 }}
            >
              <img
                src={`/${member.img}`}
                alt={member.name}
                className="w-24 h-24 md:w-32 md:h-32 object-cover rounded-full mx-auto mb-4 border-4 border-[#50f1be]"
              />
              <h3 className="text-lg md:text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-400 text-sm">{member.role}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
