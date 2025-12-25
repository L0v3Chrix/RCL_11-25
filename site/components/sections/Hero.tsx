'use client';

import Image from 'next/image';
import { siteConfig } from '@/config/site';
import Button from '@/components/ui/Button';

interface HeroProps {
  onOpenApplication: () => void;
  onOpenTour: () => void;
}

export default function Hero({ onOpenApplication, onOpenTour }: HeroProps) {
  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-20">
      {/* Background: Hero Photo with heavy cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Recovery Centered Living community in Austin"
          fill
          priority
          className="object-cover scale-105"
          sizes="100vw"
        />
        {/* Dynamic dark gradient overlay - heavier on the left per mockup */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-transparent"></div>
        {/* Noise texture overlay */}
        <div className="absolute inset-0 opacity-[0.08] bg-[url('/textures/paper-grain.svg')] mix-blend-overlay pointer-events-none"></div>
      </div>

      {/* Content Container with Paper Overlay Panel (Mockup match) */}
      <div className="container relative z-10 px-6">
        {/* Subtle Paper-overlay panel behind copy as requested */}
        <div className="relative max-w-4xl p-8 md:p-12 rounded-[2rem] bg-[#FDF6E9]/5 backdrop-blur-[2px] border border-white/5 shadow-2xl">
          {/* Main Heading */}
          <h1 className="font-heading text-6xl md:text-7xl lg:text-9xl font-black !text-white mb-10 leading-[0.95] tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
            {siteConfig.hero.headline}<br />
            <span className="text-[#C7773B] drop-shadow-none">{siteConfig.hero.headlineAccent}</span><br />
            {siteConfig.hero.headlineEnd}
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl lg:text-3xl text-white/95 mb-14 max-w-2xl leading-relaxed drop-shadow-xl font-bold">
            {siteConfig.hero.subheadline}
          </p>

          {/* BIG CTA Buttons - Massive pills per mockup */}
          <div className="flex flex-col sm:flex-row gap-8">
            <Button
              onClick={onOpenApplication}
              variant="hero-primary"
              size="xl"
            >
              Submit Application
            </Button>
            <Button
              onClick={onOpenTour}
              variant="hero-secondary"
              size="xl"
            >
              Schedule a Tour
            </Button>
          </div>

          {/* Microcopy */}
          <p className="mt-16 text-white/60 text-lg font-black tracking-[0.2em] uppercase">
            {siteConfig.hero.microcopy}
          </p>
        </div>
      </div>
    </section>
  );
}
