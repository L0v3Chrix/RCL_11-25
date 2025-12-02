'use client';

import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
}

export default function Logo({ className = '', variant = 'full' }: LogoProps) {
  const [imageError, setImageError] = useState(false);

  // Try to load the image first, fall back to SVG if it fails
  if (!imageError) {
    return (
      <img
        src="/images/brand/rcl-logo-new.png"
        alt="Recovery Centered Living"
        className={className}
        onError={() => setImageError(true)}
      />
    );
  }

  // SVG Fallback - Rainbow Spectrum Logo
  if (variant === 'icon') {
    return (
      <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="rainbow-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="20%" stopColor="#f97316" />
            <stop offset="40%" stopColor="#fbbf24" />
            <stop offset="60%" stopColor="#22c55e" />
            <stop offset="80%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" stroke="url(#rainbow-gradient)" strokeWidth="8" fill="none" />
        <circle cx="50" cy="50" r="25" fill="url(#rainbow-gradient)" opacity="0.2" />
        <path
          d="M35 45 L50 30 L65 45 L50 60 Z"
          fill="white"
          stroke="url(#rainbow-gradient)"
          strokeWidth="2"
        />
      </svg>
    );
  }

  // Full logo with text
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        className="h-12 w-12"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="rainbow-full" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="20%" stopColor="#f97316" />
            <stop offset="40%" stopColor="#fbbf24" />
            <stop offset="60%" stopColor="#22c55e" />
            <stop offset="80%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        <circle cx="50" cy="50" r="45" stroke="url(#rainbow-full)" strokeWidth="8" fill="none" />
        <circle cx="50" cy="50" r="25" fill="url(#rainbow-full)" opacity="0.2" />
        <path
          d="M35 45 L50 30 L65 45 L50 60 Z"
          fill="white"
          stroke="url(#rainbow-full)"
          strokeWidth="2"
        />
      </svg>
      <div className="flex flex-col leading-tight">
        <span className="font-heading font-bold text-xl">Recovery Centered</span>
        <span className="font-heading font-bold text-xl">Living</span>
      </div>
    </div>
  );
}
