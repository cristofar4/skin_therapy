'use client';

import Link from 'next/link';
import { Calendar, Sparkles, Star, ArrowRight } from 'lucide-react';
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
      .from('.hero-sub', { y: 24, opacity: 0, duration: 1 }, 0.5)
      .from('.hero-actions', { y: 24, opacity: 0, duration: 0.9 }, 0.7)
      .from('.hero-trust-grid', { y: 28, opacity: 0, duration: 0.9 }, 0.9)
      .from('.hero-card', { x: 50, opacity: 0, duration: 1.1 }, 0.6);
  }, []);

  return (
    <section className="relative flex min-h-[100svh] items-center overflow-hidden pt-28">
      <HeroVideo
        video={media.homeVideo}
        poster={img(images.hero, 2000)}
        alt="Luxury spa sanctuary at Skin Therapy Beauty and Spa"
        overlay="dark"
      />

      <div className="container-luxe relative z-10 grid items-center gap-12 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <div className="hero-eyebrow eyebrow">Luxury Beauty and Wellness in Port Harcourt</div>

          <SplitText
            as="h1"
            type="words"
            className="mt-6 max-w-3xl text-balance text-[3.4rem] leading-[0.95] text-charcoal md:text-8xl"
          >
            Where Skin Becomes Art
          </SplitText>

          <p className="hero-sub mt-7 max-w-xl text-pretty text-lg leading-relaxed text-charcoal-soft">
            A serene sanctuary devoted to advanced skincare, restorative therapy and the quiet
            luxury of feeling completely cared for. Step in, slow down and rediscover your radiance.
          </p>

          <div className="hero-actions mt-10 flex flex-wrap gap-4">
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

          {/* Floating trust indicators */}
          <div className="hero-trust-grid mt-14 grid max-w-2xl grid-cols-2 gap-4 sm:grid-cols-4">
            {trustIndicators.map((t) => (
              <div key={t.label} className="hero-trust glass animate-float rounded-2xl p-4">
                <p className="text-xs font-medium text-charcoal">{t.label}</p>
                <p className="mt-1 text-[0.7rem] text-charcoal-light">{t.value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Premium booking card */}
        <div className="hero-card lg:col-span-5">
          <div className="glass relative ml-auto max-w-md rounded-[2rem] p-8">
            <div className="flex items-center gap-1 text-champagne">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-champagne" />
              ))}
              <span className="ml-2 text-xs text-charcoal-light">Rated by 9,500 plus guests</span>
            </div>
            <h3 className="mt-5 font-serif text-3xl text-charcoal">Reserve your ritual</h3>
            <p className="mt-2 text-sm text-charcoal-light">
              Choose your treatment and let our therapists craft an experience around you.
            </p>

            <div className="mt-6 space-y-3">
              {['Signature Hydra Facial', 'Restorative Massage Therapy', 'Skin Brightening Ritual'].map(
                (s) => (
                  <Link
                    key={s}
                    href="/book"
                    className="flex items-center justify-between rounded-2xl bg-white/60 px-5 py-4 text-sm text-charcoal transition-colors hover:bg-white"
                  >
                    {s}
                    <ArrowRight className="h-4 w-4 text-champagne-deep" />
                  </Link>
                )
              )}
            </div>

            <Button asChild variant="gold" className="mt-6 w-full">
              <Link href="/book">Begin Booking</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 lg:flex">
        <span className="text-[0.65rem] uppercase tracking-luxe text-charcoal-light">Scroll</span>
        <span className="h-12 w-px bg-gradient-to-b from-charcoal/40 to-transparent" />
      </div>
    </section>
  );
}
