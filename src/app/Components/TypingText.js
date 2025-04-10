'use client';
import React from 'react';
import { Typewriter } from 'react-simple-typewriter';

export const TypingText = ({
  text,
  typeSpeed = 80,
  cursor = true,
  cursorStyle = '|',
  className = '',
}) => {
  return (
    <h2 className={className}>
      <Typewriter
        words={[text]}
        typeSpeed={typeSpeed}
        cursor={cursor}
        cursorStyle={cursorStyle}
      />
    </h2>
  );
};
