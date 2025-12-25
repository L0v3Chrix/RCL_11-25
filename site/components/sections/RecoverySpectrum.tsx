'use client';

import React, { useState } from 'react';
import Card from '@/components/ui/Card';

interface RecoveryPathway {
  id: string;
  name: string;
  color: string;
  gradient: string;
  icon: string;
  tagline: string;
  description: string;
  examples: string[];
  philosophy: string;
}

const pathways: RecoveryPathway[] = [
  {
    id: '12-step',
    name: '12-Step Programs',
    color: '#ef4444',
    gradient: 'from-red-500 to-red-600',
    icon: '🔴',
    tagline: 'Courage to Change',
    description: 'Traditional fellowship-based recovery grounded in spiritual principles and mutual support.',
    examples: ['AA (Alcoholics Anonymous)', 'NA (Narcotics Anonymous)', 'CA (Cocaine Anonymous)', 'Al-Anon'],
    philosophy: 'Surrender, spiritual awakening, and helping others through shared experience.',
  },
  {
    id: 'smart',
    name: 'SMART Recovery',
    color: '#f97316',
    gradient: 'from-orange-500 to-orange-600',
    icon: '🟠',
    tagline: 'Energy & Empowerment',
    description: 'Science-based self-management and recovery training using cognitive behavioral therapy techniques.',
    examples: ['4-Point Program', 'CBT-based tools', 'Self-empowerment focus', 'Evidence-based methods'],
    philosophy: 'Building motivation, coping with urges, managing thoughts and behaviors.',
  },
  {
    id: 'dharma',
    name: 'Recovery Dharma',
    color: '#eab308',
    gradient: 'from-yellow-500 to-yellow-600',
    icon: '🟡',
    tagline: 'Hope Through Mindfulness',
    description: 'Buddhist-informed approach emphasizing meditation, mindfulness, and compassionate investigation.',
    examples: ['Meditation practice', 'Mindful inquiry', 'Sangha community', 'Eight-fold path'],
    philosophy: 'Understanding the roots of addiction through meditation and wise action.',
  },
  {
    id: 'mat',
    name: 'MAT & Harm Reduction',
    color: '#22c55e',
    gradient: 'from-green-500 to-green-600',
    icon: '🟢',
    tagline: 'Growth at Your Pace',
    description: 'Medication-assisted treatment and harm reduction approaches that honor where you are.',
    examples: ['Suboxone/Buprenorphine', 'Methadone', 'Vivitrol/Naltrexone', 'Compassionate care'],
    philosophy: 'Meeting people where they are, reducing harm, supporting sustainable change.',
  },
  {
    id: 'holistic',
    name: 'Holistic & Spiritual',
    color: '#3b82f6',
    gradient: 'from-blue-500 to-blue-600',
    icon: '🔵',
    tagline: 'Peace & Connection',
    description: 'Faith-based, nature-centered, and holistic wellness approaches to healing.',
    examples: ['Christian recovery', 'Indigenous practices', 'Yoga & breathwork', 'Nature therapy'],
    philosophy: 'Whole-person healing through connection to something greater.',
  },
  {
    id: 'all-paths',
    name: 'Your Unique Path',
    color: '#a855f7',
    gradient: 'from-purple-500 to-purple-600',
    icon: '🟣',
    tagline: 'Wisdom in All Ways',
    description: 'Many people find strength by blending multiple approaches or creating their own path.',
    examples: ['Combination approach', 'Eclectic methods', 'Personal practices', 'What works for YOU'],
    philosophy: 'Recovery is personal. We support whatever keeps you in recovery and whole.',
  },
];

