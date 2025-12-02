import React from 'react';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-stone-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
                <div className="flex items-center gap-2 mb-6">
                    <div className="w-8 h-8 bg-white text-brand-earth rounded-full overflow-hidden flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                          <path d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                          <path d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                        </svg>
                    </div>
                    <span className="font-serif text-xl font-bold">Recovery Centered Living</span>
                </div>
                <p className="text-stone-400 text-sm leading-relaxed mb-6">
                    A network of peer-led sober living homes in Austin, Texas. We act from love, not fear.
                </p>
                <div className="flex gap-4 mb-6">
                    <a href="https://www.instagram.com/recovery.centered.living" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-brand-sunset transition-colors">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                    <a href="https://www.facebook.com/recoverycenteredliving" target="_blank" rel="noopener noreferrer" className="text-stone-400 hover:text-brand-sunset transition-colors">
                        <svg fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.791-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                    </a>
                </div>
                {/* TROHN Badge */}
                <div className="flex items-center gap-2">
                    <div className="bg-stone-800 px-3 py-2 rounded text-xs font-bold text-stone-300 flex items-center gap-2 border border-stone-700">
                        <span className="text-brand-sunset text-lg">★</span>
                        <span className="">Member of TROHN</span>
                    </div>
                </div>
            </div>

            <div>
                <h4 className="font-bold text-lg mb-6 text-brand-earth">Navigation</h4>
                <ul className="space-y-3 text-stone-400">
                    <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
                    <li><Link to="/about" className="hover:text-white transition-colors">About Slade & Chloe</Link></li>
                    <li><Link to="/houses" className="hover:text-white transition-colors">Our Houses</Link></li>
                    <li><Link to="/resources" className="hover:text-white transition-colors">Resources</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-lg mb-6 text-brand-earth">For Families</h4>
                <ul className="space-y-3 text-stone-400">
                    <li><Link to="/portal" className="hover:text-white transition-colors">Family Portal Login</Link></li>
                    <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
                    <li><Link to="/contact" className="hover:text-white transition-colors">Contact Admissions</Link></li>
                </ul>
            </div>

            <div>
                <h4 className="font-bold text-lg mb-6 text-brand-sunset">Crisis Support</h4>
                <p className="text-stone-400 text-sm mb-4">If this is a medical emergency, dial 911 immediately.</p>
                <div className="bg-stone-800 p-4 rounded-lg">
                    <p className="text-xs text-stone-500 uppercase font-bold mb-1">24/7 Helpline</p>
                    <p className="text-xl font-bold text-white">988</p>
                </div>
            </div>
        </div>
        
        <div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500 text-xs">
            <p>© 2025 Recovery Centered Living. All rights reserved.</p>
            <div className="flex gap-6">
                <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-white">Terms of Service</Link>
            </div>
        </div>
      </div>
    </footer>
  );
};