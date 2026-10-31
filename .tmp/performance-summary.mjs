import { readFileSync, existsSync, writeFileSync } from 'node:fs'
import { gzipSync } from 'node:zlib'

const bundles = ['.tmp/performance-before', 'StarDazz/dist'].map((directory) => {
  const html = readFileSync(directory + '/index.html', 'utf8')
  const files = [...new Set([...html.matchAll(/(?:src|href)="(\/assets\/[^\"]+\.js)"/g)].map((match) => match[1]))]
  const buffers = files.map((file) => readFileSync(directory + file))
  return {
    directory, files,
    raw: buffers.reduce((sum, bytes) => sum + bytes.length, 0),
    gzip: buffers.reduce((sum, bytes) => sum + gzipSync(bytes).length, 0),
  }
})
const audits = ['before', 'after', 'blog', 'product'].flatMap((name) => {
  const path = `.tmp/lighthouse-${name}.json`
  if (!existsSync(path)) return []
  const report = JSON.parse(readFileSync(path, 'utf8'))
  const requests = report.audits['network-requests'].details.items
  const origin = new URL(report.finalDisplayedUrl).origin
  const siteRequests = requests.filter((request) => new URL(request.url).origin === origin || /^https:\/\/fonts\.(googleapis|gstatic)\.com\//.test(request.url))
  return [{
    name,
    url: report.finalDisplayedUrl,
    version: report.lighthouseVersion,
    score: report.categories.performance.score * 100,
    metrics: Object.fromEntries(['first-contentful-paint', 'largest-contentful-paint', 'total-blocking-time', 'cumulative-layout-shift', 'speed-index', 'total-byte-weight'].map((key) => [key, report.audits[key].numericValue])),
    warnings: report.runWarnings,
    runtimeError: report.runtimeError,
    siteResourceTransfer: siteRequests.reduce((total, request) => total + request.transferSize, 0),
    pageResources: siteRequests.map((request) => ({ path: new URL(request.url).pathname, status: request.statusCode, size: request.transferSize })),
  }]
})
const result = { bundles, audits }
writeFileSync('.tmp/performance-summary.json', JSON.stringify(result, null, 2))
console.log(JSON.stringify(result, null, 2))
