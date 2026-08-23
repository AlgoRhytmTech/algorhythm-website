import { useEffect, useState } from 'react';

interface CodeBlockProps {
  code: string;
  filename?: string;
  output?: string;
}

export default function CodeBlock({ code, filename = 'main.tc', output }: CodeBlockProps) {
  const lines = code.split('\n');
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [cursorPosition, setCursorPosition] = useState<number>(0);

  useEffect(() => {
    // Simulate typing effect for code reveal
    if (lines.length === 0) return;

    let currentLine = 0;
    const interval = setInterval(() => {
      setVisibleLines((prev) => [...prev, currentLine]);
      currentLine++;
      if (currentLine >= lines.length) {
        clearInterval(interval);
        // After code is revealed, show cursor blinking
        const cursorInterval = setInterval(() => {
          setCursorPosition((prev) => (prev + 1) % 2);
        }, 500);
        return () => clearInterval(cursorInterval);
      }
    }, 300);

    return () => {
      clearInterval(interval);
    };
  }, [lines.length]);

  return (
    <div className="card overflow-hidden">
      <div className="flex items-center justify-between border-b border-ink-600 bg-ink-800 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
          <span className="h-2.5 w-2.5 rounded-full bg-ink-600" />
        </div>
        <span className="font-mono text-2xs text-paper-400">{filename}</span>
      </div>
      <pre className="overflow-x-auto p-5 text-sm leading-relaxed">
        <code className="font-mono">
          {lines.map((line, index) => (
            <div
              key={index}
              className={`flex opacity-0 transform translate-y-1 transition-all duration-500 ease-out ${visibleLines.includes(index) ? 'opacity-100 transform translate-y-0' : ''}`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <span className="line-num mr-4 w-4 text-right text-paper-400">{index + 1}</span>
              <span className="text-paper-200">{line || '\u00A0'}</span>
            </div>
          ))}
          {/* Animated cursor */}
          {visibleLines.length === lines.length && (
            <div className="flex">
              <span className="line-num mr-4 w-4 text-right text-paper-400">{lines.length + 1}</span>
              <span className={`inline-block w-1 h-5 bg-paper-200 animate-[cursor-blink_1s_ease-in-out_infinite] opacity-${cursorPosition * 100}`} />
            </div>
          )}
        </code>
      </pre>
      {output !== undefined && (
        <div className="border-t border-ink-600 bg-ink-950 px-5 py-4">
          <div className="mb-2 font-mono text-2xs uppercase tracking-[0.2em] text-paper-500 animate-[fade-up_0.6s_ease-out forwards]">
            Output
          </div>
          <div className="font-mono text-sm text-signal animate-[fade-up_0.6s_ease-out_0.2s forwards]">{output}</div>
        </div>
      )}
    </div>
  );
}
