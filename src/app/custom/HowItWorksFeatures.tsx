import React from "react";

const features = [
  { title: "Lightning-Fast Setup", description: "Get online in minutes" },
  { title: "Zero Coding Needed", description: "No developers required" },
  { title: "Legal-Specific Templates", description: "Designed for law professionals" },
  { title: "Secure & Compliant", description: "SSL encryption + legal best practices" },
  { title: "Built-in SEO & Marketing Tools", description: "Get found on Google" },
];

const FeaturesSection = () => {
  return (
    <section className="max-w-[1400px] mx-auto py-20 px-6">
      <h2 className="text-3xl md:text-5xl font-semibold text-center">
        ✨ Why Law Firms Choose Us
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 mt-12">
        {features.map((feature, index) => (
          <div key={index} className="p-6 bg-[#1c1c1c] text-white rounded-xl shadow-md">
            <h3 className="text-xl font-semibold">{feature.title}</h3>
            <p className="text-gray-400 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
