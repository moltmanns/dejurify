
import { ComponentLibraryItemProps } from '../types';
import { BarChart, Clock } from 'lucide-react';
import React from 'react';

export const caseResultItems: ComponentLibraryItemProps[] = [
  {
    type: 'caseResults',
    label: 'Featured Cases',
    variant: 'With results',
    icon: React.createElement(BarChart, { size: 24 }),
    defaultProps: {
      style: 'featured',
      headline: 'Our Track Record',
      description: 'We\'ve won millions for our clients',
      results: [
        {
          id: '1',
          caseType: 'Medical Malpractice',
          amount: '$2.5 Million',
          description: 'Settlement for surgical error resulting in permanent injury',
          outcome: 'Settlement',
        },
        {
          id: '2',
          caseType: 'Car Accident',
          amount: '$1.8 Million',
          description: 'Jury verdict for victim of drunk driving accident',
          outcome: 'Verdict',
        },
        {
          id: '3',
          caseType: 'Workplace Injury',
          amount: '$950,000',
          description: 'Settlement for construction worker injured on the job',
          outcome: 'Settlement',
        },
      ],
    },
  },
  {
    type: 'caseResults',
    label: 'Case Timeline',
    variant: 'Timeline format',
    icon: React.createElement(Clock, { size: 24 }),
    defaultProps: {
      style: 'timeline',
      headline: 'Recent Case Successes',
      description: 'Our recent victories for our clients',
      results: [
        {
          id: '1',
          date: 'March 2025',
          caseType: 'Personal Injury',
          amount: '$1.2 Million',
          description: 'Settlement for client injured in trucking accident',
        },
        {
          id: '2',
          date: 'January 2025',
          caseType: 'Medical Malpractice',
          amount: '$3.5 Million',
          description: 'Verdict for misdiagnosis resulting in delayed treatment',
        },
        {
          id: '3',
          date: 'November 2024',
          caseType: 'Wrongful Death',
          amount: '$2.7 Million',
          description: 'Settlement for family after fatal workplace accident',
        },
      ],
    },
  },
  {
    type: 'caseResults',
    label: 'Case Statistics',
    variant: 'Statistics format',
    icon: React.createElement(BarChart, { size: 24 }),
    defaultProps: {
      style: 'statistics',
      headline: 'Case Results By The Numbers',
      stats: [
        { id: '1', value: '$75M+', label: 'Recovered for Clients' },
        { id: '2', value: '95%', label: 'Success Rate' },
        { id: '3', value: '500+', label: 'Cases Won' },
        { id: '4', value: '20+', label: 'Years of Experience' },
      ],
      description: 'Our firm has a proven track record of success in a wide range of legal matters.'
    },
  },
];
