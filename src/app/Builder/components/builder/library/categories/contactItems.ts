
import { ComponentLibraryItemProps } from '../types';
import { MapPin, ExternalLink, Mail } from 'lucide-react';
import React from 'react';

export const contactItems: ComponentLibraryItemProps[] = [
  {
    type: 'contactForm',
    label: 'Contact with Map',
    variant: 'Full-width with map',
    icon: React.createElement(MapPin, { size: 24 }),
    defaultProps: {
      style: 'withMap',
      headline: 'Contact Us',
      subheadline: 'Get in touch with our legal team',
      address: '123 Legal Street, New York, NY 10001',
      phone: '(555) 123-4567',
      email: 'info@lawfirm.com',
      showMap: true,
      submitButtonText: 'Send Message',
      fields: ['name', 'email', 'phone', 'message'],
    },
  },
  {
    type: 'contactForm',
    label: 'Embedded Form',
    variant: 'External form integration',
    icon: React.createElement(ExternalLink, { size: 24 }),
    defaultProps: {
      style: 'embedded',
      headline: 'Request a Consultation',
      subheadline: 'Fill out this form to schedule a consultation',
      embedCode: '<iframe src="https://example.com/form" width="100%" height="500px"></iframe>',
      formType: 'google', // or 'netlify', 'customHtml'
    },
  },
  {
    type: 'contactForm',
    label: 'Simple Contact',
    variant: 'Email and message only',
    icon: React.createElement(Mail, { size: 24 }),
    defaultProps: {
      style: 'simple',
      headline: 'Send Us a Message',
      subheadline: 'We\'ll get back to you as soon as possible',
      submitButtonText: 'Submit',
      fields: ['name', 'email', 'message'],
    },
  },
];
