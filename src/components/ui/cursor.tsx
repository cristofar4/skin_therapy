'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const sx = useSpring(x, { stiffness: 350, damping: 30, mass: 0.4 });
  const sy = useSpring(y, { stiffness: 350, damping: 30, mass: 0.4 });

  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
    if (!fine) return;
    setEnabled(true);
    document.documentElement.classList.add('cursor-luxe');

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      setHovering(
        !!target.closest('a, button, [data-cursor="hover"], input, textarea, select')
      );
    };
    window.addEventListener('mousemove', move);
    return () => {
      window.removeEventListener('mousemove', move);
      document.documentElement.classList.remove('cursor-luxe');
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
        style={{ x: sx, y: sy }}
      >
        <motion.div
          className="relative -ml-1 -mt-1 h-2 w-2 rounded-full bg-champagne-deep"
          animate={{ scale: hovering ? 0 : 1 }}
        />
      </motion.div>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[9998] hidden md:block"
        style={{ x, y }}
        transition={{ type: 'tween' }}
      >
        <motion.div
          className="-ml-5 -mt-5 h-10 w-10 rounded-full border border-champagne/70"
          animate={{ scale: hovering ? 1.8 : 1, opacity: hovering ? 1 : 0.6 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
        />
      </motion.div>
    </>
  );
}
