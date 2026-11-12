"use client";

import { useState } from "react";
import { projects } from "@/lib/cv";
import Reveal from "./Reveal";
import TiltCard from "./TiltCard";

const allTags = Array.from(
  new Set(projects.flatMap((p) => p.stack.split(", ")))
).sort();

export default function ProjectsGrid() {
  const [active, setActive] = useState<string | null>(null);
  const filtered = active
    ? projects.filter((p) => p.stack.split(", ").includes(active))
    : projects;

  return (
    <>
      {/* Filter chips */}
      <Reveal className="mt-8">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setActive(null)}
            className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
              active === null
                ? "bg-accent text-white"
                : "border border-border-subtle text-muted hover:text-foreground"
            }`}
          >
            All ({projects.length})
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActive(active === tag ? null : tag)}
              className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors ${
                active === tag
                  ? "bg-accent text-white"
                  : "border border-border-subtle text-muted hover:text-foreground"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </Reveal>

      <div className="mt-10 grid gap-7 md:grid-cols-2">
        {filtered.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 90}>
            <a href={`/projects/${project.slug}`} className="block">
              <TiltCard>
                <div className="relative h-44 overflow-hidden rounded-t-2xl sm:h-48">
                  {project.image && (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={project.image}
                      alt={`${project.name} — ${project.subtitle}`}
                      className="h-full w-full object-cover"
                      loading="lazy"
                    />
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
                    {project.points.slice(0, 3).map((point) => (
                      <li key={point} className="flex gap-3 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent/60" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-3 font-mono text-xs text-accent">
                    Read case study →
                  </p>
                </div>
              </TiltCard>
            </a>
          </Reveal>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="mt-10 text-center text-muted">
          No projects match that filter yet.
        </p>
      )}
    </>
  );
}
