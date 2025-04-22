"use client";

import { ShieldCheckIcon } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/app/Builder/components/ui/alert";
import { motion } from "framer-motion";

export default function SecureActionNotice() {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className="fixed bottom-6 right-6 z-50 w-[320px] sm:w-[360px]"
    >
      <Alert
        variant="default"
        className="bg-muted border-border text-foreground shadow-lg px-5 py-4"
      >
        <div className="flex items-start gap-3">
          <ShieldCheckIcon className="h-5 w-5 text-green-600 mt-1" />

          <div className="flex-1">
            <AlertTitle className="text-sm font-semibold mb-1">
              Secure Area
            </AlertTitle>
            <AlertDescription className="text-sm text-muted-foreground leading-snug">
              Billing details are encrypted and protected. You may be asked to re-authenticate before making major changes.
            </AlertDescription>
          </div>
        </div>
      </Alert>
    </motion.div>
  );
}
