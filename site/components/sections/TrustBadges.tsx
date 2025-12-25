'use client';

import { motion } from 'framer-motion';
import RCLIcon from '@/components/ui/RCLIcon';
import { PaperSurface } from '@/components/ui/ScrapbookElements';

const BADGES = [
  {
    iconName: 'shield',
    label: 'High Accountability',
  },
  {
    iconName: 'heart',
    label: 'Clean Environment',
  },
  {
    iconName: 'location',
    label: 'Austin Locations',
  },
  {
    iconName: 'group',
    label: 'Peer Supported',
  },
  {
    iconName: 'holistic',
    label: 'Spiritual Life',
  },
  {
    iconName: 'growth',
    label: 'Rebuild Daily',
  },
];

export default function TrustBadges() {
  return (
    <div className="relative z-20 -mt-20 overflow-visible px-4">
      {/* Container - now visually simpler to let badges pop */}
      <div className="max-w-[1400px] mx-auto">
        <PaperSurface
          isWavy={true}
          className="py-12 px-6 md:px-12 flex flex-col xl:flex-row items-center justify-center gap-10 xl:gap-16 bg-[#FDF6E9] min-h-[300px]"
          shadowSize="xl"
        >
          {/* Trust Label - Vertical on Desktop, Top on Mobile */}
          <div className="flex-shrink-0 relative z-10 text-center xl:text-left">
            <div className="font-heading text-4xl md:text-5xl font-black tracking-tighter text-[#C7773B] uppercase xl:border-r-4 xl:border-[#C7773B]/20 xl:pr-12 xl:mr-2 leading-[0.9]">
              Trust<br /><span className="text-[#1A1410]">Built In</span>
            </div>
          </div>

          {/* Badges Grid - Chips */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 w-full">
            {BADGES.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative"
              >
                {/* Badge Chip */}
                <div className="bg-white hover:bg-white border-2 border-[#1A1410]/5 hover:border-[#C7773B]/30 rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center gap-4 text-center shadow-md group-hover:shadow-xl group-hover:-translate-y-1 transition-all duration-300 h-full">
                  <div className="transform group-hover:scale-110 duration-300 p-2 bg-[#FDF6E9] rounded-full">
                    <RCLIcon name={badge.iconName} size={42} strokeColor="#1A1410" fillColor="#C7773B" />
                  </div>
                  <span className="font-heading font-black text-[#1A1410] text-sm leading-tight uppercase tracking-wide">
                    {badge.label}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </PaperSurface>
      </div>
    </div>
  );
}
