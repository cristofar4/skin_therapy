import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium uppercase tracking-[0.18em] transition-all duration-500 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne focus-visible:ring-offset-2 focus-visible:ring-offset-cream',
  {
    variants: {
      variant: {
        primary:
          'bg-charcoal text-cream hover:bg-champagne-deep shadow-soft hover:shadow-glow',
        gold: 'bg-champagne text-charcoal hover:bg-champagne-deep hover:text-cream shadow-soft',
        outline:
          'border border-charcoal/30 text-charcoal hover:border-champagne hover:text-champagne-deep bg-transparent',
        ghost: 'text-charcoal hover:text-champagne-deep bg-transparent',
        light: 'bg-cream text-charcoal hover:bg-white shadow-soft',
      },
      size: {
        sm: 'h-10 px-6 text-[0.7rem]',
        md: 'h-12 px-8',
        lg: 'h-14 px-10 text-[0.78rem]',
      },
    },
    defaultVariants: { variant: 'primary', size: 'md' },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
