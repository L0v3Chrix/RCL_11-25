import Link from 'next/link';
import Image from 'next/image';

export default function FounderStory() {
  return (
    <section className="py-24 bg-brand-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Founder Photo */}
          <div className="w-full lg:w-1/2 relative group">
            {/* Decorative border that moves on hover */}
            <div className="absolute top-6 left-6 w-full h-full border-2 border-brand-secondary/30 rounded-2xl transition-transform duration-500 group-hover:translate-x-2 group-hover:translate-y-2"></div>

            {/* Founder Image */}
            <div className="relative z-10 rounded-2xl shadow-2xl overflow-hidden aspect-[4/5]">
              <Image
                src="/images/team/rcl-founder.jpg"
                alt="Slade Skaggs - Recovery Centered Living Founder"
                fill
                className="object-cover transition-all duration-700"
                sizes="(max-width: 1024px) 100vw, 50vw"
                quality={85}
              />
            </div>

            {/* Name Badge Overlay */}
            <div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur p-4 rounded-lg shadow-lg">
              <p className="font-heading font-bold text-brand-primary text-lg">Slade Skaggs</p>
              <p className="text-stone-500 text-sm">Founder & Operator</p>
            </div>
          </div>

          {/* Story Content */}
          <div className="w-full lg:w-1/2">
            {/* Section Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-12 bg-brand-accent"></span>
              <span className="text-brand-accent font-bold tracking-widest uppercase text-sm">Our Story</span>
            </div>

            {/* Heading */}
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-brand-text mb-8">
              Built on Experience,<br/>Driven by Love.
            </h2>

            {/* Story Text */}
            <div className="space-y-4 text-stone-600 mb-8">
              <p className="text-lg leading-relaxed">
                "We didn't just read about recovery in a book. We lived it. After 25 years of combined experience battling addiction and navigating the broken systems of sober living, we decided to build what we wished we had."
              </p>
              <p className="text-lg leading-relaxed">
                Recovery Centered Living was born from a simple question: <strong className="text-brand-text">What if early sobriety felt like coming home?</strong>
              </p>
            </div>

            {/* Pull Quote */}
            <blockquote className="border-l-4 border-brand-secondary pl-6 py-2 my-8 bg-white/50 rounded-r-lg">
              <p className="font-heading text-2xl italic text-brand-text">
                "Connection is the opposite of addiction. We create the space where that connection happens."
              </p>
            </blockquote>

            {/* CTA Button */}
            <div className="flex items-center gap-6">
              <Link
                href="/about"
                className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl"
              >
                Read Our Full Mission
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
