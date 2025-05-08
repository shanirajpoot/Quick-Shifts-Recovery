import React from "react";
import { Helmet } from "react-helmet";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

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
    <div>
      <Helmet>
        <title>Our Services – Quick Shift Recovery</title>
        <meta
          name="description"
          content="Explore the wide range of services provided by Quick Shift Recovery. From towing to tire service, we're ready to assist you 24/7."
        />
        <meta
          name="keywords"
          content="24/7 towing, jump-start service, vehicle breakdown recovery, flat tire assistance, emergency fuel delivery, battery replacement"
        />
        <link rel="canonical" href="https://yourdomain.com/services" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="Our Services – Quick Shift Recovery"
        />
        <meta
          property="og:description"
          content="Explore Quick Shift Recovery's comprehensive services for roadside assistance, including towing, tire change, jump-start, and more."
        />
        <meta property="og:url" content="https://yourdomain.com/services" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Quick Shift Recovery" />
        <meta
          property="og:image"
          content="https://yourdomain.com/service-preview.jpg"
        />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Our Services – Quick Shift Recovery"
        />
        <meta
          name="twitter:description"
          content="Quick Shift Recovery offers 24/7 vehicle recovery services in the U.A.E. From towing to tire change, we're here to help!"
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/service-preview.jpg"
        />
        <meta name="twitter:site" content="@QuickShiftUAE" />

        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Quick Shift Recovery" />
        <meta name="geo.region" content="AE" />
        <meta name="geo.placename" content="U.A.E." />
        <meta name="geo.position" content="24.3512;54.4935" />
        <meta name="ICBM" content="24.3512, 54.4935" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="global" />
        <meta name="theme-color" content="#ff6600" />
        <meta name="copyright" content="Quick Shift Recovery © 2025" />
        <meta name="language" content="English" />

        {/* Structured Data (JSON-LD) */}
        <script type="application/ld+json">
          {`
          {
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Towing & Roadside Assistance",
            "provider": {
              "@type": "Organization",
              "name": "Quick Shift Recovery",
              "url": "https://yourdomain.com/services",
              "logo": "https://yourdomain.com/logo.png",
              "description": "Quick Shift Recovery offers 24/7 emergency towing, tire changes, jump-starts, and more.",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+971551997029",
                "contactType": "Customer Service",
                "areaServed": "AE",
                "availableLanguage": ["English", "Arabic", "Urdu"]
              }
            },
            "offers": [
              {
                "@type": "Offer",
                "priceCurrency": "AED",
                "eligibleRegion": "UAE",
                "price": "Varies"
              }
            ]
          }
          `}
        </script>
      </Helmet>

      {/* The rest of your ServiceCards content remains unchanged */}
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
    </div>
  );
};

export default ServiceCards;
