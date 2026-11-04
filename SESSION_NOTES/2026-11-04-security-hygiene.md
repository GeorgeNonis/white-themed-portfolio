# 2026-11-04 — Security + hygiene (feat/aegean-cutover)

## Verdict

**Ship-OK for a static portfolio.** No critical/high. Optional cleanup below.

## Findings

| Sev | Item | Action |
|-----|------|--------|
| Med | No CSP / hardening headers; Google Fonts CDN | Add Vercel headers after merge (or self-host fonts) |
| Med | 46 unused shadcn UI + ~30 radix deps | Post-merge prune (not blocker) |
| Med | Nitro **beta** in prod | Accept Lovable stack; watch upgrades |
| Med | `console.error` monkeypatch → fat stacks in Vercel logs | Leave; no secrets today; watch future throws |
| Low | Lovable telemetry hooks in client (inert on Vercel) | Optional strip later |
| Low | `.env` not in `.gitignore` | Add `.env` / `.env.*` before any secrets |
| Low | `rel="noreferrer"` only (fine modern browsers) | Optional `noopener` |
| Info | CSRF middleware unused (no serverFns) — correct default | Keep |

## Positive

No committed secrets, no open redirects, no live XSS sinks, generic 500 HTML, external links have `noreferrer`.
