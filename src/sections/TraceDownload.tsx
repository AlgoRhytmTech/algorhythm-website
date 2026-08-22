import Eyebrow from '@/components/Eyebrow';
import { downloadTargets } from '@/data/trace';

export default function TraceDownload() {
  return (
    <section id="download" className="container-page hairline py-16 md:py-24">
      <Eyebrow index="06" tone="trace">Download</Eyebrow>
      <h2 className="max-w-lg font-display text-2xl font-semibold text-paper-100 md:text-3xl">
        Get TRACE
      </h2>

      <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
        {downloadTargets.map((target) => (
          <div key={target.platform} className="card p-6">
            <span className="font-display text-base font-medium text-paper-100">
              {target.platform}
            </span>
            <p className="mt-2 font-mono text-2xs uppercase tracking-[0.15em] text-paper-500">
              {target.detail}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
