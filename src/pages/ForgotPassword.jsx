import React from "react";
import { motion } from "framer-motion";
import { FaEnvelopeOpenText } from "react-icons/fa";

const ForgotPassword = () => {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 bg-gradient-to-br from-[#151515] to-[#1f1f1f]">
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white w-full max-w-md p-6 sm:p-8 rounded-2xl shadow-2xl"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-[#151515] text-center mb-6 flex items-center justify-center gap-2">
          <FaEnvelopeOpenText className="text-[#50f1be]" />
          Forgot Password
        </h2>

        <p className="text-[#151515] text-sm text-center mb-6 px-1">
          Enter your email address and we’ll send you a link to reset your password.
        </p>

        {/* Email Input */}
        <div className="mb-6">
          <label className="block text-[#151515] font-semibold mb-1">Email</label>
          <div className="flex items-center border border-[#151515] rounded-xl px-3 py-2 focus-within:ring-2 ring-[#50f1be]">
            <FaEnvelopeOpenText className="text-[#151515] mr-2 text-sm sm:text-base" />
            <input
              type="email"
              placeholder="Enter your registered email"
              className="w-full outline-none bg-transparent text-[#151515] text-sm sm:text-base"
            />
          </div>
        </div>

        {/* Send Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-[#50f1be] hover:bg-[#45d8a8] text-black font-bold py-3 rounded-xl transition-all duration-300 text-sm sm:text-base"
        >
          Send Reset Link
        </motion.button>

        {/* Back to Sign In */}
        <div className="mt-4 text-center text-sm text-[#151515]">
          Remembered your password?
          <a href="/signin" className="text-[#6ddee5] font-medium ml-1 hover:underline">
            Sign In
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default ForgotPassword;
