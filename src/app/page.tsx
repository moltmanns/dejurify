import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Navbar } from "./custom/Navbar";
import { Hero } from "./custom/Hero";
import PainPoints from "./custom/PainPoints";
import { Marquee } from "./custom/Marquee";
import { Features } from "./custom/Features";
import HowItWorks from "./custom/HowItWorks";
import Pricing from "./custom/Pricing";
import Testimonials from "./custom/Testimonials";
import ClosingCTA from "./custom/ClosingCTA";
import Footer from "./custom/Footer";
import { toast } from "sonner"

export default function Home() {
  return (
    <main className="mx-6">
      <Navbar />
      <Hero />
      <Marquee />
      <PainPoints />
      <Features />
      <HowItWorks />
      <Pricing />
      <Testimonials />
      <ClosingCTA />
      <Footer />      
    </main>
  );
}

