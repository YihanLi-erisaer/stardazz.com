import { mkdir, readFile, writeFile } from 'node:fs/promises'

const directory = new URL('../StarDazz/src/assets/fonts/', import.meta.url)
await mkdir(directory, { recursive: true })
const css = await readFile(new URL('./inter-google.css', import.meta.url), 'utf8')
const subsets = [...css.matchAll(/\/\* ([\w-]+) \*\/[\s\S]*?url\((https:[^)]+)\)/g)]
if (subsets.length !== 7) throw new Error('Unexpected Inter stylesheet')
let localCss = '/* Inter, SIL Open Font License. See OFL.txt and README.md. */\n' + css
await Promise.all(subsets.map(async ([, name, url]) => {
  const response = await fetch(url)
  if (!response.ok) throw new Error(`${url}: ${response.status}`)
  const bytes = Buffer.from(await response.arrayBuffer())
  if (bytes.subarray(0, 4).toString() !== 'wOF2') throw new Error('Expected WOFF2')
  await writeFile(new URL(`inter-${name}.woff2`, directory), bytes)
  localCss = localCss.replace(url, `./inter-${name}.woff2`)
  console.log(`${name}: ${bytes.length} bytes`)
}))
const licenseResponse = await fetch('https://raw.githubusercontent.com/google/fonts/main/ofl/inter/OFL.txt')
if (!licenseResponse.ok) throw new Error(`License: ${licenseResponse.status}`)
await writeFile(new URL('OFL.txt', directory), await licenseResponse.text())
await writeFile(new URL('inter.css', directory), localCss)
