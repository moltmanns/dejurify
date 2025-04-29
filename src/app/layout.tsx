import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner";
import { CookieConsent } from "./custom/CookieConsent";
import { ExitIntentPopup } from "./custom/ExitIntentPopup";

import { ClerkProvider } from "@clerk/nextjs";

// Fonts
const geistSans = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap", // Optional: improves CLS/performance
});

const geistMono = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

// Metadata for SEO/head
export const metadata: Metadata = {
  title: "Dejurify | Law Firm Website Builder",
  description: "Built with law firms in mind",
};

// Root Layout
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
<ClerkProvider
  publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
  signInUrl="/Signin"
  signUpUrl="/Signup"
  signInFallbackRedirectUrl="/Dashboard"
  signUpFallbackRedirectUrl="/Dashboard"
>
      <html>
        <body>
          <ExitIntentPopup />
          {children}
          <Toaster />
          <CookieConsent />
        </body>
      </html>
    </ClerkProvider>
  );
}
