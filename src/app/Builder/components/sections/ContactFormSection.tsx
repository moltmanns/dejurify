
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/app/Builder/components/ui/label';

interface ContactFormSectionProps {
  style?: 'standard' | 'split' | 'compact';
  headline?: string;
  subheadline?: string;
  submitButtonText?: string;
  fields?: string[];
}

export const ContactFormSection: React.FC<ContactFormSectionProps> = ({
  style = 'standard',
  headline = 'Contact Us',
  subheadline = "We're here to help with your legal needs. Fill out the form below and we'll get back to you promptly.",
  submitButtonText = 'Submit',
  fields = ['name', 'email', 'phone', 'message'],
}) => {
  const renderStandardStyle = () => (
    <div className="bg-white dark:bg-gray-900 py-16">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-10">
          {headline && (
            <h2 className="text-3xl font-serif font-bold mb-4">{headline}</h2>
          )}
          {subheadline && (
            <p className="text-gray-600 dark:text-gray-400">{subheadline}</p>
          )}
        </div>
        <form className="space-y-6">
          {fields.includes('name') && (
            <div className="space-y-2">
              <Label htmlFor="name">Full Name</Label>
              <Input id="name" placeholder="John Smith" />
            </div>
          )}
          
          {fields.includes('email') && (
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input id="email" type="email" placeholder="john@example.com" />
            </div>
          )}
          
          {fields.includes('phone') && (
            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number</Label>
              <Input id="phone" type="tel" placeholder="(555) 123-4567" />
            </div>
          )}
          
          {fields.includes('subject') && (
            <div className="space-y-2">
              <Label htmlFor="subject">Subject</Label>
              <Input id="subject" placeholder="Legal Consultation Request" />
            </div>
          )}
          
          {fields.includes('message') && (
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" placeholder="How can we help you?" rows={4} />
            </div>
          )}
          
          <Button 
            type="submit" 
            className="w-full bg-legal-navy hover:bg-legal-navy/90"
          >
            {submitButtonText}
          </Button>
        </form>
      </div>
    </div>
  );

  const renderSplitStyle = () => (
    <div className="bg-gray-50 dark:bg-gray-900">
      <div className="grid md:grid-cols-2">
        <div className="bg-legal-navy text-white p-8 md:p-12 lg:p-16 flex items-center">
          <div>
            {headline && (
              <h2 className="text-3xl font-serif font-bold mb-4">{headline}</h2>
            )}
            {subheadline && (
              <p className="text-gray-200 mb-6">{subheadline}</p>
            )}
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mr-3 text-legal-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Address</h3>
                  <p className="text-gray-200">123 Legal Street, Suite 400, New York, NY 10001</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 text-legal-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-gray-200">(555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mr-3 text-legal-gold">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-200">contact@lawfirm.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-8 md:p-12 lg:p-16">
          <form className="space-y-6">
            {fields.includes('name') && (
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" placeholder="John Smith" />
              </div>
            )}
            
            {fields.includes('email') && (
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input id="email" type="email" placeholder="john@example.com" />
              </div>
            )}
            
            {fields.includes('phone') && (
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input id="phone" type="tel" placeholder="(555) 123-4567" />
              </div>
            )}
            
            {fields.includes('message') && (
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" rows={4} />
              </div>
            )}
            
            <Button 
              type="submit" 
              className="bg-legal-navy hover:bg-legal-navy/90"
            >
              {submitButtonText}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );

  const renderCompactStyle = () => (
    <div className="bg-white dark:bg-gray-900 py-12">
      <div className="container mx-auto px-4 max-w-lg">
        <div className="bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md p-6">
          {headline && (
            <h2 className="text-2xl font-serif font-bold mb-2">{headline}</h2>
          )}
          {subheadline && (
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-6">{subheadline}</p>
          )}
          <form className="space-y-4">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {fields.includes('name') && (
                <div>
                  <Label htmlFor="name" className="sr-only">Full Name</Label>
                  <Input id="name" placeholder="Full Name" />
                </div>
              )}
              
              {fields.includes('email') && (
                <div>
                  <Label htmlFor="email" className="sr-only">Email Address</Label>
                  <Input id="email" type="email" placeholder="Email Address" />
                </div>
              )}
              
              {fields.includes('phone') && (
                <div className={!fields.includes('subject') ? 'sm:col-span-2' : ''}>
                  <Label htmlFor="phone" className="sr-only">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="Phone Number" />
                </div>
              )}
              
              {fields.includes('subject') && (
                <div className={!fields.includes('phone') ? 'sm:col-span-2' : ''}>
                  <Label htmlFor="subject" className="sr-only">Subject</Label>
                  <Input id="subject" placeholder="Subject" />
                </div>
              )}
            </div>
            
            {fields.includes('message') && (
              <div>
                <Label htmlFor="message" className="sr-only">Message</Label>
                <Textarea id="message" placeholder="How can we help you?" rows={3} />
              </div>
            )}
            
            <Button 
              type="submit" 
              className="w-full bg-legal-gold hover:bg-legal-gold/90 text-white"
            >
              {submitButtonText}
            </Button>
          </form>
        </div>
      </div>
    </div>
  );

  switch (style) {
    case 'split':
      return renderSplitStyle();
    case 'compact':
      return renderCompactStyle();
    default:
      return renderStandardStyle();
  }
};
