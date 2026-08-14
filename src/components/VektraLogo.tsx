import React from 'react';

interface LogoProps {
  className?: string;
  isDark?: boolean;
}

export function VektraLogo({ className = "w-6 h-6", isDark = true }: LogoProps) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-black dark:text-white transition-transform group-hover:scale-105 duration-200">
        <path d="M12 2L2 21h20L12 2z" fill="currentColor" />
        <path d="M12 7L6 18h12L12 7z" fill={isDark ? '#0a0d0c' : '#ffffff'} />
        <circle cx="12" cy="14" r="2.2" fill="#22c55e" />
      </svg>
    </div>
  );
}
