interface AlgorhythmMarkProps {
  className?: string;
  /** brand = amber two-tone (default). mono = single currentColor. */
  tone?: 'brand' | 'mono';
}

/**
 * The Measure — three bars on an 8-unit grid, uneven heights, the
 * rightmost detached from the baseline. Encodes "algo" (discrete,
 * countable units) and "rhythm" (an uneven, specific pattern) at once.
 * Shares its 8-unit module and viewBox with TraceMark by design.
 */
export default function AlgorhythmMark({
  className = 'h-6 w-6',
  tone = 'brand',
}: AlgorhythmMarkProps) {
  const mono = tone === 'mono';
  return (
    <svg viewBox="0 0 48 48" className={className} role="img" aria-label="AlgoRhythm">
      <rect x="4" y="20" width="8" height="20" rx="1" fill={mono ? 'currentColor' : '#D9A441'} />
      <rect x="20" y="8" width="8" height="32" rx="1" fill={mono ? 'currentColor' : '#F0C368'} />
      <rect x="36" y="20" width="8" height="14" rx="1" fill={mono ? 'currentColor' : '#D9A441'} />
    </svg>
  );
}