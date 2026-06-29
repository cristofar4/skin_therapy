'use client';

import { useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useGSAP } from '@/hooks/use-gsap';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { treatments } from '@/lib/content';
import { img } from '@/lib/images';
import { formatNaira } from '@/lib/utils';
import { ArrowUpRight } from 'lucide-react';

export function TreatmentsScroll() {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const trackEl = track.current;
    const rootEl = root.current;
    if (!trackEl || !rootEl) return;
    if (window.innerWidth < 1024) return; // mobile uses native scroll

    const getScroll = () => -(trackEl.scrollWidth - window.innerWidth + 80);

    gsap.to(trackEl, {
      x: getScroll,
      ease: 'none',
      scrollTrigger: {
        trigger: rootEl,
        start: 'top top',
        end: () => `+=${trackEl.scrollWidth - window.innerWidth + 80}`,
        pin: true,
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden bg-onyx py-24 lg:h-screen lg:py-0">
      <div className="container-luxe flex h-full flex-col justify-center">
        <div className="flex items-end justify-between gap-6 pt-10 lg:pt-0">
          <div className="max-w-xl">
            <span className="eyebrow text-champagne-light">The Treatment Menu</span>
            <h2 className="mt-5 text-balance text-4xl text-ivory md:text-6xl">
              Rituals crafted for every kind of radiance
            </h2>
          </div>
          <Link
            href="/treatments"
            className="hidden shrink-0 items-center gap-2 text-xs uppercase tracking-[0.16em] text-ivory/70 hover:text-champagne-light lg:flex"
          >
            View All <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <div
          ref={track}
          className="no-scrollbar mt-10 flex gap-6 overflow-x-auto pb-4 lg:mt-14 lg:overflow-visible lg:pb-0"
        >
          {treatments.slice(0, 9).map((t) => (
            <Link
              key={t.slug}
              href="/book"
              className="group relative h-[440px] w-[300px] shrink-0 overflow-hidden rounded-[2rem] md:w-[340px]"
            >
              <Image
                src={img(t.image, 800)}
                alt={t.name}
                fill
                sizes="340px"
                className="object-cover transition-transform [transition-duration:1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/20 to-transparent" />
              <div className="absolute inset-x-6 bottom-6">
                <span className="text-[0.65rem] uppercase tracking-[0.16em] text-champagne-light">
                  {t.category}
                </span>
                <h3 className="mt-2 font-serif text-2xl text-ivory">{t.name}</h3>
                <p className="mt-1 text-sm text-ivory/60">From {formatNaira(t.priceFrom)}</p>
              </div>
              <span className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full bg-ink/90 text-ivory opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <ArrowUpRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
