// Dry run by default; pass --write to remove unreferenced image resources.
import { readFile, readdir, stat, unlink, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const root = fileURLToPath(new URL('../docs/', import.meta.url));
const dataPath = path.join(root, 'data.js');
let source = await readFile(dataPath, 'utf8');
const context = { gdjs: {} };
vm.runInNewContext(source, context, { timeout: 5000 });
const project = context.gdjs.projectData;
const resources = project.resources.resources;
const projectUsage = JSON.stringify({ ...project, resources: undefined });
const files = [];
async function collect(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    if (entry.isDirectory()) await collect(file);
    else files.push(file);
  }
}
await collect(root);
const externalUsage = (await Promise.all(files
  .filter(file => file !== dataPath && /\.(?:html|css|js|json|webmanifest|fnt|svg)$/i.test(file))
  .map(file => readFile(file, 'utf8')))).join('\n');
function referenced(text, resource) {
  return [resource.name, resource.file].filter(Boolean).some(value =>
    text.includes(value) || text.includes(encodeURI(value)) || text.includes(JSON.stringify(value).slice(1, -1)));
}
const unused = resources.filter(resource => resource.kind === 'image' && resource.file &&
  !referenced(projectUsage, resource) && !referenced(externalUsage, resource));
const retained = resources.filter(resource => !unused.includes(resource));
const removable = [...new Set(unused.map(resource => resource.file))]
  .filter(file => !retained.some(resource => resource.file === file));
let bytes = 0;
for (const file of removable) {
  const absolute = path.resolve(root, file);
  if (!absolute.startsWith(root)) throw new Error(`Asset outside docs/: ${file}`);
  bytes += (await stat(absolute)).size;
  console.log(file);
}
console.log(`${unused.length} unused image resources, ${removable.length} files, ${(bytes / 1024 / 1024).toFixed(2)} MiB.`);
if (process.argv.includes('--write')) {
  // Replace only the resource array; preserve generated game code and settings.
  const original = JSON.stringify(resources);
  if (!source.includes(original)) throw new Error('Resource array format changed; nothing removed.');
  source = source.replace(original, JSON.stringify(retained));
  await writeFile(dataPath, source);
  for (const file of removable) await unlink(path.resolve(root, file));
  console.log('Removed unused registry entries and image files.');
}
