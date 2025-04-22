'use client'
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

interface MenuItem {
  id: string;
  label: string;
  url: string;
}

interface HeaderSectionProps {
  style?: 'standard' | 'centered' | 'minimal';
  logoText?: string;
  logoImage?: string;
  menuItems?: MenuItem[];
  ctaText?: string;
  ctaUrl?: string;
}

export const HeaderSection: React.FC<HeaderSectionProps> = ({
  style = 'standard',
  logoText = 'Law Firm',
  logoImage,
  menuItems = [],
  ctaText = 'Free Consultation',
  ctaUrl = '#contact',
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const renderStandardStyle = () => (
    <header className="bg-white dark:bg-gray-900 py-4 border-b border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {logoImage ? (
              <img src={logoImage} alt={logoText} className="h-10" />
            ) : (
              <div className="text-2xl font-serif font-bold text-legal-navy dark:text-white">{logoText}</div>
            )}
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {menuItems.map((item) => (
                <a 
                  key={item.id} 
                  href={item.url}
                  className="text-gray-600 hover:text-legal-navy dark:text-gray-300 dark:hover:text-white font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            {ctaText && (
              <Button asChild className="bg-legal-gold hover:bg-legal-gold/90 text-white">
                <a href={ctaUrl}>
                  {ctaText}
                </a>
              </Button>
            )}
          </div>
          
          <button className="md:hidden" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={cn(
          "md:hidden py-4 space-y-4",
          mobileMenuOpen ? "block" : "hidden"
        )}>
          <nav className="flex flex-col space-y-4">
            {menuItems.map((item) => (
              <a 
                key={item.id} 
                href={item.url}
                className="text-gray-600 hover:text-legal-navy dark:text-gray-300 dark:hover:text-white font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {ctaText && (
            <Button asChild className="w-full bg-legal-gold hover:bg-legal-gold/90 text-white">
              <a href={ctaUrl}>
                {ctaText}
              </a>
            </Button>
          )}
        </div>
      </div>
    </header>
  );

  const renderCenteredStyle = () => (
    <header className="bg-white dark:bg-gray-900 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-6">
            {logoImage ? (
              <img src={logoImage} alt={logoText} className="h-12" />
            ) : (
              <div className="text-3xl font-serif font-bold text-legal-navy dark:text-white">{logoText}</div>
            )}
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <nav className="flex items-center space-x-6">
              {menuItems.map((item) => (
                <a 
                  key={item.id} 
                  href={item.url}
                  className="text-gray-600 hover:text-legal-navy dark:text-gray-300 dark:hover:text-white font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            {ctaText && (
              <Button asChild className="bg-legal-gold hover:bg-legal-gold/90 text-white">
                <a href={ctaUrl}>
                  {ctaText}
                </a>
              </Button>
            )}
          </div>
          
          <button className="md:hidden" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={cn(
          "md:hidden py-4 space-y-4",
          mobileMenuOpen ? "block" : "hidden"
        )}>
          <nav className="flex flex-col space-y-4 items-center">
            {menuItems.map((item) => (
              <a 
                key={item.id} 
                href={item.url}
                className="text-gray-600 hover:text-legal-navy dark:text-gray-300 dark:hover:text-white font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {ctaText && (
            <Button asChild className="w-full bg-legal-gold hover:bg-legal-gold/90 text-white">
              <a href={ctaUrl}>
                {ctaText}
              </a>
            </Button>
          )}
        </div>
      </div>
    </header>
  );

  const renderMinimalStyle = () => (
    <header className="bg-legal-navy text-white py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {logoImage ? (
              <img src={logoImage} alt={logoText} className="h-8" />
            ) : (
              <div className="text-xl font-serif font-bold">{logoText}</div>
            )}
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-4">
              {menuItems.map((item) => (
                <a 
                  key={item.id} 
                  href={item.url}
                  className="text-gray-200 hover:text-white text-sm font-medium"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            
            {ctaText && (
              <Button asChild size="sm" className="bg-legal-gold hover:bg-legal-gold/90 text-white">
                <a href={ctaUrl}>
                  {ctaText}
                </a>
              </Button>
            )}
          </div>
          
          <button className="md:hidden text-white" onClick={toggleMobileMenu}>
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        
        {/* Mobile menu */}
        <div className={cn(
          "md:hidden py-4 space-y-4",
          mobileMenuOpen ? "block" : "hidden"
        )}>
          <nav className="flex flex-col space-y-3">
            {menuItems.map((item) => (
              <a 
                key={item.id} 
                href={item.url}
                className="text-gray-200 hover:text-white font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {ctaText && (
            <Button asChild className="w-full bg-legal-gold hover:bg-legal-gold/90 text-white">
              <a href={ctaUrl}>
                {ctaText}
              </a>
            </Button>
          )}
        </div>
      </div>
    </header>
  );

  switch (style) {
    case 'centered':
      return renderCenteredStyle();
    case 'minimal':
      return renderMinimalStyle();
    default:
      return renderStandardStyle();
  }
};
