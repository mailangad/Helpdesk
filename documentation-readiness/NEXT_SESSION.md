# Handoff: full app coverage pass

Goal: make sure the Help Center covers **every screen and feature of theleansuite.app**, with screenshots.

## Prerequisites (owner)
1. In the cloud environment settings, allow network access to `theleansuite.app`, plus any API or asset domains the app uses.
2. Add environment secrets `LS_URL=https://theleansuite.app`, `LS_USER` and `LS_PASS` for an **admin user in a demo/sandbox facility** with sample data. Never use a customer facility.
3. Start a **new** session on branch `claude/documentation-readiness-review-9qm6yf` in `mailangad/Helpdesk`. Network and secret changes only apply to new sessions.

## Steps for the next session
1. `cd documentation-readiness/capture && npm i playwright`
2. Run `node crawl.mjs`. It produces `app-inventory/app-inventory.json` with the URL, headings, buttons, tabs, form labels and table columns for every screen, plus full-page screenshots.
   - The crawler never clicks buttons. It only follows links, so it can't change data.
   - Settings screens behind modals may need manual steps added.
3. Compare the inventory with the Help Center:
   - Every screen maps to at least one article.
   - Every button, tab, column and settings field named on a screen is explained somewhere.
   - Every article's button names match the app. Fix any mismatches in the drafts and published articles.
   - Write the gaps to `APP_COVERAGE_GAPS.md`, then write the missing articles as drafts.
4. Fill in `capture/shots.json` from `SCREENSHOT_SHOTLIST.md` using the real URLs and selectors. Run `capture.mjs`, then add the screenshots to the Intercom articles. Upload them in the Intercom editor; the API tools can't upload images.
5. Update `DRAFTS_INDEX.md` and `PUBLISHED_ARTICLE_FIXES.md` with what was done.

## State at handoff
- **73 draft articles.** See `DRAFTS_INDEX.md`. Two of them (17182735 and 17182745) have been published by the owner.
- **Published-article fixes:** all 244 published articles were edited in place on 2026-09-25. Original HTML backups are in the previous session's scratchpad, and a summary is in `PUBLISHED_ARTICLE_FIXES.md`.
- **Collections:** Getting Started = 19761634, Administration = 19761635.
