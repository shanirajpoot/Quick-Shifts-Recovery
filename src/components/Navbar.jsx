import React, { useState } from "react";
import { Link } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import { Helmet } from "react-helmet";

function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const toggleMenu = () => {
    setIsMobileOpen((prev) => !prev);
  };

  return (
    <>
      {/* SEO and Meta Tags for Navbar */}
      <Helmet>
        <title>Quick Shift Recovery – Roadside Assistance Services</title>
        <meta
          name="description"
          content="Quick Shift Recovery offers 24/7 roadside assistance services like towing, jump-starts, tire changes, and more. Get help whenever you need it."
        />
        <meta
          name="keywords"
          content="roadside assistance, towing service, tire change, jump-start, car recovery, UAE"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Quick Shift Recovery – Roadside Assistance Services"
        />
        <meta
          property="og:description"
          content="Quick Shift Recovery offers 24/7 roadside assistance services like towing, jump-starts, tire changes, and more. Get help whenever you need it."
        />
        <meta property="og:image" content="/hero-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Quick Shift Recovery – Roadside Assistance Services"
        />
        <meta
          name="twitter:description"
          content="Quick Shift Recovery offers 24/7 roadside assistance services like towing, jump-starts, tire changes, and more. Get help whenever you need it."
        />
        <meta name="twitter:image" content="/hero-image.jpg" />
      </Helmet>

      {/* Desktop Header (visible on md and above) */}
      <nav className="hidden md:flex bg-[#6E7172] px-4 py-2 justify-between items-center sticky top-0 z-50">
        <div className="flex items-center text-white text-2xl font-bold">
          <Link to="/" className="flex items-center">
            <img src="/LOGO-RN.png" alt="Logo" className="w-15 h-10 mr-2" />
            <div className="nav-info leading-0">
              <p className="md:text-xl text-sm">
                <span className="text-[#00A9E2]">QUICK SHIFT </span> RECOVERY
              </p>
              <span className="text-xs">
                SERVICES AND GENERAL TRANSPORT-LLC
              </span>
            </div>
          </Link>
        </div>

        <div className="flex space-x-4">
          <Link
            to="/"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
          >
            About
          </Link>
          <Link
            to="/services"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
          >
            Services
          </Link>
          <Link
            to="/contact"
            className="text-white hover:bg-gray-700 px-3 py-2 rounded-md"
          >
            Contact
          </Link>
          <Link
            to="tel: +971551997029"
            className="bg-white text-black hover:bg-gray-700 hover:text-white border-2 px-3 py-2 rounded-md"
          >
            Call Now
          </Link>
        </div>
      </nav>

      {/* Mobile Header (visible below md) */}
      <nav className="md:hidden bg-[#6E7172] px-4 py-2 flex justify-between items-center">
        <div className="flex items-center text-white text-lg font-bold">
          <img src="/LOGO-RN.png" alt="Logo" className="w-12 h-8 mr-2" />
          <div className="nav-info leading-0">
            <p className="text-sm">
              <span className="text-[#019BBD]">QUICK SHIFT </span> RECOVERY
            </p>
            <span className="text-xs">SERVICES & GENERAL TRANSPORT</span>
          </div>
        </div>

        <button
          onClick={toggleMenu}
          className="text-white"
          aria-label="Toggle mobile menu"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z"
            />
          </svg>
        </button>
      </nav>

      {/* Conditional Mobile Nav */}
      <MobileNavbar isOpen={isMobileOpen} toggle={toggleMenu} />
    </>
  );
}

export default Navbar;
