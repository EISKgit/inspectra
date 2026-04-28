// apps/web/components/StatCard.tsx
type Props = {
  title: string;
  value: string;
  subtitle: string;
};

export default function StatCard({ title, value, subtitle }: Props) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900 p-5">
      <p className="text-sm text-slate-400">{title}</p>
      <h3 className="mt-2 text-3xl font-bold text-white">{value}</h3>
      <p className="mt-2 text-sm text-slate-500">{subtitle}</p>
    </div>
  );
}