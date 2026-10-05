# Mane Talibong — Portfolio

One-page, fixed-viewport showcase: live client sites, resume, reviews, and contact. Built with Vite + React + TypeScript + Tailwind.

## Local development

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`). Use hash routes: `#works`, `#about`, `#resume`, `#reviews`, `#contact`.

## GitHub Pages deploy

1. Create a GitHub repo named `portfolio` (or change `base` in `vite.config.ts` to match your repo name).
2. Update `homepage` in `package.json` to `https://<your-username>.github.io/portfolio`.
3. If the repo is **not** named `portfolio`, set `base: '/your-repo-name/'` in `vite.config.ts`.
4. For a **user site** (`username.github.io` repo), set `base: '/'` in `vite.config.ts`.

```bash
npm run deploy
```

In GitHub: **Settings → Pages → Source**: deploy from the `gh-pages` branch.

## Customize content

| File | Purpose |
|------|---------|
| `src/data/projects.ts` | Client sites (from Galaxy Growth Media portfolio) |
| `src/data/profile.ts` | About, resume copy, links, YouTube ID |
| `public/resume.pdf` | Optional local PDF for the Download button |
| `public/avatar.jpg` | Optional headshot (wire up in AboutPanel if added) |

## Stack

- Vite, React 19, TypeScript
- Tailwind CSS 4
- Framer Motion, Lucide React
