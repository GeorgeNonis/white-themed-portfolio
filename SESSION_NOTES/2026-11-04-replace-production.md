# 2026-11-04 — Replace giorgos-nonis.vercel.app with Aegean site

## Goal

Ship the locked Lovable site (`george-nonis-site`, Aegean → Aarhus) as the
production personal site at https://giorgos-nonis.vercel.app/ — pixel-faithful
to the lock, zero surprise downtime, old Next portfolio recoverable.

## Scope

- **In:** local `george-nonis-site` → Vercel-ready Nitro build → GitHub →
  preview deploy → production cutover of project `giorgos-nonis`
- **Out:** web_factory `clone-plate` (wrong machine — this is not a layout drill)
- **Out:** redesign / content rewrite of locked sections
- **Out:** custom domain beyond `giorgos-nonis.vercel.app` (none attached)
- **Out:** force-push / rewrite of Lovable cloud history (export has no `.git`)

## Facts (verified)

| Item | Value |
|------|--------|
| Locked local | `/home/giorgos/coding/george-nonis-site` |
| Lock | `LOCK.md` — design `6677a134`, assets `b54705b5` |
| Stack | TanStack Start + Vite 8 + Nitro 3 (default preset **cloudflare-module**) |
| Live today | https://giorgos-nonis.vercel.app — Next.js App Router |
| Vercel project | `giorgos-nonis` (`prj_LmTiOtloAsRjuRGxeitwqTUu1a0z`) |
| Git link today | `GeorgeNonis/white-themed-portfolio` @ `master` |
| Prod deploy | READY `821248db` on master |
| Local export git | **none** (downloaded snapshot, not a clone) |

## Hard risk

Lovable’s default **build** target is Cloudflare. Production is **Vercel**.
Outside the Lovable sandbox we can set `nitro: { preset: "vercel" }` in
`vite.config.ts` and verify `.output/nitro.json` says `vercel` before any
deploy. Do **not** push Cloudflare output to the Vercel project.

## Recommended cutover path (safest)

1. **Repo strategy (recommended):** new GitHub repo
   `GeorgeNonis/george-nonis-site` — keep `white-themed-portfolio` frozen as
   rollback source. Do **not** overwrite `master` of the old Next app until
   preview is green.
2. **Branch:** `feat/vercel-cutover` for all deploy wiring.
3. **Build:** explicit Nitro `preset: "vercel"`; `bun run build`; assert
   preset + smoke `preview` if available.
4. **Preview:** connect new repo to Vercel as preview only (or temporary
   second project) — **do not** retarget production domain yet.
5. **QA gate vs lock:** desktop + mobile — hero, About, Craft, Experience
   dive, Work links, Life, Contact, mobile DESCEND TO menu.
6. **Cutover:** point Vercel project `giorgos-nonis` at the new repo’s
   production branch; framework settings away from Next.js; promote.
7. **Rollback:** Vercel instant rollback to previous READY deployment
   (`CnTRJ2ep…` / sha `821248db`) if anything breaks.

## Alternative (rejected unless you insist)

Replace contents of `white-themed-portfolio` on a long-lived branch. Works,
but mixes Next history with TanStack and makes rollback messier.

## Steps

- [x] **0** Approve this plan (repo strategy + preview-before-prod)
- [x] **1** `feat/aegean-cutover` on white-themed-portfolio (+ archive branch)
- [x] **2** Wire `nitro: { preset: "vercel" }` + build assert
- [ ] **3** Content freeze checklist vs `LOCK.md` (no visual edits)
- [ ] **4** Push + Vercel preview deploy
- [ ] **5** Visual QA (1440 + 360) against local lock
- [ ] **6** Production retarget / promote on `giorgos-nonis`
- [ ] **7** Update `ai_context` pack + CONTINUATION; archive note on old pack

## Current state

- Repo: `GeorgeNonis/white-themed-portfolio`
- Archive branch pushed: `archive/next-white-theme`
- Feature branch: `feat/aegean-cutover` (Lovable + `nitro: { preset: "vercel" }`)
- Local build asserts preset `vercel`; lint/test green
- Vercel project framework set to `tanstack-start` + bun install/build
- Production domain still on previous Next deploy until branch merges

## Open questions (need your call)

1. **Repo:** new `GeorgeNonis/george-nonis-site` (recommended) vs overwrite
   `white-themed-portfolio`?
2. **Name on site:** lock uses **George** (already). Keep (yes)?
3. **Old site:** keep repo public as archive, or private after cutover?

## Next chat prompt

```
Continue george-nonis-site → Vercel cutover.

Read SESSION_NOTES/2026-11-04-replace-production.md.
Approved: new GitHub repo + preview before production.
Start Step 1–2 only: git + Nitro vercel preset + build assert.
Do not touch production domain until Step 5 QA passes.
```
