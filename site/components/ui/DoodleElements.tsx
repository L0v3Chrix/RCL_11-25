'use client';

import React from 'react';

// Ink color for doodles - slightly faded for hand-drawn look
const INK_COLOR = '#2A1D14';

// Common rough stroke props for hand-drawn feel
const ROUGH_STROKE = {
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

// Curved arrow pointing right - rough, wobbly
export function DoodleArrowRight({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`doodle-arrow ${className}`}
      width="80"
      height="40"
      viewBox="0 0 80 40"
      fill="none"
    >
      {/* Main wobbly line */}
      <path
        d="M5 31C8 29 12 27 18 25C26 22 34 19 42 18C52 16.5 62 18 72 14M72 14L65 9M72 14L68 22"
        stroke={INK_COLOR}
        strokeWidth="2.2"
        {...ROUGH_STROKE}
        opacity="0.55"
        strokeDasharray="0"
      />
      {/* Slight double-line effect for roughness */}
      <path
        d="M6 29C12 26 22 21 38 19C54 17 66 19 74 15"
        stroke={INK_COLOR}
        strokeWidth="0.8"
        {...ROUGH_STROKE}
        opacity="0.2"
      />
    </svg>
  );
}

// Curved arrow pointing left - rough
export function DoodleArrowLeft({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`doodle-arrow ${className}`}
      width="80"
      height="40"
      viewBox="0 0 80 40"
      fill="none"
    >
      <path
        d="M75 31C72 29 68 27 62 25C54 22 46 19 38 18C28 16.5 18 18 8 14M8 14L15 9M8 14L12 22"
        stroke={INK_COLOR}
        strokeWidth="2.2"
        {...ROUGH_STROKE}
        opacity="0.55"
      />
      <path
        d="M74 29C68 26 58 21 42 19C26 17 14 19 6 15"
        stroke={INK_COLOR}
        strokeWidth="0.8"
        {...ROUGH_STROKE}
        opacity="0.2"
      />
    </svg>
  );
}

// Curved arrow pointing down - wobbly shaft
export function DoodleArrowDown({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`doodle-arrow ${className}`}
      width="40"
      height="60"
      viewBox="0 0 40 60"
      fill="none"
    >
      <path
        d="M19 5C17 12 15 22 16 32C17.5 42 19 48 20 54M20 54L14 46M20 54L26 46"
        stroke={INK_COLOR}
        strokeWidth="2.2"
        {...ROUGH_STROKE}
        opacity="0.55"
      />
      <path
        d="M21 6C19 14 17 28 18 40C19 48 20 52 20 54"
        stroke={INK_COLOR}
        strokeWidth="0.7"
        {...ROUGH_STROKE}
        opacity="0.2"
      />
    </svg>
  );
}

// Squiggly underline - very wobbly
export function DoodleUnderline({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`doodle-arrow ${className}`}
      width="120"
      height="24"
      viewBox="0 0 120 24"
      fill="none"
    >
      <path
        d="M4 14C10 9 18 17 28 11C38 5 48 19 58 12C68 5 78 18 88 11C98 4 108 14 116 12"
        stroke={INK_COLOR}
        strokeWidth="2.5"
        {...ROUGH_STROKE}
        opacity="0.45"
      />
      <path
        d="M6 13C14 8 22 16 32 10C42 4 52 18 62 11C72 4 82 17 92 10C102 3 112 13 118 11"
        stroke={INK_COLOR}
        strokeWidth="0.8"
        {...ROUGH_STROKE}
        opacity="0.15"
      />
    </svg>
  );
}

// Star/asterisk accent - rough asymmetric
export function DoodleStar({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`doodle-arrow ${className}`}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
    >
      <path
        d="M14 2L14 26M2 14L26 14M5 5L23 23M22 5L5 22"
        stroke={INK_COLOR}
        strokeWidth="1.8"
        {...ROUGH_STROKE}
        opacity="0.45"
        strokeDasharray="2 1"
      />
      {/* Extra wobbly lines for roughness */}
      <path
        d="M13 3L15 25M3 13L25 15M6 6L22 24"
        stroke={INK_COLOR}
        strokeWidth="0.6"
        {...ROUGH_STROKE}
        opacity="0.15"
      />
    </svg>
  );
}

// Bracket/brace left - hand-drawn wobbly
export function DoodleBracketLeft({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`doodle-arrow ${className}`}
      width="30"
      height="100"
      viewBox="0 0 30 100"
      fill="none"
    >
      <path
        d="M26 4C18 8 12 22 11 50C12 78 18 92 26 96"
        stroke={INK_COLOR}
        strokeWidth="2.5"
        {...ROUGH_STROKE}
        opacity="0.45"
        fill="none"
      />
      <path
        d="M24 6C16 12 10 28 10 50C10 72 16 88 24 94"
        stroke={INK_COLOR}
        strokeWidth="0.8"
        {...ROUGH_STROKE}
        opacity="0.15"
        fill="none"
      />
    </svg>
  );
}

