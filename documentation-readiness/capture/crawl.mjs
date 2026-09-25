// App inventory crawler: logs into LeanSuite (DEMO facility) and walks every
// in-app link reachable from the navigation, recording for each screen:
//   URL, page title, headings, buttons, tabs, form labels, table columns
// plus a full-page screenshot. The output (app-inventory.json + screenshots)
// is used to check that every screen and control has Help Center coverage.
//
// Usage:
//   LS_URL=https://theleansuite.app LS_USER=... LS_PASS=... node crawl.mjs
//   HEADFUL=1 node crawl.mjs   # log in yourself (e.g. SSO), then press Enter
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline/promises';

const BASE = (process.env.LS_URL ?? 'https://theleansuite.app').replace(/\/$/, '');
const MAX_PAGES = Number(process.env.MAX_PAGES ?? 400);
const OUT = path.resolve('app-inventory');
fs.mkdirSync(path.join(OUT, 'screens'), { recursive: true });

// Never click anything that could change or delete data.
const UNSAFE = /(delete|remove|archive|logout|log out|sign out|reset|deactivate|submit|publish|approve|reject)/i;

const browser = await chromium.launch({ headless: !process.env.HEADFUL });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();

await page.goto(`${BASE}/login`);
if (process.env.HEADFUL) {
  const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
  await rl.question('Log in in the browser window, then press Enter here… ');
  rl.close();
} else {
  await page.fill('input[type="text"], input[name="username"], input[type="email"]', process.env.LS_USER);
  await page.fill('input[type="password"]', process.env.LS_PASS);
  await page.click('button[type="submit"]');
}
await page.waitForLoadState('networkidle');

const seen = new Set();
const queue = [page.url()];
const inventory = [];

async function describe() {
  return page.evaluate(() => {
    const txt = (sel) => [...document.querySelectorAll(sel)]
      .map((e) => (e.innerText || e.getAttribute('aria-label') || e.getAttribute('placeholder') || '').trim())
      .filter(Boolean).slice(0, 200);
    return {
      title: document.title,
      headings: txt('h1,h2,h3,h4'),
      buttons: [...new Set(txt('button,[role=button]'))],
      tabs: txt('[role=tab]'),
      menuItems: txt('nav a, [role=menuitem], aside a'),
      labels: txt('label, input[placeholder], textarea[placeholder]'),
      tableColumns: txt('th, [role=columnheader]'),
      links: [...document.querySelectorAll('a[href]')].map((a) => a.href),
    };
  });
}

while (queue.length && inventory.length < MAX_PAGES) {
  const url = queue.shift();
  const key = url.split('#')[0].replace(/[?].*$/, '');
  if (seen.has(key) || !url.startsWith(BASE)) continue;
  seen.add(key);
  try {
    await page.goto(url);
    await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
    const info = await describe();
    const slug = key.replace(BASE, '').replace(/[^a-z0-9]+/gi, '_').replace(/^_|_$/g, '') || 'home';
    await page.screenshot({ path: path.join(OUT, 'screens', `${slug}.png`), fullPage: true });
    inventory.push({ url: key, slug, ...info, links: undefined });
    for (const l of info.links) if (l.startsWith(BASE) && !UNSAFE.test(l)) queue.push(l);
    console.log(`[${inventory.length}] ${key}`);
  } catch (e) {
    console.error('FAILED', url, e.message);
  }
}

fs.writeFileSync(path.join(OUT, 'app-inventory.json'), JSON.stringify(inventory, null, 2));
console.log(`Done: ${inventory.length} screens → ${OUT}`);
await browser.close();
