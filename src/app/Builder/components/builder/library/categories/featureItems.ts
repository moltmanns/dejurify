
import { ComponentLibraryItemProps } from '../types';
import { Grid, LayoutList, List } from 'lucide-react';
import React from 'react';

export const featureItems: ComponentLibraryItemProps[] = [
  {
    type: 'features',
    label: 'Feature Grid',
    variant: 'Icon grid with descriptions',
    icon: React.createElement(Grid, { size: 24 }),
    defaultProps: {
      style: 'grid',
      headline: 'Our Services',
      description: 'Comprehensive legal solutions tailored to your needs',
      features: [
        { id: '1', title: 'Legal Consultation', description: 'Expert advice on your legal matters', icon: 'MessageSquare' },
        { id: '2', title: 'Court Representation', description: 'Professional representation in court', icon: 'Briefcase' },
        { id: '3', title: 'Document Review', description: 'Thorough review of legal documents', icon: 'FileText' },
        { id: '4', title: 'Negotiation', description: 'Skilled negotiation on your behalf', icon: 'HandShake' },
      ],
    },
  },
  {
    type: 'features',
    label: 'Alternating Features',
    variant: 'Alternating left/right',
    icon: React.createElement(LayoutList, { size: 24 }),
    defaultProps: {
      style: 'alternating',
      headline: 'Why Choose Us',
      features: [
        { id: '1', title: 'Experienced Attorneys', description: 'Our team has decades of combined experience', imageUrl: '', alignment: 'right' },
        { id: '2', title: 'Client-Focused Approach', description: 'We put your needs and goals first', imageUrl: '', alignment: 'left' },
        { id: '3', title: 'Proven Track Record', description: 'History of successful outcomes for our clients', imageUrl: '', alignment: 'right' },
      ],
    },
  },
  {
    type: 'features',
    label: 'Tabbed Features',
    variant: 'Tabbed interface',
    icon: React.createElement(List, { size: 24 }),
    defaultProps: {
      style: 'tabs',
      headline: 'Our Legal Expertise',
      tabs: [
        { id: '1', title: 'Family Law', content: 'Comprehensive family law services including divorce, custody, and support issues.' },
        { id: '2', title: 'Personal Injury', content: 'Representing victims of accidents, medical malpractice, and wrongful death.' },
        { id: '3', title: 'Corporate Law', content: 'Business formation, contracts, mergers and acquisitions, and compliance.' },
      ],
    },
  },
];
