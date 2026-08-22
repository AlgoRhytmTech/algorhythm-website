import Eyebrow from '@/components/Eyebrow';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';

export default function HomeProjects() {
  return (
    <section id="projects" className="container-page hairline py-20 md:py-28">
      <Eyebrow index="01">Projects</Eyebrow>
      <h2 className="max-w-lg font-display text-2xl font-semibold text-paper-100 md:text-3xl">
        What we're building
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}

        {/* Placeholder slot — remove once a second project is added */}
        <div className="card flex flex-col justify-center border-dashed p-8 text-paper-500 md:p-10">
          <span className="gutter-label">Next project</span>
          <p className="mt-3 text-sm">Coming soon.</p>
        </div>
      </div>
    </section>
  );
}
