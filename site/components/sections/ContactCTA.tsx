'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { siteConfig, getTelLink } from '@/config/site';
import Button from '@/components/ui/Button';

interface ContactCTAProps {
  onOpenApplication: () => void;
  onOpenTour: () => void;
}

export default function ContactCTA({ onOpenApplication, onOpenTour }: ContactCTAProps) {
  return (
    <section id="contact" className="relative py-32 md:py-48 overflow-hidden bg-[#1A1410]">
      {/* Background with cinematic overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Recovery community"
          fill
          className="object-cover scale-110 opacity-40"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1410] via-transparent to-[#1A1410]"></div>
      </div>

      <div className="container relative z-10">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Bold Overlay Panel (Mockup Match) - Darkened for readability */}
          <div className="bg-[#1A1410]/70 backdrop-blur-xl border border-white/10 p-12 md:p-20 rounded-[3rem] shadow-[0_30px_100px_rgba(0,0,0,0.8)] text-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-20 pointer-events-none" />
            {/* Header */}
            <h2 className="font-heading text-5xl md:text-6xl lg:text-8xl font-black !text-white mb-8 leading-[1.1] drop-shadow-2xl">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl md:text-3xl text-white/90 mb-16 max-w-3xl mx-auto font-bold leading-relaxed">
              Take the first step toward recovery in a supportive community. We&apos;re here to help you get connected.
            </p>

            {/* BIG Pill CTA Buttons - Mockup style */}
            <div className="flex flex-col sm:flex-row gap-8 justify-center items-center">
              {/* Primary: Submit Application (Orange) */}
              <Button
                onClick={onOpenApplication}
                variant="hero-primary"
                size="xl"
                className="w-full sm:w-auto"
              >
                Submit Application
              </Button>

              {/* Secondary: Schedule Tour (Teal) */}
              <Button
                onClick={onOpenTour}
                variant="secondary" // Solid teal block
                size="xl"
                className="w-full sm:w-auto flex items-center justify-center gap-4"
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-8 h-8">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Schedule a Tour (Text Us)
              </Button>
            </div>

            <p className="mt-16 text-white/40 text-sm font-bold tracking-widest uppercase">
              Questions? Call or text us at <a href={getTelLink()} className="text-white/70 hover:text-white transition-colors underline underline-offset-8">{siteConfig.GOOGLE_VOICE_DISPLAY}</a>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
