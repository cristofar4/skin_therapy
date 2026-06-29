'use client';

import Link from 'next/link';
import { Calendar, Sparkles, ArrowRight, Star } from 'lucide-react';
import { SplitText } from '@/components/ui/split-text';
import { HeroVideo } from '@/components/ui/hero-video';
import { Button } from '@/components/ui/button';
import { Magnetic } from '@/components/ui/magnetic';
import { useGSAP } from '@/hooks/use-gsap';
import { gsap } from '@/lib/gsap';
import { img, images } from '@/lib/images';
import { media } from '@/lib/site';
import { trustIndicators } from '@/lib/content';

export function Hero() {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power4.out', clearProps: 'opacity,transform' },
    });
    tl.from('.hero-eyebrow', { y: 20, opacity: 0, duration: 0.9, delay: 0.2 })
      .from('.hero-sub', { y: 24, opacity: 0, duration: 1 }, 0.6)
      .from('.hero-actions', { y: 24, opacity: 0, duration: 0.9 }, 0.8)
      .from('.hero-bar', { y: 40, opacity: 0, duration: 1 }, 0.9);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] flex-col items-center justify-center overflow-hidden text-center">
      <HeroVideo
        sources={media.home}
        poster={img(images.hero, 2000)}
        alt="Luxury spa sanctuary at Skin Therapy Beauty and Spa"
        overlay="light"
      />
      {/* Centered cinematic scrim for legible text */}
      <div className="absolute inset-0 bg-ink/45" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(6,21,14,0.7)_100%)]" />

      <div className="container-luxe relative z-10 flex flex-col items-center pt-24">
        <div className="hero-eyebrow eyebrow justify-center text-champagne-light">
          Luxury Beauty and Wellness in Port Harcourt
        </div>

        <SplitText
          as="h1"
          type="words"
          className="mt-7 max-w-5xl text-balance text-[3.6rem] leading-[0.92] text-ivory md:text-[7.5rem]"
        >
          Where Skin Becomes Art
        </SplitText>

        <p className="hero-sub mx-auto mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-ivory/80">
          A serene sanctuary devoted to advanced skincare, restorative therapy and the quiet luxury
          of feeling completely cared for. Step in, slow down and rediscover your radiance.
        </p>

        <div className="hero-actions mt-11 flex flex-wrap items-center justify-center gap-4">
          <Magnetic>
            <Button asChild size="lg" variant="primary">
              <Link href="/book">
                <Calendar className="h-4 w-4" /> Book Appointment
              </Link>
            </Button>
          </Magnetic>
          <Button asChild size="lg" variant="outline">
            <Link href="/treatments">
              <Sparkles className="h-4 w-4" /> Explore Treatments
            </Link>
          </Button>
          <Button asChild size="lg" variant="ghost">
            <Link href="/gallery">
              View Gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="hero-actions mt-8 flex items-center justify-center gap-2 text-champagne">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="h-4 w-4 fill-champagne" />
          ))}
          <span className="ml-2 text-xs text-ivory/70">Loved by 9,500 plus guests</span>
        </div>
      </div>

      {/* Full width trust bar */}
      <div className="hero-bar absolute inset-x-0 bottom-0 z-10 border-t border-ivory/10 bg-onyx/40 backdrop-blur-xl">
        <div className="container-luxe grid grid-cols-2 divide-ivory/10 md:grid-cols-4 md:divide-x">
          {trustIndicators.map((t) => (
            <div key={t.label} className="px-4 py-5 text-center md:py-6">
              <p className="text-sm font-medium text-ivory">{t.label}</p>
              <p className="mt-1 text-[0.7rem] uppercase tracking-[0.14em] text-champagne-light">
                {t.value}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
