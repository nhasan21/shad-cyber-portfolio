type Props = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ eyebrow, title, subtitle }: Props) {
  return (
    <div className="mb-6">
      {eyebrow ? <p className="metric-chip">{eyebrow}</p> : null}
      <h2 className="mt-4 text-2xl md:text-3xl font-semibold">{title}</h2>
      {subtitle ? <p className="mt-2 text-slate-300 max-w-3xl">{subtitle}</p> : null}
    </div>
  );
}
