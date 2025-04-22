
import React from 'react';
import { cn } from '@/lib/utils';
import { Award } from 'lucide-react';

interface TrustBadge {
  id: string;
  name: string;
  imageUrl?: string;
}

interface TrustBadgesSectionProps {
  style?: 'logos' | 'cards' | 'banner';
  headline?: string;
  logos: TrustBadge[];
}

export const TrustBadgesSection: React.FC<TrustBadgesSectionProps> = ({
  style = 'logos',
  headline = 'Recognitions & Affiliations',
  logos,
}) => {
  const renderLogosStyle = () => (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {headline && (
          <h2 className="text-3xl font-serif font-bold text-center mb-12">{headline}</h2>
        )}
        <div className="flex flex-wrap justify-center items-center gap-12">
          {logos.map((logo) => (
            <div key={logo.id} className="flex flex-col items-center">
              {logo.imageUrl ? (
                <img 
                  src={logo.imageUrl} 
                  alt={logo.name} 
                  className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
                />
              ) : (
                <Award className="h-16 w-16 text-gray-400 dark:text-gray-600" />
              )}
              <span className="text-gray-600 dark:text-gray-400 text-sm mt-2">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCardsStyle = () => (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {headline && (
          <h2 className="text-3xl font-serif font-bold text-center mb-12">{headline}</h2>
        )}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {logos.map((logo) => (
            <div 
              key={logo.id} 
              className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-6 flex flex-col items-center justify-center hover:shadow-md transition-shadow duration-300"
            >
              {logo.imageUrl ? (
                <img 
                  src={logo.imageUrl} 
                  alt={logo.name} 
                  className="h-16 object-contain mb-4"
                />
              ) : (
                <Award className="h-16 w-16 text-legal-gold mb-4" />
              )}
              <span className="text-center font-medium">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBannerStyle = () => (
    <div className="bg-legal-navy text-white py-12">
      <div className="container mx-auto px-4">
        {headline && (
          <h2 className="text-2xl font-serif font-bold text-center mb-8">{headline}</h2>
        )}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((logo) => (
            <div key={logo.id} className="flex flex-col items-center">
              {logo.imageUrl ? (
                <img 
                  src={logo.imageUrl} 
                  alt={logo.name} 
                  className="h-14 object-contain brightness-0 invert hover:brightness-100 hover:invert-0 transition-all duration-300"
                />
              ) : (
                <Award className="h-14 w-14 text-gray-200" />
              )}
              <span className="text-gray-200 text-xs mt-2">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  switch (style) {
    case 'cards':
      return renderCardsStyle();
    case 'banner':
      return renderBannerStyle();
    default:
      return renderLogosStyle();
  }
};
