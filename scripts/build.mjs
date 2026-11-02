import { cp, mkdtemp, rename, rm } from 'node:fs/promises';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';

const root = new URL('../', import.meta.url);
execFileSync(process.execPath, ['scripts/check.mjs'], { cwd: root, stdio: 'inherit' });

// Stage a complete build before replacing the previous output.
const staging = await mkdtemp(new URL('.build-', root));
try {
  for (const path of ['index.html', 'src', 'game']) {
    await cp(new URL(path, root), `${staging}/${path}`, {
      recursive: true,
      filter: source => !source.endsWith('.DS_Store'),
    });
  }
  await rm(new URL('dist/', root), { recursive: true, force: true });
  await rename(staging, fileURLToPath(new URL('dist/', root)));
} finally {
  await rm(staging, { recursive: true, force: true });
}
console.log('Built static site in dist/');
