'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Clock, Sparkles, ArrowUpRight, X, Heart } from 'lucide-react';
import { treatments, type Treatment } from '@/lib/content';
import { img } from '@/lib/images';
import { formatNaira } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const categories = ['All', 'Facials', 'Skin Care', 'Body Therapy', 'Massage', 'Beauty'] as const;

export function TreatmentExplorer() {
  const [filter, setFilter] = useState<(typeof categories)[number]>('All');
  const [active, setActive] = useState<Treatment | null>(null);

  const list = filter === 'All' ? treatments : treatments.filter((t) => t.category === filter);

  return (
    <div>
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-6 py-2.5 text-xs uppercase tracking-[0.14em] transition-all duration-300 ${
              filter === c
                ? 'bg-onyx text-ivory'
                : 'border border-ivory/20 text-ivory hover:border-champagne'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div layout className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {list.map((t, i) => (
            <motion.button
              key={t.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, delay: (i % 3) * 0.05 }}
              onClick={() => setActive(t)}
              className="group relative flex flex-col overflow-hidden rounded-[2rem] bg-surface text-left shadow-soft"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={img(t.image, 800)}
                  alt={t.name}
                  fill
                  sizes="33vw"
                  className="object-cover transition-transform [transition-duration:1200ms] group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/70 to-transparent" />
                <span className="absolute left-5 top-5 rounded-full bg-ink/90 px-4 py-1.5 text-[0.65rem] uppercase tracking-[0.14em] text-ivory">
                  {t.category}
                </span>
                <div className="absolute inset-x-5 bottom-5 flex items-center justify-between text-ivory">
                  <span className="flex items-center gap-1.5 text-xs">
                    <Clock className="h-3.5 w-3.5" /> {t.duration}
                  </span>
                  <span className="text-sm">From {formatNaira(t.priceFrom)}</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-serif text-2xl text-ivory">{t.name}</h3>
                <p className="mt-2 text-sm text-ivory-dim">{t.tagline}</p>
                <span className="mt-4 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-champagne-deep">
                  View Details <ArrowUpRight className="h-3.5 w-3.5" />
                </span>
              </div>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {active && <TreatmentDialog treatment={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </div>
  );
}

function TreatmentDialog({ treatment, onClose }: { treatment: Treatment; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 z-[300] flex items-end justify-center bg-onyx/60 p-0 backdrop-blur-sm md:items-center md:p-6"
    >
      <motion.div
        initial={{ y: 80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 80, opacity: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative grid max-h-[92vh] w-full max-w-4xl overflow-hidden rounded-t-[2rem] bg-ink md:max-h-[88vh] md:grid-cols-2 md:rounded-[2rem]"
      >
        <button
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-ink/90 text-ivory shadow-soft md:bg-ivory/10 md:text-ivory"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="relative hidden min-h-[300px] md:block">
          <Image src={img(treatment.image, 900)} alt={treatment.name} fill sizes="50vw" className="object-cover" />
        </div>
        <div className="overflow-y-auto p-8 md:p-10">
          <span className="eyebrow">{treatment.category}</span>
          <h3 className="mt-4 font-serif text-4xl text-ivory">{treatment.name}</h3>
          <p className="mt-3 text-pretty leading-relaxed text-ivory-dim">{treatment.overview}</p>

          <h4 className="mt-7 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-ivory-soft">
            <Sparkles className="h-4 w-4 text-champagne-deep" /> Benefits
          </h4>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {treatment.benefits.map((b) => (
              <li key={b} className="flex items-start gap-2 text-sm text-ivory-soft">
                <Heart className="mt-0.5 h-3.5 w-3.5 shrink-0 text-champagne-deep" /> {b}
              </li>
            ))}
          </ul>

          <div className="mt-7 grid grid-cols-2 gap-4">
            <div className="rounded-2xl bg-surface p-4">
              <p className="text-[0.65rem] uppercase tracking-[0.14em] text-ivory-dim">Duration</p>
              <p className="mt-1 font-serif text-xl text-ivory">{treatment.duration}</p>
            </div>
            <div className="rounded-2xl bg-surface p-4">
              <p className="text-[0.65rem] uppercase tracking-[0.14em] text-ivory-dim">Recovery</p>
              <p className="mt-1 text-sm text-ivory">{treatment.recovery}</p>
            </div>
          </div>

          <div className="mt-7 flex items-center justify-between">
            <span className="font-serif text-2xl text-champagne-deep">
              From {formatNaira(treatment.priceFrom)}
            </span>
            <Button asChild variant="primary">
              <Link href="/book">Book Appointment</Link>
            </Button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
