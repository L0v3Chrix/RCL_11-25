'use client';

import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Houses', href: '#houses' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#F6F1E7] pt-16 pb-20 px-4 md:px-8 overflow-hidden">
      <div className="container mx-auto">
        {/* Warm Paper Card Layout (Mockup Match) */}
        <div className="bg-[#FDF6E9] p-12 md:p-20 rounded-[3rem] shadow-xl border border-stone-200 relative overflow-hidden">
          {/* Subtle paper grain internal overlay */}
          <div className="absolute inset-0 opacity-[0.03] bg-[url('/textures/paper-grain.svg')] pointer-events-none" />

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-16 mb-20">
            {/* Logo Section (Left) */}
            <div className="flex flex-col items-start">
              <Link href="/" className="inline-block mb-6" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                <div className="relative w-64 md:w-80 h-20 md:h-24">
                  <Image
                    src="/images/rcl-logo.png"
                    alt="Recovery Centered Living"
                    fill
                    className="object-contain object-left"
                  />
                </div>
              </Link>
              <Link
                href="https://recoverycenteredliving.com"
                className="text-stone-400 hover:text-[#C7773B] transition-colors font-bold text-xl tracking-tight"
              >
                recoverycenteredliving.com
              </Link>
            </div>

            {/* Navigation Links (Right) */}
            <div className="flex flex-wrap md:flex-nowrap gap-x-12 gap-y-6">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="font-black text-[#1A1410] hover:text-[#C7773B] transition-colors cursor-pointer text-2xl tracking-tighter"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Section */}
          <div className="relative z-10 text-center">
            <div className="w-full h-px bg-stone-200/50 mb-16" />
            <p className="font-handwritten text-4xl md:text-6xl text-[#1A1410] opacity-90 mb-12">
              You don&apos;t have to do this alone.
            </p>
            <p className="text-sm text-stone-400 font-bold uppercase tracking-[0.2em]">
              &copy; {currentYear} Recovery Centered Living. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
