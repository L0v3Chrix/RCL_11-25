import React from 'react';

type IconProps = {
    className?: string;
    size?: number | string;
    fillColor?: string;
    strokeColor?: string;
};

const DEFAULT_SIZE = 24;
const DEFAULT_STROKE = '#000000';
const DEFAULT_FILL = '#D4A373'; // Earth tone / Corkboard beige-orange
const STROKE_WIDTH = 2.5; // Thick outline
const STROKE_LINECAP = 'round';
const STROKE_LINEJOIN = 'round';

// Shared SVG wrapper
const IconWrapper = ({
    children,
    size = DEFAULT_SIZE,
    className = '',
    viewBox = "0 0 24 24"
}: IconProps & { children: React.ReactNode, viewBox?: string }) => (
    <svg
        width={size}
        height={size}
        viewBox={viewBox}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        style={{ overflow: 'visible' }} // Allow "messy" strokes to go slightly out
    >
        {children}
    </svg>
);

// --- AMENITIES ---

export const IconBed = ({ className, size, fillColor = DEFAULT_FILL, strokeColor = DEFAULT_STROKE }: IconProps) => (
    <IconWrapper className={className} size={size}>
        {/* Bed Frame */}
        <path
            d="M2 8L2 18"
            stroke={strokeColor}
            strokeWidth={STROKE_WIDTH}
            strokeLinecap={STROKE_LINECAP}
        />
        <path
            d="M22 12L22 18"
            stroke={strokeColor}
            strokeWidth={STROKE_WIDTH}
            strokeLinecap={STROKE_LINECAP}
        />
        <path
            d="M2 14H22"
            stroke={strokeColor}
            strokeWidth={STROKE_WIDTH}
            strokeLinecap={STROKE_LINECAP}
        />
        {/* Mattress/Blanket */}
        <path
            d="M2 14L2 10C2 8.89543 2.89543 8 4 8H10C11.1046 8 12 8.89543 12 10V14"
            stroke={strokeColor}
            strokeWidth={STROKE_WIDTH}
            fill="#F5EBE0" // Lighter sheet
        />
        <path
            d="M12 14V11C12 9.34315 13.3431 8 15 8H22V14"
            stroke={strokeColor}
            strokeWidth={STROKE_WIDTH}
            fill={fillColor}
        />
    </IconWrapper>
);

export const IconBath = ({ className, size, fillColor = DEFAULT_FILL, strokeColor = DEFAULT_STROKE }: IconProps) => (
    <IconWrapper className={className} size={size}>
        {/* Tub */}
        <path
            d="M4 12V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V12H4Z"
            stroke={strokeColor}
            strokeWidth={STROKE_WIDTH}
            fill={fillColor}
        />
        {/* Legs */}
        <path d="M6 22V24" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
        <path d="M18 22V24" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
        {/* Shower Head / Water */}
        <path d="M14 6V4C14 2.89543 13.1046 2 12 2H10" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
        <path d="M4 12H20" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
    </IconWrapper>
);

export const IconCar = ({ className, size, fillColor = DEFAULT_FILL, strokeColor = DEFAULT_STROKE }: IconProps) => (
    <IconWrapper className={className} size={size}>
        {/* Car Body */}
        <path
            d="M5 10L3 18H21L19 10H5Z"
            stroke={strokeColor}
            strokeWidth={STROKE_WIDTH}
            strokeLinejoin={STROKE_LINEJOIN}
            fill={fillColor}
        />
        {/* Wheels */}
        <circle cx="6" cy="18" r="2" stroke={strokeColor} strokeWidth={STROKE_WIDTH} fill="#333" />
        <circle cx="18" cy="18" r="2" stroke={strokeColor} strokeWidth={STROKE_WIDTH} fill="#333" />
        {/* Top */}
        <path d="M7 10L9 5H15L17 10" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
    </IconWrapper>
);

export const IconWifi = ({ className, size, strokeColor = DEFAULT_STROKE }: IconProps) => (
    <IconWrapper className={className} size={size}>
        <path d="M5 12.55C8.6 9.5 15.4 9.5 19 12.55" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
        <path d="M8.5 15.5C10.5 14 13.5 14 15.5 15.5" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
        <path d="M2 9C7 5 17 5 22 9" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
        <circle cx="12" cy="19" r="1.5" fill={strokeColor} />
    </IconWrapper>
);

