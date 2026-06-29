import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, ArrowUpRight } from 'lucide-react';
import { blogPosts } from '@/lib/content';
import { img } from '@/lib/images';
import { CtaBanner } from '@/components/sections/cta-banner';
import { SplitText } from '@/components/ui/split-text';
import { Reveal } from '@/components/ui/reveal';

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const more = blogPosts.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <article>
      <section className="relative flex min-h-[68vh] items-end overflow-hidden pb-16 pt-40">
        <Image
          src={img(post.image, 1800)}
          alt={post.title}
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx/85 via-onyx/40 to-onyx/20" />
        <div className="container-luxe relative z-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-ivory/70 hover:text-champagne-light"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Journal
          </Link>
          <span className="eyebrow mt-6 text-champagne-light">{post.category}</span>
          <SplitText as="h1" className="mt-4 max-w-4xl text-4xl text-ivory md:text-6xl">
            {post.title}
          </SplitText>
          <div className="mt-6 flex items-center gap-4 text-xs uppercase tracking-[0.14em] text-ivory/70">
            <span>{post.date}</span>
            <span className="h-1 w-1 rounded-full bg-champagne" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </section>

      <section className="container-luxe py-20">
        <div className="mx-auto max-w-2xl">
          <p className="font-serif text-2xl leading-relaxed text-ivory md:text-3xl">
            {post.excerpt}
          </p>
          <div className="mt-10 space-y-6 text-pretty text-lg leading-relaxed text-ivory-soft">
            {post.body.map((para, i) => (
              <Reveal key={i}>
                <p>{para}</p>
              </Reveal>
            ))}
          </div>

          <div className="mt-14 rounded-[1.75rem] bg-surface p-8 text-center">
            <p className="font-serif text-2xl text-ivory">Ready to experience it yourself?</p>
            <p className="mt-2 text-sm text-ivory-dim">
              Book a consultation and let our therapists craft a ritual for your skin.
            </p>
            <Link
              href="/book"
              className="mt-6 inline-flex h-12 items-center justify-center gap-2 rounded-full bg-onyx px-8 text-xs uppercase tracking-[0.16em] text-ivory"
            >
              Book Appointment
            </Link>
          </div>
        </div>
      </section>

      <section className="container-luxe pb-24">
        <h2 className="mb-10 font-serif text-3xl text-ivory">Continue reading</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {more.map((p) => (
            <Link key={p.slug} href={`/blog/${p.slug}`} className="group flex flex-col">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] shadow-soft">
                <Image src={img(p.image, 700)} alt={p.title} fill sizes="33vw" className="object-cover transition-transform duration-700 group-hover:scale-110" />
              </div>
              <h3 className="mt-5 font-serif text-xl text-ivory transition-colors group-hover:text-champagne-deep">
                {p.title}
              </h3>
              <span className="mt-2 inline-flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-champagne-deep">
                Read <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <CtaBanner />
    </article>
  );
}
