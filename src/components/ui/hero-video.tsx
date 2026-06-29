'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

/**
 * Cinematic background that plays looping video over a poster photograph.
 * The photo renders immediately and remains the graceful fallback if the
 * video cannot load, so the hero is always luminous.
 */
export function HeroVideo({
  video,
  poster,
  alt,
  overlay = 'dark',
  className,
}: {
  video: string;
  poster: string;
  alt: string;
  overlay?: 'dark' | 'light';
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [ready, setReady] = useState(false);

  return (
    <div className={cn('absolute inset-0 overflow-hidden', className)}>
      <Image src={poster} alt={alt} fill priority sizes="100vw" className="object-cover" />

      <video
        ref={ref}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={poster}
        onCanPlay={() => setReady(true)}
        className={cn(
          'absolute inset-0 h-full w-full object-cover transition-opacity [transition-duration:1500ms]',
          ready ? 'opacity-100' : 'opacity-0'
        )}
      >
        <source src={video} type="video/mp4" />
      </video>

      {overlay === 'dark' ? (
        <>
          <div className="absolute inset-0 bg-gradient-to-r from-cream/90 via-cream/45 to-cream/10" />
          <div className="absolute inset-0 bg-gradient-to-t from-cream via-cream/0 to-cream/0" />
        </>
      ) : (
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/85 via-charcoal/35 to-charcoal/20" />
      )}
    </div>
  );
}
