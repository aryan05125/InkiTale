import React from "react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="bg-[#151515] min-h-screen text-white px-4 sm:px-6 lg:px-8 py-12">
      <motion.h1
        className="text-4xl sm:text-5xl font-bold text-center text-[#50f1be] mb-10"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Contact Us
      </motion.h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Form */}
        <motion.form
          className="bg-[#202020] p-6 sm:p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <label className="block mb-4">
            <span className="text-[#6ddee5] font-semibold">Name</span>
            <input
              type="text"
              placeholder="Enter your name"
              className="w-full mt-2 p-3 rounded bg-[#151515] border border-[#6ddee5] text-white text-sm sm:text-base"
            />
          </label>

          <label className="block mb-4">
            <span className="text-[#6ddee5] font-semibold">Email</span>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-3 rounded bg-[#151515] border border-[#6ddee5] text-white text-sm sm:text-base"
            />
          </label>

          <label className="block mb-4">
            <span className="text-[#6ddee5] font-semibold">Message</span>
            <textarea
              rows="4"
              placeholder="Write your message"
              className="w-full mt-2 p-3 rounded bg-[#151515] border border-[#6ddee5] text-white text-sm sm:text-base"
            ></textarea>
          </label>

          <button
            type="submit"
            className="w-full sm:w-auto bg-[#50f1be] text-black font-bold py-2 px-6 rounded hover:bg-[#6ddee5] transition-all duration-300"
          >
            Send Message
          </button>
        </motion.form>

        {/* Contact Info */}
        <motion.div
          className="flex flex-col justify-center bg-[#202020] p-6 sm:p-8 rounded-2xl shadow-lg space-y-6"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center space-x-4">
            <FaPhoneAlt className="text-[#50f1be] text-xl" />
            <p className="text-sm sm:text-base">+91 98765 43210</p>
          </div>

          <div className="flex items-center space-x-4">
            <FaEnvelope className="text-[#50f1be] text-xl" />
            <p className="text-sm sm:text-base">contact@inkitale.com</p>
          </div>

          <div className="flex items-center space-x-4">
            <FaMapMarkerAlt className="text-[#50f1be] text-xl" />
            <p className="text-sm sm:text-base">Ahmedabad, Gujarat, India</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactUs;
