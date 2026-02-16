import SectionTitle from "@/components/section-title";

export default function ResumePage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-12 pb-12">
      <div className="glass p-8">
        <SectionTitle
          eyebrow="Resume"
          title="Experience snapshot and downloadable resume"
          subtitle="Use this page for quick scanning and direct resume download."
        />

        <div className="grid md:grid-cols-2 gap-6">
          <div className="text-slate-300 space-y-3">
            <p>Focus areas:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Security governance and reporting automation</li>
              <li>Identity and access control design patterns</li>
              <li>Analytics-driven risk visibility</li>
              <li>Cloud and data workflow implementation</li>
            </ul>
          </div>

          <div className="flex items-start">
            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="rounded-xl bg-cyan-300 text-slate-950 px-5 py-3 font-medium hover:opacity-90 transition"
            >
              Open Resume PDF
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}
