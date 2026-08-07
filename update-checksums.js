#!/usr/bin/env node
'use strict';

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const root = path.resolve(__dirname, '..');
const skipped = new Set(['SHA256SUMS.txt', 'node_modules', '.git']);

function list(directory, prefix = '') {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if (skipped.has(entry.name)) return [];
    const relative = path.posix.join(prefix, entry.name);
    const absolute = path.join(directory, entry.name);
    return entry.isDirectory() ? list(absolute, relative) : [relative];
  });
}

const lines = list(root).sort().map((relative) => {
  const hash = crypto.createHash('sha256').update(fs.readFileSync(path.join(root, relative))).digest('hex');
  return `${hash}  ${relative}`;
});

fs.writeFileSync(path.join(root, 'SHA256SUMS.txt'), `${lines.join('\n')}\n`);
console.log(`SHA256SUMS.txt atualizado: ${lines.length} arquivos.`);
