import Reveal from "./Reveal";
import { profile } from "@/lib/cv";

const heroBadges = ["Python", "Django", "FastAPI", "LangChain", "RAG", "AI Agents", "PostgreSQL", "OpenAI"];

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
      {/* Animated gradient blobs */}
      <div
        aria-hidden
        className="blob pointer-events-none absolute -top-32 left-[15%] h-[420px] w-[560px] rounded-full opacity-30 blur-3xl"
        style={{ background: "radial-gradient(closest-side, var(--accent), transparent)" }}
      />
      <div
        aria-hidden
        className="blob pointer-events-none absolute right-[5%] top-[35%] h-[360px] w-[480px] rounded-full opacity-25 blur-3xl"
        style={{
          background: "radial-gradient(closest-side, var(--accent-2), transparent)",
          animationDelay: "-7s",
        }}
      />
      {/* Grid backdrop */}
      <div aria-hidden className="grid-bg pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-5xl px-5 pt-24">
        <p className="rise-in font-mono text-sm text-accent" style={{ animationDelay: "0.05s" }}>
          Hi, my name is
        </p>
        <h1
          className="rise-in mt-3 text-4xl font-bold tracking-tight sm:text-6xl"
          style={{ animationDelay: "0.15s" }}
        >
          {profile.name}
        </h1>
        <h2
          className="rise-in mt-3 text-3xl font-bold tracking-tight text-muted sm:text-5xl"
          style={{ animationDelay: "0.25s" }}
        >
          <span className="gradient-text">{profile.role}</span>
        </h2>
        <p
          className="rise-in mt-6 max-w-2xl text-base leading-relaxed text-muted sm:text-lg"
          style={{ animationDelay: "0.35s" }}
        >
          {profile.tagline} I specialize in{" "}
          <span className="text-foreground">
            Python, Django, FastAPI, LLMs, RAG pipelines, and AI agents
          </span>{" "}
          — turning business requirements into scalable backend and AI-powered
          solutions.
        </p>

        <div
          className="rise-in mt-8 flex flex-wrap items-center gap-4"
          style={{ animationDelay: "0.45s" }}
        >
          <a
            href="#projects"
            className="rounded-lg bg-accent px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-accent/25 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-accent/30"
          >
            View my work
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="rounded-lg border border-border-subtle px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            Get in touch
          </a>
          <a
            href="/resume.pdf"
            download="Muhammad_Bilal_Resume.pdf"
            className="rounded-lg border border-border-subtle px-6 py-3 text-sm font-semibold transition-colors hover:border-accent hover:text-accent"
          >
            Download resume ↓
          </a>
        </div>

        {/* Floating tech badges */}
        <div
          className="rise-in mt-10 flex flex-wrap gap-2.5"
          style={{ animationDelay: "0.55s" }}
        >
          {heroBadges.map((badge, i) => (
            <span
              key={badge}
              className="float-y rounded-full border border-border-subtle bg-card/70 px-3.5 py-1.5 font-mono text-xs text-muted backdrop-blur-sm"
              style={{ animationDelay: `${i * 0.35}s` }}
            >
              {badge}
            </span>
          ))}
        </div>

        <div
          className="rise-in mt-10 flex flex-wrap gap-x-6 gap-y-2 font-mono text-sm text-muted"
          style={{ animationDelay: "0.65s" }}
        >
          <a href={`mailto:${profile.email}`} className="transition-colors hover:text-accent">
            {profile.email}
          </a>
          <span>{profile.phone}</span>
          <span>{profile.location}</span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-accent"
          >
            linkedin.com/in/muhammadbilal0
          </a>
        </div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="rise-in absolute bottom-8 left-1/2 -translate-x-1/2 text-muted"
        style={{ animationDelay: "1s" }}
      >
        <svg
          className="float-y"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 5v14M19 12l-7 7-7-7" />
        </svg>
      </a>
    </section>
  );
}

export function About() {
  const stats = [
    { value: "3+", label: "Years of experience" },
    { value: "6", label: "Projects delivered" },
    { value: "8", label: "Skill domains" },
    { value: "10+", label: "Tools & APIs integrated" },
  ];

  return (
    <section id="about" className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
      <SectionHeading kicker="01." title="About me" />
      <div className="mt-8 grid gap-10 md:grid-cols-[1.5fr_1fr]">
        <Reveal>
          <p className="leading-relaxed text-muted">{profile.summary}</p>
        </Reveal>
        <div className="grid grid-cols-2 gap-4 self-start">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 80}>
              <div className="glow-card rounded-xl border border-border-subtle bg-card p-4 text-center">
                <p className="gradient-text text-2xl font-bold sm:text-3xl">{stat.value}</p>
                <p className="mt-1 text-xs text-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
