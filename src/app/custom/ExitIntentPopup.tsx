"use client";

import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Badge } from "@/components/ui/badge";

const EXIT_POPUP_KEY = "exit-popup-timestamp";
const REPEAT_DAYS = 3;

export function ExitIntentPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const lastShown = localStorage.getItem(EXIT_POPUP_KEY);
    const now = new Date().getTime();

    // Convert days to milliseconds
    const repeatThreshold = REPEAT_DAYS * 24 * 60 * 60 * 1000;

    // If the popup was shown in the last 3-4 days, don't show it again
    if (lastShown && now - parseInt(lastShown) < repeatThreshold) {
      return;
    }

    const handleExitIntent = (event: MouseEvent) => {
      if (event.clientY < 10 && !isVisible) {
        console.log("Exit intent detected, showing popup");
        setIsMounted(true); // Mount the modal first
        setTimeout(() => setIsVisible(true), 10); // Slight delay to trigger the transition
      }
    };

    document.addEventListener("mouseleave", handleExitIntent);

    return () => {
      document.removeEventListener("mouseleave", handleExitIntent);
    };
  }, [isVisible]);

  const handleClose = () => {
    localStorage.setItem(EXIT_POPUP_KEY, new Date().getTime().toString());
    setIsVisible(false); // Start the fade-out transition
    setTimeout(() => setIsMounted(false), 200); // Unmount after the transition completes
  };

  if (!isMounted) return null;

  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-center justify-center bg-black/50 transition-opacity duration-200 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`w-[350px] sm:w-[570px] mx-auto text-center rounded-2xl shadow-lg bg-white px-16 py-20 relative transition-all duration-200 transform ${
          isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        {/* Close Button (Top Right) */}
        <button
          className="absolute top-5 right-5 text-[#0a0a0a] hover:text-[#3c3c3c] transition cursor-pointer"
          onClick={handleClose}
        >
          <AiOutlineClose size={22} />
        </button>

        {/* Badge */}
        <Badge variant="secondary" className="mb-2">
          Free 14-Day Trial
        </Badge>

        {/* Dialog Header */}
        <div className="text-center mt-3">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#0a0a0a] mb-6">
            Already have a website?<br />No problem!
          </h2>
          <p className="text-[#333333] text-sm">
            Tired of relying on a developer? Try our <b>Free 14-day Trial</b><br />to manage your website faster, and hassle-free!
          </p>
        </div>

        {/* CTA Button */}
        <div className="flex justify-center mt-6">
          <button
            className="w-full max-w-[350px] bg-[#0a0a0a] text-white py-3 px-4 rounded-md text-sm font-medium hover:bg-[#3c3c3c] transition cursor-pointer"
            onClick={handleClose}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}
