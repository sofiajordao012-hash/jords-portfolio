# Jords Portfolio — Project Instructions

## What this project is
Personal portfolio website for Sofia Jordao ("Jords"), a video editor. Built in React 19 + TypeScript, Vite 6, Tailwind CSS v4 (CSS-first config), and Framer Motion (`motion/react`). Deployed to Vercel.

## Visual direction
Premium, monochrome, cinematic, dark, minimal, polished. Think Apple meets film studio. No bright colors, no playful layouts, no redesigns. Every change should feel intentional and refined.

## Main files
- `src/App.tsx` — all sections, components, and layout
- `src/index.css` — Tailwind v4 `@theme` config, custom CSS classes, animations

## Hard rules

### Never do these without explicit instruction:
- Commit or push (always wait to be asked)
- Change any copy, links, videos, or section order
- Redesign or restructure sections
- Add new sections, components, or dependencies
- Rewrite large chunks of code

### Always do these:
- Read the relevant files before proposing anything
- Propose a short plan (what files, what changes, what risk) before editing
- Make small, surgical changes — prefer className and CSS adjustments over structural edits
- After every edit, report: files changed, summary of each change, how to test, any risks, and confirm no commit/push was made

## Tailwind v4 notes
- Config lives in `src/index.css` under `@theme { }` — there is no `tailwind.config.js`
- Custom colors: `apple-bg`, `apple-text`, `apple-sub`, `apple-blue`, `apple-gray-100/200/300`
- Custom utilities defined in `@layer utilities`: `.glass`, `.glass-premium`, `.text-gradient`, `.nav-link`, `.micro-label`
- Use `opacity-[0.xx]` for non-standard opacity values (e.g. `opacity-[0.7]`, not `opacity-70`)

## Dev server
```
npm run dev
```
Runs at http://localhost:3000 (or 3001 if 3000 is taken).
