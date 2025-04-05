import React from "react";

const steps = [
  {
    title: "Choose a Professionally Designed Template",
    description: "Pick from stunning, law-focused website templates crafted to convert visitors into clients.",
    features: ["SEO-optimized", "Mobile-responsive", "Modern & sleek"],
    icon: "📌",
  },
  {
    title: "Customize with Our Easy-to-Use Website Builder",
    description: "Effortlessly edit your website with our drag-and-drop editor. No coding required!",
    features: ["Real-time editing", "Add law firm pages", "Integrate scheduling & chat"],
    icon: "🖊️",
  },
  {
    title: "Add Powerful Legal Features",
    description: "Enhance your site with features designed specifically for law firms.",
    features: ["Client intake forms", "Secure document uploads", "Live chat integration"],
    icon: "⚡",
  },
  {
    title: "Connect Your Branding & Go Live",
    description: "Make your site unique by adding your branding and optimizing it for SEO.",
    features: ["Custom domain", "Brand colors & logo", "Google-optimized"],
    icon: "🎨",
  },
  {
    title: "Launch & Start Getting Clients",
    description: "Once you're happy with your site, publish it and start attracting clients!",
    features: ["Track website analytics", "Capture leads", "Convert visitors into booked consultations"],
    icon: "🚀",
  },
];

const StepsSection = () => {
  return (
    <section className="max-w-[1400px] mx-auto py-20">
      <h2 className='text-4xl lg:text-5xl font-semibold tracking-tighter mt-6'>Step-by-Step Process</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mt-12">
        {steps.map((step, index) => (
          <div key={index} className="p-6 bg-[#1c1c1c] text-white rounded-xl shadow-md">
            <span className="text-3xl">{step.icon}</span>
            <h3 className="text-xl font-semibold mt-4">{step.title}</h3>
            <p className="text-gray-400 mt-2">{step.description}</p>
            <ul className="mt-4 text-sm text-[#808080] list-disc list-inside">
              {step.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StepsSection;
