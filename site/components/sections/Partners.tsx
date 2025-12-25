'use client';

import { PaperSurface } from '@/components/ui/ScrapbookElements';
import Button from '@/components/ui/Button';

interface PartnersProps {
    onOpenApplication?: () => void;
    onOpenTour?: () => void;
}

export default function Partners({ onOpenApplication, onOpenTour }: PartnersProps) {
    const helpItems = [
        'Confirming fit and next steps',
        'Clarifying bed dues and move-in costs',
        'Explaining our accountability culture',
        'Coordinating tours and transitions',
    ];

    return (
        <section id="partners" className="py-24 bg-white relative overflow-hidden">
            {/* Subtle Texture */}
            <div className="absolute inset-0 opacity-[0.02] bg-[url('/textures/paper-grain.svg')] pointer-events-none" />

            <div className="container relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16 px-4">
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black text-[#1A1410] mb-8 leading-tight">
                            Support for Families & Referral Partners
                        </h2>
                        <p className="text-xl md:text-2xl text-stone-500 leading-relaxed mb-12 font-bold">
                            Choosing recovery living is a big decision—especially when you’re supporting someone you care about. We welcome communication from family members, caseworkers, clinicians, and referring institutions.
                        </p>
                    </div>

                    <PaperSurface isWavy={false} rotation={-0.5} className="p-10 md:p-16 mb-20 bg-[#FDF6E9]" shadowSize="lg">
                        <h3 className="font-heading text-3xl font-black text-[#2F6F71] mb-12">How we can help:</h3>
                        <div className="grid md:grid-cols-2 gap-10">
                            {helpItems.map((item, index) => (
                                <div key={index} className="flex gap-5 items-start group">
                                    <div className="w-8 h-8 rounded-full bg-[#2F6F71]/10 flex items-center justify-center flex-shrink-0 mt-1 transition-transform group-hover:scale-110">
                                        <span className="text-[#2F6F71] text-sm font-black">✓</span>
                                    </div>
                                    <span className="text-stone-700 font-bold text-lg leading-snug">{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="mt-16 pt-10 border-t border-stone-200">
                            <p className="text-base text-stone-400 font-bold italic">
                                We also work with local support systems like Integral Care in limited situations (availability is not guaranteed and timing can vary).
                            </p>
                        </div>
                    </PaperSurface>

                    <div className="flex flex-col sm:flex-row justify-center gap-8">
                        <Button
                            onClick={onOpenApplication}
                            variant="hero-primary"
                            size="xl"
                            className="px-12 py-5 text-xl"
                        >
                            Submit Application
                        </Button>
                        <Button
                            onClick={onOpenTour}
                            variant="hero-secondary-dark"
                            size="xl"
                            className="px-12 py-5 text-xl"
                        >
                            Schedule a Tour (Text Us)
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
