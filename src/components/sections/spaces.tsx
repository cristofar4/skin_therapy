'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { spaces } from '@/lib/content';
import { img } from '@/lib/images';

export function Spaces() {
  const [active, setActive] = useState(0);

  return (
    <div className="grid gap-8 lg:grid-cols-12">
      <div className="lg:col-span-5">
        <ul className="flex flex-col">
          {spaces.map((s, i) => (
            <li key={s.name}>
              <button
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                className="group flex w-full items-center justify-between gap-4 border-b border-ivory/10 py-6 text-left"
              >
                <div>
                  <span
                    className={`font-serif text-3xl transition-colors duration-300 md:text-4xl ${
                      active === i ? 'text-champagne-deep' : 'text-ivory'
                    }`}
                  >
                    {s.name}
                  </span>
                  <motion.p
                    initial={false}
                    animate={{ height: active === i ? 'auto' : 0, opacity: active === i ? 1 : 0 }}
                    className="overflow-hidden text-sm text-ivory-dim"
                  >
                    <span className="block pt-2">{s.desc}</span>
                  </motion.p>
                </div>
                <span className="font-serif text-sm text-ivory-dim">
                  0{i + 1}
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-luxe lg:col-span-7 lg:aspect-auto">
        {spaces.map((s, i) => (
          <motion.div
            key={s.name}
            initial={false}
            animate={{ opacity: active === i ? 1 : 0, scale: active === i ? 1 : 1.06 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0"
          >
            <Image src={img(s.image, 1200)} alt={s.name} fill sizes="60vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-onyx/40 to-transparent" />
            <div className="absolute bottom-8 left-8">
              <p className="font-serif text-3xl text-ivory">{s.name}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
