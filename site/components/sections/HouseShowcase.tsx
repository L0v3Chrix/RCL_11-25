'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { houses, HouseGender, House } from '@/data/houses';
import { IconBed, IconCar } from '@/components/ui/CustomIcons';
import {
  PolaroidHybridCard,
  DoodleArrow,
  DoodleBracket,
  getScrapbookVariant
} from '@/components/ui/ScrapbookElements';

type FilterType = 'all' | HouseGender;

interface HouseShowcaseProps {
  onSelectHouse?: (house: House) => void;
}

export default function HouseShowcase({ onSelectHouse }: HouseShowcaseProps) {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  const filteredHouses = houses.filter(
    (house) => activeFilter === 'all' || house.gender === activeFilter
  );

  return (
    <section id="houses" className="relative py-32 bg-[#FDF6E9] overflow-hidden">
      {/* Subtle Paper Grain Overlay */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('/textures/paper-grain.svg')] pointer-events-none" />

      <div className="container relative z-10">
        {/* Section Header */}
        <div className="relative text-center max-w-4xl mx-auto mb-24">
          <h2 className="font-heading text-5xl md:text-6xl lg:text-9xl font-black text-[#1A1410] mb-12">
            Our Houses
          </h2>

          <div className="relative inline-flex items-center">
            {/* Left Doodle Bracket */}
            <DoodleBracket className="absolute -left-20 top-0 opacity-20 hidden lg:block" />

            {/* Filter Tabs */}
            <div className="flex bg-[#E7D6C2]/40 backdrop-blur-sm p-2 rounded-full border-2 border-stone-200/60 shadow-inner">
              <FilterTab label="All" isActive={activeFilter === 'all'} onClick={() => setActiveFilter('all')} />
              <FilterTab label="Men's" isActive={activeFilter === 'men'} onClick={() => setActiveFilter('men')} />
              <FilterTab label="Women's" isActive={activeFilter === 'women'} onClick={() => setActiveFilter('women')} />
            </div>

            {/* Right Doodle Arrow */}
            <DoodleArrow className="absolute -right-32 top-1/2 -translate-y-1/2 opacity-40 hidden lg:block" rotation={15} />
          </div>
        </div>

        {/* Carousel Chevrons - Floating */}
        <div className="absolute left-8 top-[60%] -translate-y-1/2 z-20 hidden md:block">
          <button className="w-16 h-16 rounded-full bg-white/80 hover:bg-white text-stone-800 shadow-xl border border-stone-100 flex items-center justify-center transition-all hover:-translate-x-2">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current stroke-2"><path d="M15 18l-6-6 6-6" /></svg>
          </button>
        </div>
        <div className="absolute right-8 top-[60%] -translate-y-1/2 z-20 hidden md:block">
          <button className="w-16 h-16 rounded-full bg-white/80 hover:bg-white text-stone-800 shadow-xl border border-stone-100 flex items-center justify-center transition-all hover:translate-x-2">
            <svg viewBox="0 0 24 24" className="w-8 h-8 fill-none stroke-current stroke-2"><path d="M9 18l6-6-6-6" /></svg>
          </button>
        </div>

        {/* Houses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 lg:gap-16">
          <AnimatePresence mode="popLayout">
            {filteredHouses.map((house, index) => {
              const variant = getScrapbookVariant(index + 20);
              return (
                <motion.div
                  key={house.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="bg-white rounded-[2rem] shadow-2xl overflow-hidden flex flex-col group hover:shadow-[0_40px_80px_rgba(0,0,0,0.15)] transition-shadow"
                >
                  {/* Rotated Polaroid Top */}
                  <div className="p-4 pb-0 relative">
                    <PolaroidHybridCard
                      rotation={variant.rotation * 2}
                      pinColor={variant.pinColor}
                      pinPosition={variant.pinPosition}
                      tapePlacement={variant.tapePlacement}
                      tapeVariant={variant.tapeVariant}
                      customMask={null} // No uniform torn edge
                      isSquare={false}
                      className="w-full"
                    >
                      <div
                        onClick={() => onSelectHouse?.(house)}
                        className="relative aspect-[4/3] w-full cursor-pointer"
                      >
                        <Image
                          src={house.heroImage}
                          alt={house.name}
                          fill
                          className="object-cover"
                        />
                        {/* Neighborhood Pill Overlay */}
                        <div className="absolute top-4 left-4 bg-[#2F6F71] text-white text-[10px] font-black px-4 py-2 rounded-full shadow-lg uppercase tracking-widest z-10">
                          {house.neighborhoodLabel}
                        </div>
                      </div>
                    </PolaroidHybridCard>
                  </div>

                  {/* Straight Content Bottom */}
                  <div className="p-8 pt-10 flex flex-col flex-1">
                    <h3 className="font-heading text-3xl font-black text-[#1A1410] mb-6">
                      {house.name} <span className="text-sm font-bold text-stone-400 block mt-1 uppercase tracking-tighter">({house.gender === 'men' ? "Men's" : "Women's"} House)</span>
                    </h3>

                    {/* Meta Row */}
                    <div className="flex items-center gap-10 mb-8 border-b border-stone-100 pb-6">
                      <div className="flex items-center gap-3">
                        <IconBed size={24} className="text-[#C7773B]" />
                        <span className="font-black text-stone-600">1 Bed</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <IconCar size={24} className="text-[#C7773B]" />
                        <span className="font-black text-stone-600">Parking info</span>
                      </div>
                    </div>

                    <div className="mt-auto">
                      <button
                        onClick={() => onSelectHouse?.(house)}
                        className="w-full bg-[#C7773B] hover:bg-[#B6662A] text-white font-black text-xl py-6 rounded-full transition-all shadow-[0_15px_40px_rgba(199,119,59,0.3)] hover:shadow-[0_20px_50px_rgba(199,119,59,0.4)] transform hover:-translate-y-1 active:translate-y-0"
                      >
                        View House
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

interface FilterTabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
}

function FilterTab({ label, isActive, onClick }: FilterTabProps) {
  return (
    <button
      onClick={onClick}
      className={`px-8 py-3 rounded-full text-base font-bold transition-all duration-300 ${isActive
        ? 'bg-[#C7773B] text-white shadow-lg scale-105'
        : 'text-stone-600 hover:text-[#C7773B]'
        }`}
    >
      {label}
    </button>
  );
}
