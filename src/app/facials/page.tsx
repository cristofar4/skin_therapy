import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/ui/section-heading';
import { CategoryGrid } from '@/components/treatments/category-grid';
import { CtaBanner } from '@/components/sections/cta-banner';
import { Reveal, RevealGroup } from '@/components/ui/reveal';
import { images } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Facials',
  description:
    'Bespoke facial rituals at Skin Therapy Beauty and Spa, from the signature Hydra Facial to deep cleansing treatments for radiant, healthy skin.',
};

const steps = [
  { no: '01', title: 'Consult', text: 'We study your skin and listen to your goals before a single product touches your face.' },
  { no: '02', title: 'Cleanse', text: 'A deep, gentle cleanse and exfoliation prepares the skin to receive its treatment.' },
  { no: '03', title: 'Treat', text: 'Targeted actives, massage and technology address your unique concerns.' },
  { no: '04', title: 'Glow', text: 'Hydration, protection and a final flourish leave you luminous and refreshed.' },
];

export default function FacialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Facials"
        title="Rituals for radiant skin"
        intro="Bespoke facial experiences that cleanse, renew and reveal your most luminous complexion."
        image={images.facialRoom}
      />

      <section className="container-luxe py-24">
        <div className="mb-16">
          <SectionHeading
            eyebrow="The Facial Journey"
            title="Four steps to luminous skin"
            intro="Every facial follows a considered rhythm, tailored in the moment to exactly what your skin needs."
          />
        </div>
        <RevealGroup className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <Reveal key={s.no}>
              <div className="h-full rounded-[1.75rem] border border-ivory/10 bg-surface p-8">
                <span className="font-serif text-5xl text-champagne/50">{s.no}</span>
                <h3 className="mt-4 font-serif text-2xl text-ivory">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory-dim">{s.text}</p>
              </div>
            </Reveal>
          ))}
        </RevealGroup>
      </section>

      <section className="container-luxe pb-24">
        <div className="mb-14">
          <SectionHeading eyebrow="Our Facials" title="Choose your facial ritual" />
        </div>
        <CategoryGrid category="Facials" />
      </section>

      <CtaBanner />
    </>
  );
}
