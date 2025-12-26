'use client';

import React from 'react';

export interface RCLIconProps {
    name: string;
    size?: number;
    className?: string;
    title?: string;
    strokeColor?: string;
    fillColor?: string;
}

// Custom RCL icons with teal outline (#2F6F71) and warm tan fill (#D4A373)
const DEFAULT_STROKE = '#2F6F71';
const DEFAULT_FILL = '#D4A373';

const icons: Record<string, (size: number, stroke: string, fill: string) => React.ReactNode> = {
    // Recovery pathway icons
    'twelve-step': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="20" fill={fill} fillOpacity="0.3" stroke={stroke} strokeWidth="2" />
            <path d="M24 12V24L32 32" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <text x="24" y="20" textAnchor="middle" fill={stroke} fontSize="10" fontWeight="bold">12</text>
        </svg>
    ),
    'smart-recovery': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="20" fill={fill} fillOpacity="0.3" stroke={stroke} strokeWidth="2" />
            <path d="M16 24L22 30L32 18" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    'dharma': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="20" fill={fill} fillOpacity="0.3" stroke={stroke} strokeWidth="2" />
            <path d="M24 16C20 20 20 28 24 32C28 28 28 20 24 16Z" fill={fill} stroke={stroke} strokeWidth="1.5" />
            <circle cx="24" cy="24" r="4" fill={stroke} />
        </svg>
    ),
    'mat': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="20" fill={fill} fillOpacity="0.3" stroke={stroke} strokeWidth="2" />
            <path d="M24 14V28M18 20H30M24 28C22 30 20 32 20 34M24 28C26 30 28 32 28 34" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    'holistic': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="20" fill={fill} fillOpacity="0.3" stroke={stroke} strokeWidth="2" />
            <path d="M24 14L28 22L36 24L28 26L24 34L20 26L12 24L20 22L24 14Z" fill={fill} stroke={stroke} strokeWidth="1.5" />
        </svg>
    ),
    'unique-path': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="20" fill={fill} fillOpacity="0.3" stroke={stroke} strokeWidth="2" />
            <path d="M14 30C18 26 22 30 24 24C26 18 30 22 34 18" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    // General icons
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    'spectrum': (size, stroke, _fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="20" width="32" height="8" rx="4" fill="url(#rainbow)" stroke={stroke} strokeWidth="1.5" />
            <defs>
                <linearGradient id="rainbow" x1="8" y1="24" x2="40" y2="24">
                    <stop offset="0%" stopColor="#ef4444" />
                    <stop offset="20%" stopColor="#f97316" />
                    <stop offset="40%" stopColor="#eab308" />
                    <stop offset="60%" stopColor="#22c55e" />
                    <stop offset="80%" stopColor="#3b82f6" />
                    <stop offset="100%" stopColor="#a855f7" />
                </linearGradient>
            </defs>
        </svg>
    ),
    'heart': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 40C24 40 8 28 8 18C8 12 12 8 18 8C21 8 23 10 24 12C25 10 27 8 30 8C36 8 40 12 40 18C40 28 24 40 24 40Z" fill={fill} fillOpacity="0.4" stroke={stroke} strokeWidth="2" />
        </svg>
    ),
    'handshake': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 28L16 20L24 24L32 16L40 24" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 20L12 28L20 32L28 28L36 32L40 24" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="16" cy="20" r="3" fill={fill} stroke={stroke} strokeWidth="1.5" />
            <circle cx="32" cy="16" r="3" fill={fill} stroke={stroke} strokeWidth="1.5" />
        </svg>
    ),
    'growth': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 40V24" stroke={stroke} strokeWidth="2" />
            <path d="M24 24C24 24 20 20 20 16C20 12 24 10 24 10C24 10 28 12 28 16C28 20 24 24 24 24Z" fill={fill} fillOpacity="0.4" stroke={stroke} strokeWidth="2" />
            <path d="M24 28C24 28 18 26 16 22" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <path d="M24 28C24 28 30 26 32 22" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    'house': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 24L24 10L40 24V40H8V24Z" fill={fill} fillOpacity="0.3" stroke={stroke} strokeWidth="2" />
            <rect x="20" y="28" width="8" height="12" fill={fill} stroke={stroke} strokeWidth="1.5" />
        </svg>
    ),
    'clipboard': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="8" width="28" height="34" rx="2" fill={fill} fillOpacity="0.3" stroke={stroke} strokeWidth="2" />
            <rect x="18" y="4" width="12" height="8" rx="2" fill={fill} stroke={stroke} strokeWidth="1.5" />
            <path d="M16 20H32M16 28H28M16 36H24" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    'chat': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8 12H40V32H20L12 40V32H8V12Z" fill={fill} fillOpacity="0.3" stroke={stroke} strokeWidth="2" />
            <circle cx="16" cy="22" r="2" fill={stroke} />
            <circle cx="24" cy="22" r="2" fill={stroke} />
            <circle cx="32" cy="22" r="2" fill={stroke} />
        </svg>
    ),
    'group': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="16" r="6" fill={fill} fillOpacity="0.4" stroke={stroke} strokeWidth="2" />
            <circle cx="12" cy="20" r="5" fill={fill} fillOpacity="0.4" stroke={stroke} strokeWidth="2" />
            <circle cx="36" cy="20" r="5" fill={fill} fillOpacity="0.4" stroke={stroke} strokeWidth="2" />
            <path d="M24 24C30 24 34 28 34 34H14C14 28 18 24 24 24Z" fill={fill} fillOpacity="0.3" stroke={stroke} strokeWidth="2" />
        </svg>
    ),
    'shield': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 6L40 12V24C40 34 24 42 24 42C24 42 8 34 8 24V12L24 6Z" fill={fill} fillOpacity="0.3" stroke={stroke} strokeWidth="2" />
            <path d="M18 24L22 28L30 20" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    'meditation': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="14" r="6" fill={fill} fillOpacity="0.4" stroke={stroke} strokeWidth="2" />
            <path d="M12 40C12 40 14 30 24 30C34 30 36 40 36 40" stroke={stroke} strokeWidth="2" />
            <path d="M16 34L24 30L32 34" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
        </svg>
    ),
    'phone': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14 8C10 8 8 10 8 14C8 28 20 40 34 40C38 40 40 38 40 34L36 28L30 30C26 28 20 22 18 18L20 12L14 8Z" fill={fill} fillOpacity="0.3" stroke={stroke} strokeWidth="2" />
        </svg>
    ),
    'email': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="12" width="36" height="24" rx="2" fill={fill} fillOpacity="0.3" stroke={stroke} strokeWidth="2" />
            <path d="M6 14L24 26L42 14" stroke={stroke} strokeWidth="2" />
        </svg>
    ),
    'location': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 44C24 44 38 30 38 20C38 12 32 6 24 6C16 6 10 12 10 20C10 30 24 44 24 44Z" fill={fill} fillOpacity="0.3" stroke={stroke} strokeWidth="2" />
            <circle cx="24" cy="20" r="6" fill={fill} stroke={stroke} strokeWidth="1.5" />
        </svg>
    ),
    'bed': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="6" y="28" width="36" height="8" fill={fill} fillOpacity="0.3" stroke={stroke} strokeWidth="2" />
            <path d="M10 28V16H38V28" stroke={stroke} strokeWidth="2" />
            <circle cx="16" cy="22" r="4" fill={fill} stroke={stroke} strokeWidth="1.5" />
            <path d="M6 36V40M42 36V40" stroke={stroke} strokeWidth="2" />
        </svg>
    ),
    'info': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="18" fill={fill} fillOpacity="0.3" stroke={stroke} strokeWidth="2" />
            <circle cx="24" cy="16" r="2" fill={stroke} />
            <path d="M24 22V34" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        </svg>
    ),
    'question': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="18" fill={fill} fillOpacity="0.3" stroke={stroke} strokeWidth="2" />
            <path d="M18 18C18 14 20 12 24 12C28 12 30 14 30 18C30 22 26 22 26 26" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" />
            <circle cx="26" cy="32" r="2" fill={stroke} />
        </svg>
    ),
    'check': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="18" fill={fill} fillOpacity="0.3" stroke={stroke} strokeWidth="2" />
            <path d="M16 24L22 30L32 18" stroke={stroke} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    'key': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="32" r="10" fill={fill} fillOpacity="0.3" stroke={stroke} strokeWidth="2" />
            <circle cx="16" cy="32" r="4" fill={stroke} />
            <path d="M24 24L40 8M36 8H40V12M34 14L38 10" stroke={stroke} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    'calendar': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="8" y="12" width="32" height="28" rx="2" fill={fill} fillOpacity="0.3" stroke={stroke} strokeWidth="2" />
            <path d="M8 20H40" stroke={stroke} strokeWidth="2" />
            <path d="M16 8V12M32 8V12" stroke={stroke} strokeWidth="2" strokeLinecap="round" />
            <rect x="14" y="26" width="6" height="6" fill={fill} stroke={stroke} strokeWidth="1" />
        </svg>
    ),
    'clock': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="24" r="18" fill={fill} fillOpacity="0.3" stroke={stroke} strokeWidth="2" />
            <path d="M24 14V24L30 28" stroke={stroke} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    'user': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="24" cy="16" r="8" fill={fill} fillOpacity="0.4" stroke={stroke} strokeWidth="2" />
            <path d="M8 40C8 32 15 26 24 26C33 26 40 32 40 40" stroke={stroke} strokeWidth="2" />
        </svg>
    ),
    'search': (size, stroke, fill) => (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="22" cy="22" r="12" fill={fill} fillOpacity="0.3" stroke={stroke} strokeWidth="2" />
            <path d="M32 32L40 40" stroke={stroke} strokeWidth="3" strokeLinecap="round" />
        </svg>
    ),
};

export default function RCLIcon({
    name,
    size = 24,
    className = '',
    title,
    strokeColor = DEFAULT_STROKE,
    fillColor = DEFAULT_FILL
}: RCLIconProps) {
    const iconRenderer = icons[name];

    if (!iconRenderer) {
        // Fallback: render a placeholder circle with the icon name
        console.warn(`RCLIcon: Unknown icon "${name}"`);
        return (
            <div
                className={`inline-flex items-center justify-center rounded-full bg-stone-200 border-2 border-stone-400 ${className}`}
                style={{ width: size, height: size }}
                title={title || name}
            >
                <span className="text-stone-500 text-xs font-bold">?</span>
            </div>
        );
    }

    return (
        <span className={`inline-flex items-center justify-center ${className}`} title={title}>
            {iconRenderer(size, strokeColor, fillColor)}
        </span>
    );
}

// Export available icon names for reference
export const availableIcons = Object.keys(icons);
