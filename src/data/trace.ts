export const pipelineStages = [
  {
    label: 'Source',
    detail: 'Raw .trc source text',
  },
  {
    label: 'Lexing',
    detail: 'Characters → tokens',
  },
  {
    label: 'Parsing',
    detail: 'Tokens → syntax tree',
  },
  {
    label: 'AST',
    detail: 'Structured program tree',
  },
  {
    label: 'Semantic Analysis',
    detail: 'Scope & binding checks',
  },
  {
    label: 'Type Checking',
    detail: 'Static type verification',
  },
  {
    label: 'IR / Bytecode',
    detail: 'Lowered intermediate form',
  },
  {
    label: 'Runtime',
    detail: 'Execution & output',
  },
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
      'TRACE begins by transforming source code into tokens and then organizing those tokens into a structured abstract syntax tree. These stages form the foundation for everything that follows.',
  },
  {
    id: 'semantic-analysis',
    title: 'Semantic Analysis',
    copy:
      'The semantic layer gives structure meaning. Scope resolution, symbol tables, name binding, and other semantic checks help identify invalid programs before execution.',
  },
  {
    id: 'type-checking',
    title: 'Type Checking',
    copy:
      'TRACE is designed around static type verification so that incompatible operations and assignments can be identified during compilation rather than discovered unexpectedly at runtime.',
  },
  {
    id: 'runtime-bytecode',
    title: 'Runtime / Bytecode',
    copy:
      'The execution side of TRACE is designed around a compact intermediate representation and runtime, keeping the path from compiled representation to program output understandable.',
  },
];

export const docSections = [
  {
    title: 'Getting Started',
    copy: 'Install TRACE, create a .trc file, and run your first program.',
  },
  {
    title: 'Language Reference',
    copy: 'Explore TRACE syntax, types, expressions, functions, and control flow.',
  },
  {
    title: 'CLI Reference',
    copy: 'Learn the commands and options available through the TRACE toolchain.',
  },
  {
    title: 'Compiler Internals',
    copy: 'Explore the stages that transform TRACE source code into executable form.',
  },
];

export interface DownloadTarget {
  platform: string;
  detail: string;
  available: boolean;
}

export const downloadTargets: DownloadTarget[] = [
  {
    platform: 'macOS',
    detail: 'Platform binaries will be published with the first public release',
    available: false,
  },
  {
    platform: 'Windows',
    detail: 'Platform binaries will be published with the first public release',
    available: false,
  },
  {
    platform: 'Linux',
    detail: 'Platform binaries will be published with the first public release',
    available: false,
  },
];

export interface ReleaseEntry {
  version: string;
  date: string;
  notes: string;
}

export const releases: ReleaseEntry[] = [
  {
    version: '0.1.0',
    date: 'In development',
    notes: 'Active development version. The TRACE language and compiler are under active development.',
  },
];

export const codeExample = `let x: int = 10;
let y: int = 20;

output(x + y);`;

export const codeOutput = `30`;