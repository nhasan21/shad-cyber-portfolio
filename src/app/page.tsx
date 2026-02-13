"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Activity, Github, Linkedin, Mail } from "lucide-react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

const cards = [
  {
    icon: Shield,
    title: "Security Operations",
    text: "Monitoring, triage, incident response, and governance-focused automation.",
  },
  {
    icon: Lock,
    title: "Identity & Access",
    text: "Least privilege, secure access design, and policy-driven controls.",
  },
  {
    icon: Activity,
    title: "Automation & Analytics",
    text: "Replace manual workflows with reliable pipelines and measurable outcomes.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen text-zinc-100 bg-zinc-950">
      <div
        className="fixed inset-0 -z-10 opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, rgba(59,130,246,0.18), transparent 35%), radial-gradient(circle at 80% 0%, rgba(6,182,212,0.15), transparent 35%), linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "auto, auto, 36px 36px, 36px 36px",
        }}
      />

      <header className="sticky top-0 z-50 backdrop-blur-xl bg-zinc-950/60 border-b border-zinc-800">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <p className="font-semibold tracking-wide">Shad Hasan</p>
          <div className="text-sm flex gap-5 text-zinc-300">
            <a href="#about" className="hover:text-white transition">About</a>
            <a href="#work" className="hover:text-white transition">Work</a>
            <a href="#contact" className="hover:text-white transition">Contact</a>
          </div>
        </nav>
      </header>

      <section className="max-w-6xl mx-auto px-6 pt-20 pb-16">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="max-w-3xl"
        >
          <p className="text-sm uppercase tracking-[0.2em] text-cyan-300 mb-4">
            Cybersecurity • Automation • Cloud Data Security
          </p>
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
            Building secure systems and automation that reduce risk and manual effort.
          </h1>
          <p className="mt-6 text-zinc-300 text-lg leading-relaxed">
            I design and deliver practical security improvements, governance controls,
            and data-driven workflows for real operational environments.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#contact"
              className="px-5 py-3 rounded-xl bg-cyan-400 text-zinc-950 font-medium hover:opacity-90 transition"
            >
              Contact Me
            </a>
            <a
              href="#work"
              className="px-5 py-3 rounded-xl border border-zinc-700 hover:border-zinc-500 transition"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </section>

      <section id="about" className="max-w-6xl mx-auto px-6 py-10">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-3 gap-5"
        >
          {cards.map((card, i) => {
            const Icon = card.icon;
            return (
              <motion.article
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6"
              >
                <Icon className="w-6 h-6 mb-4 text-cyan-300" />
                <h3 className="font-semibold text-lg">{card.title}</h3>
                <p className="mt-2 text-zinc-300 leading-relaxed">{card.text}</p>
              </motion.article>
            );
          })}
        </motion.div>
      </section>

      <section id="work" className="max-w-6xl mx-auto px-6 py-12">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7"
        >
          <h2 className="text-2xl font-semibold">Featured Impact</h2>
          <ul className="mt-4 space-y-3 text-zinc-300">
            <li>• Automated multi-portal reporting workflows and reduced manual handling.</li>
            <li>• Implemented access control patterns to reduce data exposure risk.</li>
            <li>• Delivered governance-aligned dashboards for faster decision support.</li>
          </ul>
        </motion.div>
      </section>

      <section id="contact" className="max-w-6xl mx-auto px-6 py-14">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-7"
        >
          <h2 className="text-2xl font-semibold">Contact</h2>
          <p className="mt-2 text-zinc-300">
            Open to cybersecurity analyst, SOC, and security automation opportunities.
          </p>
          <div className="mt-5 flex flex-wrap gap-3">
            <a className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-700 hover:border-zinc-500 transition" href="mailto:your@email.com">
              <Mail size={16} /> Email
            </a>
            <a className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-700 hover:border-zinc-500 transition" href="https://github.com" target="_blank" rel="noreferrer">
              <Github size={16} /> GitHub
            </a>
            <a className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-zinc-700 hover:border-zinc-500 transition" href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin size={16} /> LinkedIn
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
