import SignalTrace from '@/components/SignalTrace';

export default function HomeHero() {
  return (
    <section className="container-page relative overflow-hidden pb-20 pt-20 md:pb-28 md:pt-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-grid-fine opacity-40"
        aria-hidden="true"
      />
      <p className="gutter-label mb-6">// algorhythm.init()</p>
      <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.08] tracking-tight text-paper-100 sm:text-5xl md:text-6xl">
        Building software with rhythm, logic, and intent.
      </h1>
      <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper-300">
        AlgoRhythm is an engineering-focused technology initiative — practical
        software, built from fundamentals, in the open.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <a href="#projects" className="btn-primary">
          Explore Projects
        </a>
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="btn-secondary"
        >
          GitHub
        </a>
      </div>

      <SignalTrace
        className="mt-16 h-10 w-full max-w-2xl text-signal opacity-70"
        color="#D9A441"
        variant="rhythm"
      />
    </section>
  );
}
