import Reveal from "./Reveal";
import { SectionHeading } from "./Sections";
import { skills } from "@/lib/cv";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
      <SectionHeading kicker="02." title="Technical skills" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 60}>
            <div className="h-full rounded-xl border border-border-subtle bg-card p-5">
              <h3 className="font-mono text-sm font-semibold text-accent">
                {group.category}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border-subtle px-3 py-1 text-xs text-muted"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
