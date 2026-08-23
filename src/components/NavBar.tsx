import { Link } from 'react-router-dom';
import AlgorhythmMark from '@/components/AlgorhythmMark';

const links = [
  { label: 'Projects', href: '/#projects' },
  { label: 'About', href: '/#about' },
  { label: 'GitHub', href: 'https://github.com', external: true },
  { label: 'Contact', href: '/#contact' },
];

export default function NavBar() {
  return (
    <header className="sticky top-0 z-40 border-b border-ink-600 bg-ink-900/90 backdrop-blur">
      <nav className="container-page flex h-16 items-center justify-between" aria-label="Primary">
        <Link to="/" className="flex items-center gap-2 font-display text-lg font-semibold tracking-tight text-paper-100">
          <AlgorhythmMark className="h-4 w-4" />
          AlgoRhythm
        </Link>
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <li key={link.label}>
              {link.external ? (
                <a
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-paper-400 transition-colors hover:text-paper-100"
                >
                  {link.label}
                </a>
              ) : (
                <a
                  href={link.href}
                  className="text-sm text-paper-400 transition-colors hover:text-paper-100"
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
        <a
          href="/#projects"
          className="btn-secondary hidden text-2xs uppercase tracking-[0.15em] md:inline-flex"
        >
          Explore Projects
        </a>
      </nav>
    </header>
  );
}
