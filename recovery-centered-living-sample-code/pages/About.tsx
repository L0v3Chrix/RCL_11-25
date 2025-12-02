
import React from 'react';
import { Link } from 'react-router-dom';
import { Testimonial } from '../types';

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    quote: "RCL didn't just give me a bed, they gave me a brotherhood. For the first time in my life, I felt like I didn't have to wear a mask. The guys here held me accountable when I couldn't do it for myself.",
    author: "Jason M.",
    details: "18 months sober",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: '2',
    quote: "Slade and Chloe actually care. You're not just a rent check here. You're family. That made all the difference when I wanted to give up. This house became the home I never had.",
    author: "Sarah K.",
    details: "Alumni, 3 years sober",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200"
  },
  {
    id: '3',
    quote: "The structure saved my life, but the love kept me here. I learned how to be a father again while living at Unity House. I'm forever grateful for the second chance.",
    author: "David R.",
    details: "9 months sober",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=200"
  }
];

export const About: React.FC = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative py-24 bg-brand-sand overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
           <span className="text-brand-earth font-bold tracking-widest uppercase text-sm mb-4 block animate-in fade-in slide-in-from-bottom-4 duration-700">Who We Are</span>
           <h1 className="font-serif text-5xl md:text-7xl font-bold text-brand-text mb-8 animate-in fade-in slide-in-from-bottom-6 duration-700 delay-100">
             From Struggle to <span className="italic text-brand-earth">Sanctuary</span>
           </h1>
           <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed font-light animate-in fade-in slide-in-from-bottom-8 duration-700 delay-200">
             Founded on the belief that recovery isn't just about stopping a behavior—it's about building a life you don't want to escape from.
           </p>
        </div>
      </section>

      {/* Founders Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            {/* Image Column */}
            <div className="w-full lg:w-1/2 relative">
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-brand-sage/30 rounded-2xl"></div>
              <img
                src="/images/blade-skaggs.jpg"
                onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=800&auto=format&fit=crop'}
                alt="Slade Skaggs"
                className="rounded-2xl shadow-2xl w-full aspect-[4/5] object-cover relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-xl z-20 max-w-xs border border-stone-100 hidden md:block">
                <p className="font-serif italic text-stone-600 text-lg">"We hold space for the miracle to happen."</p>
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full lg:w-1/2 space-y-8">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-text mb-4">
                  Slade & Chloe Skaggs
                </h2>
                <p className="text-brand-earth font-bold tracking-wide uppercase text-sm">Founders & Operators</p>
              </div>

              <div className="prose prose-lg text-stone-600">
                <p>
                  Recovery Centered Living was born from a simple but profound realization: <strong>early sobriety is fragile, and the environment you heal in matters.</strong>
                </p>
                <p>
                  With over <strong>25 years of combined lived experience</strong>, Slade and Chloe Skaggs know exactly what it feels like to walk into a sober living house. They know the anxiety, the shame, and the desperate hope for something different. They also know what works—and what doesn't.
                </p>
                <p>
                  "We didn't just read about recovery in a book. We lived it. We navigated the broken systems, the cold clinical environments, and the punitive rules that often cause more harm than good. We decided to create what we wished we had: a sanctuary where dignity is restored first."
                </p>
                <p>
                  At RCL, we don't just manage beds; we cultivate a family. We believe that <strong>connection is the opposite of addiction</strong>, and every policy, every house dinner, and every conversation is designed to foster that connection.
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                 <div className="flex flex-col">
                    <span className="text-3xl font-bold text-brand-text">25+</span>
                    <span className="text-sm text-stone-500 uppercase">Years Experience</span>
                 </div>
                 <div className="w-px bg-stone-300 h-12 mx-4"></div>
                 <div className="flex flex-col">
                    <span className="text-3xl font-bold text-brand-text">100s</span>
                    <span className="text-sm text-stone-500 uppercase">Lives Changed</span>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy / Values Grid */}
      <section className="py-24 bg-stone-50">
        <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="font-serif text-4xl font-bold text-brand-text mb-6">The RCL Difference</h2>
                <p className="text-lg text-stone-600">
                    We operate from a place of "Love over Fear." While structure is necessary for safety, shame has no place in recovery.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    {
                        title: "Peer-Led Community",
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                            </svg>
                        ),
                        desc: "Our house managers are in recovery themselves. They lead by example, not by force."
                    },
                    {
                        title: "Multiple Pathways",
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                            </svg>
                        ),
                        desc: "We support 12-Step, SMART Recovery, Recovery Dharma, and MAT. We honor your individual journey."
                    },
                    {
                        title: "Accountability with Love",
                        icon: (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                        ),
                        desc: "We have rules to keep you safe, but we enforce them with compassion and understanding."
                    }
                ].map((item, i) => (
                    <div key={i} className="bg-white p-8 rounded-xl shadow-sm border border-stone-100 hover:shadow-lg transition-shadow">
                        <div className="w-12 h-12 bg-brand-earth/10 text-brand-earth rounded-full flex items-center justify-center mb-6">
                            {item.icon}
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-brand-text mb-3">{item.title}</h3>
                        <p className="text-stone-500">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
      </section>

      {/* Full Mission Statement */}
      <section className="py-24 bg-brand-earth text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="w-20 h-1 bg-brand-sunset mx-auto mb-8"></div>
          <h2 className="font-serif text-2xl md:text-4xl font-bold mb-8 tracking-wide">Our Mission</h2>
          <p className="text-xl md:text-3xl font-serif font-light max-w-5xl mx-auto leading-relaxed italic">
            "To provide a safe, structured, and spiritual environment where men and women can rebuild their lives, rediscover their worth, and recover their future through the power of community."
          </p>
          <div className="mt-12">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Signature_sample.svg/1200px-Signature_sample.svg.png" alt="Signatures" className="h-16 mx-auto opacity-60 invert" />
            <p className="mt-4 text-sm uppercase tracking-widest opacity-70">Slade & Chloe Skaggs</p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-brand-sand">
        <div className="container mx-auto px-4">
            <div className="text-center mb-16">
            <span className="text-brand-sunset font-bold uppercase tracking-widest text-sm mb-2 block">Voices of Recovery</span>
            <h2 className="font-serif text-4xl font-bold text-brand-text">Stories from Our Community</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
                <div key={t.id} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all border border-stone-100 relative group">
                {/* Quote Icon */}
                <div className="absolute -top-4 left-8 bg-brand-sunset text-white w-10 h-10 rounded-full flex items-center justify-center shadow-md text-xl font-serif">"</div>
                
                <p className="text-stone-600 mb-8 leading-relaxed italic">
                    {t.quote}
                </p>
                
                <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full overflow-hidden bg-stone-200">
                    <img src={t.image} alt={t.author} className="w-full h-full object-cover" />
                    </div>
                    <div>
                    <h4 className="font-bold text-brand-text">{t.author}</h4>
                    <p className="text-xs text-brand-sage font-bold uppercase tracking-wide">{t.details}</p>
                    </div>
                </div>
                </div>
            ))}
            </div>
        </div>
      </section>
    </div>
  );
};
