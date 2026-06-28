# Skin Therapy Beauty and Spa

A world class luxury beauty and wellness website for **Skin Therapy Beauty and Spa**, Port Harcourt. Designed and built as an immersive, award worthy digital sanctuary rather than a typical spa website.

> Where Skin Becomes Art.

## Business

- **Name** Skin Therapy Beauty and Spa
- **Location** 122c General Diriyai Lane, New GRA, Port Harcourt, Rivers State, Nigeria
- **Phone and WhatsApp** 0912 828 6161
- **Website** skintherapybeauty.com

## Technology

- **Next.js 15** App Router with TypeScript
- **Tailwind CSS** custom luxury design system
- **GSAP** with ScrollTrigger and SplitText for scroll storytelling, pinned sections, horizontal scroll and reveal animations
- **Framer Motion** page level micro interactions, carousels, layout animations
- **Lenis** smooth scroll
- **Three.js** with **React Three Fiber** ambient champagne particle field
- **Shadcn UI** style primitives with Radix
- **React Hook Form** with Zod for the booking and contact experiences

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

```bash
npm run build   # production build
npm start       # serve the production build
```

## Design system

**Color palette** (luxury wellness)

| Token | Use |
| --- | --- |
| Warm white and cream | Page canvas |
| Soft beige | Section grounds and surfaces |
| Champagne gold | Accents, highlights, calls to action |
| Soft blush | Gentle warmth and validation states |
| Deep charcoal | Typography and immersive dark sections |

**Typography**

- Display serif **Cormorant Garamond** for headings, for elegance and editorial calm
- Body sans **Jost** for clean, modern, highly legible copy

**Motion language**

- Slow, intentional easing curves
- SplitText reveals on headings
- Pinned scroll storytelling and a horizontal treatment rail
- Parallax imagery, counter animations, infinite marquees, magnetic buttons and a custom cursor

## Pages

Home, About, Treatments, Skin Care, Facials, Body Therapy, Massage, Beauty Gallery, Membership, Testimonials, Blog, Book Appointment, Contact, Gift Cards.

## Features

Online multi step booking flow, WhatsApp integration, Google Maps, frequently asked questions, gift cards, newsletter, Instagram gallery, live chat panel, sticky booking button, back to top control, full SEO metadata, JSON LD structured data, sitemap and robots.

## Photography

Imagery is sourced from professional photography on the Unsplash content delivery network and is centralised in `src/lib/images.ts`. When the studio is ready, replace these references with the spa's own brand photography in one place to refresh the entire site.

## Project structure

```
src/
  app/            Routes (App Router) and SEO files
  components/
    booking/      Multi step booking flow
    forms/        Contact and newsletter forms
    gallery/      Masonry gallery and lightbox
    home/         Home page sections
    layout/       Navbar, footer, preloader, floating widgets
    sections/     Reusable page sections
    three/        React Three Fiber particle background
    treatments/   Treatment explorer and category grids
    ui/           Design system primitives
  hooks/          useGSAP helper
  lib/            Site config, content data, image registry, utilities
```
