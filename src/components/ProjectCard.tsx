import { Link } from 'react-router-dom';
import type { Project } from '@/data/projects';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      to={project.href}
      className="card group relative flex flex-col justify-between overflow-hidden p-8 transition-colors duration-150 hover:border-signal-dim md:p-10"
    >
      <div>
        <div className="flex items-center justify-between">
          <span className="gutter-label text-signal">
            {project.status === 'active' ? 'Active project' : 'Planned'}
          </span>
          <span
            aria-hidden="true"
            className="font-mono text-lg text-ink-500 transition-transform duration-150 group-hover:translate-x-1 group-hover:text-signal"
          >
            →
          </span>
        </div>
        <h3 className="mt-4 font-display text-3xl font-semibold text-paper-100">
          {project.name}
        </h3>
        <p className="mt-1 font-mono text-2xs text-paper-500">{project.fullName}</p>
        <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper-300">
          {project.tagline}
        </p>
      </div>
    </Link>
  );
}
