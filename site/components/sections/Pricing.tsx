'use client';

import { motion } from 'framer-motion';
import { PaperSurface } from '@/components/ui/ScrapbookElements';
import Button from '@/components/ui/Button';

interface PricingProps {
    onOpenApplication: () => void;
    onOpenTour: () => void;
}

export default function Pricing({ onOpenApplication, onOpenTour }: PricingProps) {
    return (
        <section id="pricing" className="py-24 bg-[#FDF6E9] relative overflow-hidden">
            {/* Subtle Paper Grain */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('/textures/paper-grain.svg')] pointer-events-none" />

            <div className="container relative z-10">
                <div className="max-w-5xl mx-auto text-center">
                    <h2 className="font-heading text-5xl md:text-7xl font-black text-[#1A1410] mb-16">
                        Bed Dues & Move-In
                    </h2>

                    <div className="grid md:grid-cols-3 gap-12 mb-20">
                        {/* Weekly Dues */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                        >
                            <PaperSurface rotation={1} className="p-10 flex flex-col items-center">
                                <span className="text-sm font-black text-stone-400 uppercase tracking-[0.2em] mb-6">Weekly Dues</span>
                                <div className="text-5xl md:text-6xl font-black text-[#1A1410] mb-4">$250</div>
                                <span className="text-xl font-bold text-stone-500">per week</span>
                            </PaperSurface>
                        </motion.div>

                        {/* Monthly Option */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <PaperSurface rotation={-1.5} className="p-10 flex flex-col items-center !bg-[#2F6F71] !text-white relative overflow-hidden" shadowSize="lg">
                                <div className="absolute inset-0 bg-black/10 mix-blend-multiply pointer-events-none" />
                                <span className="relative z-10 text-sm font-black text-white/70 uppercase tracking-[0.2em] mb-6">Monthly Option</span>
                                <div className="relative z-10 text-5xl md:text-6xl font-black text-white mb-4 drop-shadow-md">$900</div>
                                <span className="relative z-10 text-xl font-bold text-white/90">per month</span>
                                <p className="relative z-10 text-[10px] mt-6 opacity-60 font-bold uppercase tracking-widest">When approved / available</p>
                            </PaperSurface>
                        </motion.div>

                        {/* Move-in Fee */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                        >
                            <PaperSurface rotation={0.8} className="p-10 flex flex-col items-center">
                                <span className="text-sm font-black text-stone-400 uppercase tracking-[0.2em] mb-6">One-Time Fee</span>
                                <div className="text-5xl md:text-6xl font-black text-[#C7773B] mb-4">$200</div>
                                <span className="text-xl font-bold text-stone-500">move-in fee</span>
                            </PaperSurface>
                        </motion.div>
                    </div>

                    <p className="text-xl md:text-2xl text-stone-500 mb-16 font-bold max-w-2xl mx-auto leading-relaxed">
                        If you’re unsure what’s best, apply or text us—we’ll help you choose the right next step.
                    </p>

                    <div className="flex flex-col sm:flex-row justify-center gap-8">
                        <Button
                            onClick={onOpenApplication}
                            variant="hero-primary"
                            size="xl"
                            className="px-12 py-5 text-xl" // Override slightly if needed, but 'xl' is close. Using 'xl' from props mostly.
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
