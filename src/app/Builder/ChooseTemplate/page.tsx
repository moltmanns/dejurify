"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/app/Builder/integrations/supabase/client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AiOutlineClose } from "react-icons/ai";

interface Template {
  id: string;
  name: string;
  description: string;
  thumbnail_url: string;
  category: string;
}

const practiceAreas = [
  "All",
  "Personal Injury",
  "Family",
  "Criminal Defense",
  "Estate",
  "Corporate",
  "Real Estate",
  "Divorce",
];

export default function ChooseTemplatePage() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();

  useEffect(() => {
    const fetchTemplates = async () => {
      const { data, error } = await supabase
        .from("templates")
        .select("*");

      if (error) {
        console.error("Failed to fetch templates:", error);
      } else {
        setTemplates(data || []);
      }
      setLoading(false);
    };

    fetchTemplates();
  }, []);

  const handleSelectTemplate = async (templateId: string) => {
    try {
      const res = await fetch("/api/clone-template", {
        method: "POST",
        body: JSON.stringify({ templateId }),
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
      });
      

      if (!res.ok) {
        throw new Error("Failed to clone template");
      }

      const { siteId } = await res.json();
      router.push(`/Builder/${siteId}`);
    } catch (error) {
      console.error("Error selecting template", error);
    }
  };

  const filteredTemplates = selectedCategory === "All"
    ? templates
    : templates.filter((template) => template.category === selectedCategory);

  if (loading) return <div className="p-10 text-center">Loading templates...</div>;

  return (
    <main className="mx-6">
      <div className="max-w-[1400px] mx-auto mt-20 mb-40">
        
        {/* Header Section */}
        <div className="text-center mb-20">
          <Badge variant="outline">Templates</Badge>
          <h1 className="text-4xl lg:text-6xl font-semibold tracking-tighter mt-6">
            Choose Your Law Firm Website
          </h1>
          <p className="mt-8 text-gray-600">
            Select from professionally designed templates tailored for attorneys.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
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
                <img src={template.thumbnail_url} alt={template.name} className="w-full h-full object-cover" />
              </div>
              <h3 className="text-sm font-medium text-[#0a0a0a]">{template.name}</h3>
            </div>
          ))}
        </div>
      </div>

      {/* Template Preview Modal */}
      {selectedTemplate && (
        <>
          {/* Prevent background scrolling when modal open */}
          <style jsx global>{`
            body {
              overflow: hidden;
            }
          `}</style>

          <div className="fixed inset-0 bg-black/50 transition-opacity flex items-center justify-center z-50">
            <div className="bg-white rounded-lg overflow-hidden flex w-[90vw] lg:w-[80vw] h-[85vh] shadow-xl relative">
              
              {/* Close Button */}
              <button 
                className="absolute top-4 right-4 text-[#0a0a0a] hover:text-[#3c3c3c] cursor-pointer"
                onClick={() => {
                  setSelectedTemplate(null);
                  document.body.style.overflow = "auto"; // Restore scrolling on close
                }}
              >
                <AiOutlineClose className="w-6 h-6" />
              </button>

              {/* Template Preview (Left) */}
              <div className="w-[80%] bg-gray-100 relative">
                <iframe
                  src={selectedTemplate.thumbnail_url}
                  className="w-full h-full overflow-y-auto border-r-1 border-bg-[#808080]"
                  title="Template Preview"
                ></iframe>
              </div>

              {/* Template Info + Get Started (Right) */}
              <div className="w-[20%] bg-white text-[#0a0a0a] p-6 flex flex-col">
                <h2 className="text-xl font-semibold">{selectedTemplate.name}</h2>
                <hr className="border-[#808080] my-4" />
                <p className="text-sm text-[#0a0a0a] mt-4">{selectedTemplate.description}</p>

                {/* Get Started */}
                <Button
                  className="mt-auto w-full"
                  onClick={() => handleSelectTemplate(selectedTemplate.id)}
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
