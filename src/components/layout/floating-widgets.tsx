'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowUp, MessageCircle, X, Calendar } from 'lucide-react';
import { whatsappLink } from '@/lib/site';

export function FloatingWidgets() {
  const [showTop, setShowTop] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const hideSticky = pathname === '/book';

  return (
    <>
      {/* Sticky booking button (mobile) */}
      {!hideSticky && (
        <div className="fixed inset-x-0 bottom-0 z-[120] p-4 lg:hidden">
          <Link
            href="/book"
            className="flex h-14 w-full items-center justify-center gap-2 rounded-full bg-onyx text-sm uppercase tracking-[0.18em] text-ivory shadow-luxe"
          >
            <Calendar className="h-4 w-4" />
            Book Appointment
          </Link>
        </div>
      )}

      {/* Floating action stack */}
      <div className="fixed bottom-6 right-6 z-[120] flex flex-col items-end gap-3">
        <AnimatePresence>
          {chatOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="glass w-72 rounded-3xl p-5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-champagne text-ivory font-serif">
                  St
                </span>
                <div>
                  <p className="font-serif text-lg leading-none text-ivory">Skin Therapy</p>
                  <p className="text-xs text-green-600">Online now</p>
                </div>
              </div>
              <p className="mt-4 rounded-2xl bg-ivory/10 p-3 text-sm text-ivory-soft">
                Hello and welcome. How may we help you feel beautiful today?
              </p>
              <Link
                href={whatsappLink('Hello Skin Therapy, I have a question.')}
                target="_blank"
                className="mt-4 flex h-11 items-center justify-center rounded-full bg-onyx text-xs uppercase tracking-[0.16em] text-ivory"
              >
                Continue on WhatsApp
              </Link>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {showTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="flex h-12 w-12 items-center justify-center rounded-full border border-ivory/15 bg-ink/90 text-ivory shadow-soft backdrop-blur transition-colors hover:bg-onyx hover:text-ivory"
            >
              <ArrowUp className="h-4 w-4" />
            </motion.button>
          )}
        </AnimatePresence>

        <button
          onClick={() => setChatOpen((v) => !v)}
          aria-label="Open live chat"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-champagne text-ivory shadow-glow transition-transform hover:scale-105"
        >
          {chatOpen ? <X className="h-5 w-5" /> : <MessageCircle className="h-5 w-5" />}
        </button>
      </div>
    </>
  );
}
