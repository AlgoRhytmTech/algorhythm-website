import { Link } from 'react-router-dom';
import AlgorhythmMark from './AlgorhythmMark';
import TraceMark from './TraceMark';

interface FooterProps {
  variant?: 'company' | 'trace';
}

export default function Footer({ variant = 'company' }: FooterProps) {
  return (
    <footer className="border-t border-ink-600">
      <div className="container-page flex flex-col gap-8 py-12 md:flex-row md:items-start md:justify-between">
        <div>
          {variant === 'trace' ? (
            <>
              <div className="flex items-center gap-2 font-display text-lg font-semibold text-paper-100">
                <TraceMark className="h-5 w-5" />
                TRACE
              </div>
              <p className="mt-1 max-w-sm font-mono text-2xs text-paper-500">
                Translational Runtime Analysis and Compilation Engine
              </p>
              <p className="mt-3 text-sm text-paper-400">
                An{' '}
                <Link to="/" className="text-trace-bright hover:underline">
                  AlgoRhythm
                </Link>{' '}
                project
              </p>
            </>
          ) : (
            <>
              <div className="flex items-center gap-2 font-display text-lg font-semibold text-paper-100">
                <AlgorhythmMark className="h-5 w-5" />
                AlgoRhythm
              </div>
              <p className="mt-1 text-sm text-paper-400">Building, learning, and shipping.</p>
            </>
          )}
        </div>

        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-paper-400">
            {variant === 'trace' ? (
              <>
                <li><a href="#documentation" className="hover:text-paper-100">Documentation</a></li>
                <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-paper-100">GitHub</a></li>
                <li><a href="#download" className="hover:text-paper-100">Download</a></li>
                <li><Link to="/" className="hover:text-paper-100">AlgoRhythm</Link></li>
              </>
            ) : (
              <>
                <li><a href="https://github.com" target="_blank" rel="noreferrer" className="hover:text-paper-100">GitHub</a></li>
                <li><a href="/#contact" className="hover:text-paper-100">Contact</a></li>
                <li><a href="/#projects" className="hover:text-paper-100">Projects</a></li>
              </>
            )}
          </ul>
        </nav>
      </div>
      <div className="container-page hairline py-6">
        <p className="font-mono text-2xs text-ink-500">© 2026 AlgoRhythm</p>
      </div>
    </footer>
  );
}