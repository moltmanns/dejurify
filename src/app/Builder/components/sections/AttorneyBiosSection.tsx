
import React from 'react';
import { cn } from '@/lib/utils';
import { User } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

interface Attorney {
  id: string;
  name: string;
  title: string;
  bio: string;
  imageUrl?: string;
  specialties?: string[];
}

interface AttorneyBiosSectionProps {
  style?: 'cards' | 'list' | 'grid';
  headline?: string;
  attorneys: Attorney[];
}

export const AttorneyBiosSection: React.FC<AttorneyBiosSectionProps> = ({
  style = 'cards',
  headline = 'Our Legal Team',
  attorneys,
}) => {
  const renderCardsStyle = () => (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {headline && (
          <h2 className="text-3xl font-serif font-bold text-center mb-12">{headline}</h2>
        )}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {attorneys.map((attorney) => (
            <Card key={attorney.id} className="overflow-hidden">
              <div 
                className="h-64 bg-gray-200 dark:bg-gray-700 flex items-center justify-center"
                style={
                  attorney.imageUrl 
                    ? {
                        backgroundImage: `url(${attorney.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                    : {}
                }
              >
                {!attorney.imageUrl && <User className="h-16 w-16 text-gray-400 dark:text-gray-500" />}
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-semibold mb-1">{attorney.name}</h3>
                <p className="text-legal-gold font-medium mb-3">{attorney.title}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{attorney.bio}</p>
                {attorney.specialties && attorney.specialties.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {attorney.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderListStyle = () => (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {headline && (
          <h2 className="text-3xl font-serif font-bold text-center mb-12">{headline}</h2>
        )}
        <div className="space-y-8 max-w-4xl mx-auto">
          {attorneys.map((attorney) => (
            <div key={attorney.id} className="flex flex-col md:flex-row gap-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <div 
                className="h-48 w-48 rounded-full mx-auto md:mx-0 bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0 overflow-hidden"
                style={
                  attorney.imageUrl 
                    ? {
                        backgroundImage: `url(${attorney.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                    : {}
                }
              >
                {!attorney.imageUrl && <User className="h-16 w-16 text-gray-400 dark:text-gray-500" />}
              </div>
              <div>
                <h3 className="text-xl font-serif font-semibold md:text-left text-center mb-1">{attorney.name}</h3>
                <p className="text-legal-gold font-medium md:text-left text-center mb-3">{attorney.title}</p>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{attorney.bio}</p>
                {attorney.specialties && attorney.specialties.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {attorney.specialties.map((specialty, index) => (
                      <Badge key={index} variant="secondary">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderGridStyle = () => (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {headline && (
          <h2 className="text-3xl font-serif font-bold text-center mb-12">{headline}</h2>
        )}
        <div className="grid gap-y-12 gap-x-8 md:grid-cols-2">
          {attorneys.map((attorney) => (
            <div key={attorney.id} className="flex gap-4">
              <div 
                className="h-20 w-20 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center flex-shrink-0 overflow-hidden"
                style={
                  attorney.imageUrl 
                    ? {
                        backgroundImage: `url(${attorney.imageUrl})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }
                    : {}
                }
              >
                {!attorney.imageUrl && <User className="h-10 w-10 text-gray-400 dark:text-gray-500" />}
              </div>
              <div>
                <h3 className="text-lg font-serif font-semibold mb-1">{attorney.name}</h3>
                <p className="text-legal-gold font-medium text-sm mb-2">{attorney.title}</p>
                <p className="text-gray-600 dark:text-gray-400 text-sm">{attorney.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  switch (style) {
    case 'list':
      return renderListStyle();
    case 'grid':
      return renderGridStyle();
    default:
      return renderCardsStyle();
  }
};
