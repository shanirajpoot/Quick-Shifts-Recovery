import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaAngleRight,
} from "react-icons/fa";
import { Helmet } from "react-helmet";

function Footer() {
  return (
    <>
      {/* SEO and Meta Tags for Footer */}
      <Helmet>
        <title>Quick Shift Recovery – Contact & Locations</title>
        <meta
          name="description"
          content="Quick Shift Recovery offers 24/7 car recovery and towing services across UAE. Contact us for roadside assistance, and learn about the locations we serve."
        />
        <meta
          name="keywords"
          content="car recovery, towing services, roadside assistance, UAE, contact, locations"
        />
        <meta name="robots" content="index, follow" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Quick Shift Recovery – Contact & Locations"
        />
        <meta
          property="og:description"
          content="Quick Shift Recovery offers 24/7 car recovery and towing services across UAE. Contact us for roadside assistance, and learn about the locations we serve."
        />
        <meta property="og:image" content="/footer-image.jpg" />
        <meta property="og:url" content="https://yourdomain.com/contact" />
        <meta property="og:type" content="website" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Quick Shift Recovery – Contact & Locations"
        />
        <meta
          name="twitter:description"
          content="Quick Shift Recovery offers 24/7 car recovery and towing services across UAE. Contact us for roadside assistance, and learn about the locations we serve."
        />
        <meta name="twitter:image" content="/footer-image.jpg" />
      </Helmet>

      <footer
        className="text-gray-300 pt-12 pb-6 px-6 md:px-4"
        style={{ background: "linear-gradient(to right, #6E7172, #4b4e4f)" }}
        aria-label="Footer"
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand & Description */}
          <section aria-labelledby="footer-brand">
            <div className="text-white text-2xl font-bold flex items-center gap-2">
              <img
                src="/LOGO-RN.png"
                alt="Quick Shift Logo"
                className="w-15 h-10 mr-2"
              />
              <span id="footer-brand" className="text-3xl whitespace-nowrap">
                <span className="text-[#00A9E2]">Quick</span> Shift
              </span>
            </div>
            <p className="mt-4">
              Reliable 24/7 car recovery and towing services in U.A.E. Fast
              response, professional service, and affordable rates.
            </p>
          </section>

          {/* Quick Links */}
          <nav aria-labelledby="quick-links">
            <h2
              id="quick-links"
              className="text-xl font-semibold text-white mb-4 underline underline-offset-4 decoration-2 decoration-blue-200"
            >
              Quick Links
            </h2>
            <ul className="space-y-2 text-white">
              {[
                { label: "Home", to: "/" },
                { label: "About Us", to: "/about" },
                { label: "Services", to: "/services" },
                { label: "Contact", to: "/contact" },
              ].map((link, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <FaAngleRight className="text-orange-500" />
                  <Link
                    to={link.to}
                    className="hover:text-orange-400 transition hover:underline"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact Info */}
          <section aria-labelledby="footer-contact">
            <h2
              id="footer-contact"
              className="text-xl font-semibold text-white mb-4 underline underline-offset-4 decoration-2 decoration-blue-200"
            >
              Contact
            </h2>
            <address className="not-italic space-y-2">
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-orange-500" />
                <a
                  href="tel:+971551997029"
                  className="hover:underline hover:text-orange-400"
                >
                  +971551997029
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaPhoneAlt className="text-orange-500" />
                <a
                  href="tel:+971557241010"
                  className="hover:underline hover:text-orange-400"
                >
                  +971557241010
                </a>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-orange-500" />
                <a
                  href="mailto:Quickshift1586@gmail.com"
                  className="hover:underline hover:text-orange-400"
                >
                  Quickshift1586@gmail.com
                </a>
              </div>
            </address>
          </section>

          {/* Location Info */}
          <section aria-labelledby="footer-location">
            <h2
              id="footer-location"
              className="text-xl font-semibold text-white mb-4 underline underline-offset-4 decoration-2 decoration-blue-200"
            >
              Locations We Serve
            </h2>
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

            <h2 className="text-xl font-semibold text-white mt-6 mb-2 underline underline-offset-4 decoration-2 decoration-blue-200">
              Our Office Location
            </h2>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-orange-500" />
                <a
                  href="https://www.google.com/maps?q=24.351222,54.4935"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline hover:text-orange-400"
                >
                  View on Map
                </a>
              </li>
            </ul>
          </section>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
          © {new Date().getFullYear()} Quick Shift Recovery. All rights
          reserved.
        </div>
      </footer>
    </>
  );
}

export default Footer;
