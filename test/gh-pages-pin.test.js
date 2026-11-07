import test from 'node:test'
import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'

const manifest = JSON.parse(
  readFileSync(new URL('../package.json', import.meta.url), 'utf8')
)

test('gh-pages is pinned to the patched major for GHSA-8mmm-9v2q-x3f9', () => {
  const range = manifest.devDependencies?.['gh-pages']

  assert.ok(range, 'gh-pages must remain a devDependency')

  const major = Number(range.replace(/^[^0-9]*/, '').split('.')[0])

  assert.equal(
    major,
    5,
    `expected gh-pages to be pinned to the patched 5.x line, got "${range}"`
  )
})
