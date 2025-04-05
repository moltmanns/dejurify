"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const testimonials = [
  {
    id: 1,
    rating: 4.8,
    review:
      "Lorem ipsum dolor sit amet consectetur. Velit imperdiet diam leo dolor arcu. Velit imperdiet diam leo dolor arcu.",
    name: "Person's Name",
    title: "Job Title, Company Name",
  },
  {
    id: 2,
    rating: 4.8,
    review:
      "Lorem ipsum dolor sit amet consectetur. Velit imperdiet diam leo dolor arcu. Velit imperdiet diam leo dolor arcu.",
    name: "Person's Name",
    title: "Job Title, Company Name",
  },
  {
    id: 3,
    rating: 4.8,
    review:
      "Lorem ipsum dolor sit amet consectetur. Velit imperdiet diam leo dolor arcu. Velit imperdiet diam leo dolor arcu.",
    name: "Person's Name",
    title: "Job Title, Company Name",
  },
  {
    id: 4,
    rating: 4.8,
    review:
      "Lorem ipsum dolor sit amet consectetur. Velit imperdiet diam leo dolor arcu. Velit imperdiet diam leo dolor arcu.",
    name: "Person's Name",
    title: "Job Title, Company Name",
  },
  {
    id: 5,
    rating: 4.8,
    review:
      "Lorem ipsum dolor sit amet consectetur. Velit imperdiet diam leo dolor arcu. Velit imperdiet diam leo dolor arcu.",
    name: "Person's Name",
    title: "Job Title, Company Name",
  },
  {
    id: 6,
    rating: 4.8,
    review:
      "Lorem ipsum dolor sit amet consectetur. Velit imperdiet diam leo dolor arcu. Velit imperdiet diam leo dolor arcu.",
    name: "Person's Name",
    title: "Job Title, Company Name",
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-[1400px] mx-auto pt-20 pb-10 text-center">
      {/* Section Header */}
      <Badge variant="outline">Testimonials</Badge>
      <h2 className="text-4xl lg:text-6xl font-semibold tracking-tighter mt-6">
        Here’s What Other Attorneys <br className="hidden md:inline"/> Are Saying
      </h2>
      <p className="mt-6">
        See how law firms like yours are growing with our platform.
      </p>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-20">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={testimonial.id}
            className="bg-white shadow-md rounded-xl p-6 text-left border border-gray-200 hover:shadow-lg transition-shadow"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            {/* Star Rating */}
            <div className="flex items-center space-x-1">
              {[...Array(5)].map((_, i) => (
                <FaStar
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(testimonial.rating)
                      ? "text-[#0a0a0a]" // Filled star color
                      : "text-gray-300" // Empty star color
                  }`}
                />
              ))}
              <span className="text-sm text-gray-600 ml-2">
                {testimonial.rating}
              </span>
            </div>

            {/* Review Text */}
            <p className="text-gray-700 mt-3 text-sm leading-relaxed">
              “{testimonial.review}”
            </p>

            {/* User Info */}
            <div className="flex items-center mt-6">
              <div className="w-8 h-8 bg-[#0a0a0a] rounded-full flex items-center justify-center">
                <span className="text-white text-sm font-bold"> </span>
              </div>
              <div className="ml-2">
                <p className="text-sm font-semibold">{testimonial.name}</p>
                <p className="text-sm">{testimonial.title}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
