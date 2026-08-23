import Eyebrow from '@/components/Eyebrow';
import ProjectCard from '@/components/ProjectCard';
import { projects } from '@/data/projects';
import { useEffect, useState } from 'react';

export default function HomeProjects() {
  const [visibleProjects, setVisibleProjects] = useState<
    Array<{ key: string; project: any; delay: number }>
  >([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisibleProjects(
        projects.map((project, index) => ({
          key: project.slug,
          project,
          delay: index * 100
        }))
      );
    }, 300);

    return () => clearTimeout(timer);
  }, [projects]);

  return (
    <section id="projects" className="container-page hairline py-20 md:py-28">
      <div className="absolute inset-0 -z-20 pointer-events-none" aria-hidden="true">
        <div className="absolute inset-0 bg-grid-fine opacity-5 animate-[grid-scroll_20s_linear_infinite]"></div>
      </div>

      <Eyebrow index="01">Projects</Eyebrow>
      <h2 className="max-w-lg font-display text-2xl font-semibold text-paper-100 md:text-3xl animate-[fade-up_0.8s_ease-out forwards]">
        What we're building
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
        {visibleProjects.map(({ key, project, delay = 0 }) => (
          <div
            key={key}
            className={`animate-[fade-up_0.6s_ease-out_${delay}ms forwards]`}
          >
            <ProjectCard project={project} />
          </div>
        ))}
      </div>
    </section>
  );
}
