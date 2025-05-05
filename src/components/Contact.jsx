import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCheck,
} from "react-icons/fa";

function Contact() {
  return (
    <div className="max-w-5xl mb-10 mt-10 mx-auto bg-white shadow-md rounded-lg p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Contact Form */}
      <div>
        <div className="max-w-3xl mx-auto md:p-6 p-2 text-gray-700">
          <p className="text-sm text-orange-500 font-semibold uppercase tracking-wide mb-2">
            Contact Us
          </p>
          <h2 className="md:text-5xl text-3xl font-bold text-black mb-4">
            Get In Touch
          </h2>
          <p className="mb-8 text-gray-600">
            Have questions or need assistance? Contact us anytime, day or night.
            Our friendly team is ready to help! Reach out via phone, email, or
            our online form. Your safety is our priority!
          </p>

          <div className="space-y-6">
            {/* Phone */}
            <div className="flex items-center gap-4">
              <div className="bg-red-100 p-3 rounded-full text-orange-500">
                <FaCheck />
              </div>
              <div>
                <p className="text-gray-500">Phone Call</p>

                <a
                  href="tel:+971551997029"
                  className="font-semibold text-black flex items-center gap-2 hover:underline"
                >
                  <FaPhoneAlt className="text-orange-500" /> +971551997029
                </a>

                <a
                  href="tel:+971557242010"
                  className="font-semibold text-black flex items-center gap-2 hover:underline"
                >
                  <FaPhoneAlt className="text-orange-500" /> +971557241010
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-center gap-4">
              <div className="bg-red-100 p-3 rounded-full text-orange-500">
                <FaCheck />
              </div>
              <div>
                <p className="text-gray-500">Email</p>
                <p className="font-semibold text-black flex items-center gap-2">
                  <FaEnvelope className="text-orange-500" />
                  <a
                    href="mailto:Quickshift1586@gmail.com"
                    className="hover:underline"
                  >
                    Quickshift1586@gmail.com
                  </a>
                </p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-4">
              <div className="bg-red-100 p-3 rounded-full text-orange-500">
                <FaCheck />
              </div>
              <div>
                <p className="text-gray-500">Location</p>
                <p className="font-semibold text-black flex items-center gap-2">
                  <FaMapMarkerAlt className="text-orange-500" /> U.A.E.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Suggestions + Thank You Message */}
      <div className="flex flex-col gap-6 mt-10 mb-10">
        <div className="bg-yellow-50 rounded-md p-6">
          <h3 className="text-xl font-semibold mb-4 text-orange-500">
            Helpful Tips
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700">
            <li>Include your exact location or nearest landmark.</li>
            <li>Make sure your phone is turned on and reachable.</li>
            <li>Mention if you’re on a highway, parking lot, or off-road.</li>
            <li>
              Let us know the type of vehicle and issue (e.g., flat tire, engine
              trouble).
            </li>
            <li>Stay safe and visible—turn on your hazard lights.</li>
          </ul>
        </div>

        {/* Thank You Message */}
        <div className="bg-orange-50 rounded-md p-6 text-center shadow">
          <h3 className="text-2xl font-bold text-orange-500 mb-2">
            Thank You!
          </h3>
          <p className="text-gray-700">
            Thank you for choosing our recovery service. We are committed to
            reaching you as quickly and safely as possible!
          </p>
        </div>
      </div>
      {/* WhatsApp Button */}
      <a
        href="https://wa.me/+971551997029"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 p-2 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp className="text-white text-4xl md:text-5xl" />
      </a>
    </div>
  );
}

export default Contact;
