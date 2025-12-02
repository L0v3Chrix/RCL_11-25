import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

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
  }, [location]);

  const navClasses = `fixed w-full z-50 transition-all duration-300 ${
    isScrolled ? 'bg-brand-sand/95 backdrop-blur-sm shadow-md py-3' : 'bg-transparent py-6'
  }`;

  const linkClasses = `text-sm font-medium transition-colors ${
    isScrolled ? 'text-brand-text hover:text-brand-sunset' : 'text-white hover:text-brand-sunset'
  }`;

  return (
    <header className={navClasses}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo - SVG Vector Fallback (Never breaks) */}
        <Link to="/" className="flex items-center gap-3 z-50 group">
            <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${isScrolled ? 'bg-brand-earth text-white shadow-sm' : 'bg-white text-brand-earth shadow-lg'}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
              </svg>
            </div>
            <div className="flex flex-col">
                <span className={`font-serif text-xl font-bold leading-none tracking-tight ${isScrolled ? 'text-brand-text' : 'text-white drop-shadow-md'}`}>
                  Recovery Centered
                </span>
                <span className={`text-xs font-medium uppercase tracking-widest ${isScrolled ? 'text-brand-earth' : 'text-stone-200 drop-shadow-sm'}`}>
                  Living
                </span>
            </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {['About', 'Houses', 'Resources'].map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase()}`}
              className={linkClasses}
            >
              {item}
            </Link>
          ))}
          <Link 
            to="/apply"
            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all transform hover:-translate-y-0.5 shadow-lg hover:shadow-xl ${
                isScrolled 
                ? 'bg-brand-sunset text-white hover:bg-orange-600' 
                : 'bg-white text-brand-earth hover:bg-brand-sand'
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
                to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                className="text-3xl font-serif font-bold text-brand-earth hover:text-brand-sunset"
              >
                {item}
              </Link>
            ))}
            <Link 
              to="/apply"
              className="bg-brand-sunset text-white px-10 py-4 rounded-full text-xl font-bold mt-4 shadow-xl"
            >
              Apply Now
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};