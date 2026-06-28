'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, X } from 'lucide-react';
import { nav } from '@/lib/site';
import { cn } from '@/lib/utils';
import { Logo } from './logo';
import { Button } from '@/components/ui/button';
import { Magnetic } from '@/components/ui/magnetic';

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-[100] transition-all duration-700',
        scrolled
          ? 'border-b border-charcoal/5 bg-cream/85 py-3 backdrop-blur-xl'
          : 'py-6'
      )}
    >
      <nav className="container-luxe flex items-center justify-between gap-6">
        <Logo />

        {/* Desktop navigation always visible */}
        <ul className="hidden items-center gap-1 lg:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => setOpenMenu(item.children ? item.label : null)}
                onMouseLeave={() => setOpenMenu(null)}
              >
                <Link
                  href={item.href}
                  className={cn(
                    'flex items-center gap-1 rounded-full px-4 py-2 text-[0.8rem] uppercase tracking-[0.14em] transition-colors duration-300',
                    active ? 'text-champagne-deep' : 'text-charcoal hover:text-champagne-deep'
                  )}
                >
                  {item.label}
                  {item.children && (
                    <ChevronDown
                      className={cn(
                        'h-3 w-3 transition-transform duration-300',
                        openMenu === item.label && 'rotate-180'
                      )}
                    />
                  )}
                </Link>

                {item.children && (
                  <AnimatePresence>
                    {openMenu === item.label && (
                      <motion.div
                        initial={{ opacity: 0, y: 14 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute left-1/2 top-full w-[320px] -translate-x-1/2 pt-4"
                      >
                        <div className="glass overflow-hidden rounded-3xl p-2">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className="group flex flex-col gap-0.5 rounded-2xl px-4 py-3 transition-colors duration-300 hover:bg-white/70"
                            >
                              <span className="font-serif text-lg text-charcoal transition-colors group-hover:text-champagne-deep">
                                {child.label}
                              </span>
                              <span className="text-xs text-charcoal-light">{child.desc}</span>
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </li>
            );
          })}
        </ul>

        <div className="hidden lg:block">
          <Magnetic>
            <Button asChild size="sm" variant="primary">
              <Link href="/book">Book Appointment</Link>
            </Button>
          </Magnetic>
        </div>

        {/* Mobile trigger (small screens only) */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="flex flex-col items-end gap-1.5 lg:hidden"
          aria-label="Open navigation menu"
        >
          <span className="h-px w-7 bg-charcoal" />
          <span className="h-px w-5 bg-charcoal" />
          <span className="h-px w-7 bg-charcoal" />
        </button>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] bg-charcoal/95 backdrop-blur-xl lg:hidden"
          >
            <div className="container-luxe flex h-full flex-col py-6">
              <div className="flex items-center justify-between">
                <Logo light />
                <button onClick={() => setMobileOpen(false)} aria-label="Close menu">
                  <X className="h-7 w-7 text-cream" />
                </button>
              </div>
              <ul className="mt-12 flex flex-1 flex-col gap-1 overflow-y-auto">
                {nav.map((item, i) => (
                  <motion.li
                    key={item.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06 }}
                  >
                    <Link
                      href={item.href}
                      className="block py-3 font-serif text-3xl text-cream"
                    >
                      {item.label}
                    </Link>
                    {item.children && (
                      <div className="ml-1 flex flex-col gap-2 border-l border-cream/15 pl-4 pb-3">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="text-sm uppercase tracking-[0.14em] text-cream/60"
                          >
                            {c.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.li>
                ))}
              </ul>
              <Button asChild variant="gold" className="mt-6 w-full">
                <Link href="/book">Book Appointment</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
