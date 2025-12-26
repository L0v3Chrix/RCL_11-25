'use client';

import React from 'react';

/**
 * 3D Pushpin / Thumbtack component
 */
export const Pushpin = ({ className = '', color = '#E76F51' }: { className?: string; color?: string }) => {
    const id = React.useId().replace(/:/g, '');
    return (
        <div className={`relative ${className}`} style={{ width: '24px', height: '24px' }}>
            {/* Shadow */}
            <div className="absolute top-1 left-1 w-full h-full bg-black/30 rounded-full blur-[2px]" />
            <svg viewBox="0 0 24 24" className="w-full h-full relative z-10 filter drop-shadow-md">
                <defs>
                    <radialGradient id={`pinGradient-${id}`} cx="40%" cy="40%" r="60%">
                        <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="transparent" />
                    </radialGradient>
                </defs>
                {/* Pin Head */}
                <circle cx="12" cy="12" r="8" fill={color} />
                <circle cx="12" cy="12" r="8" fill={`url(#pinGradient-${id})`} />
                {/* Refraction/Highlight */}
                <ellipse cx="10" cy="10" rx="3" ry="2" fill="white" fillOpacity="0.5" />
            </svg>
        </div>
    );
};

/**
 * Semi-transparent masking tape component with multiple texture variants
 */
export const Tape = ({
    className = '',
    rotation = -5,
    variant = 0
}: {
    className?: string;
    rotation?: number;
    variant?: number;
}) => {
    // 4-6 different "torn" edge styles for tape
    const tapePaths = [
        "M0,5 Q5,0 10,5 T20,5 T30,5 T40,5 T50,5 T60,5 T70,5 T80,5 T90,5 T100,5 L100,35 Q95,40 90,35 T80,35 T70,35 T60,35 T50,35 T40,35 T30,35 T20,35 T10,35 T0,35 Z",
        "M0,2 L10,0 L20,3 L30,1 L40,4 L50,1 L60,3 L70,0 L80,3 L90,1 L100,4 L100,38 L90,36 L80,39 L70,37 L60,40 L50,37 L40,39 L30,36 L20,38 L10,35 L0,37 Z",
        "M2,5 C10,0 20,10 30,5 C40,0 50,10 60,5 C70,0 80,10 90,5 L95,35 C85,40 75,30 65,35 C55,40 45,30 35,35 C25,40 15,30 5,35 Z",
        "M0,8 L100,0 L100,32 L0,40 Z", // Angular cut
    ];

    const colors = ['#f1eec9', '#ede9b8', '#f5f2d5', '#ece8b0'];
    const path = tapePaths[variant % tapePaths.length];
    const bgColor = colors[variant % colors.length];

    return (
        <div
            className={`absolute z-20 pointer-events-none opacity-60 mix-blend-multiply ${className}`}
            style={{
                transform: `rotate(${rotation}deg)`,
                width: '70px',
                height: '28px',
                backgroundColor: bgColor,
                boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
                clipPath: `path('${path}')`,
                WebkitClipPath: `path('${path}')`,
                backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 100 40\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.8\' numOctaves=\'3\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\' opacity=\'0.2\'/%3E%3C/svg%3E")',
                backgroundSize: 'cover'
            }}
        />
    );
};

/**
 * Hand-drawn Doodle Arrow
 */
export const DoodleArrow = ({ className = '', rotation = 0 }: { className?: string; rotation?: number }) => (
    <svg
        viewBox="0 0 100 40"
        className={`w-24 h-10 ${className}`}
        style={{ transform: `rotate(${rotation}deg)` }}
        fill="none"
        stroke="#C7773B"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M5,20 Q30,5 60,15 T95,10" />
        <path d="M85,5 L95,10 L88,18" />
    </svg>
);

/**
 * Hand-drawn Doodle Bracket
 */
export const DoodleBracket = ({ className = '' }: { className?: string }) => (
    <svg
        viewBox="0 0 40 40"
        className={`w-10 h-10 ${className}`}
        fill="none"
        stroke="#C7773B"
        strokeWidth="2"
        strokeLinecap="round"
    >
        <path d="M10,5 L5,5 L5,35 L10,35" />
        <path d="M30,5 L35,5 L35,35 L30,35" />
    </svg>
);

