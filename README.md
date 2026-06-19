# Vektra Landing

Static marketing site for `vektra.games`. Links out to the artist portal
(`artists.vektra.games`) and the staff dashboard (`dashboard.vektra.games`).
No login, no backend.

## Vercel

Use `Landing` as the project root.

```text
Build Command: node scripts/build-landing.mjs
Output Directory: dist
Install Command: (none)
```

## Structure

- `index.html` — landing page
- `assets/` — styles, script, logo (copied into `dist/`)
- `scripts/build-landing.mjs` — copies `index.html` and `assets/` into `dist/`
