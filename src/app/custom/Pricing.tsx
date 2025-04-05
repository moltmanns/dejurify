import React from "react";
import { Badge } from "@/components/ui/badge";
import { PricingCards } from "./PricingCards";

const Pricing = () => {
  return (
    <section className="relative flex flex-col p-10 md:p-20 lg:p-40 mt-4 bg-[#0A0A0A] text-white rounded-[24px] overflow-hidden">

      {/* Glowing Orb at the Bottom */}
      <div className="absolute bottom-[-100px] md:bottom-[-150px] left-1/2 transform -translate-x-1/2 w-[400px] h-[150px] md:w-[800px] md:h-[250px] bg-white opacity-10 blur-3xl rounded-full z-0"></div>

      <div className="container max-w-[1400px] mx-auto relative z-10 text-center lg:text-left">
        <Badge variant="outline" className="text-white border-[#3c3c3c]">
          Pricing
        </Badge>
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter mt-6">
          Affordable Plans for<br className="hidden md:inline" /> Every Practice
        </h2>
        <PricingCards />
      </div>

    </section>
  );
};

export default Pricing;
