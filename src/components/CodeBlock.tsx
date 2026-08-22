interface CodeBlockProps {
  code: string;
  filename?: string;
  output?: string;
}

export default function CodeBlock({ code, filename = 'main.tc', output }: CodeBlockProps) {
  const lines = code.split('\n');

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
          {lines.map((line, i) => (
            <div key={i} className="flex">
              <span className="line-num mr-4 w-4 text-right">{i + 1}</span>
              <span className="text-paper-200">{line || '\u00A0'}</span>
            </div>
          ))}
        </code>
      </pre>
      {output !== undefined && (
        <div className="border-t border-ink-600 bg-ink-950 px-5 py-4">
          <div className="mb-2 font-mono text-2xs uppercase tracking-[0.2em] text-paper-500">
            Output
          </div>
          <div className="font-mono text-sm text-signal">{output}</div>
        </div>
      )}
    </div>
  );
}
