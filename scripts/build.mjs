import { cp, mkdir, readFile, readdir, rm } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = fileURLToPath(new URL('../', import.meta.url));
const source = path.join(root, 'public');
const output = path.join(root, 'dist');
const files = new Set();
async function inventory(directory, prefix = '') {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const relative = prefix + entry.name;
    if (entry.isDirectory()) await inventory(path.join(directory, entry.name), relative + '/');
    else files.add(relative);
  }
}
await inventory(source);
let checked = 0;
function check(reference) {
  if (/^(?:https?:|data:|blob:)/i.test(reference)) return;
  if (reference.startsWith('/')) throw new Error(`Path must be relative for GitHub Pages: ${reference}`);
  const relative = path.posix.normalize(decodeURIComponent(reference.split(/[?#]/)[0]));
  if (!files.has(relative)) throw new Error(`Missing file (paths are case sensitive): ${reference}`);
  checked++;
}
const html = await readFile(path.join(source, 'index.html'), 'utf8');
for (const match of html.matchAll(/(?:src|href)="([^"]+)"/g)) check(match[1]);
const sandbox = { gdjs: {} };
vm.runInNewContext(await readFile(path.join(source, 'data.js'), 'utf8'), sandbox, { timeout: 5000 });
for (const resource of sandbox.gdjs.projectData.resources.resources) {
  if (resource.file) check(resource.file);
}
for (const file of files) {
  if (!file.endsWith('.fnt')) continue;
  const font = await readFile(path.join(source, file), 'utf8');
  for (const match of font.matchAll(/\bfile="([^"]+)"/g)) check(path.posix.join(path.posix.dirname(file), match[1]));
}
// Only the dedicated generated output directory is replaced.
await rm(output, { recursive: true, force: true });
await mkdir(output, { recursive: true });
await cp(source, output, { recursive: true });
console.log(`Built ${files.size} files into dist/; verified ${checked} asset references.`);
