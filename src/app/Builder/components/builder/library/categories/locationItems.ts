
import { ComponentLibraryItemProps } from '../types';
import { MapPin, Phone } from 'lucide-react';
import React from 'react';

export const locationItems: ComponentLibraryItemProps[] = [
  {
    type: 'locationMap',
    label: 'Office Map',
    variant: 'Multiple locations',
    icon: React.createElement(MapPin, { size: 24 }),
    defaultProps: {
      style: 'multiLocation',
      headline: 'Our Offices',
      locations: [
        {
          id: '1',
          name: 'Main Office',
          address: '123 Legal Avenue, New York, NY 10001',
          phone: '(212) 555-1234',
          email: 'nyc@lawfirm.com',
          mapUrl: '',
        },
        {
          id: '2',
          name: 'Downtown Office',
          address: '456 Justice Street, New York, NY 10007',
          phone: '(212) 555-5678',
          email: 'downtown@lawfirm.com',
          mapUrl: '',
        },
      ],
      showMap: true,
    },
  },
  {
    type: 'locationMap',
    label: 'Contact Location',
    variant: 'With consultation CTA',
    icon: React.createElement(Phone, { size: 24 }),
    defaultProps: {
      style: 'withCta',
      headline: 'Visit Our Office',
      address: '123 Legal Avenue, Suite 400, New York, NY 10001',
      phone: '(555) 123-4567',
      email: 'info@lawfirm.com',
      hours: 'Monday-Friday: 9am-5pm',
      ctaHeadline: 'Ready to discuss your case?',
      ctaButtonText: 'Schedule a Consultation',
      ctaButtonUrl: '#contact',
      showMap: true,
    },
  },
];