// Bracket/brace right - hand-drawn wobbly
export function DoodleBracketRight({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`doodle-arrow ${className}`}
      width="30"
      height="100"
      viewBox="0 0 30 100"
      fill="none"
    >
      <path
        d="M4 4C12 8 18 22 19 50C18 78 12 92 4 96"
        stroke={INK_COLOR}
        strokeWidth="2.5"
        {...ROUGH_STROKE}
        opacity="0.45"
        fill="none"
      />
      <path
        d="M6 6C14 12 20 28 20 50C20 72 14 88 6 94"
        stroke={INK_COLOR}
        strokeWidth="0.8"
        {...ROUGH_STROKE}
        opacity="0.15"
        fill="none"
      />
    </svg>
  );
}

// Scribble circle - imperfect, not closed
export function DoodleCircle({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`doodle-arrow ${className}`}
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
    >
      <path
        d="M25 4C36 3 46 12 47 24C48 36 38 46 26 47C14 48 4 38 3 26C2 14 12 4 24 3C28 3 32 5 36 9"
        stroke={INK_COLOR}
        strokeWidth="2"
        {...ROUGH_STROKE}
        opacity="0.4"
        fill="none"
      />
      <path
        d="M26 6C34 5 44 14 45 25C46 36 36 44 25 45C14 46 6 36 5 25C4 16 10 7 22 5"
        stroke={INK_COLOR}
        strokeWidth="0.7"
        {...ROUGH_STROKE}
        opacity="0.15"
        fill="none"
      />
    </svg>
  );
}

// Heart doodle - slightly asymmetric for hand-drawn feel
export function DoodleHeart({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`doodle-arrow ${className}`}
      width="32"
      height="30"
      viewBox="0 0 32 30"
      fill="none"
    >
      <path
        d="M16 27C16 27 3 18 3 9C3 4 6 2 10 2C13 2 15 4 16 6C17 4 19 2 22 2C26 2 29 4 29 9C29 18 16 27 16 27Z"
        stroke={INK_COLOR}
        strokeWidth="2"
        {...ROUGH_STROKE}
        opacity="0.45"
        fill="none"
      />
      <path
        d="M16 25C16 25 5 17 5 10C5 6 7 3 11 3C13.5 3 15 5 16 7C17 5 18.5 3 21 3C25 3 27 6 27 10C27 17 16 25 16 25Z"
        stroke={INK_COLOR}
        strokeWidth="0.6"
        {...ROUGH_STROKE}
        opacity="0.15"
        fill="none"
      />
    </svg>
  );
}

// Decorative dots cluster - irregular sizes and positions
export function DoodleDots({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`doodle-arrow ${className}`}
      width="45"
      height="45"
      viewBox="0 0 45 45"
      fill="none"
    >
      <circle cx="11" cy="9" r="2.5" fill={INK_COLOR} opacity="0.35" />
      <circle cx="27" cy="7" r="1.8" fill={INK_COLOR} opacity="0.28" />
      <circle cx="19" cy="21" r="3" fill={INK_COLOR} opacity="0.4" />
      <circle cx="35" cy="16" r="1.5" fill={INK_COLOR} opacity="0.25" />
      <circle cx="7" cy="30" r="2.2" fill={INK_COLOR} opacity="0.32" />
      <circle cx="30" cy="35" r="2.5" fill={INK_COLOR} opacity="0.35" />
      <circle cx="40" cy="28" r="1.2" fill={INK_COLOR} opacity="0.22" />
      <circle cx="15" cy="38" r="1.8" fill={INK_COLOR} opacity="0.28" />
    </svg>
  );
}

// Scribble/Squiggle decoration
export function DoodleScribble({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`doodle-arrow ${className}`}
      width="60"
      height="30"
      viewBox="0 0 60 30"
      fill="none"
    >
      <path
        d="M5 20C10 10 15 25 20 15C25 5 30 22 35 12C40 2 45 18 50 10C55 2 58 15 58 15"
        stroke={INK_COLOR}
        strokeWidth="2"
        {...ROUGH_STROKE}
        opacity="0.4"
        fill="none"
      />
    </svg>
  );
}

// X mark / cross out
export function DoodleX({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`doodle-arrow ${className}`}
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M4 4L20 20M20 4L4 20"
        stroke={INK_COLOR}
        strokeWidth="2.5"
        {...ROUGH_STROKE}
        opacity="0.45"
      />
      <path
        d="M5 5L19 19M19 5L5 19"
        stroke={INK_COLOR}
        strokeWidth="0.8"
        {...ROUGH_STROKE}
        opacity="0.15"
      />
    </svg>
  );
}

// Checkmark
export function DoodleCheck({ className = '' }: { className?: string }) {
  return (
    <svg
      className={`doodle-arrow ${className}`}
      width="28"
      height="24"
      viewBox="0 0 28 24"
      fill="none"
    >
      <path
        d="M3 12L10 20L25 4"
        stroke={INK_COLOR}
        strokeWidth="2.5"
        {...ROUGH_STROKE}
        opacity="0.5"
      />
      <path
        d="M4 13L11 19L24 5"
        stroke={INK_COLOR}
        strokeWidth="0.8"
        {...ROUGH_STROKE}
        opacity="0.15"
      />
    </svg>
  );
}
