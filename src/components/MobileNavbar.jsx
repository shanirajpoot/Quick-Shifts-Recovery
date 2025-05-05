import React from "react";
import { Link } from "react-router-dom";

function MobileNavbar({ isOpen, toggle }) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden bg-[#6E7172] px-4 py-4 space-y-4">
      <button
        onClick={toggle}
        className="text-white mb-2 text-right block w-full"
      >
        ✖
      </button>
      <Link to="/" onClick={toggle} className="block text-white">
        Home
      </Link>
      <Link to="/about" onClick={toggle} className="block text-white">
        About
      </Link>
      <Link to="/services" onClick={toggle} className="block text-white">
        Services
      </Link>
      <Link to="/contact" onClick={toggle} className="block text-white">
        Contact
      </Link>
      <Link
        to="tel: +971551997029"
        className="block bg-white text-[#6E7172] text-center py-2 rounded"
      >
        Call Now
      </Link>
    </div>
  );
}

export default MobileNavbar;
