'use client';

import { motion } from 'framer-motion';
import { siteConfig, getSmsLink } from '@/config/site';
import { PaperSurface } from '@/components/ui/ScrapbookElements';

export default function Pricing() {
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
                            <PaperSurface rotation={-1.5} className="p-10 flex flex-col items-center bg-[#2F6F71] !text-white" shadowSize="lg">
                                <span className="text-sm font-black text-white/50 uppercase tracking-[0.2em] mb-6">Monthly Option</span>
                                <div className="text-5xl md:text-6xl font-black text-white mb-4">$900</div>
                                <span className="text-xl font-bold text-white/80">per month</span>
                                <p className="text-[10px] mt-6 opacity-40 font-bold uppercase tracking-widest">When approved / available</p>
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
                        <a
                            href={siteConfig.APPLICATION_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#C7773B] hover:bg-[#B6662A] text-white font-black text-xl px-12 py-5 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                        >
                            Submit Application
                        </a>
                        <a
                            href={getSmsLink()}
                            className="bg-transparent hover:bg-white/50 text-[#2F6F71] border-4 border-[#2F6F71]/30 hover:border-[#2F6F71] font-black text-xl px-12 py-5 rounded-full transition-all transform hover:-translate-y-1"
                        >
                            Schedule a Tour (Text Us)
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}
