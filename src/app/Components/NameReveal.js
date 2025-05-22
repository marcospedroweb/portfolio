'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { useIsMobile } from '../hooks/useIsMobile';

export const NameReveal = ({ name }) => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      const scrollThreshold = isMobile ? 150 : 50;

      if (window.scrollY > scrollThreshold) {
        setShouldAnimate(true);
        window.removeEventListener('scroll', handleScroll); // dispara uma vez
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isMobile]);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth);
    }
  }, [name]);

  return (
    <span className="text-white text-[2.5rem] font-bold flex font-mono leading-none">
      &lt;
      <span className="block overflow-hidden align-bottom h-fit">
        <motion.span
          ref={ref}
          initial={{ width: 0 }}
          animate={{ width: shouldAnimate ? width : 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="inline-block overflow-hidden align-bottom whitespace-nowrap"
          style={{ lineHeight: '1', verticalAlign: 'bottom' }}
        >
          {name}
        </motion.span>
      </span>
      /&gt;
    </span>
  );
};
