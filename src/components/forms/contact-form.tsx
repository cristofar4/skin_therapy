'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { Input, Textarea, Label } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const schema = z.object({
  name: z.string().min(2, 'Please enter your name'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().min(7, 'Please enter your phone number'),
  message: z.string().min(10, 'Please share a little more'),
});

type FormValues = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 800));
    setSent(true);
    reset();
    setTimeout(() => setSent(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <Label htmlFor="c-name">Full Name</Label>
          <Input id="c-name" {...register('name')} placeholder="Your name" />
          {errors.name && <p className="mt-1.5 text-xs text-blush-deep">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="c-phone">Phone</Label>
          <Input id="c-phone" {...register('phone')} placeholder="Your phone number" />
          {errors.phone && <p className="mt-1.5 text-xs text-blush-deep">{errors.phone.message}</p>}
        </div>
      </div>
      <div>
        <Label htmlFor="c-email">Email</Label>
        <Input id="c-email" type="email" {...register('email')} placeholder="Your email address" />
        {errors.email && <p className="mt-1.5 text-xs text-blush-deep">{errors.email.message}</p>}
      </div>
      <div>
        <Label htmlFor="c-message">How can we help?</Label>
        <Textarea id="c-message" rows={5} {...register('message')} placeholder="Tell us a little about what you are looking for" />
        {errors.message && <p className="mt-1.5 text-xs text-blush-deep">{errors.message.message}</p>}
      </div>

      <Button type="submit" variant="primary" size="lg" disabled={isSubmitting} className="w-full sm:w-auto">
        {isSubmitting ? 'Sending' : sent ? 'Message Sent' : 'Send Message'}
      </Button>

      {sent && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-champagne-deep"
        >
          <Check className="h-4 w-4" /> Thank you. We will be in touch very soon.
        </motion.p>
      )}
    </form>
  );
}
