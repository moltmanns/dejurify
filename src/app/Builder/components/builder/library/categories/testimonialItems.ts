
import { ComponentLibraryItemProps } from '../types';
import { Sliders, Quote, LogIn } from 'lucide-react';
import React from 'react';

export const testimonialItems: ComponentLibraryItemProps[] = [
  {
    type: 'testimonials',
    label: 'Testimonial Carousel',
    variant: 'Carousel slider',
    icon: React.createElement(Sliders, { size: 24 }),
    defaultProps: {
      style: 'carousel',
      headline: 'Client Success Stories',
      items: [
        {
          id: '1',
          quote: 'They helped me win my case and I couldn\'t be happier with the outcome.',
          author: 'John Smith',
          role: 'Personal Injury Client',
          image: '',
        },
        {
          id: '2',
          quote: 'Professional, knowledgeable, and compassionate throughout the entire process.',
          author: 'Sarah Johnson',
          role: 'Family Law Client',
          image: '',
        },
        {
          id: '3',
          quote: 'The best attorneys I\'ve ever worked with. Highly recommended!',
          author: 'Michael Brown',
          role: 'Corporate Client',
          image: '',
        },
      ],
    },
  },
  {
    type: 'testimonials',
    label: 'Quote Grid',
    variant: 'Grid with avatars',
    icon: React.createElement(Quote, { size: 24 }),
    defaultProps: {
      style: 'grid',
      headline: 'What Our Clients Say',
      items: [
        {
          id: '1',
          quote: 'They helped me win my case and I couldn\'t be happier with the outcome.',
          author: 'John Smith',
          role: 'Personal Injury Client',
          image: '',
        },
        {
          id: '2',
          quote: 'Professional, knowledgeable, and compassionate throughout the entire process.',
          author: 'Sarah Johnson',
          role: 'Family Law Client',
          image: '',
        },
        {
          id: '3',
          quote: 'The best attorneys I\'ve ever worked with. Highly recommended!',
          author: 'Michael Brown',
          role: 'Corporate Client',
          image: '',
        },
        {
          id: '4',
          quote: 'They made a complex process simple and straightforward.',
          author: 'Emily Davis',
          role: 'Estate Planning Client',
          image: '',
        },
      ],
    },
  },
  {
    type: 'testimonials',
    label: 'Client Logos',
    variant: 'Logo showcase',
    icon: React.createElement(LogIn, { size: 24 }),
    defaultProps: {
      style: 'logos',
      headline: 'Trusted By',
      logos: [
        { id: '1', name: 'Company A', imageUrl: '' },
        { id: '2', name: 'Company B', imageUrl: '' },
        { id: '3', name: 'Company C', imageUrl: '' },
        { id: '4', name: 'Company D', imageUrl: '' },
        { id: '5', name: 'Company E', imageUrl: '' },
      ],
    },
  },
];
