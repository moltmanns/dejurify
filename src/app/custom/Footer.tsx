import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#0A0A0A] text-gray-400 py-16 px-6 rounded-[24px] mb-6">
      
      <div className="max-w-[1400px] mx-auto mb-10">
        {/* Logo Section */}
        <div className="text-white text-lg font-semibold max-w-[125px]">
          <img src="/assets/dejurify-logo-white.svg" alt="Main Logo- White" />
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto mb-12 lg:mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full text-left">
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-[#808080] text-sm lg:text-base">
              <li><a href="#" className="hover:text-white">Home</a></li>
              <li><a href="#" className="hover:text-white">Product</a></li>
              <li><a href="#" className="hover:text-white">Pricing</a></li>
              <li><a href="#" className="hover:text-white">Customer Reviews</a></li>
              <li><a href="#" className="hover:text-white">Templates</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">About Us</h4>
            <ul className="space-y-2 text-[#808080] text-sm lg:text-base">
              <li><a href="#" className="hover:text-white">Company</a></li>
              <li><a href="#" className="hover:text-white">Leadership</a></li>
              <li><a href="#" className="hover:text-white">Customers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-[#808080] text-sm lg:text-base">
              <li><a href="#" className="hover:text-white">Help Center</a></li>
              <li><a href="#" className="hover:text-white">FAQ</a></li>
              <li><a href="#" className="hover:text-white">Community</a></li>
              <li><a href="#" className="hover:text-white">Contact Us</a></li>
              <li><a href="#" className="hover:text-white">How It Works</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Helpful Links</h4>
            <ul className="space-y-2 text-[#808080] text-sm lg:text-base">
              <li><a href="#" className="hover:text-white">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white">Terms & Conditions</a></li>
              <li><a href="#" className="hover:text-white">Legal Center</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-[#2C2C2C] my-8 mx-auto max-w-[1400px]"></div>

      {/* Social Icons & Copyright */}
      <div className="max-w-[1400px] mx-auto flex flex-col md:flex-row items-start justify-between gap-6">
        
        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="#" className="p-3 border border-[#2C2C2C] rounded-lg hover:bg-[#2C2C2C] transition">
            <FaFacebookF className="text-white" />
          </a>
          <a href="#" className="p-3 border border-[#2C2C2C] rounded-lg hover:bg-[#2C2C2C] transition">
            <FaTwitter className="text-white" />
          </a>
          <a href="#" className="p-3 border border-[#2C2C2C] rounded-lg hover:bg-[#2C2C2C] transition">
            <FaLinkedinIn className="text-white" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-gray-500 text-sm">&copy; Dejurify LLC. {currentYear}. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
