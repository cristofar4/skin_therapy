'use client';

import Link from 'next/link';
import { Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { site, nav, whatsappLink, telLink, mailLink } from '@/lib/site';
import { Logo } from './logo';
import { Button } from '@/components/ui/button';
import { Marquee } from '@/components/ui/marquee';
import { NewsletterForm } from '@/components/forms/newsletter-form';

export function Footer() {
  return (
    <footer className="relative z-10 mt-20 overflow-hidden bg-onyx text-ivory">
      <div className="border-b border-ivory/10 py-10">
        <Marquee items={['Facials', 'Skin Care', 'Massage', 'Body Therapy', 'Wellness', 'Radiance']} />
      </div>

      <div className="container-luxe grid gap-14 py-20 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <Logo light />
          <p className="mt-6 max-w-sm text-pretty text-ivory/60">
            A luxury beauty and wellness sanctuary in the heart of Port Harcourt, devoted to
            revealing your most radiant, confident self.
          </p>
          <div className="mt-8 flex gap-3">
            <Link
              href={site.socials.instagram}
              target="_blank"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 transition-colors hover:border-champagne hover:text-champagne"
              aria-label="Instagram"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              href={site.socials.facebook}
              target="_blank"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-ivory/20 transition-colors hover:border-champagne hover:text-champagne"
              aria-label="Facebook"
            >
              <Facebook className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="lg:col-span-2">
          <h4 className="text-xs uppercase tracking-luxe text-champagne-light">Explore</h4>
          <ul className="mt-6 flex flex-col gap-3">
            {nav.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="link-underline text-ivory/70 hover:text-ivory">
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/gift-cards" className="link-underline text-ivory/70 hover:text-ivory">
                Gift Cards
              </Link>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-xs uppercase tracking-luxe text-champagne-light">Visit Us</h4>
          <ul className="mt-6 flex flex-col gap-4 text-ivory/70">
            <li className="flex gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
              <span>{site.address}</span>
            </li>
            <li className="flex gap-3">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
              <Link href={telLink} className="hover:text-ivory">{site.phoneDisplay}</Link>
            </li>
            <li className="flex gap-3">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
              <Link href={mailLink} className="hover:text-ivory">{site.email}</Link>
            </li>
            <li className="flex gap-3">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-champagne" />
              <span>Open daily, 10:00 to 19:00</span>
            </li>
          </ul>
        </div>

        <div className="lg:col-span-3">
          <h4 className="text-xs uppercase tracking-luxe text-champagne-light">Newsletter</h4>
          <p className="mt-6 text-sm text-ivory/60">
            Join our circle for seasonal rituals, member offers and skincare wisdom.
          </p>
          <NewsletterForm className="mt-5" />
          <Button asChild variant="gold" size="sm" className="mt-6 w-full">
            <Link href={whatsappLink('Hello Skin Therapy, I would like to make an enquiry.')} target="_blank">
              Chat on WhatsApp
            </Link>
          </Button>
        </div>
      </div>

      <div className="border-t border-ivory/10 py-8">
        <div className="container-luxe flex flex-col items-center justify-between gap-4 text-xs uppercase tracking-[0.14em] text-ivory/40 md:flex-row">
          <span>© {new Date().getFullYear()} {site.name}</span>
          <span>Crafted as a sanctuary in {site.city}</span>
          <div className="flex gap-6">
            <Link href="/contact" className="hover:text-ivory">Privacy</Link>
            <Link href="/contact" className="hover:text-ivory">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
