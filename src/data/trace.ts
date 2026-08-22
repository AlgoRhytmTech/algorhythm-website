export const pipelineStages = [
  { label: 'Source', detail: 'Raw .tc source text' },
  { label: 'Lexing', detail: 'Characters → tokens' },
  { label: 'Parsing', detail: 'Tokens → syntax tree' },
  { label: 'AST', detail: 'Structured program tree' },
  { label: 'Semantic Analysis', detail: 'Scope & binding checks' },
  { label: 'Type Checking', detail: 'Static type verification' },
  { label: 'IR / Bytecode', detail: 'Lowered intermediate form' },
  { label: 'Runtime', detail: 'Execution & output' },
];

export interface TraceStageSection {
  id: string;
  title: string;
  copy: string;
}

export const stageSections: TraceStageSection[] = [
  {
    id: 'lexer-parser',
    title: 'Lexer & Parser',
    copy:
      'Core areas: converting raw source text into tokens, then assembling those tokens into a structured abstract syntax tree that the rest of the pipeline can reason about.',
  },
  {
    id: 'semantic-analysis',
    title: 'Semantic Analysis',
    copy:
      'Designed around scope resolution, symbol tables, and binding checks — catching structural errors before a program ever reaches execution.',
  },
  {
    id: 'type-checking',
    title: 'Type Checking',
    copy:
      'Core areas: static verification of declared and inferred types across expressions, so type errors surface at compile time rather than at runtime.',
  },
  {
    id: 'runtime-bytecode',
    title: 'Runtime / Bytecode',
    copy:
      'Designed around a compact intermediate representation that a small runtime can execute directly, keeping the path from IR to output easy to follow.',
  },
];

export const docSections = [
  { title: 'Getting Started', copy: 'Install TRACE and run your first program.' },
  { title: 'Language Reference', copy: 'Syntax, types, and language semantics.' },
  { title: 'CLI Reference', copy: 'Commands and flags for the trace toolchain.' },
  { title: 'Compiler Internals', copy: 'How the pipeline is structured internally.' },
];

export interface DownloadTarget {
  platform: string;
  detail: string;
  available: boolean;
}

export const downloadTargets: DownloadTarget[] = [
  { platform: 'macOS', detail: 'Coming soon', available: false },
  { platform: 'Windows', detail: 'Coming soon', available: false },
  { platform: 'Linux', detail: 'Coming soon', available: false },
];

export interface ReleaseEntry {
  version: string;
  date: string;
  notes: string;
}

// Placeholder release history — replace with real entries at launch.
export const releases: ReleaseEntry[] = [
  { version: '0.0.0', date: 'Unreleased', notes: 'Placeholder — no builds published yet.' },
];

export const codeExample = `let x: int = 10;
let y: int = 20;

output(x + y);`;

export const codeOutput = `30`;
