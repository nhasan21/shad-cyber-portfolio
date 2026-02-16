import Link from "next/link";
import MotionReveal from "@/components/motion-reveal";
import SectionTitle from "@/components/section-title";
import ProjectCard from "@/components/project-card";

const outcomes = [
  { label: "Schools/Portals Impacted", value: "50+" },
  { label: "Leadership Adoption", value: "100+" },
  { label: "Manual Reporting Load", value: "Significantly Reduced" },
];

const featuredProjects = [
  {
    title: "Compliance Reporting Automation",
    impact: "Scaled reporting coverage across 50+ portals with centralized outputs and improved governance visibility.",
    stack: "Power BI, APIs, Data Pipelines",
  },
  {
    title: "Dynamic Access Control Uplift",
    impact: "Reduced exposure risk with governed role mappings and dynamic access filtering patterns.",
    stack: "Entra ID, Power BI, Security Model",
  },
  {
    title: "Fraud Detection ML Pipeline",
    impact: "Built a fraud detection workflow with strong classification performance and decision support visibility.",
    stack: "BigQuery, Vertex AI, Python",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-12 md:pt-20 pb-12">
      <MotionReveal>
        <section className="glass glass-accent p-8 md:p-10">
          <p className="metric-chip inline-block">Cybersecurity • Automation • Governance</p>
          <h1 className="mt-5 text-4xl md:text-6xl font-semibold leading-tight">
            I build secure systems that reduce risk and remove manual operational drag.
          </h1>
          <p className="mt-5 text-slate-300 max-w-3xl text-lg leading-relaxed">
            Cybersecurity-focused engineer delivering governance automation, access control uplift,
            and analytics-driven risk visibility.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/projects" className="rounded-xl bg-cyan-300 text-slate-950 px-5 py-3 font-medium hover:opacity-90 transition">
              View Projects
            </Link>
            <Link href="/contact" className="rounded-xl border border-white/15 px-5 py-3 hover:border-cyan-300/50 transition">
              Contact
            </Link>
          </div>
        </section>
      </MotionReveal>

      <section className="py-10">
        <SectionTitle title="Measured impact" subtitle="Visual proof first. Short, clear outcomes recruiters can scan fast." />
        <div className="grid md:grid-cols-3 gap-4">
          {outcomes.map((o, i) => (
            <MotionReveal key={o.label} delay={i * 0.06}>
              <div className="glass p-6">
                <p className="text-sm text-slate-400">{o.label}</p>
                <p className="mt-2 text-2xl md:text-3xl font-semibold">{o.value}</p>
              </div>
            </MotionReveal>
          ))}
        </div>
      </section>

      <section className="py-4">
        <SectionTitle title="Selected work impact" />
        <div className="grid md:grid-cols-3 gap-4">
          {featuredProjects.map((p, i) => (
            <ProjectCard key={p.title} index={i} title={p.title} impact={p.impact} stack={p.stack} />
          ))}
        </div>
      </section>
    </main>
  );
}
