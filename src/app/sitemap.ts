import type { MetadataRoute } from 'next';
import { site } from '@/lib/site';
import { blogPosts } from '@/lib/content';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/treatments',
    '/skin-care',
    '/facials',
    '/body-therapy',
    '/massage',
    '/gallery',
    '/membership',
    '/testimonials',
    '/blog',
    '/book',
    '/contact',
    '/gift-cards',
  ];

  const now = new Date();

  return [
    ...routes.map((r) => ({
      url: `${site.website}${r}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: r === '' ? 1 : 0.7,
    })),
    ...blogPosts.map((p) => ({
      url: `${site.website}/blog/${p.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    })),
  ];
}
