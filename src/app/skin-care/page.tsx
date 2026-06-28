import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/ui/section-heading';
import { CompareSlider } from '@/components/ui/compare-slider';
import { CategoryGrid } from '@/components/treatments/category-grid';
import { CtaBanner } from '@/components/sections/cta-banner';
import { Reveal } from '@/components/ui/reveal';
import { img, images } from '@/lib/images';
import { beforeAfter } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Skin Care',
  description:
    'Advanced skin care at Skin Therapy Beauty and Spa. See real transformations through our before and after showcase and discover results driven treatments.',
};

const education = [
  { title: 'Consistency', text: 'Beautiful skin is built over time. A steady ritual will always outperform an occasional miracle.' },
  { title: 'Protection', text: 'Daily sun protection is the single most powerful step for preventing pigmentation and ageing.' },
  { title: 'Expertise', text: 'Professional treatments unlock results that home care alone simply cannot achieve.' },
];

export default function SkinCarePage() {
  return (
    <>
      <PageHero
        eyebrow="Skin Care"
        title="Visible, lasting transformation"
        intro="Results driven skin care that fades pigmentation, refines texture and restores your natural glow."
        image={images.skinBrightening}
      />

      <section className="container-luxe py-24">
        <div className="mb-16 flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            eyebrow="The Proof"
            title="Real results, gently revealed"
            intro="Drag the slider to see the transformations our clients achieve through considered, professional skin care."
          />
        </div>

        <div className="space-y-20">
          {beforeAfter.map((item, i) => (
            <Reveal key={item.title}>
              <div className={`grid items-center gap-12 lg:grid-cols-2 ${i % 2 ? 'lg:[&>*:first-child]:order-2' : ''}`}>
                <CompareSlider before={img(item.before, 1000)} after={img(item.after, 1000)} />
                <div className="max-w-md">
                  <span className="eyebrow">{item.weeks}</span>
                  <h3 className="mt-4 font-serif text-4xl text-charcoal">{item.title}</h3>
                  <p className="mt-5 text-pretty text-lg leading-relaxed text-charcoal-light">
                    {item.note}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-beige-50/70 py-24">
        <div className="container-luxe">
          <div className="mb-16">
            <SectionHeading
              eyebrow="Skin Wisdom"
              title="The principles of beautiful skin"
            />
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {education.map((e) => (
              <div key={e.title} className="rounded-[1.75rem] bg-card p-8 shadow-soft">
                <h3 className="font-serif text-2xl text-charcoal">{e.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-light">{e.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxe py-24">
        <div className="mb-14">
          <SectionHeading eyebrow="Treatments" title="Our skin care treatments" />
        </div>
        <CategoryGrid category="Skin Care" />
      </section>

      <CtaBanner />
    </>
  );
}
