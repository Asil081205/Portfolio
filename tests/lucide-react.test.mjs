import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import * as icons from 'lucide-react';

const require = createRequire(import.meta.url);
const { version } = require('lucide-react/package.json');
const lockfile = JSON.parse(
  readFileSync(new URL('../package-lock.json', import.meta.url), 'utf8'),
);
const lockedVersion = lockfile.packages?.['node_modules/lucide-react']?.version;

function parseVersion(value) {
  return value
    .split('-')[0]
    .split('.')
    .map((part) => Number.parseInt(part, 10));
}

function isAtLeast(actual, minimum) {
  const a = parseVersion(actual);
  const b = parseVersion(minimum);
  for (let index = 0; index < Math.max(a.length, b.length); index += 1) {
    const left = a[index] ?? 0;
    const right = b[index] ?? 0;
    if (left !== right) return left > right;
  }
  return true;
}

test('lucide-react is installed at 1.77.0 or newer', () => {
  assert.ok(
    isAtLeast(version, '1.77.0'),
    `expected lucide-react >= 1.77.0, found ${version}`,
  );
});

test('the lockfile pins lucide-react at 1.77.0 or newer', () => {
  assert.ok(lockedVersion, 'lucide-react is missing from the lockfile');
  assert.ok(
    isAtLeast(lockedVersion, '1.77.0'),
    `expected the lockfile to pin lucide-react >= 1.77.0, found ${lockedVersion}`,
  );
});

test('lucide-react exposes icons added in 1.77.0', () => {
  // BoxDashed shipped in lucide-react 1.77.0; it is absent from 1.74.0.
  assert.ok(Object.hasOwn(icons, 'BoxDashed'));
});

test('lucide-react still exports every icon the portfolio imports', () => {
  const usedIcons = [
    'Activity',
    'AlertCircle',
    'ArrowDown',
    'ArrowRight',
    'ArrowUp',
    'ArrowUpRight',
    'Award',
    'BookCheck',
    'BookOpen',
    'Brain',
    'Building2',
    'Calendar',
    'Check',
    'CheckCircle',
    'CheckCircle2',
    'Code',
    'Code2',
    'Compass',
    'Copy',
    'Cpu',
    'Database',
    'Download',
    'ExternalLink',
    'Eye',
    'FileText',
    'Filter',
    'GraduationCap',
    'Heart',
    'Languages',
    'Layers',
    'Mail',
    'MapPin',
    'Menu',
    'Phone',
    'Search',
    'Send',
    'Server',
    'ShieldCheck',
    'Smartphone',
    'Sparkles',
    'Terminal',
    'Trophy',
    'Wrench',
    'X',
    'Zap',
    'createLucideIcon',
  ];

  for (const name of usedIcons) {
    assert.ok(
      Object.hasOwn(icons, name),
      `lucide-react no longer exports ${name}`,
    );
  }
});
