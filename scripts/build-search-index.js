const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const OUT = path.join(ROOT, 'web', 'search-index.json');
const SKIP_DIRS = new Set(['.git', '.github', 'node_modules']);

function walk(dir, files = []) {
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (!SKIP_DIRS.has(entry.name)) walk(full, files);
    } else if (entry.name.toLowerCase().endsWith('.md')) {
      files.push(path.relative(ROOT, full).split(path.sep).join('/'));
    }
  }
  return files;
}

function parse(markdown, file) {
  const results = [];
  const text = markdown
    .replace(/```[\s\S]*?```/g, '')
    .replace(/~~~[\s\S]*?~~~/g, '')
    .replace(/<li\b[^>]*>/gi, '\n')
    .replace(/<\/li>/gi, '\n')
    .replace(/<[^>]+>/g, ' ');

  for (const line of text.split(/\r?\n/)) {
    const cleaned = line.replace(/^\s*[-*+]\s+/, '').trim();
    const match = cleaned.match(/^(#{1,3})\s+(.+?)\s*$/);
    if (!match) continue;

    const title = match[2]
      .replace(/\s+#+\s*$/, '')
      .replace(/\s*\{:?\s*#[A-Za-z][\w-]*\}\s*$/, '') // 去掉 {#id} 自訂錨點
      .trim();

    if (!title || /\bexamples?\b/i.test(title)) continue;
    results.push({ file, title, level: match[1].length });
  }
  return results;
}

const index = walk(ROOT)
  .filter((f) => !f.startsWith('web/'))
  .sort()
  .flatMap((f) => parse(fs.readFileSync(path.join(ROOT, f), 'utf8'), f));

fs.mkdirSync(path.dirname(OUT), { recursive: true });
fs.writeFileSync(OUT, JSON.stringify(index));
console.log(`Wrote ${index.length} headings to ${path.relative(ROOT, OUT)}`);

