'use client';

import { motion } from 'framer-motion';
import RCLIcon from '@/components/ui/RCLIcon';

const BADGES = [
  {
    iconName: 'shield',
    label: 'High Accountability',
    color: '#2F6F71', // Teal
    rotate: -2,
  },
  {
    iconName: 'heart',
    label: 'Clean Environment',
    color: '#C7773B', // Orange
    rotate: 1,
  },
  {
    iconName: 'location',
    label: 'Austin Locations',
    color: '#2F6F71',
    rotate: -1,
  },
  {
    iconName: 'group',
    label: 'Peer Supported',
    color: '#C7773B',
    rotate: 2,
  },
  {
    iconName: 'holistic',
    label: 'Spiritual Life',
    color: '#2F6F71',
    rotate: -2,
  },
  {
    iconName: 'growth',
    label: 'Rebuild Daily',
    color: '#C7773B',
    rotate: 1,
  },
];

export default function TrustBadges() {
  return (
    <div className="relative z-20 -mt-16 sm:-mt-20 px-4 pointer-events-none">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 justify-items-center">
          {BADGES.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50, rotate: 0 }}
              whileInView={{
                opacity: 1,
                y: 0,
                rotate: badge.rotate
              }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 15,
                delay: index * 0.1
              }}
              className="pointer-events-auto"
            >
              <div
                className="group relative flex flex-col items-center justify-center w-36 h-36 md:w-40 md:h-40 rounded-full bg-[#FDF6E9] shadow-lg hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-300 cursor-default border-4 border-dashed"
                style={{ borderColor: badge.color }}
              >
                {/* Inner Ring (Visual Detail) */}
                <div className="absolute inset-1 rounded-full border border-black/5" />

                {/* Icon */}
                <div className="mb-2 transform group-hover:scale-110 transition-transform duration-300">
                  <RCLIcon
                    name={badge.iconName}
                    size={48}
                    strokeColor={badge.color}
                    fillColor={`${badge.color}20`} // 20 hex opacity
                  />
                </div>

                {/* Text */}
                <span
                  className="font-heading font-black text-center text-sm uppercase leading-tight max-w-[80%]"
                  style={{ color: badge.color }}
                >
                  {badge.label}
                </span>

                {/* Shine effect */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-white/0 via-white/30 to-white/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
