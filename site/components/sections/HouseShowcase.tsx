'use client';

import React, { useState } from 'react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import Link from 'next/link';
import { houses, getAvailabilityBadgeColor, getAvailabilityLabel, getTotalAvailableBeds } from '@/lib/data/houses';
import type { House } from '@/lib/data/houses';

type HouseFilter = 'all' | 'mens' | 'womens' | 'available';

export default function HouseShowcase() {
  const [filter, setFilter] = useState<HouseFilter>('all');

  const filteredHouses = houses.filter((house) => {
    if (filter === 'all') return true;
    if (filter === 'mens') return house.type === 'mens';
    if (filter === 'womens') return house.type === 'womens';
    if (filter === 'available') return house.availability === 'available';
    return true;
  });

  const totalAvailableBeds = getTotalAvailableBeds();

  return (
    <section className="py-20 bg-gradient-to-b from-white via-primary-50/30 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary-900 mb-4">
            Find Your Home in Austin
          </h2>
          <p className="text-lg text-brand-text leading-relaxed mb-4">
            6 peer-led sober living homes across Austin. Each house offers a unique environment designed for comfort, community, and lasting recovery.
          </p>

          {/* Real-time Availability Summary */}
          {totalAvailableBeds > 0 && (
            <div className="inline-flex items-center gap-2 bg-brand-success/10 border-2 border-brand-success/30 rounded-full px-5 py-2 text-brand-success font-medium">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-success opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-success"></span>
              </span>
              <span className="text-sm font-bold">
                {totalAvailableBeds} Bed{totalAvailableBeds === 1 ? '' : 's'} Available Now
              </span>
            </div>
          )}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {[
            { value: 'all', label: 'All Houses', icon: '🏘️', count: houses.length },
            { value: 'mens', label: "Men's Houses", icon: '👔', count: houses.filter(h => h.type === 'mens').length },
            { value: 'womens', label: "Women's Houses", icon: '👗', count: houses.filter(h => h.type === 'womens').length },
            { value: 'available', label: 'Available Now', icon: '✨', count: houses.filter(h => h.availability === 'available').length },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value as HouseFilter)}
              className={`px-6 py-3 rounded-lg font-medium transition-all transform hover:scale-105 active:scale-95 flex items-center gap-2 ${
                filter === tab.value
                  ? 'bg-gradient-to-r from-primary-600 to-secondary-600 text-white shadow-lg'
                  : 'bg-white text-brand-text border-2 border-primary-200 hover:border-primary-400'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              <span>{tab.label}</span>
              <span className={`text-xs px-2 py-0.5 rounded-full ${
                filter === tab.value ? 'bg-white/20' : 'bg-primary-100 text-primary-700'
              }`}>
                {tab.count}
              </span>
            </button>
          ))}
        </div>

        {/* House Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredHouses.map((house) => (
            <HouseCard key={house.id} house={house} />
          ))}
        </div>

        {/* Empty State */}
        {filteredHouses.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="font-heading text-2xl font-bold text-primary-900 mb-2">No houses match your filter</h3>
            <p className="text-brand-text mb-6">Try selecting a different option above</p>
            <button
              onClick={() => setFilter('all')}
              className="px-6 py-3 bg-primary-600 text-white rounded-lg font-medium hover:bg-primary-700 transition-colors"
            >
              View All Houses
            </button>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="text-center bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl p-8 md:p-12 border-2 border-primary-200 shadow-lg">
          <h3 className="font-heading text-2xl md:text-3xl font-bold text-primary-900 mb-3">
            Not sure which home is right for you?
          </h3>
          <p className="text-brand-text mb-6 max-w-2xl mx-auto">
            Slade and Chloe will personally help you find the perfect fit based on your needs, location preference, and recovery goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/intake">
              <Button variant="primary" size="lg" className="shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all">
                Start Your Application →
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" size="lg" className="hover:bg-white transition-all">
                Schedule a Tour
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

function HouseCard({ house }: { house: House }) {
  const [imageError, setImageError] = useState(false);
  const bedsAvailable = house.capacity - house.currentOccupancy;

  return (
    <Card hoverable className="flex flex-col overflow-hidden group transition-all duration-300 hover:shadow-2xl">
      {/* House Image with Fallback */}
      <div className="relative h-56 overflow-hidden">
        {!imageError ? (
          <Image
            src={house.images.main}
            alt={`${house.name} - Recovery Centered Living ${house.type === 'mens' ? "Men's" : "Women's"} House in ${house.neighborhood}`}
            fill
            className="object-cover group-hover:scale-110 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            quality={85}
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-primary-100 via-secondary-100 to-primary-100 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-3">{house.type === 'mens' ? '🏠' : '🏡'}</div>
              <p className="font-heading font-bold text-primary-700 text-xl">{house.name}</p>
            </div>
          </div>
        )}

        {/* Type Badge (Men's/Women's) */}
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full text-sm font-bold text-primary-900 shadow-lg flex items-center gap-2">
            <span>{house.type === 'mens' ? '👔' : '👗'}</span>
            {house.type === 'mens' ? "Men's House" : "Women's House"}
          </span>
        </div>

        {/* Availability Badge */}
        <div className="absolute top-4 right-4 z-10">
          <span className={`${getAvailabilityBadgeColor(house.availability)} px-3 py-1.5 rounded-full text-sm font-bold shadow-lg flex items-center gap-1.5`}>
            {house.availability === 'available' && (
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
            )}
            {getAvailabilityLabel(house)}
          </span>
        </div>

        {/* Location Tag */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="bg-black/60 backdrop-blur-sm rounded-lg px-3 py-2 flex items-center gap-2 text-white">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium">{house.neighborhood} - {house.location === 'south' ? 'South' : 'North'} Austin</span>
          </div>
        </div>
      </div>

      {/* House Info */}
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="font-heading text-2xl font-bold text-primary-900 mb-3 group-hover:text-primary-700 transition-colors">
          {house.name}
        </h3>

        {/* Features Grid */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          {house.features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-sm text-brand-text">
              <span className="text-lg">{feature.icon}</span>
              <span>{feature.label}</span>
            </div>
          ))}
        </div>

        {/* Highlights */}
        <div className="mb-4">
          <p className="text-sm font-medium text-primary-700 mb-2">Highlights:</p>
          <ul className="space-y-1">
            {house.highlights.slice(0, 3).map((highlight, index) => (
              <li key={index} className="text-sm text-brand-text flex items-start gap-2">
                <span className="text-brand-success mt-0.5">✓</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* House Manager */}
        <div className="bg-primary-50/50 rounded-lg p-3 mb-4">
          <p className="text-xs font-bold text-primary-700 mb-1">House Manager</p>
          <p className="text-sm font-bold text-primary-900">{house.houseManager.name}</p>
          <p className="text-xs text-primary-600">{house.houseManager.yearsInRecovery} years in recovery</p>
        </div>

        {/* Pricing */}
        <div className="mt-auto">
          <div className="flex justify-between items-center mb-4 pb-4 border-b border-primary-100">
            <div>
              <p className="text-xs text-primary-600">Starting at</p>
              <p className="text-2xl font-bold text-primary-900">${house.pricing.weekly}<span className="text-sm font-normal text-brand-text">/week</span></p>
            </div>
            <div className="text-right">
              <p className="text-sm text-brand-text">${house.pricing.monthly}/month</p>
              <p className="text-xs text-primary-600">${house.pricing.deposit} deposit</p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-2">
            <Link href={`/houses/${house.id}`} className="flex-1">
              <Button variant="primary" className="w-full text-sm">
                View Details
              </Button>
            </Link>
            <Link href="/intake">
              <Button variant="outline" className="px-4 text-sm">
                Apply
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </Card>
  );
}
