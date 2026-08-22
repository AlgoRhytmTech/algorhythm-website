export interface Project {
  slug: string;
  name: string;
  fullName: string;
  tagline: string;
  href: string;
  status: 'active' | 'planned';
  featured?: boolean;
}

// Add future AlgoRhythm projects here — the Projects section renders
// straight from this list, no component changes required.
export const projects: Project[] = [
  {
    slug: 'trace',
    name: 'TRACE',
    fullName: 'Translational Runtime Analysis and Compilation Engine',
    tagline:
      'A lightweight programming language and compiler project designed to make fundamental compiler concepts understandable through a practical command-line toolchain.',
    href: '/trace',
    status: 'active',
    featured: true,
  },
];