export const IconGym = ({ className, size, fillColor = DEFAULT_FILL, strokeColor = DEFAULT_STROKE }: IconProps) => (
    <IconWrapper className={className} size={size}>
        {/* Dumbbell */}
        <path d="M6 8H18" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
        <path d="M6 16H18" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
        <rect x="2" y="6" width="4" height="12" rx="1" stroke={strokeColor} strokeWidth={STROKE_WIDTH} fill={fillColor} />
        <rect x="18" y="6" width="4" height="12" rx="1" stroke={strokeColor} strokeWidth={STROKE_WIDTH} fill={fillColor} />
        <path d="M10 12H14" stroke={strokeColor} strokeWidth={STROKE_WIDTH} />
    </IconWrapper>
);

// --- UI / NAVIGATION ---

export const IconMenu = ({ className, size, strokeColor = DEFAULT_STROKE }: IconProps) => (
    <IconWrapper className={className} size={size}>
        <path d="M4 6H20" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
        <path d="M4 12H20" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
        <path d="M4 18H20" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
    </IconWrapper>
);

export const IconClose = ({ className, size, strokeColor = DEFAULT_STROKE }: IconProps) => (
    <IconWrapper className={className} size={size}>
        <path d="M6 6L18 18" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
        <path d="M6 18L18 6" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
    </IconWrapper>
);

// --- VALUES / MISC ---

export const IconHeart = ({ className, size, fillColor = "#E76F51", strokeColor = DEFAULT_STROKE }: IconProps) => (
    <IconWrapper className={className} size={size}>
        <path
            d="M19.5 5.5C17.5 3.5 14.5 3.5 12.5 5.5L12 6L11.5 5.5C9.5 3.5 6.5 3.5 4.5 5.5C2.5 7.5 2.5 10.5 4.5 12.5L12 20L19.5 12.5C21.5 10.5 21.5 7.5 19.5 5.5Z"
            stroke={strokeColor}
            strokeWidth={STROKE_WIDTH}
            strokeLinejoin={STROKE_LINEJOIN}
            fill={fillColor}
        />
    </IconWrapper>
);

export const IconShield = ({ className, size, fillColor = DEFAULT_FILL, strokeColor = DEFAULT_STROKE }: IconProps) => (
    <IconWrapper className={className} size={size}>
        <path
            d="M12 22C12 22 20 18 20 12V5L12 2L4 5V12C4 18 12 22 12 22Z"
            stroke={strokeColor}
            strokeWidth={STROKE_WIDTH}
            strokeLinejoin={STROKE_LINEJOIN}
            fill={fillColor}
        />
    </IconWrapper>
);

export const IconUsers = ({ className, size, fillColor = DEFAULT_FILL, strokeColor = DEFAULT_STROKE }: IconProps) => (
    <IconWrapper className={className} size={size}>
        <circle cx="9" cy="7" r="4" stroke={strokeColor} strokeWidth={STROKE_WIDTH} fill={fillColor} />
        <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
        <path d="M23 21V19C22.9993 17.1132 21.7337 15.4746 19.9288 14.9272" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
        <path d="M16 3.13C17.7566 3.49122 19.349 4.67498 20.0469 6.33157" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
    </IconWrapper>
);

// --- HOW IT WORKS / STEPS ---

export const IconHouse = ({ className, size, fillColor = DEFAULT_FILL, strokeColor = DEFAULT_STROKE }: IconProps) => (
    <IconWrapper className={className} size={size}>
        <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} strokeLinejoin={STROKE_LINEJOIN} fill={fillColor} />
        <path d="M9 22V12H15V22" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} strokeLinejoin={STROKE_LINEJOIN} fill="#FFF" />
    </IconWrapper>
);

export const IconClipboard = ({ className, size, fillColor = DEFAULT_FILL, strokeColor = DEFAULT_STROKE }: IconProps) => (
    <IconWrapper className={className} size={size}>
        <path d="M16 4H19C19.5304 4 20.0391 4.21071 20.4142 4.58579C20.7893 4.96086 21 5.46957 21 6V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V6C3 5.46957 3.21071 4.96086 3.58579 4.58579C3.96086 4.21071 4.46957 4 5 4H8" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} strokeLinejoin={STROKE_LINEJOIN} fill={fillColor} />
        <rect x="8" y="2" width="8" height="4" rx="1" stroke={strokeColor} strokeWidth={STROKE_WIDTH} fill="#FFF" />
        <path d="M7 10H17" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
        <path d="M7 14H17" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
        <path d="M7 18H13" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
    </IconWrapper>
);

export const IconChat = ({ className, size, fillColor = DEFAULT_FILL, strokeColor = DEFAULT_STROKE }: IconProps) => (
    <IconWrapper className={className} size={size}>
        <path d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0791 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92088 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} strokeLinejoin={STROKE_LINEJOIN} fill={fillColor} />
    </IconWrapper>
);

