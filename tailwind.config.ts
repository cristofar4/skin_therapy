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
        // Luxury wellness palette — Emerald & Gold
        // Warm ivory and sand grounds
        beige: {
          50: '#FAF7F0',
          100: '#F2ECE0',
          200: '#E7DDC9',
          300: '#D7C8AC',
          400: '#C3AE8B',
        },
        // Champagne gold accent
        champagne: {
          DEFAULT: '#C0A062',
          light: '#D8BE8A',
          deep: '#9A7B43',
        },
        // Soft clay rose for gentle warmth and validation states
        blush: {
          DEFAULT: '#C99A86',
          light: '#E6CFC2',
          deep: '#A9745C',
        },
        // Deep emerald, used for primary text and immersive dark sections
        charcoal: {
          DEFAULT: '#123A2C',
          soft: '#2C4C40',
          light: '#5A6A60',
        },
        // Signature emerald scale
        emerald: {
          DEFAULT: '#13412F',
          deep: '#0C2A1F',
          soft: '#27543F',
          mist: '#DDE7DD',
        },
        cream: '#F8F5EE',
        warmwhite: '#FCFAF4',
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
