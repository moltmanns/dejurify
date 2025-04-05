"use client";

import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsVisible(false);
  };

  return (
    <div className={cn("fixed bottom-4 left-4 w-[350px] z-50", isVisible ? "block" : "hidden")}>
      <Card>
        <CardContent className="p-4">
          <p className="text-sm text-[#333333] dark:text-gray-300">
            We use cookies to enhance your experience and analyze site traffic. By clicking Accept, 
            you consent to our use of cookies. You can learn more in our{" "}
            <a href="/privacy-policy" className="underline text-[#0a0a0a] hover:text-[#808080]">
              Privacy Policy
            </a>.
          </p>
          <div className="flex justify-end gap-3 mt-4">
            <Button onClick={handleAccept} size="sm" className="cursor-pointer">
              Accept
            </Button>
            <Button variant="outline" onClick={handleDecline} size="sm" className="cursor-pointer">
              Decline
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
