'use client';

import { siteConfig, getSmsLink, getTelLink } from '@/config/site';

export default function TourModal() {
    return (
        <div className="bg-[#FDF6E9] p-8 md:p-12">
            <h2 className="font-heading text-4xl md:text-5xl font-black text-[#1A1410] mb-8">
                Schedule a Tour
            </h2>

            <div className="space-y-6 mb-10">
                <p className="text-xl text-[#2C2C2C] font-medium leading-relaxed">
                    The best way to see if RCL is the right fit is to visit one of our homes.
                    <span className="block mt-2 font-black text-[#C7773B]">Texting us is the fastest way to get on the schedule.</span>
                </p>

                <div className="grid sm:grid-cols-2 gap-6">
                    <div className="bg-white p-6 rounded-2xl border-2 border-[#2D8A6E]/10 shadow-sm">
                        <h3 className="font-heading text-lg font-bold text-[#2D8A6E] mb-2">Text Us Directly</h3>
                        <p className="text-stone-600 text-sm mb-4 font-medium">Click below to open your messaging app with a pre-filled message.</p>
                        <a
                            href={getSmsLink()}
                            className="inline-block text-[#C7773B] font-black text-xl hover:underline"
                        >
                            {siteConfig.GOOGLE_VOICE_DISPLAY}
                        </a>
                    </div>
                    <div className="bg-white p-6 rounded-2xl border-2 border-[#2D8A6E]/10 shadow-sm">
                        <h3 className="font-heading text-lg font-bold text-[#2D8A6E] mb-2">Call for Info</h3>
                        <p className="text-stone-600 text-sm mb-4 font-medium">Prefer to speak on the phone? Feel free to call us anytime.</p>
                        <a
                            href={getTelLink()}
                            className="inline-block text-[#C7773B] font-black text-xl hover:underline"
                        >
                            {siteConfig.GOOGLE_VOICE_DISPLAY}
                        </a>
                    </div>
                </div>

                <p className="text-[#6B5F55] font-medium italic">
                    Referral partners and family members: We are happy to coordinate tours with you directly.
                </p>
            </div>

            <div className="flex flex-col gap-4">
                <a
                    href={getSmsLink()}
                    className="w-full bg-[#C7773B] hover:bg-[#B66629] text-white font-black text-2xl py-6 rounded-full transition-all shadow-xl hover:shadow-2xl text-center transform hover:-translate-y-1"
                >
                    Send Text Message Now
                </a>
            </div>
        </div>
    );
}
