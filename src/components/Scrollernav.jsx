import React from "react";
export default function Scrollernav() {
  const messages = [
    "Welcome to Quick Shifts Recovery Services",
    "24/7 Availability",
    "Fast, Reliable, and Affordable Support",
  ];

  return (
    <div className="ticker-wrapper">
      <div className="ticker">
        <div className="ticker-move">
          {[...messages, ...messages].map((msg, index) => (
            <span key={index}>{msg}</span>
          ))}
        </div>
      </div>
    </div>
  );
}
