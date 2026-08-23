import { useState } from 'react';

import Eyebrow from '@/components/Eyebrow';
import { codeExample } from '@/data/trace';

export default function TracePlayground() {
  const [output, setOutput] = useState<string | null>(null);

  function handleRun() {
    setOutput(
      'Playground execution is coming soon — this panel is frontend-only for now.'
    );
  }

  return (
    <section id="playground" className="container-page hairline py-16 md:py-24">
      <Eyebrow index="04" tone="trace">Playground</Eyebrow>

      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="max-w-lg font-display text-2xl font-semibold text-paper-100 md:text-3xl">
          Try TRACE in your browser
        </h2>

        <span className="rounded-sm border border-trace-dim bg-ink-800 px-3 py-1 font-mono text-2xs uppercase tracking-[0.15em] text-trace-bright">
          Frontend preview — coming soon
        </span>
      </div>

      <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-ink-600 bg-ink-600 md:grid-cols-2">
        {/* Editor Panel */}
        <div className="flex flex-col bg-ink-900">
          <div className="flex items-center justify-between border-b border-ink-600 px-5 py-3">
            <span className="font-mono text-2xs text-paper-400">editor</span>

            <button
              type="button"
              onClick={handleRun}
              className="btn-primary px-4 py-1.5 text-2xs uppercase tracking-[0.15em]"
            >
              Run
            </button>
          </div>

          <pre className="flex-1 overflow-x-auto p-5 text-sm leading-relaxed">
            <code className="font-mono text-paper-200">{codeExample}</code>
          </pre>
        </div>
        {/* Output Panel */}
        <div className="flex flex-col bg-ink-950">
          <div className="border-b border-ink-600 px-5 py-3">
            <span className="font-mono text-2xs text-paper-400">
              output
            </span>
          </div>

          <div className="flex flex-1 items-start p-5 font-mono text-sm text-paper-400">
            {output ? (
              <span className="animate-[fade-up_0.3s_ease-out]">
                {output}
              </span>
            ) : (
              <span className="text-paper-500">
                Press Run to see output here.
              </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}