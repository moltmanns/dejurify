'use client'
import React from 'react';
import { ScrollArea } from '@/app/Builder/components/ui/scroll-area';
import { Separator } from '@/app/Builder/components/ui/separator';
import { ComponentCategory } from './ComponentCategory';
import {
  heroItems,
  featureItems,
  testimonialItems,
  ctaItems,
  pricingItems,
  faqItems,
  contactItems,
  footerItems,
  practiceAreaItems,
  attorneyItems,
  caseResultItems,
  legalResourceItems,
  locationItems,
  reviewItems,
  accreditationItems,
  appointmentItems
} from './categories';

export const ComponentLibrary: React.FC = () => {
  return (
    <ScrollArea className="h-full">
      <div className="p-4">
        <h2 className="text-lg font-semibold mb-4">Component Library</h2>
        
        <Separator className="my-4" />
        <h3 className="text-base font-medium mb-2">General Components</h3>
        
        <ComponentCategory title="Hero Sections" items={heroItems} />
        <ComponentCategory title="Feature Sections" items={featureItems} />
        <ComponentCategory title="Testimonials" items={testimonialItems} />
        <ComponentCategory title="Call to Action" items={ctaItems} />
        <ComponentCategory title="Pricing Tables" items={pricingItems} />
        <ComponentCategory title="FAQ Sections" items={faqItems} />
        <ComponentCategory title="Contact Forms" items={contactItems} />
        <ComponentCategory title="Footer Sections" items={footerItems} />
        
        <Separator className="my-4" />
        <h3 className="text-base font-medium mb-2">Law Firm Specific</h3>
        
        <ComponentCategory title="Practice Areas" items={practiceAreaItems} />
        <ComponentCategory title="Attorney Profiles" items={attorneyItems} />
        <ComponentCategory title="Case Results" items={caseResultItems} />
        <ComponentCategory title="Legal Resources" items={legalResourceItems} />
        <ComponentCategory title="Office Locations" items={locationItems} />
        <ComponentCategory title="Client Reviews" items={reviewItems} />
        <ComponentCategory title="Accreditations" items={accreditationItems} />
        <ComponentCategory title="Appointment Booking" items={appointmentItems} />
      </div>
    </ScrollArea>
  );
};
