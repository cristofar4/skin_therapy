import { TreatmentCard } from '@/components/sections/treatment-card';
import { treatmentsByCategory, type Treatment } from '@/lib/content';

export function CategoryGrid({ category }: { category: Treatment['category'] }) {
  const list = treatmentsByCategory(category);
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {list.map((t, i) => (
        <TreatmentCard key={t.slug} treatment={t} index={i} />
      ))}
    </div>
  );
}