/**
 * Hand-drawn Doodle Underline
 */
export const DoodleUnderline = ({ className = '' }: { className?: string }) => (
    <svg
        viewBox="0 0 200 20"
        className={`w-full h-4 ${className}`}
        fill="none"
        stroke="#C7773B"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M5,10 Q50,5 100,12 T195,8" />
        <path d="M15,15 Q60,10 110,17 T185,12" opacity="0.4" />
    </svg>
);

/**
 * Corkboard Texture Background Container
 */
export const Corkboard = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => (
    <section className={`relative py-20 overflow-hidden ${className}`}>
        {/* Real Corkboard CSS-driven Base */}
        <div
            className="absolute inset-0 z-0 bg-[#B98A53]"
            style={{
                backgroundImage: `
          radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0),
          url("data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")
        `,
                backgroundSize: '100px 100px, auto',
                opacity: 0.9
            }}
        />
        {/* Darkening subtle vignette */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-black/5 via-transparent to-black/10 pointer-events-none" />
        <div className="container relative z-10">
            {children}
        </div>
    </section>
);

/**
 * Colorful sticky note component for affirmations/notes
 */
export const PostItNote = ({
    children,
    className = '',
    color = '#fff68f',
    rotation = -2
}: {
    children: React.ReactNode;
    className?: string;
    color?: string;
    rotation?: number;
}) => (
    <div
        className={`p-6 shadow-lg relative ${className}`}
        style={{
            backgroundColor: color,
            transform: `rotate(${rotation}deg)`,
            width: '200px',
            minHeight: '200px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center'
        }}
    >
        {/* Post-it shadow fold effect */}
        <div className="absolute bottom-0 right-0 w-8 h-8 bg-black/5" style={{ clipPath: 'polygon(100% 0, 0 100%, 100% 100%)' }} />
        <div className="font-handwritten text-2xl text-stone-800 leading-tight">
            {children}
        </div>
    </div>
);

/**
 * Paper Surface with Transition Edges
 */
export const PaperSurface = ({
    children,
    className = '',
    isTorn = false,
    isWavy = false,
    rotation = 0,
    shadowSize = 'lg'
}: {
    children: React.ReactNode;
    className?: string;
    isTorn?: boolean;
    isWavy?: boolean;
    rotation?: number;
    shadowSize?: 'sm' | 'md' | 'lg' | 'xl' | 'none';
}) => {
    const shadowClasses = {
        sm: 'shadow-sm',
        md: 'shadow-md',
        lg: 'shadow-xl',
        xl: 'shadow-2xl',
        none: ''
    };

    const maskStyle = isTorn
        ? {
            maskImage: 'url("/masks/torn-edge.svg")',
            WebkitMaskImage: 'url("/masks/torn-edge.svg")',
            maskSize: '100% 100%',
            WebkitMaskSize: '100% 100%'
        }
        : isWavy
            ? {
                maskImage: 'linear-gradient(black, black), url("/masks/wave-edge.svg")',
                WebkitMaskImage: 'linear-gradient(black, black), url("/masks/wave-edge.svg")',
                maskPosition: 'top, bottom',
                WebkitMaskPosition: 'top, bottom',
                maskSize: '100% calc(100% - 49px), 100% 50px',
                WebkitMaskSize: '100% calc(100% - 49px), 100% 50px',
                maskRepeat: 'no-repeat',
                WebkitMaskRepeat: 'no-repeat',
                maskComposite: 'exclude', // Just in case, though standard stacking usually adds. Actually standard is add. 
                // We want to ensure union. Default composite is add.
            }
            : {};

    return (
        <div
            className={`relative bg-paper ${shadowClasses[shadowSize]} ${className}`}
            style={{
                transform: `rotate(${rotation}deg)`,
                ...maskStyle
            }}
        >
            {/* Subtle paper grain */}
            <div className="absolute inset-0 opacity-[0.05] bg-[url('/textures/paper-grain.svg')] pointer-events-none" />
            <div className="relative z-10">
                {children}
            </div>
        </div>
    );
};

/**
 * Randomized Scrapbook Variant Picker
 */
export const getScrapbookVariant = (index: number) => {
    const rotations = [0.8, -1.2, 1.5, -0.6, 1.8, -1.5, 0.7, -0.9, 1.2, -1.8];
    const masks = [
        null,
        '/masks/torn-1.svg',
        null,
        null,
        '/masks/torn-2.svg',
        null,
        null,
        '/masks/torn-3.svg',
        null,
        '/masks/torn-4.svg',
        null,
        '/masks/torn-5.svg'
    ];
    const pinColors = ['#E76F51', '#2F6F71', '#D4A373', '#7FB069', '#E9C46A'];

    // 3-4 different pushpin positions
    const pinPositions = [
        '-top-3 left-1/2 -translate-x-1/2', // Center
        '-top-4 left-1/4 -translate-x-1/2', // Leftish
        '-top-3 left-3/4 -translate-x-1/2', // Rightish
        'top-0 -left-2 rotate-[-15deg]',     // Corner
    ];

    // Tape placements
    const tapePlacements = [
        '-top-4 -right-8 rotate-[15deg]',
        '-top-5 -left-6 rotate-[-25deg]',
        'bottom-10 -right-8 rotate-[5deg]',
        '-top-2 left-1/2 -translate-x-1/2 rotate-[2deg]',
    ];

    return {
        rotation: rotations[index % rotations.length],
        mask: masks[index % masks.length],
        pinColor: pinColors[index % pinColors.length],
        pinPosition: pinPositions[index % pinPositions.length],
        tapePlacement: tapePlacements[index % tapePlacements.length],
        tapeVariant: index % 4,
        tapeRotation: rotations[(index + 2) % rotations.length] * 10
    };
};

/**
 * Polaroid Hybrid Card Component for Houses and Community
 */
export const PolaroidHybridCard = ({
    children,
    rotation = 0,
    className = '',
    hasPin = true,
    hasTape = true,
    pinColor = '#E76F51',
    pinPosition = '-top-3 left-1/2 -translate-x-1/2',
    tapePlacement = '-top-3 -right-6',
    tapePlacement2 = '-bottom-3 -left-6',
    tapeVariant = 0,
    tapeVariant2 = 1,
    customMask = null,
    isSquare = true,
    padding = 'p-3 pb-4'
}: {
    children: React.ReactNode;
    rotation?: number;
    className?: string;
    hasPin?: boolean;
    hasTape?: boolean;
    pinColor?: string;
    pinPosition?: string;
    tapePlacement?: string;
    tapePlacement2?: string;
    tapeVariant?: number;
    tapeVariant2?: number;
    customMask?: string | null;
    isSquare?: boolean;
    padding?: string;
}) => (
    <div
        className={`relative group transition-transform duration-300 hover:scale-[1.02] ${className}`}
        style={{ transform: `rotate(${rotation}deg)` }}
    >
        {/* Shadow layer */}
        <div className="absolute inset-2 bg-black/15 blur-md rounded-sm -z-10" />

        {/* Polaroid Frame */}
        <div
            className={`bg-white shadow-sm border border-stone-200/50 ${padding}`}
            style={{
                ...(customMask && {
                    maskImage: `url("${customMask}")`,
                    WebkitMaskImage: `url("${customMask}")`,
                    maskSize: '100% 100%',
                    WebkitMaskSize: '100% 100%'
                })
            }}
        >
            <div className={`relative overflow-hidden bg-stone-50 ${isSquare ? 'aspect-square' : ''}`}>
                {children}
            </div>
        </div>

        {/* Tape corners */}
        {hasTape && (
            <>
                <Tape className={tapePlacement} rotation={15} variant={tapeVariant} />
                <Tape className={tapePlacement2} rotation={-45} variant={tapeVariant2} />
            </>
        )}

        {/* Pushpin */}
        {hasPin && (
            <Pushpin className={`absolute z-30 ${pinPosition}`} color={pinColor} />
        )}
    </div>
);
