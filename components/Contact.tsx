import Reveal from "./Reveal";
import { SectionHeading } from "./Sections";
import ContactForm from "./ContactForm";
import { profile } from "@/lib/cv";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
      <SectionHeading kicker="06." title="Get in touch" />
      <Reveal className="mt-6">
        <p className="max-w-2xl text-muted">
          I&apos;m open to new opportunities and interesting problems. Whether
          you have a role in mind or just want to talk AI and backend
          engineering, my inbox is always open.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-10 md:grid-cols-[1fr_1.4fr]">
        <Reveal>
          <ul className="space-y-4 text-sm">
            <li>
              <p className="font-mono text-xs text-muted">Email</p>
              <a href={`mailto:${profile.email}`} className="text-foreground hover:text-accent">
                {profile.email}
              </a>
            </li>
            <li>
              <p className="font-mono text-xs text-muted">Phone</p>
              <p>{profile.phone}</p>
            </li>
            <li>
              <p className="font-mono text-xs text-muted">LinkedIn</p>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-accent"
              >
                linkedin.com/in/muhammadbilal0
              </a>
            </li>
            <li>
              <p className="font-mono text-xs text-muted">Location</p>
              <p>{profile.location}</p>
            </li>
          </ul>
        </Reveal>
        <Reveal delay={80}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  );
}
