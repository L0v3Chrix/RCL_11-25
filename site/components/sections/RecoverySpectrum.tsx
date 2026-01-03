'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import RCLIcon from '@/components/ui/RCLIcon';
import { PaperSurface } from '@/components/ui/ScrapbookElements';

interface RecoveryPathway {
  id: string;
  name: string;
  gradientFrom: string;
  gradientTo: string;
  iconName: string;
  tagline: string;
  description: string;
  examples: string[];
  philosophy: string;
}

const pathways: RecoveryPathway[] = [
  {
    id: '12-step',
    name: '12-Step Programs',
    gradientFrom: '#C9A87C',
    gradientTo: '#B89A6D',
    iconName: 'twelve-step',
    tagline: 'Courage to Change',
    description: 'Traditional fellowship-based recovery grounded in spiritual principles and mutual support.',
    examples: ['AA (Alcoholics Anonymous)', 'NA (Narcotics Anonymous)', 'CA (Cocaine Anonymous)', 'Al-Anon'],
    philosophy: 'Surrender, spiritual awakening, and helping others through shared experience.',
  },
  {
    id: 'smart',
    name: 'SMART Recovery',
    gradientFrom: '#B8C4A0',
    gradientTo: '#A3B38C',
    iconName: 'smart-recovery',
    tagline: 'Energy & Empowerment',
    description: 'Science-based self-management and recovery training using cognitive behavioral therapy techniques.',
    examples: ['4-Point Program', 'CBT-based tools', 'Self-empowerment focus', 'Evidence-based methods'],
    philosophy: 'Building motivation, coping with urges, managing thoughts and behaviors.',
  },
  {
    id: 'dharma',
    name: 'Recovery Dharma',
    gradientFrom: '#D4C4A8',
    gradientTo: '#C5B599',
    iconName: 'dharma',
    tagline: 'Hope Through Mindfulness',
    description: 'Buddhist-informed approach emphasizing meditation, mindfulness, and compassionate investigation.',
    examples: ['Meditation practice', 'Mindful inquiry', 'Sangha community', 'Eight-fold path'],
    philosophy: 'Understanding the roots of addiction through meditation and wise action.',
  },
  {
    id: 'mat',
    name: 'MAT & Harm Reduction',
    gradientFrom: '#89A8A0',
    gradientTo: '#7A9991',
    iconName: 'mat',
    tagline: 'Growth at Your Pace',
    description: 'Medication-assisted treatment and harm reduction approaches that honor where you are.',
    examples: ['Suboxone/Buprenorphine', 'Methadone', 'Vivitrol/Naltrexone', 'Compassionate care'],
    philosophy: 'Meeting people where they are, reducing harm, supporting sustainable change.',
  },
  {
    id: 'holistic',
    name: 'Holistic & Spiritual',
    gradientFrom: '#A8B4C4',
    gradientTo: '#99A5B5',
    iconName: 'holistic',
    tagline: 'Peace & Connection',
    description: 'Faith-based, nature-centered, and holistic wellness approaches to healing.',
    examples: ['Christian recovery', 'Indigenous practices', 'Yoga & breathwork', 'Nature therapy'],
    philosophy: 'Whole-person healing through connection to something greater.',
  },
  {
    id: 'all-paths',
    name: 'Your Unique Path',
    gradientFrom: '#C4A8B8',
    gradientTo: '#B59AA9',
    iconName: 'unique-path',
    tagline: 'Wisdom in All Ways',
    description: 'Many people find strength by blending multiple approaches or creating their own path.',
    examples: ['Combination approach', 'Eclectic methods', 'Personal practices', 'What works for YOU'],
    philosophy: 'Recovery is personal. We support whatever keeps you in recovery and whole.',
  },
];

// Generate slight random rotation for handmade feel
const getRotation = (index: number) => {
  const rotations = [-2, 1.5, -1, 2, -1.5, 1];
  return rotations[index % rotations.length];
};

