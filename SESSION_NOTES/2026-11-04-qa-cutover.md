# QA contract — Aegean → giorgos-nonis cutover

## Behavior

| ID | Class | Case | Expect |
|----|-------|------|--------|
| CUT-01 | Normal | `/` loads | 200, title contains George Nonis |
| CUT-02 | Normal | Nav anchors | #about #craft #experience #work #life #contact reach sections |
| CUT-03 | Normal | Work links | Pwd store + Color Picker GH + GeorgeNonis GH open |
| CUT-04 | Normal | Contact | mailto + LinkedIn + GitHub correct |
| CUT-05 | Edge | Direct `/` only | No Next routes 404 for old paths (acceptable) |
| CUT-06 | Edge | Build preset | `.output/nitro.json` preset === `vercel` |
| CUT-07 | UI | Hero | Name hero-level; sea image; View work + Get in touch |
| CUT-08 | UI | Experience | Dive timeline depths + 3 career stops |
| CUT-09 | Mobile | 360 menu | DESCEND TO overlay; links + Get in touch; close works |
| CUT-10 | Mobile | No clip | Horizontal overflow none on main bands |

## Must not

- Merge to `master` before preview QA
- Change locked visual copy/layout in this slice
- Deploy Cloudflare preset to Vercel
