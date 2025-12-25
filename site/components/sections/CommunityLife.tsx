'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Corkboard,
  PolaroidHybridCard,
  Pushpin,
  Tape,
  PostItNote
} from '@/components/ui/ScrapbookElements';

// Unique list of photos from the community folder
const PHOTOS = [
  { src: '/images/community/bbq.jpg', label: 'Sunday BBQ' },
  { src: '/images/community/family-meal.jpg', label: 'House Dinner' },
  { src: '/images/community/garden.jpg', label: 'Garden Crew' },
  { src: '/images/community/kitchen.jpg', label: 'Kitchen Vibes' },
  { src: '/images/community/gratitude.jpg', label: 'Gratitude' },
  { src: '/images/community/outing-1.jpg', label: 'Outing' },
  { src: '/images/community/group-photo.jpg', label: 'The Family' },
  { src: '/images/community/backyard-1.jpg', label: 'Summer Days' },
  { src: '/images/community/backyard-deck.jpg', label: 'Morning Coffee' },
  { src: '/images/community/big-ups.jpg', label: 'Celebrations' },
  { src: '/images/community/bowling.jpg', label: 'Bowling Night' },
  { src: '/images/community/campfire.jpg', label: 'Campfire Talk' },
  { src: '/images/community/christmas.jpg', label: 'Holiday Spirit' },
  { src: '/images/community/dinner-group.jpg', label: 'Full House' },
  { src: '/images/community/fire-christmas.jpg', label: 'Warm Winters' },
  { src: '/images/community/fire-pit-fun.jpg', label: 'Marshmallows' },
  { src: '/images/community/founders-silly.jpg', label: 'Silly Moments' },
  { src: '/images/community/group-huddle.jpg', label: 'Support' },
  { src: '/images/community/happy-resident.jpg', label: 'Big Smiles' },
  { src: '/images/community/house-meeting.jpg', label: 'Community' },
  { src: '/images/community/love-sign.jpg', label: 'Love Lives Here' },
  { src: '/images/community/lunch.jpg', label: 'Power Lunch' },
  { src: '/images/community/management.jpg', label: 'Our Team' },
  { src: '/images/community/meeting-circle.jpg', label: 'Check-ins' },
  { src: '/images/community/mom-kid.jpg', label: 'Full Recovery' },
  { src: '/images/community/restaurant.jpg', label: 'Night Out' },
  { src: '/images/community/rex-love.jpg', label: 'Rex Says Hi' },
  { src: '/images/community/service.jpg', label: 'Giving Back' },
  { src: '/images/community/winter-fun.jpg', label: 'Snow Day' },
  { src: '/images/community/yummy-dinner.jpg', label: 'Good Eats' },
];

const NOTES = [
  { text: "You are worth it.", color: "#fff68f" },
  { text: "Keep showing up.", color: "#ffcfd2" },
  { text: "Recovery is possible.", color: "#cffaff" },
  { text: "One day at a time.", color: "#e2f0cb" },
  { text: "Love lives here.", color: "#f8d7da" },
  { text: "Community = Strength", color: "#d1ecf1" },
];

interface PhotoItem {
  type: 'photo';
  id: string;
  data: { src: string; label: string };
  style: {
    top: string;
    left: string;
    rotation: number;
    zIndex: number;
    size: 'medium' | 'large';
  };
}

interface NoteItem {
  type: 'note';
  id: string;
  data: { text: string; color: string };
  style: {
    top: string;
    left: string;
    rotation: number;
    zIndex: number;
  };
}

type ChaoticItem = PhotoItem | NoteItem;

/**
 * Generate a pseudo-random layout for the chaos
 */
const generateChaoticLayout = (count: number, notesCount: number): ChaoticItem[] => {
  const items: ChaoticItem[] = [];

  // Create photo items
  for (let i = 0; i < count; i++) {
    const row = Math.floor(i / 5);
    const col = i % 5;
    items.push({
      type: 'photo',
      id: `photo-${i}`,
      data: PHOTOS[i % PHOTOS.length],
      style: {
        top: `${row * 15 + (Math.random() * 10)}%`,
        left: `${col * 20 + (Math.random() * 5)}%`,
        rotation: (Math.random() * 15) - 7.5,
        zIndex: Math.floor(Math.random() * 50),
        size: Math.random() > 0.8 ? 'large' : 'medium'
      }
    });
  }

  // Create note items
  for (let i = 0; i < notesCount; i++) {
    items.push({
      type: 'note',
      id: `note-${i}`,
      data: NOTES[i % NOTES.length],
      style: {
        top: `${Math.random() * 85}%`,
        left: `${Math.random() * 85}%`,
        rotation: (Math.random() * 20) - 10,
        zIndex: Math.floor(Math.random() * 60)
      }
    });
  }

  return items;
};

