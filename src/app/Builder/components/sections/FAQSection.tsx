
import React from 'react';
import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/app/Builder/components/ui/accordion';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

interface FAQSectionProps {
  style?: 'accordion' | 'grid' | 'simple';
  headline?: string;
  items: FAQItem[];
}

export const FAQSection: React.FC<FAQSectionProps> = ({
  style = 'accordion',
  headline = 'Frequently Asked Questions',
  items,
}) => {
  const renderAccordionStyle = () => (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        {headline && (
          <h2 className="text-3xl font-serif font-bold text-center mb-12">{headline}</h2>
        )}
        <Accordion type="single" collapsible className="w-full">
          {items.map((item, index) => (
            <AccordionItem key={item.id} value={item.id}>
              <AccordionTrigger className="text-left font-medium text-lg py-4">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 dark:text-gray-400 pt-2 pb-4">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );

  const renderGridStyle = () => (
    <div className="bg-gray-50 dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4">
        {headline && (
          <h2 className="text-3xl font-serif font-bold text-center mb-12">{headline}</h2>
        )}
        <div className="grid md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div key={item.id} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-medium mb-4 text-legal-navy">{item.question}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderSimpleStyle = () => (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        {headline && (
          <h2 className="text-3xl font-serif font-bold text-center mb-12">{headline}</h2>
        )}
        <div className="space-y-8">
          {items.map((item) => (
            <div key={item.id} className="border-b border-gray-200 dark:border-gray-800 pb-6">
              <h3 className="text-xl font-medium mb-3">{item.question}</h3>
              <p className="text-gray-600 dark:text-gray-400">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  switch (style) {
    case 'grid':
      return renderGridStyle();
    case 'simple':
      return renderSimpleStyle();
    default:
      return renderAccordionStyle();
  }
};
