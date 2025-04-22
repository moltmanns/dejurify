
import React from 'react';
import { cn } from '@/lib/utils';
import { BarChart, DollarSign, Award } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

interface CaseResult {
  id: string;
  amount: string;
  description: string;
}

interface CaseResultsSectionProps {
  style?: 'stats' | 'cards' | 'banner';
  headline?: string;
  description?: string;
  results: CaseResult[];
}

export const CaseResultsSection: React.FC<CaseResultsSectionProps> = ({
  style = 'stats',
  headline = 'Our Track Record',
  description,
  results,
}) => {
  const renderStatsStyle = () => (
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
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result) => (
            <div key={result.id} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-legal-gold mb-2">
                {result.amount}
              </div>
              <p className="text-gray-600 dark:text-gray-400">{result.description}</p>
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
        <div className="grid md:grid-cols-3 gap-6">
          {results.map((result) => (
            <Card key={result.id} className="relative overflow-hidden">
              <div className="absolute top-0 right-0 h-16 w-16 bg-legal-gold/10 rounded-bl-full"></div>
              <CardHeader className="pb-2">
                <CardTitle className="text-2xl flex items-center gap-2">
                  <DollarSign className="h-6 w-6 text-legal-gold" />
                  {result.amount}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">{result.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderBannerStyle = () => (
    <div 
      className="py-16 bg-legal-navy text-white"
      style={{
        background: 'linear-gradient(135deg, hsl(220, 60%, 20%) 0%, hsl(220, 60%, 30%) 100%)',
      }}
    >
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-12">
          {headline && (
            <h2 className="text-3xl font-serif font-bold mb-4">{headline}</h2>
          )}
          {description && (
            <p className="text-gray-200">{description}</p>
          )}
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {results.map((result) => (
            <div key={result.id} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <Award className="h-10 w-10 text-legal-gold mx-auto mb-4" />
              <div className="text-3xl font-bold text-legal-gold mb-2">
                {result.amount}
              </div>
              <p className="text-gray-200">{result.description}</p>
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
      return renderStatsStyle();
  }
};
