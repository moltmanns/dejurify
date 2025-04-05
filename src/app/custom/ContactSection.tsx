"use client";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ContactSection() {
  return (
    <section className="relative bg-[#0a0a0a] py-30 mt-6 flex justify-center rounded-[24px]">
      <div className="max-w-[1400px] w-full flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Left Side: Contact Info */}
        <div className="text-white md:w-1/2">
        <Badge variant="outline" className="text-white border-[#3c3c3c]">
          Contact Us
        </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tighter leading-[1.1em] mt-6">
            Always Available And Ready To Listen
          </h2>
          <p className="mt-6" id="pricing-p">
            Lorem ipsum dolor sit amet consectetur. Trididunt fermentum.
          </p>
          <div className="mt-8 space-y-3">
            <p className="flex items-center" id="pricing-p">
              ● <span className="ml-2">hello@companyname.com</span>
            </p>
            <p className="flex items-center" id="pricing-p">
              ● <span className="ml-2">+1 (555) 555-5555</span>
            </p>
            <p className="flex items-center" id="pricing-p">
              ● <span className="ml-2">1234 Main Street, Dubuque, Iowa 52002</span>
            </p>
          </div>
        </div>

        {/* Right Side: Contact Form */}
        <div className="bg-[#242424] p-6 md:p-8 rounded-xl shadow-lg md:w-1/2 w-full">
          <form className="space-y-4">
            {/* Name Field */}
            <div>
              <label className="text-[#808080] text-sm font-medium">Name</label>
              <Input
                type="text"
                placeholder="Enter your name"
                className="mt-1 bg-[#ffffff] text-[#808080] border border-[#3c3c3c] focus:ring-1 focus:ring-[#3c3c3c] outline-none"
              />
            </div>

            {/* Email Field */}
            <div>
              <label className="text-[#808080] text-sm font-medium">Email</label>
              <Input
                type="email"
                placeholder="Enter your email"
                className="mt-1 bg-[#ffffff] text-[#808080] border border-[#3c3c3c] focus:ring-1 focus:ring-[#3c3c3c] outline-none"
              />
            </div>

            {/* Message Field */}
            <div>
              <label className="text-[#808080] text-sm font-medium">Message</label>
              <Textarea
                placeholder="Type your message..."
                className="mt-1 bg-[#ffffff] text-[#808080] border border-[#3c3c3c] focus:ring-1 focus:ring-[#3c3c3c] outline-none resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button className="w-full bg-[#464646] text-white hover:bg-[#0a0a0a] transition cursor-pointer">
              Submit
            </Button>
          </form>
        </div>
      </div>

        {/* Glowing Orb at the Bottom */}
      <div className="absolute bottom-[-50px] md:bottom-[-150px] left-1/2 transform -translate-x-1/2 w-[400px] h-[150px] md:w-[800px] md:h-[250px] bg-white opacity-10 blur-3xl rounded-full z-0"></div>

    </section>
  );
}
