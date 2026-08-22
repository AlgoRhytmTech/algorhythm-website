import { pipelineStages } from '@/data/trace';

export default function PipelineDiagram() {
  return (
    <div className="relative">
      {/* continuous vertical trace line running through every stage */}
      <div
        className="absolute left-[15px] top-2 bottom-2 w-px bg-gradient-to-b from-trace-dim via-trace to-trace-dim md:left-[19px]"
        aria-hidden="true"
      />
      <ol className="relative flex flex-col gap-0">
        {pipelineStages.map((stage, i) => (
          <li key={stage.label} className="group flex items-start gap-5 py-4 md:gap-6">
            <div className="relative z-10 mt-1 flex h-8 w-8 flex-none items-center justify-center rounded-full border border-trace-dim bg-ink-900 transition-colors duration-150 group-hover:border-trace">
              <span className="h-1.5 w-1.5 rounded-full bg-trace transition-transform duration-150 group-hover:scale-125" />
            </div>
            <div className="flex flex-1 flex-col gap-0.5 border-b border-ink-600 pb-4 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
              <span className="font-display text-base font-medium text-paper-100">
                {stage.label}
              </span>
              <span className="font-mono text-2xs text-paper-500">{stage.detail}</span>
            </div>
            <span className="sr-only">{i < pipelineStages.length - 1 ? 'then' : 'final stage'}</span>
          </li>
        ))}
      </ol>
    </div>
  );
}
