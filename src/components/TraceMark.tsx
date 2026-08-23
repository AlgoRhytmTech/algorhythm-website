interface TraceMarkProps {
  className?: string;
  /** brand = blue + amber tip (default). mono = single currentColor. */
  tone?: 'brand' | 'mono';
}

/**
 * Signal Path — one continuous stroke turning at right angles only,
 * ending in an amber tip (the shared "active/resolved" accent used
 * throughout the site). Encodes execution: a single path moving
 * through fixed stages to a result. Same 8-unit grid and viewBox as
 * AlgorhythmMark — same family, opposite structural logic (a single
 * moving line vs. a plural measured pattern).
 */
export default function TraceMark({
  className = 'h-6 w-6',
  tone = 'brand',
}: TraceMarkProps) {
  const mono = tone === 'mono';
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="TRACE">
      <path
        d="M8,40 L8,24 L24,24 L24,8"
        stroke={mono ? 'currentColor' : '#5B8AA6'}
        strokeWidth="8"
        fill="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
      <path
        d="M24,8 L40,8"
        stroke={mono ? 'currentColor' : '#F0C368'}
        strokeWidth="8"
        fill="none"
        strokeLinecap="butt"
        strokeLinejoin="miter"
      />
    </svg>
  );
}