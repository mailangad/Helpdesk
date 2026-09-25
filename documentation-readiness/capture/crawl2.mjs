// Crawler v2 for LeanSuite, for apps whose navigation is buttons rather than links.
// Opens every module tile from Home, then clicks every item in that module's left
// menu, saving a screenshot and a UI inventory (headings, buttons, tabs, columns)
// for each screen. It also opens the gear menu and the "Create New" menu.
// It never clicks items whose text looks destructive or final (see UNSAFE below).
//
//   LS_URL=https://lean-suite.web.app HEADFUL=1 node crawl2.mjs
import { chromium } from 'playwright';
import fs from 'node:fs';
import path from 'node:path';
import readline from 'node:readline/promises';

const BASE = (process.env.LS_URL ?? 'https://lean-suite.web.app').replace(/\/$/, '');
const OUT = path.resolve('app-inventory');
const SHOTS = path.join(OUT, 'screens2');
fs.mkdirSync(SHOTS, { recursive: true });

const MODULES = ['Suggestion', 'Kaizen', 'Tag', 'QA Matrix', 'EWO', 'Best Practice',
  'Cost Management', 'Skill Matrix', 'LMS', 'Workflow', 'Lean Creator', 'Kpi',
  'Daily Standard Work', 'Lean Studio', 'Document Management'];
const UNSAFE = /(delete|remove|archive|log ?out|sign ?out|reset|deactivate|submit|publish|approve|reject|send|save)/i;

const browser = await chromium.launch({ headless: !process.env.HEADFUL });
const ctx = await browser.newContext({ viewport: { width: 1440, height: 900 } });
const page = await ctx.newPage();
await page.goto(`${BASE}/login`);
const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
await rl.question('Log in in the browser window, then press Enter here… ');
rl.close();

const inventory = [];
const slug = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');

async function settle() {
  await page.waitForLoadState('networkidle', { timeout: 15000 }).catch(() => {});
  await page.waitForTimeout(1200);
}

async function record(name) {
  await settle();
  const info = await page.evaluate(() => {
    const txt = (sel) => [...new Set([...document.querySelectorAll(sel)]
      .map((e) => (e.innerText || e.getAttribute('aria-label') || e.getAttribute('placeholder') || '').trim())
      .filter((t) => t && t.length < 80))].slice(0, 150);
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
  fs.writeFileSync(path.join(OUT, 'app-inventory-v2.json'), JSON.stringify(inventory, null, 2));
  console.log(`[${inventory.length}] ${name}  ${page.url()}`);
}

async function goHome() {
  await page.goto(`${BASE}/main/home`);
  await settle();
}

// Visible sidebar entries (left navigation) other than the Home-level ones.
async function sidebarItems() {
  return page.evaluate(() => {
    const aside = document.querySelector('aside, nav, [class*="sidebar" i], [class*="side-nav" i]');
    if (!aside) return [];
    return [...new Set([...aside.querySelectorAll('a,button,[role=button],li')]
      .map((e) => e.innerText.trim().split('\n')[0])
      .filter((t) => t && t.length < 40))];
  });
}

await goHome();
await record('Home');

// Global menus: gear settings and Create New.
for (const [label, sel] of [['Gear menu', 'header button:has(svg) >> nth=-2'], ['Create New menu', 'text=Create New']]) {
  try {
    await goHome();
    await page.click(sel, { timeout: 5000 });
    await record(label);
    await page.keyboard.press('Escape');
  } catch (e) { console.error('skip', label, e.message); }
}

const HOME_ITEMS = new Set(['Home', 'Prize Catalog', 'Requested Prizes', 'Leaderboard', 'Campaigns']);
for (const mod of MODULES) {
  try {
    await goHome();
    await page.getByText(mod, { exact: true }).first().click({ timeout: 8000 });
    await record(`${mod} - landing`);
    const items = (await sidebarItems()).filter((t) => !HOME_ITEMS.has(t) && !UNSAFE.test(t));
    const landing = page.url();
    for (const item of items) {
      try {
        await page.goto(landing);
        await settle();
        await page.getByText(item, { exact: true }).first().click({ timeout: 5000 });
        await record(`${mod} - ${item}`);
      } catch (e) { console.error('skip', mod, item, e.message); }
    }
  } catch (e) {
    console.error('skip module', mod, e.message);
  }
}

console.log(`Done: ${inventory.length} screens → ${SHOTS}`);
await browser.close();
