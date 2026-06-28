import type { Metadata } from 'next';
import { BookingFlow } from '@/components/booking/booking-flow';
import { SectionHeading } from '@/components/ui/section-heading';

export const metadata: Metadata = {
  title: 'Book Appointment',
  description:
    'Reserve your luxury treatment at Skin Therapy Beauty and Spa Port Harcourt through our elegant step by step booking experience.',
};

export default function BookPage() {
  return (
    <section className="pb-28 pt-40">
      <div className="container-luxe">
        <div className="mb-16 flex flex-col items-center text-center">
          <SectionHeading
            align="center"
            eyebrow="Book Appointment"
            title="Reserve your moment of calm"
            intro="A few gentle steps and your ritual is booked. Choose your treatment, your therapist and your time."
          />
        </div>
        <BookingFlow />
      </div>
    </section>
  );
}
