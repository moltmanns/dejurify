
import { ComponentLibraryItemProps } from '../types';
import { HelpCircle, Grid } from 'lucide-react';
import React from 'react';

export const faqItems: ComponentLibraryItemProps[] = [
  {
    type: 'faq',
    label: 'FAQ Accordion',
    variant: 'Collapsible sections',
    icon: React.createElement(HelpCircle, { size: 24 }),
    defaultProps: {
      style: 'accordion',
      headline: 'Frequently Asked Questions',
      items: [
        {
          id: '1',
          question: 'How much does an initial consultation cost?',
          answer: 'We offer free initial consultations for all potential clients.',
        },
        {
          id: '2',
          question: 'How long will my case take?',
          answer: 'Every case is unique, but we strive to resolve matters as efficiently as possible while achieving the best outcome.',
        },
        {
          id: '3',
          question: 'What areas of law do you practice?',
          answer: 'We specialize in family law, personal injury, corporate law, estate planning, and criminal defense.',
        },
        {
          id: '4',
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans to accommodate our clients\' financial situations.',
        },
        {
          id: '5',
          question: 'Can I switch attorneys if I\'m not satisfied?',
          answer: 'Absolutely. We want you to feel comfortable with your legal representation, and we can reassign your case to another attorney in our firm.',
        },
      ],
    },
  },
  {
    type: 'faq',
    label: 'FAQ Grid',
    variant: 'Expandable grid layout',
    icon: React.createElement(Grid, { size: 24 }),
    defaultProps: {
      style: 'grid',
      headline: 'Common Legal Questions',
      items: [
        {
          id: '1',
          question: 'How much does an initial consultation cost?',
          answer: 'We offer free initial consultations for all potential clients.',
        },
        {
          id: '2',
          question: 'How long will my case take?',
          answer: 'Every case is unique, but we strive to resolve matters as efficiently as possible while achieving the best outcome.',
        },
        {
          id: '3',
          question: 'What areas of law do you practice?',
          answer: 'We specialize in family law, personal injury, corporate law, estate planning, and criminal defense.',
        },
        {
          id: '4',
          question: 'Do you offer payment plans?',
          answer: 'Yes, we offer flexible payment plans to accommodate our clients\' financial situations.',
        },
      ],
    },
  },
];
