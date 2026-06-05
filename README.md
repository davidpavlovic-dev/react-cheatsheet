# React Cheat Sheet

A personal React cheat sheet app built with React, Vite, and JavaScript.

The app stores cheat sheet content in JSON files and renders a static site with searchable cards, category filters, item detail pages, and copyable code snippets.

## Local Setup

```powershell
npm install
npm run dev
```

Open the local URL shown by Vite, usually:

```text
http://127.0.0.1:5173/
```

## Build

```powershell
npm run build
```

The production files are generated in `dist/`.

## GitHub Pages

This project is configured for a GitHub Pages project site named `react-cheatsheet`.

Vite uses:

```js
base: "/react-cheatsheet/"
```

The workflow at `.github/workflows/deploy.yml` builds the app on pushes to `main`, uploads `dist/`, and deploys it with GitHub Pages Actions.

In the repository settings, set Pages build and deployment source to `GitHub Actions`.

## Routing

The app uses `HashRouter` so static GitHub Pages hosting can load routes reliably. Detail pages use URLs like:

```text
#/cheats/react-components
```

With hash routing, GitHub Pages only needs to serve `index.html`; React handles the route after the `#`.

## Adding Cheat Sheet Data

Cheat sheet items live in `src/data/cheats/*.json`.

Every item should include `do`, `dont`, and at least one short `codeSnippets` entry. Keep examples original and practical.
