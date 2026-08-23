import { Link } from 'react-router-dom';
import SignalTrace from '@/components/SignalTrace';
import AlgorhythmMark from '@/components/AlgorhythmMark';

export default function TraceHero() {
  return (
    <section className="container-page relative overflow-hidden pb-16 pt-16 md:pb-24 md:pt-24">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-fine opacity-30"
        aria-hidden="true"
      />
      <Link
        to="/"
        className="gutter-label mb-6 inline-flex items-center gap-2 text-trace-bright hover:underline"
      >
        <AlgorhythmMark className="h-4 w-4" />
        An AlgoRhythm project
      </Link>

      <p className="font-mono text-2xs uppercase tracking-[0.2em] text-paper-500">
        Translational Runtime Analysis and Compilation Engine
      </p>
      <h1 className="mt-3 max-w-2xl font-display text-4xl font-semibold leading-[1.1] tracking-tight text-paper-100 sm:text-5xl">
        Understand what happens between source code and execution.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper-300">
        TRACE is a lightweight programming language and compiler project built
        around the fundamentals of language processing, analysis, and
        execution.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a href="#download" className="btn-primary">
          Download TRACE
        </a>
        <a href="#documentation" className="btn-secondary">
          Documentation
        </a>
        <a href="#playground" className="btn-ghost">
          Try Playground
        </a>
      </div>

      <SignalTrace
        className="mt-16 h-10 w-full max-w-2xl text-trace opacity-70"
        color="#5B8AA6"
        variant="sharp"
      />
    </section>
  );
}
