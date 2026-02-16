import MotionReveal from "./motion-reveal";

type Props = {
  title: string;
  impact: string;
  stack: string;
  index?: number;
};

export default function ProjectCard({ title, impact, stack, index = 0 }: Props) {
  return (
    <MotionReveal delay={index * 0.06}>
      <article className="rounded-2xl border border-white/10 bg-white/5 p-5 h-full">
        <h3 className="font-semibold text-lg">{title}</h3>
        <p className="mt-2 text-slate-300 text-sm leading-relaxed">{impact}</p>
        <p className="mt-3 text-xs text-cyan-200">{stack}</p>
      </article>
    </MotionReveal>
  );
}
