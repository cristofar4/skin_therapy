import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/ui/section-heading';
import { CategoryGrid } from '@/components/treatments/category-grid';
import { CtaBanner } from '@/components/sections/cta-banner';
import { images } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Body Therapy',
  description:
    'Contouring, polishing and renewal. Luxury body therapy treatments at Skin Therapy Beauty and Spa Port Harcourt.',
};

export default function BodyTherapyPage() {
  return (
    <>
      <PageHero
        eyebrow="Body Therapy"
        title="Renewal from head to toe"
        intro="Polishing, contouring and conditioning rituals that leave your skin silken and your spirit restored."
        image={images.massageSuite}
      />

      <section className="container-luxe py-24">
        <div className="mb-14">
          <SectionHeading
            eyebrow="Body Rituals"
            title="Sculpt, polish and glow"
            intro="Treatments designed to care for your skin everywhere, refining texture and restoring radiance."
          />
        </div>
        <CategoryGrid category="Body Therapy" />
      </section>

      <CtaBanner />
    </>
  );
}
