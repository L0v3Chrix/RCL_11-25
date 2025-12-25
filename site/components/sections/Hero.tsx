'use client';

import Image from 'next/image';
import { siteConfig, getSmsLink } from '@/config/site';

export default function Hero() {
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

      {/* Navigation Arrows (carousel style) - Mockup indicators */}
      <div className="container relative z-30 pointer-events-none">
        <div className="absolute -left-8 md:-left-12 lg:-left-20 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-auto">
          <button
            className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all border border-white/20 shadow-2xl group"
            aria-label="Previous slide"
          >
            <svg viewBox="0 0 24 24" className="w-10 h-10 fill-none stroke-current stroke-3 transition-transform group-hover:-translate-x-1"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
        </div>
        <div className="absolute -right-8 md:-right-12 lg:-right-20 top-1/2 -translate-y-1/2 hidden xl:block pointer-events-auto">
          <button
            className="w-16 h-16 rounded-full bg-white/10 hover:bg-white/20 backdrop-blur-md flex items-center justify-center text-white transition-all border border-white/20 shadow-2xl group"
            aria-label="Next slide"
          >
            <svg viewBox="0 0 24 24" className="w-10 h-10 fill-none stroke-current stroke-3 transition-transform group-hover:translate-x-1"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>
      </div>

      {/* Content Container with Paper Overlay Panel (Mockup match) */}
      <div className="container relative z-10 px-6">
        {/* Subtle Paper-overlay panel behind copy as requested */}
        <div className="relative max-w-4xl p-8 md:p-12 rounded-[2rem] bg-[#FDF6E9]/5 backdrop-blur-[2px] border border-white/5 shadow-2xl">
          {/* Main Heading */}
          <h1 className="font-heading text-6xl md:text-7xl lg:text-9xl font-black text-white mb-10 leading-[0.95] tracking-tighter drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
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
            <a
              href={siteConfig.APPLICATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C7773B] hover:bg-[#B66629] text-white font-black text-2xl px-14 py-6 rounded-full transition-all shadow-[0_15px_40px_rgba(199,119,59,0.5)] hover:shadow-[0_20px_50px_rgba(199,119,59,0.6)] transform hover:-translate-y-1 text-center"
            >
              Submit Application
            </a>
            <a
              href={getSmsLink()}
              className="bg-transparent hover:bg-white/10 text-white font-black text-2xl px-14 py-6 rounded-full transition-all border-4 border-white/60 hover:border-white shadow-2xl transform hover:-translate-y-1 text-center backdrop-blur-md"
            >
              Schedule a Tour
            </a>
          </div>

          {/* Microcopy */}
          <p className="mt-16 text-white/60 text-lg font-black tracking-[0.2em] uppercase">
            {siteConfig.hero.microcopy}
          </p>
        </div>
      </div>

      {/* Slide dot indicators (bottom center) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-6 z-20">
        <button className="w-5 h-5 rounded-full bg-white shadow-2xl transition-all scale-125 border-2 border-white/20" aria-label="Slide 1 (current)"></button>
        <button className="w-4 h-4 rounded-full bg-white/30 hover:bg-white/50 transition-all shadow-lg border border-white/10" aria-label="Slide 2"></button>
        <button className="w-4 h-4 rounded-full bg-white/30 hover:bg-white/50 transition-all shadow-lg border border-white/10" aria-label="Slide 3"></button>
      </div>
    </section>
  );
}
