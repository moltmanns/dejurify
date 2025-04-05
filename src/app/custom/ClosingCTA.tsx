import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const ClosingCTA = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-6 py-16 md:py-24 lg:py-40 mt-20 mb-6 bg-[#0A0A0A] text-white rounded-[24px] overflow-hidden">
      
      {/* Glowing Orb at the Bottom */}
      <div className="absolute bottom-[-80px] md:bottom-[-120px] left-1/2 transform -translate-x-1/2 w-[400px] h-[120px] md:w-[600px] md:h-[180px] lg:w-[800px] lg:h-[250px] bg-white opacity-5 blur-[100px] rounded-full z-0"></div>

      <div className="container max-w-[1400px] mx-auto relative z-10">
        <h2 className="text-4xl lg:text-6xl font-semibold tracking-tighter my-6">
          Build Your Site. Grow Your<br className="hidden md:inline" /> Practice.
        </h2>

        <p id="hero-p" className="text-sm md:text-lg">
          Join hundreds of law firms who trust us to<br /> power their online presence.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center justify-center text-center mt-8">
          {/* Get Started Free Button */}
          <Link href="/signup">
            <Button className="px-6 py-3 w-[75%] md:w-auto cursor-pointer" variant="secondary">
              Get Started Free
            </Button>
          </Link>

          {/* See Templates Button */}
          <Link href="/Templates">
            <Button className="px-6 py-3 w-[75%] md:w-auto border border-[#808080] cursor-pointer" variant="ghost">
              See Templates
            </Button>
          </Link>
        </div>
      </div>
      
    </section>
  );
};

export default ClosingCTA;
