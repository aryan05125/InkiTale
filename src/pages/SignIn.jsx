import React from "react";
import { motion } from "framer-motion";
import { FaUser, FaLock, FaSignInAlt } from "react-icons/fa";

const Signin = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-[#151515] to-[#1f1f1f]">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white w-full sm:max-w-sm md:max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl"
      >
        <h2 className="text-2xl sm:text-3xl font-bold text-[#151515] text-center mb-6 flex items-center justify-center gap-2">
          <FaSignInAlt /> Sign In to InkiTale
        </h2>

        {/* Email Input */}
        <div className="mb-5">
          <label className="block text-[#151515] font-semibold mb-1">Email</label>
          <div className="flex items-center border border-[#151515] rounded-xl px-3 py-2 focus-within:ring-2 ring-[#50f1be]">
            <FaUser className="text-[#151515] mr-2" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full outline-none bg-transparent text-[#151515] text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Password Input */}
        <div className="mb-3">
          <label className="block text-[#151515] font-semibold mb-1">Password</label>
          <div className="flex items-center border border-[#151515] rounded-xl px-3 py-2 focus-within:ring-2 ring-[#50f1be]">
            <FaLock className="text-[#151515] mr-2" />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full outline-none bg-transparent text-[#151515] text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Forgot Password */}
        <div className="text-right text-sm mb-5">
          <a
            href="/forgot-password"
            className="text-[#6ddee5] hover:underline transition-all duration-300"
          >
            Forgot Password?
          </a>
        </div>

        {/* Submit Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-[#50f1be] hover:bg-[#45d8a8] text-black font-bold py-3 rounded-xl transition-all duration-300"
        >
          Login
        </motion.button>

        {/* Secondary Links */}
        <div className="mt-4 text-center text-sm text-[#151515]">
          Don’t have an account?
          <a
            href="/signup"
            className="text-[#6ddee5] font-medium ml-1 hover:underline"
          >
            Sign Up
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default Signin;
