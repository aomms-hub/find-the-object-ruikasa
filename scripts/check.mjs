import assert from 'node:assert/strict';
import { readFile, access } from 'node:fs/promises';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

// Accept a build directory as well as the source tree.
const root = new URL('../', import.meta.url);
const entry = new URL(`${process.argv[2] ? `${process.argv[2]}/` : ''}index.html`, root);
const html = await readFile(entry, 'utf8');
const base = new URL(html.match(/<base href="([^"]+)"/)[1], entry);
const scripts = [...html.matchAll(/<script src="([^"]+)"/g)].map(match => match[1]);
assert(scripts.length > 0, 'The page must load the game scripts');

for (const match of html.matchAll(/<(?:script|link)\b[^>]*(?:src|href)="([^"]+)"/g)) {
  await access(new URL(match[1], base));
}
for (const script of scripts) {
  const path = new URL(script, base);
  new vm.Script(await readFile(path, 'utf8'), { filename: fileURLToPath(path) });
}
assert(scripts.indexOf('gd.js') < scripts.indexOf('code0.js'));
assert(scripts.indexOf('code0.js') < scripts.indexOf('data.js'));
assert.equal(scripts.at(-1), '../src/bootstrap.js');

const context = vm.createContext({ gdjs: {} });
vm.runInContext(await readFile(new URL('data.js', base), 'utf8'), context);
const resources = context.gdjs.projectData.resources.resources;
let files = 0;
for (const resource of resources) {
  if (resource.file && !/^https?:/.test(resource.file)) {
    await access(new URL(resource.file, base));
    files++;
  }
}
const manifest = JSON.parse(await readFile(new URL('manifest.webmanifest', base), 'utf8'));
assert.equal(new URL(manifest.start_url, base).href, entry.href);
console.log(`Validated ${scripts.length} scripts, ${files} local game resources, and the manifest.`);
