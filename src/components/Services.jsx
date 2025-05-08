import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const ServiceCard = ({ title, description, image }) => {
  return (
    <article
      className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg"
      aria-label={`Service: ${title}`}
    >
      <div className="w-28 h-24 mb-4">
        <img
          src={image}
          alt={`${title} icon`}
          className="w-full h-full object-contain"
        />
      </div>

      <h2 className="text-xl font-semibold text-gray-800 mb-2">{title}</h2>
      <p className="text-gray-600 text-sm mb-4">{description}</p>

      <a
        href="tel:+971551997029"
        className="mt-auto bg-white text-black hover:bg-orange-500 hover:text-white border-2 border-orange-500 px-3 py-2 rounded-md"
        aria-label={`Call now for ${title}`}
      >
        Call Now
      </a>
    </article>
  );
};

const ServiceCards = () => {
  const services = [
    {
      title: "TOWING SERVICE",
      description:
        "Your vehicle broken down on the road? Our towing service is ready to help you 24/7.",
      image: "/car-towing.png",
    },
    {
      title: "JUMP START",
      description: "Dead battery? We provide quick and efficient jump-starts.",
      image: "/jump-start.png",
    },
    {
      title: "CARS BREAKDOWN RECOVERY",
      description:
        "Facing a breakdown? We offer full car recovery solutions in minutes.",
      image: "/car-breakdown.png",
    },
    {
      title: "VEHICLE ACCIDENT RECOVERY",
      description:
        "Accident recovery experts ready for prompt and secure towing.",
      image: "/car-accident.png",
    },
    {
      title: "FLAT TIRE SERVICE",
      description:
        "Need a tire change on the spot? Our flat tire service comes to you fast.",
      image: "/flattyre-service.png",
    },
    {
      title: "FUEL DELIVERY",
      description: "Out of fuel? Get emergency fuel delivery at your location.",
      image: "/fuel-delivery.png",
    },
    {
      title: "BASEMENT PULL OUT",
      description: "Stuck in a basement? We safely pull your vehicle out.",
      image: "/basement-pullout.png",
    },
    {
      title: "BATTERY REPLACEMENT",
      description: "Car won’t start? We provide instant battery replacements.",
      image: "/battery-replacement.png",
    },
    {
      title: "SPORTS CARS RECOVERY SERVICES",
      description:
        "Handling exotic and luxury car recovery with expert care and safety.",
      image: "/sports-car-recovery.png",
    },
  ];

  return (
    <section
      className="px-6 md:px-12 py-8 bg-gray-50"
      aria-labelledby="our-services"
    >
      <h1
        id="our-services"
        className="text-center text-3xl md:text-5xl font-bold text-gray-800 mb-10"
      >
        Our Services
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/+971551997029"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-green-500 p-3 rounded-full shadow-lg hover:bg-green-600 transition"
        aria-label="Chat with us on WhatsApp"
      >
        <FaWhatsapp className="text-white text-4xl md:text-5xl" />
      </a>
    </section>
  );
};

export default ServiceCards;
