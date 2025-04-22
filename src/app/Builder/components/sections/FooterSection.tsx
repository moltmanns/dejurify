
import React from 'react';
import { cn } from '@/lib/utils';
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

interface FooterMenuItem {
  id: string;
  label: string;
  url: string;
}

interface FooterColumn {
  id: string;
  title: string;
  items: FooterMenuItem[];
}

interface FooterSectionProps {
  style?: 'standard' | 'centered' | 'minimal';
  logoText?: string;
  logoImage?: string;
  columns?: FooterColumn[];
  copyrightText?: string;
  showSocial?: boolean;
}

export const FooterSection: React.FC<FooterSectionProps> = ({
  style = 'standard',
  logoText = 'Law Firm',
  logoImage,
  columns = [],
  copyrightText = '© 2025 Law Firm. All rights reserved.',
  showSocial = true,
}) => {
  const renderSocialIcons = () => (
    <div className="flex space-x-4">
      <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
        <span className="sr-only">Facebook</span>
        <Facebook className="h-6 w-6" />
      </a>
      <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
        <span className="sr-only">Twitter</span>
        <Twitter className="h-6 w-6" />
      </a>
      <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
        <span className="sr-only">Instagram</span>
        <Instagram className="h-6 w-6" />
      </a>
      <a href="#" className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300">
        <span className="sr-only">LinkedIn</span>
        <Linkedin className="h-6 w-6" />
      </a>
    </div>
  );

  const renderStandardStyle = () => (
    <footer className="bg-gray-100 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-6">
              {logoImage ? (
                <img src={logoImage} alt={logoText} className="h-10" />
              ) : (
                <div className="text-2xl font-serif font-bold text-legal-navy">{logoText}</div>
              )}
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Providing expert legal services to individuals and businesses since 1995.
            </p>
            {showSocial && renderSocialIcons()}
          </div>
          
          {columns.map((column) => (
            <div key={column.id}>
              <h3 className="text-lg font-medium mb-4">{column.title}</h3>
              <ul className="space-y-3">
                {column.items.map((item) => (
                  <li key={item.id}>
                    <a 
                      href={item.url} 
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-gray-200 dark:border-gray-800 pt-8 mt-8 text-gray-600 dark:text-gray-400 text-sm flex flex-col sm:flex-row justify-between">
          <div>{copyrightText}</div>
          <div className="mt-2 sm:mt-0">
            <a href="#" className="hover:text-gray-900 dark:hover:text-gray-300 mr-4">Privacy Policy</a>
            <a href="#" className="hover:text-gray-900 dark:hover:text-gray-300">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );

  const renderCenteredStyle = () => (
    <footer className="bg-legal-navy text-white pt-16 pb-8">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-8">
          {logoImage ? (
            <img src={logoImage} alt={logoText} className="h-12 mx-auto" />
          ) : (
            <div className="text-3xl font-serif font-bold">{logoText}</div>
          )}
        </div>
        
        {columns.length > 0 && (
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 mb-10">
            {columns.flatMap((column) => 
              column.items.map((item) => (
                <a 
                  key={item.id} 
                  href={item.url} 
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item.label}
                </a>
              ))
            )}
          </div>
        )}
        
        {showSocial && (
          <div className="mb-10 flex justify-center">
            {renderSocialIcons()}
          </div>
        )}
        
        <div className="text-gray-400 text-sm">
          {copyrightText}
        </div>
      </div>
    </footer>
  );

  const renderMinimalStyle = () => (
    <footer className="bg-white dark:bg-gray-900 py-8 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            {logoImage ? (
              <img src={logoImage} alt={logoText} className="h-8 mr-3" />
            ) : (
              <div className="text-xl font-serif font-bold text-legal-navy dark:text-white mr-3">{logoText}</div>
            )}
            <span className="text-gray-600 dark:text-gray-400 text-sm">{copyrightText}</span>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            {columns.length > 0 && (
              <div className="flex flex-wrap gap-x-4 gap-y-2">
                {columns.flatMap((column) => 
                  column.items.slice(0, 3).map((item) => (
                    <a 
                      key={item.id} 
                      href={item.url} 
                      className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-300 text-sm"
                    >
                      {item.label}
                    </a>
                  ))
                )}
              </div>
            )}
            
            {showSocial && (
              <div className="flex space-x-2">
                <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                  <span className="sr-only">Facebook</span>
                  <Facebook className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                  <span className="sr-only">Twitter</span>
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                  <span className="sr-only">LinkedIn</span>
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
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
