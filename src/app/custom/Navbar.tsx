"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiMenu, FiX } from "react-icons/fi";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

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
            <li><Link href="/Templates" className="hover:text-gray-500">Templates</Link></li>
            <li><Link href="/HowItWorks" className="hover:text-gray-500">How It Works</Link></li>
            <li><Link href="/Pricing" className="hover:text-gray-500">Pricing</Link></li>
            <li><Link href="/Contact" className="hover:text-gray-500">Contact</Link></li>
          </ul>
        </div>

        {/* Buttons & Mobile Menu Toggle */}
        <div className="flex items-center space-x-4">
          {/* Authentication Buttons */}
          <SignedIn>
            <div className="flex items-center gap-4">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
          
          <SignedOut>
            <SignInButton forceRedirectUrl="/Dashboard">
              <Button variant="outline" className="hidden md:flex cursor-pointer">
                Sign In
              </Button>
            </SignInButton>
            
            <SignInButton forceRedirectUrl="/Dashboard">
              <Button className="hidden md:flex cursor-pointer">
                Get Started
              </Button>
            </SignInButton>
          </SignedOut>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)} 
            className="md:hidden p-2"
          >
            {isMenuOpen ? (
              <FiX className="h-6 w-6 text-[#0a0a0a]" />
            ) : (
              <FiMenu className="h-6 w-6 text-[#0a0a0a]" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden" onClick={() => setIsMenuOpen(false)}>
          <div 
            className="fixed top-0 right-0 h-full w-64 bg-white shadow-lg z-50"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col p-6 h-full">
              <button 
                onClick={() => setIsMenuOpen(false)} 
                className="self-end p-2 mb-4"
              >
                <FiX className="h-6 w-6 text-[#0a0a0a]" />
              </button>

              <ul className="flex flex-col gap-6 text-lg">
                <li>
                  <Link href="/templates" onClick={() => setIsMenuOpen(false)}>
                    Templates
                  </Link>
                </li>
                <li>
                  <Link href="/how-it-works" onClick={() => setIsMenuOpen(false)}>
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" onClick={() => setIsMenuOpen(false)}>
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/contact" onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </Link>
                </li>
              </ul>

              <div className="mt-auto">
                <SignedOut>
                  <SignInButton forceRedirectUrl="/Dashboard">
                    <Button className="w-full mt-4">Sign In</Button>
                  </SignInButton>
                </SignedOut>

                <SignedIn>
                  <div className="flex justify-center mt-4">
                    <UserButton afterSignOutUrl="/" />
                  </div>
                </SignedIn>

                <div className="flex justify-center gap-4 mt-8">
                  <a href="#" className="p-2 bg-[#0a0a0a] rounded-full">
                    <FaFacebookF className="text-white w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-[#0a0a0a] rounded-full">
                    <FaTwitter className="text-white w-4 h-4" />
                  </a>
                  <a href="#" className="p-2 bg-[#0a0a0a] rounded-full">
                    <FaLinkedinIn className="text-white w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};