import SectionTitle from "@/components/section-title";
import ProjectCard from "@/components/project-card";

const projects = [
  {
    title: "Compliance Reporting Automation",
    impact: "Replaced fragmented reporting workflows with centralized, repeatable outputs used across multiple portals.",
    stack: "Power BI, API Integration, Data Modeling",
  },
  {
    title: "Dynamic Role-Based Access Controls",
    impact: "Introduced governed access mapping to reduce unauthorized data visibility and simplify access administration.",
    stack: "Entra ID, Dynamic Filters, Governance Controls",
  },
  {
    title: "Security Monitoring and Analytics Uplift",
    impact: "Improved operational visibility for leaders by consolidating security-relevant reporting and usage patterns.",
    stack: "Dashboards, Data Pipelines, KPI Design",
  },
  {
    title: "Fraud Detection ML Pipeline",
    impact: "Designed model workflow to detect suspicious patterns with strong predictive performance on validation.",
    stack: "Vertex AI, BigQuery ML, Python",
  },
];

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-12 pb-12">
      <SectionTitle
        eyebrow="Projects"
        title="Security and automation projects"
        subtitle="Each project emphasizes risk reduction, governance quality, and measurable operational value."
      />
      <div className="grid md:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <ProjectCard key={p.title} index={i} title={p.title} impact={p.impact} stack={p.stack} />
        ))}
      </div>
    </main>
  );
}
