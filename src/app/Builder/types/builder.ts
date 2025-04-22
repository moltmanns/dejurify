
export type BuilderComponentType = 
  | 'hero'
  | 'testimonials'
  | 'practiceAreas'
  | 'attorneyBios'
  | 'contactForm'
  | 'locationMap'
  | 'caseResults'
  | 'trustBadges'
  | 'faq'
  | 'pricing'
  | 'blogHighlights'
  | 'legalResources'
  | 'clientReviews'
  | 'appointmentBooking'
  | 'footer'
  | 'header'
  | 'features'
  | 'cta';

export interface BuilderComponent {
  id: string;
  type: BuilderComponentType;
  props: Record<string, any>;
}

export interface BuilderPage {
  id: string;
  name: string;
  slug: string;
  components: BuilderComponent[];
}

export type DeviceType = 'desktop' | 'tablet' | 'mobile';

export interface DragItem {
  type: string;
  id: string;
  index: number;
  component?: BuilderComponent;
}

export interface PublishedSite {
  pages: BuilderPage[];
  publishedAt: string;
}
