import Link from 'next/link';
import { cn } from '@/lib/utils';

export function Logo({ light = false, className }: { light?: boolean; className?: string }) {
  return (
    <Link
      href="/"
      aria-label="Skin Therapy Beauty and Spa home"
      className={cn('group flex items-center gap-3', className)}
    >
      <span className="relative flex h-11 w-11 items-center justify-center rounded-full border border-champagne/60">
        <span className="absolute inset-1 rounded-full border border-champagne/30 transition-transform duration-700 group-hover:rotate-45" />
        <span className="font-serif text-lg leading-none text-champagne-deep">St</span>
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            'font-serif text-xl tracking-wide',
            light ? 'text-cream' : 'text-charcoal'
          )}
        >
          Skin Therapy
        </span>
        <span
          className={cn(
            'text-[0.6rem] uppercase tracking-luxe',
            light ? 'text-cream/60' : 'text-charcoal-light'
          )}
        >
          Beauty and Spa
        </span>
      </span>
    </Link>
  );
}
