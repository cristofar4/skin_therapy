import type { Metadata } from 'next';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';
import { PageHero } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/ui/section-heading';
import { ContactForm } from '@/components/forms/contact-form';
import { FaqSection } from '@/components/sections/faq-section';
import { site, telLink, mailLink, whatsappLink } from '@/lib/site';
import { images } from '@/lib/images';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Visit Skin Therapy Beauty and Spa at 122c General Diriyai Lane, New GRA, Port Harcourt. Call, message on WhatsApp or send us a note.',
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come and find your calm"
        intro="We would love to welcome you. Reach out, ask a question or simply say hello."
        image={images.reception}
      />

      <section className="container-luxe py-24">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <SectionHeading eyebrow="Get In Touch" title="Send us a message" />
            <p className="mt-5 text-pretty text-charcoal-light">
              Whether you have a question about a treatment or would like guidance choosing the
              perfect ritual, our concierge is here to help.
            </p>
            <div className="mt-10">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <div className="grid gap-4 sm:grid-cols-2">
              <ContactCard icon={<MapPin />} label="Visit Us" value={site.address} />
              <ContactCard icon={<Phone />} label="Call Us" value={site.phoneDisplay} href={telLink} />
              <ContactCard icon={<Mail />} label="Email Us" value={site.email} href={mailLink} />
              <ContactCard icon={<Clock />} label="Opening Hours" value="Open daily, 10:00 to 19:00" />
            </div>

            <Link
              href={whatsappLink('Hello Skin Therapy, I would like to make an enquiry.')}
              target="_blank"
              className="flex items-center justify-between rounded-[1.5rem] bg-charcoal p-6 text-cream transition-colors hover:bg-champagne-deep"
            >
              <div className="flex items-center gap-4">
                <MessageCircle className="h-6 w-6 text-champagne-light" />
                <div>
                  <p className="font-serif text-xl">Chat on WhatsApp</p>
                  <p className="text-sm text-cream/60">We usually reply within minutes</p>
                </div>
              </div>
              <span className="text-champagne-light">→</span>
            </Link>

            <div className="overflow-hidden rounded-[1.5rem] border border-charcoal/10 shadow-soft">
              <iframe
                title="Skin Therapy Beauty and Spa location"
                src={site.mapsEmbed}
                width="100%"
                height="320"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="container-luxe pb-12">
        <div className="rounded-[2rem] border border-charcoal/10 bg-beige-50/70 p-8 md:p-12">
          <div className="grid gap-8 md:grid-cols-7">
            <div className="md:col-span-3">
              <h3 className="font-serif text-3xl text-charcoal">Opening hours</h3>
              <p className="mt-3 text-sm text-charcoal-light">
                Drop in or book ahead. Sundays are reserved for private appointments.
              </p>
            </div>
            <ul className="md:col-span-4">
              {site.hours.map((h) => (
                <li
                  key={h.day}
                  className="flex items-center justify-between border-b border-charcoal/10 py-3 text-sm last:border-0"
                >
                  <span className="text-charcoal-soft">{h.day}</span>
                  <span className="font-medium text-charcoal">{h.time}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <FaqSection />
    </>
  );
}

function ContactCard({
  icon,
  label,
  value,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href?: string;
}) {
  const inner = (
    <div className="h-full rounded-[1.5rem] border border-charcoal/10 bg-card p-6 transition-colors hover:border-champagne/50">
      <span className="flex h-11 w-11 items-center justify-center rounded-full bg-champagne/20 text-champagne-deep [&>svg]:h-5 [&>svg]:w-5">
        {icon}
      </span>
      <p className="mt-4 text-[0.65rem] uppercase tracking-[0.16em] text-charcoal-light">{label}</p>
      <p className="mt-1 text-sm text-charcoal">{value}</p>
    </div>
  );
  return href ? <Link href={href}>{inner}</Link> : inner;
}
