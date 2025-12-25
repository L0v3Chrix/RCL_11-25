'use client';

import React from 'react';

export type PushpinColor = 'red' | 'yellow' | 'blue' | 'green' | 'orange';

interface PushpinProps {
  color?: PushpinColor;
  position?: 'top-left' | 'top-center' | 'top-right';
  rotation?: number;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
}

const COLOR_MAP: Record<PushpinColor, { head: string; highlight: string; shadow: string }> = {
  red: {
    head: 'linear-gradient(135deg, #E53935 0%, #C62828 50%, #8B1A1A 100%)',
    highlight: 'rgba(255, 255, 255, 0.6)',
    shadow: 'rgba(139, 26, 26, 0.8)',
  },
  yellow: {
    head: 'linear-gradient(135deg, #FDD835 0%, #F9A825 50%, #C17900 100%)',
    highlight: 'rgba(255, 255, 255, 0.7)',
    shadow: 'rgba(193, 121, 0, 0.8)',
  },
  blue: {
    head: 'linear-gradient(135deg, #1E88E5 0%, #1565C0 50%, #0D3C75 100%)',
    highlight: 'rgba(255, 255, 255, 0.6)',
    shadow: 'rgba(13, 60, 117, 0.8)',
  },
  green: {
    head: 'linear-gradient(135deg, #43A047 0%, #2E7D32 50%, #1B4D1E 100%)',
    highlight: 'rgba(255, 255, 255, 0.6)',
    shadow: 'rgba(27, 77, 30, 0.8)',
  },
  orange: {
    head: 'linear-gradient(135deg, #FB8C00 0%, #EF6C00 50%, #A84500 100%)',
    highlight: 'rgba(255, 255, 255, 0.65)',
    shadow: 'rgba(168, 69, 0, 0.8)',
  },
};

const SIZE_MAP = {
  sm: { head: 14, pin: 6 },
  md: { head: 18, pin: 8 },
  lg: { head: 24, pin: 10 },
};

const POSITION_MAP: Record<string, { top: string; left: string; right: string; transform?: string }> = {
  'top-left': { top: '-6px', left: '12px', right: 'auto' },
  'top-center': { top: '-6px', left: '50%', right: 'auto', transform: 'translateX(-50%)' },
  'top-right': { top: '-6px', right: '12px', left: 'auto' },
};

export default function Pushpin({
  color = 'red',
  position = 'top-center',
  rotation = 0,
  className = '',
  size = 'md',
}: PushpinProps) {
  const colors = COLOR_MAP[color];
  const sizes = SIZE_MAP[size];
  const pos = POSITION_MAP[position];

  return (
    <div
      className={`absolute z-20 ${className}`}
      style={{
        ...pos,
        transform: `${pos.transform || ''} rotate(${rotation}deg)`,
      }}
    >
      {/* Pin shadow on surface */}
      <div
        className="absolute rounded-full"
        style={{
          width: sizes.head + 4,
          height: sizes.head / 2,
          background: 'rgba(0, 0, 0, 0.25)',
          filter: 'blur(3px)',
          top: sizes.head - 2,
          left: '50%',
          transform: 'translateX(-50%)',
        }}
      />

      {/* Metal pin shaft */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          width: 2,
          height: sizes.pin,
          background: 'linear-gradient(90deg, #888 0%, #ccc 50%, #888 100%)',
          top: sizes.head - 3,
          boxShadow: '1px 1px 2px rgba(0,0,0,0.3)',
        }}
      />

      {/* Pin point */}
      <div
        className="absolute left-1/2 -translate-x-1/2"
        style={{
          width: 0,
          height: 0,
          borderLeft: '2px solid transparent',
          borderRight: '2px solid transparent',
          borderTop: '4px solid #666',
          top: sizes.head + sizes.pin - 3,
        }}
      />

      {/* Pushpin head */}
      <div
        className="relative rounded-full"
        style={{
          width: sizes.head,
          height: sizes.head,
          background: colors.head,
          boxShadow: `
            inset -2px -2px 4px ${colors.shadow},
            inset 2px 2px 4px ${colors.highlight},
            2px 3px 6px rgba(0, 0, 0, 0.4),
            1px 1px 2px rgba(0, 0, 0, 0.2)
          `,
        }}
      >
        {/* Highlight reflection */}
        <div
          className="absolute rounded-full"
          style={{
            width: sizes.head * 0.3,
            height: sizes.head * 0.3,
            background: 'rgba(255, 255, 255, 0.5)',
            top: '15%',
            left: '20%',
            filter: 'blur(1px)',
          }}
        />
      </div>
    </div>
  );
}

// Helper to get random pushpin props
export function getRandomPushpinProps(): { color: PushpinColor; rotation: number } {
  const colors: PushpinColor[] = ['red', 'yellow', 'blue', 'green', 'orange'];
  const color = colors[Math.floor(Math.random() * colors.length)];
  const rotation = Math.floor(Math.random() * 30) - 15; // -15 to +15 degrees
  return { color, rotation };
}
