import React from "react";
import { motion } from "framer-motion";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhoneAlt,
  FaUserPlus,
} from "react-icons/fa";

const Signup = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#151515] to-[#1f1f1f]">
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="bg-white w-full max-w-md sm:max-w-lg p-6 sm:p-8 rounded-2xl shadow-2xl"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-[#151515] text-center mb-6 flex items-center justify-center gap-2">
          <FaUserPlus /> Create Your InkiTale Account
        </h2>

        {/* Full Name */}
        <div className="mb-4">
          <label className="block text-[#151515] font-semibold mb-1">
            Full Name
          </label>
          <div className="flex items-center border border-[#151515] rounded-xl px-3 py-2 focus-within:ring-2 ring-[#50f1be]">
            <FaUser className="text-[#151515] mr-2" />
            <input
              type="text"
              placeholder="Enter full name"
              className="w-full outline-none bg-transparent text-[#151515]"
            />
          </div>
        </div>

        {/* Email */}
        <div className="mb-4">
          <label className="block text-[#151515] font-semibold mb-1">
            Email
          </label>
          <div className="flex items-center border border-[#151515] rounded-xl px-3 py-2 focus-within:ring-2 ring-[#50f1be]">
            <FaEnvelope className="text-[#151515] mr-2" />
            <input
              type="email"
              placeholder="Enter email"
              className="w-full outline-none bg-transparent text-[#151515]"
            />
          </div>
        </div>

        {/* Phone Number */}
        <div className="mb-4">
          <label className="block text-[#151515] font-semibold mb-1">
            Phone Number
          </label>
          <div className="flex items-center border border-[#151515] rounded-xl px-3 py-2 focus-within:ring-2 ring-[#50f1be]">
            <FaPhoneAlt className="text-[#151515] mr-2" />
            <input
              type="tel"
              placeholder="Enter phone number"
              className="w-full outline-none bg-transparent text-[#151515]"
            />
          </div>
        </div>

        {/* Password */}
        <div className="mb-4">
          <label className="block text-[#151515] font-semibold mb-1">
            Password
          </label>
          <div className="flex items-center border border-[#151515] rounded-xl px-3 py-2 focus-within:ring-2 ring-[#50f1be]">
            <FaLock className="text-[#151515] mr-2" />
            <input
              type="password"
              placeholder="Create password"
              className="w-full outline-none bg-transparent text-[#151515]"
            />
          </div>
        </div>

        {/* Confirm Password */}
        <div className="mb-6">
          <label className="block text-[#151515] font-semibold mb-1">
            Confirm Password
          </label>
          <div className="flex items-center border border-[#151515] rounded-xl px-3 py-2 focus-within:ring-2 ring-[#50f1be]">
            <FaLock className="text-[#151515] mr-2" />
            <input
              type="password"
              placeholder="Re-enter password"
              className="w-full outline-none bg-transparent text-[#151515]"
            />
          </div>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-[#50f1be] hover:bg-[#45d8a8] text-black font-bold py-3 rounded-xl transition-all duration-300"
        >
          Register
        </motion.button>

        {/* Link to Sign In */}
        <div className="mt-4 text-center text-sm text-[#151515]">
          Already have an account?
          <a
            href="/signin"
            className="text-[#6ddee5] font-medium ml-1 hover:underline"
          >
            Sign In
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
