'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/brand/Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-brand-light/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'
  }`;

  const linkClasses = `text-sm font-medium transition-colors ${
    isScrolled ? 'text-brand-text hover:text-brand-accent' : 'text-white hover:text-brand-sunshine'
  }`;

  return (
    <header className={navClasses}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo - Colorful RCL Rainbow Community Logo */}
        <Link href="/" className="z-50 group transition-all duration-300">
          <Logo
            variant="full"
            className={`h-14 md:h-16 transition-all duration-300 ${
              isScrolled ? '' : 'drop-shadow-lg'
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['About', 'Houses', 'Resources'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className={linkClasses}
            >
              {item}
            </Link>
          ))}
          <Link
            href="/apply"
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl ${
              isScrolled
                ? 'bg-brand-accent text-white hover:bg-accent-600'
                : 'bg-white text-brand-primary hover:bg-brand-light'
            }`}
          >
            Apply Now
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden z-50 transition-colors ${isScrolled ? 'text-brand-text' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
          </svg>
        </button>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-brand-sand flex flex-col items-center justify-center gap-8 z-40 animate-in fade-in duration-200">
            {['Home', 'About', 'Houses', 'Resources'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-3xl font-heading font-bold text-brand-earth hover:text-brand-sunset"
              >
                {item}
              </Link>
            ))}
            <Link
              href="/apply"
              className="bg-brand-sunset text-white px-10 py-4 rounded-full text-xl font-bold mt-4 shadow-xl"
            >
              Apply Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
}
