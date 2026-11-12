import Reveal from "./Reveal";
import { skills } from "@/lib/cv";

export default function Skills() {
  const rowA = [...skills.slice(0, 4), ...skills.slice(0, 4)];
  const rowB = [...skills.slice(4), ...skills.slice(4)];

  return (
    <section id="skills" className="py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-5">
        <Reveal>
          <p className="font-mono text-sm text-accent">02.</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
            Technical skills
          </h2>
        </Reveal>
      </div>

      {/* Infinite marquee rows */}
      <div className="mt-10 space-y-4 [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]">
        {[rowA, rowB].map((row, rowIndex) => (
          <div key={rowIndex} className="overflow-hidden">
            <div className={`marquee-track gap-4 ${rowIndex === 1 ? "marquee-reverse" : ""}`}>
              {row.map((group, i) => (
                <div
                  key={`${group.category}-${i}`}
                  className="shrink-0 rounded-xl border border-border-subtle bg-card px-5 py-4"
                >
                  <h3 className="font-mono text-xs font-semibold text-accent">
                    {group.category}
                  </h3>
                  <p className="mt-2 max-w-xs text-sm text-muted">
                    {group.skills.join(" · ")}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Detailed grid */}
      <div className="mx-auto mt-12 grid max-w-5xl gap-5 px-5 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={i * 50}>
            <div className="glow-card h-full rounded-xl border border-border-subtle bg-card p-5 transition-transform duration-300 hover:-translate-y-1">
              <h3 className="font-mono text-sm font-semibold text-accent">
                {group.category}
              </h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-border-subtle px-3 py-1 text-xs text-muted transition-colors hover:border-accent hover:text-accent"
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
