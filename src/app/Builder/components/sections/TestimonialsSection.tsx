
import React from 'react';
import { cn } from '@/lib/utils';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role?: string;
  rating?: number;
}

interface TestimonialsSectionProps {
  style?: 'cards' | 'carousel' | 'quotes';
  headline?: string;
  items: TestimonialItem[];
}

export const TestimonialsSection: React.FC<TestimonialsSectionProps> = ({
  style = 'cards',
  headline = 'What Our Clients Say',
  items,
}) => {
  const renderStars = (rating: number = 5) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star
        key={index}
        className={cn(
          'h-4 w-4',
          index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        )}
      />
    ));
  };

  const renderCardStyle = () => (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {headline && (
          <h2 className="text-3xl font-serif font-bold text-center mb-12">{headline}</h2>
        )}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <Card key={item.id} className="border border-gray-200 dark:border-gray-800">
              <CardContent className="p-6">
                {item.rating && (
                  <div className="flex mb-4">{renderStars(item.rating)}</div>
                )}
                <blockquote className="text-lg mb-4">"{item.quote}"</blockquote>
                <div className="font-medium">{item.author}</div>
                {item.role && <div className="text-sm text-gray-500">{item.role}</div>}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderQuotesStyle = () => (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {headline && (
          <h2 className="text-3xl font-serif font-bold text-center mb-12">{headline}</h2>
        )}
        <div className="space-y-12">
          {items.map((item) => (
            <div key={item.id} className="max-w-3xl mx-auto text-center">
              <div className="text-4xl font-serif text-legal-gold mb-6">"</div>
              <blockquote className="text-xl md:text-2xl font-serif italic mb-6">
                {item.quote}
              </blockquote>
              <div className="font-medium text-lg">{item.author}</div>
              {item.role && <div className="text-gray-500">{item.role}</div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  // Default to cards if style not recognized
  switch (style) {
    case 'quotes':
      return renderQuotesStyle();
    case 'carousel':
      // For now, use cards for carousel as well since carousel requires more complex implementation
      return renderCardStyle();
    default:
      return renderCardStyle();
  }
};
