'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PaperSurface, Tape } from '@/components/ui/ScrapbookElements';

// Quick Clarity Block Data
const QUICK_CLARITY = [
    "RCL is a clean, recovery-centered, high accountability home",
    "Bed dues: $250/week or $900/month + $200 move-in fee",
    "The home stays safe through clear guidelines, community standards, and follow-through"
];

// Content Data
const FAQ_SECTIONS = [
    {
        category: "Application & Getting Started",
        items: [
            {
                question: "How do I apply to Recovery Centered Living (RCL)?",
                answer: "Start by clicking Submit Application. Once we receive it, our team will review your information, follow up with any questions, and help you take the next step (tour + move-in planning if approved)."
            },
            {
                question: "What happens after I submit my application?",
                answer: (
                    <div className="space-y-4">
                        <p>You can expect a simple process:</p>
                        <ol className="list-decimal pl-5 space-y-2">
                            <li>Submit the application</li>
                            <li>Quick follow-up conversation to make sure RCL is the right fit</li>
                            <li>Tour (when available)</li>
                            <li>Review of expectations (accountability, guidelines, house culture)</li>
                            <li>Approval + move-in coordination</li>
                        </ol>
                    </div>
                )
            },
            {
                question: "Do you accept referrals from families, caseworkers, or institutions?",
                answer: "Yes. We work with family members, caseworkers, treatment centers, and other referral partners who want a reliable, high-accountability home for someone they care about. If you’re referring someone, use Submit Application and note you’re a referral partner."
            },
            {
                question: "Do you require someone to be “sober” to apply?",
                answer: "We don’t use that word. We’re a clean and recovery-focused environment. During the application process we’ll talk through clean time, stability, and readiness for a high-accountability home."
            },
            {
                question: "What is a “high accountability home”?",
                answer: "It means the home stays safe, clean, and recovery-centered through clear expectations, consistent follow-through, and real-world responsibility. RCL supports you in building your own structure—while holding the line on what keeps the house healthy."
            }
        ]
    },
    {
        category: "Bed Dues, Move-In, and Payments",
        items: [
            {
                question: "How much are bed dues?",
                answer: "Bed dues are $250/week or $900/month."
            },
            {
                question: "Is there a move-in fee?",
                answer: "Yes. The move-in fee is $200."
            },
            {
                question: "How do I pay bed dues?",
                answer: "Payments are handled digitally through the client portal (preferred) or by money order payable to Recovery Centered Living. We do not accept cash."
            },
            {
                question: "What happens if I get behind on bed dues?",
                answer: "If someone falls behind, it may affect privileges (like overnights) and may trigger stricter accountability during that period. If you’re struggling, communicate early—avoid letting it snowball."
            }
        ]
    },
    {
        category: "Life at the Houses",
        items: [
            {
                question: "How many houses do you have?",
                answer: "RCL currently has six houses total: five men’s houses and one women’s house."
            },
            {
                question: "What’s expected of members day-to-day?",
                answer: (
                    <div className="space-y-4">
                        <p>RCL is built around personal responsibility and community care. Members are expected to:</p>
                        <ul className="list-disc pl-5 space-y-2">
                            <li>Keep the home clean and respected</li>
                            <li>Participate in house responsibilities (chores, shared spaces, and standards)</li>
                            <li>Show consistent recovery effort and accountability</li>
                            <li>Contribute to a healthy community culture</li>
                        </ul>
                    </div>
                )
            },
            {
                question: "Do you require work or school?",
                answer: "Yes—members are expected to be moving forward. Typically this means having verifiable employment, school, or a consistent volunteer commitment within a defined timeframe after move-in. The goal is stability, responsibility, and momentum."
            },
            {
                question: "What are curfews / quiet hours like?",
                answer: "RCL uses curfews and quiet hours to protect the house environment—especially during a new member’s early phase. Curfews may loosen with consistency and being current on obligations. (Exact times and phases are reviewed during onboarding so everyone is clear.)"
            }
        ]
    },
    {
        category: "Clean Environment, Safety, and Accountability",
        items: [
            {
                question: "What does “clean environment” mean at RCL?",
                answer: "It means the home is protected from anything that compromises safety, recovery, or the community culture. The house standards are designed to keep the environment stable and supportive for everyone living there."
            },
            {
                question: "Do you do drug or alcohol testing?",
                answer: "RCL may require testing to protect the house and its members. Testing expectations and situations are explained clearly during onboarding."
            },
            {
                question: "What happens if someone violates house guidelines?",
                answer: "RCL is a high accountability home. Violations can result in stepped consequences, up to removal from the home if needed to protect the community. RCL can revoke access (including digital entry) if safety or house integrity is at risk."
            },
            {
                question: "Do you support harm reduction?",
                answer: "Yes—RCL understands recovery is not one-size-fits-all and we approach people with care and reality. At the same time, the house environment must stay clean, safe, and recovery-centered—those standards are not negotiable."
            }
        ]
    },
    {
        category: "Visits, Passes, and Time Away",
        items: [
            {
                question: "Can members have overnight passes?",
                answer: "Yes—once someone has demonstrated consistency and meets requirements, overnights can be approved through a request process. Expectations (timing, approval, house responsibilities, and testing on return) are covered during onboarding."
            },
            {
                question: "Can family members visit?",
                answer: "Family support matters. Visiting expectations depend on the house, stage, and what protects the overall environment. Ask during the application follow-up and we’ll walk you through what’s appropriate."
            }
        ]
    },
    {
        category: "Spiritual Environment & Culture",
        items: [
            {
                question: "Do you talk about spirituality?",
                answer: "Yes. RCL protects a spiritual environment and a grounded culture—without forcing a single “right way.” The focus is healing, accountability, and becoming a better member of society through recovery and community."
            }
        ]
    }
];

