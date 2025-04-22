
import { BuilderComponentType } from '@/types/builder';

interface StyleOption {
  value: string;
  label: string;
}

export function getStyleOptions(componentType: BuilderComponentType) {
  // Default alignment options for all components
  const alignmentOptions: StyleOption[] = [
    { value: 'left', label: 'Left' },
    { value: 'center', label: 'Center' },
    { value: 'right', label: 'Right' },
  ];

  // Component-specific style options
  const styleOptionsMap: Record<string, StyleOption[]> = {
    hero: [
      { value: 'classic', label: 'Classic' },
      { value: 'split', label: 'Split' },
      { value: 'fullscreen', label: 'Fullscreen' },
    ],
    testimonials: [
      { value: 'cards', label: 'Cards' },
      { value: 'carousel', label: 'Carousel' },
      { value: 'quotes', label: 'Quotes' },
    ],
    practiceAreas: [
      { value: 'grid', label: 'Grid' },
      { value: 'cards', label: 'Cards' },
      { value: 'list', label: 'List' },
    ],
    features: [
      { value: 'grid', label: 'Grid' },
      { value: 'columns', label: 'Columns' },
      { value: 'cards', label: 'Cards' },
    ],
    cta: [
      { value: 'simple', label: 'Simple' },
      { value: 'fullwidth', label: 'Full Width' },
      { value: 'split', label: 'Split' },
    ],
    footer: [
      { value: 'simple', label: 'Simple' },
      { value: 'columns', label: 'Columns' },
      { value: 'complex', label: 'Complex' },
    ],
    header: [
      { value: 'simple', label: 'Simple' },
      { value: 'centered', label: 'Centered' },
      { value: 'compact', label: 'Compact' },
    ],
    attorneyBios: [
      { value: 'cards', label: 'Cards' },
      { value: 'list', label: 'List' },
      { value: 'grid', label: 'Grid' },
    ],
    faq: [
      { value: 'accordion', label: 'Accordion' },
      { value: 'tabs', label: 'Tabs' },
      { value: 'list', label: 'List' },
    ],
  };

  return {
    styleOptions: styleOptionsMap[componentType] || [],
    alignmentOptions,
  };
}
