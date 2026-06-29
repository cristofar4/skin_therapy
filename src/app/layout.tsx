import type { Metadata } from 'next';
import { Cormorant_Garamond, Jost } from 'next/font/google';
import './globals.css';
import { site } from '@/lib/site';
import { SmoothScroll } from '@/components/providers/smooth-scroll';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { Preloader } from '@/components/layout/preloader';
import { Cursor } from '@/components/ui/cursor';
import { FloatingWidgets } from '@/components/layout/floating-widgets';
import { ParticleBackground } from '@/components/three/particle-background';

const display = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

const body = Jost({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-body',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(site.website),
  title: {
    default: `${site.name} | Luxury Beauty and Wellness in ${site.city}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    'luxury spa Port Harcourt',
    'skin therapy',
    'facials Port Harcourt',
    'massage Port Harcourt',
    'beauty spa Nigeria',
    'skin care clinic',
    'wellness retreat',
  ],
  openGraph: {
    title: `${site.name} | Luxury Beauty and Wellness`,
    description: site.description,
    type: 'website',
    locale: 'en_NG',
    siteName: site.name,
  },
  twitter: { card: 'summary_large_image', title: site.name, description: site.description },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'DaySpa',
  name: site.name,
  description: site.description,
  image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef',
  url: site.website,
  telephone: site.phoneIntl,
  email: site.email,
  priceRange: '$$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '122c General Diriyai Lane, New GRA',
    addressLocality: site.city,
    addressRegion: site.region,
    addressCountry: 'NG',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 4.8262609, longitude: 6.9929859 },
  openingHours: 'Mo-Sa 10:00-19:00',
  aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '9500' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body className="relative min-h-screen overflow-x-hidden bg-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ParticleBackground />
        <Preloader />
        <Cursor />
        <SmoothScroll>
          <Navbar />
          <main className="relative z-10">{children}</main>
          <Footer />
        </SmoothScroll>
        <FloatingWidgets />
      </body>
    </html>
  );
}
