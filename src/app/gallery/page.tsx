import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/ui/section-heading';
import { GalleryGrid } from '@/components/gallery/gallery-grid';
import { Spaces } from '@/components/sections/spaces';
import { CtaBanner } from '@/components/sections/cta-banner';
import { images } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Beauty Gallery',
  description:
    'A visual journey through Skin Therapy Beauty and Spa, from our serene interiors to the rituals and results our guests adore.',
};

export default function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Beauty Gallery"
        title="A visual journey"
        intro="Step through the sanctuary in pictures, from our calming spaces to the artistry of our treatments."
        image={images.lounge}
      />

      <section className="container-luxe py-24">
        <div className="mb-12 flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            eyebrow="The Collection"
            title="Moments of beauty and calm"
            intro="Filter by category and tap any image to view it in full."
          />
        </div>
        <GalleryGrid />
      </section>

      <section className="container-luxe pb-24">
        <div className="mb-14 flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            eyebrow="The Spaces"
            title="Explore every corner of the sanctuary"
          />
        </div>
        <Spaces />
      </section>

      <CtaBanner />
    </>
  );
}