export default function RecoverySpectrum() {
  const [selectedPathway, setSelectedPathway] = useState<string | null>(null);
  const detailsRef = useRef<HTMLDivElement>(null);

  const selected = pathways.find(p => p.id === selectedPathway);

  // Scroll to details when a pathway is selected
  useEffect(() => {
    if (selectedPathway && detailsRef.current) {
      // Small delay to ensure the AnimatePresence content has rendered
      const timeoutId = setTimeout(() => {
        const headerOffset = 100; // Account for fixed header
        const elementTop = detailsRef.current?.getBoundingClientRect().top ?? 0;
        const offsetPosition = elementTop + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }, 100);

      return () => clearTimeout(timeoutId);
    }
  }, [selectedPathway]);

  return (
    <section className="py-24 bg-[#FDF6E9] overflow-hidden relative">
      {/* Paper grain texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('/textures/paper-grain.svg')] pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-20">
          <div className="inline-flex items-center gap-3 mb-8">
            <RCLIcon name="spectrum" size={32} />
            <span className="font-heading text-lg font-black text-[#2F6F71] uppercase tracking-[0.2em]">The Recovery Spectrum</span>
          </div>

          <h2 className="font-heading text-5xl md:text-6xl lg:text-8xl font-black text-[#1A1410] mb-8 leading-tight">
            Many Paths, One Community
          </h2>

          <p className="text-xl md:text-2xl text-stone-600 leading-relaxed mb-6 font-bold">
            Our rainbow logo isn&apos;t just colorful—it&apos;s meaningful. Each color represents a different recovery pathway we honor and support.
          </p>

          <p className="text-lg text-[#2F6F71] font-bold">
            At Recovery Centered Living, <span className="text-[#C7773B] font-black">all paths are welcome</span>. Whether you&apos;re working the 12 Steps, practicing mindfulness, using medication-assisted treatment, or finding your own way—you belong here.
          </p>
        </div>

        {/* Soft Gradient Bar (watercolor feel) */}
        <div className="relative mb-16 max-w-4xl mx-auto">
          <div className="h-6 rounded-full overflow-hidden shadow-lg opacity-80">
            <div
              className="h-full w-full"
              style={{
                background: 'linear-gradient(to right, #C9A87C, #B8C4A0, #D4C4A8, #89A8A0, #A8B4C4, #C4A8B8)'
              }}
            />
          </div>
          <p className="text-center text-sm text-stone-500 mt-4 italic font-bold">
            &quot;The spectrum of recovery is as diverse as the people who walk it.&quot;
          </p>
        </div>

        {/* Pathway Cards Grid - Scrapbook Style */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mb-16">
          {pathways.map((pathway, index) => (
            <motion.button
              key={pathway.id}
              onClick={() => setSelectedPathway(selectedPathway === pathway.id ? null : pathway.id)}
              className="text-left w-full"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <PaperSurface
                rotation={getRotation(index)}
                className={`h-full p-0 overflow-hidden transition-all duration-300 ${selectedPathway === pathway.id
                  ? 'shadow-2xl ring-4 ring-[#C7773B]/30'
                  : 'shadow-lg hover:shadow-xl'
                  }`}
                shadowSize="lg"
              >
                {/* Card Header with soft gradient */}
                <div
                  className="p-6 pb-4"
                  style={{
                    background: `linear-gradient(135deg, ${pathway.gradientFrom}40, ${pathway.gradientTo}20)`
                  }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <RCLIcon name={pathway.iconName} size={48} />
                    {selectedPathway === pathway.id && (
                      <RCLIcon name="check" size={24} />
                    )}
                  </div>
                  <h3 className="font-heading text-2xl font-black text-[#1A1410] mb-1">{pathway.name}</h3>
                  <p className="text-[#C7773B] text-sm font-black italic">{pathway.tagline}</p>
                </div>

                {/* Card Body */}
                <div className="p-6 pt-4 bg-white">
                  <p className="text-stone-600 leading-relaxed mb-4 font-medium">
                    {pathway.description}
                  </p>

                  <div className={`text-xs px-4 py-2 rounded-full inline-block font-black transition-colors ${selectedPathway === pathway.id
                    ? 'bg-[#C7773B] text-white'
                    : 'bg-[#FDF6E9] text-[#2F6F71]'
                    }`}>
                    {selectedPathway === pathway.id ? 'Tap to collapse' : 'Tap to learn more'}
                  </div>
                </div>
              </PaperSurface>
            </motion.button>
          ))}
        </div>

        {/* Selected Pathway Details */}
        <AnimatePresence>
          {selected && (
            <motion.div
              ref={detailsRef}
              id="recovery-spectrum-details"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="max-w-4xl mx-auto mb-16"
            >
              <PaperSurface rotation={0.5} className="p-8 md:p-10" shadowSize="lg">
                <div className="flex items-start gap-6 mb-8">
                  <RCLIcon name={selected.iconName} size={64} />
                  <div className="flex-1">
                    <h3 className="font-heading text-3xl font-black text-[#1A1410] mb-2">{selected.name}</h3>
                    <p className="text-lg font-black text-[#C7773B] mb-4">
                      {selected.tagline}
                    </p>
                    <p className="text-stone-600 text-lg leading-relaxed italic font-bold">
                      &quot;{selected.philosophy}&quot;
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-heading font-black text-[#1A1410] mb-4 flex items-center gap-3">
                      <RCLIcon name="clipboard" size={24} />
                      Examples & Approaches
                    </h4>
                    <ul className="space-y-3">
                      {selected.examples.map((example, index) => (
                        <li key={index} className="flex items-start gap-3 text-stone-600 font-medium">
                          <span className="text-[#C7773B] mt-1">•</span>
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div
                    className="p-6 rounded-2xl"
                    style={{
                      background: `linear-gradient(135deg, ${selected.gradientFrom}60, ${selected.gradientTo}40)`
                    }}
                  >
                    <h4 className="font-heading font-black text-[#1A1410] mb-4 flex items-center gap-3">
                      <RCLIcon name="chat" size={24} />
                      How We Support This Path
                    </h4>
                    <p className="text-stone-700 leading-relaxed font-medium">
                      We create space for {selected.name.toLowerCase()} in our houses through community respect, house meetings that honor all approaches, and connections to local resources that align with your chosen path.
                    </p>
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-stone-200">
                  <p className="text-sm text-stone-500 text-center font-bold">
                    <strong className="text-[#1A1410]">Remember:</strong> You don&apos;t have to choose just one. Many residents blend approaches in their personal recovery practice.
                  </p>
                </div>
              </PaperSurface>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Philosophy Statement - Act From Love */}
        <div className="max-w-4xl mx-auto">
          <PaperSurface rotation={-0.5} className="p-8 md:p-12 text-center" shadowSize="lg">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-6">
                <RCLIcon name="heart" size={40} />
              </div>
              <h3 className="font-heading text-3xl md:text-4xl font-black text-[#1A1410] mb-4">
                Act From Love, Not Fear
              </h3>
              <p className="text-xl text-stone-600 leading-relaxed mb-6 font-bold">
                This is our core philosophy at Recovery Centered Living. We don&apos;t believe there&apos;s only one &quot;right&quot; way to recover.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="inline-block mb-4">
                  <RCLIcon name="handshake" size={48} />
                </div>
                <h4 className="font-heading font-black text-[#1A1410] mb-2">Mutual Respect</h4>
                <p className="text-sm text-stone-600 font-medium">
                  We honor each person&apos;s path and create space for all approaches to coexist.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-block mb-4">
                  <RCLIcon name="growth" size={48} />
                </div>
                <h4 className="font-heading font-black text-[#1A1410] mb-2">Room to Grow</h4>
                <p className="text-sm text-stone-600 font-medium">
                  Your recovery path may evolve. We support wherever you are on your journey.
                </p>
              </div>

              <div className="text-center">
                <div className="inline-block mb-4">
                  <RCLIcon name="house" size={48} />
                </div>
                <h4 className="font-heading font-black text-[#1A1410] mb-2">Shared Home</h4>
                <p className="text-sm text-stone-600 font-medium">
                  Despite different paths, we&apos;re all working toward the same goal: a life in recovery worth living.
                </p>
              </div>
            </div>

            <div className="bg-white/60 rounded-2xl p-6 max-w-2xl mx-auto">
              <p className="text-[#1A1410] leading-relaxed font-medium">
                <span className="font-black text-lg block mb-3 text-[#C7773B]">&quot;The best path is the one that keeps you in recovery.&quot;</span>
                Whether that&apos;s the 12 Steps, meditation, therapy, medication, faith, or a blend of everything—
                <strong> we&apos;re here to support your unique journey</strong>. That&apos;s what the Recovery Spectrum means to us.
              </p>
            </div>
          </PaperSurface>
        </div>
      </div>
    </section>
  );
}
