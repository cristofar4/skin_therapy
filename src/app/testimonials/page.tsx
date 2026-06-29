import type { Metadata } from 'next';
import Image from 'next/image';
import { Star, Quote } from 'lucide-react';
import { PageHero } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/ui/section-heading';
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel';
import { Reveal, RevealGroup } from '@/components/ui/reveal';
import { CtaBanner } from '@/components/sections/cta-banner';
import { img, images } from '@/lib/images';
import { testimonials } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Testimonials',
  description:
    'Stories from the women who trust Skin Therapy Beauty and Spa with their skin, confidence and wellbeing.',
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Cherished Words"
        title="Stories of confidence restored"
        intro="The greatest measure of our work is how our guests feel when they leave. Here are some of their stories."
        image={images.client2}
      />

      <section className="container-luxe py-24">
        <div className="mb-16">
          <SectionHeading eyebrow="In Their Words" title="A featured story" />
        </div>
        <TestimonialsCarousel />
      </section>

      <section className="bg-ink/70 py-24">
        <div className="container-luxe">
          <div className="mb-16 flex flex-col items-center text-center">
            <SectionHeading
              align="center"
              eyebrow="Five Star Reviews"
              title="Rated with love by thousands"
            />
            <div className="mt-6 flex items-center gap-2">
              <div className="flex text-champagne">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-6 w-6 fill-champagne" />
                ))}
              </div>
              <span className="font-serif text-2xl text-ivory">4.9 from 9,500 plus guests</span>
            </div>
          </div>

          <RevealGroup className="columns-1 gap-6 md:columns-2 lg:columns-3 [&>*]:mb-6">
            {[...testimonials, ...testimonials].map((t, i) => (
              <Reveal key={i}>
                <figure className="break-inside-avoid rounded-[1.75rem] bg-surface p-8 shadow-soft">
                  <Quote className="h-8 w-8 text-champagne/50" />
                  <blockquote className="mt-4 text-pretty leading-relaxed text-ivory-soft">
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4">
                    <div className="relative h-12 w-12 overflow-hidden rounded-full">
                      <Image src={img(t.image, 200)} alt={t.name} fill sizes="48px" className="object-cover" />
                    </div>
                    <div>
                      <p className="font-serif text-lg text-ivory">{t.name}</p>
                      <p className="text-xs text-ivory-dim">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
