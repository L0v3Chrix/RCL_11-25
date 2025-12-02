import React from 'react';
import { House, AvailabilityStatus } from '../types';
import { Link } from 'react-router-dom';

interface HouseCardProps {
  house: House;
}

export const HouseCard: React.FC<HouseCardProps> = ({ house }) => {
  const statusColor = {
    [AvailabilityStatus.AVAILABLE]: 'bg-emerald-100 text-emerald-800 border-emerald-200',
    [AvailabilityStatus.WAITLIST]: 'bg-orange-100 text-orange-800 border-orange-200',
    [AvailabilityStatus.FULL]: 'bg-stone-100 text-stone-600 border-stone-200',
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-stone-100 flex flex-col">
      <div className="relative h-64 overflow-hidden">
        <img 
          src={house.image} 
          alt={house.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide border ${statusColor[house.status]}`}>
            {house.status}
          </span>
        </div>
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6 pt-12">
          <h3 className="text-white font-serif text-2xl font-bold">{house.name}</h3>
          <p className="text-white/90 text-sm">{house.location} • {house.type}</p>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div className="mb-6">
            <div className="flex flex-wrap gap-2 mb-4">
                {house.features.slice(0, 3).map((feature, i) => (
                    <span key={i} className="text-xs bg-brand-sand text-brand-earth px-2 py-1 rounded-md">
                        {feature}
                    </span>
                ))}
            </div>
            <blockquote className="border-l-2 border-brand-sunset pl-4 italic text-stone-600 font-serif text-sm">
                "{house.managerQuote}" <br/>
                <span className="text-brand-earth not-italic text-xs font-bold mt-1 block">— {house.managerName}, House Manager</span>
            </blockquote>
        </div>

        <Link 
            to={`/houses/${house.id}`}
            className="w-full block text-center py-3 rounded-lg border-2 border-brand-earth text-brand-earth font-semibold hover:bg-brand-earth hover:text-white transition-colors"
        >
            View Details
        </Link>
      </div>
    </div>
  );
};