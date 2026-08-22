import Eyebrow from '@/components/Eyebrow';
import { stageSections } from '@/data/trace';

export default function TraceStages() {
  return (
    <section className="container-page hairline py-16 md:py-24">
      <Eyebrow index="03" tone="trace">Core areas</Eyebrow>
      <h2 className="max-w-lg font-display text-2xl font-semibold text-paper-100 md:text-3xl">
        What TRACE is designed around
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-px overflow-hidden rounded-sm border border-ink-600 bg-ink-600 md:grid-cols-2">
        {stageSections.map((stage) => (
          <div key={stage.id} id={stage.id} className="bg-ink-900 p-8">
            <h3 className="font-display text-lg font-medium text-paper-100">{stage.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-paper-400">{stage.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
