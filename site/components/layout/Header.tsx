'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from '@/components/brand/Logo';

// External application URL
const APPLICATION_URL = 'https://oathtrack-resident-applications.s3.amazonaws.com/application.html#637ee9b1c89c';

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
    isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'
  }`;

  const linkClasses = `text-sm font-medium transition-colors ${
    isScrolled ? 'text-slate-700 hover:text-indigo-600' : 'text-white hover:text-amber-300'
  }`;

  return (
    <header className={navClasses}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo - Colorful RCL Rainbow Community Logo */}
        <Link href="/" className="z-50 group transition-all duration-300">
          <Logo
            variant="full"
            textColor={isScrolled ? 'dark' : 'light'}
            className={`h-14 md:h-16 transition-all duration-300 ${
              isScrolled ? '' : 'drop-shadow-lg'
            }`}
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['About', 'Houses', 'Resources', 'Contact'].map((item) => (
            <Link
              key={item}
              href={`/${item.toLowerCase()}`}
              className={linkClasses}
            >
              {item}
            </Link>
          ))}
          <a
            href={APPLICATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl ${
              isScrolled
                ? 'bg-indigo-600 text-white hover:bg-indigo-700'
                : 'bg-white text-indigo-700 hover:bg-amber-50'
            }`}
          >
            Apply Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`md:hidden z-50 transition-colors ${isScrolled ? 'text-slate-700' : 'text-white'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
        >
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"} />
          </svg>
        </button>

        {/* Mobile Nav Overlay */}
        {mobileMenuOpen && (
          <div className="fixed inset-0 bg-white flex flex-col items-center justify-center gap-8 z-40 animate-in fade-in duration-200">
            {['Home', 'About', 'Houses', 'Resources', 'Contact'].map((item) => (
              <Link
                key={item}
                href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-3xl font-heading font-bold text-slate-800 hover:text-indigo-600 transition-colors"
              >
                {item}
              </Link>
            ))}
            <a
              href={APPLICATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-indigo-600 text-white px-10 py-4 rounded-full text-xl font-bold mt-4 shadow-xl hover:bg-indigo-700 transition-colors"
            >
              Apply Now
            </a>
          </div>
        )}
      </div>
    </header>
  );
}
