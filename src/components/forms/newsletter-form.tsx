'use client';

import { useForm } from 'react-hook-form';
import { useState } from 'react';
import { ArrowRight, Check } from 'lucide-react';
import { cn } from '@/lib/utils';

type FormValues = { email: string };

export function NewsletterForm({ className }: { className?: string }) {
  const { register, handleSubmit, reset, formState } = useForm<FormValues>();
  const [done, setDone] = useState(false);

  const onSubmit = () => {
    setDone(true);
    reset();
    setTimeout(() => setDone(false), 4000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={cn('relative', className)}>
      <input
        type="email"
        placeholder="Your email address"
        {...register('email', { required: true, pattern: /^[^@\s]+@[^@\s]+\.[^@\s]+$/ })}
        className="h-12 w-full rounded-full border border-cream/20 bg-cream/5 pl-5 pr-14 text-sm text-cream placeholder:text-cream/40 focus:border-champagne focus:outline-none"
      />
      <button
        type="submit"
        aria-label="Subscribe to newsletter"
        className="absolute right-1.5 top-1.5 flex h-9 w-9 items-center justify-center rounded-full bg-champagne text-charcoal transition-transform hover:scale-105"
      >
        {done ? <Check className="h-4 w-4" /> : <ArrowRight className="h-4 w-4" />}
      </button>
      {formState.errors.email && (
        <p className="mt-2 pl-5 text-xs text-blush-deep">Please enter a valid email.</p>
      )}
      {done && <p className="mt-2 pl-5 text-xs text-champagne-light">Welcome to our circle.</p>}
    </form>
  );
}
