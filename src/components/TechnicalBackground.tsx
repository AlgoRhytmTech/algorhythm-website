import { useEffect, useRef, useState } from 'react';

interface TechnicalBackgroundProps {
  className?: string;
  intensity?: number; // 0-1, controls animation intensity
  mouseResponsive?: boolean;
}

export default function TechnicalBackground({
  className = '',
  intensity = 0.5,
  mouseResponsive = true,
}: TechnicalBackgroundProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const animationFrameRef = useRef<number>(0);

  // Mouse position for responsive effects
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    if (!containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current!.getBoundingClientRect();
      setMousePosition({
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      });
    };

    const animate = () => {
      // This would typically update a canvas/WebGL scene
      // For now, we'll rely on CSS animations and occasional state updates
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    // Set up mouse listeners if responsive
    if (mouseResponsive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Start animation loop
    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (mouseResponsive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [intensity, mouseResponsive]);

  return (
    <div
      className={`pointer-events-none absolute inset-0 -z-20 ${className}`}
      ref={containerRef}
      aria-hidden="true"
    >
      {/* Base grid layer */}
      <div className="absolute inset-0 bg-grid-fine opacity-[8]"></div>

      {/* Secondary grid layer with different speed */}
      <div className="absolute inset-0 bg-grid-fine opacity-[4] animate-[grid-scroll_20s_linear_infinite_reverse]"></div>

      {/* Algorithmic curves layer */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22200%22 height=%22200%22><path d=%22M10,100 Q50,0 90,100 T170,100%22 stroke=%22rgba(217,164,65,0.03)%22 stroke-width=%221%22 fill=%22none%22/%22></svg>')]
             opacity-[6] animate-[gradient-shift_10s_ease_in_out_infinite]"></div>
      </div>

      {/* Particle layer */}
      <div className="absolute inset-0">
        {/* These would be dynamically generated particles in a full implementation */}
        <div className="absolute left-[10%] top-[30%] w-[4px] h-[4px] rounded-full bg-signal/20 animate-[float_6s_ease_in_out_infinite]"></div>
        <div className="absolute left-[30%] top-[60%] w-[3px] h-[3px] rounded-full bg-signal/15 animate-[float_4s_ease_in_out_infinite_reverse]"></div>
        <div className="absolute left-[70%] top-[40%] w-[5px] h-[5px] rounded-full bg-signal/25 animate-[float_8s_ease_in_out_infinite]"></div>
        <div className="absolute left-[20%] top-[80%] w-[2px] h-[2px] rounded-full bg-signal/10 animate-[float_3s_ease_in_out_infinite_reverse]"></div>
        <div className="absolute left-[80%] top-[20%] w-[4px] h-[4px] rounded-full bg-signal/20 animate-[float_5s_ease_in_out_infinite]"></div>
      </div>
    </div>
  );
}