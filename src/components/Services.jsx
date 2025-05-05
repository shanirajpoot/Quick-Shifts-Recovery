import React from "react";
import { Link } from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";

const ServiceCard = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center transition-transform duration-300 ease-out hover:scale-105 hover:shadow-lg">
      <div className="w-28 h-24  mb-4 ">
        <img src={image} alt={title} className="w-full h-full object-fit" />
      </div>

      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-4">{description}</p>
      <Link
        to="tel:+971551997029"
        className="mt-auto bg-white text-black hover:bg-orange-500 hover:text-white border-2 border-orange-500 px-3 py-2 rounded-md"
      >
        Call Now
      </Link>
    </div>
  );
};

const ServiceCards = () => {
  const services = [
    {
      title: "TOWING SERVICE",
      description:
        "Your Vehicle Broken Down In The Middle Of Road ? Need Car Towing ? Car Recovery Now Services will be on the way.",
      image: "/car-towing.png",
    },
    {
      title: "JUMP START",
      description:
        "We provide quick and efficient jump-starts to get you going again.",
      image: "/jump-start.png",
    },
    {
      title: "CARS BREAKDOWN RECOVERY",
      description:
        "Broken down? Help is on the way... Complete car recovery services.",
      image: "/car-breakdown.png",
    },
    {
      title: "VEHICLE ACCIDENT RECOVERY",
      description:
        "Accident? Our team provides prompt and reliable recovery services.",
      image: "/car-accident.png",
    },
    {
      title: "FLAT TIRE SERVICE",
      description:
        "Flat tire? Our mobile tire service gets you back on the road quickly.",
      image: "/flattyre-service.png",
    },
    {
      title: "FUEL DELIVERY",
      description:
        "Running out of fuel? We deliver fuel directly to your location.",
      image: "/fuel-delivery.png",
    },
    {
      title: "BASEMENT PULL OUT",
      description:
        "Stuck in a parking basement? We pull out your vehicle safely.",
      image: "/basement-pullout.png",
    },
    {
      title: "BATTERY REPLACEMENT",
      description: "We replace dead or failing car batteries on the spot.",
      image: "/battery-replacement.png",
    },
    {
      title: "SPORTS CARS RECOVERY SERVICES",
      description:
        "We handle high-end and sports car recovery with expert care.",
      image: "/sports-car-recovery.png",
    },
  ];

  return (
    <div className="main px-8 py-4">
      <h1 className="text-center md:text-5xl text-3xl mb-5">OUR SERVICES</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
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
};

export default ServiceCards;
