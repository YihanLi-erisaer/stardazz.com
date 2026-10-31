import { readFile } from 'node:fs/promises'
import { gzipSync } from 'node:zlib'

const dist = new URL('../dist/', import.meta.url)
const budgets = { raw: 400_000, gzip: 135_000 }

async function main() {
  const manifest = JSON.parse(await readFile(new URL('.vite/manifest.json', dist), 'utf8'))
  const visited = new Set()
  const initialFiles = new Set()
  const failures = []

  function visit(key) {
    if (visited.has(key)) return
    visited.add(key)
    const chunk = manifest[key]
    if (!chunk) throw new Error(`Missing manifest entry: ${key}`)

    if ([key, chunk.src].some((source) => source?.startsWith('src/content/posts/')) ||
        [key, chunk.name, chunk.file].some((source) => source?.includes('MarkdownPreview'))) {
      failures.push(`Deferred blog content entered the initial dependency graph: ${key}`)
    }
    if (/\.m?js$/.test(chunk.file)) initialFiles.add(chunk.file)
    // Dynamic imports are deliberately excluded: they load only after navigation.
    for (const dependency of chunk.imports ?? []) visit(dependency)
  }

  visit('index.html')
  const sizes = await Promise.all([...initialFiles].sort().map(async (file) => {
    const source = await readFile(new URL(file, dist))
    return { raw: source.length, gzip: gzipSync(source).length }
  }))
  const total = sizes.reduce((sum, size) => ({
    raw: sum.raw + size.raw,
    gzip: sum.gzip + size.gzip,
  }), { raw: 0, gzip: 0 })

  console.log(`Initial JavaScript: ${initialFiles.size} files, ${total.raw} bytes raw, ${total.gzip} bytes gzip`)
  for (const kind of ['raw', 'gzip']) {
    if (total[kind] > budgets[kind]) {
      failures.push(`Initial ${kind} JavaScript exceeds budget: ${total[kind]} > ${budgets[kind]} bytes`)
    }
  }
  if (failures.length) throw new Error(failures.join('\n'))
  console.log('Performance budget passed; blog bodies and Markdown renderer remain deferred.')
}

main().catch((error) => {
  console.error(`[perf:check] ${error.message}`)
  if (error.code === 'ENOENT') console.error('Run npm run build before checking the production output.')
  process.exitCode = 1
})
