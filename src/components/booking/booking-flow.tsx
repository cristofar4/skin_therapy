'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { AnimatePresence, motion } from 'framer-motion';
import { Check, ChevronRight, ChevronLeft, Clock, Calendar, User, Sparkles, PartyPopper } from 'lucide-react';
import { treatments, therapists } from '@/lib/content';
import { img } from '@/lib/images';
import { formatNaira } from '@/lib/utils';
import { site, whatsappLink } from '@/lib/site';
import { Input, Label } from '@/components/ui/input';

const steps = ['Treatment', 'Therapist', 'Date', 'Time', 'Details', 'Confirmed'];

const times = ['10:00', '11:30', '13:00', '14:30', '16:00', '17:30'];

function nextDays(count: number) {
  const days = [];
  const today = new Date('2026-06-29');
  for (let i = 0; i < count; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() + i);
    days.push(d);
  }
  return days;
}

export function BookingFlow() {
  const [step, setStep] = useState(0);
  const [treatment, setTreatment] = useState<string | null>(null);
  const [therapist, setTherapist] = useState<string | null>(null);
  const [date, setDate] = useState<string | null>(null);
  const [time, setTime] = useState<string | null>(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const days = useMemo(() => nextDays(14), []);
  const selectedTreatment = treatments.find((t) => t.slug === treatment);

  const canNext =
    (step === 0 && treatment) ||
    (step === 1 && therapist) ||
    (step === 2 && date) ||
    (step === 3 && time) ||
    (step === 4 && name && phone);

  const go = (d: number) => setStep((s) => Math.max(0, Math.min(steps.length - 1, s + d)));

  const ref = `ST-${String(Math.floor(1000 + Math.random() * 9000))}`;

  return (
    <div className="mx-auto max-w-4xl">
      {/* Progress */}
      <div className="mb-12 flex items-center justify-between">
        {steps.map((label, i) => (
          <div key={label} className="flex flex-1 items-center">
            <div className="flex flex-col items-center gap-2">
              <div
                className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm transition-colors duration-500 ${
                  i < step
                    ? 'border-champagne bg-champagne text-charcoal'
                    : i === step
                      ? 'border-charcoal bg-charcoal text-cream'
                      : 'border-charcoal/20 text-charcoal-light'
                }`}
              >
                {i < step ? <Check className="h-4 w-4" /> : i + 1}
              </div>
              <span className="hidden text-[0.6rem] uppercase tracking-[0.12em] text-charcoal-light md:block">
                {label}
              </span>
            </div>
            {i < steps.length - 1 && (
              <div className="mx-2 h-px flex-1 bg-charcoal/15">
                <div
                  className="h-px bg-champagne transition-all duration-500"
                  style={{ width: i < step ? '100%' : '0%' }}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="min-h-[440px] rounded-[2rem] bg-card p-6 shadow-soft md:p-10">
        <AnimatePresence mode="wait">
          {/* Step 0 Treatment */}
          {step === 0 && (
            <StepShell key="s0" icon={<Sparkles />} title="Select your treatment">
              <div className="grid max-h-[420px] gap-3 overflow-y-auto pr-1 sm:grid-cols-2">
                {treatments.map((t) => (
                  <button
                    key={t.slug}
                    onClick={() => setTreatment(t.slug)}
                    className={`flex items-center gap-4 rounded-2xl border p-3 text-left transition-all ${
                      treatment === t.slug
                        ? 'border-champagne bg-champagne/10'
                        : 'border-charcoal/10 hover:border-charcoal/30'
                    }`}
                  >
                    <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl">
                      <Image src={img(t.image, 200)} alt={t.name} fill sizes="64px" className="object-cover" />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate font-serif text-lg text-charcoal">{t.name}</p>
                      <p className="text-xs text-charcoal-light">
                        {t.duration} · From {formatNaira(t.priceFrom)}
                      </p>
                    </div>
                  </button>
                ))}
              </div>
            </StepShell>
          )}

          {/* Step 1 Therapist */}
          {step === 1 && (
            <StepShell key="s1" icon={<User />} title="Choose your therapist">
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                <button
                  onClick={() => setTherapist('Any Available')}
                  className={`rounded-2xl border p-5 text-left transition-all ${
                    therapist === 'Any Available' ? 'border-champagne bg-champagne/10' : 'border-charcoal/10 hover:border-charcoal/30'
                  }`}
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-beige-200 font-serif text-xl text-champagne-deep">
                    St
                  </div>
                  <p className="mt-4 font-serif text-xl text-charcoal">Any Available</p>
                  <p className="text-sm text-charcoal-light">We will match you with the perfect expert</p>
                </button>
                {therapists.map((t) => (
                  <button
                    key={t.name}
                    onClick={() => setTherapist(t.name)}
                    className={`flex items-center gap-4 rounded-2xl border p-5 text-left transition-all ${
                      therapist === t.name ? 'border-champagne bg-champagne/10' : 'border-charcoal/10 hover:border-charcoal/30'
                    }`}
                  >
                    <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full">
                      <Image src={img(t.image, 200)} alt={t.name} fill sizes="56px" className="object-cover" />
                    </div>
                    <div>
                      <p className="font-serif text-xl text-charcoal">{t.name}</p>
                      <p className="text-xs text-charcoal-light">{t.specialty}</p>
                    </div>
                  </button>
                ))}
              </div>
            </StepShell>
          )}

          {/* Step 2 Date */}
          {step === 2 && (
            <StepShell key="s2" icon={<Calendar />} title="Pick a date">
              <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 lg:grid-cols-7">
                {days.map((d) => {
                  const key = d.toISOString().slice(0, 10);
                  const weekday = d.toLocaleDateString('en-NG', { weekday: 'short' });
                  return (
                    <button
                      key={key}
                      onClick={() => setDate(key)}
                      className={`flex flex-col items-center rounded-2xl border p-4 transition-all ${
                        date === key ? 'border-champagne bg-champagne/10' : 'border-charcoal/10 hover:border-charcoal/30'
                      }`}
                    >
                      <span className="text-[0.65rem] uppercase tracking-[0.12em] text-charcoal-light">
                        {weekday}
                      </span>
                      <span className="mt-1 font-serif text-2xl text-charcoal">{d.getDate()}</span>
                      <span className="text-[0.6rem] text-charcoal-light">
                        {d.toLocaleDateString('en-NG', { month: 'short' })}
                      </span>
                    </button>
                  );
                })}
              </div>
            </StepShell>
          )}

          {/* Step 3 Time */}
          {step === 3 && (
            <StepShell key="s3" icon={<Clock />} title="Select a time">
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {times.map((t) => (
                  <button
                    key={t}
                    onClick={() => setTime(t)}
                    className={`rounded-2xl border py-5 font-serif text-2xl transition-all ${
                      time === t ? 'border-champagne bg-champagne/10 text-champagne-deep' : 'border-charcoal/10 text-charcoal hover:border-charcoal/30'
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>
            </StepShell>
          )}

          {/* Step 4 Details */}
          {step === 4 && (
            <StepShell key="s4" icon={<User />} title="Your details">
              <div className="grid gap-5">
                <div>
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your full name" />
                </div>
                <div>
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="Your phone number" />
                </div>
                <div className="rounded-2xl bg-beige-100 p-5 text-sm text-charcoal-soft">
                  <p className="font-medium text-charcoal">Booking summary</p>
                  <ul className="mt-3 space-y-1">
                    <li>Treatment: {selectedTreatment?.name}</li>
                    <li>Therapist: {therapist}</li>
                    <li>Date: {date}</li>
                    <li>Time: {time}</li>
                  </ul>
                </div>
              </div>
            </StepShell>
          )}

          {/* Step 5 Confirmation */}
          {step === 5 && (
            <motion.div
              key="s5"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center py-6 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}
                className="flex h-20 w-20 items-center justify-center rounded-full bg-champagne text-charcoal"
              >
                <PartyPopper className="h-9 w-9" />
              </motion.div>
              <h3 className="mt-6 font-serif text-4xl text-charcoal">Your ritual is reserved</h3>
              <p className="mt-3 max-w-md text-charcoal-light">
                Thank you, {name || 'lovely guest'}. We cannot wait to welcome you. A gentle
                confirmation has been prepared with all of your details below.
              </p>

              <div className="mt-8 w-full max-w-md rounded-2xl border border-charcoal/10 bg-beige-50 p-6 text-left">
                <div className="flex items-center justify-between border-b border-charcoal/10 pb-4">
                  <span className="font-serif text-xl text-charcoal">Confirmation</span>
                  <span className="rounded-full bg-charcoal px-3 py-1 text-xs text-cream">{ref}</span>
                </div>
                <dl className="mt-4 space-y-3 text-sm">
                  <Row label="Treatment" value={selectedTreatment?.name ?? ''} />
                  <Row label="Therapist" value={therapist ?? ''} />
                  <Row label="Date" value={date ?? ''} />
                  <Row label="Time" value={time ?? ''} />
                  <Row label="Location" value={site.address} />
                  <Row label="From" value={selectedTreatment ? formatNaira(selectedTreatment.priceFrom) : ''} />
                </dl>
              </div>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={whatsappLink(
                    `Hello Skin Therapy, I have booked ${selectedTreatment?.name} on ${date} at ${time}. My reference is ${ref}.`
                  )}
                  target="_blank"
                  className="flex h-12 items-center justify-center rounded-full bg-champagne px-8 text-xs uppercase tracking-[0.16em] text-charcoal"
                >
                  Confirm on WhatsApp
                </Link>
                <Link
                  href="/"
                  className="flex h-12 items-center justify-center rounded-full border border-charcoal/20 px-8 text-xs uppercase tracking-[0.16em] text-charcoal"
                >
                  Return Home
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Controls */}
      {step < 5 && (
        <div className="mt-8 flex items-center justify-between">
          <button
            onClick={() => go(-1)}
            disabled={step === 0}
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-charcoal disabled:opacity-30"
          >
            <ChevronLeft className="h-4 w-4" /> Back
          </button>
          <button
            onClick={() => go(1)}
            disabled={!canNext}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-charcoal px-8 text-xs uppercase tracking-[0.16em] text-cream transition-opacity disabled:opacity-30"
          >
            {step === 4 ? 'Confirm Booking' : 'Continue'} <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      )}
    </div>
  );
}

function StepShell({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -30 }}
      transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="mb-7 flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-champagne/20 text-champagne-deep [&>svg]:h-5 [&>svg]:w-5">
          {icon}
        </span>
        <h3 className="font-serif text-3xl text-charcoal">{title}</h3>
      </div>
      {children}
    </motion.div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-charcoal-light">{label}</dt>
      <dd className="text-right font-medium text-charcoal">{value}</dd>
    </div>
  );
}
