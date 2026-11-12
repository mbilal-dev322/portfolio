import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import Nav from "@/components/Nav";
import Reveal from "@/components/Reveal";
import { projects } from "@/lib/cv";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};
  return {
    title: `${project.name} — ${project.subtitle} | Muhammad Bilal`,
    description: project.points[0],
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <>
      <Nav />
      <main className="mx-auto max-w-4xl px-5 pt-28">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 font-mono text-sm text-accent hover:underline"
        >
          ← All projects
        </Link>

        <Reveal>
          <p className="mt-8 font-mono text-xs text-muted">{project.period}</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
            {project.name}
          </h1>
          <p className="mt-2 text-lg text-muted">{project.subtitle}</p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.stack.split(", ").map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-border-subtle bg-card px-3 py-1 font-mono text-xs text-accent"
              >
                {tech}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal className="mt-10">
          <div className="relative aspect-video overflow-hidden rounded-2xl border border-border-subtle">
            {project.image ? (
              <Image
                src={project.image}
                alt={`${project.name} — ${project.subtitle}`}
                fill
                sizes="(max-width: 1024px) 100vw, 900px"
                className="object-cover"
                priority
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-[linear-gradient(135deg,#17172b,#0b0b14)]">
                <p className="gradient-text font-mono text-4xl font-bold">{project.name}</p>
              </div>
            )}
          </div>
        </Reveal>

        <Reveal className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight">What I built</h2>
          <ul className="mt-6 space-y-4">
            {project.points.map((point) => (
              <li key={point} className="flex gap-3 leading-relaxed text-muted">
                <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal className="mt-16">
          <h2 className="text-2xl font-bold tracking-tight">More projects</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {others.map((other) => (
              <Link
                key={other.slug}
                href={`/projects/${other.slug}`}
                className="glow-card rounded-xl border border-border-subtle bg-card p-4 transition-transform hover:-translate-y-1"
              >
                <p className="font-semibold">{other.name}</p>
                <p className="mt-1 text-xs text-muted">{other.subtitle}</p>
              </Link>
            ))}
          </div>
        </Reveal>
      </main>
      <footer className="mt-20 border-t border-border-subtle py-8 text-center text-sm text-muted">
        <p>© 2026 Muhammad Bilal · Built with Next.js &amp; Tailwind CSS</p>
      </footer>
    </>
  );
}
