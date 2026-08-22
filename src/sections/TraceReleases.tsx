import Eyebrow from '@/components/Eyebrow';
import { releases } from '@/data/trace';

export default function TraceReleases() {
  return (
    <section className="container-page hairline py-16 md:py-24">
      <Eyebrow index="07" tone="trace">Releases</Eyebrow>
      <h2 className="max-w-lg font-display text-2xl font-semibold text-paper-100 md:text-3xl">
        Release history
      </h2>

      <div className="mt-10 overflow-hidden rounded-sm border border-ink-600">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-ink-600 bg-ink-800 text-paper-500">
              <th className="px-5 py-3 font-mono text-2xs font-normal uppercase tracking-[0.15em]">
                Version
              </th>
              <th className="px-5 py-3 font-mono text-2xs font-normal uppercase tracking-[0.15em]">
                Date
              </th>
              <th className="px-5 py-3 font-mono text-2xs font-normal uppercase tracking-[0.15em]">
                Notes
              </th>
            </tr>
          </thead>
          <tbody>
            {releases.map((release) => (
              <tr key={release.version} className="border-b border-ink-600 last:border-none">
                <td className="px-5 py-4 font-mono text-paper-200">{release.version}</td>
                <td className="px-5 py-4 text-paper-400">{release.date}</td>
                <td className="px-5 py-4 text-paper-400">{release.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
