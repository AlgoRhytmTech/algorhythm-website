# AlgoRhythm

Frontend for AlgoRhythm — a React + TypeScript + Vite + Tailwind CSS site with
two routes: the AlgoRhythm homepage and a dedicated page for the TRACE
project.

No backend, database, or auth is included. All company and product content
(achievements, links, download URLs, release notes) is a placeholder — see
"Editing content" below.

## Stack

- React 18 + TypeScript
- Vite
- Tailwind CSS
- React Router (client-side routing)

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (typically `http://localhost:5173`).

Build for production:

```bash
npm run build
npm run preview
```

## Project structure

```
src/
  components/   # Reusable UI primitives (NavBar, Footer, CodeBlock, ...)
  layouts/      # Page shells (SiteLayout wraps every route)
  pages/        # Route-level components (HomePage, TracePage)
  sections/     # Page sections composed inside each page
  data/         # Content data — edit here, not in components
  styles/       # Global CSS + Tailwind entry point
  assets/       # Static assets (currently empty)
```

## Editing content

- **Projects list** (`src/data/projects.ts`): add a new entry here to have it
  automatically appear on the homepage Projects section — no component
  changes required.
- **TRACE content** (`src/data/trace.ts`): pipeline stages, doc section
  labels, download targets, and release history all live here.
- **Placeholders to replace before launch**: GitHub links (currently point to
  `https://github.com`), the contact email on the homepage, TRACE download
  links, and the release history table.

## Notes

- The TRACE "Playground" is a frontend-only preview. It does not execute
  code — the Run button shows a static message. Wiring up real execution
  requires a backend, which is intentionally out of scope here.
- Respects `prefers-reduced-motion`.
