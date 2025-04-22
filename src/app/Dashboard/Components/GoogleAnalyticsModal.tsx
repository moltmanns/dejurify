"use client";

import { useState, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function GoogleAnalyticsModal() {
  const [open, setOpen] = useState(false);
  const [gaConnected, setGaConnected] = useState(false);

  useEffect(() => {
    if (!gaConnected) {
      setOpen(true);
    }
  }, [gaConnected]);

  const handleConnect = () => {
    // TODO: Implement real Google OAuth logic
    alert("Redirecting to Google Analytics connection...");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="max-w-md text-center">
        <DialogHeader>
          {/* GA4 Logo */}
        <div className="flex justify-center mt-2 mb-4">
          <Image
            src="/assets/google-analytics-4.svg"
            alt="Google Analytics Logo"
            width={60}
            height={60}
          />
        </div>
        <DialogTitle className="font-semibold text-center text-foreground">
          Connect Google Analytics
        </DialogTitle>
        </DialogHeader>

        <p className="text-sm text-muted-foreground">
          View your site's traffic, user engagement, and marketing insights — all in your dashboard.
        </p>

        <Button onClick={handleConnect} className="mt-6 w-full py-6 cursor-pointer">
          Connect Google Analytics
        </Button>

        <Button
          variant="ghost"
          onClick={() => setOpen(false)}
          className="w-full mt-2 text-muted-foreground text-sm cursor-pointer"
        >
          Maybe Later
        </Button>
      </DialogContent>
    </Dialog>
  );
}
