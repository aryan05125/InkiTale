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
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (window.innerWidth >= 768) setIsOpen(true); // Auto-open sidebar for larger screens
      else setIsOpen(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const menu = [
    { path: "/", name: "Home", icon: <FaHome /> },
    { path: "/shop", name: "Shop", icon: <FaShoppingBag /> },
    { path: "/about", name: "About", icon: <FaInfoCircle /> },
    { path: "/contact", name: "Contact", icon: <FaEnvelope /> },
    { path: "/dashboard", name: "Dashboard", icon: <FaUserCircle /> },
    { path: "/signup", name: "Signup", icon: <FaSignInAlt /> },
  ];

  return (
    <>
      {/* Toggle Button (Visible in mobile only) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-white text-2xl p-3 fixed top-2 left-2 bg-black rounded-md z-50"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Sidebar */}
      <motion.div
        animate={{ width: isOpen ? "200px" : "0px" }}
        className={`h-screen bg-[#151515] text-white fixed top-0 left-0 shadow-xl z-40 flex flex-col transition-all duration-300 overflow-hidden`}
      >
        {/* Logo */}
        {isOpen && (
          <motion.h2
            className="text-center text-xl md:text-2xl font-bold text-[#50f1be] mb-6 mt-5"
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
              onClick={() => isMobile && setIsOpen(false)}
            >
              <span className="text-lg">{item.icon}</span>
              {isOpen && (
                <span className="text-sm md:text-base font-medium">
                  {item.name}
                </span>
              )}
            </NavLink>
          ))}
        </nav>
      </motion.div>

      {/* Content Overlay on Mobile when Sidebar is Open */}
      {isMobile && isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
};

export default Sidebar;
