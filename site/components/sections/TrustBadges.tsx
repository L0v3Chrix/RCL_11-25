'use client';

import { motion } from 'framer-motion';
import { IconShield, IconHeart, IconMapPin, IconUsers } from '@/components/ui/CustomIcons';
import { PaperSurface } from '@/components/ui/ScrapbookElements';

const BADGES = [
  {
    icon: <IconShield size={32} />,
    label: 'Safety + Support',
  },
  {
    icon: <IconHeart size={32} />,
    label: 'Peer Support',
  },
  {
    icon: <IconMapPin size={32} />,
    label: 'Austin Locations',
  },
  {
    icon: <IconUsers size={32} />,
    label: 'Trusted by Many',
  },
];

export default function TrustBadges() {
  return (
    <div className="relative z-20 -mt-12 overflow-visible">
      <PaperSurface
        isWavy={true}
        className="py-10 px-6 md:px-12 flex flex-col md:flex-row items-center justify-center gap-10 md:gap-20 bg-[#F6F1E7]"
        shadowSize="md"
      >
        {/* Trust Label */}
        <div className="flex-shrink-0">
          <span className="font-heading text-2xl md:text-3xl font-bold tracking-[0.1em] text-[#C7773B] uppercase border-r border-[#C7773B]/20 pr-12 mr-2 hidden md:inline">
            Trust
          </span>
          <span className="font-heading text-xl font-bold tracking-[0.1em] text-[#C7773B] uppercase md:hidden block mb-6 text-center">
            Trust
          </span>
        </div>

        {/* Badges Grid */}
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16">
          {BADGES.map((badge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4 group"
            >
              <div className="text-[#1A1410] transition-transform group-hover:scale-110">
                {badge.icon}
              </div>
              <span className="font-heading font-bold text-[#1A1410] text-base md:text-lg whitespace-nowrap">
                {badge.label}
              </span>
            </motion.div>
          ))}
        </div>
      </PaperSurface>
    </div>
  );
}
