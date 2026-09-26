# Help Center clean-up: final status (2026-09-25)

## Published articles: 244, all fixed and reviewed
- **Fixed in place.** Originals are backed up in `intercom-backups/original/`, and every change is recorded in `intercom-backups/fix_log.jsonl`.
- **Independent review:** every article was re-read after fixing. 208 passed and 59 received follow-up fixes; some articles were counted by more than one review. No working screenshot was lost.

**What was fixed across the Help Center:**
- **Links:** about 300 internal Intercom and Confluence links were replaced with public articles or removed. Broken links and broken Atlassian images were removed.
- **Login step:** "Step 1: log in" now links to the public login article (17182735).
- **Empty sections:** empty tables, bullets, collapsible sections, callouts and "This section____" placeholders were filled from verified facts, or removed.
- **Wording:**
  - typos and titles fixed; "Lean Suite" changed to "LeanSuite"
  - raw icon codes removed
  - tutorial-chain phrasing ("X down, Y to go") removed
  - text copied from the wrong module corrected
- **Current features:** short "Good to know" sections were added, based on the release notes and on walkthroughs from customer calls.
- **Key articles:**
  - The KPI overview was rewritten.
  - The empty Lean Creator and DSW tables were filled in.
  - Internal status text and a wrong version number were removed from the release notes.

**Needs someone in the Intercom editor.** The API accepted these updates but the content didn't save:
- 12123178, Suggestion side window: paste the body from `intercom-backups/paste-manually/12123178-*.html`
- 12921679, Lean Creator Questions & Responses: paste the body from `intercom-backups/paste-manually/12921679-*.html`

**Intercom API behaviour to know about:**
- Section headings are stored as h1, which is Intercom's standard heading.
- colspan is ignored.
- Numbered lists that continue after a screenshot restart at 1. Where this happened, the step numbers were written out explicitly.

## New articles: 73, still drafts except two
- All 73 were reviewed and made consistent.
- 17182735 (login) and 17182745 (departments and assets) are live.
- See `DRAFTS_INDEX.md`.
- Collections still to create:
  - **AI Time & Motion Study**, for articles 17183323, 17183326, 17183329 and 17183331
  - **Document Management**, for 17183630
  - Optionally **EWO**, for 17183189

## Still open (needs your team)
1. **Screenshots.** Run the app crawl (`NEXT_SESSION.md`, `capture/crawl.mjs`). About 90 published articles are flagged for new or retaken screenshots (`needs_screenshots` in `fix_log.jsonl`), plus the drafts in `SCREENSHOT_SHOTLIST.md`.
2. **Google Drive videos.** About 110 "Watch the video walkthrough" links point to personal Google Drive. Re-host them, for example in Intercom, on YouTube (unlisted) or on Loom.
3. **Steps that couldn't be verified.** A few steps were left generic ("as shown in the video") because the original text was empty: F-Tag 12125014, 12125009, 12125001, 12125066, 12125055, 12125058 and 12125057; Kaizen 12123761 and 12123648. Write these from the videos or the app.
4. **Product facts to confirm:**
  - "Causal" vs "Casual" loss type (12123483)
  - Import History "manual vs system/API"
  - whether manual/external training has been released
  - the filled RCA row in 12123836
  - the KPI vs Savings fields in 12123837
5. **Archive the superseded articles once their replacements are published:**

| Old article | Replaced by |
|---|---|
| 12920991 | 17183176 |
| 12123562 | 17183948 |
| 12124661 | 17183949 |
| 12124990 | 17183950 |
| 12920022 | 17183337 |
| 12920026 | 17183343 |

6. **Delete** the empty draft 12960771 ("Untitled public article").

## Update 2026-09-26: collections
- **Created** QA Matrix (19761776), using the Intercom REST API.
- **Moved articles:**
  - Time Study articles 17183323, 17183326, 17183329 and 17183331 → AI Time and Motion Study (19761725). The name uses "and" because Intercom escapes "&" in collection names.
  - 17183630 → Document Management (19761726)
  - 17185105 → QA Matrix (19761776)
- **Lean Creator (15557323)** stays its own collection, separate from Document Management.
- **Descriptions:** rewrote the one-word descriptions on all older collections.
- **Article order:** Intercom's API can't reorder articles inside a collection. To apply `COLLECTION_ORDER.md`, drag the articles into order in the Intercom editor.
- **Final QA:** see `FINAL_QA.md`. It found 3 more duplicate pairs: 12920931/12920887, 17183557/12123466 and 17183564/12124998.
- **Duplicates:** the owner chose to keep the newer articles. 9 older copies were set to draft: 12920991, 12123562, 12124661, 12124990, 12920022, 12920026, 12123466, 12124998 and 12920887. Links to them in 40 published articles now point to the replacements; the log is `intercom-backups/link_redirect_log.jsonl` and the backups are in `intercom-backups/unpublished/`.
- **Custom domain:** help.theleansuite.com is live.
- **Empty draft 12960771:** still to be deleted by hand in the Intercom editor.
