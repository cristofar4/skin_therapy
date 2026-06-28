import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
    './src/app/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: { '2xl': '1440px' },
    },
    extend: {
      colors: {
        // Luxury wellness palette
        beige: {
          50: '#FBF8F4',
          100: '#F6F0E8',
          200: '#EFE6D8',
          300: '#E4D6C1',
          400: '#D6C2A6',
        },
        champagne: {
          DEFAULT: '#C9A86A',
          light: '#DCC290',
          deep: '#A8854B',
        },
        blush: {
          DEFAULT: '#E7C9C2',
          light: '#F3E1DC',
          deep: '#D2A89E',
        },
        charcoal: {
          DEFAULT: '#2B2724',
          soft: '#4A443E',
          light: '#6E665D',
        },
        cream: '#FCFAF6',
        warmwhite: '#FEFCF9',
        // shadcn tokens
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        serif: ['var(--font-display)', 'Cormorant Garamond', 'serif'],
        sans: ['var(--font-body)', 'Jost', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 4px)',
        sm: 'calc(var(--radius) - 8px)',
        '4xl': '2.5rem',
      },
      letterSpacing: {
        luxe: '0.22em',
        wider2: '0.3em',
      },
      boxShadow: {
        luxe: '0 30px 80px -30px rgba(43, 39, 36, 0.25)',
        soft: '0 20px 60px -25px rgba(43, 39, 36, 0.18)',
        glow: '0 0 60px -10px rgba(201, 168, 106, 0.35)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.3s ease-out',
        'accordion-up': 'accordion-up 0.3s ease-out',
        marquee: 'marquee 30s linear infinite',
        float: 'float 6s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
};

export default config;
