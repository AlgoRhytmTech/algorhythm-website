import Eyebrow from '@/components/Eyebrow';

const principles = [
  {
    title: 'Engineering first',
    copy: 'Decisions are made from technical merit, not trend — tools are chosen because they fit the problem.',
  },
  {
    title: 'Fundamentals',
    copy: 'Understanding the layer beneath the abstraction is treated as a requirement, not an optional extra.',
  },
  {
    title: 'Learning by building',
    copy: 'Concepts are proven out in working code before they are considered understood.',
  },
  {
    title: 'Practical software',
    copy: 'Every project is built to actually run, ship, and be used — not left as theory.',
  },
  {
    title: 'Experimentation',
    copy: 'Room is left to try approaches that might not work, because that is how the ones that do get found.',
  },
];

export default function HomeAbout() {
  return (
    <section id="about" className="container-page hairline py-20 md:py-28">
      <Eyebrow index="02">About</Eyebrow>
      <h2 className="max-w-lg font-display text-2xl font-semibold text-paper-100 md:text-3xl">
        Philosophy
      </h2>
      <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-paper-300">
        AlgoRhythm is an engineering-focused technology initiative built around
        one idea: real understanding comes from building things yourself.
      </p>

      <dl className="mt-12 grid grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2">
        {principles.map((p, i) => (
          <div key={p.title} className="flex gap-4">
            <span className="line-num pt-1">{String(i + 1).padStart(2, '0')}</span>
            <div>
              <dt className="font-display text-base font-medium text-paper-100">{p.title}</dt>
              <dd className="mt-1.5 text-sm leading-relaxed text-paper-400">{p.copy}</dd>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
}
