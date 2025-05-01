"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useUser } from "@clerk/nextjs";
import { supabase } from "@/app/Builder/integrations/supabase/client";
import { toast } from "@/app/Builder/components/ui/sonner";
import { Button } from "@/components/ui/button";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/Builder/components/ui/tabs";
import { ArrowRight, X, CheckCircle } from "lucide-react";

interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  thumbnail_url: string;
  access_tier: "free" | "premium";
  pages?: string[];
}

const templateCategories = ["Free", "Premium"];

export default function ChooseTemplatePage() {
  const [templates, setTemplates] = useState<Template[]>([]);
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(null);
  const [confirmedTemplateId, setConfirmedTemplateId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("Free");
  const [loading, setLoading] = useState<boolean>(true);
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const router = useRouter();
  const { user, isLoaded } = useUser();
  const plan = user?.publicMetadata?.subscription_plan || "starter";

  useEffect(() => {
    const fetchTemplates = async () => {
      const { data, error } = await supabase.from("templates").select("*");
      if (error) {
        console.error("Error fetching templates:", error);
      } else {
        setTemplates(data || []);
      }
      setLoading(false);
    };
    fetchTemplates();
  }, []);

  useEffect(() => {
    if (!isLoaded || templates.length === 0) return;
    const storedId = localStorage.getItem("confirmedTemplateId");
    if (!storedId) return;
    const found = templates.find((t) => t.id === storedId);
    const isAllowed = found?.access_tier === "free" || plan !== "starter";
    if (found && isAllowed) {
      setConfirmedTemplateId(storedId);
    }
  }, [isLoaded, templates]);

  const filteredTemplates = templates.filter((template) =>
    activeCategory === "Free"
      ? template.access_tier === "free"
      : template.access_tier === "premium"
  );

  const handleTemplateSelect = (template: Template) => {
    if (template.access_tier === "premium" && plan === "starter") {
      setShowUpgradeModal(true);
      return;
    }
    setSelectedTemplate(template);
  };

  const handleCreateProject = async () => {
    const chosenTemplate = templates.find((t) => t.id === confirmedTemplateId);
    if (!chosenTemplate) {
      toast.error("Please select a template first");
      return;
    }
    try {
      const res = await fetch("/api/clone-template", {
        method: "POST",
        body: JSON.stringify({ templateId: chosenTemplate.id }),
        credentials: "include",
        headers: { "Content-Type": "application/json" },
      });
      if (!res.ok) throw new Error("Failed to clone template");
      const { siteId } = await res.json();
      toast.success("Template cloned successfully");
      router.push(`/Builder/page/${siteId}`);
    } catch (err) {
      console.error(err);
      toast.error("An error occurred while creating the project");
    }
  };

  const handleStartFromScratch = () => {
    router.push("/custom-site");
  };
  

  const confirmTemplate = (id: string) => {
    setConfirmedTemplateId(id);
    localStorage.setItem("confirmedTemplateId", id);
    setSelectedTemplate(null);
  };

  if (loading || !isLoaded) return <div className="p-10 text-center">Loading templates...</div>;

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="w-full max-w-[1400px] flex flex-col gap-10">
        <h2 className="text-3xl font-bold">Choose a Template</h2>

        <Tabs defaultValue="Free" value={activeCategory} onValueChange={setActiveCategory}>
          <TabsList className="mb-6 flex gap-2 overflow-x-auto whitespace-nowrap justify-start">
            {templateCategories.map((category) => (
              <TabsTrigger
                key={category}
                value={category}
                className="cursor-pointer transition hover:text-primary hover:underline"
              >
                {category}
              </TabsTrigger>
            ))}
          </TabsList>

          <TabsContent value={activeCategory}>
            <div className="h-[500px] overflow-y-auto pl-2 pr-4 py-4 scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredTemplates.map((template) => {
                  const isSelected = confirmedTemplateId === template.id;
                  return (
                    <div
                      key={template.id}
                      onClick={() => handleTemplateSelect(template)}
                      className={`relative border rounded-lg overflow-hidden cursor-pointer transition-all hover:shadow-md ${
                        isSelected ? "ring-2 ring-primary border-primary" : "hover:border-gray-400"
                      }`}
                    >
                      <div className={`absolute top-2 left-2 text-xs px-2 py-0.5 rounded-full shadow-sm ${
                          template.access_tier === "free" ? "bg-[#707070]" : "bg-[#0a0a0a]"
                        } text-white`}>
                        {template.access_tier === "free" ? "Free" : "Pro"}
                      </div>

                      {isSelected && (
                        <div className="absolute top-2 right-2 bg-primary text-white text-xs px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
                          <CheckCircle className="w-4 h-4" />
                          Selected
                        </div>
                      )}

                      <div className="aspect-video bg-muted">
                        <img
                          src={template.thumbnail_url}
                          alt={template.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="text-lg font-semibold">{template.name}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{template.description}</p>
                        <div className="mt-3 flex flex-wrap gap-1">
                          {(template.pages || []).map((page) => (
                            <span
                              key={`${template.id}-${page}`}
                              className="bg-muted px-2 py-0.5 text-xs rounded"
                            >
                              {page}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {activeCategory === "Free" && plan === "starter" && (
                <div className="mt-8 text-center text-sm text-muted-foreground">
                  <p>Want access to more premium templates?</p>
                  <Button className="mt-2 cursor-pointer" onClick={() => router.push("/Dashboard/billing")}>
                    Upgrade to Pro
                  </Button>
                </div>
              )}
            </div>
          </TabsContent>
        </Tabs>

        <div className="flex justify-between gap-4">
          <Button variant="outline" onClick={handleStartFromScratch} className="cursor-pointer">
            Start from scratch
          </Button>
          <Button
            onClick={handleCreateProject}
            disabled={!confirmedTemplateId}
            className={`gap-2 transition cursor-pointer ${
              confirmedTemplateId
                ? "bg-primary text-white hover:bg-primary/90"
                : "bg-muted text-muted-foreground cursor-not-allowed opacity-50"
            }`}
          >
            Continue with template
            <ArrowRight size={16} />
          </Button>
        </div>
      </div>

      {selectedTemplate && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white w-[90vw] max-w-6xl h-[80vh] rounded-lg overflow-hidden relative shadow-xl">
            <button
              onClick={() => setSelectedTemplate(null)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 cursor-pointer transition"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="flex h-full">
              <div className="w-4/5 bg-gray-100">
                <iframe
                  src={selectedTemplate.thumbnail_url}
                  title="Template Preview"
                  className="w-full h-full"
                />
              </div>
              <div className="w-1/4 p-6 overflow-y-auto flex flex-col">
                <h2 className="text-lg font-bold mt-10 mb-2">{selectedTemplate.name}</h2>
                <p className="text-sm text-muted-foreground mb-6">{selectedTemplate.description}</p>
                <Button
                  className="w-full mt-auto cursor-pointer"
                  onClick={() => confirmTemplate(selectedTemplate.id)}
                >
                  Use this Template
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}

      {showUpgradeModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-white max-w-md w-full rounded-lg p-6 shadow-xl">
            <h2 className="text-xl font-semibold mb-2">Upgrade to Pro</h2>
            <p className="text-sm text-muted-foreground mb-4">
              This template is part of the Pro plan. Upgrade your subscription to unlock all premium designs and features.
            </p>
            <div className="flex justify-end gap-2">
              <Button
                variant="ghost"
                onClick={() => setShowUpgradeModal(false)}
                className="cursor-pointer"
              >
                Cancel
              </Button>
              <Button onClick={() => router.push("/Dashboard/billing")} className="cursor-pointer">
                Upgrade to Pro
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
