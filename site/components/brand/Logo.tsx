'use client';

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'icon';
  textColor?: 'light' | 'dark' | 'auto';
}

export default function Logo({ className = '', variant = 'full', textColor = 'dark' }: LogoProps) {
  // Determine text color class
  const getTextColorClass = () => {
    switch (textColor) {
      case 'light':
        return 'text-white';
      case 'dark':
        return 'text-slate-800';
      default:
        return 'text-slate-800';
    }
  };

  // Icon only version
  if (variant === 'icon') {
    return (
      <svg
        className={className}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Recovery Centered Living"
      >
        <defs>
          <linearGradient id="rainbow-gradient-icon" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="20%" stopColor="#f97316" />
            <stop offset="40%" stopColor="#fbbf24" />
            <stop offset="60%" stopColor="#22c55e" />
            <stop offset="80%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        {/* Outer rainbow ring */}
        <circle cx="50" cy="50" r="45" stroke="url(#rainbow-gradient-icon)" strokeWidth="8" fill="none" />
        {/* Inner glow */}
        <circle cx="50" cy="50" r="30" fill="url(#rainbow-gradient-icon)" opacity="0.15" />
        {/* House/Home symbol */}
        <path
          d="M50 25 L75 45 L75 70 L25 70 L25 45 Z"
          fill="white"
          stroke="url(#rainbow-gradient-icon)"
          strokeWidth="3"
        />
        {/* Door */}
        <rect x="42" y="52" width="16" height="18" fill="url(#rainbow-gradient-icon)" opacity="0.3" rx="2" />
        {/* Heart in center */}
        <path
          d="M50 45 C50 42 47 40 44 42 C41 44 41 48 50 54 C59 48 59 44 56 42 C53 40 50 42 50 45 Z"
          fill="url(#rainbow-gradient-icon)"
        />
      </svg>
    );
  }

  // Full logo with text
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg
        className="h-12 w-12 flex-shrink-0"
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="rainbow-gradient-full" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ef4444" />
            <stop offset="20%" stopColor="#f97316" />
            <stop offset="40%" stopColor="#fbbf24" />
            <stop offset="60%" stopColor="#22c55e" />
            <stop offset="80%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#a855f7" />
          </linearGradient>
        </defs>
        {/* Outer rainbow ring */}
        <circle cx="50" cy="50" r="45" stroke="url(#rainbow-gradient-full)" strokeWidth="8" fill="none" />
        {/* Inner glow */}
        <circle cx="50" cy="50" r="30" fill="url(#rainbow-gradient-full)" opacity="0.15" />
        {/* House/Home symbol */}
        <path
          d="M50 25 L75 45 L75 70 L25 70 L25 45 Z"
          fill="white"
          stroke="url(#rainbow-gradient-full)"
          strokeWidth="3"
        />
        {/* Door */}
        <rect x="42" y="52" width="16" height="18" fill="url(#rainbow-gradient-full)" opacity="0.3" rx="2" />
        {/* Heart in center */}
        <path
          d="M50 45 C50 42 47 40 44 42 C41 44 41 48 50 54 C59 48 59 44 56 42 C53 40 50 42 50 45 Z"
          fill="url(#rainbow-gradient-full)"
        />
      </svg>
      <div className={`flex flex-col leading-tight ${getTextColorClass()}`}>
        <span className="font-heading font-bold text-lg md:text-xl whitespace-nowrap">Recovery Centered</span>
        <span className="font-heading font-bold text-lg md:text-xl">Living</span>
      </div>
    </div>
  );
}
