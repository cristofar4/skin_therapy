import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { PageHero } from '@/components/sections/page-hero';
import { SectionHeading } from '@/components/ui/section-heading';
import { Reveal, RevealGroup } from '@/components/ui/reveal';
import { CtaBanner } from '@/components/sections/cta-banner';
import { img, images } from '@/lib/images';
import { blogPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Wellness Journal',
  description:
    'Skin care tips, beauty advice and healthy lifestyle wisdom from the experts at Skin Therapy Beauty and Spa Port Harcourt.',
};

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title="Wisdom for radiant living"
        intro="Skin care tips, beauty advice and gentle reflections on living beautifully, from our team of experts."
        image={images.blog3}
      />

      <section className="container-luxe py-24">
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="group grid items-center gap-10 lg:grid-cols-2"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem] shadow-luxe">
              <Image
                src={img(featured.image, 1200)}
                alt={featured.title}
                fill
                sizes="50vw"
                className="object-cover transition-transform [transition-duration:1200ms] group-hover:scale-105"
              />
              <span className="absolute left-6 top-6 rounded-full bg-ink/90 px-4 py-1.5 text-[0.65rem] uppercase tracking-[0.14em] text-ivory">
                Featured
              </span>
            </div>
            <div>
              <span className="eyebrow">{featured.category}</span>
              <h2 className="mt-5 font-serif text-4xl text-ivory md:text-5xl">{featured.title}</h2>
              <p className="mt-5 text-pretty text-lg leading-relaxed text-ivory-dim">
                {featured.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-4 text-xs uppercase tracking-[0.14em] text-ivory-dim">
                <span>{featured.date}</span>
                <span className="h-1 w-1 rounded-full bg-champagne" />
                <span>{featured.readTime}</span>
              </div>
              <span className="mt-7 inline-flex items-center gap-2 text-sm uppercase tracking-[0.14em] text-champagne-deep link-underline">
                Read Article <ArrowUpRight className="h-4 w-4" />
              </span>
            </div>
          </Link>
        </Reveal>
      </section>

      <section className="container-luxe pb-24">
        <div className="mb-14">
          <SectionHeading eyebrow="More Reading" title="From the journal" />
        </div>
        <RevealGroup className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {rest.map((post) => (
            <Reveal key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group flex flex-col">
                <div className="relative aspect-[4/3] overflow-hidden rounded-[1.75rem] shadow-soft">
                  <Image
                    src={img(post.image, 800)}
                    alt={post.title}
                    fill
                    sizes="33vw"
                    className="object-cover transition-transform [transition-duration:1200ms] group-hover:scale-110"
                  />
                </div>
                <span className="mt-5 text-xs uppercase tracking-[0.14em] text-champagne-deep">
                  {post.category}
                </span>
                <h3 className="mt-3 font-serif text-2xl text-ivory transition-colors group-hover:text-champagne-deep">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-ivory-dim">{post.excerpt}</p>
                <div className="mt-4 flex items-center gap-3 text-xs uppercase tracking-[0.14em] text-ivory-dim">
                  <span>{post.date}</span>
                  <span className="h-1 w-1 rounded-full bg-champagne" />
                  <span>{post.readTime}</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </RevealGroup>
      </section>

      <CtaBanner />
    </>
  );
}