export default function CommunityLife() {
  const chaoticItems = generateChaoticLayout(PHOTOS.length, NOTES.length);

  return (
    <Corkboard className="py-32 min-h-[1600px] md:min-h-[2200px] bg-[#B98A53]">
      <div className="relative h-full container">
        {/* Section Header - pinned over everything */}
        <div className="text-center max-w-4xl mx-auto mb-32 relative z-[100]">
          <h2 className="font-heading text-5xl md:text-6xl lg:text-9xl font-black text-white mb-8 drop-shadow-2xl">
            Community Life
          </h2>
          <p className="text-xl md:text-3xl text-white/95 drop-shadow-lg font-bold leading-relaxed max-w-3xl mx-auto">
            Recovery isn’t meant to be done alone. RCL is built around community support and accountability.
          </p>
        </div>

        {/* The Chaos Field - Desktop Layout */}
        <div className="relative w-full h-[1400px] md:h-[2000px] hidden md:block">
          {chaoticItems.map((item) => {
            if (item.type === 'photo') {
              const isLarge = item.style.size === 'large';
              return (
                <motion.div
                  key={item.id}
                  className="absolute"
                  style={{
                    top: item.style.top,
                    left: item.style.left,
                    width: isLarge ? '450px' : '320px',
                    zIndex: item.style.zIndex,
                  }}
                  initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    rotate: item.style.rotation
                  }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 40,
                    damping: 12
                  }}
                >
                  <PolaroidHybridCard
                    rotation={0}
                    pinColor={Math.random() > 0.5 ? '#E76F51' : '#2F6F71'}
                    pinPosition="-top-4 left-1/2 -translate-x-1/2"
                    tapePlacement="-top-3 -right-6"
                    tapePlacement2="-bottom-3 -left-6"
                    tapeVariant={Math.floor(Math.random() * 4)}
                    tapeVariant2={Math.floor(Math.random() * 4)}
                    className="shadow-2xl hover:scale-105 transition-transform cursor-pointer"
                    hasTape={true}
                    hasPin={true}
                  >
                    <div className="relative aspect-square">
                      <Image
                        src={item.data.src}
                        alt={item.data.label}
                        fill
                        className="object-cover"
                        sizes={isLarge ? "500px" : "350px"}
                      />
                    </div>
                  </PolaroidHybridCard>

                  {/* Handwritten Tag */}
                  <div className="text-center mt-4">
                    <span className="font-handwritten text-4xl text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)] block">
                      {item.data.label}
                    </span>
                  </div>
                </motion.div>
              );
            } else {
              return (
                <motion.div
                  key={item.id}
                  className="absolute"
                  style={{
                    top: item.style.top,
                    left: item.style.left,
                    zIndex: item.style.zIndex,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: item.style.rotation }}
                  viewport={{ once: true }}
                >
                  <PostItNote color={item.data.color} rotation={0}>
                    {item.data.text}
                  </PostItNote>
                  <Pushpin className="absolute -top-4 left-1/2 -translate-x-1/2 scale-150 z-20" color="#D4A373" />
                </motion.div>
              );
            }
          })}
        </div>

        {/* Mobile View - A more vertical but still messy stack */}
        <div className="flex flex-col gap-12 md:hidden px-4 pb-20 relative z-10">
          {chaoticItems.slice(0, 15).map((item, idx) => {
            if (item.type === 'photo') {
              return (
                <motion.div
                  key={`mobile-${item.id}`}
                  className="flex flex-col items-center"
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                >
                  <PolaroidHybridCard
                    rotation={(Math.random() * 8) - 4}
                    pinColor="#E76F51"
                    className="w-full max-w-[340px]"
                    hasTape={true}
                    hasPin={true}
                  >
                    <div className="relative aspect-square w-full">
                      <Image
                        src={item.data.src}
                        alt={item.data.label}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </PolaroidHybridCard>
                  <span className="font-handwritten text-4xl text-white mt-4 text-center drop-shadow-xl">
                    {item.data.label}
                  </span>
                </motion.div>
              );
            } else {
              return (
                <motion.div
                  key={`mobile-${item.id}`}
                  className="flex justify-center my-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                >
                  <PostItNote color={item.data.color} rotation={(Math.random() * 10) - 5}>
                    {item.data.text}
                  </PostItNote>
                </motion.div>
              );
            }
          })}
        </div>
      </div>
    </Corkboard>
  );
}
