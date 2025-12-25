'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { PaperSurface } from '@/components/ui/ScrapbookElements';

const FAQS = [
    {
        question: "What is a high accountability home?",
        answer: "A high accountability home is recovery living with clear expectations that protect a clean environment. You’ll be supported—and you’ll also be expected to show up, follow through, and contribute."
    },
    {
        question: "What do you mean by “clean environment”?",
        answer: "“Clean” means the home is protected as a recovery-centered space. The environment supports recovery, safety, and accountability."
    },
    {
        question: "Are you a treatment center?",
        answer: "No. We’re recovery living, not clinical treatment. Many residents also participate in treatment, outpatient care, meetings, therapy, or other support while living here."
    },
    {
        question: "How many homes do you have?",
        answer: "We have six homes in the Austin area: five men’s homes and one women’s home."
    },
    {
        question: "What are bed dues?",
        answer: "Standard bed dues are $250/week or $900/month, plus a $200 move-in fee."
    },
    {
        question: "Can family members or caseworkers reach out?",
        answer: "Yes—family and referral partners are welcome to contact us. We’ll help you make a safe, reliable decision."
    },
    {
        question: "How do I get started?",
        answer: "Click Submit Application or Schedule a Tour (Text Us)."
    }
];

export default function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="faq" className="py-24 bg-[#FDF6E9] relative overflow-hidden">
            {/* Grain */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('/textures/paper-grain.svg')] pointer-events-none" />

            <div className="container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20 px-4">
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-8xl font-black text-[#1A1410] mb-8">
                        FAQs
                    </h2>
                    <p className="text-xl md:text-2xl text-stone-500 font-bold leading-relaxed">
                        Everything you need to know about our recovery homes.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto space-y-8 px-4">
                    {FAQS.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05 }}
                        >
                            <PaperSurface
                                rotation={index % 2 === 0 ? 0.3 : -0.3}
                                className="overflow-hidden"
                                shadowSize="md"
                            >
                                <button
                                    onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                    className="w-full text-left p-8 md:p-10 flex justify-between items-center group transition-colors"
                                >
                                    <span className={`font-heading text-xl md:text-2xl font-black transition-colors ${activeIndex === index ? 'text-[#C7773B]' : 'text-[#1A1410] group-hover:text-[#C7773B]'}`}>
                                        {faq.question}
                                    </span>
                                    <ChevronDown
                                        className={`w-8 h-8 text-[#C7773B] transition-transform duration-500 ${activeIndex === index ? 'rotate-180' : ''}`}
                                    />
                                </button>
                                <AnimatePresence>
                                    {activeIndex === index && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <div className="px-8 md:px-10 pb-10 text-stone-600 leading-relaxed text-lg font-bold border-t border-stone-100 pt-8">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </PaperSurface>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
