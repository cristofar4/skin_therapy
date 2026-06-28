'use client';

export function Marquee({
  items,
  className,
}: {
  items: string[];
  className?: string;
}) {
  const doubled = [...items, ...items];
  return (
    <div className={`relative flex overflow-hidden ${className ?? ''}`}>
      <div className="flex shrink-0 animate-marquee items-center">
        {doubled.map((item, i) => (
          <span key={i} className="flex items-center">
            <span className="px-8 font-serif text-3xl text-charcoal/80 md:text-5xl">{item}</span>
            <span className="text-champagne">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
