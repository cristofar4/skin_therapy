'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import type { Treatment } from '@/lib/content';
import { img } from '@/lib/images';
import { formatNaira } from '@/lib/utils';

export function TreatmentCard({ treatment, index = 0 }: { treatment: Treatment; index?: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col overflow-hidden rounded-4xl bg-surface shadow-soft"
    >
      <Link href="/book" className="relative block aspect-[4/5] overflow-hidden">
        <Image
          src={img(treatment.image, 900)}
          alt={treatment.name}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform [transition-duration:1200ms] ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx/70 via-onyx/0 to-onyx/0 opacity-80" />
        <span className="absolute left-5 top-5 rounded-full bg-ink/90 px-4 py-1.5 text-[0.65rem] uppercase tracking-[0.16em] text-ivory backdrop-blur">
          {treatment.category}
        </span>
        <span className="absolute right-5 top-5 flex h-11 w-11 translate-y-2 items-center justify-center rounded-full bg-champagne text-ivory opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <ArrowUpRight className="h-5 w-5" />
        </span>
        <div className="absolute inset-x-5 bottom-5 flex items-center justify-between text-ivory">
          <span className="flex items-center gap-1.5 text-xs">
            <Clock className="h-3.5 w-3.5" /> {treatment.duration}
          </span>
          <span className="text-sm">From {formatNaira(treatment.priceFrom)}</span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col gap-3 p-7">
        <h3 className="font-serif text-2xl text-ivory">{treatment.name}</h3>
        <p className="text-sm leading-relaxed text-ivory-dim">{treatment.tagline}</p>
        <div className="mt-auto flex flex-wrap gap-2 pt-3">
          {treatment.benefits.slice(0, 2).map((b) => (
            <span
              key={b}
              className="rounded-full bg-surface px-3 py-1 text-[0.7rem] text-ivory-soft"
            >
              {b}
            </span>
          ))}
        </div>
        <Link
          href="/book"
          className="mt-3 inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-champagne-deep link-underline w-fit"
        >
          Book Appointment <ArrowUpRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </motion.article>
  );
}
