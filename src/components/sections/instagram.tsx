'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Instagram as InstaIcon } from 'lucide-react';
import { img, images } from '@/lib/images';
import { site } from '@/lib/site';

const feed = [images.g1, images.g4, images.g7, images.g10, images.g3, images.g12];

export function Instagram() {
  return (
    <section className="py-24">
      <div className="container-luxe">
        <div className="mb-12 flex flex-col items-center text-center">
          <span className="eyebrow">Follow Our Journey</span>
          <h2 className="mt-5 text-balance text-4xl text-ivory md:text-6xl">
            Moments from the sanctuary
          </h2>
          <Link
            href={site.socials.instagram}
            target="_blank"
            className="mt-5 inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-champagne-deep link-underline"
          >
            <InstaIcon className="h-4 w-4" /> @skintherapybeauty
          </Link>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-6">
        {feed.map((id, i) => (
          <Link
            key={i}
            href={site.socials.instagram}
            target="_blank"
            className="group relative aspect-square overflow-hidden"
          >
            <Image src={img(id, 500)} alt="Instagram moment" fill sizes="20vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 flex items-center justify-center bg-onyx/0 opacity-0 transition-all duration-500 group-hover:bg-onyx/40 group-hover:opacity-100">
              <InstaIcon className="h-7 w-7 text-ivory" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
