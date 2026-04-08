# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (localhost:4321)
- `npm run build` — Production build to `./dist/`
- `npm run preview` — Preview production build locally
- `npm run format` — Format with Biome (`biome format --write .`)
- `npm run lint` — Lint with Biome (`biome lint .`)
- `npm run check` — Full Biome check (`biome check .`)

## Architecture

Astro 5 static blog with Tailwind CSS v4 and the `@tailwindcss/typography` plugin. Tailwind is integrated via Vite plugin (not Astro integration).

### Content

- Blog posts live in `src/content/post/` as Markdown files
- Content schema defined in `src/content/config.ts` — posts have: `title` (required), `publishDate`, `updateDate`, `draft`, `excerpt`, `image`, `category`, `tags`, `author`, plus SEO `metadata`
- Posts are rendered via `src/pages/post/[...slug].astro` using Astro's content collections and `getStaticPaths()`

### Layout & Styling

- Single layout: `src/layouts/Layout.astro`
- Global styles + theme in `src/styles/global.css` using Tailwind v4 `@theme` directive
- Brand colors: `brand-dark` (#050505), `brand-light` (#f0f0f0), `brand-accent` (#ff4500), `brand-border` (#333333)
- Fonts: Space Mono (mono), Inter (sans) — loaded from Google Fonts in Layout
- Custom CSS animations: glitch text effects (`glitch-text`, `glitch-text-light`), marquee scroll

### Code Style (Biome)

- Spaces (indent width 2), LF line endings, 100 char line width
- Single quotes for JS/TS
- `useImportType` rule is off
- `useKeyWithClickEvents` a11y rule is off
