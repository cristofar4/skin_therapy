'use client';

import { useEffect } from 'react';
import Lenis from 'lenis';
import { ScrollTrigger } from '@/lib/gsap';

export function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.6,
    });

    lenis.on('scroll', ScrollTrigger.update);

    const raf = (time: number) => {
      lenis.raf(time * 1000);
    };
    gsapTickerAdd(raf);

    return () => {
      gsapTickerRemove(raf);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

// Lazy access to gsap ticker to keep this file light
function gsapTickerAdd(fn: (t: number) => void) {
  import('@/lib/gsap').then(({ gsap }) => {
    gsap.ticker.add(fn);
    gsap.ticker.lagSmoothing(0);
  });
}
function gsapTickerRemove(fn: (t: number) => void) {
  import('@/lib/gsap').then(({ gsap }) => gsap.ticker.remove(fn));
}
