import React, { useEffect, useState } from 'react';

export const CursorGlow: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });

      const target = e.target as HTMLElement;
      if (target) {
        const computedStyle = window.getComputedStyle(target);
        setIsPointer(
          computedStyle.cursor === 'pointer' ||
          target.tagName === 'A' ||
          target.tagName === 'BUTTON' ||
          target.closest('a') !== null ||
          target.closest('button') !== null
        );
      }
    };

    window.addEventListener('mousemove', updatePosition);
    return () => window.removeEventListener('mousemove', updatePosition);
  }, []);

  return (
    <>
      {/* Outer subtle glow sphere */}
      <div
        className="fixed pointer-events-none z-30 transition-transform duration-100 ease-out hidden md:block rounded-full bg-cyan-500/10 dark:bg-cyan-500/15 blur-2xl"
        style={{
          width: isPointer ? 320 : 240,
          height: isPointer ? 320 : 240,
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: `translate(-50%, -50%) scale(${isPointer ? 1.2 : 1})`,
        }}
      />
      {/* Sharp follower ring */}
      <div
        className="fixed pointer-events-none z-40 transition-all duration-75 ease-out hidden md:block rounded-full border border-cyan-400/40 dark:border-cyan-400/60"
        style={{
          width: isPointer ? 44 : 24,
          height: isPointer ? 44 : 24,
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: 'translate(-50%, -50%)',
          boxShadow: isPointer ? '0 0 15px rgba(0, 240, 255, 0.4)' : 'none',
        }}
      />
    </>
  );
};
