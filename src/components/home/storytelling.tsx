'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { useGSAP } from '@/hooks/use-gsap';
import { gsap } from '@/lib/gsap';
import { philosophy } from '@/lib/content';
import { img } from '@/lib/images';

export function Storytelling() {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const panels = gsap.utils.toArray<HTMLElement>('.story-panel');
    const images = gsap.utils.toArray<HTMLElement>('.story-image');

    panels.forEach((panel, i) => {
      gsap.fromTo(
        panel,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: { trigger: panel, start: 'top 75%', end: 'bottom 60%', toggleActions: 'play none none reverse' },
        }
      );
    });

    images.forEach((image) => {
      gsap.fromTo(
        image.querySelector('img'),
        { scale: 1.3 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: { trigger: image, start: 'top bottom', end: 'bottom top', scrub: true },
        }
      );
    });
  }, []);

  return (
    <section ref={root} className="relative overflow-hidden py-28">
      <div className="container-luxe">
        <div className="mb-20 max-w-2xl">
          <span className="eyebrow">Our Philosophy</span>
          <h2 className="mt-5 text-balance text-4xl text-charcoal md:text-6xl">
            Beauty begins the moment you exhale
          </h2>
          <p className="mt-6 text-pretty text-lg text-charcoal-light">
            We believe true beauty is not applied, it is revealed. Through considered ritual,
            expert hands and a space designed for stillness, we help you return to your most
            radiant, confident self.
          </p>
        </div>

        <div className="flex flex-col gap-28">
          {philosophy.map((p, i) => (
            <div
              key={p.no}
              className={`story-panel grid items-center gap-10 lg:grid-cols-2 ${
                i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''
              }`}
            >
              <div className="story-image relative aspect-[5/6] overflow-hidden rounded-[2rem] shadow-luxe">
                <Image
                  src={img(p.image, 1100)}
                  alt={p.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>
              <div className="max-w-md">
                <span className="font-serif text-7xl text-champagne/40">{p.no}</span>
                <h3 className="mt-4 font-serif text-4xl text-charcoal md:text-5xl">{p.title}</h3>
                <p className="mt-5 text-pretty text-lg leading-relaxed text-charcoal-light">
                  {p.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
