# Giorgos Nonis — personal site

Aegean → Aarhus. Replaces the previous Next.js white-theme portfolio on
https://giorgos-nonis.vercel.app/

Stack: TanStack Start, Vite, Nitro (Vercel preset), Tailwind.

## Dev

```bash
bun install
bun run dev -- --host 0.0.0.0 --port 8765
```

## Build

```bash
bun run build   # must emit Nitro preset "vercel"
bun run test
```

Previous Next.js site archived on branch `archive/next-white-theme`.
