import { createRequire } from 'node:module'
import assert from 'node:assert/strict'
import { fileURLToPath } from 'node:url'

const require = createRequire(new URL('../../screator/desktop/package.json', import.meta.url))
const { chromium, expect } = require('@playwright/test')
const origin = 'http://127.0.0.1:5177'
const blogPath = '/blog/screator-desktop-workspace-october-2026'
const output = fileURLToPath(new URL('./', import.meta.url))
const browser = await chromium.launch({ channel: 'msedge', headless: true })
const errors = []
const consoleErrors = []
const failedRequests = []
const failedResponses = []
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 1000 } })
  page.on('pageerror', (error) => errors.push(error.message))
  page.on('console', (message) => { if (message.type() === 'error') consoleErrors.push(message.text()) })
  page.on('requestfailed', (request) => failedRequests.push({ url: request.url(), error: request.failure()?.errorText }))
  page.on('response', (response) => {
    if (response.url().startsWith(origin) && response.status() >= 400) failedResponses.push(`${response.status()} ${response.url()}`)
  })
  await page.goto(`${origin}/products/yt2bili?source=legacy#overview`)
  await expect(page).toHaveURL(`${origin}/products/screator?source=legacy#overview`)
  await expect(page.getByRole('heading', { name: 'screator', exact: true })).toBeVisible()
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', `${origin}/products/screator`)
  await expect(page.locator('meta[property="og:image"]')).toHaveAttribute('content', `${origin}/screator/tasks-dark.png`)
  const jsonLd = JSON.parse(await page.locator('script[type="application/ld+json"]').textContent())
  assert.ok(jsonLd['@graph'].some((node) => node['@type'] === 'SoftwareApplication' && node.name === 'screator'))
  assert.equal(await page.locator('a[href$="/releases/tag/Windows-v1.0.0alpha"]').count(), 1)
  assert.equal(await page.locator('a[href$="/releases/tag/macOS-v1.0.0alpha"]').count(), 1)
  const galleryButtons = page.locator('button[aria-controls="screator-screenshot"]')
  await expect(galleryButtons).toHaveCount(6)
  for (let index = 0; index < 6; index++) {
    await galleryButtons.nth(index).click()
    await expect(galleryButtons.nth(index)).toHaveAttribute('aria-pressed', 'true')
    await page.locator('#screator-screenshot img').evaluate((img) => img.decode())
    assert.equal(await page.locator('#screator-screenshot img').evaluate((img) => img.naturalWidth), 1440)
    assert.equal(await page.locator('#screator-screenshot > a').getAttribute('href'), await page.locator('#screator-screenshot img').getAttribute('src'))
  }
  await galleryButtons.first().focus()
  await page.keyboard.press('Enter')
  await expect(galleryButtons.first()).toHaveAttribute('aria-pressed', 'true')
  for (const [index, locale, lang] of [[0, 'zh', 'zh-CN'], [1, 'zh-HK', 'zh-HK'], [2, 'en', 'en']]) {
    if (process.argv[2] && process.argv[2] !== locale) continue
    await page.setViewportSize({ width: 1440, height: 1000 })
    await page.locator('header button[aria-haspopup="listbox"]').click()
    await page.getByRole('listbox').getByRole('button').nth(index).click()
    await expect(page.locator('html')).toHaveAttribute('lang', lang)
    assert.ok((await page.title()).startsWith('screator'))
    assert.equal(/yt2bili\.[A-Za-z]/.test(await page.locator('main').innerText()), false)
    await page.evaluate(() => window.scrollTo(0, 0))
    await page.screenshot({ path: `${output}website-${locale}-desktop.png`, fullPage: true, animations: 'disabled' })
    await page.setViewportSize({ width: 390, height: 844 })
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${locale} mobile overflow`)
    await page.screenshot({ path: `${output}website-${locale}-mobile.png`, fullPage: true, animations: 'disabled' })
    await page.locator(`a[href="${blogPath}"]`).first().click()
    await expect(page).toHaveURL(`${origin}${blogPath}`)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('screator')
    await expect(page.locator('main').getByRole('heading', { level: 2 })).toHaveCount(5)
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth), false, `${locale} blog overflow`)
    await page.goto(`${origin}/roadmap`)
    await expect(page.getByRole('heading', { level: 1 })).toContainText('screator')
    await expect(page.locator('main')).toContainText(locale === 'en' ? 'October 4, 2026' : '2026-10-04')
    await expect(page.locator('main article').nth(5)).toContainText(locale === 'en' ? 'October 2026' : '2026-10')
    await page.goto(`${origin}/products/screator`)
    await expect(galleryButtons).toHaveCount(6)
    console.log(`${locale}: product, gallery, mobile, blog and roadmap passed`)
  }
  await page.setViewportSize({ width: 1440, height: 1000 })
  const lightIcon = await page.locator('main img').first().getAttribute('src')
  await page.getByRole('button', { name: 'Switch to dark mode', exact: true }).click()
  await expect(page.locator('html')).toHaveClass(/dark/)
  await expect(page.locator('main img').first()).not.toHaveAttribute('src', lightIcon)
  await page.locator('main img').first().evaluate((img) => img.decode())
  await page.screenshot({ path: `${output}website-dark.png`, fullPage: true, animations: 'disabled' })
  for (const path of ['/', '/products', '/about']) {
    await page.goto(`${origin}${path}`)
    await expect(page.locator('main a[href="/products/screator"]').first()).toBeVisible()
  }
  await page.goto(`${origin}/blog`)
  await expect(page.locator('main article').first().locator('a')).toHaveAttribute('href', blogPath)
  assert.deepEqual(errors, [])
  assert.deepEqual(failedResponses, [])
  assert.deepEqual(failedRequests.filter((request) => request.url.startsWith(origin)), [])
  console.log(JSON.stringify({ consoleErrors, failedRequests }))
  console.log('PASS: legacy redirect, SEO, releases, six screenshots, keyboard, dark theme, navigation; no runtime errors or failed local resources. Locale passes are reported above.')
} finally {
  await browser.close()
}
