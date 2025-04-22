
import { ComponentLibraryItemProps } from '../types';
import { Award } from 'lucide-react';
import React from 'react';

export const accreditationItems: ComponentLibraryItemProps[] = [
  {
    type: 'trustBadges',
    label: 'Legal Accreditations',
    variant: 'Bar associations & ratings',
    icon: React.createElement(Award, { size: 24 }),
    defaultProps: {
      style: 'accreditations',
      headline: 'Recognitions & Affiliations',
      description: 'Our firm is recognized by these prestigious organizations',
      logos: [
        { id: '1', name: 'American Bar Association', imageUrl: '' },
        { id: '2', name: 'SuperLawyers', imageUrl: '' },
        { id: '3', name: 'Best Law Firms', imageUrl: '' },
        { id: '4', name: 'Martindale-Hubbell', imageUrl: '' },
        { id: '5', name: 'Avvo', imageUrl: '' },
      ],
    },
  },
];
