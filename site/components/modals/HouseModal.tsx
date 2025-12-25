'use client';

import Image from 'next/image';
import { House } from '@/data/houses';
import { siteConfig, getSmsLink, getTelLink } from '@/config/site';

interface HouseModalProps {
    house: House;
}

export default function HouseModal({ house }: HouseModalProps) {
    return (
        <div className="bg-[#FDF6E9] min-h-full">
            {/* Hero Section */}
            <section className="relative h-[250px] md:h-[350px]">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src={house.heroImage}
                        alt={house.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 800px"
                        priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30"></div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-2">
                        {house.name} — {house.gender === 'men' ? "Men’s" : "Women’s"} High Accountability Home
                    </h2>
                    <p className="text-white/90 text-sm md:text-base font-medium max-w-2xl leading-relaxed">
                        This home is designed for people who want a clean recovery environment and the accountability that protects it. You’ll find community here—and you’ll also find expectations that help you build consistency.
                    </p>
                </div>
            </section>

            {/* Main Content */}
            <div className="p-6 md:p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Left Column - Details */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* What High Accountability Means */}
                        <div className="bg-white rounded-2xl shadow-sm border border-[#2D8A6E]/10 p-8">
                            <h3 className="font-heading text-2xl font-bold text-[#2D8A6E] mb-6">What “High Accountability” Means Here</h3>
                            <p className="text-[#2C2C2C] leading-relaxed text-lg font-medium">
                                High accountability means your recovery shows up in daily actions—respect, follow-through, contribution, and honesty. We don’t run your life. We protect a clean environment so you can build your own structure.
                            </p>
                        </div>

                        {/* Who this home is a good fit for */}
                        <div className="bg-[#F9F3EA] rounded-2xl p-8 border border-[#C7773B]/10">
                            <h3 className="font-heading text-xl font-bold text-[#C7773B] mb-6">Who this home is a good fit for</h3>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C7773B] font-bold text-xl">•</span>
                                    <span className="text-[#2C2C2C] font-medium leading-relaxed">People who want a clean recovery-centered environment</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C7773B] font-bold text-xl">•</span>
                                    <span className="text-[#2C2C2C] font-medium leading-relaxed">People willing to live with accountability and shared responsibility</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-[#C7773B] font-bold text-xl">•</span>
                                    <span className="text-[#2C2C2C] font-medium leading-relaxed">People ready to build a routine and keep moving forward</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column - Pricing & CTA */}
                    <div className="space-y-6">
                        {/* Pricing Card */}
                        <div className="bg-white rounded-2xl shadow-md border-2 border-[#2D8A6E]/10 p-8 sticky top-0">
                            <h3 className="font-heading text-xl font-bold text-[#1A1410] mb-6 text-center">Bed Dues</h3>

                            <div className="space-y-6 mb-8">
                                <div className="flex justify-between items-center pb-4 border-b border-stone-100">
                                    <span className="text-[#6B5F55] font-bold uppercase tracking-wider text-xs">Weekly</span>
                                    <span className="text-3xl font-bold text-[#1A1410]">${house.pricing.weekly}</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-stone-100">
                                    <span className="text-[#6B5F55] font-bold uppercase tracking-wider text-xs">Monthly</span>
                                    <span className="text-2xl font-bold text-[#1A1410]">${house.pricing.monthly}</span>
                                </div>
                                <div className="flex justify-between items-center pb-4 border-b border-stone-100">
                                    <span className="text-[#6B5F55] font-bold uppercase tracking-wider text-xs">Move-in Fee</span>
                                    <span className="text-2xl font-bold text-[#C7773B]">${house.pricing.deposit}</span>
                                </div>
                            </div>

                            <p className="text-[10px] text-[#6B5F55] italic mb-8 leading-relaxed text-center">
                                Membership dues are not “rent”—this is recovery living membership designed to protect the home culture.
                            </p>

                            {/* CTA Buttons */}
                            <div className="space-y-4">
                                <a
                                    href={siteConfig.APPLICATION_URL}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block w-full text-center btn btn-primary py-4 text-lg"
                                >
                                    Submit Application
                                </a>
                                <a
                                    href={getSmsLink(house.name)}
                                    className="block w-full text-center btn btn-outline py-4 text-lg border-2"
                                >
                                    Schedule a Tour (Text Us)
                                </a>
                            </div>

                            <p className="text-center mt-6 text-xs text-[#6B5F55] font-bold">
                                Questions from family or referral partners are welcome.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
