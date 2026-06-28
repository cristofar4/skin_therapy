import * as React from 'react';
import { cn } from '@/lib/utils';

export const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => (
    <input
      type={type}
      ref={ref}
      className={cn(
        'h-12 w-full rounded-full border border-charcoal/15 bg-white/60 px-5 text-sm text-charcoal placeholder:text-charcoal-light/70 transition-colors focus:border-champagne focus:outline-none focus:ring-2 focus:ring-champagne/30',
        className
      )}
      {...props}
    />
  )
);
Input.displayName = 'Input';

export const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <textarea
    ref={ref}
    className={cn(
      'w-full rounded-3xl border border-charcoal/15 bg-white/60 px-5 py-4 text-sm text-charcoal placeholder:text-charcoal-light/70 transition-colors focus:border-champagne focus:outline-none focus:ring-2 focus:ring-champagne/30',
      className
    )}
    {...props}
  />
));
Textarea.displayName = 'Textarea';

export function Label({ className, ...props }: React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <label
      className={cn('mb-2 block text-xs uppercase tracking-[0.16em] text-charcoal-soft', className)}
      {...props}
    />
  );
}
