# Vektra Landing

Marketing site for `vektra.games`. Links out to the artist portal
(`artists.vektra.games`) and the staff dashboard (`dashboard.vektra.games`).
No login, no backend.

## Vercel

Use `Landing` as the project root.

```text
Build Command: npm run build
Output Directory: dist
Install Command: npm install
```

## Local development

```bash
npm install
npm run dev      # Vite dev server
npm run lint     # tsc --noEmit
npm run build    # production build to dist/
```

## Notes

- The favicon/logo (`/assets/logo.png`) is served from `public/assets/`.
- The demo-tracker panels on the page use sample data — they are marketing
  previews, not live portal data.
