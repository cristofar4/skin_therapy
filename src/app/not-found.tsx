import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <section className="flex min-h-[80vh] items-center justify-center px-6 pt-32 text-center">
      <div className="flex flex-col items-center">
        <span className="eyebrow">Lost In Calm</span>
        <h1 className="mt-6 font-serif text-7xl text-ivory md:text-9xl">404</h1>
        <p className="mt-4 max-w-md text-pretty text-ivory-dim">
          The page you are looking for has drifted away. Let us guide you back to the sanctuary.
        </p>
        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <Button asChild variant="primary">
            <Link href="/">Return Home</Link>
          </Button>
          <Button asChild variant="outline">
            <Link href="/book">Book Appointment</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
