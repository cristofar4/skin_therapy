'use client';

import { Counter } from '@/components/ui/counter';
import { Reveal } from '@/components/ui/reveal';
import { stats } from '@/lib/content';

export function Stats() {
  return (
    <section className="border-y border-charcoal/10 bg-beige-50/60 py-20">
      <div className="container-luxe grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-5">
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i}>
            <div className="flex flex-col items-center text-center">
              <span className="font-serif text-5xl text-champagne-deep md:text-6xl">
                <Counter value={s.value} suffix={s.suffix} />
              </span>
              <span className="mt-3 max-w-[10rem] text-xs uppercase tracking-[0.14em] text-charcoal-soft">
                {s.label}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