export default function RecoverySpectrum() {
  const [selectedPathway, setSelectedPathway] = useState<string | null>(null);

  const selected = pathways.find(p => p.id === selectedPathway);

  return (
    <section className="py-20 bg-gradient-to-b from-white via-purple-50/20 to-white overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-100 via-yellow-100 via-green-100 via-blue-100 to-purple-100 rounded-full px-6 py-2 mb-6 border-2 border-primary-200">
            <span className="text-2xl">🌈</span>
            <span className="font-bold text-primary-900">The Recovery Spectrum</span>
          </div>

          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-900 mb-6">
            Many Paths, One Community
          </h2>

          <p className="text-xl text-brand-text leading-relaxed mb-4">
            Our rainbow logo isn&apos;t just colorful—it&apos;s meaningful. Each color represents a different recovery pathway we honor and support.
          </p>

          <p className="text-lg text-primary-700 font-medium">
            At Recovery Centered Living, <span className="text-brand-accent font-bold">all paths are welcome</span>. Whether you&apos;re working the 12 Steps, practicing mindfulness, using medication-assisted treatment, or finding your own way—you belong here.
          </p>
        </div>

        {/* Rainbow Progress Bar */}
        <div className="relative mb-12">
          <div className="h-4 rounded-full overflow-hidden shadow-lg mx-auto max-w-4xl">
            <div className="h-full w-full bg-gradient-to-r from-red-500 via-orange-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500"></div>
          </div>
          <p className="text-center text-sm text-primary-600 mt-3 italic">
            &quot;The spectrum of recovery is as diverse as the people who walk it.&quot;
          </p>
        </div>

        {/* Pathway Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {pathways.map((pathway) => (
            <button
              key={pathway.id}
              onClick={() => setSelectedPathway(selectedPathway === pathway.id ? null : pathway.id)}
              className={`text-left transition-all transform hover:scale-105 active:scale-95 ${selectedPathway === pathway.id ? 'scale-105 shadow-2xl' : ''
                }`}
            >
              <Card
                hoverable
                className={`h-full border-2 ${selectedPathway === pathway.id
                  ? `border-[${pathway.color}] shadow-xl`
                  : 'border-primary-200'
                  }`}
              >
                <div className={`bg-gradient-to-br ${pathway.gradient} text-white p-6 -mx-6 -mt-6 mb-4 rounded-t-lg`}>
                  <div className="flex items-start justify-between mb-3">
                    <span className="text-5xl">{pathway.icon}</span>
                    {selectedPathway === pathway.id && (
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    )}
                  </div>
                  <h3 className="font-heading text-2xl font-bold mb-1">{pathway.name}</h3>
                  <p className="text-white/90 text-sm font-medium italic">{pathway.tagline}</p>
                </div>

                <p className="text-brand-text leading-relaxed mb-4">
                  {pathway.description}
                </p>

                <div className={`text-xs px-3 py-1 rounded-full inline-block font-bold ${selectedPathway === pathway.id
                  ? `bg-gradient-to-r ${pathway.gradient} text-white`
                  : 'bg-primary-100 text-primary-700'
                  }`}>
                  {selectedPathway === pathway.id ? 'Tap to collapse ↑' : 'Tap to learn more ↓'}
                </div>
              </Card>
            </button>
          ))}
        </div>

        {/* Selected Pathway Details */}
        {selected && (
          <div className="max-w-4xl mx-auto mb-12 animate-in slide-in-from-bottom-4 duration-500">
            <Card className={`border-2 border-[${selected.color}] shadow-2xl bg-gradient-to-br from-white to-${selected.color}/5`}>
              <div className="flex items-start gap-4 mb-6">
                <span className="text-6xl">{selected.icon}</span>
                <div className="flex-1">
                  <h3 className="font-heading text-3xl font-bold text-primary-900 mb-2">{selected.name}</h3>
                  <p className={`text-lg font-medium mb-4 bg-gradient-to-r ${selected.gradient} bg-clip-text text-transparent`}>
                    {selected.tagline}
                  </p>
                  <p className="text-brand-text text-lg leading-relaxed mb-6 italic">
                    &quot;{selected.philosophy}&quot;
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-primary-900 mb-3 flex items-center gap-2">
                    <span className="text-xl">📋</span>
                    Examples & Approaches
                  </h4>
                  <ul className="space-y-2">
                    {selected.examples.map((example, index) => (
                      <li key={index} className="flex items-start gap-2 text-brand-text">
                        <span className={`mt-1 text-[${selected.color}]`}>•</span>
                        <span>{example}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`bg-gradient-to-br ${selected.gradient} text-white p-6 rounded-lg`}>
                  <h4 className="font-bold mb-3 flex items-center gap-2">
                    <span className="text-xl">💬</span>
                    How We Support This Path
                  </h4>
                  <p className="text-white/95 leading-relaxed">
                    We create space for {selected.name.toLowerCase()} in our houses through community respect, house meetings that honor all approaches, and connections to local resources that align with your chosen path.
                  </p>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-primary-200">
                <p className="text-sm text-primary-600 text-center">
                  <strong>Remember:</strong> You don&apos;t have to choose just one. Many residents blend approaches in their personal recovery practice.
                </p>
              </div>
            </Card>
          </div>
        )}

        {/* Philosophy Statement */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gradient-to-br from-primary-50 via-secondary-50 to-primary-50 border-2 border-primary-200 shadow-lg text-center">
            <div className="mb-6">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-white rounded-full shadow-lg mb-4">
                <span className="text-4xl">💛</span>
              </div>
              <h3 className="font-heading text-3xl font-bold text-primary-900 mb-3">
                Act From Love, Not Fear
              </h3>
              <p className="text-xl text-brand-text leading-relaxed mb-4">
                This is our core philosophy at Recovery Centered Living. We don&apos;t believe there&apos;s only one &quot;right&quot; way to recover.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-3xl mb-2">🤝</div>
                <h4 className="font-bold text-primary-900 mb-2">Mutual Respect</h4>
                <p className="text-sm text-brand-text">
                  We honor each person&apos;s path and create space for all approaches to coexist.
                </p>
              </div>

              <div>
                <div className="text-3xl mb-2">🌱</div>
                <h4 className="font-bold text-primary-900 mb-2">Room to Grow</h4>
                <p className="text-sm text-brand-text">
                  Your recovery path may evolve. We support wherever you are on your journey.
                </p>
              </div>

              <div>
                <div className="text-3xl mb-2">🏠</div>
                <h4 className="font-bold text-primary-900 mb-2">Shared Home</h4>
                <p className="text-sm text-brand-text">
                  Despite different paths, we&apos;re all working toward the same goal: a life in recovery worth living.
                </p>
              </div>
            </div>

            <div className="bg-white/60 rounded-lg p-6 max-w-2xl mx-auto">
              <p className="text-primary-900 leading-relaxed">
                <span className="font-bold text-lg block mb-3 text-brand-accent">&quot;The best path is the one that keeps you in recovery.&quot;</span>
                Whether that&apos;s the 12 Steps, meditation, therapy, medication, faith, or a blend of everything—
                <strong> we&apos;re here to support your unique journey</strong>. That&apos;s what the Recovery Spectrum means to us.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
