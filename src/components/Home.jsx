import React from "react";
import {
  FaWhatsapp,
  FaClock,
  FaShieldAlt,
  FaCarSide,
  FaMoneyBillWave,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

function Home() {
  return (
    <div>
      <Helmet>
        <title>
          Quick Shift Recovery – 24/7 Car Recovery Services in U.A.E.
        </title>
        <meta
          name="description"
          content="Fast & reliable 24/7 car recovery services in U.A.E. including towing, breakdown help, and emergency assistance. Call us now!"
        />
        <meta
          name="keywords"
          content="car recovery U.A.E., 24/7 towing service, vehicle recovery, breakdown assistance, emergency towing Dubai, Quick Shift Recovery"
        />
        <link rel="canonical" href="https://yourdomain.com/" />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Quick Shift Recovery",
              "image": "https://yourdomain.com/LOGO-RN.png",
              "url": "https://yourdomain.com",
              "telephone": "+971551997029",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "AE"
              },
              "description": "24/7 emergency car recovery and towing services across U.A.E.",
              "priceRange": "$$",
              "areaServed": {
                "@type": "Country",
                "name": "United Arab Emirates"
              }
            }
          `}
        </script>
      </Helmet>

      {/* Hero Section */}
      <div className="relative w-full md:h-screen h-[650px] overflow-hidden">
        <img
          src="/main-home-bg.png"
          alt="Emergency vehicle recovery service UAE"
          className="w-full h-full object-cover saturate-50"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center px-6 text-white z-10">
          <h1 className="text-sm md:text-5xl font-bold mb-4 md:mt-10">
            Fast & Reliable Vehicle Recovery Service
          </h1>
          <p className="text-xs md:text-xl">24/7 Emergency towing,</p>
          <p className="text-xs md:text-xl">Breakdown Assistance and more</p>
          <a
            href="tel:+971551997029"
            className="bg-orange-500 mt-4 hover:bg-white text-xs md:text-2xl text-white hover:text-orange-500 border-3 border-orange-500 font-bold py-2 px-2 md:py-2 ms:px-4 rounded inline-block"
          >
            Emergency Call Now
          </a>
        </div>
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+971551997029"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 p-2 rounded-full shadow-lg hover:bg-green-600 transition"
      >
        <FaWhatsapp className="text-white text-4xl md:text-5xl" />
      </a>

      {/* Services Section */}
      <section className="bg-[#111827] text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/car-towing.jpg"
              alt="Car being towed in UAE"
              className="rounded-lg shadow-lg"
            />
          </div>

          <div>
            <p className="text-orange-500 text-xs md:text-lg font-semibold uppercase mb-2">
              About Our Company
            </p>
            <h2 className="md:text-4xl text-xl font-bold mb-8">
              Why Choose Us?
            </h2>
            <div className="space-y-8">
              {[
                {
                  num: "01",
                  title: "24/7 Availability",
                  desc: "We provide immediate assistance anytime, ensuring you're never stranded on U.A.E.'s roads for long.",
                },
                {
                  num: "02",
                  title: "Experienced Professionals",
                  desc: "Our skilled team specializes in vehicle recovery, guaranteeing efficient and safe service you can trust.",
                },
                {
                  num: "03",
                  title: "Affordable Rates",
                  desc: "Enjoy competitive pricing with transparent quotes, ensuring you receive high-quality service.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-6">
                  <div className="bg-orange-500 text-white md:w-12 md:h-12 flex items-center justify-center rounded-full text-sm p-2 md:text-xl font-bold">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Image Gallery */}
      <section className="bg-gray-100 py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Image Gallery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              "Flatbed tow truck recovery",
              "Roadside breakdown recovery",
              "SUV towing in UAE",
              "Heavy vehicle towing in desert",
              "Emergency night towing",
              "Truck recovery UAE",
              "Desert vehicle assistance",
              "City car towing service",
            ].map((altText, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="w-full h-[250px] rounded-2xl overflow-hidden shadow hover:shadow-lg transition"
              >
                <img
                  src={`/truck-${idx + 1}.jpg`}
                  alt={altText}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="bg-gray-50 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="md:text-3xl text-xl font-bold mb-4">
            Why Choose Quick Shift Recovery for Car Recovery Services in U.A.E.?
          </h2>
          <p className="text-gray-600 mb-12">
            At Quick Shift Recovery, we provide the best car recovery service in
            U.A.E., ensuring fast, safe, and reliable assistance when you need
            it most. Here’s why you should choose us:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {[
              {
                icon: <FaClock />,
                title: "24/7 Car Recovery Near Me",
                desc: "We offer round-the-clock car breakdown recovery services across U.A.E..",
              },
              {
                icon: <FaShieldAlt />,
                title: "Fast & Efficient Recovery Vehicle",
                desc: "Our fleet of advanced recovery vehicles ensures quick and safe vehicle towing.",
              },
              {
                icon: <FaCarSide />,
                title: "Professional Towing Service",
                desc: "From compact cars to SUVs, our towing service U.A.E. handles all types of vehicles.",
              },
              {
                icon: <FaMoneyBillWave />,
                title: "Affordable & Transparent Pricing",
                desc: "Enjoy reliable car recovery U.A.E. services without breaking the bank.",
              },
            ].map((item, i) => (
              <div key={i} className="text-center flex flex-col items-center">
                <div className="text-orange-600 text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="bg-[#0f121b] text-white py-12 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <img
              src="/home-sec4.jpg"
              alt="Quick Shift Recovery tow vehicle"
              className="w-full rounded-lg shadow-md"
            />
          </div>
          <div>
            <p className="text-orange-500 font-semibold mb-2">
              ABOUT OUR COMPANY
            </p>
            <h2 className="text-4xl font-bold mb-6">What Sets Us Apart</h2>
            <div className="space-y-6">
              {[
                {
                  num: "01",
                  title: "Always Available",
                  desc: "We’re here for you 24/7, ready to assist so you're never left stranded on the road.",
                },
                {
                  num: "02",
                  title: "Trusted Experts",
                  desc: "Our experienced team ensures quick, efficient, and secure recovery services you can rely on.",
                },
                {
                  num: "03",
                  title: "Transparent & Fair Pricing",
                  desc: "We offer competitive rates with no hidden fees — just honest, high-quality service.",
                },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="bg-gray-800 text-orange-500 rounded-full md:w-12 md:h-12 flex items-center justify-center text-sm p-2 md:text-xl font-bold">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">{item.title}</h3>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
