import { SectionHeading } from "./Sections";
import ProjectsGrid from "./ProjectsGrid";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-5 py-20 sm:py-28">
      <SectionHeading kicker="04." title="Projects" />
      <ProjectsGrid />
    </section>
  );
}
