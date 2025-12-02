import React from 'react';
import { HouseCard } from '../components/HouseCard';
import { IntakeWizard } from '../components/IntakeWizard';
import { Link } from 'react-router-dom';
import { HOUSES } from '../data/houses';

export const Home: React.FC = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        {/* Background: Group Photo / Community */}
        <div className="absolute inset-0 z-0">
            <img 
                src="/images/community-group-large.jpg" 
                onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1920&auto=format&fit=crop'}
                alt="Recovery Centered Living Community" 
                className="w-full h-full object-cover"
            />
            {/* Darker gradient for better text legibility over the group photo */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-brand-earth/90"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center pt-20">
            <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-sm font-semibold tracking-wider uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000">
                <span className="w-2 h-2 bg-brand-sunset rounded-full animate-pulse"></span>
                Accepting New Residents
            </div>
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 drop-shadow-2xl leading-tight tracking-tight animate-in fade-in zoom-in duration-1000 delay-100">
                Recovery <span className="italic text-brand-sunset">Centered</span><br/>
                Living
            </h1>
            <p className="text-lg md:text-2xl text-stone-100 mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
                More than a sober house. A community designed for connection, dignity, and long-term freedom in the heart of Austin, Texas.
            </p>
            <div className="flex flex-col md:flex-row gap-5 justify-center items-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300">
                <a href="#intake" className="bg-brand-sunset hover:bg-orange-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 min-w-[220px]">
                    Start Application
                </a>
                <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-earth px-10 py-4 rounded-full text-lg font-bold transition-all min-w-[220px]">
                    Virtual Tour
                </button>
            </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
        </div>
      </section>

      {/* Authentic Founders Section */}
      <section className="py-24 bg-brand-sand">
        <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center gap-16">
                <div className="w-full lg:w-1/2 relative group">
                    <div className="absolute top-6 left-6 w-full h-full border-2 border-brand-earth/20 rounded-2xl transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>
                    {/* Founders Photo Placeholder */}
                    <img 
                        src="/images/blade-skaggs.jpg"
                        onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1542596594-649edbc13630?q=80&w=800&auto=format&fit=crop'}
                        alt="Slade Skaggs - I Speak Recovery" 
                        className="w-full rounded-2xl shadow-2xl relative z-10 aspect-[4/5] object-cover transition-all duration-700"
                    />
                    <div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur p-4 rounded-lg shadow-lg">
                        <p className="font-serif font-bold text-brand-earth text-lg">Slade Skaggs</p>
                        <p className="text-stone-500 text-sm">Founder & Operator</p>
                    </div>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="flex items-center gap-3 mb-6">
                        <span className="h-px w-12 bg-brand-sunset"></span>
                        <span className="text-brand-sunset font-bold tracking-widest uppercase text-sm">Our Story</span>
                    </div>
                    <h2 className="font-serif text-4xl md:text-5xl font-bold text-brand-text mb-8">Built on Experience,<br/>Driven by Love.</h2>
                    <div className="prose prose-lg text-stone-600 mb-8">
                        <p className="mb-4">
                            "We didn't just read about recovery in a book. We lived it. After 25 years of combined experience battling addiction and navigating the broken systems of sober living, we decided to build what we wished we had."
                        </p>
                        <p>
                            Recovery Centered Living was born from a simple question: <strong>What if early sobriety felt like coming home?</strong>
                        </p>
                    </div>
                    <blockquote className="border-l-4 border-brand-earth pl-6 py-2 my-8 bg-white/50 rounded-r-lg">
                        <p className="font-serif text-2xl italic text-brand-text">
                            "Connection is the opposite of addiction. We create the space where that connection happens."
                        </p>
                    </blockquote>
                    <div className="flex items-center gap-6">
                        <Link to="/about" className="bg-brand-earth text-white px-8 py-3 rounded-full font-bold hover:bg-stone-800 transition-colors">
                            Read Our Full Mission
                        </Link>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* House Showcase */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-20">
                <span className="text-brand-sage font-bold uppercase tracking-widest text-sm mb-2 block">The Sanctuary Model</span>
                <h2 className="font-serif text-5xl font-bold text-brand-text mb-6">Our Austin Homes</h2>
                <p className="text-stone-500 text-lg max-w-2xl mx-auto">
                    Real homes in real neighborhoods. High-speed wifi, premium bedding, and a community that has your back.
                </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                {HOUSES.map(house => (
                    <HouseCard key={house.id} house={house} />
                ))}
            </div>
        </div>
      </section>

      {/* Social Feed / Life at RCL Section */}
      <section className="py-24 bg-stone-50 border-t border-stone-200">
        <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
                <div>
                    <h2 className="font-serif text-4xl font-bold text-brand-text mb-2">Life at RCL</h2>
                    <p className="text-stone-500">Follow our journey on Instagram <a href="https://www.instagram.com/recovery.centered.living" className="text-brand-sunset font-bold hover:underline">@recovery.centered.living</a></p>
                </div>
                <a href="https://www.instagram.com/recovery.centered.living" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm font-bold text-brand-text bg-white px-6 py-3 rounded-full border border-stone-200 hover:border-brand-sunset transition-all">
                    <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/></svg>
                    Follow Us
                </a>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {/* Image 1: Men Hugging */}
                <div className="aspect-square relative group overflow-hidden rounded-xl">
                    <img src="/images/men-hugging.jpg" onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&q=80&w=400'} alt="Brotherhood" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm p-4 text-center">
                        "Brotherhood"
                    </div>
                </div>
                {/* Image 2: Group Outing */}
                <div className="aspect-square relative group overflow-hidden rounded-xl">
                    <img src="/images/men-group-port-aransas.jpg" onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1535131749006-b7f58c99034b?auto=format&fit=crop&q=80&w=400'} alt="House Outing" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm p-4 text-center">
                        "Port Aransas Trip 🌊"
                    </div>
                </div>
                {/* Image 3: BW Community Hug */}
                <div className="aspect-square relative group overflow-hidden rounded-xl">
                    <img src="/images/family-hugging-bw.jpg" onError={(e) => e.currentTarget.src = 'https://images.unsplash.com/photo-1596436484603-2d04ba3e975c?auto=format&fit=crop&q=80&w=400'} alt="Community Support" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"/>
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white font-bold text-sm p-4 text-center">
                        "Family First ❤️"
                    </div>
                </div>
                {/* Image 4: TROHN / Certification */}
                <div className="aspect-square relative group overflow-hidden rounded-xl bg-white flex items-center justify-center p-4 border border-stone-200">
                    <div className="text-center w-full h-full flex items-center justify-center">
                        <img src="/images/trohn-logo.jpg" alt="TROHN Certified" className="max-w-full max-h-full object-contain" />
                    </div>
                    <div className="absolute inset-0 bg-brand-earth/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white">
                         <div className="text-3xl mb-2">★</div>
                        <div className="font-bold font-serif tracking-widest">TROHN</div>
                        <div className="text-xs opacity-80 uppercase mt-1">Certified Member</div>
                    </div>
                </div>
            </div>
        </div>
      </section>

      {/* Intake Application Section */}
      <section id="intake" className="py-24 bg-brand-earth text-white relative overflow-hidden">
        {/* Subtle Texture Overlay */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"></div>
        <div className="container mx-auto px-4 relative z-10">
            <div className="flex flex-col lg:flex-row gap-20 items-start">
                <div className="lg:w-1/2 sticky top-24">
                    <div className="inline-block bg-white/20 backdrop-blur px-4 py-1 rounded-full text-sm font-bold mb-6">Confidential Application</div>
                    <h2 className="font-serif text-5xl md:text-6xl font-bold mb-8">Ready to Rebuild?</h2>
                    <p className="text-white/90 text-xl mb-10 leading-relaxed font-light">
                        Taking the first step is the hardest part. Our intake process is simple, confidential, and designed to get you the help you need quickly.
                    </p>
                    <div className="space-y-8 mb-10">
                        {[
                            { title: 'No Application Fees', desc: 'We believe barriers to entry should be low.' },
                            { title: 'Same-Day Response', desc: 'Our team is available 9am - 9pm daily.' },
                            { title: 'Inclusive Pathways', desc: '12-Step, SMART, Dharma & MAT welcome.' }
                        ].map((item, i) => (
                            <div key={i} className="flex items-start gap-4">
                                <div className="w-12 h-12 rounded-xl bg-white/10 border border-white/20 flex-shrink-0 flex items-center justify-center mt-1 text-brand-sunset">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                    </svg>
                                </div>
                                <div>
                                    <h4 className="font-bold text-xl">{item.title}</h4>
                                    <p className="text-white/70 text-base">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/2 w-full">
                    <IntakeWizard />
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};