'use client';

import { useRef } from 'react';
import { useGSAP } from '@/hooks/use-gsap';
import { gsap, SplitText as GsapSplitText, ScrollTrigger } from '@/lib/gsap';
import { cn } from '@/lib/utils';

export function SplitText({
  children,
  className,
  as: Tag = 'h2',
  type = 'lines,words',
  stagger = 0.06,
  trigger = true,
}: {
  children: string;
  className?: string;
  as?: keyof JSX.IntrinsicElements;
  type?: string;
  stagger?: number;
  trigger?: boolean;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(() => {
    const el = ref.current;
    if (!el) return;

    const split = new GsapSplitText(el, {
      type,
      linesClass: 'split-line overflow-hidden',
    });
    const targets = type.includes('words') ? split.words : split.lines;

    gsap.set(el, { visibility: 'visible' });
    gsap.from(targets, {
      yPercent: 120,
      opacity: 0,
      duration: 1.1,
      ease: 'power4.out',
      stagger,
      scrollTrigger: trigger
        ? { trigger: el, start: 'top 85%', once: true }
        : undefined,
    });

    return () => {
      split.revert();
    };
  }, []);

  const Comp = Tag as unknown as React.ElementType;

  return (
    <Comp ref={ref} className={cn('split-prepare', className)}>
      {children}
    </Comp>
  );
}

export { ScrollTrigger };
