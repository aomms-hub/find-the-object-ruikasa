import { readFile, writeFile, readdir, mkdir, rename } from 'node:fs/promises';
import path from 'node:path';
import vm from 'node:vm';
import { fileURLToPath } from 'node:url';
import { createHash } from 'node:crypto';

const root = fileURLToPath(new URL('../docs/', import.meta.url));
const plan = [];
for (const file of await readdir(root)) {
  let folder;
  if (/\.(ttf|fnt)$/i.test(file) || /8BitOperator.*\.png$/i.test(file)) folder = 'fonts';
  else if (/\.(mp3|aac)$/i.test(file)) folder = /Jump|Pop Sounds/i.test(file) ? 'audio/effects' : 'audio/music';
  else if (/\.(png|jpg|jpeg)$/i.test(file)) {
    if (/^(Tsukasa\d|Rui)\./.test(file)) folder = 'images/characters';
    else if (/^cover_/.test(file)) folder = 'images/scenery';
    else if (/^(background|bacgkground_frame)\./.test(file)) folder = 'images/backgrounds';
    else if (/^(ZoomIn|ZoomOut|ResetView|Sound_button_)/.test(file)) folder = 'images/ui/controls';
    else folder = 'images/ui/elements';
  }
  if (folder) plan.push({ from: file, to: `assets/${folder}/${file}` });
}
try {
  for (const file of await readdir(path.join(root, 'icons'))) plan.push({ from: `icons/${file}`, to: `assets/icons/${file}` });
} catch (error) { if (error.code !== 'ENOENT') throw error; }
const dataPath = path.join(root, 'data.js');
let data = await readFile(dataPath, 'utf8');
const context = { gdjs: {} };
vm.runInNewContext(data, context);
const resources = context.gdjs.projectData.resources.resources;
const originalResources = JSON.stringify(resources);
for (const resource of resources) {
  const move = plan.find(item => item.from === resource.file);
  if (move) resource.file = move.to;
}
if (!data.includes(originalResources)) throw new Error('Cannot locate resource registry');
data = data.replace(originalResources, JSON.stringify(resources));
const cssPath = path.join(root, 'instructions.css');
let css = await readFile(cssPath, 'utf8');
for (const move of plan) css = css.replaceAll(`./${move.from}`, `./${move.to}`);
const instructionsPath = path.join(root, 'instructions.js');
let instructions = (await readFile(instructionsPath, 'utf8')).replaceAll('src="icons/', 'src="assets/icons/');
const hash = bytes => createHash('sha256').update(bytes).digest('hex');
for (const move of plan) {
  const source = path.resolve(root, move.from), target = path.resolve(root, move.to);
  if (!source.startsWith(root) || !target.startsWith(root)) throw new Error('Asset outside docs/');
  const original = hash(await readFile(source));
  await mkdir(path.dirname(target), { recursive: true });
  await rename(source, target);
  if (original !== hash(await readFile(target))) throw new Error(`Image changed: ${move.to}`);
}
// Bitmap font pages stay relative: descriptor and atlas moved together.
await writeFile(dataPath, data);
await writeFile(cssPath, css);
await writeFile(instructionsPath, instructions);
console.log(`Organized ${plan.length} assets; all file hashes unchanged.`);
