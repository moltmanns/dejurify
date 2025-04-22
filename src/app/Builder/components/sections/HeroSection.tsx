
import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

interface HeroSectionProps {
  style?: 'classic' | 'split' | 'fullscreen';
  headline: string;
  subheadline?: string;
  ctaText?: string;
  ctaUrl?: string;
  alignment?: 'left' | 'center' | 'right';
  backgroundType?: 'color' | 'image';
  backgroundColor?: string;
  textColor?: string;
  imageUrl?: string;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  style = 'classic',
  headline,
  subheadline,
  ctaText,
  ctaUrl = '#',
  alignment = 'left',
  backgroundType = 'color',
  backgroundColor = '#1A365D',
  textColor = '#FFFFFF',
  imageUrl,
}) => {
  const textAlignClass = 
    alignment === 'center' 
      ? 'text-center mx-auto' 
      : alignment === 'right' 
        ? 'text-right ml-auto' 
        : 'text-left';

  const renderClassicHero = () => (
    <div 
      className="relative px-4 py-16 sm:py-24 lg:py-32"
      style={{ 
        backgroundColor: backgroundType === 'color' ? backgroundColor : undefined,
        backgroundImage: backgroundType === 'image' && imageUrl ? `url(${imageUrl})` : undefined,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: textColor
      }}
    >
      <div className="container mx-auto">
        <div className={`max-w-xl ${textAlignClass}`}>
          <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            {headline}
          </h1>
          {subheadline && (
            <p className="text-lg sm:text-xl mb-8">
              {subheadline}
            </p>
          )}
          {ctaText && (
            <Button 
              asChild
              size="lg"
              className="bg-legal-gold hover:bg-legal-gold/90 text-white"
            >
              <a href={ctaUrl}>
                {ctaText}
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );

  const renderSplitHero = () => (
    <div className="relative">
      <div className="grid grid-cols-1 md:grid-cols-2">
        <div 
          className="px-4 py-16 sm:py-24 lg:py-32 flex items-center"
          style={{ 
            backgroundColor: backgroundColor,
            color: textColor
          }}
        >
          <div className={`max-w-xl ${textAlignClass} px-4 sm:px-6 lg:px-8`}>
            <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
              {headline}
            </h1>
            {subheadline && (
              <p className="text-lg sm:text-xl mb-8">
                {subheadline}
              </p>
            )}
            {ctaText && (
              <Button 
                asChild
                size="lg"
                className="bg-legal-gold hover:bg-legal-gold/90 text-white"
              >
                <a href={ctaUrl}>
                  {ctaText}
                </a>
              </Button>
            )}
          </div>
        </div>
        <div 
          className="h-64 md:h-auto"
          style={{ 
            backgroundImage: imageUrl ? `url(${imageUrl})` : 'linear-gradient(to right, #1e3a8a, #3b82f6)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        ></div>
      </div>
    </div>
  );

  const renderFullscreenHero = () => (
    <div 
      className="relative flex items-center justify-center min-h-[80vh]"
      style={{ 
        backgroundImage: imageUrl 
          ? `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${imageUrl})` 
          : `linear-gradient(${backgroundColor}, ${backgroundColor})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: textColor
      }}
    >
      <div className="container mx-auto px-4 py-24">
        <div className={`max-w-3xl ${textAlignClass}`}>
          <h1 className="text-4xl font-serif font-bold tracking-tight sm:text-5xl lg:text-6xl mb-6">
            {headline}
          </h1>
          {subheadline && (
            <p className="text-xl sm:text-2xl mb-8">
              {subheadline}
            </p>
          )}
          {ctaText && (
            <Button 
              asChild
              size="lg"
              className="bg-legal-gold hover:bg-legal-gold/90 text-white"
            >
              <a href={ctaUrl}>
                {ctaText}
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );

  switch (style) {
    case 'split':
      return renderSplitHero();
    case 'fullscreen':
      return renderFullscreenHero();
    default:
      return renderClassicHero();
  }
};
