import Reveal from "./Reveal";
import { SectionHeading } from "./Sections";
import { experience } from "@/lib/cv";

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
      <SectionHeading kicker="03." title="Where I've worked" />
      <div className="mt-10 space-y-10">
        {experience.map((job) => (
          <Reveal key={job.company}>
            <article className="relative border-l-2 border-border-subtle pl-6">
              <span className="absolute -left-[7px] top-1.5 h-3 w-3 rounded-full bg-accent" />
              <p className="font-mono text-xs text-muted">{job.period}</p>
              <h3 className="mt-1 text-xl font-semibold">
                {job.role}{" "}
                <span className="text-accent">@ {job.company}</span>
              </h3>
              <p className="text-sm text-muted">{job.location}</p>
              <ul className="mt-4 space-y-2.5">
                {job.points.map((point) => (
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
