import { Link } from 'react-router-dom';
import type { Project } from '@/data/projects';
import { useState } from 'react';

export default function ProjectCard({ project }: { project: Project }) {
  const [rotation, setRotation] = useState({ y: 0, x: 0 });

  return (
    <Link
      to={project.href}
      className="card group relative flex flex-col justify-between overflow-hidden p-8 transition-all duration-200 hover:border-signal-dim/80"
      onMouseEnter={() => setRotation({ y: 8, x: -4 })} // tilt slightly
      onMouseLeave={() => setRotation({ y: 0, x: 0 })}
      style={{
        perspective: '800px',
        transformStyle: 'preserve-3d',
      }}
    >
      <div
        style={{
          transform: `rotateY(${rotation.y}deg) rotateX(${rotation.x}deg)`,
          transition: 'transform 0.3s ease',
        }}
      >
        <div>
          <div className="flex items-center justify-between">
            <span className="gutter-label text-signal transition-opacity duration-200 group-hover:opacity-100">
              {project.status === 'active' ? 'Active project' : 'Planned'}
            </span>
            <span
              aria-hidden="true"
              className="font-mono text-lg text-ink-500 transition-all duration-200 group-hover:translate-x-2 group-hover:text-signal group-hover:opacity-100"
            >
              →
            </span>
          </div>
          <h3 className="mt-4 font-display text-3xl font-semibold text-paper-100 transition-all duration-300 group-hover:translate-x-1">
            {project.name}
          </h3>
          <p className="mt-1 font-mono text-2xs text-paper-500">{project.fullName}</p>
          <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-paper-300 transition-all duration-300 group-hover:translate-y-1">
            {project.tagline}
          </p>
        </div>
      </div>
    </Link>
  );
}
