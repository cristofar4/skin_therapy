'use client';

import { SplitText } from './split-text';
import { Reveal } from './reveal';
import { cn } from '@/lib/utils';

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  className,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  align?: 'left' | 'center';
  className?: string;
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-5',
        align === 'center' && 'items-center text-center',
        className
      )}
    >
      {eyebrow && (
        <Reveal>
          <span className={cn('eyebrow', light && 'text-champagne-light')}>{eyebrow}</span>
        </Reveal>
      )}
      <SplitText
        as="h2"
        className={cn(
          'max-w-4xl text-balance text-4xl leading-[1.05] md:text-6xl',
          light ? 'text-cream' : 'text-charcoal',
          align === 'center' && 'mx-auto'
        )}
      >
        {title}
      </SplitText>
      {intro && (
        <Reveal delay={1}>
          <p
            className={cn(
              'max-w-2xl text-pretty text-base leading-relaxed md:text-lg',
              light ? 'text-cream/70' : 'text-charcoal-light',
              align === 'center' && 'mx-auto'
            )}
          >
            {intro}
          </p>
        </Reveal>
      )}
    </div>
  );
}
