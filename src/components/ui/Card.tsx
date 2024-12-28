import React from 'react';
import { cn } from '../../utils/cn';

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-xl shadow-sm border border-gray-100',
        'transition-all duration-200 ease-in-out',
        'hover:shadow-md hover:border-gray-200',
        className
      )}
    >
      {children}
    </div>
  );
}