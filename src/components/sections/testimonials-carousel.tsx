'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { Star, ArrowLeft, ArrowRight, Play } from 'lucide-react';
import { testimonials } from '@/lib/content';
import { img } from '@/lib/images';

export function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const [dir, setDir] = useState(1);

  const go = (d: number) => {
    setDir(d);
    setIndex((prev) => (prev + d + testimonials.length) % testimonials.length);
  };

  const t = testimonials[index];

  return (
    <div className="grid items-center gap-12 lg:grid-cols-2">
      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-luxe">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0"
          >
            <Image src={img(t.image, 900)} alt={t.name} fill sizes="50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx/50 to-transparent" />
          </motion.div>
        </AnimatePresence>
        {t.video && (
          <button className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-ink/90 text-ivory shadow-luxe transition-transform hover:scale-105">
            <Play className="ml-1 h-7 w-7 fill-ivory" />
          </button>
        )}
      </div>

      <div>
        <div className="flex gap-1 text-champagne">
          {Array.from({ length: t.rating }).map((_, i) => (
            <Star key={i} className="h-5 w-5 fill-champagne" />
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.blockquote
            key={index}
            initial={{ opacity: 0, x: dir * 30 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: dir * -30 }}
            transition={{ duration: 0.5 }}
            className="mt-7 font-serif text-3xl leading-[1.25] text-ivory md:text-4xl"
          >
            {t.quote}
          </motion.blockquote>
        </AnimatePresence>
        <div className="mt-8 flex items-center justify-between">
          <div>
            <p className="font-serif text-xl text-ivory">{t.name}</p>
            <p className="text-sm text-ivory-dim">{t.role}</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-colors hover:bg-onyx hover:text-ivory"
            >
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/20 text-ivory transition-colors hover:bg-onyx hover:text-ivory"
            >
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
