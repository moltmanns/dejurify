
import { ComponentLibraryItemProps } from '../types';
import { AlignCenter, Columns, Image } from 'lucide-react';
import React from 'react';

export const heroItems: ComponentLibraryItemProps[] = [
  {
    type: 'hero',
    label: 'Centered Hero',
    variant: 'Centered with CTA',
    icon: React.createElement(AlignCenter, { size: 24 }),
    defaultProps: {
      style: 'centered',
      headline: 'Expert Legal Representation',
      subheadline: 'Committed to protecting your rights and achieving justice',
      ctaText: 'Free Consultation',
      ctaUrl: '#',
      alignment: 'center',
      backgroundType: 'color',
      backgroundColor: '#1A365D',
      textColor: '#FFFFFF',
      imageUrl: '',
    },
  },
  {
    type: 'hero',
    label: 'Split Hero',
    variant: 'Left image, right text',
    icon: React.createElement(Columns, { size: 24 }),
    defaultProps: {
      style: 'split',
      headline: 'Fighting For Your Rights',
      subheadline: 'Our experienced team is ready to help you navigate legal challenges',
      ctaText: 'Contact Us',
      ctaUrl: '#',
      alignment: 'left',
      backgroundType: 'color',
      backgroundColor: '#FFFFFF',
      textColor: '#1A365D',
      imageUrl: '',
    },
  },
  {
    type: 'hero',
    label: 'Background Hero',
    variant: 'Background image with overlay',
    icon: React.createElement(Image, { size: 24 }),
    defaultProps: {
      style: 'background',
      headline: 'Justice You Can Count On',
      subheadline: 'Serving our community with integrity and dedication',
      ctaText: 'Learn More',
      ctaUrl: '#',
      alignment: 'center',
      backgroundType: 'image',
      backgroundColor: '',
      overlayColor: 'rgba(0,0,0,0.5)',
      textColor: '#FFFFFF',
      imageUrl: '',
    },
  },
];
