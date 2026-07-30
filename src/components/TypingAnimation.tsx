import React, { useState, useEffect } from 'react';

interface TypingAnimationProps {
  sequence: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
  className?: string;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({
  sequence,
  typingSpeed = 80,
  deletingSpeed = 40,
  pauseTime = 1800,
  className = ''
}) => {
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);

  useEffect(() => {
    const currentFullText = sequence[loopIndex % sequence.length];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setText(currentFullText.substring(0, text.length + 1));

        if (text === currentFullText) {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        setText(currentFullText.substring(0, text.length - 1));

        if (text === '') {
          setIsDeleting(false);
          setLoopIndex((prev) => prev + 1);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopIndex, sequence, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={className}>
      {text}
      <span className="inline-block w-2 h-5 ml-1 bg-cyan-400 animate-pulse font-mono align-middle" />
    </span>
  );
};
