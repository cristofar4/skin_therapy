'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Magnetic } from '@/components/ui/magnetic';
import { SplitText } from '@/components/ui/split-text';
import { img, images } from '@/lib/images';
import { whatsappLink } from '@/lib/site';

export function CtaBanner() {
  return (
    <section className="container-luxe py-24">
      <div className="relative overflow-hidden rounded-[2.5rem] bg-charcoal px-8 py-20 text-center md:px-16 md:py-28">
        <Image
          src={img(images.philosophy, 1600)}
          alt="Serene spa ambience"
          fill
          sizes="100vw"
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/70 to-charcoal/50" />
        <div className="relative z-10 mx-auto flex max-w-3xl flex-col items-center gap-7">
          <span className="eyebrow text-champagne-light">Begin Your Ritual</span>
          <SplitText as="h2" className="text-balance text-4xl text-cream md:text-6xl">
            Your sanctuary is waiting in Port Harcourt
          </SplitText>
          <p className="max-w-xl text-pretty text-cream/70">
            Reserve your moment of calm and let our therapists reveal the most radiant version of
            you. Every visit is a quiet return to yourself.
          </p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Magnetic>
              <Button asChild variant="gold" size="lg">
                <Link href="/book">Book Appointment</Link>
              </Button>
            </Magnetic>
            <Button asChild variant="outline" size="lg" className="border-cream/30 text-cream hover:text-champagne-light">
              <Link href={whatsappLink('Hello Skin Therapy, I would like to book a treatment.')} target="_blank">
                Chat on WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
