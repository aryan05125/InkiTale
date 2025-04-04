import React from "react";
import { motion } from "framer-motion";
import {
  FaUserCircle,
  FaBook,
  FaHeart,
  FaEnvelope,
  FaCogs,
  FaSignOutAlt,
} from "react-icons/fa";

const dashboardItems = [
  { icon: <FaUserCircle />, title: "My Profile", desc: "View & edit your profile" },
  { icon: <FaBook />, title: "My Orders", desc: "Track your purchased books" },
  { icon: <FaHeart />, title: "Wishlist", desc: "Books you love" },
  { icon: <FaEnvelope />, title: "Messages", desc: "Check messages & support" },
  { icon: <FaCogs />, title: "Settings", desc: "Update account settings" },
  { icon: <FaSignOutAlt />, title: "Logout", desc: "Sign out of your account" },
];

const UserDashboard = () => {
  return (
    <div className="bg-[#151515] min-h-screen text-white px-4 py-10 sm:px-6 md:px-10">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold text-center mb-10 text-[#50f1be]"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to Your Dashboard
      </motion.h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {dashboardItems.map((item, index) => (
          <motion.div
            key={index}
            className="bg-[#202020] rounded-2xl p-6 flex flex-col justify-between hover:shadow-2xl hover:scale-105 transition-all duration-300 cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 + index * 0.1 }}
          >
            <div className="text-[#6ddee5] text-4xl mb-4">{item.icon}</div>
            <h2 className="text-lg sm:text-xl font-semibold text-white">{item.title}</h2>
            <p className="text-[#bcbcbc] mt-1 text-sm sm:text-base">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default UserDashboard;
