"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-200 sticky top-0 z-50 bg-[#FCFCFC]">
      <nav className="flex justify-between items-center py-3 max-w-[1400px] mx-auto" aria-label="Main Navigation">

        {/* Logo */}
        <div className="flex items-center space-x-2">
          <Link href="/">
            <img src="/assets/main-dark 1.png" alt="Main Logo" className="h-8 w-auto" />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-12">
          <ul className="flex gap-8">
            <li><Link href="/templates" className="hover:text-gray-500">Templates</Link></li>
            <li><Link href="/how-it-works" className="hover:text-gray-500">How It Works</Link></li>
            <li><Link href="/pricing" className="hover:text-gray-500">Pricing</Link></li>
            <li><Link href="/contact" className="hover:text-gray-500">Contact</Link></li>
          </ul>
        </div>

        {/* Buttons & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
        <Link href="/Builder/pages/Index">
            <Button variant="outline" className="cursor-pointer">
              Builder
            </Button>
          </Link>

          <Link href="/Signin">
            <Button variant="outline" className="hidden md:flex cursor-pointer">
              Sign-in
            </Button>
          </Link>

          <Link href="/Signup">
            <Button className="cursor-pointer">
              Get Started
            </Button>
          </Link>

          {/* Hamburger Menu Button (Hidden on Desktop) */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2">
            {isMenuOpen ? <FiX className="h-6 w-6 text-[#0a0a0a]" /> : <FiMenu className="h-6 w-6 text-[#0a0a0a] cursor-pointer" />}
          </button>
        </div>

      </nav>

      {/* Mobile Menu (Slide-in from Right) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-lg transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden z-50`}
      >
        <div className="flex flex-col p-10">
          <button onClick={() => setIsMenuOpen(false)} className="absolute top-4 right-4 p-2">
            <FiX className="h-6 w-6 text-[#0a0a0a] cursor-pointer" />
          </button>

          <ul className="flex flex-col gap-6 text-lg mt-8">
            <li><Link href="/templates" className="hover:text-[#333333]" onClick={() => setIsMenuOpen(false)}>Templates</Link></li>
            <li><Link href="/how-it-works" className="hover:text-[#333333]" onClick={() => setIsMenuOpen(false)}>How It Works</Link></li>
            <li><Link href="/pricing" className="hover:text-[#333333]" onClick={() => setIsMenuOpen(false)}>Pricing</Link></li>
            <li><Link href="/contact" className="hover:text-[#333333]" onClick={() => setIsMenuOpen(false)}>Contact</Link></li>
          </ul>

          {/* Mobile Sign-in Button */}
          <Link href="/Signin">
            <Button className="mt-8 w-full cursor-pointer">Sign-in</Button>
          </Link>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mt-8">
            <a href="#" className="p-2 bg-[#0a0a0a] rounded-full hover:opacity-80 transition">
              <FaFacebookF className="text-white w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-[#0a0a0a] rounded-full hover:opacity-80 transition">
              <FaTwitter className="text-white w-4 h-4" />
            </a>
            <a href="#" className="p-2 bg-[#0a0a0a] rounded-full hover:opacity-80 transition">
              <FaLinkedinIn className="text-white w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};