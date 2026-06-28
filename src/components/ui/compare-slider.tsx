'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';

export function CompareSlider({
  before,
  after,
  beforeAlt = 'Before treatment',
  afterAlt = 'After treatment',
}: {
  before: string;
  after: string;
  beforeAlt?: string;
  afterAlt?: string;
}) {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = (clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(0, Math.min(100, p)));
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[4/5] w-full select-none overflow-hidden rounded-4xl md:aspect-[3/2]"
      onMouseMove={(e) => dragging.current && update(e.clientX)}
      onMouseDown={(e) => {
        dragging.current = true;
        update(e.clientX);
      }}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchMove={(e) => update(e.touches[0].clientX)}
    >
      <Image src={after} alt={afterAlt} fill className="object-cover" sizes="100vw" />
      <div className="absolute right-5 top-5 rounded-full bg-charcoal/70 px-4 py-1.5 text-xs uppercase tracking-[0.16em] text-cream backdrop-blur">
        After
      </div>

      <div className="absolute inset-0 overflow-hidden" style={{ width: `${pos}%` }}>
        <Image src={before} alt={beforeAlt} fill className="object-cover" sizes="100vw" />
        <div className="absolute left-5 top-5 rounded-full bg-charcoal/70 px-4 py-1.5 text-xs uppercase tracking-[0.16em] text-cream backdrop-blur">
          Before
        </div>
      </div>

      <div
        className="absolute inset-y-0 z-10 flex w-1 items-center justify-center bg-cream"
        style={{ left: `calc(${pos}% - 2px)` }}
      >
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-charcoal/10 bg-cream shadow-luxe">
          <span className="text-champagne-deep">⟷</span>
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Compare before and after"
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}
