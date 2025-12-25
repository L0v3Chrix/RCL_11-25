'use client';

import { motion } from 'framer-motion';
import { PaperSurface } from '@/components/ui/ScrapbookElements';

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
        <section className="py-24 bg-[#F9F3EA] relative overflow-hidden">
            <div className="container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#1A1410] mb-6">
                        Stories From the Community
                    </h2>
                    <p className="text-lg text-[#6B5F55] font-medium leading-relaxed">
                        RCL is built on lived experience, accountability, and real community. Here’s what people have shared about their experience.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {TESTIMONIALS.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <PaperSurface isTorn={true} className="p-8 h-full flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
                                <div>
                                    <div className="text-[#C7773B] text-4xl font-serif mb-4 flex items-center gap-2">
                                        <span>“</span>
                                    </div>
                                    <p className="text-[#2C2C2C] text-lg italic leading-relaxed mb-6 font-medium">
                                        {testimonial.quote}
                                    </p>
                                </div>
                                <div>
                                    <div className="w-12 h-1 bg-[#2D8A6E]/20 mb-4"></div>
                                    <div className="font-heading font-bold text-[#1A1410]">{testimonial.author}</div>
                                    <div className="text-sm font-bold text-[#C7773B] uppercase tracking-widest">{testimonial.role}</div>
                                </div>
                            </PaperSurface>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
