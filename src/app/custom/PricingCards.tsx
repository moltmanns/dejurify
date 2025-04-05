import React from "react";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    title: "Starter",
    price: "$9",
    description: "Lorem ipsum dolor sit amet consectetur. Tincidunt fermentum.",
    features: [
      "Included Feature #1",
      "Included Feature #2",
      "Included Feature #3",
      "Included Feature #4",
      "Included Feature #5",
    ],
  },
  {
    title: "Pro",
    price: "$49",
    description: "Ideal for growing businesses that need more features.",
    features: [
      "Everything in Starter",
      "Advanced Analytics",
      "Priority Support",
      "Custom Branding",
      "More Storage",
    ],
    isPro: true,
  },
  {
    title: "Enterprise",
    price: "$99",
    description: "For large firms needing complete control and scalability.",
    features: [
      "Everything in Pro",
      "Dedicated Account Manager",
      "Custom API Access",
      "Unlimited Storage",
      "24/7 Premium Support",
    ],
  },
];

export const PricingCards = () => {
  return (
    <section className="mt-16 z-1">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {plans.map((plan, index) => (
          <div 
            key={index} 
            className="relative bg-[#1c1c1c] text-white p-6 md:p-8 rounded-2xl shadow-md transition-all hover:scale-[1.02]"
          >
            {/* Badge for Pro Plan */}
            {plan.isPro && (
              <Badge
                variant="outline"
                className="absolute top-4 right-4 text-white border-[#808080] bg-transparent"
              >
                Most Popular
              </Badge>
            )}

            {/* Plan Title */}
            <h3 className="text-lg md:text-xl font-medium">{plan.title}</h3>

            {/* Price */}
            <div className="text-4xl md:text-5xl font-bold mt-2">
              {plan.price}
              <span className="text-base font-normal"> per month</span>
            </div>

            {/* Description */}
            <p id="pricing-p" className="text-sm mt-2">{plan.description}</p>

            {/* Divider */}
            <hr className="border-[#2C2C2C] my-4" />

            {/* Features List */}
            <h4 className="text-sm font-semibold mb-3">This Plan Includes:</h4>
            <ul className="space-y-3 text-[#808080] text-sm">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-[#808080] rounded-full"></span> {feature}
                </li>
              ))}
            </ul>

            {/* Button */}
            <button className="w-full mt-6 py-3 bg-white rounded-lg text-[#0a0a0a] font-medium hover:bg-[#0a0a0a] hover:text-white transition cursor-pointer">
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
