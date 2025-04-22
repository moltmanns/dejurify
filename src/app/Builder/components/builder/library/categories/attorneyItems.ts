
import { ComponentLibraryItemProps } from '../types';
import { Users, LayoutList } from 'lucide-react';
import React from 'react';

export const attorneyItems: ComponentLibraryItemProps[] = [
  {
    type: 'attorneyBios',
    label: 'Attorney Grid',
    variant: 'Photo grid layout',
    icon: React.createElement(Users, { size: 24 }),
    defaultProps: {
      style: 'grid',
      headline: 'Our Legal Team',
      attorneys: [
        {
          id: '1',
          name: 'Jane Doe, Esq.',
          title: 'Senior Partner',
          bio: 'Over 20 years of experience in corporate law',
          imageUrl: '',
          specialties: ['Corporate Law', 'Mergers & Acquisitions'],
        },
        {
          id: '2',
          name: 'John Smith, J.D.',
          title: 'Associate Attorney',
          bio: 'Specializing in family law and estate planning',
          imageUrl: '',
          specialties: ['Family Law', 'Estate Planning'],
        },
        {
          id: '3',
          name: 'Emily Johnson, LL.M.',
          title: 'Partner',
          bio: 'Expertise in personal injury and medical malpractice',
          imageUrl: '',
          specialties: ['Personal Injury', 'Medical Malpractice'],
        },
        {
          id: '4',
          name: 'Michael Brown, J.D.',
          title: 'Associate Attorney',
          bio: 'Focused on criminal defense and civil litigation',
          imageUrl: '',
          specialties: ['Criminal Defense', 'Civil Litigation'],
        },
      ],
    },
  },
  {
    type: 'attorneyBios',
    label: 'Attorney List',
    variant: 'Detailed list view',
    icon: React.createElement(LayoutList, { size: 24 }),
    defaultProps: {
      style: 'list',
      headline: 'Meet Our Attorneys',
      attorneys: [
        {
          id: '1',
          name: 'Jane Doe, Esq.',
          title: 'Senior Partner',
          bio: 'Over 20 years of experience in corporate law. Mrs. Doe has represented Fortune 500 companies in mergers and acquisitions, contract negotiations, and corporate governance matters.',
          imageUrl: '',
          specialties: ['Corporate Law', 'Mergers & Acquisitions'],
          education: ['J.D., Harvard Law School', 'B.A., Yale University'],
          barAdmissions: ['New York', 'California'],
        },
        {
          id: '2',
          name: 'John Smith, J.D.',
          title: 'Associate Attorney',
          bio: 'Specializing in family law and estate planning. Mr. Smith helps clients navigate complex family matters including divorce, custody, and support issues, as well as comprehensive estate planning strategies.',
          imageUrl: '',
          specialties: ['Family Law', 'Estate Planning'],
          education: ['J.D., Columbia Law School', 'B.A., Princeton University'],
          barAdmissions: ['New York', 'New Jersey'],
        },
      ],
    },
  },
];
