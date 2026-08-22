import type { ReactNode } from 'react';

interface EyebrowProps {
  index: string;
  children: ReactNode;
  tone?: 'signal' | 'trace';
}

/**
 * A section label styled like an editor gutter comment, e.g. // 01 ABOUT
 * Ties every section heading back to the "reading source code" motif.
 */
export default function Eyebrow({ index, children, tone = 'signal' }: EyebrowProps) {
  const dot = tone === 'signal' ? 'bg-signal' : 'bg-trace';
  return (
    <div className="mb-4 flex items-center gap-3">
      <span className={`h-1.5 w-1.5 rounded-full ${dot}`} />
      <span className="gutter-label">
        <span className="text-ink-500">{index}</span> {children}
      </span>
    </div>
  );
}
