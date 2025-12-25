'use client';

import { motion } from 'framer-motion';
import { siteConfig } from '@/config/site';
import { PaperSurface, DoodleUnderline } from '@/components/ui/ScrapbookElements';

export default function Mission() {
    return (
        <section className="py-24 bg-[#FDF6E9] relative overflow-hidden">
            {/* Subtle Grain */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('/textures/paper-grain.svg')] pointer-events-none" />

            <div className="container relative z-10">
                <div className="max-w-5xl mx-auto">
                    {/* Mission Section */}
                    <div className="text-center mb-24">
                        <div className="inline-block relative">
                            <span className="inline-block text-xs font-black tracking-[0.4em] text-[#C7773B] uppercase mb-2">
                                Our Mission
                            </span>
                            <DoodleUnderline className="absolute -bottom-2 left-0 w-full opacity-40" />
                        </div>
                        <h2 className="font-heading text-4xl md:text-5xl font-black text-[#1A1410] mt-12 mb-12">
                            Creating a foundation for lasting change.
                        </h2>

                        <div className="max-w-3xl mx-auto">
                            <PaperSurface rotation={0.5} className="p-10 md:p-16 mb-8" shadowSize="md">
                                <p className="text-lg md:text-xl text-stone-600 font-bold leading-relaxed max-w-[42ch] mx-auto">
                                    {siteConfig.mission.statement}
                                </p>
                            </PaperSurface>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                        {/* What We Are */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <PaperSurface rotation={-1} className="p-10 md:p-14 h-full" shadowSize="lg">
                                <h3 className="font-heading text-3xl font-black text-[#2F6F71] mb-10 flex items-center gap-4">
                                    <span className="w-10 h-10 rounded-full bg-[#2F6F71] text-white flex items-center justify-center text-xl font-black">✓</span>
                                    What We Are
                                </h3>
                                <ul className="space-y-8">
                                    {siteConfig.mission.whatWeAre.map((item, index) => (
                                        <li key={index} className="flex gap-5 group">
                                            <span className="text-[#2F6F71] font-black text-2xl group-hover:scale-125 transition-transform translate-y-[-2px]">•</span>
                                            <span className="text-stone-700 text-lg leading-relaxed font-bold">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </PaperSurface>
                        </motion.div>

                        {/* What We Are Not */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.1 }}
                        >
                            <PaperSurface rotation={1.5} className="p-10 md:p-14 h-full bg-[#F6F1E7]" shadowSize="lg">
                                <h3 className="font-heading text-3xl font-black text-[#C7773B] mb-10 flex items-center gap-4">
                                    <span className="w-10 h-10 rounded-full bg-[#C7773B] text-white flex items-center justify-center text-xl font-black">✕</span>
                                    What We Are Not
                                </h3>
                                <ul className="space-y-8">
                                    {siteConfig.mission.whatWeAreNot.map((item, index) => (
                                        <li key={index} className="flex gap-5 group">
                                            <span className="text-[#C7773B] font-black text-2xl group-hover:scale-125 transition-transform translate-y-[-2px]">•</span>
                                            <span className="text-stone-700 text-lg leading-relaxed font-bold">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </PaperSurface>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}
