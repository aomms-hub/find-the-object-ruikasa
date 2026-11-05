# Find the Object Ruikasa

A static GDevelop game prepared for GitHub Pages. No dependencies need to be installed.

## Project layout

- `public/`: the complete exported game, runtime libraries, fonts, images, and audio.
- `scripts/build.mjs`: checks asset references (including exact filename case) and copies the game to `dist/`.
- `dist/`: generated site, excluded from Git.
- `.github/workflows/pages.yml`: validates pull requests and deploys pushes to `main`.

Keep the exported game's directory structure and filenames intact. Its relative URLs support both repository subpaths and custom domains.

## Deploy

1. In the GitHub repository, open **Settings → Pages** and set **Source** to **GitHub Actions**.
2. Commit and push these changes to `main`.
3. Wait for **Deploy to GitHub Pages** to finish in the **Actions** tab.

The site URL will be https://aomms-hub.github.io/find-the-object-ruikasa/.

## Build locally

With Node.js 22 or newer:

```sh
npm run build
```

Serve `dist/` with a static HTTP server to preview the game. Opening the HTML directly using `file://` can prevent game resources from loading.

## Update the game

Replace the contents of `public/` with a fresh GDevelop HTML5 export, keeping `public/.nojekyll`. Run the build, then commit and push. Do not manually edit generated runtime files unless necessary; another export will overwrite them.
