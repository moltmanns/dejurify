
import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface PricingOption {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

interface PricingSectionProps {
  style?: 'table' | 'cards' | 'comparison';
  headline?: string;
  description?: string;
  options: PricingOption[];
}

export const PricingSection: React.FC<PricingSectionProps> = ({
  style = 'table',
  headline = 'Our Fee Structure',
  description,
  options,
}) => {
  const renderTableStyle = () => (
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
          {options.map((option) => (
            <Card 
              key={option.id} 
              className={cn(
                "relative overflow-hidden transition-all duration-300",
                option.isPopular && "border-legal-gold shadow-lg"
              )}
            >
              {option.isPopular && (
                <div className="absolute top-0 right-0">
                  <div className="bg-legal-gold text-white text-xs px-3 py-1 rounded-bl-md">
                    Popular
                  </div>
                </div>
              )}
              <CardHeader className="pb-0">
                <CardTitle className="text-2xl mb-1">{option.title}</CardTitle>
                <div className="text-3xl font-bold text-legal-navy mt-2">{option.price}</div>
                <p className="text-gray-600 dark:text-gray-400 mt-2">{option.description}</p>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-3">
                  {option.features.map((feature, index) => (
                    <li key={index} className="flex">
                      <Check className="h-5 w-5 text-legal-gold mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={cn(
                    "w-full mt-6",
                    option.isPopular ? "bg-legal-gold hover:bg-legal-gold/90" : "bg-legal-navy hover:bg-legal-navy/90"
                  )}
                >
                  Choose {option.title}
                </Button>
              </CardContent>
            </Card>
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
        <div className="flex flex-wrap justify-center gap-8">
          {options.map((option) => (
            <div 
              key={option.id} 
              className={cn(
                "bg-white dark:bg-gray-800 rounded-xl overflow-hidden max-w-sm w-full border transition-all duration-300",
                option.isPopular ? "border-legal-gold shadow-lg scale-105" : "border-gray-200 dark:border-gray-700"
              )}
            >
              {option.isPopular && (
                <div className="bg-legal-gold text-white text-center text-sm py-1">
                  Most Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{option.title}</h3>
                <div className="text-3xl font-bold text-legal-navy mb-2">{option.price}</div>
                <p className="text-gray-600 dark:text-gray-400 mb-6">{option.description}</p>
                <ul className="space-y-3 mb-6">
                  {option.features.map((feature, index) => (
                    <li key={index} className="flex">
                      <Check className="h-5 w-5 text-legal-gold mr-2 flex-shrink-0" />
                      <span className="text-gray-600 dark:text-gray-400">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button 
                  className={cn(
                    "w-full",
                    option.isPopular ? "bg-legal-gold hover:bg-legal-gold/90" : "bg-legal-navy hover:bg-legal-navy/90"
                  )}
                >
                  Select Plan
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderComparisonStyle = () => (
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
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left p-4 bg-gray-50 dark:bg-gray-800">Fee Structure</th>
                {options.map((option) => (
                  <th 
                    key={option.id} 
                    className={cn(
                      "p-4 text-center",
                      option.isPopular 
                        ? "bg-legal-gold text-white" 
                        : "bg-gray-50 dark:bg-gray-800"
                    )}
                  >
                    {option.title}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border p-4 font-medium">Price</td>
                {options.map((option) => (
                  <td 
                    key={option.id} 
                    className={cn(
                      "border p-4 text-center font-bold",
                      option.isPopular && "bg-legal-gold/5"
                    )}
                  >
                    {option.price}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="border p-4 font-medium">Description</td>
                {options.map((option) => (
                  <td 
                    key={option.id} 
                    className={cn(
                      "border p-4 text-center",
                      option.isPopular && "bg-legal-gold/5"
                    )}
                  >
                    {option.description}
                  </td>
                ))}
              </tr>
              {/* Generate rows for each feature by finding all unique features */}
              {options
                .flatMap((option) => option.features)
                .filter((value, index, self) => self.indexOf(value) === index)
                .map((feature, featureIndex) => (
                  <tr key={featureIndex}>
                    <td className="border p-4 font-medium">{feature}</td>
                    {options.map((option) => (
                      <td 
                        key={option.id} 
                        className={cn(
                          "border p-4 text-center",
                          option.isPopular && "bg-legal-gold/5"
                        )}
                      >
                        {option.features.includes(feature) ? (
                          <Check className="h-5 w-5 text-green-500 mx-auto" />
                        ) : (
                          <span className="text-gray-300">—</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              <tr>
                <td className="border p-4"></td>
                {options.map((option) => (
                  <td 
                    key={option.id} 
                    className={cn(
                      "border p-4 text-center",
                      option.isPopular && "bg-legal-gold/5"
                    )}
                  >
                    <Button 
                      className={cn(
                        "",
                        option.isPopular ? "bg-legal-gold hover:bg-legal-gold/90" : "bg-legal-navy hover:bg-legal-navy/90"
                      )}
                    >
                      Choose Plan
                    </Button>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  switch (style) {
    case 'cards':
      return renderCardsStyle();
    case 'comparison':
      return renderComparisonStyle();
    default:
      return renderTableStyle();
  }
};
