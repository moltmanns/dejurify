
import { ComponentLibraryItemProps } from '../types';
import { Calendar, FileText } from 'lucide-react';
import React from 'react';

export const appointmentItems: ComponentLibraryItemProps[] = [
  {
    type: 'appointmentBooking',
    label: 'Appointment Booking',
    variant: 'Calendar integration',
    icon: React.createElement(Calendar, { size: 24 }),
    defaultProps: {
      style: 'calendar',
      headline: 'Schedule a Consultation',
      description: 'Choose a convenient time to meet with our attorneys',
      calendarType: 'calendly', // or 'acuity', 'custom'
      embedCode: '<div class="calendly-inline-widget" data-url="https://calendly.com/yourlawfirm" style="min-width:320px;height:600px;"></div>',
      ctaButtonText: 'Book Now',
      ctaButtonUrl: '#',
    },
  },
  {
    type: 'appointmentBooking',
    label: 'Consultation Form',
    variant: 'Custom booking form',
    icon: React.createElement(FileText, { size: 24 }),
    defaultProps: {
      style: 'form',
      headline: 'Request an Appointment',
      description: 'Fill out this form to schedule a consultation with our attorneys',
      fields: [
        'name',
        'email',
        'phone',
        'preferredDate',
        'preferredTime',
        'caseType',
        'message',
      ],
      submitButtonText: 'Request Appointment',
      thankYouMessage: 'Thank you for requesting an appointment. We will contact you shortly to confirm.',
    },
  },
];