export default function FAQ() {
    // Keep track of active index globally or per section? Global is simpler for now, or string ID.
    // Let's use string IDs "sectionIndex-itemIndex"
    const [activeId, setActiveId] = useState<string | null>(null);

    const toggle = (id: string) => {
        setActiveId(activeId === id ? null : id);
    };

    return (
        <section id="faq" className="py-24 bg-[#FDF6E9] relative overflow-hidden">
            {/* Grain */}
            <div className="absolute inset-0 opacity-[0.03] bg-[url('/textures/paper-grain.svg')] pointer-events-none" />

            <div className="container relative z-10 px-4">
                {/* Header */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="font-heading text-4xl md:text-5xl lg:text-7xl font-black text-[#1A1410] mb-6 drop-shadow-sm">
                        FAQs
                    </h2>
                    <p className="text-xl md:text-2xl text-stone-500 font-bold leading-relaxed mb-12">
                        Everything you need to know about our recovery homes.
                    </p>

                    {/* Quick Clarity Block */}
                    <div className="relative inline-block text-left mx-auto max-w-3xl transform rotate-1 hover:rotate-0 transition-transform duration-300">
                        <Tape className="absolute -top-4 left-1/2 -translate-x-1/2 w-32 md:w-48 opacity-90 z-20" />
                        <div className="bg-white p-8 md:p-10 shadow-[0_10px_40px_rgba(0,0,0,0.08)] border border-stone-100 rounded-[2px] relative">
                            <h3 className="font-heading text-2xl font-bold text-[#C7773B] mb-6 text-center">
                                Before you apply, here are the big three:
                            </h3>
                            <ul className="space-y-4">
                                {QUICK_CLARITY.map((item, i) => (
                                    <li key={i} className="flex items-start gap-4 text-lg font-medium text-[#1A1410]">
                                        <span className="mt-1.5 w-2 h-2 rounded-full bg-[#2F6F71] flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                {/* FAQ Groups */}
                <div className="max-w-4xl mx-auto space-y-20">
                    {FAQ_SECTIONS.map((section, sIdx) => (
                        <div key={sIdx} className="space-y-8">
                            {/* Section Header */}
                            <div className="flex items-center gap-4 mb-8">
                                <h3 className="font-heading text-2xl md:text-3xl font-bold text-[#2F6F71]">
                                    {section.category}
                                </h3>
                                <div className="h-px bg-[#2F6F71]/20 flex-1" />
                            </div>

                            {/* Section Items */}
                            <div className="space-y-6">
                                {section.items.map((item, iIdx) => {
                                    const id = `${sIdx}-${iIdx}`;
                                    const isOpen = activeId === id;

                                    return (
                                        <motion.div
                                            key={iIdx}
                                            initial={{ opacity: 0, y: 10 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: iIdx * 0.05 }}
                                        >
                                            <PaperSurface
                                                rotation={0} // Keep it clean for readability since we have titles
                                                className="overflow-hidden"
                                                shadowSize="sm"
                                            >
                                                <button
                                                    onClick={() => toggle(id)}
                                                    className="w-full text-left p-6 md:p-8 flex justify-between items-start md:items-center gap-6 group transition-colors hover:bg-stone-50/50"
                                                >
                                                    <span className={`font-heading text-lg md:text-xl font-bold leading-tight transition-colors ${isOpen ? 'text-[#C7773B]' : 'text-[#1A1410] group-hover:text-[#C7773B]'}`}>
                                                        {item.question}
                                                    </span>
                                                    <div className={`transform transition-transform duration-500 mt-1 md:mt-0 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`}>
                                                        {/* Custom Messy Arrow */}
                                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M6 9L12 15L18 9" stroke="#C7773B" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                </button>
                                                <AnimatePresence>
                                                    {isOpen && (
                                                        <motion.div
                                                            initial={{ height: 0, opacity: 0 }}
                                                            animate={{ height: 'auto', opacity: 1 }}
                                                            exit={{ height: 0, opacity: 0 }}
                                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                                        >
                                                            <div className="px-6 md:px-8 pb-8 text-stone-600 leading-relaxed font-medium border-t border-stone-100 pt-6">
                                                                {item.answer}
                                                            </div>
                                                        </motion.div>
                                                    )}
                                                </AnimatePresence>
                                            </PaperSurface>
                                        </motion.div>
                                    );
                                })}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
