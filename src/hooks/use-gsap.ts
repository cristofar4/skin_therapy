'use client';

import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

/**
 * Lightweight useGSAP style hook. Runs the callback inside a gsap.context so
 * every tween and ScrollTrigger created within is automatically reverted on
 * cleanup. The callback may return its own cleanup function.
 */
export function useGSAP(cb: () => void | (() => void), deps: unknown[] = []) {
  const cleanup = useRef<void | (() => void)>();

  useEffect(() => {
    const reduce =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const ctx = gsap.context(() => {
      cleanup.current = cb();
    });
    return () => {
      if (typeof cleanup.current === 'function') cleanup.current();
      ctx.revert();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
}
