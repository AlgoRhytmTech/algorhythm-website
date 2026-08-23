import { useEffect, useRef, useState } from 'react';
import { pipelineStages } from '@/data/trace';
import SignalTrace from './SignalTrace';

/**
 * Full-bleed, scroll-driven walk through the compiler pipeline.
 *
 * Perf notes:
 * - The spine fill is updated imperatively via a ref (no re-render per
 *   scroll pixel); the scroll handler is rAF-throttled.
 * - Which stage is "active" and whether a stage has been revealed are
 *   tracked with IntersectionObserver, not scroll math, so state only
 *   changes at stage granularity.
 * - All motion is plain opacity/transform + CSS transitions, which the
 *   global prefers-reduced-motion rule in styles/index.css already
 *   collapses to ~0ms — no separate reduced-motion branch needed here.
 */
export default function PipelineDiagram() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const fillRef = useRef<HTMLDivElement>(null);
  const stageRefs = useRef<Array<HTMLDivElement | null>>([]);
  const [activeStage, setActiveStage] = useState(0);
  const [revealed, setRevealed] = useState<boolean[]>(() =>
    pipelineStages.map(() => false)
  );

  // Imperative scroll-linked spine fill.
  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const section = sectionRef.current;
      const fill = fillRef.current;
      if (!section || !fill) return;

      const rect = section.getBoundingClientRect();
      const viewport = window.innerHeight;
      const total = Math.max(rect.height - viewport, 1);
      const travelled = Math.min(Math.max(-rect.top, 0), total);

      fill.style.height = `${(travelled / total) * 100}%`;
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  // Stage-granularity reveal + active tracking.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number((entry.target as HTMLElement).dataset.stageIndex);
          if (!entry.isIntersecting) return;

          setRevealed((prev) => {
            if (prev[index]) return prev;
            const next = [...prev];
            next[index] = true;
            return next;
          });

          if (entry.intersectionRatio > 0.5) {
            setActiveStage(index);
          }
        });
      },
      { threshold: [0, 0.5, 1], rootMargin: '-15% 0px -15% 0px' }
    );

    stageRefs.current.forEach((node) => node && observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="relative w-full bg-ink-950">
      {/* Fine background grid, fading toward the edges */}
      <div
        className="pointer-events-none absolute inset-0 bg-grid-fine opacity-[0.12]"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 45%, rgba(11,13,16,0.92) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Sticky HUD — orientation while scrolling the full-bleed sequence */}
      <div className="sticky top-16 z-20 flex justify-end px-6 pt-8 md:px-10 lg:px-16">
        <div className="flex items-center gap-3 border border-ink-600 bg-ink-900/80 px-4 py-2 backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-trace-bright" />
          <span className="font-mono text-2xs uppercase tracking-[0.2em] text-paper-400">
            Stage {String(activeStage + 1).padStart(2, '0')} / {String(pipelineStages.length).padStart(2, '0')}
          </span>
          <span className="hidden font-mono text-2xs uppercase tracking-[0.2em] text-trace-bright sm:inline">
            {pipelineStages[activeStage].label}
          </span>
        </div>
      </div>

      {/* Central spine */}
      <div
        className="pointer-events-none absolute left-1/2 top-0 bottom-0 hidden w-px -translate-x-1/2 bg-ink-600 md:block"
        aria-hidden="true"
      >
        <div
          ref={fillRef}
          className="w-px bg-gradient-to-b from-trace via-trace-bright to-signal"
          style={{ height: 0 }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
        {pipelineStages.map((stage, index) => {
          const fromLeft = index % 2 === 0;
          const isActive = activeStage === index;
          const isPast = index < activeStage;
          const isRevealed = revealed[index];

          return (
            <div
              key={stage.label}
              ref={(el) => {
  stageRefs.current[index] = el;
}}
              data-stage-index={index}
              className="relative flex min-h-[70vh] items-center py-16"
            >
              {/* Central node */}
              <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:block">
                <span
                  className={[
                    'block h-3 w-3 rounded-full transition-colors duration-500',
                    isActive
                      ? 'animate-pulse-slow bg-signal'
                      : isPast
                        ? 'bg-trace'
                        : 'bg-ink-600',
                  ].join(' ')}
                />
              </div>

              {/* Stage card */}
              <div
                className={[
                  'w-full transition-all duration-700 ease-out',
                  fromLeft ? 'md:w-[46%] md:pr-[4%]' : 'md:ml-[54%] md:w-[46%]',
                  isRevealed
                    ? 'translate-y-0 opacity-100'
                    : fromLeft
                      ? '-translate-x-6 opacity-0'
                      : 'translate-x-6 opacity-0',
                ].join(' ')}
              >
                <div
                  className={[
                    'card relative overflow-hidden p-8 transition-colors duration-500 md:p-10',
                    isActive ? 'border-trace-dim' : 'border-ink-600',
                  ].join(' ')}
                >
                  <div
                    className={[
                      'absolute left-0 right-0 top-0 h-px transition-opacity duration-500',
                      isActive ? 'bg-trace opacity-100' : 'bg-ink-600 opacity-0',
                    ].join(' ')}
                    aria-hidden="true"
                  />

                  <div className="flex items-start gap-6">
                    <div
                      className={[
                        'flex h-14 w-14 flex-none items-center justify-center rounded-full border transition-colors duration-500',
                        isActive ? 'border-trace bg-ink-800' : 'border-ink-600 bg-ink-900',
                      ].join(' ')}
                    >
                      <span className="font-mono text-xs tracking-[0.15em] text-paper-300">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="min-w-0 flex-1">
                      <span className="gutter-label text-trace-bright">
                        {isPast ? 'Complete' : isActive ? 'Processing' : 'Standby'}
                      </span>
                      <h3 className="mt-2 font-display text-2xl font-medium text-paper-100 md:text-3xl">
                        {stage.label}
                      </h3>
                      <p className="mt-3 max-w-md text-sm leading-relaxed text-paper-400 md:text-base">
                        {stage.detail}
                      </p>

                      <div className="mt-8 flex items-center gap-4">
                        <div className="h-px w-32 flex-none overflow-hidden bg-ink-600">
                          <div
                            className={[
                              'h-full bg-trace transition-[width] duration-700 ease-out',
                              isPast || isActive ? 'w-full' : 'w-0',
                            ].join(' ')}
                          />
                        </div>
                        <SignalTrace
                          className="h-4 w-16 flex-none"
                          color={isActive ? '#F0C368' : '#3E5E70'}
                          variant="sharp"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
