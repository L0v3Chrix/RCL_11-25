
import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { HouseDetails } from './pages/HouseDetails';
import { GeminiChat } from './components/GeminiChat';

// Scroll to top wrapper
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col font-sans selection:bg-brand-sunset/30 selection:text-brand-earth">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/houses/:id" element={<HouseDetails />} />
            {/* 
              In a full implementation, these routes would map to their respective components.
            */}
            <Route path="*" element={<div className="pt-32 pb-20 text-center"><h1 className="text-3xl font-serif">Page Coming Soon</h1><p className="mt-4 text-stone-500">We are currently building this section.</p></div>} />
          </Routes>
        </main>
        <Footer />
        <GeminiChat />
      </div>
    </Router>
  );
};

export default App;