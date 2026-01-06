'use client';

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { siteConfig } from '@/config/site';
import { Menu, X } from 'lucide-react';
import { useModal } from '@/providers/ModalProvider';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { openApplicationModal, openTourModal } = useModal();

  // Handle scroll detection
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
      document.body.style.top = `-${window.scrollY}px`;
    } else {
      const scrollY = document.body.style.top;
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
      }
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
      document.body.style.top = '';
    };
  }, [mobileMenuOpen]);

  const closeMenu = useCallback(() => {
    setMobileMenuOpen(false);
  }, []);

  const toggleMenu = useCallback(() => {
    setMobileMenuOpen(prev => !prev);
  }, []);

  const scrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith('#')) {
      e.preventDefault();
      closeMenu();
      // Small delay to allow menu close animation
      setTimeout(() => {
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      closeMenu();
    }
  }, [closeMenu]);

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
          <Link
            href="/"
            className="relative z-[60] flex-shrink-0"
            onClick={() => {
              closeMenu();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
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

          {/* Nav (Center) - Desktop */}
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

          {/* Application Link (Right) - Desktop */}
          <div className="hidden md:block">
            <button
              onClick={openApplicationModal}
              className="bg-[#C7773B] hover:bg-[#B66629] text-white font-black text-sm px-8 py-3 rounded-full transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              Submit Application
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className={`md:hidden relative z-[60] p-2 -mr-2 touch-manipulation ${
              mobileMenuOpen ? 'text-[#1A1410]' : isScrolled ? 'text-[#1A1410]' : 'text-white'
            }`}
            onClick={toggleMenu}
            onTouchEnd={(e) => {
              e.preventDefault();
              toggleMenu();
            }}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
          >
            <span className="sr-only">{mobileMenuOpen ? 'Close menu' : 'Open menu'}</span>
            {mobileMenuOpen ? (
              <X size={32} strokeWidth={2.5} aria-hidden="true" />
            ) : (
              <Menu size={32} strokeWidth={2.5} aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Nav Overlay */}
      <div
        id="mobile-menu"
        className={`fixed inset-0 z-[55] md:hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-[#FDF6E9] transition-opacity duration-300 ${
            mobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={closeMenu}
          aria-hidden="true"
        />

        {/* Menu Content */}
        <nav
          className={`relative h-full flex flex-col items-center justify-center gap-8 transform transition-all duration-300 ease-out ${
            mobileMenuOpen
              ? 'translate-y-0 opacity-100'
              : '-translate-y-8 opacity-0'
          }`}
        >
          {navItems.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => scrollToSection(e, item.href)}
              className="text-3xl sm:text-4xl font-heading font-black text-[#1A1410] hover:text-[#C7773B] active:text-[#C7773B] transition-colors touch-manipulation"
              style={{
                transitionDelay: mobileMenuOpen ? `${index * 50}ms` : '0ms',
                opacity: mobileMenuOpen ? 1 : 0,
                transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: 'opacity 300ms ease, transform 300ms ease, color 150ms ease'
              }}
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              {item.label}
            </a>
          ))}

          <div
            className="flex flex-col items-center gap-4 mt-6"
            style={{
              transitionDelay: mobileMenuOpen ? `${navItems.length * 50}ms` : '0ms',
              opacity: mobileMenuOpen ? 1 : 0,
              transform: mobileMenuOpen ? 'translateY(0)' : 'translateY(20px)',
              transition: 'opacity 300ms ease, transform 300ms ease'
            }}
          >
            <button
              onClick={() => {
                closeMenu();
                setTimeout(openApplicationModal, 150);
              }}
              className="bg-[#C7773B] hover:bg-[#B66629] active:bg-[#B66629] text-white font-black text-xl sm:text-2xl px-10 py-4 rounded-full shadow-xl touch-manipulation transition-colors"
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              Submit Application
            </button>
            <button
              onClick={() => {
                closeMenu();
                setTimeout(openTourModal, 150);
              }}
              className="text-lg sm:text-xl font-bold text-[#2F6F71] hover:text-[#245758] active:text-[#245758] touch-manipulation transition-colors py-2"
              tabIndex={mobileMenuOpen ? 0 : -1}
            >
              Schedule a Tour
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
