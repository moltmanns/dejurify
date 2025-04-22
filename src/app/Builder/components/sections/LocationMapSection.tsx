
import React from 'react';
import { cn } from '@/lib/utils';
import { MapPin, Phone, Mail } from 'lucide-react';

interface LocationMapSectionProps {
  style?: 'standard' | 'card' | 'fullwidth';
  headline?: string;
  address: string;
  phone?: string;
  email?: string;
  showMap?: boolean;
}

export const LocationMapSection: React.FC<LocationMapSectionProps> = ({
  style = 'standard',
  headline = 'Our Office',
  address = '123 Legal Avenue, Suite 400, New York, NY 10001',
  phone = '(555) 123-4567',
  email = 'info@lawfirm.com',
  showMap = true,
}) => {
  // Placeholder map embed - in a real app, you would use Google Maps or another mapping service
  const renderMap = () => (
    <div className="bg-gray-200 dark:bg-gray-700 w-full h-64 md:h-80 flex items-center justify-center">
      <MapPin className="h-12 w-12 text-gray-400 dark:text-gray-500" />
      <span className="ml-2 text-gray-600 dark:text-gray-400">Map would be embedded here</span>
    </div>
  );

  const renderStandardStyle = () => (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {headline && (
          <h2 className="text-3xl font-serif font-bold text-center mb-12">{headline}</h2>
        )}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            {showMap && renderMap()}
          </div>
          <div className="space-y-6">
            <div className="flex items-start">
              <MapPin className="h-5 w-5 text-legal-gold mr-3 mt-1" />
              <div>
                <h3 className="font-medium text-lg mb-1">Visit Us</h3>
                <p className="text-gray-600 dark:text-gray-400">{address}</p>
              </div>
            </div>
            {phone && (
              <div className="flex items-start">
                <Phone className="h-5 w-5 text-legal-gold mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Call Us</h3>
                  <p className="text-gray-600 dark:text-gray-400">{phone}</p>
                </div>
              </div>
            )}
            {email && (
              <div className="flex items-start">
                <Mail className="h-5 w-5 text-legal-gold mr-3 mt-1" />
                <div>
                  <h3 className="font-medium text-lg mb-1">Email Us</h3>
                  <p className="text-gray-600 dark:text-gray-400">{email}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const renderCardStyle = () => (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        {headline && (
          <h2 className="text-3xl font-serif font-bold text-center mb-12">{headline}</h2>
        )}
        <div className="bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
          {showMap && renderMap()}
          <div className="p-6 md:p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="flex flex-col items-center text-center">
                <div className="bg-legal-navy text-white p-3 rounded-full mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="font-medium text-lg mb-2">Address</h3>
                <p className="text-gray-600 dark:text-gray-400">{address}</p>
              </div>
              {phone && (
                <div className="flex flex-col items-center text-center">
                  <div className="bg-legal-navy text-white p-3 rounded-full mb-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">Phone</h3>
                  <p className="text-gray-600 dark:text-gray-400">{phone}</p>
                </div>
              )}
              {email && (
                <div className="flex flex-col items-center text-center">
                  <div className="bg-legal-navy text-white p-3 rounded-full mb-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <h3 className="font-medium text-lg mb-2">Email</h3>
                  <p className="text-gray-600 dark:text-gray-400">{email}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderFullwidthStyle = () => (
    <div className="bg-white dark:bg-gray-900">
      {headline && (
        <div className="container mx-auto px-4 py-12">
          <h2 className="text-3xl font-serif font-bold text-center">{headline}</h2>
        </div>
      )}
      {showMap && (
        <div className="w-full">
          {renderMap()}
        </div>
      )}
      <div className="container mx-auto px-4 py-12">
        <div className="bg-legal-navy text-white p-8 rounded-lg -mt-20 relative z-10 shadow-xl grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <MapPin className="h-8 w-8 mx-auto mb-4 text-legal-gold" />
            <h3 className="font-medium text-lg mb-2">Address</h3>
            <p className="text-gray-200">{address}</p>
          </div>
          {phone && (
            <div className="text-center">
              <Phone className="h-8 w-8 mx-auto mb-4 text-legal-gold" />
              <h3 className="font-medium text-lg mb-2">Phone</h3>
              <p className="text-gray-200">{phone}</p>
            </div>
          )}
          {email && (
            <div className="text-center">
              <Mail className="h-8 w-8 mx-auto mb-4 text-legal-gold" />
              <h3 className="font-medium text-lg mb-2">Email</h3>
              <p className="text-gray-200">{email}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  switch (style) {
    case 'card':
      return renderCardStyle();
    case 'fullwidth':
      return renderFullwidthStyle();
    default:
      return renderStandardStyle();
  }
};
