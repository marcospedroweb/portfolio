'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';

export const NameReveal = ({ name }) => {
  const ref = useRef(null);
  const [width, setWidth] = useState(0);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setShouldAnimate(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (ref.current) {
      setWidth(ref.current.scrollWidth);
    }
  }, [name]);

  return (
    <span className="text-white text-[2.5rem] font-bold flex font-mono leading-none">
      &lt;
      <span className="block overflow-hidden h-fit align-bottom">
        <motion.span
          ref={ref}
          initial={{ width: 0 }}
          animate={{ width: shouldAnimate ? width : 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="inline-block whitespace-nowrap overflow-hidden align-bottom"
          style={{ lineHeight: '1', verticalAlign: 'bottom' }}
        >
          {name}
        </motion.span>
      </span>
      /&gt;
    </span>
  );
};
