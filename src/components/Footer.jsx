import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

function Footer() {
  return (
    <div>
      <footer
        className="text-gray-300 pt-12 pb-6 px-6 md:px-4"
        style={{
          background: "linear-gradient(to right, #6E7172, #4b4e4f)",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand & Description */}
          <div>
            <div className="text-white text-2xl font-bold flex items-center gap-2">
              <img
                src="/LOGO-RN.png"
                alt="Vehicle Recovery Hero"
                className="w-15 h-10 mr-2"
              />
              <span className="text-3xl whitespace-nowrap">
                <span className="text-[#00A9E2]">Quick</span> Shift
              </span>
            </div>
            <p className="mt-4">
              Reliable 24/7 car recovery and towing services in U.A.E. Fast
              response, professional service, and affordable rates.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 underline underline-offset-4 decoration-2 decoration-blue-200">
              Quick Links
            </h3>
            <ul className="space-y-2 text-white">
              <li className="flex items-center gap-2">
                <FaAngleRight className="text-orange-500" />
                <Link
                  to="/"
                  className="hover:text-orange-400 transition hover:underline"
                >
                  Home
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FaAngleRight className="text-orange-500" />
                <Link
                  to="/about"
                  className="hover:text-orange-400 transition hover:underline"
                >
                  About Us
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FaAngleRight className="text-orange-500" />
                <Link
                  to="/services"
                  className="hover:text-orange-400 transition hover:underline"
                >
                  Services
                </Link>
              </li>
              <li className="flex items-center gap-2">
                <FaAngleRight className="text-orange-500" />
                <Link
                  to="/contact"
                  className="hover:text-orange-400 transition hover:underline"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 underline underline-offset-4 decoration-2 decoration-blue-200">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-orange-500" />
                <a
                  href="tel:+971551997029"
                  className="hover:underline hover:text-orange-400"
                >
                  +971551997029
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-orange-500" />
                <a
                  href="tel:+971557241010"
                  className="hover:underline hover:text-orange-400"
                >
                  +971557241010
                </a>
              </li>

              <li className="flex items-center gap-2 hover:text-orange-400 hover:underline">
                <FaEnvelope className="text-orange-500" />
                <a
                  href="mailto:Quickshift1586@gmail.com"
                  className="hover:underline"
                >
                  Quickshift1586@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Location Info */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4 underline underline-offset-4 decoration-2 decoration-blue-200">
              Locations We Serve
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-orange-500" />
                <span>U.A.E.</span>
              </li>
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-orange-500" />
                <span>Abu Dhabi</span>
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-white mt-6 mb-2 underline underline-offset-4 decoration-2 decoration-blue-200">
              Our Office Location
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-orange-500" />
                <a
                  href="https://www.google.com/maps?q=24.351222,54.4935"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-orange-400"
                >
                  Our Location
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Quick Shift Recovery. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}

export default Footer;
