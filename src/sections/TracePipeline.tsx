import Eyebrow from '@/components/Eyebrow';
import PipelineDiagram from '@/components/PipelineDiagram';

export default function TracePipeline() {
  return (
    <section className="hairline">
      <div className="container-page pt-16 md:pt-24">
        <Eyebrow index="02" tone="trace">Compiler Pipeline</Eyebrow>
        <h2 className="max-w-lg font-display text-2xl font-semibold text-paper-100 md:text-3xl">
          From source to execution
        </h2>
        <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-paper-300">
          Every TRACE program moves through the same fixed set of stages.
          Scroll to trace it end to end.
        </p>
      </div>
      <PipelineDiagram />
    </section>
  );
}