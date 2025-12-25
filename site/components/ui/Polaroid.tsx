'use client';

import React, { useMemo } from 'react';
import Image from 'next/image';
import Pushpin, { type PushpinColor } from './Pushpin';

// Torn edge mask paths
const TORN_MASKS = [
  '/masks/torn-edge-1.svg',
  '/masks/torn-edge-2.svg',
  '/masks/torn-edge-3.svg',
  '/masks/torn-edge-4.svg',
];

interface PolaroidProps {
  src: string;
  alt: string;
  caption?: string;
  rotation?: number;
  randomize?: boolean;
  showTape?: boolean;
  tapePosition?: 'top' | 'corners' | 'top-left' | 'top-right';
  showPushpin?: boolean;
  pushpinColor?: PushpinColor;
  pushpinPosition?: 'top-left' | 'top-center' | 'top-right';
  className?: string;
  imageClassName?: string;
  aspectRatio?: 'square' | 'portrait' | 'landscape';
  useTornEdge?: boolean;
  children?: React.ReactNode;
  index?: number; // For deterministic randomization
}

// Generate deterministic "random" values based on index
function getVariation(index: number, seed: number) {
  const hash = (index * 7919 + seed * 104729) % 1000;
  return hash / 1000;
}

export default function Polaroid({
  src,
  alt,
  caption,
  rotation,
  randomize = true,
  showTape = true,
  tapePosition = 'corners',
  showPushpin = true,
  pushpinColor,
  pushpinPosition,
  className = '',
  imageClassName = '',
  aspectRatio = 'square',
  useTornEdge = true,
  children,
  index = 0,
}: PolaroidProps) {
  // Generate variations based on index for deterministic randomness
  const variations = useMemo(() => {
    if (!randomize) {
      return {
        rotation: rotation || 0,
        offsetY: 0,
        maskIndex: 0,
        pushpinColor: pushpinColor || 'red' as PushpinColor,
        pushpinRotation: 0,
        pushpinPosition: pushpinPosition || 'top-center' as const,
        tapeRotationL: 0,
        tapeRotationR: 0,
      };
    }

    const rotationVar = (getVariation(index, 1) * 5) - 2.5; // -2.5 to +2.5 degrees
    const offsetYVar = (getVariation(index, 2) * 8) - 4; // -4 to +4 px
    const maskIdx = Math.floor(getVariation(index, 3) * TORN_MASKS.length);
    const colors: PushpinColor[] = ['red', 'yellow', 'blue', 'green', 'orange'];
    const pinColorIdx = Math.floor(getVariation(index, 4) * colors.length);
    const pinRotation = (getVariation(index, 5) * 30) - 15; // -15 to +15 degrees
    const positions = ['top-left', 'top-center', 'top-right'] as const;
    const pinPosIdx = Math.floor(getVariation(index, 6) * positions.length);
    const tapeRotL = (getVariation(index, 7) * 10) - 5; // -5 to +5 degrees
    const tapeRotR = (getVariation(index, 8) * 10) - 5;

    return {
      rotation: rotation ?? rotationVar,
      offsetY: offsetYVar,
      maskIndex: maskIdx,
      pushpinColor: pushpinColor || colors[pinColorIdx],
      pushpinRotation: pinRotation,
      pushpinPosition: pushpinPosition || positions[pinPosIdx],
      tapeRotationL: tapeRotL,
      tapeRotationR: tapeRotR,
    };
  }, [index, rotation, randomize, pushpinColor, pushpinPosition]);

  const aspectRatioClass = {
    square: 'aspect-square',
    portrait: 'aspect-[3/4]',
    landscape: 'aspect-[4/3]',
  }[aspectRatio];

  const tornMask = useTornEdge ? TORN_MASKS[variations.maskIndex] : undefined;

  return (
    <div
      className={`relative ${className}`}
      style={{
        transform: `rotate(${variations.rotation}deg) translateY(${variations.offsetY}px)`,
      }}
    >
      {/* Multi-tier shadow for depth */}
      <div
        className="absolute inset-0 rounded-sm"
        style={{
          boxShadow: `
            0 10px 25px rgba(0, 0, 0, 0.15),
            0 4px 10px rgba(0, 0, 0, 0.12),
            0 1px 3px rgba(0, 0, 0, 0.08)
          `,
          transform: 'translateY(2px)',
        }}
      />

      {/* Polaroid frame with optional torn edge mask */}
      <div
        className="relative bg-white p-2 pb-10"
        style={{
          ...(tornMask && {
            WebkitMaskImage: `url(${tornMask})`,
            maskImage: `url(${tornMask})`,
            WebkitMaskSize: 'cover',
            maskSize: 'cover',
            WebkitMaskRepeat: 'no-repeat',
            maskRepeat: 'no-repeat',
          }),
          boxShadow: `
            inset 0 0 0 1px rgba(0, 0, 0, 0.05),
            0 2px 8px rgba(0, 0, 0, 0.1)
          `,
        }}
      >
        {/* Paper grain texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none opacity-[0.04]"
          style={{
            backgroundImage: 'url(/textures/noise.svg)',
            backgroundSize: '150px 150px',
            mixBlendMode: 'multiply',
          }}
        />

        {/* Tape decorations with improved styling */}
        {showTape && tapePosition === 'corners' && (
          <>
            <div
              className="tape tape-tl"
              style={{
                transform: `rotate(${-45 + variations.tapeRotationL}deg)`,
                opacity: 0.35,
                filter: 'blur(0.3px)',
                boxShadow: '1px 2px 4px rgba(0,0,0,0.15)',
              }}
            />
            <div
              className="tape tape-tr"
              style={{
                transform: `rotate(${45 + variations.tapeRotationR}deg)`,
                opacity: 0.35,
                filter: 'blur(0.3px)',
                boxShadow: '1px 2px 4px rgba(0,0,0,0.15)',
              }}
            />
          </>
        )}
        {showTape && tapePosition === 'top' && (
          <div
            className="tape tape-top"
            style={{
              transform: `rotate(${variations.tapeRotationL * 0.5}deg)`,
              opacity: 0.35,
              filter: 'blur(0.3px)',
              boxShadow: '1px 2px 4px rgba(0,0,0,0.15)',
            }}
          />
        )}
        {showTape && tapePosition === 'top-left' && (
          <div
            className="tape tape-tl"
            style={{
              transform: `rotate(${-45 + variations.tapeRotationL}deg)`,
              opacity: 0.35,
              filter: 'blur(0.3px)',
              boxShadow: '1px 2px 4px rgba(0,0,0,0.15)',
            }}
          />
        )}
        {showTape && tapePosition === 'top-right' && (
          <div
            className="tape tape-tr"
            style={{
              transform: `rotate(${45 + variations.tapeRotationR}deg)`,
              opacity: 0.35,
              filter: 'blur(0.3px)',
              boxShadow: '1px 2px 4px rgba(0,0,0,0.15)',
            }}
          />
        )}

        {/* Pushpin */}
        {showPushpin && (
          <Pushpin
            color={variations.pushpinColor}
            position={variations.pushpinPosition}
            rotation={variations.pushpinRotation}
            size="md"
          />
        )}

        {/* Photo area */}
        <div className={`relative overflow-hidden ${aspectRatioClass} ${imageClassName}`}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
          {/* Photo edge aging effect */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              boxShadow: 'inset 0 0 20px rgba(0, 0, 0, 0.1)',
            }}
          />
        </div>

        {/* Optional children (for custom content in the white area) */}
        {children}

        {/* Caption with handwritten style */}
        {caption && (
          <div className="absolute bottom-2 left-0 right-0 text-center">
            <span
              className="font-handwritten text-lg text-[#2A1D14]/80"
              style={{
                transform: `rotate(${variations.rotation * -0.3}deg)`,
                display: 'inline-block',
              }}
            >
              {caption}
            </span>
          </div>
        )}
      </div>
    </div>
  );
}

// Simplified version for community photo collage
export function PhotoPolaroid({
  src,
  alt,
  caption,
  className = '',
  index = 0,
}: {
  src: string;
  alt: string;
  caption: string;
  className?: string;
  index?: number;
}) {
  return (
    <Polaroid
      src={src}
      alt={alt}
      caption={caption}
      className={className}
      index={index}
      showTape={true}
      tapePosition="corners"
      showPushpin={true}
      useTornEdge={true}
      randomize={true}
    />
  );
}

// House card polaroid with specific styling
export function HouseCardPolaroid({
  src,
  alt,
  children,
  className = '',
  index = 0,
}: {
  src: string;
  alt: string;
  children?: React.ReactNode;
  className?: string;
  index?: number;
}) {
  return (
    <Polaroid
      src={src}
      alt={alt}
      className={className}
      index={index}
      aspectRatio="landscape"
      showTape={true}
      tapePosition="corners"
      showPushpin={true}
      useTornEdge={true}
      randomize={true}
    >
      {children}
    </Polaroid>
  );
}
