import Image from "next/image";
import Reveal from "./Reveal";
import { SectionHeading } from "./Sections";
import TiltCard from "./TiltCard";
import { projects } from "@/lib/cv";

function CoverArt({ name }: { name: string }) {
  // Elegant CSS cover for projects without a generated image
  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden bg-[linear-gradient(135deg,#17172b,#0b0b14)]">
      <div
        aria-hidden
        className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/25 blur-3xl"
      />
      <div
        aria-hidden
        className="absolute -bottom-12 -left-8 h-40 w-40 rounded-full bg-accent-2/20 blur-3xl"
      />
      <div className="tilt-inner text-center">
        <p className="gradient-text font-mono text-3xl font-bold tracking-tight">
          {name}
        </p>
        <p className="mt-2 font-mono text-xs text-zinc-400">
          data · automation · engineering
        </p>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
      <SectionHeading kicker="04." title="Projects" />
      <div className="mt-12 grid gap-7 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 2) * 90}>
            <TiltCard>
              <div className="relative h-44 overflow-hidden rounded-t-2xl sm:h-48">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={`${project.name} — ${project.subtitle}`}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <CoverArt name={project.name} />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              </div>
              <div className="p-6 pt-4">
                <p className="font-mono text-xs text-muted">{project.period}</p>
                <h3 className="mt-1.5 text-xl font-semibold">
                  {project.name}
                  <span className="text-accent"> · {project.subtitle}</span>
                </h3>
                <p className="mt-1 font-mono text-xs text-accent">{project.stack}</p>
                <ul className="mt-4 space-y-2">
                  {project.points.slice(0, 4).map((point) => (
                    <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                      {point}
                    </li>
                  ))}
                </ul>
                {project.points.length > 4 && (
                  <p className="mt-3 font-mono text-xs text-muted">
                    + {project.points.length - 4} more highlights
                  </p>
                )}
              </div>
            </TiltCard>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
