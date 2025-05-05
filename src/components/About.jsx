import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

function About() {
  return (
    <div>
      <section className="bg-gray-100 py-16 px-6 md:px-12 ">
        <h2 className="text-5xl font-bold text-gray-800 mb-6 text-center">
          About Us
        </h2>
        <div className="main flex items-center justify-between space-x-2">
          <div className="max-w-6xl mx-auto">
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
            <ul className=" space-y-2 text-gray-700">
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
          <div className="image">
            <img
              src="/About-image.jpg" // Replace with actual image path
              alt="About Us"
              className="hidden md:block w-650 h-140 rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      <section className="bg-white md:py-16 py-3 px-6 md:px-12 flex flex-col items-center justify-center gap-8">
        <h1 className="text-center md:text-5xl text-3xl font-bold text-gray-800 ">
          Experience Our Services & Visit Us
        </h1>
        <div className="flex flex-wrap items-center justify-center md:gap-8 gap-2">
          {/* Video Section */}
          <div className="mt-12">
            <h3 className="md:text-2xl text-xl font-semibold text-gray-700 mb-4">
              Watch Our Service in Action
            </h3>
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
              <iframe
                className="md:w-140 md:h-120 w-full h-full"
                src="./Video-RA.mp4"
                title="Company Promo Video"
                frameBorder="0"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          {/* End of Video Section */}
          {/* Location Section */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Our Location
            </h3>
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              {/* Clickable overlay */}
              <div
                className="absolute inset-0 bg-black opacity-30 hover:opacity-50 cursor-pointer"
                onClick={() =>
                  window.open(
                    "https://www.google.com/maps?q=24.3512,54.4935",
                    "_blank"
                  )
                }
              />

              {/* Google Maps iframe */}
              <iframe
                className="md:w-140 md:h-120 w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11575.353709016426!2d54.4935!3d24.3512!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjTCsDIxJzA0LjQiTiA1NMKwMjknMzYuNiJF!5e0!3m2!1sen!2s!4v1714396721616!5m2!1sen!2s"
                title="Company Location"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
          {/* End of Location Section */}
        </div>
      </section>
      {/* End of Video and Location Section */}
      {/* Owners Section */}
      <section className="bg-white md:py-16 py-2 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-800 mb-10 text-center">
            Meet the Owners
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Owner 1 */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <img
                src="/owner-1(2).jpg" // Replace with actual image path
                alt="Owner 1"
                className="w-45 h-50 object-fit rounded-full mb-4 mx-auto shadow-md"
              />
              <h3 className="text-2xl font-semibold text-orange-500 mb-2">
                AMIR HAYAT
              </h3>
              <p className="text-gray-700 mb-4">Founder & Operations Manager</p>
              <p className="text-gray-600 mb-2 flex items-center gap-2">
                <FaPhoneAlt className="text-orange-500" />
                <a
                  href="tel:+971551997029"
                  className="hover:underline hover:text-orange-400"
                >
                  +971551997029
                </a>
              </p>
              <p className="text-gray-600 mb-2 flex items-center gap-2">
                <FaEnvelope className="text-orange-500" />
                <a
                  href="mailto:Quickshift1586@gmail.com"
                  className="hover:underline"
                >
                  Quickshift1586@gmail.com
                </a>
              </p>
            </div>

            {/* Owner 2 */}
            <div className="bg-gray-100 p-6 rounded-xl shadow-md">
              <img
                src="/owner2.jpg" // Replace with actual image path
                alt="Owner 1"
                className="w-45 h-50 rounded-full mb-4 mx-auto"
              />
              <h3 className="text-2xl font-semibold text-orange-500 mb-2">
                ASMAT IJAZ
              </h3>
              <p className="text-gray-700 mb-4">
                Co-Founder & Customer Relations
              </p>
              <p className="text-gray-600 mb-2 flex items-center gap-2">
                {" "}
                <FaPhoneAlt className="text-orange-500" />
                <a
                  href="tel:+971557241010"
                  className="hover:underline hover:text-orange-400"
                >
                  +971557241010
                </a>
              </p>
              <p className="text-gray-600 mb-2 flex items-center gap-2">
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
      {/* End of Owners Section */}
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
