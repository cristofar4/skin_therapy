import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/ui/section-heading';
import { TreatmentExplorer } from '@/components/treatments/treatment-explorer';
import { FaqSection } from '@/components/sections/faq-section';
import { CtaBanner } from '@/components/sections/cta-banner';
import { images } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Treatments',
  description:
    'Explore the full menu of luxury facials, skin care, body therapy, massage and beauty treatments at Skin Therapy Beauty and Spa Port Harcourt.',
};

export default function TreatmentsPage() {
  return (
    <>
      <PageHero
        eyebrow="The Menu"
        title="Treatments crafted around you"
        intro="A considered collection of rituals, each designed to restore, renew and reveal your natural radiance."
        image={images.treatmentRoom}
      />

      <section className="container-luxe py-24">
        <div className="mb-14 flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            eyebrow="Explore"
            title="Choose your ritual"
            intro="Filter by category and tap any treatment to discover the experience, benefits and what to expect."
          />
        </div>
        <TreatmentExplorer />
      </section>

      <FaqSection />
      <CtaBanner />
    </>
  );
}
