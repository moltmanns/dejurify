
import { ComponentLibraryItemProps } from '../types';
import { Bookmark, AlignLeft, ArrowRight } from 'lucide-react';
import React from 'react';

export const ctaItems: ComponentLibraryItemProps[] = [
  {
    type: 'cta',
    label: 'Large CTA',
    variant: 'Full-width block',
    icon: React.createElement(Bookmark, { size: 24 }),
    defaultProps: {
      style: 'large',
      headline: 'Ready to Discuss Your Case?',
      description: 'Our experienced attorneys are here to help you navigate the legal process.',
      buttonText: 'Schedule a Consultation',
      buttonUrl: '#contact',
      backgroundColor: '#1A365D',
      textColor: '#FFFFFF',
    },
  },
  {
    type: 'cta',
    label: 'Inline CTA',
    variant: 'With content section',
    icon: React.createElement(AlignLeft, { size: 24 }),
    defaultProps: {
      style: 'inline',
      headline: 'Need Legal Assistance?',
      description: 'Contact us today for a free initial consultation.',
      buttonText: 'Contact Us',
      buttonUrl: '#contact',
      backgroundColor: '#F7FAFC',
      textColor: '#1A365D',
    },
  },
  {
    type: 'cta',
    label: 'Sticky CTA',
    variant: 'Fixed to bottom',
    icon: React.createElement(ArrowRight, { size: 24 }),
    defaultProps: {
      style: 'sticky',
      headline: 'Free Case Evaluation',
      buttonText: 'Call Now',
      buttonUrl: 'tel:1234567890',
      backgroundColor: '#1A365D',
      textColor: '#FFFFFF',
      phone: '123-456-7890',
    },
  },
];
