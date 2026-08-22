import Eyebrow from '@/components/Eyebrow';
import CodeBlock from '@/components/CodeBlock';
import { codeExample, codeOutput } from '@/data/trace';

export default function TraceExample() {
  return (
    <section className="container-page hairline py-16 md:py-24">
      <Eyebrow index="01" tone="trace">A first program</Eyebrow>
      <h2 className="max-w-lg font-display text-2xl font-semibold text-paper-100 md:text-3xl">
        What TRACE code looks like
      </h2>
      <div className="mt-10 max-w-xl">
        <CodeBlock code={codeExample} filename="main.tc" output={codeOutput} />
      </div>
    </section>
  );
}
