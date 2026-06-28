'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { SplitText } from '@/components/ui/split-text';
import { img } from '@/lib/images';

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  image: string;
}) {
  return (
    <section className="relative flex min-h-[72vh] items-end overflow-hidden pb-16 pt-40">
      <motion.div
        initial={{ scale: 1.15 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        className="absolute inset-0"
      >
        <Image
          src={img(image, 1800)}
          alt={title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-charcoal/20" />
      </motion.div>

      <div className="container-luxe relative z-10">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="eyebrow text-champagne-light"
        >
          {eyebrow}
        </motion.span>
        <SplitText as="h1" className="mt-5 max-w-4xl text-5xl text-cream md:text-7xl lg:text-8xl">
          {title}
        </SplitText>
        {intro && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-6 max-w-xl text-pretty text-lg text-cream/75"
          >
            {intro}
          </motion.p>
        )}
      </div>
    </section>
  );
}
