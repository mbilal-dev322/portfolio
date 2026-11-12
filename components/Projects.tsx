import Reveal from "./Reveal";
import { SectionHeading } from "./Sections";
import { projects } from "@/lib/cv";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
      <SectionHeading kicker="04." title="Projects" />
      <div className="mt-10 grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 2) * 70}>
            <article className="group h-full rounded-xl border border-border-subtle bg-card p-6 transition-all hover:-translate-y-1 hover:border-accent/50 hover:shadow-lg hover:shadow-accent/5">
              <p className="font-mono text-xs text-muted">{project.period}</p>
              <h3 className="mt-2 text-xl font-semibold">
                {project.name}
                <span className="text-accent"> · {project.subtitle}</span>
              </h3>
              <p className="mt-1 font-mono text-xs text-accent">{project.stack}</p>
              <ul className="mt-4 space-y-2">
                {project.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
