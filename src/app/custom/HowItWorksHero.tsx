import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const HowItWorks = () => {
  return (
    <section className="relative my-6 bg-[#0A0A0A] text-white rounded-[24px] overflow-hidden">
        <div className="max-w-[1400px] flex flex-col items-center text-center py-40 mx-auto">

            {/* Badge */}
            <Badge variant="outline" className="text-white border-[#3c3c3c]">
                How It Works
            </Badge>

        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1em] mt-6">
        Build a Powerful, Client-Focused Law Firm Website in Minutes.
        </h1>
        <p className="mt-6 text-lg text-gray-400">
            We make it **easy** for law firms to create a **professional** and 
            **high-converting website**—without the hassle of coding or complex setups.
        </p>
        <Button className="cursor-pointer mt-6 md:mt-8 px-6 py-3" variant="secondary">
                  Get Started Free
                </Button>
        </div>
    </section>
  );
};

export default HowItWorks;
