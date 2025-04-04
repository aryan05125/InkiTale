import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#151515] text-white py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col items-center space-y-6 sm:space-y-8">

        {/* Logo */}
        <h1 className="text-2xl sm:text-3xl font-bold text-center">InkiTale Book Store</h1>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-6">
          <a href="#" className="hover:text-[#50f1be] transition-all duration-300">
            <FontAwesomeIcon icon={faFacebook} size="lg" />
          </a>
          <a href="#" className="hover:text-[#50f1be] transition-all duration-300">
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a href="#" className="hover:text-[#50f1be] transition-all duration-300">
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
          <a href="#" className="hover:text-[#50f1be] transition-all duration-300">
            <FontAwesomeIcon icon={faLinkedin} size="lg" />
          </a>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base">
          <Link to="/" className="hover:text-[#50f1be] transition-all duration-300">Home</Link>
          <Link to="/about" className="hover:text-[#50f1be] transition-all duration-300">About</Link>
          <Link to="/contact" className="hover:text-[#50f1be] transition-all duration-300">Contact</Link>
          <Link to="/shop" className="hover:text-[#50f1be] transition-all duration-300">Shop</Link>
          <Link to="/dashboard" className="hover:text-[#50f1be] transition-all duration-300">User Dashboard</Link>
        </div>

        {/* Copyright */}
        <p className="text-xs sm:text-sm text-center">&copy; 2025 InkiTale Book Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
