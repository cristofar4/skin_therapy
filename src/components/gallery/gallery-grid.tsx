'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { X, ArrowLeft, ArrowRight, Expand } from 'lucide-react';
import { galleryItems, galleryCategories } from '@/lib/content';
import { img } from '@/lib/images';

export function GalleryGrid() {
  const [filter, setFilter] = useState('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const list = filter === 'All' ? galleryItems : galleryItems.filter((g) => g.category === filter);

  const span = (s: string) =>
    s === 'tall' ? 'row-span-2' : s === 'wide' ? 'md:col-span-2' : '';

  const next = (d: number) => {
    if (lightbox === null) return;
    setLightbox((lightbox + d + list.length) % list.length);
  };

  return (
    <>
      <div className="mb-12 flex flex-wrap justify-center gap-3">
        {galleryCategories.map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={`rounded-full px-5 py-2.5 text-xs uppercase tracking-[0.14em] transition-all duration-300 ${
              filter === c
                ? 'bg-charcoal text-cream'
                : 'border border-charcoal/20 text-charcoal hover:border-champagne'
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <motion.div
        layout
        className="grid auto-rows-[260px] grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4"
      >
        <AnimatePresence mode="popLayout">
          {list.map((item, i) => (
            <motion.button
              key={item.image + i}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden rounded-3xl ${span(item.span)}`}
            >
              <Image
                src={img(item.image, 800)}
                alt={`${item.category} at Skin Therapy`}
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover transition-transform [transition-duration:1200ms] group-hover:scale-110"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-charcoal/0 opacity-0 transition-all duration-500 group-hover:bg-charcoal/40 group-hover:opacity-100">
                <Expand className="h-7 w-7 text-cream" />
              </div>
              <span className="absolute left-4 top-4 rounded-full bg-cream/90 px-3 py-1 text-[0.6rem] uppercase tracking-[0.14em] text-charcoal opacity-0 transition-opacity group-hover:opacity-100">
                {item.category}
              </span>
            </motion.button>
          ))}
        </AnimatePresence>
      </motion.div>

      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[400] flex items-center justify-center bg-charcoal/95 p-4 backdrop-blur-md"
            onClick={() => setLightbox(null)}
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close gallery"
              className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 text-cream"
            >
              <X className="h-6 w-6" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next(-1);
              }}
              aria-label="Previous"
              className="absolute left-4 flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 text-cream md:left-10"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            <motion.div
              key={lightbox}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative h-[80vh] w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={img(list[lightbox].image, 1600)}
                alt={`${list[lightbox].category} at Skin Therapy`}
                fill
                sizes="90vw"
                className="rounded-2xl object-contain"
              />
            </motion.div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                next(1);
              }}
              aria-label="Next"
              className="absolute right-4 flex h-12 w-12 items-center justify-center rounded-full border border-cream/20 text-cream md:right-10"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
