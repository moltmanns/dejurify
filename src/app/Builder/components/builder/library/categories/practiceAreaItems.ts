
import { ComponentLibraryItemProps } from '../types';
import { Grid, Layers } from 'lucide-react';
import React from 'react';

export const practiceAreaItems: ComponentLibraryItemProps[] = [
  {
    type: 'practiceAreas',
    label: 'Practice Areas Grid',
    variant: 'Card grid layout',
    icon: React.createElement(Grid, { size: 24 }),
    defaultProps: {
      style: 'grid',
      headline: 'Our Practice Areas',
      description: 'We provide legal expertise across a wide range of practice areas',
      areas: [
        {
          id: '1',
          title: 'Personal Injury',
          description: 'Representing victims of accidents and negligence',
          icon: 'Shield',
          url: '#',
        },
        {
          id: '2',
          title: 'Family Law',
          description: 'Helping families navigate legal challenges',
          icon: 'Users',
          url: '#',
        },
        {
          id: '3',
          title: 'Corporate Law',
          description: 'Legal solutions for businesses of all sizes',
          icon: 'Building',
          url: '#',
        },
        {
          id: '4',
          title: 'Estate Planning',
          description: 'Securing your family\'s future',
          icon: 'FileText',
          url: '#',
        },
        {
          id: '5',
          title: 'Criminal Defense',
          description: 'Protecting your rights in criminal matters',
          icon: 'ShieldCheck',
          url: '#',
        },
        {
          id: '6',
          title: 'Real Estate Law',
          description: 'Guidance for property transactions',
          icon: 'Home',
          url: '#',
        },
      ],
    },
  },
  {
    type: 'practiceAreas',
    label: 'Practice Areas Icons',
    variant: 'With icons',
    icon: React.createElement(Layers, { size: 24 }),
    defaultProps: {
      style: 'icons',
      headline: 'Legal Services',
      description: 'Comprehensive legal representation in various practice areas',
      areas: [
        {
          id: '1',
          title: 'Personal Injury',
          description: 'Representing victims of accidents and negligence',
          icon: 'Shield',
          url: '#',
        },
        {
          id: '2',
          title: 'Family Law',
          description: 'Helping families navigate legal challenges',
          icon: 'Users',
          url: '#',
        },
        {
          id: '3',
          title: 'Corporate Law',
          description: 'Legal solutions for businesses of all sizes',
          icon: 'Building',
          url: '#',
        },
      ],
    },
  },
];
