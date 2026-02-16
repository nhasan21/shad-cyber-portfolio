import MotionReveal from "@/components/motion-reveal";
import SectionTitle from "@/components/section-title";

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-12 pb-12">
      <MotionReveal>
        <div className="glass p-8">
          <SectionTitle
            eyebrow="About"
            title="Cybersecurity practitioner focused on practical, measurable outcomes."
            subtitle="I focus on governance automation, secure access patterns, and operational reporting that improves decision quality."
          />
          <div className="grid md:grid-cols-2 gap-6 text-slate-300 leading-relaxed">
            <p>
              My approach combines security fundamentals with execution speed. I prioritize solutions that are controlled,
              explainable, and usable by stakeholders across technical and non-technical teams.
            </p>
            <p>
              I work across security operations support, access governance, analytics, and automation. I aim to reduce risk
              while improving operational efficiency through well-structured pipelines and visibility layers.
            </p>
          </div>
        </div>
      </MotionReveal>
    </main>
  );
}
