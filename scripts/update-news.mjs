/**
 * update-news.mjs
 *
 * Reads all .txt files from the /news folder, converts them into
 * src/data/news.json (sorted chronologically by filename date), then
 * commits and pushes to GitHub so the live site updates automatically.
 *
 * Usage:
 *   node scripts/update-news.mjs
 */

import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { execSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, '..');
const NEWS_DIR = join(ROOT, 'news');
const OUTPUT = join(ROOT, 'src', 'data', 'news.json');

// Parse date from filename like "2026-08-07-short-desc.txt"
function parseDate(filename) {
  const match = basename(filename).match(/^(\d{4})-(\d{2})-(\d{2})/);
  if (!match) return null;
  return new Date(`${match[1]}-${match[2]}-${match[3]}`);
}

// Format date as "Aug 07, 2026"
// timeZone: 'UTC' is required — filename dates parse as UTC midnight, so
// formatting in a western local zone would shift them back one day.
function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: '2-digit',
    timeZone: 'UTC',
  });
}

async function main() {
  console.log('📰 Reading news files from /news ...');

  const files = (await readdir(NEWS_DIR))
    .filter((f) => f.endsWith('.txt'))
    .sort(); // oldest first (relies on YYYY-MM-DD prefix); the ticker scrolls
             // chronologically, so newest ends up last in the list

  if (files.length === 0) {
    console.log('No .txt files found in /news — nothing to update.');
    process.exit(0);
  }

  const items = [];
  for (const file of files) {
    const date = parseDate(file);
    if (!date) {
      console.warn(`⚠️  Skipping "${file}" — filename must start with YYYY-MM-DD`);
      continue;
    }
    const text = (await readFile(join(NEWS_DIR, file), 'utf8')).trim();
    if (!text) {
      console.warn(`⚠️  Skipping "${file}" — file is empty`);
      continue;
    }
    items.push({ date: formatDate(date), text });
  }

  await writeFile(OUTPUT, JSON.stringify(items, null, 2) + '\n', 'utf8');
  console.log(`✅ Wrote ${items.length} news item(s) to src/data/news.json`);

  // Git commit + push
  console.log('🚀 Committing and pushing to GitHub ...');
  try {
    execSync(`git -C "${ROOT}" add src/data/news.json news/`, { stdio: 'inherit' });
    execSync(`git -C "${ROOT}" commit -m "chore: update recent news (${new Date().toISOString().slice(0, 10)})"`, {
      stdio: 'inherit',
    });
    execSync(`git -C "${ROOT}" push origin main`, { stdio: 'inherit' });
    console.log('✅ Pushed! GitHub Actions will rebuild the site in ~1 minute.');
  } catch (err) {
    if (err.message.includes('nothing to commit')) {
      console.log('ℹ️  No changes to commit — news.json already up to date.');
    } else {
      throw err;
    }
  }
}

main().catch((err) => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
