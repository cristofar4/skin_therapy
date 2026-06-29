'use client';

import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

export function Preloader() {
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setDone(true), 2000);
    document.body.style.overflow = 'hidden';
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (done) document.body.style.overflow = '';
  }, [done]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[9000] flex items-center justify-center bg-ink"
          exit={{ y: '-100%' }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative flex h-20 w-20 items-center justify-center rounded-full border border-champagne/50"
            >
              <motion.span
                className="absolute inset-2 rounded-full border-t border-champagne-deep"
                animate={{ rotate: 360 }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'linear' }}
              />
              <span className="font-serif text-2xl text-champagne-deep">St</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col items-center"
            >
              <span className="font-serif text-2xl text-ivory">Skin Therapy</span>
              <span className="text-[0.6rem] uppercase tracking-luxe text-ivory-dim">
                Beauty and Spa
              </span>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
