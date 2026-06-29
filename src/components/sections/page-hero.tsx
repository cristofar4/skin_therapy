'use client';

import { SplitText } from '@/components/ui/split-text';
import { HeroVideo } from '@/components/ui/hero-video';
import { useGSAP } from '@/hooks/use-gsap';
import { gsap } from '@/lib/gsap';
import { img } from '@/lib/images';
import { media } from '@/lib/site';

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  sources,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
  sources?: import('@/lib/site').VideoSource[];
}) {
  useGSAP(() => {
    const tl = gsap.timeline({
      defaults: { ease: 'power4.out', clearProps: 'opacity,transform' },
    });
    tl.from('.page-hero-eyebrow', { y: 18, opacity: 0, duration: 0.8, delay: 0.2 }).from(
      '.page-hero-intro',
      { y: 20, opacity: 0, duration: 0.9 },
      0.5
    );
  }, []);

  return (
    <section className="relative flex min-h-[72vh] items-end overflow-hidden pb-16 pt-40">
      <HeroVideo
        sources={sources ?? media.page}
        poster={img(image, 1800)}
        alt={title}
        overlay="light"
      />

      <div className="container-luxe relative z-10">
        <span className="page-hero-eyebrow eyebrow text-champagne-light">{eyebrow}</span>
        <SplitText as="h1" className="mt-5 max-w-4xl text-5xl text-cream md:text-7xl lg:text-8xl">
          {title}
        </SplitText>
        {intro && (
          <p className="page-hero-intro mt-6 max-w-xl text-pretty text-lg text-cream/75">{intro}</p>
        )}
      </div>
    </section>
  );
}
