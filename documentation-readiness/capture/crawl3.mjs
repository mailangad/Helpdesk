// Crawler v3: opens each module by its real URL, then clicks every item in the
// module's left menu (found by position: the dark left panel), saving a screenshot
// and UI inventory for each page. Also finds where the Lean Creator tile goes.
// Never clicks items whose text looks destructive/final (UNSAFE).
//
//   LS_URL=https://lean-suite.web.app HEADFUL=1 node crawl3.mjs
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline/promises';

const BASE = (process.env.LS_URL ?? 'https://lean-suite.web.app').replace(/\/$/, '');
const OUT = path.resolve('app-inventory');
const SHOTS = path.join(OUT, 'screens3');
fs.mkdirSync(SHOTS, { recursive: true });

const MODULES = {
  'Suggestion': '/main/suggestion/view-all',
  'Kaizen': '/main/kaizen/dashboard/kaizen',
  'Tag': '/main/tag/tag-dashboard',
  'QA Matrix': '/main/qa-matrix/qa-dashboard',
  'EWO': '/main/kaizen/dashboard/ewo',
  'Best Practice': '/main/kaizen/dashboard/best-practice',
  'Cost Management': '/main/cost-management/dashboard',
  'Skill Matrix': '/main/skill-matrix/teams',
  'LMS': '/main/people-development/lms/dashboard',
  'Workflow': '/main/workflow/dashboard',
  'KPI': '/main/kpi/kpi-dashboard',
  'Daily Standard Work': '/main/dsw/overview',
  'Lean Studio': '/main/custom-dashboard',
  'Document Management': '/main/documents?viewType=table',
};
const UNSAFE = /(delete|remove|archive|log ?out|sign ?out|reset|deactivate|submit|publish|approve|reject|send|save|privacy|terms|visit site|follow)/i;
const HOME_ITEMS = /^(home|prize catalog|requested prizes|leaderboard|campaigns)$/i;

const browser = await chromium.launch({ headless: !process.env.HEADFUL });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto(`${BASE}/login`);
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
await rl.question('Log in in the browser window, then press Enter here… ');
rl.close();

const inventory = [];
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
const settle = async () => {
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(1500);
};

async function record(name) {
  await settle();
  const info = await page.evaluate(() => {
    const vis = (e) => { const r = e.getBoundingClientRect(); return r.width > 0 && r.height > 0 && r.left > 200; };
    const txt = (sel) => [...new Set([...document.querySelectorAll(sel)].filter(vis)
      .map((e) => (e.innerText || e.getAttribute('aria-label') || e.getAttribute('placeholder') || '').trim())
      .filter((t) => t && t.length < 80))].slice(0, 120);
    return {
      headings: txt('h1,h2,h3,h4,h5,h6'),
      buttons: txt('button,[role=button]'),
      tabs: txt('[role=tab]'),
      labels: txt('label,input[placeholder],textarea[placeholder]'),
      tableColumns: txt('th,[role=columnheader]'),
    };
  });
  const file = `${slug(name)}.png`;
  await page.screenshot({ path: path.join(SHOTS, file) });
  inventory.push({ name, url: page.url(), file, ...info });
  fs.writeFileSync(path.join(OUT, 'app-inventory-v3.json'), JSON.stringify(inventory, null, 2));
  console.log(`[${inventory.length}] ${name}  ${page.url()}`);
}

// Clickable items inside the dark left panel (x < 200), below the user card.
async function leftMenuItems() {
  return page.evaluate(() => {
    const out = [];
    for (const e of document.querySelectorAll('a,button,li,[role=button],[role=menuitem],div')) {
      const r = e.getBoundingClientRect();
      if (r.left > 5 && r.right < 205 && r.top > 140 && r.bottom < 860 && r.height > 20 && r.height < 60) {
        const t = (e.innerText || '').trim().split('\n').pop();
        if (t && t.length < 40 && e.children.length < 6) out.push(t);
      }
    }
    return [...new Set(out)];
  });
}

async function clickLeft(text) {
  const handle = await page.evaluateHandle((t) => {
    const els = [...document.querySelectorAll('a,button,li,[role=button],[role=menuitem],div,span')];
    return els.find((e) => {
      const r = e.getBoundingClientRect();
      return r.right < 205 && r.top > 140 && (e.innerText || '').trim().split('\n').pop() === t;
    });
  }, text);
  await handle.asElement().click();
}

// Lean Creator: find where the Home tile goes (same tab or a new tab).
try {
  await page.goto(`${BASE}/main/home`);
  await settle();
  const [popup] = await Promise.all([
    ctx.waitForEvent('page', { timeout: 8000 }).catch(() => null),
    page.getByText('Lean Creator', { exact: true }).first().click(),
  ]);
  if (popup) {
    await popup.waitForLoadState('networkidle').catch(() => {});
    MODULES['Lean Creator'] = new URL(popup.url()).pathname + new URL(popup.url()).search;
    await popup.close();
  } else {
    await settle();
    if (!page.url().includes('/main/home')) MODULES['Lean Creator'] = new URL(page.url()).pathname;
  }
  console.log('Lean Creator →', MODULES['Lean Creator'] ?? 'not found');
} catch (e) { console.error('Lean Creator lookup failed', e.message); }

for (const [mod, url] of Object.entries(MODULES)) {
  try {
    await page.goto(BASE + url);
    await record(`${mod} - landing`);
    const items = (await leftMenuItems()).filter((t) => !UNSAFE.test(t) && !HOME_ITEMS.test(t));
    console.log(`  ${mod} menu:`, items.join(' | '));
    for (const item of items) {
      try {
        await page.goto(BASE + url);
        await settle();
        await clickLeft(item);
        await record(`${mod} - ${item}`);
      } catch (e) { console.error('  skip', mod, item, e.message); }
    }
  } catch (e) { console.error('skip module', mod, e.message); }
}

console.log(`Done: ${inventory.length} screens → ${SHOTS}`);
await browser.close();
