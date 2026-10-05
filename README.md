# Mane Talibong — Portfolio

One-page, fixed-viewport showcase: live client sites, resume, reviews, and contact. Built with Vite + React + TypeScript + Tailwind.

## Local development

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (usually `http://localhost:5173`). Use hash routes: `#works`, `#about`, `#resume`, `#reviews`, `#contact`.

## Live site

**https://manetalibong.github.io/mane-portfolio/**

Repo: [github.com/Manetalibong/mane-portfolio](https://github.com/Manetalibong/mane-portfolio)

(This project is separate from [Manetalibong/Portfolio](https://github.com/Manetalibong/Portfolio), which powers [manetalibong.com](https://manetalibong.com/).)

## GitHub Pages deploy

`vite.config.ts` uses `base: '/mane-portfolio/'` to match the repo name. After changes:

```bash
npm run deploy
```

Pages source: **gh-pages** branch, root `/`.

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
