import Reveal from "./Reveal";
import { profile } from "@/lib/cv";

export function SectionHeading({
  kicker,
  title,
}: {
  kicker: string;
  title: string;
}) {
  return (
    <Reveal>
      <p className="font-mono text-sm text-accent">{kicker}</p>
      <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </Reveal>
  );
}

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[700px] -translate-x-1/2 rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(closest-side, var(--accent), transparent)",
        }}
      />
      <div className="relative mx-auto w-full max-w-5xl px-5 pt-24">
        <Reveal>
          <p className="font-mono text-sm text-accent">Hi, my name is</p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight sm:text-6xl">
            {profile.name}
          </h1>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-muted sm:text-5xl">
            <span className="gradient-text">{profile.role}</span>
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
            {profile.tagline} I specialize in{" "}
            <span className="text-foreground">
              Python, Django, FastAPI, LLMs, RAG pipelines, and AI agents
            </span>{" "}
            — turning business requirements into scalable backend and AI-powered
            solutions.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              View my work
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg border border-border-subtle px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
            >
              Get in touch
            </a>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted">
            <a href={`mailto:${profile.email}`} className="hover:text-accent">
              {profile.email}
            </a>
            <span>{profile.phone}</span>
            <span>{profile.location}</span>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent"
            >
              linkedin.com/in/muhammadbilal0
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
      <SectionHeading kicker="01." title="About me" />
      <Reveal className="mt-6">
        <p className="max-w-3xl leading-relaxed text-muted">{profile.summary}</p>
      </Reveal>
    </section>
  );
}
