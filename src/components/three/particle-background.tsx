'use client';

import dynamic from 'next/dynamic';

const ParticleField = dynamic(
  () => import('./particle-field').then((m) => m.ParticleField),
  { ssr: false }
);

export function ParticleBackground() {
  return <ParticleField />;
}
