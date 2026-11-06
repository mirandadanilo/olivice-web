# Graph Report - olivice-web  (2026-11-06)

## Corpus Check
- 17 files · ~4,323 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 3 file(s) not represented in the graph (top: (none) 1, .ico 1, .css 1)

## Summary
- 138 nodes · 146 edges · 14 communities (9 shown, 5 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `e0407d4b`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- package.json
- compilerOptions
- page.tsx
- Colección Perú - OLIVICE
- layout.tsx
- plan-web-olivice.md
- scripts
- Página de Inicio
- postcss.config.mjs
- OLIVICE
- This is NOT the Next.js you know
- README.md

## God Nodes (most connected - your core abstractions)
1. `Colección Perú - OLIVICE` - 25 edges
2. `compilerOptions` - 16 edges
3. `next` - 7 edges
4. `Página de Inicio` - 7 edges
5. `scripts` - 5 edges
6. `react` - 4 edges
7. `Identidad de Marca` - 4 edges
8. `Home()` - 3 edges
9. `eslint` - 3 edges
10. `eslint-config-next` - 3 edges

## Surprising Connections (you probably didn't know these)
- `Home()` --calls--> `CartillaInformativaViewer()`  [EXTRACTED]
  src/app/page.tsx → src/app/components/CartillaInformativaViewer.tsx
- `Home()` --calls--> `CartillaViewer()`  [EXTRACTED]
  src/app/page.tsx → src/app/components/CartillaViewer.tsx

## Import Cycles
- None detected.

## Communities (14 total, 5 thin omitted)

### Community 0 - "package.json"
Cohesion: 0.12
Nodes (21): eslintConfig, devDependencies, eslint@^9, eslint-config-next@16.3.4, tailwindcss@^4, @tailwindcss/postcss@^4, @types/node@^20, @types/react@^19 (+13 more)

### Community 1 - "compilerOptions"
Cohesion: 0.11
Nodes (18): compilerOptions, allowJs, esModuleInterop, incremental, isolatedModules, jsx, lib, module (+10 more)

### Community 2 - "page.tsx"
Cohesion: 0.14
Nodes (15): nextConfig, dependencies, next@16.3.4, react@19.2.8, react-dom@19.2.8, next, react, react-dom (+7 more)

### Community 3 - "Colección Perú - OLIVICE"
Cohesion: 0.08
Nodes (25): Amazonas, Apurímac, Arequipa, Ayacucho, Cajamarca, Colección Perú - OLIVICE, Cusco, Huancavelica (+17 more)

### Community 4 - "layout.tsx"
Cohesion: 0.33
Nodes (3): geistMono, geistSans, metadata

### Community 5 - "plan-web-olivice.md"
Cohesion: 0.12
Nodes (16): Colección Perú, Concepto, Departamentos, Diseño Web, Dominio, Eslogan, Fase 2, Identidad de Marca (+8 more)

### Community 6 - "scripts"
Cohesion: 0.40
Nodes (5): scripts, build, dev, lint, start

### Community 8 - "Página de Inicio"
Cohesion: 0.29
Nodes (7): Botellas Grabadas, Colección Perú, Contacto, Descubre el Perú, Hero Principal, Página de Inicio, Sobre OLIVICE

### Community 10 - "OLIVICE"
Cohesion: 0.50
Nodes (3): Colección Perú, Objetivos, OLIVICE

## Knowledge Gaps
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `next` connect `page.tsx` to `package.json`, `layout.tsx`?**
  _High betweenness centrality (0.067) - this node is a cross-community bridge._
- **Should `package.json` be split into smaller, more focused modules?**
  _Cohesion score 0.1225296442687747 - nodes in this community are weakly interconnected._
- **Should `compilerOptions` be split into smaller, more focused modules?**
  _Cohesion score 0.10526315789473684 - nodes in this community are weakly interconnected._
- **Should `page.tsx` be split into smaller, more focused modules?**
  _Cohesion score 0.14035087719298245 - nodes in this community are weakly interconnected._
- **Should `Colección Perú - OLIVICE` be split into smaller, more focused modules?**
  _Cohesion score 0.07692307692307693 - nodes in this community are weakly interconnected._
- **Should `plan-web-olivice.md` be split into smaller, more focused modules?**
  _Cohesion score 0.11764705882352941 - nodes in this community are weakly interconnected._