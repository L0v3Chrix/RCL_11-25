
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { HOUSES } from '../data/houses';
import { AvailabilityStatus } from '../types';

export const HouseDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const house = HOUSES.find(h => h.id === id);
  
  // Lightbox State
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Handle Key Press for Lightbox Navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!lightboxOpen) return;
      if (e.key === 'Escape') setLightboxOpen(false);
      if (e.key === 'ArrowRight') nextImage();
      if (e.key === 'ArrowLeft') prevImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxOpen, currentImageIndex]);

  if (!house) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-brand-sand">
        <h2 className="text-4xl font-serif text-brand-earth mb-4">House Not Found</h2>
        <p className="text-stone-600 mb-8">The residence you are looking for does not exist or has been removed.</p>
        <Link to="/" className="bg-brand-sunset text-white px-8 py-3 rounded-full font-bold">Return Home</Link>
      </div>
    );
  }

  // Helper functions for gallery
  const allImages = house.gallery ? [house.image, ...house.gallery] : [house.image];
  
  const openLightbox = (index: number) => {
    setCurrentImageIndex(index);
    setLightboxOpen(true);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

  const statusColor = {
    [AvailabilityStatus.AVAILABLE]: 'bg-emerald-100 text-emerald-800',
    [AvailabilityStatus.WAITLIST]: 'bg-orange-100 text-orange-800',
    [AvailabilityStatus.FULL]: 'bg-stone-100 text-stone-600',
  };

  // Feature Icon Mapping
  const getFeatureIcon = (feature: string) => {
    const text = feature.toLowerCase();
    
    // Wifi / Internet
    if (text.includes('wifi') || text.includes('internet')) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
        </svg>
      );
    }
    
    // Gym / Fitness
    if (text.includes('gym') || text.includes('fitness') || text.includes('workout')) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
        </svg>
      );
    }

    // BBQ / Kitchen
    if (text.includes('bbq') || text.includes('kitchen') || text.includes('cooking')) {
      return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
        </svg>
      );
    }
    
    // Walking / Bus / Transport / Location
    if (text.includes('walking') || text.includes('bus') || text.includes('location') || text.includes('near')) {
       return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
        </svg>
       );
    }

    // Structure / Coaching / Support
    if (text.includes('structure') || text.includes('coaching') || text.includes('assistance') || text.includes('meetings')) {
       return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
           <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 01-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
        </svg>
       );
    }

    // TV / Streaming
    if (text.includes('tv') || text.includes('streaming')) {
       return (
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
           <path strokeLinecap="round" strokeLinejoin="round" d="M6 20.25h12m-7.5-3v3m3-3v3m-10.125-3h17.25c.621 0 1.125-.504 1.125-1.125V4.875c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125z" />
        </svg>
       );
    }

    // Work / Job / Office
    if (text.includes('job') || text.includes('work') || text.includes('office') || text.includes('desk')) {
        return (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        );
    }

    // Nature / Garden / Backyard
    if (text.includes('garden') || text.includes('backyard') || text.includes('nature')) {
        return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
            </svg>
        );
    }

    // Meditation / Yoga / Peace / Suites (Comfort)
    if (text.includes('meditation') || text.includes('yoga') || text.includes('suite') || text.includes('finish')) {
         return (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
            </svg>
         );
    }
    
    // Default Checkmark
    return (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
         <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
      </svg>
    );
  }

  return (
    <div className="bg-white pb-24">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh] group cursor-pointer" onClick={() => openLightbox(0)}>
        <img src={house.image} alt={house.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        
        {/* Expand Icon overlay */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/50 text-white p-4 rounded-full backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
            </svg>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 container mx-auto pointer-events-none">
            <div className="pointer-events-auto inline-block">
                <Link to="/houses" className="inline-flex items-center text-white/80 hover:text-white mb-6 text-sm uppercase tracking-widest font-bold transition-colors">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4 mr-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                    </svg>
                    Back to Houses
                </Link>
            </div>
            <div className="flex flex-col md:flex-row md:items-end gap-4 justify-between">
                <div>
                    <span className={`inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide mb-4 ${statusColor[house.status]}`}>
                        {house.status}
                    </span>
                    <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-2">{house.name}</h1>
                    <p className="text-xl text-white/90 flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-brand-sunset">
                            <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                        </svg>
                        {house.location}
                    </p>
                </div>
                <div className="text-white md:text-right">
                    <p className="text-3xl font-bold">${house.price}</p>
                    <p className="text-sm opacity-80">per month</p>
                </div>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-12">
                
                {/* Description */}
                <section>
                    <h2 className="text-3xl font-serif font-bold text-brand-text mb-6">About the Home</h2>
                    <p className="text-stone-600 text-lg leading-relaxed">
                        {house.description || `Experience the best of recovery living at ${house.name}. Located in ${house.location}, this ${house.type} recovery residence offers a supportive environment designed to help you thrive.`}
                    </p>
                </section>

                {/* Amenities */}
                <section>
                    <h2 className="text-3xl font-serif font-bold text-brand-text mb-6">Amenities</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {house.features.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 bg-stone-50 rounded-xl border border-stone-100 hover:border-brand-sage/30 transition-colors">
                                <div className="w-10 h-10 rounded-full bg-white text-brand-sage flex items-center justify-center shadow-sm border border-stone-100">
                                    {getFeatureIcon(feature)}
                                </div>
                                <span className="text-stone-700 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Interactive Mosaic Gallery */}
                {house.gallery && house.gallery.length > 0 && (
                    <section>
                        <h2 className="text-3xl font-serif font-bold text-brand-text mb-6">Gallery</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 h-96">
                            {/* First image (Large) */}
                            <div 
                                className="md:row-span-2 relative rounded-xl overflow-hidden cursor-pointer group shadow-md"
                                onClick={() => openLightbox(1)} // Index 1 because 0 is the hero
                            >
                                <img src={house.gallery[0]} alt="Gallery 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                    <span className="text-white opacity-0 group-hover:opacity-100 font-bold">View</span>
                                </div>
                            </div>

                            {/* Second Image (Small) */}
                            {house.gallery[1] && (
                                <div 
                                    className="relative rounded-xl overflow-hidden cursor-pointer group shadow-md"
                                    onClick={() => openLightbox(2)}
                                >
                                    <img src={house.gallery[1]} alt="Gallery 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                                         <span className="text-white opacity-0 group-hover:opacity-100 font-bold">View</span>
                                    </div>
                                </div>
                            )}

                            {/* Third Image (Small with More overlay if needed) */}
                            {house.gallery[2] && (
                                <div 
                                    className="relative rounded-xl overflow-hidden cursor-pointer group shadow-md"
                                    onClick={() => openLightbox(3)}
                                >
                                    <img src={house.gallery[2]} alt="Gallery 3" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                    {house.gallery.length > 3 && (
                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-colors hover:bg-black/60">
                                            <span className="text-white font-bold text-xl">+{house.gallery.length - 3} More</span>
                                        </div>
                                    )}
                                </div>
                            )}
                        </div>
                    </section>
                )}

                {/* Manager */}
                <section className="bg-brand-sand p-8 rounded-2xl border border-stone-100">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                        <div className="w-20 h-20 rounded-full bg-brand-earth text-white flex items-center justify-center text-2xl font-serif font-bold flex-shrink-0">
                            {house.managerName.charAt(0)}
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-brand-text mb-1">House Manager: {house.managerName}</h3>
                            <p className="text-brand-sage text-sm font-bold uppercase tracking-wide mb-4">Lives on-site</p>
                            <blockquote className="italic text-stone-600 border-l-2 border-brand-sunset pl-4">
                                "{house.managerQuote}"
                            </blockquote>
                        </div>
                    </div>
                </section>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
                <div className="sticky top-28 space-y-6">
                    
                    {/* Action Card */}
                    <div className="bg-white border-2 border-stone-100 p-8 rounded-2xl shadow-lg">
                        <div className="mb-6">
                            <span className="text-stone-500 text-sm font-medium uppercase tracking-wide">Monthly Rate</span>
                            <div className="flex items-baseline gap-2">
                                <span className="text-4xl font-bold text-brand-earth">${house.price}</span>
                                <span className="text-stone-400">/ month</span>
                            </div>
                        </div>

                        <div className="space-y-4 mb-8">
                            <div className="flex justify-between text-sm pb-3 border-b border-stone-100">
                                <span className="text-stone-500">Bed Availability</span>
                                <span className={`font-bold ${house.bedsAvailable > 0 ? 'text-emerald-600' : 'text-orange-600'}`}>
                                    {house.bedsAvailable > 0 ? `${house.bedsAvailable} Beds Open` : 'Waitlist Only'}
                                </span>
                            </div>
                            <div className="flex justify-between text-sm pb-3 border-b border-stone-100">
                                <span className="text-stone-500">Residence Type</span>
                                <span className="font-bold text-stone-800">{house.type}</span>
                            </div>
                            <div className="flex justify-between text-sm pb-3 border-b border-stone-100">
                                <span className="text-stone-500">Minimum Stay</span>
                                <span className="font-bold text-stone-800">3 Months</span>
                            </div>
                        </div>

                        <Link 
                            to="/apply" 
                            className="block w-full bg-brand-sunset text-white text-center py-4 rounded-xl font-bold text-lg shadow-md hover:bg-orange-600 hover:shadow-lg transition-all transform hover:-translate-y-0.5"
                        >
                            Apply for {house.name}
                        </Link>
                        
                        <p className="text-xs text-center text-stone-400 mt-4">
                            $250 move-in fee required. All utilities included.
                        </p>
                    </div>

                    {/* Helper Card */}
                    <div className="bg-stone-50 p-6 rounded-xl border border-stone-100 text-center">
                        <h4 className="font-bold text-brand-text mb-2">Questions?</h4>
                        <p className="text-stone-500 text-sm mb-4">Unsure if this house is the right fit? Talk to our intake coordinator.</p>
                        <a href="tel:5125550199" className="text-brand-earth font-bold hover:underline">(512) 555-0199</a>
                    </div>
                </div>
            </div>
        </div>
      </div>

      {/* LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md flex items-center justify-center animate-in fade-in duration-200">
            {/* Close Button */}
            <button 
                onClick={() => setLightboxOpen(false)}
                className="absolute top-6 right-6 text-white/70 hover:text-white p-2 z-50"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-10 h-10">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>

            {/* Image Container */}
            <div className="relative w-full h-full flex items-center justify-center p-4 md:p-20">
                <img 
                    src={allImages[currentImageIndex]} 
                    alt={`Gallery view ${currentImageIndex + 1}`} 
                    className="max-w-full max-h-full object-contain rounded shadow-2xl"
                />
                
                {/* Navigation Arrows */}
                <button 
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 md:left-10 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                    </svg>
                </button>
                <button 
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 md:right-10 top-1/2 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-3 rounded-full backdrop-blur-sm transition-all"
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                </button>

                {/* Caption/Counter */}
                <div className="absolute bottom-6 left-0 right-0 text-center text-white/80 text-sm tracking-widest font-medium">
                    IMAGE {currentImageIndex + 1} OF {allImages.length}
                </div>
            </div>
        </div>
      )}
    </div>
  );
};
