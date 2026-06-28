'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Check, Crown } from 'lucide-react';
import { memberships } from '@/lib/content';
import { formatNaira } from '@/lib/utils';
import { Button } from '@/components/ui/button';

export function MembershipCards() {
  return (
    <div className="grid gap-6 lg:grid-cols-4">
      {memberships.map((m, i) => (
        <motion.div
          key={m.name}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
          className={`relative flex flex-col rounded-[2rem] p-8 ${
            m.featured
              ? 'bg-charcoal text-cream shadow-luxe ring-1 ring-champagne/40'
              : 'bg-card text-charcoal shadow-soft'
          }`}
        >
          {m.featured && (
            <span className="absolute -top-3 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-champagne px-4 py-1.5 text-[0.65rem] uppercase tracking-[0.16em] text-charcoal">
              <Crown className="h-3 w-3" /> Most Loved
            </span>
          )}
          <h3 className={`font-serif text-2xl ${m.featured ? 'text-cream' : 'text-charcoal'}`}>
            {m.name}
          </h3>
          <p className={`mt-2 text-sm ${m.featured ? 'text-cream/60' : 'text-charcoal-light'}`}>
            {m.blurb}
          </p>
          <div className="mt-6 flex items-end gap-1">
            <span className="font-serif text-4xl text-champagne-deep">
              {formatNaira(m.price)}
            </span>
            <span className={`mb-1 text-xs ${m.featured ? 'text-cream/50' : 'text-charcoal-light'}`}>
              {m.period}
            </span>
          </div>

          <ul className="mt-7 flex flex-1 flex-col gap-3">
            {m.perks.map((perk) => (
              <li key={perk} className="flex items-start gap-3 text-sm">
                <Check
                  className={`mt-0.5 h-4 w-4 shrink-0 ${
                    m.featured ? 'text-champagne-light' : 'text-champagne-deep'
                  }`}
                />
                <span className={m.featured ? 'text-cream/80' : 'text-charcoal-soft'}>{perk}</span>
              </li>
            ))}
          </ul>

          <Button
            asChild
            variant={m.featured ? 'gold' : 'outline'}
            className={`mt-8 w-full ${m.featured ? '' : ''}`}
          >
            <Link href="/book">Become a Member</Link>
          </Button>
        </motion.div>
      ))}
    </div>
  );
}
