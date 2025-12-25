'use client';

import { motion } from 'framer-motion';
import { PaperSurface, Pushpin, Tape, getScrapbookVariant } from '@/components/ui/ScrapbookElements';

const TESTIMONIALS = [
    {
        quote: "RCL provided the accountability I needed when I was starting over. The environment is truly clean and focused on recovery, which made all the difference for me.",
        author: "Michael B.",
        role: "Resident",
    },
    {
        quote: "As a caseworker, I've seen many homes, but RCL stands out for their high standards and clear expectations. They genuinely care about the success of their residents.",
        author: "Sarah L.",
        role: "Referral Partner",
    },
    {
        quote: "Seeing the change in my son since he moved into an RCL home has been incredible. The spiritual and supportive environment was exactly what he needed.",
        author: "David K.",
        role: "Family Member",
    },
];

export default function Testimonials() {
    return (
        <section className="py-32 bg-[#F9F3EA] relative overflow-hidden">
            {/* Subtle paper grain texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('/textures/paper-grain.svg')] pointer-events-none" />

            <div className="container relative z-10 px-6">
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <h2 className="font-heading text-5xl md:text-6xl lg:text-8xl font-black text-[#1A1410] mb-8 leading-tight">
                        Stories From the Community
                    </h2>
                    <p className="text-xl md:text-2xl text-[#6B5F55] font-bold leading-relaxed max-w-2xl mx-auto">
                        RCL is built on lived experience, accountability, and real community.
                        Here’s what people have shared about their experience.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
                    {TESTIMONIALS.map((testimonial, index) => {
                        const variant = getScrapbookVariant(index + 5);
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30, rotate: variant.rotation * 2 }}
                                whileInView={{ opacity: 1, y: 0, rotate: variant.rotation }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1, duration: 0.6 }}
                                className="relative"
                            >
                                <PaperSurface
                                    className="p-10 h-full flex flex-col justify-between shadow-xl min-h-[400px]"
                                    rotation={variant.rotation}
                                >
                                    {/* Decoration elements */}
                                    <Pushpin className={`absolute z-30 ${variant.pinPosition}`} color={variant.pinColor} />
                                    <Tape className="-top-4 -right-10 opacity-40" rotation={20} variant={variant.tapeVariant} />

                                    <div className="relative">
                                        <div className="text-[#C7773B] text-6xl font-serif mb-6 leading-none">“</div>
                                        <p className="text-[#1A1410] text-xl md:text-2xl italic leading-relaxed mb-8 font-bold">
                                            {testimonial.quote}
                                        </p>
                                    </div>

                                    <div className="mt-auto">
                                        <div className="w-16 h-1.5 bg-[#C7773B]/30 mb-6"></div>
                                        <div className="font-heading text-2xl font-black text-[#1A1410] mb-1">
                                            {testimonial.author}
                                        </div>
                                        <div className="text-xs font-black text-[#2F6F71] uppercase tracking-[0.2em]">
                                            {testimonial.role}
                                        </div>
                                    </div>
                                </PaperSurface>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
