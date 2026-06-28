import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/ui/section-heading';
import { CategoryGrid } from '@/components/treatments/category-grid';
import { CtaBanner } from '@/components/sections/cta-banner';
import { Reveal } from '@/components/ui/reveal';
import { images } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Massage',
  description:
    'Restorative bodywork and stillness. Therapeutic, aromatherapy and hot stone massage at Skin Therapy Beauty and Spa Port Harcourt.',
};

const benefits = [
  'Releases deep muscular tension',
  'Calms the nervous system',
  'Improves circulation and sleep',
  'Restores a sense of stillness',
];

export default function MassagePage() {
  return (
    <>
      <PageHero
        eyebrow="Massage"
        title="Stillness for body and mind"
        intro="Therapeutic bodywork that melts away tension and guides you into deep, restorative calm."
        image={images.massageTherapy}
      />

      <section className="container-luxe py-24">
        <div className="grid items-center gap-14 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Why Massage"
              title="More than indulgence, it is restoration"
            />
            <p className="mt-6 text-pretty text-lg leading-relaxed text-charcoal-light">
              In a world that rarely slows down, therapeutic massage is one of the most powerful
              forms of self care. Our therapists blend technique with intuition to leave you
              genuinely renewed.
            </p>
            <ul className="mt-8 space-y-4">
              {benefits.map((b, i) => (
                <Reveal key={b} delay={i}>
                  <li className="flex items-center gap-4">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-champagne/20 font-serif text-champagne-deep">
                      0{i + 1}
                    </span>
                    <span className="text-charcoal-soft">{b}</span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-luxe">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`https://images.unsplash.com/photo-${images.hotStone}?auto=format&fit=crop&w=1100&q=80`}
              alt="Hot stone massage"
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container-luxe pb-24">
        <div className="mb-14">
          <SectionHeading eyebrow="Our Massages" title="Choose your bodywork ritual" />
        </div>
        <CategoryGrid category="Massage" />
      </section>

      <CtaBanner />
    </>
  );
}
