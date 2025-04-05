import React from "react";

const logos = [
  "/assets/davis-law-office.svg",
  "/assets/lawzip-1.svg",
  "/assets/lawzip-1.svg",
  "/assets/lawzip-1.svg",
  "/assets/white-case.svg",
  "/assets/the-city-law-school.svg",
  "/assets/white-case.svg",
  "/assets/law-society-of-ontario.svg",
];

export const Marquee = () => {
  return (
    <div className="relative overflow-hidden max-h-[250px] bg-[#FCFCFC] py-10 text-center font-medium mt-8">
      
      <h3 className="relative text-base lg:text-lg text-[#0a0a0a] z-20 mb-8 md:mb-10 px-6 md:px-0">
        Trusted by these Top Law Firms Nationwide
      </h3>

      {/* Marquee Wrapper (Ensures Logos Don't Overflow) */}
      <div className="relative flex items-center justify-center w-full overflow-hidden">
        
        {/* Gradient Overlay (Left) - Now Positioned Correctly */}
        <div className="absolute left-0 top-0 h-full w-16 sm:w-24 md:w-32 bg-gradient-to-r from-[#FCFCFC] to-transparent z-10"></div>

        {/* Marquee Container */}
        <div className="marquee flex items-center gap-12 w-max animate-marquee">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="max-w-[140px] sm:max-w-[160px] md:max-w-[175px] h-auto"
            />
          ))}
          {/* Duplicate logos for smooth infinite effect */}
          {logos.map((logo, index) => (
            <img
              key={`duplicate-${index}`}
              src={logo}
              alt={`Logo ${index + 1}`}
              className="max-w-[140px] sm:max-w-[160px] md:max-w-[175px] h-auto"
            />
          ))}
        </div>

        {/* Gradient Overlay (Right) - Now Positioned Correctly */}
        <div className="absolute right-0 top-0 h-full w-16 sm:w-24 md:w-32 bg-gradient-to-l from-[#FCFCFC] to-transparent z-10"></div>
      </div>
    </div>
  );
};
