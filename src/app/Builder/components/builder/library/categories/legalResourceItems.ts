
import { ComponentLibraryItemProps } from '../types';
import { Newspaper, FileText } from 'lucide-react';
import React from 'react';

export const legalResourceItems: ComponentLibraryItemProps[] = [
  {
    type: 'legalResources',
    label: 'Legal Blog',
    variant: 'Blog content feed',
    icon: React.createElement(Newspaper, { size: 24 }),
    defaultProps: {
      style: 'blog',
      headline: 'Legal Insights',
      description: 'Updates and analysis from our legal team',
      posts: [
        {
          id: '1',
          title: 'Understanding Personal Injury Claims',
          excerpt: 'What you need to know before filing a personal injury lawsuit...',
          date: '2025-06-15',
          author: 'Jane Doe, Esq.',
          imageUrl: '',
          url: '#',
        },
        {
          id: '2',
          title: 'Estate Planning Essentials',
          excerpt: 'Key documents everyone should have in their estate plan...',
          date: '2025-05-22',
          author: 'John Smith, J.D.',
          imageUrl: '',
          url: '#',
        },
        {
          id: '3',
          title: 'The Divorce Process Explained',
          excerpt: 'A step-by-step guide to navigating divorce proceedings...',
          date: '2025-04-10',
          author: 'Emily Johnson, LL.M.',
          imageUrl: '',
          url: '#',
        },
      ],
    },
  },
  {
    type: 'legalResources',
    label: 'Legal Glossary',
    variant: 'Terms and definitions',
    icon: React.createElement(FileText, { size: 24 }),
    defaultProps: {
      style: 'glossary',
      headline: 'Legal Terminology',
      description: 'Understanding common legal terms',
      terms: [
        {
          id: '1',
          term: 'Plaintiff',
          definition: 'A person who brings a case against another in a court of law.',
        },
        {
          id: '2',
          term: 'Defendant',
          definition: 'An individual, company, or institution sued or accused in a court of law.',
        },
        {
          id: '3',
          term: 'Deposition',
          definition: 'The testimony of a witness taken under oath outside of court.',
        },
        {
          id: '4',
          term: 'Discovery',
          definition: 'The formal process of exchanging information between parties about witnesses and evidence to be presented at trial.',
        },
        {
          id: '5',
          term: 'Statute of Limitations',
          definition: 'A law that sets the maximum time after an event within which legal proceedings may be initiated.',
        },
      ],
    },
  },
];
