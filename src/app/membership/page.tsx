import type { Metadata } from 'next';
import { PageHero } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/ui/section-heading';
import { MembershipCards } from '@/components/sections/membership-cards';
import { FaqSection } from '@/components/sections/faq-section';
import { CtaBanner } from '@/components/sections/cta-banner';
import { Check, Minus } from 'lucide-react';
import { images } from '@/lib/images';
import { memberships } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Membership',
  description:
    'Premium wellness memberships at Skin Therapy Beauty and Spa. Make self care a beautiful habit with monthly, premium, luxury and VIP tiers.',
};

const compareRows = [
  { label: 'Signature treatments included', values: ['One', 'Two', 'Four', 'Unlimited'] },
  { label: 'Discount on all services', values: ['10 percent', '15 percent', '20 percent', '25 percent'] },
  { label: 'Priority booking window', values: [true, true, true, true] },
  { label: 'Complimentary skin consultation', values: [true, true, true, true] },
  { label: 'Dedicated personal therapist', values: [false, false, true, true] },
  { label: 'Exclusive member events', values: [false, false, true, true] },
  { label: 'Private suite access', values: [false, false, false, true] },
  { label: 'Monthly guest passes', values: [false, false, false, true] },
];

export default function MembershipPage() {
  return (
    <>
      <PageHero
        eyebrow="Membership"
        title="Belong to the sanctuary"
        intro="Make beauty a ritual rather than an occasion with a membership crafted around your skin and your life."
        image={images.products}
      />

      <section className="container-luxe py-24">
        <div className="mb-16 flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            eyebrow="Choose Your Tier"
            title="Four ways to be cared for"
            intro="Each membership unlocks a world of treatments, savings and quiet privileges."
          />
        </div>
        <MembershipCards />
      </section>

      <section className="bg-beige-50/70 py-24">
        <div className="container-luxe">
          <div className="mb-14">
            <SectionHeading eyebrow="Compare" title="Find your perfect fit" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[760px] border-collapse">
              <thead>
                <tr>
                  <th className="p-5 text-left" />
                  {memberships.map((m) => (
                    <th
                      key={m.name}
                      className={`p-5 text-center font-serif text-xl ${
                        m.featured ? 'text-champagne-deep' : 'text-charcoal'
                      }`}
                    >
                      {m.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {compareRows.map((row) => (
                  <tr key={row.label} className="border-t border-charcoal/10">
                    <td className="p-5 text-sm text-charcoal-soft">{row.label}</td>
                    {row.values.map((v, i) => (
                      <td key={i} className="p-5 text-center text-sm text-charcoal">
                        {typeof v === 'boolean' ? (
                          v ? (
                            <Check className="mx-auto h-5 w-5 text-champagne-deep" />
                          ) : (
                            <Minus className="mx-auto h-4 w-4 text-charcoal-light/40" />
                          )
                        ) : (
                          v
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FaqSection />
      <CtaBanner />
    </>
  );
}
