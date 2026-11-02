# Find the Object Ruikasa

A browser game exported with GDevelop 5.6.286.

## Run locally

Requires Node.js 22+ and Python 3. No package installation is needed.

```sh
npm run dev
```

Open http://localhost:5173. Serve the project over HTTP so the game can load its resources.

## Project layout

| Path | Responsibility |
| --- | --- |
| `index.html` | Page metadata and ordered runtime script loading |
| `src/bootstrap.js` | Canvas creation, input binding, asset loading, and startup |
| `src/styles.css` | Page and canvas styles |
| `game/` | GDevelop export: runtime, extensions, generated scene code, data, and media |
| `scripts/` | Dependency-free validation and static build tools |
| `dist/` | Generated deployable site (ignored by Git) |

The page's `<base href="./game/">` keeps GDevelop's relative media and runtime URLs working. Page-owned scripts and styles use `../src/` relative to that base. Preserve the order of the classic script tags: the engine and extensions share the global `gdjs` namespace.

## Validate and build

```sh
npm run check
npm run build
npm run preview
```

The check validates script syntax, page references, game resource files, startup order, and the manifest entry point. It does not execute gameplay. Preview the build at http://localhost:4173 and verify loading, input, sound, and completion in a browser before release. Deploy the contents of `dist/` to a static host; keep its directory structure intact. Relative URLs support hosting beneath a subdirectory.

## Editing and re-exporting

Edit the page shell and startup in `index.html` and `src/`. Treat `game/` as generated code and preserve its bundled `LICENSE.GDevelop.txt`. Media names and layout stay intact because generated scene data and bitmap fonts reference them.

`src/bootstrap.js` disables the GDevelop splash logo and in-game watermark before creating the game. The loading progress bar remains enabled. The page does not load the bundled splash logo script; preserve these choices when updating the exported script list.

The editable GDevelop project is not included in this repository. Make gameplay changes in that original project when available, then export to a temporary directory. Replace `game/` with the export contents except its `index.html`. Compare the new exported HTML script list and startup with the root `index.html` and `src/bootstrap.js`, incorporating any runtime changes. Set `game/manifest.webmanifest`'s `start_url` to `../index.html`, then run validation and build and smoke-test the game.
