import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const site = fileURLToPath(new URL('../docs/', import.meta.url));
const files = new Set();
async function collect(directory, prefix = '') {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const name = prefix + entry.name;
    if (entry.isDirectory()) await collect(path.join(directory, entry.name), name + '/');
    else files.add(name);
  }
}
await collect(site);
let checked = 0;
function check(reference) {
  if (/^(https?:|data:|blob:)/i.test(reference)) return;
  if (reference.startsWith('/')) throw new Error(`Use a relative URL for Pages: ${reference}`);
  const name = path.posix.normalize(decodeURIComponent(reference.split(/[?#]/)[0]));
  if (!files.has(name)) throw new Error(`Missing asset or incorrect filename case: ${reference}`);
  checked++;
}
for (const page of ['index.html', 'game.html']) {
  const html = await readFile(path.join(site, page), 'utf8');
  for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) check(match[1]);
}
const context = { gdjs: {} };
vm.runInNewContext(await readFile(path.join(site, 'data.js'), 'utf8'), context, { timeout: 5000 });
vm.runInNewContext(await readFile(path.join(site, 'game-settings.js'), 'utf8'), context, { timeout: 5000 });
if (context.gdjs.projectData.properties.watermark.showWatermark || context.gdjs.projectData.properties.loadingScreen.showGDevelopSplash) throw new Error('Game branding is still enabled');
for (const resource of context.gdjs.projectData.resources.resources) {
  if (resource.file) check(resource.file);
}
for (const file of files) {
  if (!file.endsWith('.fnt')) continue;
  const font = await readFile(path.join(site, file), 'utf8');
  for (const match of font.matchAll(/\bfile="([^"]+)"/g)) check(path.posix.join(path.posix.dirname(file), match[1]));
}
const manifest = JSON.parse(await readFile(path.join(site, 'manifest.webmanifest'), 'utf8'));
check(manifest.start_url);
for (const icon of manifest.icons ?? []) check(icon.src);
console.log(`Verified ${checked} references across ${files.size} website files.`);
