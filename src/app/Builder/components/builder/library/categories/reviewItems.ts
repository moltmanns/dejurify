
import { ComponentLibraryItemProps } from '../types';
import { MessageSquare, Video } from 'lucide-react';
import React from 'react';

export const reviewItems: ComponentLibraryItemProps[] = [
  {
    type: 'clientReviews',
    label: 'Client Reviews',
    variant: 'With legal keywords',
    icon: React.createElement(MessageSquare, { size: 24 }),
    defaultProps: {
      style: 'detailed',
      headline: 'Client Success Stories',
      description: 'Read what our clients have to say about our legal services',
      reviews: [
        {
          id: '1',
          clientName: 'Sarah Thompson',
          caseType: 'Personal Injury',
          rating: 5,
          review: 'After my car accident, I was overwhelmed with medical bills and insurance claims. The attorneys at this firm handled my personal injury case with professionalism and fought hard to get me the compensation I deserved. Their expertise in negotiating with insurance companies was invaluable.',
          date: '2025-03-15',
        },
        {
          id: '2',
          clientName: 'Robert Johnson',
          caseType: 'Family Law',
          rating: 5,
          review: 'Going through a divorce was one of the hardest experiences of my life, but my attorney guided me through the process with compassion and skill. They helped me understand my rights regarding custody and property division, and always kept me informed about the status of my case.',
          date: '2025-02-10',
        },
        {
          id: '3',
          clientName: 'Jennifer Garcia',
          caseType: 'Estate Planning',
          rating: 5,
          review: 'I had been putting off creating a will and trust for years, but my attorney made the process simple and painless. They explained all my options clearly and created a comprehensive estate plan that gives me peace of mind knowing my family will be taken care of.',
          date: '2025-01-22',
        },
      ],
    },
  },
  {
    type: 'clientReviews',
    label: 'Video Testimonials',
    variant: 'With video option',
    icon: React.createElement(Video, { size: 24 }),
    defaultProps: {
      style: 'video',
      headline: 'Hear From Our Clients',
      description: 'Real stories from the people we\'ve helped',
      reviews: [
        {
          id: '1',
          clientName: 'Michael Wilson',
          caseType: 'Medical Malpractice',
          videoUrl: '',
          videoThumbnail: '',
          quote: 'They fought for me when no one else would.',
        },
        {
          id: '2',
          clientName: 'Elizabeth Smith',
          caseType: 'Car Accident',
          videoUrl: '',
          videoThumbnail: '',
          quote: 'I couldn\'t have asked for better representation.',
        },
      ],
    },
  },
];
