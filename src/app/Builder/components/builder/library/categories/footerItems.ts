
import { ComponentLibraryItemProps } from '../types';
import { LayoutIcon, Columns } from 'lucide-react';
import React from 'react';

export const footerItems: ComponentLibraryItemProps[] = [
  {
    type: 'footer',
    label: 'Logo & Social Footer',
    variant: 'With social icons',
    icon: React.createElement(LayoutIcon, { size: 24 }),
    defaultProps: {
      style: 'logoSocial',
      logoText: 'Law Firm',
      logoImage: '',
      socialLinks: [
        { id: '1', platform: 'facebook', url: '#' },
        { id: '2', platform: 'twitter', url: '#' },
        { id: '3', platform: 'linkedin', url: '#' },
      ],
      copyrightText: '© 2025 Law Firm. All rights reserved.',
      links: [
        { id: '1', label: 'Privacy Policy', url: '#' },
        { id: '2', label: 'Terms of Service', url: '#' },
      ],
    },
  },
  {
    type: 'footer',
    label: 'Three Column Footer',
    variant: '3-column with links',
    icon: React.createElement(Columns, { size: 24 }),
    defaultProps: {
      style: 'threeColumn',
      logoText: 'Law Firm',
      logoImage: '',
      columns: [
        {
          id: '1',
          title: 'Contact',
          items: [
            { id: '1', label: '123 Legal Ave, NY', url: '#' },
            { id: '2', label: '(555) 123-4567', url: 'tel:5551234567' },
            { id: '3', label: 'info@lawfirm.com', url: 'mailto:info@lawfirm.com' },
          ],
        },
        {
          id: '2',
          title: 'Practice Areas',
          items: [
            { id: '1', label: 'Personal Injury', url: '#' },
            { id: '2', label: 'Family Law', url: '#' },
            { id: '3', label: 'Corporate Law', url: '#' },
          ],
        },
        {
          id: '3',
          title: 'Company',
          items: [
            { id: '1', label: 'About Us', url: '#' },
            { id: '2', label: 'Our Team', url: '#' },
            { id: '3', label: 'Careers', url: '#' },
          ],
        },
      ],
      copyrightText: '© 2025 Law Firm. All rights reserved.',
    },
  },
  {
    type: 'footer',
    label: 'Minimal Footer',
    variant: 'Compact version',
    icon: React.createElement(LayoutIcon, { size: 24 }),
    defaultProps: {
      style: 'minimal',
      logoText: 'Law Firm',
      copyrightText: '© 2025 Law Firm. All rights reserved.',
      links: [
        { id: '1', label: 'Privacy', url: '#' },
        { id: '2', label: 'Terms', url: '#' },
        { id: '3', label: 'Contact', url: '#' },
      ],
    },
  },
];
