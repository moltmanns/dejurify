"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function CustomSiteLandingPage() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <section className="flex-1 flex items-center justify-center px-6 py-20 bg-gradient-to-br from-gray-100 via-white to-gray-50">
        <div className="max-w-4xl w-full text-center space-y-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Want a Custom Law Firm Website Built <span className="text-primary">For You</span>?
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Skip the templates — let our expert team design and launch your firm’s website from scratch, built to convert and live in as little as <strong>7 days</strong>.
          </p>
          <div className="flex justify-center gap-4 flex-wrap">
            <Button
              size="lg"
              className="gap-2 cursor-pointer"
              onClick={() => router.push("/Contact?service=custom")}
            >
              Get a Quote
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              onClick={() => router.push("/Dashboard")}
              className="cursor-pointer"
            >
              Back to Dashboard
            </Button>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 px-6">
        <div className="max-w-[1400px] mx-auto grid md:grid-cols-3 gap-8 text-center">
          <div>
            <h3 className="text-xl font-semibold mb-2">Custom Strategy</h3>
            <p className="text-muted-foreground text-sm">
              We design based on your firm’s goals, specialties, and client personas.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Fully Managed</h3>
            <p className="text-muted-foreground text-sm">
              No DIY headaches — we handle everything from copy to code.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Live in 7 Days</h3>
            <p className="text-muted-foreground text-sm">
              Most custom sites are launched in a week or less — so you can get back to lawyering.
            </p>
          </div>
        </div>
      </section>

      <footer className="text-center text-muted-foreground text-xs py-6">
        © {new Date().getFullYear()} Your Brand Name — Custom Law Firm Websites
      </footer>
    </div>
  );
}
