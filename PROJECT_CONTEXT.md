# PROJECT_CONTEXT — Portfolio (white-theme-portfolio)

**Repo:** `white-theme-portfolio` · Next.js 13 App Router · TypeScript · Tailwind · Framer Motion

**Live:** https://giorgos-nonis.vercel.app · **GitHub:** https://github.com/GeorgeNonis/white-themed-portfolio

## Stack & layout

| Path | Role |
|------|------|
| `app/page.tsx` | Home — section order |
| `app/layout.tsx` | Root layout, theme init script (`beforeInteractive`), page background blobs |
| `app/globals.css` | Timeline dark overrides, `overflow-x: hidden` on `html` |
| `config/data.ts` | Experience, projects, skills, nav links (main content edits) |
| `components/intro/` | Hero |
| `components/about/` | About + Beyond code (diving, HYF) |
| `components/projects/` | Project cards (dual-image hover) |
| `components/experience/` | Timeline (`react-vertical-timeline-component`) |
| `components/skills/` | Skills cloud |
| `components/header/` | Fixed navbar |
| `context/theme-switch/` | Theme provider + toggle |
| `public/projects/` | Extension screenshots for project cards |

## Commands

```bash
npm install
npm run dev      # http://localhost:3000
npm run build
npm run start
```

## Content rules

- **Source of truth for career copy:** `personal_context/CAREER.md` (private)
- **Do not list:** Nina Global, weak 2023 learning projects, hospitality
- **Experience order:** oldest → newest in `experiencesData` (timeline renders top to bottom)
- **Projects:** showcase live public work (Chrome extensions); add slots when new public repos ship

## UI & theme (2026-07-09 polish)

### Design tokens

| Token | Value | Use |
|-------|-------|-----|
| Dark page bg | `#0b1220` | `body` dark mode (`layout.tsx`) |
| Indigo accent | `#6366f1` | Experience icons, timeline line |
| Dark card bg | `#1c1c1f` | Experience timeline cards |
| Light card bg | `#f8fafc` | Experience timeline cards |

### Theme hydration

- `app/layout.tsx` runs a `beforeInteractive` script that sets `html.dark` from `localStorage` / `prefers-color-scheme` **before paint** (prevents white flash).
- `context/theme-switch/index.tsx` syncs React state on `useLayoutEffect`; exposes `resolvedTheme` from DOM on first client render.
- **Do not** use `overflow-x-clip` on project card wrappers — it clips floating screenshots.

### Experience timeline

- `components/experience/experience.tsx` uses `useSyncExternalStore` on `html.dark` (single source of truth vs React context).
- Inline `contentStyle` colors + `globals.css` `html.dark` overrides with `!important` (library CSS forces `background: #fff`).
- Icons via `iconKey` + `getExperienceIcon()` in `experience.types.ts`.

### Project cards

- **Password Generator** (index 0): image right · **Color Picker** (index 1): image left (`imageOnLeft={index % 2 === 1}`).
- Dual-image hover: `imageUrls: [empty, filled]` in `config/data.ts`; React `useState` hover swap.
- Screenshots: `public/projects/pwd-*.png`, `color-picker-empty.png`, `color-picker-filled.png`.
- Layout follows original template: images **inside** `<section>`, positioned `-left-40` / `-right-40` at `lg+`; text `z-10`, images `z-0`.
- Responsive at `sm`/`md`: smaller image width + offset to avoid horizontal scroll; `html { overflow-x: hidden }` as viewport-edge safety only.
- **Regressions to avoid:** double left offset (`sm:pl-36` + `sm:ml-[18rem]`); images in outer wrapper with `z-20` over text; `dark:` Tailwind on timeline text without matching `contentStyle` background.

### Screenshot capture (Color Picker)

```bash
cd color-picker-extension
npm run build
node scripts/capture-portfolio-shots.mjs
# → white-theme-portfolio/public/projects/color-picker-empty.png + color-picker-filled.png
```

## Known follow-ups

- **Navbar dark mode** — background + active/hover pill too dark (`components/header/index.tsx`: `dark:bg-gray-950`, `dark:bg-gray-800` active). Fix in a separate session.
- Color Picker `demoUrl` — swap to Chrome Web Store slug when confirmed live.

## Local AI wiring (optional, gitignored)

`.cursor/` and `AI_GUIDELINES.md` symlink — re-wire via `ai_skills/skills/setup-cursor-skills/script.sh .` Session state lives in private **`ai_context/repos/white-theme-portfolio/`**.

## Deprecated

`personal_portfolio` (Three.js GitHub Pages) — **do not update**. Canonical site is this repo on Vercel.
