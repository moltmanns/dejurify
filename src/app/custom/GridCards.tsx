import React from "react";
import { FaGavel } from "react-icons/fa"; // Example icon

const cardData = [
  {
    id: 1,
    image: "https://placehold.co/570x300",
    icon: <FaGavel className="text-[#3c3c3c] w-6 h-6" />,
    subtitle: "Customizable Templates",
    description: "Choose from templates designed for law firms, including practice areas, attorney profiles, and client testimonials.",
  },
  {
    id: 2,
    image: "https://placehold.co/570x300",
    icon: <FaGavel className="text-[#3c3c3c] w-6 h-6" />,
    subtitle: "Drag-and-Drop Editor",
    description: "No technical skills or coding knowledge needed. easily add or rearrange sections like practice areas, profiles, testimonials, and contact forms.",
  },
  {
    id: 3,
    image: "https://placehold.co/570x300",
    icon: <FaGavel className="text-[#3c3c3c] w-6 h-6" />,
    subtitle: "Built-In SEO/Analytic Tools",
    description: "Optimize your website with on-page SEO tools. Integrated sitemaps and meta tags help you rank on Google all accessed via admin dashboard.",
  },
  {
    id: 4,
    image: "https://placehold.co/570x300",
    icon: <FaGavel className="text-[#3c3c3c] w-6 h-6" />,
    subtitle: "Responsive Design",
    description: "Every site built with Company Name is fully responsive, looking great on desktops, tablets, and smartphones.",
  },
  {
    id: 5,
    image: "https://placehold.co/570x300",
    icon: <FaGavel className="text-[#3c3c3c] w-6 h-6" />,
    subtitle: "Client Testimonials",
    description: "Built-in testimonial sections help firms showcase positive client reviews, building credibility and trust with visitors.",
  },
  {
    id: 6,
    image: "https://placehold.co/570x300",
    icon: <FaGavel className="text-[#3c3c3c] w-6 h-6" />,
    subtitle: "Blogging and Content Management",
    description: "Easy-to-use blogging tools let firms create and publish articles, FAQs, and resources directly from the builder.",
  },
  {
    id: 7,
    image: "https://placehold.co/570x300",
    icon: <FaGavel className="text-[#3c3c3c] w-6 h-6" />,
    subtitle: "Appointment Booking Integration",
    description: "Add appointment booking forms or integrate third-party scheduling tools like Calendly to streamline client interactions.",
  },
  {
    id: 8,
    image: "https://placehold.co/570x300",
    icon: <FaGavel className="text-[#3c3c3c] w-6 h-6" />,
    subtitle: "Secure and Fast Hosting",
    description: "Provides secure hosting and SSL certificates, ensuring client data is protected and building visitor confidence at lightning fast speeds.",
  },
];

export const GridCards = () => {
  return (
    <section className="mb-55">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
        {cardData.map((card) => (
          <div key={card.id} className="flex flex-col gap-4">
            {/* Image */}
            <img 
              src={card.image} 
              alt={card.subtitle} 
              className="w-full h-auto object-cover rounded-[24px]" 
            />

            {/* Icon + Subtitle */}
            <div className="flex items-center gap-3">
              {card.icon}
              <h3 className="text-xl font-semibold text-[#0a0a0a]">{card.subtitle}</h3>
            </div>

            {/* Description */}
            <p className="max-w-[600px]">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
