# Find the Object Ruikasa

Static GDevelop game, ready to publish directly with GitHub Pages.

## Structure

All website files live in `docs/`: `index.html`, the web manifest, exported JavaScript libraries, and game assets. Keep their relative paths intact.

No Node.js installation, dependency installation, build command, or custom Actions workflow is required.

## Publish

1. Commit and push the project to `main`.
2. Open the repository's **Settings → Pages**.
3. Set **Source** to **Deploy from a branch**.
4. Select branch **main** and folder **/docs**, then save.

After GitHub completes deployment, visit https://aomms-hub.github.io/find-the-object-ruikasa/.

## Update the game

Export the game from GDevelop as HTML5 and replace the game files in `docs/`. Keep `.nojekyll`. Ensure bitmap font `.fnt` files reference the actual exported image filenames, including their letter case. Commit and push to publish the update.

## Preview

Optional asset check (Node.js 22 or newer): run `node scripts/validate.mjs`. This checks exported script and resource paths, bitmap font images, and the manifest without changing game files. Node.js is only needed for this local check, not for hosting.

Serve `docs/` using any local static HTTP server. Use HTTP rather than opening `index.html` through `file://`, which can block game assets.
