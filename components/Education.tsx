import Reveal from "./Reveal";
import { SectionHeading } from "./Sections";
import { education } from "@/lib/cv";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
      <SectionHeading kicker="05." title="Education" />
      <div className="mt-10 grid gap-5 sm:grid-cols-2">
        {education.map((school) => (
          <Reveal key={school.school}>
            <div className="h-full rounded-xl border border-border-subtle bg-card p-6">
              <p className="font-mono text-xs text-muted">{school.period}</p>
              <h3 className="mt-2 text-lg font-semibold">{school.school}</h3>
              <p className="text-sm text-muted">{school.degree}</p>
              <p className="mt-1 text-sm text-muted">{school.location}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
