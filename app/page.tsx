import Nav from "@/components/Nav";
import { Hero, About } from "@/components/Sections";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Education from "@/components/Education";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <footer className="border-t border-border-subtle py-8 text-center text-sm text-muted">
        <p>© 2026 Muhammad Bilal · Built with Next.js &amp; Tailwind CSS</p>
      </footer>
    </>
  );
}
