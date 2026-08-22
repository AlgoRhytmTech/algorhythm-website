interface SignalTraceProps {
  className?: string;
  color?: string;
  variant?: 'rhythm' | 'sharp';
}

/**
 * The recurring brand signature: a single continuous signal line.
 * "rhythm" renders a smooth waveform (AlgoRhythm), "sharp" renders a
 * squared-off logic trace (TRACE / compiler identity).
 */
export default function SignalTrace({
  className = '',
  color = '#D9A441',
  variant = 'rhythm',
}: SignalTraceProps) {
  const rhythmPath =
    'M0,20 C 20,20 25,4 45,4 C 65,4 70,36 90,36 C 110,36 115,10 135,10 C 155,10 160,28 180,28 C 200,28 205,20 225,20 L 400,20';
  const sharpPath =
    'M0,20 L40,20 L40,6 L70,6 L70,32 L100,32 L100,14 L130,14 L130,26 L160,26 L160,20 L400,20';

  return (
    <svg
      viewBox="0 0 400 40"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d={variant === 'rhythm' ? rhythmPath : sharpPath}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
