import type { Metadata } from 'next';
import Image from 'next/image';
import { PageHero } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal, RevealGroup } from '@/components/ui/reveal';
import { ParallaxImage } from '@/components/ui/parallax-image';
import { Stats } from '@/components/home/stats';
import { CtaBanner } from '@/components/sections/cta-banner';
import { img, images } from '@/lib/images';
import { therapists } from '@/lib/content';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Discover the story, philosophy and people behind Skin Therapy Beauty and Spa, a luxury wellness sanctuary in Port Harcourt.',
};

const values = [
  { title: 'Expertise', text: 'Every therapist is certified, continually trained and devoted to the craft of beautiful, healthy skin.' },
  { title: 'Serenity', text: 'A space designed for calm, where time slows and you are free to simply be cared for.' },
  { title: 'Results', text: 'We pair luxury with science, using proven actives and technology that deliver visible, lasting change.' },
  { title: 'Devotion', text: 'You are never a number. Every ritual is tailored, intentional and entirely about you.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Story"
        title="A sanctuary born of devotion"
        intro="Skin Therapy Beauty and Spa was created to give Port Harcourt a beauty destination worthy of its women."
        image={images.storytelling1}
      />

      <section className="container-luxe py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <ParallaxImage
            src={img(images.philosophy, 1100)}
            alt="The calm interior of Skin Therapy Beauty and Spa"
            className="aspect-[4/5] rounded-[2rem] shadow-luxe"
          />
          <div>
            <SectionHeading
              eyebrow="Who We Are"
              title="Luxury wellness, crafted with intention"
            />
            <div className="mt-7 space-y-5 text-pretty text-lg leading-relaxed text-ivory-dim">
              <p>
                Skin Therapy began with a simple belief, that everyone deserves a place to be cared
                for completely. A place where skincare is taken seriously, where the space is
                beautiful and where every detail whispers calm.
              </p>
              <p>
                Today we are one of the most cherished beauty and wellness destinations in Port
                Harcourt, trusted by thousands of women who return to us not only for results, but
                for the feeling of being truly looked after.
              </p>
              <p>
                Our approach blends advanced clinical skincare with the warmth of genuine
                hospitality. The outcome is more than beautiful skin. It is renewed confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Stats />

      <section className="container-luxe py-24">
        <div className="mb-16">
          <SectionHeading eyebrow="What We Stand For" title="The values behind every ritual" />
        </div>
        <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <Reveal key={v.title}>
              <div className="h-full rounded-[1.75rem] border border-ivory/10 bg-surface p-8">
                <h3 className="font-serif text-2xl text-ivory">{v.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-ivory-dim">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </section>

      <section className="bg-ink/70 py-24">
        <div className="container-luxe">
          <div className="mb-16 flex flex-col items-center text-center">
            <SectionHeading
              align="center"
              eyebrow="The Artisans"
              title="Hands that have perfected their craft"
              intro="Meet a few of the talented therapists who make every visit feel effortless."
            />
          </div>
          <RevealGroup className="grid gap-8 md:grid-cols-3">
            {therapists.map((t) => (
              <Reveal key={t.name}>
                <div className="group">
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-soft">
                    <Image
                      src={img(t.image, 800)}
                      alt={t.name}
                      fill
                      sizes="33vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <h3 className="mt-6 font-serif text-2xl text-ivory">{t.name}</h3>
                  <p className="text-sm text-ivory-dim">{t.role}</p>
                  <p className="mt-1 text-xs uppercase tracking-[0.14em] text-champagne-deep">
                    {t.specialty}
                  </p>
                </div>
              </Reveal>
            ))}
          </RevealGroup>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
