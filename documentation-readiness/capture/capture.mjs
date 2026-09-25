// Screenshot capture helper for the Help Center drafts.
//
// Logs into a LeanSuite DEMO facility, opens each page listed in shots.json,
// runs its optional steps, and saves a screenshot. Never use a customer account.
//
// Usage:
//   npm i playwright            (browsers are pre-installed in Claude Code cloud sessions)
//   LS_URL=https://theleansuite.app LS_USER=demo.admin LS_PASS=... node capture.mjs
//
// shots.json entries:
//   { "file": "17182736-01-forgot-password.png",
//     "path": "/login",                 // path relative to LS_URL
//     "loggedIn": false,                // default true
//     "steps": [ {"click": "text=Forgot password"} ],
//     "highlight": "input[name=code]",  // optional: draws a red box
//     "clip": "form",                   // optional: selector to crop to
//     "mobile": false }                 // optional: 390x844 phone viewport
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';

const BASE = process.env.LS_URL ?? 'https://theleansuite.app';
const OUT = path.resolve('screenshots');
const shots = JSON.parse(fs.readFileSync(new URL('./shots.json', import.meta.url)));
fs.mkdirSync(OUT, { recursive: true });

const browser = await chromium.launch();

async function newPage(mobile) {
  const ctx = await browser.newContext(
    mobile ? { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, isMobile: true }
           : { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 2 });
  return { ctx, page: await ctx.newPage() };
}

async function login(page) {
  await page.goto(`${BASE}/login`);
  // Adjust these selectors once, against the real login form.
  await page.fill('input[type="text"], input[name="username"], input[type="email"]', process.env.LS_USER);
  await page.fill('input[type="password"]', process.env.LS_PASS);
  await page.click('button[type="submit"]');
  await page.waitForLoadState('networkidle');
}

for (const s of shots) {
  const { ctx, page } = await newPage(s.mobile);
  try {
    if (s.loggedIn !== false) await login(page);
    await page.goto(BASE + s.path);
    await page.waitForLoadState('networkidle');
    for (const step of s.steps ?? []) {
      if (step.click) await page.click(step.click);
      if (step.fill) await page.fill(step.fill[0], step.fill[1]);
      if (step.wait) await page.waitForTimeout(step.wait);
      await page.waitForLoadState('networkidle');
    }
    if (s.highlight) {
      await page.locator(s.highlight).first().evaluate(el => {
        el.style.outline = '3px solid #E53935';
        el.style.outlineOffset = '3px';
      });
    }
    const target = s.clip ? page.locator(s.clip).first() : page;
    await target.screenshot({ path: path.join(OUT, s.file) });
    console.log('saved', s.file);
  } catch (e) {
    console.error('FAILED', s.file, e.message);
  } finally {
    await ctx.close();
  }
}
await browser.close();
