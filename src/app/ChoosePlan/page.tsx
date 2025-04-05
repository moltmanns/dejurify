"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { useEffect } from "react";

const plans = [
  {
    title: "Starter",
    price: "$9/mo",
    features: ["Basic Templates", "Email Support"],
    highlight: false,
  },
  {
    title: "Pro",
    price: "$49/mo",
    features: ["Premium Templates", "Analytics", "Live Chat Support"],
    highlight: true,
  },
  {
    title: "Enterprise",
    price: "$99/mo",
    features: ["All Pro Features", "White Label", "Dedicated Support"],
    highlight: false,
  },
];

const ChoosePlan = () => {
  const router = useRouter();
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      router.push("/sign-in");
    }
  }, [user, router]);

  const handlePlanSelect = async (planTitle: string) => {
    if (!user) return;
  
    try {
      await user.updateUserMetadata({
        publicMetadata: {
          selectedPlan: planTitle,
        },
      });
  
      router.push("/dashboard");
    } catch (error) {
      console.error("Error updating user metadata:", error);
    }
  };
  

  return (
    <main className="min-h-screen px-4 py-20 bg-[#f9f9f9]">
      <div className="max-w-[1200px] mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Choose the Right Plan for Your Firm</h1>
        <p className="text-gray-500">Start your 14-day free trial. No credit card required.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {plans.map((plan, i) => (
          <div
            key={i}
            className={`rounded-xl p-6 shadow-sm bg-white text-left flex flex-col border ${
              plan.highlight ? "border-[#0a0a0a]" : "border-[#e5e5e5]"
            }`}
          >
            {plan.highlight && (
              <Badge variant="outline" className="mb-4 border-[#0a0a0a] text-[#0a0a0a]">
                Most Popular
              </Badge>
            )}
            <h3 className="text-xl font-semibold mb-2">{plan.title}</h3>
            <p className="text-3xl font-bold mb-4">{plan.price}</p>
            <ul className="text-sm text-gray-600 mb-6 space-y-2">
              {plan.features.map((feature, idx) => (
                <li key={idx}>• {feature}</li>
              ))}
            </ul>
            <Button className="mt-auto" onClick={() => handlePlanSelect(plan.title)}>
              Start 14-Day Trial
            </Button>
          </div>
        ))}
      </div>
    </main>
  );
};

export default ChoosePlan;