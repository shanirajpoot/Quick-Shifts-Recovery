import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

function About() {
  return (
    <div>
      {/* About Us Section */}
      <section className="bg-gray-100 py-16 px-6 md:px-12">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-10 text-center">
          About Us
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-10 max-w-6xl mx-auto">
          {/* Text Content */}
          <div className="w-full md:w-1/2">
            <p className="text-lg text-gray-700 mb-6">
              At <span className="font-semibold">Quick Shift Recovery</span>, we
              pride ourselves on being the most reliable and efficient vehicle
              towing and recovery service in the region. With years of hands-on
              experience and a team of trained professionals, we provide 24/7
              emergency assistance to get you back on the road—quickly and
              safely.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Whether it's a breakdown, accident recovery, flat tire, or
              out-of-gas situation, our mission is simple:{" "}
              <span className="italic">
                fast response, fair pricing, and friendly service
              </span>
              . Equipped with modern tow trucks and GPS-tracked dispatch, we
              ensure that help reaches you without delay—anytime, anywhere.
            </p>
            <h3 className="text-2xl font-semibold text-orange-500 mb-4">
              Why Choose Us?
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>✅ 24/7 Emergency Support</li>
              <li>✅ Fully Licensed & Insured Team</li>
              <li>✅ Fast Response Times</li>
              <li>✅ Affordable, Transparent Pricing</li>
              <li>✅ Local Experts You Can Trust</li>
            </ul>
            <p className="text-lg text-gray-700 mt-6">
              Your safety and satisfaction are our top priorities. When you're
              in a tough spot, count on{" "}
              <span className="font-semibold">Quick Shift Recovery</span> to
              provide dependable roadside support with care and professionalism.
            </p>
          </div>

          {/* Image */}
          <div className="w-full md:w-1/2">
            <img
              src="/About-image.jpg"
              alt="About Us"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Video and Map Section */}
      <section className="bg-white py-16 px-6 md:px-12">
        <h2 className="text-center text-3xl md:text-5xl font-bold text-gray-800 mb-12">
          Experience Our Services & Visit Us
        </h2>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          {/* Video */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
              Watch Our Service in Action
            </h3>
            <div className="rounded-lg overflow-hidden shadow-lg aspect-w-16 aspect-h-9">
              <iframe
                src="./Video-RA.mp4"
                title="Company Promo Video"
                frameBorder="0"
                allowFullScreen
                className="w-full h-72 md:h-96"
              ></iframe>
            </div>
          </div>

          {/* Map */}
          <div className="w-full lg:w-1/2">
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700 mb-4">
              Our Location
            </h3>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <div
                className="absolute inset-0 bg-black opacity-30 hover:opacity-50 cursor-pointer z-10"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps?q=24.3512,54.4935",
                    "_blank"
                  )
                }
              />
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11575.353709016426!2d54.4935!3d24.3512!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDIxJzA0LjQiTiA1NMKwMjknMzYuNiJF!5e0!3m2!1sen!2s!4v1714396721616!5m2!1sen!2s"
                title="Company Location"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-72 md:h-96"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Meet the Owners */}
      <section className="bg-white py-16 px-6 md:px-12">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-10">
          Meet the Owners
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Owner 1 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <img
              src="/owner-1(2).jpg"
              alt="AMIR HAYAT"
              className="w-40 h-40 object-cover rounded-full mb-4 mx-auto shadow"
            />
            <h3 className="text-2xl font-semibold text-orange-500">
              AMIR HAYAT
            </h3>
            <p className="text-gray-700 mb-4">Founder & Operations Manager</p>
            <div className="text-gray-600 space-y-2">
              <p className="flex items-center justify-center gap-2">
                <FaPhoneAlt className="text-orange-500" />
                <a
                  href="tel:+971551997029"
                  className="hover:underline hover:text-orange-400"
                >
                  +971551997029
                </a>
              </p>
              <p className="flex items-center justify-center gap-2">
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

          {/* Owner 2 */}
          <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center">
            <img
              src="/owner2.jpg"
              alt="ASMAT IJAZ"
              className="w-40 h-40 object-cover rounded-full mb-4 mx-auto shadow"
            />
            <h3 className="text-2xl font-semibold text-orange-500">
              ASMAT IJAZ
            </h3>
            <p className="text-gray-700 mb-4">
              Co-Founder & Customer Relations
            </p>
            <div className="text-gray-600 space-y-2">
              <p className="flex items-center justify-center gap-2">
                <FaPhoneAlt className="text-orange-500" />
                <a
                  href="tel:+971557241010"
                  className="hover:underline hover:text-orange-400"
                >
                  +971557241010
                </a>
              </p>
              <p className="flex items-center justify-center gap-2">
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
        </div>
      </section>

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

export default About;
