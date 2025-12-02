import Button from '@/components/ui/Button';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background: Community Photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/brand/rcl-hero.jpg"
          alt="Recovery Centered Living community in Austin"
          fill
          priority
          className="object-cover"
          sizes="100vw"
          quality={90}
        />
        {/* Darker gradient with vibrant brand colors */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-primary-900/60 to-primary-800/90"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center pt-20">
        {/* Status Badge */}
        <div className="inline-flex items-center gap-2 mb-6 px-5 py-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-white text-sm font-semibold tracking-wider uppercase animate-in fade-in slide-in-from-bottom-4 duration-1000">
          <span className="w-2 h-2 bg-brand-success rounded-full animate-pulse"></span>
          Accepting New Residents
        </div>

        {/* Main Heading */}
        <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 drop-shadow-2xl leading-tight tracking-tight animate-in fade-in zoom-in duration-1000 delay-100">
          Recovery <span className="italic text-brand-sunshine">Centered</span><br/>
          Living
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-2xl text-stone-100 mb-12 max-w-2xl mx-auto font-light leading-relaxed drop-shadow-md animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          More than a sober house. A community designed for connection, dignity, and long-term freedom in the heart of Austin, Texas.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-300 mb-16">
          <a
            href="#intake"
            className="bg-brand-accent hover:bg-accent-600 text-white px-10 py-4 rounded-full text-lg font-bold shadow-xl hover:shadow-2xl transition-all transform hover:-translate-y-1 min-w-[220px]"
          >
            Start Application
          </a>
          <button className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-brand-primary px-10 py-4 rounded-full text-lg font-bold transition-all min-w-[220px]">
            Virtual Tour
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-white/50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
