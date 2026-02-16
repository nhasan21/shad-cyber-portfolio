import MotionReveal from "@/components/motion-reveal";
import SectionTitle from "@/components/section-title";

export default function CaseStudiesPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-12 pb-12">
      <SectionTitle
        eyebrow="Case Studies"
        title="Deep dives: problem, approach, impact"
        subtitle="Concise case studies that show decision logic, implementation choices, and outcomes."
      />

      <div className="space-y-4">
        <MotionReveal>
          <article className="glass p-6">
            <h3 className="text-xl font-semibold">Case Study 1: Compliance Reporting Automation</h3>
            <p className="mt-3 text-slate-300">
              Consolidated multi-portal reporting into a controlled workflow to reduce manual effort and improve reporting consistency.
            </p>
            <ul className="mt-3 text-slate-300 list-disc pl-5 space-y-1">
              <li>Challenge: fragmented reporting sources and inconsistent cycles</li>
              <li>Approach: API-based extraction plus centralized data model</li>
              <li>Impact: improved visibility and higher reporting reliability</li>
            </ul>
          </article>
        </MotionReveal>

        <MotionReveal delay={0.06}>
          <article className="glass p-6">
            <h3 className="text-xl font-semibold">Case Study 2: Dynamic Access Governance</h3>
            <p className="mt-3 text-slate-300">
              Implemented access logic that aligns report visibility with role definitions to reduce overexposure risk.
            </p>
            <ul className="mt-3 text-slate-300 list-disc pl-5 space-y-1">
              <li>Challenge: broad visibility across sensitive datasets</li>
              <li>Approach: governed role mapping with dynamic filtering</li>
              <li>Impact: tighter control posture and cleaner access operations</li>
            </ul>
          </article>
        </MotionReveal>
      </div>
    </main>
  );
}
