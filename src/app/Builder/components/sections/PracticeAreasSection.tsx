
import React from 'react';
import { cn } from '@/lib/utils';
import { Building, Shield, Users, Gavel, Scale, FileText, Briefcase } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface PracticeArea {
  id: string;
  title: string;
  description: string;
  icon: string;
}

interface PracticeAreasSectionProps {
  style?: 'grid' | 'cards' | 'list';
  headline?: string;
  description?: string;
  areas: PracticeArea[];
}

export const PracticeAreasSection: React.FC<PracticeAreasSectionProps> = ({
  style = 'grid',
  headline = 'Our Practice Areas',
  description,
  areas,
}) => {
  // Map string icon names to actual icons
  const getIcon = (iconName: string) => {
    const icons: { [key: string]: React.ReactNode } = {
      Building: <Building className="h-10 w-10" />,
      Shield: <Shield className="h-10 w-10" />,
      Users: <Users className="h-10 w-10" />,
      Gavel: <Gavel className="h-10 w-10" />,
      Scale: <Scale className="h-10 w-10" />,
      FileText: <FileText className="h-10 w-10" />,
      Briefcase: <Briefcase className="h-10 w-10" />,
    };

    return icons[iconName] || <Building className="h-10 w-10" />;
  };

  const renderGridStyle = () => (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {headline && (
            <h2 className="text-3xl font-serif font-bold mb-4">{headline}</h2>
          )}
          {description && (
            <p className="text-lg text-gray-600 dark:text-gray-400">{description}</p>
          )}
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <div key={area.id} className="text-center">
              <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-legal-navy text-white mb-4">
                {getIcon(area.icon)}
              </div>
              <h3 className="text-xl font-serif font-semibold mb-2">{area.title}</h3>
              <p className="text-gray-600 dark:text-gray-400">{area.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderCardsStyle = () => (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {headline && (
            <h2 className="text-3xl font-serif font-bold mb-4">{headline}</h2>
          )}
          {description && (
            <p className="text-lg text-gray-600 dark:text-gray-400">{description}</p>
          )}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {areas.map((area) => (
            <Card key={area.id} className="bg-white dark:bg-gray-800 hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="flex flex-row items-center gap-4 pb-2">
                <div className="text-legal-gold">{getIcon(area.icon)}</div>
                <CardTitle>{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">{area.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderListStyle = () => (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {headline && (
            <h2 className="text-3xl font-serif font-bold mb-4">{headline}</h2>
          )}
          {description && (
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">{description}</p>
          )}
          <div className="space-y-6">
            {areas.map((area) => (
              <div key={area.id} className="flex gap-4 items-start border-b border-gray-200 dark:border-gray-800 pb-6">
                <div className="text-legal-gold">{getIcon(area.icon)}</div>
                <div>
                  <h3 className="text-xl font-serif font-semibold mb-2">{area.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  switch (style) {
    case 'cards':
      return renderCardsStyle();
    case 'list':
      return renderListStyle();
    default:
      return renderGridStyle();
  }
};
