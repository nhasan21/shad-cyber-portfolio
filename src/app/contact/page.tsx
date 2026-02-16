import { Github, Linkedin, Mail } from "lucide-react";
import SectionTitle from "@/components/section-title";

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-6xl px-6 pt-12 pb-12">
      <div className="glass p-8">
        <SectionTitle
          eyebrow="Contact"
          title="Let’s discuss cybersecurity impact"
          subtitle="Open to cybersecurity analyst and security operations opportunities."
        />

        <div className="flex flex-wrap gap-3">
          <a className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 hover:border-cyan-300/50 transition" href="mailto:shadhasan.official@gmail.com">
            <Mail size={16} /> Email
          </a>
          <a className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 hover:border-cyan-300/50 transition" href="https://github.com/" target="_blank" rel="noreferrer">
            <Github size={16} /> GitHub
          </a>
          <a className="inline-flex items-center gap-2 rounded-xl border border-white/15 px-4 py-2 hover:border-cyan-300/50 transition" href="https://linkedin.com/" target="_blank" rel="noreferrer">
            <Linkedin size={16} /> LinkedIn
          </a>
        </div>
      </div>
    </main>
  );
}
