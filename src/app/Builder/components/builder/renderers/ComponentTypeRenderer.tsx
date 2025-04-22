
import React from 'react';
import { BuilderComponent } from '@/app/Builder/types/builder';

// Import component renderers
import { HeroSection } from '@/app/Builder/components/sections/HeroSection';
import { TestimonialsSection } from '@/app/Builder/components/sections/TestimonialsSection';
import { PracticeAreasSection } from '@/app/Builder/components/sections/PracticeAreasSection';
import { AttorneyBiosSection } from '@/app/Builder/components/sections/AttorneyBiosSection';
import { ContactFormSection } from '@/app/Builder/components/sections/ContactFormSection';
import { LocationMapSection } from '@/app/Builder/components/sections/LocationMapSection';
import { CaseResultsSection } from '@/app/Builder/components/sections/CaseResultsSection';
import { TrustBadgesSection } from '@/app/Builder/components/sections/TrustBadgesSection';
import { FAQSection } from '@/app/Builder/components/sections/FAQSection';
import { PricingSection } from '@/app/Builder/components/sections/PricingSection';
import { BlogHighlightsSection } from '@/app/Builder/components/sections/BlogHighlightsSection';
import { FooterSection } from '@/app/Builder/components/sections/FooterSection';
import { HeaderSection } from '@/app/Builder/components/sections/HeaderSection';

interface ComponentTypeRendererProps {
  component: BuilderComponent;
}

export const ComponentTypeRenderer: React.FC<ComponentTypeRendererProps> = ({
  component,
}) => {
  switch (component.type) {
    case 'hero':
      return <HeroSection 
        headline={component.props.headline || 'Default Headline'}
        subheadline={component.props.subheadline}
        ctaText={component.props.ctaText}
        ctaUrl={component.props.ctaUrl}
        alignment={component.props.alignment}
        backgroundType={component.props.backgroundType}
        backgroundColor={component.props.backgroundColor}
        textColor={component.props.textColor}
        imageUrl={component.props.imageUrl}
        style={component.props.style}
      />;
    case 'testimonials':
      return <TestimonialsSection 
        items={component.props.items || []}
        headline={component.props.headline}
        style={component.props.style}
      />;
    case 'practiceAreas':
      return <PracticeAreasSection 
        areas={component.props.areas || []}
        headline={component.props.headline}
        description={component.props.description}
        style={component.props.style}
      />;
    case 'attorneyBios':
      return <AttorneyBiosSection 
        attorneys={component.props.attorneys || []}
        headline={component.props.headline}
        style={component.props.style}
      />;
    case 'contactForm':
      return <ContactFormSection {...component.props} />;
    case 'locationMap':
      return <LocationMapSection 
        address={component.props.address || 'Default Address'}
        phone={component.props.phone}
        email={component.props.email}
        showMap={component.props.showMap}
        headline={component.props.headline}
        style={component.props.style}
      />;
    case 'caseResults':
      return <CaseResultsSection 
        results={component.props.results || []}
        headline={component.props.headline}
        description={component.props.description}
        style={component.props.style}
      />;
    case 'trustBadges':
      return <TrustBadgesSection 
        logos={component.props.logos || []}
        headline={component.props.headline}
        style={component.props.style}
      />;
    case 'faq':
      return <FAQSection 
        items={component.props.items || []}
        headline={component.props.headline}
        style={component.props.style}
      />;
    case 'pricing':
      return <PricingSection 
        options={component.props.options || []}
        headline={component.props.headline}
        description={component.props.description}
        style={component.props.style}
      />;
    case 'blogHighlights':
      return <BlogHighlightsSection 
        posts={component.props.posts || []}
        headline={component.props.headline}
        description={component.props.description}
        style={component.props.style}
      />;
    case 'footer':
      return <FooterSection {...component.props} />;
    case 'header':
      return <HeaderSection {...component.props} />;
    default:
      return (
        <div className="p-8 text-center">
          <p>Unknown component type: {component.type}</p>
        </div>
      );
  }
};
