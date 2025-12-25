'use client';

import { motion } from 'framer-motion';
import { PaperSurface, Pushpin, Tape, getScrapbookVariant } from '@/components/ui/ScrapbookElements';

const RESOURCES = [
    {
        category: "Support Groups",
        items: [
            { name: "AA (Alcoholics Anonymous)", url: "https://www.aa.org" },
            { name: "NA (Narcotics Anonymous)", url: "https://www.na.org" },
            { name: "CA (Cocaine Anonymous)", url: "https://ca.org" },
        ],
    },
    {
        category: "Alternative Paths",
        items: [
            { name: "SMART Recovery", url: "https://www.smartrecovery.org" },
            { name: "Recovery Dharma", url: "https://recoverydharma.org" },
            { name: "Celebrate Recovery", url: "https://www.celebraterecovery.com" },
        ],
    },
    {
        category: "Local Resources",
        items: [
            { name: "Integral Care", url: "https://integralcare.org" },
            { name: "Austin Recovery", url: "https://www.austinrecovery.org" },
            { name: "Communities for Recovery", url: "https://cforr.org" },
        ],
    },
];

export default function Resources() {
    return (
        <section className="py-32 bg-white relative overflow-hidden">
            {/* Subtle paper grain texture */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('/textures/paper-grain.svg')] pointer-events-none" />

            <div className="container relative z-10 px-6">
                <div className="text-center max-w-4xl mx-auto mb-24">
                    <h2 className="font-heading text-5xl md:text-6xl lg:text-8xl font-black text-[#1A1410] mb-8 leading-tight">
                        Resources We Trust
                    </h2>
                    <p className="text-xl md:text-2xl text-[#6B5F55] font-bold max-w-2xl mx-auto">
                        High accountability starts with connection. Here are the recovery resources we believe in and share with our community.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
                    {RESOURCES.map((group, index) => {
                        const variant = getScrapbookVariant(index + 12);
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
                                    className="p-10 h-full shadow-xl min-h-[350px]"
                                    rotation={variant.rotation}
                                >
                                    {/* Decoration elements */}
                                    <Pushpin className={`absolute z-30 ${variant.pinPosition}`} color={variant.pinColor} />
                                    <Tape className="-top-4 -left-10 opacity-30" rotation={-15} variant={variant.tapeVariant} />

                                    <h3 className="font-heading text-3xl font-black text-[#2F6F71] mb-8 border-b-4 border-[#2F6F71]/10 pb-4">
                                        {group.category}
                                    </h3>
                                    <ul className="space-y-6">
                                        {group.items.map((item, i) => (
                                            <li key={i}>
                                                <a
                                                    href={item.url}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-[#1A1410] hover:text-[#C7773B] text-xl font-bold flex items-center gap-4 transition-all hover:translate-x-1 group"
                                                >
                                                    <span className="w-2.5 h-2.5 rounded-full bg-[#C7773B] group-hover:scale-150 transition-transform flex-shrink-0"></span>
                                                    {item.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </PaperSurface>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
