'use client';

import { siteConfig } from '@/config/site';

export default function ApplicationModal() {
    return (
        <div className="bg-[#FDF6E9] p-8 md:p-12">
            <h2 className="font-heading text-4xl md:text-5xl font-black text-[#1A1410] mb-8">
                Submit Your Application
            </h2>

            <div className="space-y-6 mb-10">
                <p className="text-xl text-[#2C2C2C] font-medium leading-relaxed">
                    We’re looking for people who are ready for high accountability and a clean recovery environment.
                </p>

                <div className="bg-white p-6 rounded-2xl border-2 border-[#2D8A6E]/10 shadow-sm">
                    <h3 className="font-heading text-xl font-bold text-[#2D8A6E] mb-4">The Process:</h3>
                    <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                            <span className="text-[#2D8A6E] font-bold">1.</span>
                            <span className="text-stone-700 font-medium">Fill out the detailed online application form.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#2D8A6E] font-bold">2.</span>
                            <span className="text-stone-700 font-medium">Our team will review your information within 24-48 hours.</span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#2D8A6E] font-bold">3.</span>
                            <span className="text-stone-700 font-medium">We will reach out to schedule an interview and/or tour.</span>
                        </li>
                    </ul>
                </div>

                <p className="text-sm text-[#6B5F55] font-bold uppercase tracking-wider">
                    Note: You will be redirected to our secure application form (Oathtrack).
                </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
                <a
                    href={siteConfig.APPLICATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-[#C7773B] hover:bg-[#B66629] text-white font-black text-2xl py-6 rounded-full transition-all shadow-xl hover:shadow-2xl text-center transform hover:-translate-y-1"
                >
                    Continue to Application
                </a>
            </div>
        </div>
    );
}
