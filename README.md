# Find the Object Ruikasa

Static GDevelop game, ready to publish directly with GitHub Pages.

## Structure

All website files live in `docs/`: `index.html`, the web manifest, exported JavaScript libraries, and game assets. Keep their relative paths intact.

Media files are organized under `docs/assets/`:

```text
assets/
├── images/
│   ├── characters/     # Rui and Tsukasa sprites
│   ├── scenery/        # Trees, bushes, birds, clouds, and other scenery
│   ├── backgrounds/   # Scene backgrounds
│   └── ui/
│       ├── controls/  # Zoom, reset, and sound buttons
│       └── elements/  # Dialogue panels, borders, and decorations
├── icons/             # Instruction and help icons
├── fonts/             # Font files and bitmap font atlas
└── audio/
    ├── music/
    └── effects/
```

Game resource paths are declared in `docs/data.js`; instruction icon paths are in `docs/instructions.js`, and font URLs are in `docs/instructions.css`. Bitmap font page paths are relative to their `.fnt` descriptor in `assets/fonts/`.

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

Run `node scripts/serve.mjs`, then open `http://localhost:8080`. To test on a phone connected to the same Wi-Fi, use the Mobile URL printed in the terminal. Allow Node.js on private networks if Windows Firewall prompts. Stop the server with Ctrl+C.

`docs/index.html` loads the game with an instruction popup over the paused game scene. `docs/instructions.js` manages loading and dismissal; `docs/instructions.css` styles the popup. The game resumes after the Start button is pressed. `docs/game.html` redirects older links to the same page. `docs/game-settings.js` disables the startup watermark and GDevelop splash without modifying generated runtime libraries.

Optional asset check (Node.js 22 or newer): run `node scripts/validate.mjs`. This checks exported script and resource paths, bitmap font images, and the manifest without changing game files. Node.js is only needed for this local check, not for hosting.

Serve `docs/` using any local static HTTP server. Use HTTP rather than opening `index.html` through `file://`, which can block game assets.
