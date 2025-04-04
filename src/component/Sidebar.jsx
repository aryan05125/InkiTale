import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import {
  FaHome,
  FaShoppingBag,
  FaInfoCircle,
  FaEnvelope,
  FaUserCircle,
  FaSignInAlt,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { motion } from "framer-motion";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  const menu = [
    { path: "/", name: "Home", icon: <FaHome /> },
    { path: "/shop", name: "Shop", icon: <FaShoppingBag /> },
    { path: "/about", name: "About", icon: <FaInfoCircle /> },
    { path: "/contact", name: "Contact", icon: <FaEnvelope /> },
    { path: "/dashboard", name: "Dashboard", icon: <FaUserCircle /> },
    { path: "/signup", name: "Signup", icon: <FaSignInAlt /> },
  ];

  // Detect screen width for responsiveness
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768); // md breakpoint
      if (window.innerWidth < 768) setIsOpen(false); // close sidebar on mobile by default
    };

    handleResize(); // set initial state
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div
      animate={{ width: isOpen ? (isMobile ? "200px" : "250px") : "60px" }}
      className="h-screen bg-[#151515] text-white fixed top-0 left-0 shadow-xl z-50 flex flex-col transition-all duration-300"
    >
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white text-xl p-4 focus:outline-none hover:text-[#6ddee5] transition-all self-end"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Logo */}
      {isOpen && (
        <motion.h2
          className="text-center text-xl md:text-2xl font-bold text-[#50f1be] mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          InkiTale 📚
        </motion.h2>
      )}

      {/* Navigation Menu */}
      <nav className="flex-1 flex flex-col gap-2 px-2 md:px-3 overflow-y-auto">
        {menu.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className={({ isActive }) =>
              `flex items-center gap-4 px-3 py-2 rounded-md hover:bg-[#6ddee5] hover:text-black transition-all duration-300 ${
                isActive ? "bg-[#50f1be] text-black" : ""
              }`
            }
            onClick={() => isMobile && setIsOpen(false)} // close sidebar on mobile after click
          >
            <span className="text-lg">{item.icon}</span>
            {isOpen && <span className="text-sm md:text-base font-medium">{item.name}</span>}
          </NavLink>
        ))}
      </nav>
    </motion.div>
  );
};

export default Sidebar;
