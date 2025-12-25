'use client';

import { motion } from 'framer-motion';
import RCLIcon from '@/components/ui/RCLIcon';
import { DoodleArrow } from '@/components/ui/ScrapbookElements';

const STEPS = [
  {
    title: 'Explore Houses',
    description: "Browse our men's and women's homes and see what feels like the best fit.",
    iconName: 'house',
  },
  {
    title: 'Submit Application',
    description: 'Share the basics so we can confirm fit, timing, and next steps.',
    iconName: 'clipboard',
  },
  {
    title: 'We Review + Follow Up',
    description: 'Our management team personally reviews applications and follows up.',
    iconName: 'chat',
  },
  {
    title: 'Move-in Coordination / Tour',
    description: "Schedule a tour by text and we'll coordinate details with clarity.",
    iconName: 'key',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative py-28 bg-[#F6F1E7]">
      <div className="container px-6">
        {/* Section Header */}
        <div className="text-center mb-24 relative">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-8xl font-black text-[#1A1410] mb-6">
            How It Works
          </h2>
          <p className="text-xl md:text-2xl text-stone-500 mb-8 font-bold max-w-2xl mx-auto">
            Getting started is simple. We&apos;ll help you take the next right step.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-20">
          {STEPS.map((step, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {/* Icon Container - More playful with doodle circle background */}
              <div className="relative w-32 h-32 flex items-center justify-center mb-8">
                <div className="absolute inset-0 bg-white rounded-full shadow-xl transition-transform group-hover:scale-110 duration-300" />
                {/* Decorative hand-drawn circle outline */}
                <svg viewBox="0 0 100 100" className="absolute inset-[-10%] w-[120%] h-[120%] text-[#C7773B]/20 pointer-events-none transition-transform group-hover:rotate-12 duration-500">
                  <circle
                    cx="50" cy="50" r="45"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="10 5"
                    className="opacity-40"
                  />
                </svg>
                <div className="relative z-10 transition-transform group-hover:scale-105 duration-300">
                  <RCLIcon name={step.iconName} size={56} />
                </div>
              </div>

              {/* Content */}
              <h3 className="font-heading text-2xl font-black text-[#1A1410] leading-tight mb-4 group-hover:text-[#C7773B] transition-colors">
                {index + 1}. {step.title}
              </h3>
              <p className="text-base text-stone-500 font-bold leading-relaxed max-w-[240px]">
                {step.description}
              </p>

              {/* Arrow between steps (except last one) - hidden on mobile */}
              {index < STEPS.length - 1 && (
                <div
                  className="hidden lg:block absolute top-16 z-0 opacity-15 transform translate-x-16 pointer-events-none"
                  style={{ left: `calc(25% * ${index + 1} - 40px)` }}
                >
                  <DoodleArrow className="w-24 h-12" />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
