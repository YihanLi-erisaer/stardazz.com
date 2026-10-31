const fs = require('node:fs')
const path = require('node:path')
const vm = require('node:vm')
const assert = require('node:assert/strict')
const ts = require('../StarDazz/node_modules/typescript')

const root = path.resolve(__dirname, '../StarDazz/src/content')
const filename = path.join(root, 'devBlogPosts.ts')
const original = fs.readFileSync(filename, 'utf8')
const snapshot = path.join(__dirname, 'devBlogPosts.before-performance.ts')
if (fs.existsSync(snapshot)) throw new Error('Original snapshot already exists')
fs.writeFileSync(snapshot, original)
function evaluate(source) {
  const code = ts.transpileModule(source, { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText
  const result = { exports: {} }
  vm.runInNewContext(code, result)
  return JSON.parse(JSON.stringify(result.exports))
}
const before = evaluate(original).DEV_BLOG_POSTS
const sourceFile = ts.createSourceFile(filename, original, ts.ScriptTarget.Latest, true)
let posts
function visit(node) {
  if (ts.isVariableDeclaration(node) && node.name.getText(sourceFile) === 'DEV_BLOG_POSTS') posts = node.initializer
  ts.forEachChild(node, visit)
}
visit(sourceFile)
assert(posts && ts.isArrayLiteralExpression(posts))
const removals = []
fs.mkdirSync(path.join(root, 'posts'), { recursive: true })
for (const post of posts.elements) {
  assert(ts.isObjectLiteralExpression(post))
  const slugProperty = post.properties.find((property) => property.name?.getText(sourceFile) === 'slug')
  const bodyProperty = post.properties.find((property) => property.name?.getText(sourceFile) === 'body')
  assert(slugProperty && ts.isStringLiteral(slugProperty.initializer))
  assert(bodyProperty && ts.isPropertyAssignment(bodyProperty))
  const slug = slugProperty.initializer.text
  assert(/^[a-z0-9-]+$/.test(slug))
  const body = bodyProperty.initializer.getText(sourceFile).replace(/^ {4}/gm, '')
  const module = `import type { LocalizedText } from '../devBlogPosts'\n\nconst body: LocalizedText = ${body}\n\nexport default body\n`
  const target = path.join(root, 'posts', `${slug}.ts`)
  if (fs.existsSync(target)) throw new Error(`Target already exists: ${target}`)
  fs.writeFileSync(target, module)
  assert.deepEqual(evaluate(module).default, before.find((post) => post.slug === slug).body)
  const start = original.lastIndexOf('\n', bodyProperty.getStart(sourceFile)) + 1
  const end = original.indexOf('\n', bodyProperty.end) + 1
  removals.push({ start, end })
}
let metadata = original
for (const {start,end} of removals.sort((a,b) => b.start-a.start)) {
  metadata = metadata.slice(0,start)+metadata.slice(end)
}
metadata = metadata.replace('/** Bilingual fields for dev blog posts (add new posts here). */', '/** Localized blog metadata; Markdown bodies live in posts/<slug>.ts. */')
metadata = metadata.replace(/  \/\*\* Full Markdown body per locale \*\/\r?\n  body: LocalizedText\r?\n/, '')
metadata = metadata.replace('export const DEV_BLOG_POSTS: DevBlogPost[]', 'export const DEV_BLOG_POSTS: readonly DevBlogPost[]')
metadata = metadata.replace(/export function getDevBlogPostBySlug[\s\S]*$/, `const postsBySlug = new Map(DEV_BLOG_POSTS.map((post) => [post.slug, post]))
const sortedPosts = [...DEV_BLOG_POSTS].sort((a, b) => (a.date < b.date ? 1 : -1))

export function getDevBlogPostBySlug(slug: string): DevBlogPost | undefined {
  return postsBySlug.get(slug)
}

export function getDevBlogPostsSorted(): readonly DevBlogPost[] {
  return sortedPosts
}
`)
fs.writeFileSync(filename, metadata)
const after = evaluate(metadata).DEV_BLOG_POSTS
assert.deepEqual(after, before.map(({body,...post}) => post))
console.log(JSON.stringify({posts:before.length, locales:['zh','zh-HK','en'], metadataBytes:Buffer.byteLength(metadata), originalBytes:Buffer.byteLength(original), exactContentPreserved:true}))
