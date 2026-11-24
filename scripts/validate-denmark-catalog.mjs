// Read-only, deterministic quality checks for the curated Denmark CCTV catalogue.
// This checks metadata, NOT camera availability or live video playback.
import { readFile, appendFile } from 'node:fs/promises';

const source = await readFile('src/app/api/cctv/denmark.ts', 'utf8');
const blocks = [...source.matchAll(/\{\s*id:\s*'(dk-[^']+)'([\s\S]*?)\n\s*\},/g)];
const get = (block, key) => block.match(new RegExp('\\b' + key + ":\\s*'([^']+)'"))?.[1];
const getNumber = (block, key) => Number(block.match(new RegExp('\\b' + key + ':\\s*(-?[\\d.]+)'))?.[1]);
const errors = [], warnings = [], ids = new Set(), pages = new Map();
let feeds = 0, streams = 0, nature = 0;

if (!blocks.length) errors.push('No Danish camera records found; check the catalogue parser.');
for (const [, id, block] of blocks) {
  if (ids.has(id)) errors.push('Duplicate camera ID: ' + id);
  ids.add(id);
  const lat = getNumber(block, 'lat'), lng = getNumber(block, 'lng');
  // Broad Denmark bounding box for detection of obvious typos; not an exact border test.
  if (!Number.isFinite(lat) || !Number.isFinite(lng) || lat < 54 || lat > 58 || lng < 8 || lng > 16) {
    errors.push(id + ': invalid/implausible Denmark coordinates');
  }
  if (!get(block, 'source')) errors.push(id + ': source is missing');
  const external = get(block, 'external_url');
  const feed = get(block, 'feed_url'), stream = get(block, 'stream_url');
  if (!external && !feed && !stream) errors.push(id + ': no public camera URL');
  for (const [kind, value] of [['external_url', external], ['feed_url', feed], ['stream_url', stream]]) {
    if (!value) continue;
    try {
      const url = new URL(value);
      if (!['https:', 'http:'].includes(url.protocol)) errors.push(id + ': invalid ' + kind + ' scheme');
    } catch { errors.push(id + ': invalid ' + kind + ' URL'); }
  }
  if (external) pages.set(external, [...(pages.get(external) ?? []), id]);
  if (feed) feeds++;
  if (stream) streams++;
  if (get(block, 'category') === 'birds-nature') {
    nature++;
    if (!external || !get(block, 'availability')) errors.push(id + ': bird/nature page lacks source URL or availability caveat');
  }
}
for (const [url, references] of pages) {
  if (references.length > 1) warnings.push(references.length + ' camera entries share a publisher page: ' + url);
}
const lines = [
  '## Denmark CCTV catalogue metadata check',
  '',
  'Static source validation only. A listed URL is **not** evidence of a currently working stream.',
  '',
  '| Metric | Value |',
  '| --- | ---: |',
  '| Unique camera IDs | ' + ids.size + ' |',
  '| Danish camera entries | ' + blocks.length + ' |',
  '| Entries with direct image URL | ' + feeds + ' |',
  '| Entries with stream URL | ' + streams + ' |',
  '| Bird/nature entries | ' + nature + ' |',
  '| Metadata errors | ' + errors.length + ' |',
  '| Shared publisher-page warnings | ' + warnings.length + ' |',
  '',
  ...errors.map(e => '- ERROR: ' + e),
  ...warnings.map(w => '- Note: ' + w),
  '',
  'External links and feeds require separate runtime verification before being described as live.'
];
const summary = lines.join('\n') + '\n';
console.log(summary);
if (process.env.GITHUB_STEP_SUMMARY) await appendFile(process.env.GITHUB_STEP_SUMMARY, summary);
if (errors.length) process.exitCode = 1;
