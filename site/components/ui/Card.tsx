import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
}

export default function Card({ children, className = '', hoverable = false }: CardProps) {
  const baseStyles = 'bg-white rounded-lg p-6 shadow-warm transition-all duration-[300ms] ease-[cubic-bezier(0.25,0.1,0.25,1)]';
  const hoverStyles = hoverable ? 'hover:-translate-y-1 hover:shadow-xl cursor-pointer' : '';

  return (
    <div className={`${baseStyles} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}
