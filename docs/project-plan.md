# Project Plan

## Current Detail Page Approach

The app uses one detail page per cheat sheet item:

```text
#/cheats/:cheatId
```

HashRouter is used so the static app can run on GitHub Pages without server-side route handling.

Each cheat sheet item owns its practical examples through `codeSnippets`. Snippets are rendered on the item detail page with a copy button for each snippet. The app does not create separate pages for individual snippets right now.

Each item should include:

- `do` for practical rules to follow
- `dont` for mistakes or habits to avoid
- `codeSnippets` for short original examples
- `courseReference` for the related course project and folder

The card grid stays lightweight. Cards show summary information and link to the detail page, where the full explanation, snippets, interview answer, common mistake, and course reference are shown.

