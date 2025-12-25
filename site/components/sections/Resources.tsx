'use client';

import { motion } from 'framer-motion';

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
        <section className="py-24 bg-white relative overflow-hidden">
            <div className="container relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl font-bold text-[#1A1410] mb-6">
                        Resources We Believe In
                    </h2>
                    <p className="text-lg text-[#6B5F55] font-medium">
                        Recovery is stronger with connection. Here are resources we trust and share.
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                    {RESOURCES.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#FDF6E9] p-8 rounded-3xl border border-[#2D8A6E]/5"
                        >
                            <h3 className="font-heading text-2xl font-bold text-[#2D8A6E] mb-6 border-b border-[#2D8A6E]/10 pb-4">
                                {group.category}
                            </h3>
                            <ul className="space-y-4">
                                {group.items.map((item, i) => (
                                    <li key={i}>
                                        <a
                                            href={item.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[#2C2C2C] hover:text-[#C7773B] font-bold flex items-center gap-3 transition-colors group"
                                        >
                                            <span className="w-1.5 h-1.5 rounded-full bg-[#C7773B] group-hover:scale-150 transition-transform"></span>
                                            {item.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
