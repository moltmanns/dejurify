"use client";

import { useState, useEffect } from "react";
import { Navbar } from "../custom/Navbar";
import Footer from "../custom/Footer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AiOutlineClose } from "react-icons/ai";
import TemplateCTA from "../custom/TemplateCTA";

const practiceAreas = [
  "All Products",
  "Personal Injury",
  "Family",
  "Criminal Defense",
  "Estate",
  "Corporate",
  "Real Estate",
  "Divorce",
];

const templates = [
  { id: 1, name: "Modern Injury Law", category: "Personal Injury", image: "/assets/template-1.jpg", tags: ["Personal Injury", "Auto Accidents"], description: "A modern, high-converting personal injury law website." },
  { id: 2, name: "Family Law Firm", category: "Family", image: "/assets/template-2.jpg", tags: ["Family Law", "Divorce"], description: "A warm, professional site for family law practitioners." },
  { id: 3, name: "Defense Attorney", category: "Criminal Defense", image: "/assets/template-3.jpg", tags: ["Criminal Defense", "Trial Lawyers"], description: "A bold and authoritative site for criminal defense lawyers." },
  { id: 4, name: "Estate Planning Experts", category: "Estate", image: "/assets/template-4.jpg", tags: ["Estate Law", "Wills & Trusts"], description: "A structured and reassuring site for estate planning attorneys." },
];

export default function TemplatesPage() {
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false); // New state for modal visibility

  const filteredTemplates =
    selectedCategory === "All Products"
      ? templates
      : templates.filter((template) => template.category === selectedCategory);

  // Handle modal open/close and body scroll
  useEffect(() => {
    if (selectedTemplate) {
      setIsModalOpen(true);
      document.body.style.overflow = "hidden";
    } else {
      setIsModalOpen(false);
      document.body.style.overflow = "auto";
    }
  }, [selectedTemplate]);

  const closeModal = () => {
    setSelectedTemplate(null);
  };

  return (
    <main className="mx-6">
      <Navbar />
      <div className="max-w-[1400px] mx-auto mt-20 mb-40">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <Badge variant="outline">Templates</Badge>
          <h1 className="text-4xl lg:text-6xl font-semibold tracking-tighter mt-6">
            Browse Our Library Of<br /> Templates
          </h1>
          <p className="mt-8">
            Every law firm is unique. Choose from professionally designed templates<br />
            tailored to your practice areas and client needs.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {practiceAreas.map((area) => (
            <button
              key={area}
              onClick={() => setSelectedCategory(area)}
              className={`px-3 py-1 text-sm rounded-full cursor-pointer border ${
                selectedCategory === area
                  ? "bg-[#0a0a0a] text-white border-[#3c3c3c]"
                  : "text-[#3c3c3c] border-[#808080] hover:bg-[#0a0a0a] hover:text-white"
              } transition`}
            >
              {area}
            </button>
          ))}
        </div>

        {/* Template Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredTemplates.map((template) => (
            <div 
              key={template.id} 
              className="p-4 border rounded-lg shadow-sm cursor-pointer transition hover:shadow-lg"
              onClick={() => setSelectedTemplate(template)}
            >
              <div className="w-full h-40 bg-[#808080] rounded-lg mb-4 overflow-hidden">
                <img 
                  src={template.image} 
                  alt={template.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              <h3 className="text-sm font-medium text-[#0a0a0a]">{template.name}</h3>
            </div>
          ))}
        </div>
      </div>

      <TemplateCTA />
      <Footer />

      {/* Template Preview Modal */}
      {isModalOpen && selectedTemplate && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg overflow-hidden flex flex-col lg:flex-row w-full max-w-6xl h-[90vh] shadow-xl relative">
            
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-10 text-[#0a0a0a] hover:text-[#3c3c3c] cursor-pointer bg-white rounded-full p-1"
              onClick={closeModal}
            >
              <AiOutlineClose className="w-6 h-6" />
            </button>

            {/* Template Preview - Full width on mobile, 80% on desktop */}
            <div className="w-full lg:w-[80%] h-[60%] lg:h-full bg-gray-100 relative">
              <img
                src={selectedTemplate.image}
                alt={selectedTemplate.name}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Description Section - Full width on mobile, 20% on desktop */}
            <div className="w-full lg:w-[20%] bg-white text-[#0a0a0a] p-6 flex flex-col border-t lg:border-t-0 lg:border-l border-[#808080]">
              
              {/* Template Name */}
              <h2 className="text-xl font-semibold">{selectedTemplate.name}</h2>
              
              {/* Divider */}
              <hr className="border-[#808080] my-4" />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mt-3">
                {selectedTemplate.tags.map((tag, index) => (
                  <Badge key={index} variant="outline" className="border-[#808080] text-[#0a0a0a]">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Description */}
              <p className="text-sm text-[#0a0a0a] mt-4">{selectedTemplate.description}</p>

              {/* Get Started Button */}
              <Button className="mt-auto w-full cursor-pointer">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}