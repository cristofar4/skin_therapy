import Link from 'next/link';
import { Hero } from '@/components/home/hero';
import { Stats } from '@/components/home/stats';
import { Storytelling } from '@/components/home/storytelling';
import { TreatmentsScroll } from '@/components/home/treatments-scroll';
import { Spaces } from '@/components/sections/spaces';
import { TestimonialsCarousel } from '@/components/sections/testimonials-carousel';
import { MembershipCards } from '@/components/sections/membership-cards';
import { Instagram } from '@/components/sections/instagram';
import { FaqSection } from '@/components/sections/faq-section';
import { CtaBanner } from '@/components/sections/cta-banner';
import { SectionHeading } from '@/components/ui/section-heading';
import { Marquee } from '@/components/ui/marquee';
import { Button } from '@/components/ui/button';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Storytelling />
      <TreatmentsScroll />

      <section className="py-16">
        <Marquee items={['Radiance', 'Renewal', 'Stillness', 'Confidence', 'Glow', 'Sanctuary']} />
      </section>

      <section className="container-luxe py-12">
        <div className="mb-14 flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            eyebrow="The Spa Experience"
            title="Step inside a sanctuary made for stillness"
            intro="From the moment you arrive to the moment you leave, every space is designed to soothe the senses and quiet the mind."
          />
        </div>
        <Spaces />
      </section>

      <section className="container-luxe py-24">
        <div className="mb-16">
          <SectionHeading
            eyebrow="Cherished Words"
            title="Loved by women across Port Harcourt"
          />
        </div>
        <TestimonialsCarousel />
      </section>

      <section className="bg-beige-50/70 py-24">
        <div className="container-luxe">
          <div className="mb-16 flex flex-col items-center text-center">
            <SectionHeading
              align="center"
              eyebrow="Membership"
              title="Belong to the sanctuary"
              intro="Make self care a beautiful habit with a membership crafted around your skin, your time and your wellbeing."
            />
          </div>
          <MembershipCards />
          <div className="mt-12 flex justify-center">
            <Button asChild variant="ghost">
              <Link href="/membership">Compare All Memberships</Link>
            </Button>
          </div>
        </div>
      </section>

      <FaqSection />
      <Instagram />
      <CtaBanner />
    </>
  );
}
