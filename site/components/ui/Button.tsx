import { ButtonHTMLAttributes, ReactNode } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'hero-primary' | 'hero-secondary' | 'hero-secondary-dark';
type ButtonSize = 'sm' | 'md' | 'lg' | 'xl';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: ReactNode;
  className?: string;
  isLoading?: boolean;
}

export default function Button({
  variant = 'primary',
  size = 'md',
  children,
  className = '',
  isLoading,
  ...props
}: ButtonProps) {
  // Base standards
  const baseStyles = 'inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed active:scale-[0.98]';
  const shapeStyles = 'rounded-full'; // Always pills per new design

  const variants = {
    // Standard Orange
    primary: 'bg-[#C7773B] hover:bg-[#B66629] text-white shadow-lg hover:shadow-xl shadow-[#C7773B]/20 hover:-translate-y-0.5',
    // Standard Teal
    secondary: 'bg-[#2F6F71] hover:bg-[#245C5E] text-white shadow-lg hover:shadow-xl shadow-[#2F6F71]/20 hover:-translate-y-0.5',
    // Outline (usually for dark on light)
    outline: 'bg-transparent border-2 border-[#1A1410] text-[#1A1410] hover:bg-[#1A1410] hover:text-white',
    // Ghost
    ghost: 'bg-transparent text-[#C7773B] hover:bg-[#C7773B]/10',

    // Massive Hero Buttons
    'hero-primary': 'bg-[#C7773B] hover:bg-[#B66629] text-white font-black shadow-[0_15px_40px_rgba(199,119,59,0.5)] hover:shadow-[0_20px_50px_rgba(199,119,59,0.6)] hover:-translate-y-1',
    'hero-secondary': 'bg-transparent hover:bg-white/10 text-white border-4 border-white/60 hover:border-white shadow-2xl backdrop-blur-md hover:-translate-y-1',
    // Hero Secondary Dark (for light backgrounds)
    'hero-secondary-dark': 'bg-transparent hover:bg-[#2F6F71]/10 text-[#2F6F71] border-4 border-[#2F6F71]/30 hover:border-[#2F6F71] shadow-none hover:-translate-y-1'
  };

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
    xl: 'px-14 py-6 text-xl md:text-2xl', // Hero size
  };

  const variantStyle = variants[variant as keyof typeof variants] || variants.primary;
  const sizeStyle = sizes[size];

  return (
    <button
      className={`${baseStyles} ${shapeStyles} ${variantStyle} ${sizeStyle} ${className}`}
      {...props}
    >
      {isLoading ? (
        <span className="opacity-80">Loading...</span>
      ) : children}
    </button>
  );
}
