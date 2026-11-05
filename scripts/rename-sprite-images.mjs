import { readFile, writeFile, rename, readdir, access } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';
import { createHash } from 'node:crypto';

const root = fileURLToPath(new URL('../docs/', import.meta.url));
const context = { gdjs: {} };
vm.runInNewContext(await readFile(path.join(root, 'data.js'), 'utf8'), context);
const project = context.gdjs.projectData;
const owners = new Map();
const objects = [...project.objects, ...project.layouts.flatMap(layout => layout.objects)];
for (const object of objects.filter(object => object.type === 'Sprite')) {
  const frames = object.animations.flatMap(animation => animation.directions.flatMap(direction => direction.sprites.map(sprite => ({ image: sprite.image, animation: animation.name }))));
  const unique = [...new Set(frames.map(frame => frame.image))];
  for (const [index, image] of unique.entries()) {
    const frame = frames.find(frame => frame.image === image);
    const suffix = unique.length > 1 ? '_' + (frame.animation || `frame${index + 1}`) : '';
    const candidate = { name: object.name + suffix, single: unique.length === 1 };
    if (!owners.has(image) || (!owners.get(image).single && candidate.single)) owners.set(image, candidate);
  }
}
const plan = [];
const targets = new Set();
for (const resource of project.resources.resources) {
  if (resource.kind !== 'image' || !owners.has(resource.name)) continue;
  const owner = owners.get(resource.name);
  const filename = owner.name.replace(/[^a-zA-Z0-9_-]/g, '_') + path.extname(resource.file).toLowerCase();
  if (filename === resource.file) continue;
  if (targets.has(filename.toLowerCase())) throw new Error(`Duplicate filename: ${filename}`);
  targets.add(filename.toLowerCase());
  try { await access(path.join(root, filename)); throw new Error(`Target already exists: ${filename}`); }
  catch (error) { if (error.code !== 'ENOENT') throw error; }
  if (path.dirname(resource.file) !== '.' || path.dirname(filename) !== '.') throw new Error('Only root-level sprite files can be renamed');
  plan.push({ from: resource.file, to: filename });
}
console.log(plan.map(item => `${item.from} -> ${item.to}`).join('\n'));
console.log(`${plan.length} sprite image files to rename. Logical resource names and original image bytes stay unchanged.`);
if (!process.argv.includes('--write') || !plan.length) process.exit(0);
const textFiles = [];
async function collect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await collect(file);
    else if (/\.(js|html|css|fnt|webmanifest|json)$/i.test(file)) textFiles.push(file);
  }
}
await collect(root);
const hash = data => createHash('sha256').update(data).digest('hex');
for (const item of plan) {
  const original = await readFile(path.join(root, item.from));
  await rename(path.join(root, item.from), path.join(root, item.to));
  if (hash(original) !== hash(await readFile(path.join(root, item.to)))) throw new Error(`Image bytes changed: ${item.to}`);
}
for (const file of textFiles) {
  const original = await readFile(file, 'utf8');
  let updated = original;
  for (const item of plan) {
    // Filenames contain no quoting characters; preserve surrounding generated code.
    updated = updated.replaceAll(item.from, item.to).replaceAll(encodeURI(item.from), encodeURI(item.to));
  }
  if (updated !== original) await writeFile(file, updated);
}
console.log('Renamed images, verified SHA-256 hashes, and updated references.');
