#!/usr/bin/env node
import { readFileSync, existsSync } from 'fs';
import { resolve, basename, dirname, join } from 'path';
import sharp from 'sharp';

const input = process.argv[2];
const width = parseInt(process.argv[3] || '1200', 10);
const height = parseInt(process.argv[4] || '630', 10);

if (!input) {
  console.log('Usage: node scripts/svg-to-png.mjs <input.svg> [width] [height]');
  console.log('  Default: 1200x630 (OG image size)');
  process.exit(1);
}

const inputPath = resolve(input);
if (!existsSync(inputPath)) {
  console.error(`File not found: ${inputPath}`);
  process.exit(1);
}

const outputPath = join(dirname(inputPath), basename(inputPath, '.svg') + '.png');
const svg = readFileSync(inputPath);

await sharp(svg, { density: 150 })
  .resize(width, height)
  .png()
  .toFile(outputPath);

console.log(`${outputPath} (${width}x${height})`);
