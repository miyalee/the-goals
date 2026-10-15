# The Goals

Live demo: https://miyalee.github.io/the-goals/

A frontend demo that walks Maya (Nursing) and Alex (ICT) from setup to a shared city recommendation. Vanilla JavaScript, CSS and Vite, built from the Figma file `DDSS`, Page 2.

## Run locally

Requires Node.js 20.19+ or 22.12+.

```sh
npm install
npm run dev
```

## Build

```sh
npm run build
npm run preview
```

Deploy the contents of `dist/` to any static host. Asset paths are relative.

## Deploy to GitHub Pages

GitHub Pages serves the `gh-pages` branch, which holds only the built files. After committing to `main`:

```sh
npm run build
touch dist/.nojekyll
cd dist
git init -b gh-pages
git add -A
git commit -m "Deploy"
git push -f https://github.com/miyalee/the-goals.git gh-pages
cd .. && rm -rf dist
```

## Project structure

```text
the-goals/
├── index.html
├── src/
│   ├── app.js          # State, routes and events
│   ├── data.js         # Cities, members and the 9 analysis steps (titles, summary copy)
│   ├── components.js   # HTML render functions
│   ├── assets.js       # Image URLs for Vite
│   └── styles.css
├── assets/
│   ├── charts/         # 9 chart images, exported from Figma at 2x
│   ├── icons/          # SVG icons exported from Figma
│   └── avatars/        # Maya and Alex
└── docs/design-reference/  # Figma screenshots of the 11 screens (local only, ignored by Git)
```

## Screens

- `#/setup`: Setup 1 (Maya only). "Add Another Member" adds Alex (Setup 2); the × removes Alex.
- `#/analysis/<step-id>`: the 9 analysis screens. Step ids are in `src/data.js`.

Charts are static images. The prompt chips, AI assistant input and "Export Final Report" are visual only.
