import type { Metadata } from 'next';
import Link from 'next/link';
import { Gift, Sparkles } from 'lucide-react';
import { PageHero } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/ui/section-heading';
import { Button } from '@/components/ui/button';
import { CtaBanner } from '@/components/sections/cta-banner';
import { Reveal } from '@/components/ui/reveal';
import { formatNaira } from '@/lib/utils';
import { whatsappLink } from '@/lib/site';
import { images } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Gift Cards',
  description:
    'Give the gift of radiance. Luxury gift cards from Skin Therapy Beauty and Spa Port Harcourt, redeemable across all treatments and memberships.',
};

const amounts = [25000, 50000, 100000, 250000];

export default function GiftCardsPage() {
  return (
    <>
      <PageHero
        eyebrow="Gift Cards"
        title="Give the gift of radiance"
        intro="A beautiful gesture for someone you cherish, redeemable across every treatment and membership."
        image={images.products}
      />

      <section className="container-luxe py-24">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2rem] bg-charcoal p-10 text-cream shadow-luxe">
              <div className="flex items-center justify-between">
                <span className="font-serif text-2xl">Skin Therapy</span>
                <Gift className="h-7 w-7 text-champagne-light" />
              </div>
              <p className="mt-16 text-xs uppercase tracking-luxe text-cream/50">Gift Card</p>
              <p className="mt-2 font-serif text-5xl text-champagne-light">{formatNaira(50000)}</p>
              <p className="mt-6 text-sm text-cream/60">A moment of calm, beautifully given.</p>
            </div>
          </Reveal>

          <div>
            <SectionHeading eyebrow="Choose An Amount" title="The perfect gift, every time" />
            <p className="mt-5 text-pretty text-charcoal-light">
              Whether a thank you, a celebration or a simple gesture of love, a Skin Therapy gift
              card is always treasured. Select an amount and we will craft a beautiful card to send.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {amounts.map((a) => (
                <div
                  key={a}
                  className="flex items-center justify-between rounded-2xl border border-charcoal/10 bg-card px-6 py-5"
                >
                  <span className="font-serif text-2xl text-charcoal">{formatNaira(a)}</span>
                  <Sparkles className="h-4 w-4 text-champagne-deep" />
                </div>
              ))}
            </div>
            <Button asChild variant="primary" size="lg" className="mt-8">
              <Link href={whatsappLink('Hello Skin Therapy, I would like to purchase a gift card.')} target="_blank">
                Purchase a Gift Card
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
