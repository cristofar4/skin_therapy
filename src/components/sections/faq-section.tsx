import { Accordion } from '@/components/ui/accordion';
import { SectionHeading } from '@/components/ui/section-heading';
import { faqs } from '@/lib/content';

export function FaqSection() {
  return (
    <section className="container-luxe py-24">
      <div className="grid gap-12 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading
            eyebrow="Good To Know"
            title="Frequently asked questions"
            intro="Everything you need to know before your visit. Should you have any other questions, our concierge is always happy to help."
          />
        </div>
        <div className="lg:col-span-8">
          <Accordion items={faqs} />
        </div>
      </div>
    </section>
  );
}