export const IconKey = ({ className, size, fillColor = DEFAULT_FILL, strokeColor = DEFAULT_STROKE }: IconProps) => (
    <IconWrapper className={className} size={size}>
        <g transform="rotate(45 12 12)">
            <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} strokeLinejoin={STROKE_LINEJOIN} fill={fillColor} />
            <path d="M12 8V8.01" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
            {/* Simplified key-like shape using existing circle, maybe change to simpler key? Actually, a key shape: */}
        </g>
        {/* Overwriting with a better key shape */}
        <circle cx="9" cy="9" r="5" stroke={strokeColor} strokeWidth={STROKE_WIDTH} fill={fillColor} />
        <path d="M13 13L20 20" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
        <path d="M17 17L20 14" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
    </IconWrapper>
);

// --- SOCIAL / CONTACT ---
export const IconPhone = ({ className, size, fillColor = DEFAULT_FILL, strokeColor = DEFAULT_STROKE }: IconProps) => (
    <IconWrapper className={className} size={size}>
        <path
            d="M22 16.92V19.92C22.0011 20.4816 21.7656 21.0177 21.352 21.396C20.9383 21.7744 20.3787 21.9658 19.81 21.92C16.74 21.59 13.82 20.53 11.23 18.96C8.84 17.5 6.75 15.65 5.09 13.51C3.39 10.74 2.37 7.66 2.06 4.43C2.01633 3.86877 2.21731 3.31688 2.61869 2.90664C3.02007 2.4964 3.58988 2.26127 4.16 2.26H7.25C7.77 2.26 8.21 2.65 8.32 3.18C8.42 3.7 8.54 4.22 8.68 4.73C8.83 5.3 8.44 5.89 7.97 6.18L6.72 7.07C8.17 10.16 10.36 12.75 13.1 14.65L14.37 13.63C14.73 13.34 15.22 13.29 15.63 13.43C16.14 13.57 16.65 13.69 17.18 13.78C17.7 13.9 18.09 14.37 18.09 14.9V16.92Z"
            stroke={strokeColor}
            strokeWidth={STROKE_WIDTH}
            strokeLinecap={STROKE_LINECAP}
            fill={fillColor}
        />
    </IconWrapper>
);

export const IconMail = ({ className, size, fillColor = DEFAULT_FILL, strokeColor = DEFAULT_STROKE }: IconProps) => (
    <IconWrapper className={className} size={size}>
        <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke={strokeColor} strokeWidth={STROKE_WIDTH} fill={fillColor} />
        <path d="M22 6L12 13L2 6" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
    </IconWrapper>
);

export const IconMapPin = ({ className, size, fillColor = DEFAULT_FILL, strokeColor = DEFAULT_STROKE }: IconProps) => (
    <IconWrapper className={className} size={size}>
        <path d="M21 10C21 17 12 23 12 23C12 23 3 17 3 10C3 7.61305 3.94821 5.32387 5.63604 3.63604C7.32387 1.94821 9.61305 1 12 1C14.3869 1 16.6761 1.94821 18.364 3.63604C20.0518 5.32387 21 7.61305 21 10Z" stroke={strokeColor} strokeWidth={STROKE_WIDTH} fill={fillColor} />
        <circle cx="12" cy="10" r="3" stroke={strokeColor} strokeWidth={STROKE_WIDTH} fill="#FFF" />
    </IconWrapper>
);

export const IconSparkles = ({ className, size, fillColor = DEFAULT_FILL, strokeColor = DEFAULT_STROKE }: IconProps) => (
    <IconWrapper className={className} size={size}>
        <path d="M12 3L14.5 9L21 11.5L14.5 14L12 21L9.5 14L3 11.5L9.5 9L12 3Z" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinejoin={STROKE_LINEJOIN} fill={fillColor} />
        <path d="M5 5L6 7" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
        <path d="M19 19L18 17" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
    </IconWrapper>
);

export const IconSun = ({ className, size, fillColor = DEFAULT_FILL, strokeColor = DEFAULT_STROKE }: IconProps) => (
    <IconWrapper className={className} size={size}>
        <circle cx="12" cy="12" r="4" stroke={strokeColor} strokeWidth={STROKE_WIDTH} fill={fillColor} />
        <path d="M12 2V4" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
        <path d="M12 20V22" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
        <path d="M4.93 4.93L6.34 6.34" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
        <path d="M17.66 17.66L19.07 19.07" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
        <path d="M2 12H4" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
        <path d="M20 12H22" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
        <path d="M4.93 19.07L6.34 17.66" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
        <path d="M17.66 6.34L19.07 4.93" stroke={strokeColor} strokeWidth={STROKE_WIDTH} strokeLinecap={STROKE_LINECAP} />
    </IconWrapper>
);
