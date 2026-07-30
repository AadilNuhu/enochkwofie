import React, { useState } from 'react';

interface CircularProgressProps {
  percentage: number;
  size?: number;
  strokeWidth?: number;
  label: string;
  category?: string;
  description?: string;
}

export const CircularProgress: React.FC<CircularProgressProps> = ({
  percentage,
  size = 110,
  strokeWidth = 8,
  label,
  description
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div
      className="relative flex flex-col items-center justify-center p-4 rounded-xl bg-slate-900/60 dark:bg-slate-900/80 border border-slate-800 hover:border-cyan-500/50 backdrop-blur-md transition-all duration-300 shadow-lg hover:shadow-cyan-500/10 group cursor-default"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="w-full h-full transform -rotate-90">
          {/* Background track */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            className="text-slate-800 stroke-current"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Gradient definitions */}
          <defs>
            <linearGradient id={`grad-${label.replace(/\s+/g, '-')}`} x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#00f0ff" />
              <stop offset="50%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
          {/* Animated Progress ring */}
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            stroke={`url(#grad-${label.replace(/\s+/g, '-')})`}
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            fill="transparent"
            className="transition-all duration-1000 ease-out"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
          <span className="text-xl font-bold font-mono text-cyan-400 group-hover:scale-110 transition-transform">
            {percentage}%
          </span>
        </div>
      </div>
      <h4 className="mt-3 text-sm font-semibold text-slate-200 group-hover:text-cyan-300 text-center transition-colors">
        {label}
      </h4>
      {description && isHovered && (
        <p className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-48 z-50 p-2 text-xs bg-slate-950 border border-slate-700 rounded-lg text-slate-300 shadow-xl text-center pointer-events-none animate-fadeIn">
          {description}
        </p>
      )}
    </div>
  );
};
