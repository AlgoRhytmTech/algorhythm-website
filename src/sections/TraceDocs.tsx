import Eyebrow from '@/components/Eyebrow';
import { docSections } from '@/data/trace';

export default function TraceDocs() {
  return (
    <section id="documentation" className="container-page hairline py-16 md:py-24">
      <Eyebrow index="05" tone="trace">Documentation</Eyebrow>
      <h2 className="max-w-lg font-display text-2xl font-semibold text-paper-100 md:text-3xl">
        Read the docs
      </h2>

      <ul className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {docSections.map((doc) => (
          <li key={doc.title}>
            <a
              href="#"
              className="card group flex items-center justify-between p-6 transition-colors duration-150 hover:border-trace-dim"
            >
              <div>
                <span className="font-display text-base font-medium text-paper-100">
                  {doc.title}
                </span>
                <p className="mt-1 text-sm text-paper-400">{doc.copy}</p>
              </div>
              <span
                aria-hidden="true"
                className="font-mono text-lg text-ink-500 transition-transform duration-150 group-hover:translate-x-1 group-hover:text-trace-bright"
              >
                →
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}
