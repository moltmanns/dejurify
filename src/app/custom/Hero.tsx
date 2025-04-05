import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center text-center mt-4 bg-[#0A0A0A] text-white rounded-[24px] min-h-[740px] md:min-h-[940px] px-8 md:px-12 lg:px-24 overflow-hidden">
      {/* Glowing Orb at the Top */}
      <div className="absolute top-[-150px] left-1/2 transform -translate-x-1/2 w-[500px] h-[150px] md:w-[800px] md:h-[250px] bg-white opacity-10 blur-3xl rounded-full"></div>

      <div className="max-w-[1400px] w-full mx-auto relative z-10">
        {/* Badge */}
        <Badge variant="outline" className="text-white border-[#3c3c3c] mt-16 md:mt-24">
        Sites Shouldn’t Take Weeks
        </Badge>

        {/* Heading */}
        <h1 className="mt-7 text-5xl md:text-7xl lg:text-8xl font-semibold leading-[1.1em] tracking-tighter">
          Ready to Build the Website Your Firm Deserves?
        </h1>

        {/* Subtext */}
        <p className="mt-6 md:mt-10 text-sm md:text-lg" id="hero-p">
          Build a professional, client-focused website in minutes with our easy-to-use<br className="hidden md:inline" />
          website builder designed just for law firms.
        </p>

        {/* CTA Button */}
        <Link href="/Signup" className="block cursor-pointer mt-8 md:mt-8">
        <div className="group relative inline-flex items-center justify-center w-full max-w-[300px] bg-white rounded-2xl px-5 py-4 transition-all duration-300 shadow-md hover:shadow-xl hover:-translate-y-1 hover:ring-2 hover:ring-[#0a0a0a]/20">

          {/* Centered Text */}
          <span className="text-start w-full text-base font-semibold text-[#0a0a0a] z-10">
            Get Started
          </span>

          {/* Animated Inner Trial Button */}
          <div className="absolute right-5 top-1/2 -translate-y-1/2 px-4 py-2 bg-[#0a0a0a] text-white text-sm font-semibold rounded-xl shadow-md transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 group-hover:bg-[#1a1a1a]">
            Free 14-Day Trial
          </div>

        </div>
      </Link>






        {/* Hero Image */}
        <img 
          src="/assets/hero-placeholder-img.png" 
          alt="Hero image" 
          className="mt-12 md:mt-20 max-w-full w-[100%] md:w-auto relative z-10"
        />
      </div>
    </section>
  );
};
