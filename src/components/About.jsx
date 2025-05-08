import React from "react";
import { Helmet } from "react-helmet";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

function About() {
  return (
    <div>
      <Helmet>
        <title>
          About Quick Shift Recovery – 24/7 Car Towing Services U.A.E.
        </title>
        <meta
          name="description"
          content="Learn more about Quick Shift Recovery – your trusted 24/7 car towing and roadside assistance partner in the U.A.E. Fast response, affordable rates, and professional service."
        />
        <meta
          name="keywords"
          content="About Quick Shift Recovery, 24/7 towing UAE, emergency car recovery, roadside help, quick tow, vehicle breakdown"
        />
        <link rel="canonical" href="https://yourdomain.com/about" />

        {/* Open Graph Meta Tags */}
        <meta
          property="og:title"
          content="About Quick Shift Recovery – 24/7 Towing UAE"
        />
        <meta
          property="og:description"
          content="Quick Shift Recovery provides reliable 24/7 car towing and roadside help across the U.A.E. Learn about our mission, services, and team."
        />
        <meta property="og:url" content="https://yourdomain.com/about" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Quick Shift Recovery" />
        <meta
          property="og:image"
          content="https://yourdomain.com/about-us-preview.jpg"
        />
        <meta property="og:locale" content="en_AE" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="About Quick Shift Recovery – 24/7 Car Towing Services UAE"
        />
        <meta
          name="twitter:description"
          content="Meet the team behind Quick Shift Recovery, your go-to towing service in the UAE. Available 24/7 for emergencies and breakdowns."
        />
        <meta
          name="twitter:image"
          content="https://yourdomain.com/about-us-preview.jpg"
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
            "@type": "Organization",
            "name": "Quick Shift Recovery",
            "url": "https://yourdomain.com/about",
            "logo": "https://yourdomain.com/logo.png",
            "description": "Quick Shift Recovery offers 24/7 towing and roadside assistance across the U.A.E.",
            "contactPoint": [
              {
                "@type": "ContactPoint",
                "telephone": "+971551997029",
                "contactType": "Customer Service",
                "areaServed": "AE",
                "availableLanguage": ["English", "Arabic", "Urdu"]
              },
              {
                "@type": "ContactPoint",
                "telephone": "+971557241010",
                "contactType": "Customer Service",
                "areaServed": "AE",
                "availableLanguage": ["English", "Arabic", "Urdu"]
              }
            ],
            "founders": [
              {
                "@type": "Person",
                "name": "Amir Hayat",
                "jobTitle": "Founder & Operations Manager"
              },
              {
                "@type": "Person",
                "name": "Asmat Ijaz",
                "jobTitle": "Co-Founder & Customer Relations"
              }
            ],
            "address": {
              "@type": "PostalAddress",
              "addressCountry": "AE"
            },
            "sameAs": [
              "https://wa.me/+971551997029"
            ]
          }
          `}
        </script>
      </Helmet>

      {/* The rest of your About content remains unchanged */}
      {/* ... */}
    </div>
  );
}

export default About;
