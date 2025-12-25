'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { siteConfig, getSmsLink } from '@/config/site';
import { Menu, X } from 'lucide-react';

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

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        setMobileMenuOpen(false);
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'Houses', href: '#houses' },
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full z-50 transition-all duration-300">
      <div
        className={`w-full transition-all duration-500 ${isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="container flex justify-between items-center">
          {/* Logo (Left) */}
          <Link href="/" className="z-50 flex-shrink-0" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div className="relative w-48 md:w-64 h-12 md:h-16">
              <Image
                src="/images/rcl-logo.png"
                alt={siteConfig.siteName}
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          {/* Nav (Center) */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-12">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => scrollToSection(e, item.href)}
                className={`text-base font-black tracking-tight transition-colors cursor-pointer ${isScrolled ? 'text-[#1A1410] hover:text-[#C7773B]' : 'text-white hover:text-[#C7773B]'
                  }`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Application Link (Right) */}
          <div className="hidden md:block">
            <a
              href={siteConfig.APPLICATION_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#C7773B] hover:bg-[#B66629] text-white font-black text-sm px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Submit Application
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden z-50 p-2 ${isScrolled ? 'text-[#1A1410]' : 'text-white'}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X size={32} strokeWidth={2.5} />
            ) : (
              <Menu size={32} strokeWidth={2.5} />
            )}
          </button>

          {/* Mobile Nav Overlay */}
          {mobileMenuOpen && (
            <div className="fixed inset-0 bg-[#FDF6E9] flex flex-col items-center justify-center gap-12 z-40">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => scrollToSection(e, item.href)}
                  className="text-4xl font-heading font-black text-[#1A1410] hover:text-[#C7773B] transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="flex flex-col items-center gap-6 mt-8">
                <a
                  href={siteConfig.APPLICATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#C7773B] text-white font-black text-2xl px-12 py-5 rounded-full shadow-xl"
                >
                  Submit Application
                </a>
                <a
                  href={getSmsLink()}
                  className="text-xl font-bold text-[#2F6F71]"
                >
                  Schedule a Tour
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
