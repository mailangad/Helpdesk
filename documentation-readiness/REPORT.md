# LeanSuite Documentation Readiness Review

_Prepared 2026-09-25_

## Sources reviewed

| Source | What was reviewed |
|---|---|
| **Intercom Help Center** (help.theleansuite.com) | All 263 articles: 244 published, 19 draft.<br>Full read of all 6 release notes and all 19 drafts.<br>Spot-check of about 17 published articles across every collection.<br>105 support conversations since 2026-06-27. |
| **Apollo call recordings** | The last 100 recorded calls (2026-07-28 → 2026-09-25).<br>About 85 had usable product content. |
| **Web app / product surface** | `Jainikpa/theleansuite`: the public site, with its module and feature claims.<br>The Lovable prototype projects, for newer modules. |

The production app source was **not** available in this session. Screen paths below come from what LeanSuite staff clicked through on the calls. Verify them in the live product before publishing.

---

## Verdict: the documentation is **not ready**

The Help Center is a snapshot of the product as of **August 2025**. Since then the product has moved a long way, and almost none of that change is documented. Five problems stand out.

1. **Nothing shipped after February 2026 has a how-to article.**
   - The six release notes announce about 55 changes.
   - About 4 are fully documented and about 8 partially. The other ~43 have no article.
2. **The features customers spend the most call time on have zero articles.** Across the 100 calls, the most-explained topics were:
   - AI Time & Motion Study (explained live on 30+ calls)
   - Lean Creator "Create with AI" (Video SOP / OPL / Form / Combine Docs) and the SOP lifecycle
   - KPI setup and data sources
   - Lean Studio dashboards
   - Kaizen/EWO configuration and the workflow builder
   - DSW scheduling and assignment
   - Users, roles and permissions

   **None of these has a usable published article.** Lean Studio has 12 drafts, all empty.
3. **There is no account/admin documentation at all.** Login and password problems are the **#1 support topic** (~30 of 105 recent Intercom conversations). There is no article on:
   - login
   - password reset
   - SSO
   - adding users or bulk upload
   - roles/permissions
   - facilities or assets
4. **Existing articles have systemic defects.**
   - 141 published articles link to internal Intercom URLs (`/knowledge-hub/internal-article/...`) and to Confluence draft-edit links, which customers cannot open.
   - Screenshots are hosted on expired Atlassian media tokens.
   - Videos are on personal Google Drive.
   - Several articles contain empty template tables.
5. **Five collections have not been edited since 2025-08-31**, before every subsequent release: Kaizen, LMS, Best Practice, Skill Matrix and Cost Management. The only later timestamps come from a bulk touch on 2026-09-03, not real edits.

Fin (Intercom AI) is answering from marketing pages and release notes because of these gaps. It has given **wrong** answers, for example:
- telling a user to create a Skill Matrix team to add a production line
- inventing radar-chart level logic

---

## Coverage matrix

Legend: ✅ adequate · 🟡 partial/stale · ❌ none · 🆕 not yet shipped (document at launch)

| Area | Help Center today | Customer demand (calls + tickets) | Status |
|---|---|---|---|
| **Account: login, password reset, verification code, username/employee-ID login** | None; the login guide is internal-only (internal-article 4672769) | ~30 tickets + 5 calls | ❌ **P0** |
| **SSO (Entra ID/SAML claims, phone_number claim, mailnickname mapping, metadata XML)** | None | 4 calls (took multiple IT sessions) | ❌ **P0** |
| **User management: add user, workspace vs facility user, bulk upload template, Export Users → re-upload, inactive status, duplicates** | None | 12+ calls, 7 tickets | ❌ **P0** |
| **Roles & permissions: custom roles, "LeanSuite Administrator", module unlock, _log out/in after change_, admin-only gear** | None | 12+ calls | ❌ **P0** |
| **Facilities, workspace, asset hierarchy (Dept → Line → Workstation → Asset), Asset Mgmt, QR codes, reorg/soft-delete, request transfer** | Mentions only | 8 calls, 5 tickets | ❌ **P0** |
| **Getting started / onboarding / "where is everything" (waffle menu, home dashboard tabs)** | None | 3 tickets asked "where is the guide" | ❌ P1 |
| **Lean Creator: Create with AI (Video SOP, OPL, Form, Combine Docs, Assessment)** | None (intro draft = "Lean Cretor") | 25+ calls | ❌ **P0** |
| **SOP lifecycle: AI draft → Draft → Published; visibility; Start = e-signature; frame picker; per-step QR; print/download; translation** | None | 12+ calls | ❌ **P0** |
| Lean Creator form builder (question types, response properties, flag, rules, require evidence, scoring/pass threshold, Template Type = Kaizen, sections vs pages) | 🟡 5 articles from Nov 2025, missing rules/scoring/AI | 10+ calls | 🟡 P1 |
| Marketplace (preview → use/clone → My Templates; Public vs Private vs Workspace) | ❌ ("Marketplace" draft empty) | 8 calls | ❌ P1 |
| **Daily Standard Work: assign/schedule to user, role (one completes for all!), asset; recurrence; calendar/Kanban/grid; reminders; overdue; Submitted → View/Download report; DSW Reports** | 🟡 9 articles; the assign article has an empty field table | 12+ calls | 🟡 **P0** |
| **AI Time & Motion Study** (upload limits, compression, operator review/merge/rename/exclude, timeline edit, split/join, VA/SVA/NVA/Waiting/grey segments, certify/golden studies, recertify, compare studies, scenarios, findings → Kaizen, camera guide) | None | 30+ calls (Tomball weekly, Marion, Daikin, Pafco, Plastivaloire…) | ❌ **P0** |
| **KPI module** (Indicators vs KPIs, wizard: frequency/share/source, targets global vs per-entry, RAG, Pareto categories, calculated KPIs, KPI trees & leaf rule, OneDrive/SharePoint/Google Sheet, admin consent, same-filename rule, CSV upload mapping, bulk entry grid) | 🟡 7 articles from Nov 2025; the "Source" section is empty | 15+ calls | 🟡 **P0** |
| **Lean Studio** (dashboard types, widgets, custom heat map, add KPI from board, create tag from board, comments/@mention, meeting timer, freeform canvas + ~30 templates, save as template, group shapes, clone to facility, embeds) | ❌ 12 empty drafts | 15+ calls | ❌ **P0** |
| **Kaizen Settings** (project type → methodology/phases → phase templates → days by phase) and **setup order** ("no workflow created" error) | 🟡 Aug 2025 articles on type/methodology; no order, no templates | 8 calls | 🟡 **P0** |
| **Workflow builder** (statuses, transitions, send-back, rules: Who / validations / post-actions, roles, Preferences auto-select, module transition EWO/Tag → Kaizen, workspace-level workflows) | None | 8 calls | ❌ **P0** |
| Kaizen features (Present mode + Presentation settings, PDF, RCA Agent → Action Plan, Link Docs, Gantt/Portfolio, delay/slippage, revised due date + reason, workload, labels, savings types/status, saved & pinned views, export columns) | 🟡 62 articles, all Aug 2025 | 12+ calls, 12 tickets | 🟡 P1 |
| **EWO (Emergency Work Order)**: setup, sections (Description of Repair, RCA drill-down, Failure Curve, MTTR, breakdown start/end), EWO Settings breakdown types, reports | None | 5 calls | ❌ **P0** |
| F-Tag / Issue Mgmt (tag types, floor plan, Kanban, tier escalation, reassignment limit, default assignee, verification, print tag, QR) | 🟡 42 articles; Floor Plan & Kanban drafts empty; no tag types, no tiers | 5 calls | 🟡 P1 |
| Suggestions (points/prize catalog/leaderboard/Wall of Fame, RICE, Lean AI, translate, status glossary, "Pending feedback", kiosk) | 🟡 31 articles; nothing on points/rewards | 5 calls, 10 tickets | 🟡 P1 |
| Best Practice (adoption tracking: reviewed/applicable/implemented/why not) | 🟡 26 articles (Aug 2025); promised "adopt/reject" article missing | 3 calls | 🟡 P2 |
| **LMS** (Instructor Panel, quiz → course → learning plan, public/private + enrollment requests, attempts, refresher, in-class + attendance code, course share across facilities, assign to role, link course to skill level, manual/external training, due window/overdue, analytics) | 🟡 24 articles (Aug 2025); none on role assignment, in-class, share, skill linkage | 6 calls, 6 tickets | 🟡 P1 |
| **Skills Matrix** (teams/job profiles vs roles vs skills vs procedures, Tool Management, level criteria & auto-upgrade, radar chart reading, gap planning, training tracker, user profile) | 🟡 14 articles (Aug 2025) | 8 calls, 3 tickets | 🟡 P1 |
| **Document Management** (folders, owner, expiration/review, version history, sign-off, link to Kaizen for RCA) | None | 7 calls | ❌ P1 |
| Cost Management / Loss Trees | 🟡 17 articles (Aug 2025) | 2 calls | 🟡 P2 |
| Saved views & pinning (all dashboards) | 🟡 F-Tag/Suggestion only | 4 calls, 3 tickets | 🟡 P1 |
| Mobile app (iOS/Android, install, login incl. SSO, QR scan, voice-to-text, kiosk/shared tablet) | None | 8 calls | ❌ P1 |
| Notifications (email/push prefs, due reminders ±1 day, DSW 30-min reminder, @mention, bell, calendar sync) | None | 4 calls | ❌ P1 |
| Language (Language Preferences, browser-translate conflict, what content translates, AI SOP language) | None | 5 calls | ❌ P2 |
| Public API & data export (API key, Swagger/Postman, Excel exports) | None | 3 calls | ❌ P2 |
| Security/data FAQ (data ownership, 30-day post-cancel access, AI models/privacy, SOC 2, hosting) | None | 4 calls | ❌ P2 |
| Glossary (hard/soft/virtual savings, slippage, NCI, sponsor vs member, VA/SVA/NVA, Focused vs Systematic, Tools = skills, EWO) | None | many tickets (incl. Spanish) | ❌ P1 |
| Release notes | 🟡 last one is 2026-03-30; Feb note reuses the Oct version number; Sep 2025 note has internal "Pending/Under testing" text | Customers asked for release notes (Whirlpool, Tomball, Pafco) | 🟡 P0 |
| QA Matrix, Gap Planning, Job Cover Matrix, Hoshin | None | Low | ❌ P2 |
| 🆕 Lean Hub / Spaces, AI course builder, LMS course marketplace, Outlook sync, machine-linked QR, per-form Lean Creator reporting hub | n/a | Promised on calls | 🆕 |

---

## What to fix in the existing Help Center

1. **Replace all internal links.** 141 articles have links like this:
   - `app.intercom.com/a/apps/lhkbxbyv/knowledge-hub/internal-article/...`
   - `theleansuite.atlassian.net/wiki/...edit-v2...draftShareId=`

   Replace them with public article URLs, or remove them. Also publish the internal login guide (4672769), since every how-to's "Step 1: log in" points to it.
2. **Re-host media.**
   - Screenshots on `api.media.atlassian.com` have expired tokens (e.g. 12123205).
   - "Watch Now" videos are on personal Google Drive (12123755, 12123562, 12123895, 12124661, 12125099).
3. **Fill or delete empty scaffolding.**
   - 12123562: "Headings in Kaizen Dashboard" table is empty.
   - 12920991: DSW assign-template field table has 16 blank rows.
   - 12920022: KPI "Source" section is empty.
   - 12124661: team steps 4.1–4.3 are empty.
   - 12123895: "Stage 2: Field Mapping" is empty.
   - Empty "Need Help?" callouts.
4. **Delete or finish all 19 empty drafts.** Delete 12960771 ("Untitled public article").
5. **Fix copy-paste errors and typos.**
   - Titles:
     - 12124990 "What **if** F-tag Module" → "What **is** the F-Tag Module"
     - 12125128 "Quizes" → "Quizzes"
     - 12124898 "What are Reports the in…"
     - 13311987 "Dashbaord" → "Dashboard"
   - Bodies:
     - 12123562 describes Kaizen with Best Practice text.
     - 12125114 ("delete a course") ends with "confirm the assignment".
     - 12123755 has a stray "(Replaced by Which in Lean Suite)" note.
     - "clock on" / "cloc on" / "facilites" / "serch" / "configurer".
   - Standardize "LeanSuite" (not "Lean Suite") and "an F-Tag".
6. **Remove tutorial-chain phrasing** ("6 down, 11 more to go!") so articles stand alone in search.
7. **Update stale articles for shipped UI changes.**
   - "Due Date" → "Revised Due Date" (12123562).
   - Home icon refresh (screenshots).
   - Renamed EWO/Kaizen sections, e.g. "Problem Description" (12123778).
8. **Fix the release notes.**
   - 12565743 (Feb 28 2026) carries version 2025.1.5.1, the same as the October 2025 note.
   - 12053058 shows internal "Pending | Under testing" text.
   - Publish notes for every release since March 2026. Known releases include the weekends of Aug 22, Sep 6, Sep 19–20, and the Sep 20 major release: Lean Creator hub redesign, audit scoring, Lean Studio freeform templates, per-step SOP QR, compression, and more.
9. **Remove stale "New" badges** on KPI and DSW in the app (product item, raised on the 9/1 partner call).

---

## Recommended plan

**Week 1: P0 access & admin (stops the #1 ticket source)**
- Getting Started / Login / Password reset (with verification-code screenshot) / Username vs Employee ID
- Admin Guide: Users (add, workspace vs facility, bulk upload, export → re-upload, inactive, duplicates), Roles & permissions (incl. "log out and back in"), Facilities & Asset hierarchy + QR codes
- SSO setup guide for IT (Entra ID claims spec)
- Fix internal links + republish login guide

**Weeks 2–3: P0 newer features (stops live re-explaining on calls)**
- Lean Creator: Create with AI (all 4 modes) + SOP lifecycle + publish/assign/sign-off
- DSW scheduling & reporting (incl. role-completion rule)
- AI Time & Motion Study collection (upload → operators → review/edit → certify → compare → findings; camera guide)
- KPI collection rewrite (wizard, sources, targets, Pareto, calculated, trees, upload)
- Lean Studio collection (write the 12 drafts + freeform templates)
- Kaizen & EWO setup order + Workflow builder + EWO module
- Release notes backfill (Apr–Sep 2026)

**Week 4+: P1/P2**: Kaizen feature refresh, F-Tag tiers/types/floor plan, Suggestions points & rewards, LMS & Skills Matrix refresh, Document Management, Mobile, Notifications, Glossary (EN + ES), Language, API, Security/Data FAQ.

**Process fixes:**
- Ship a release note plus the affected how-to updates with every release. Customers learned about the 9/19–20 Lean Creator redesign by exploring it themselves.
- Every "we'll send you steps" on a call should produce a Help Center article. Examples: Lean Studio shape grouping (Donaldson), Time Study delete/reassign ("we still need to do some documentation for it"), and Lean Creator create/edit docs promised to Tomball.
- Add Spanish versions of core end-user articles: Whirlpool Mexico, Haceb and MentorGo users write in Spanish.

See **ARTICLE_BACKLOG.md** for the full prioritized article list with draft outlines taken from the calls. See **PRODUCT_FOLLOWUPS.md** for claims to verify, bugs and feature requests that surfaced, and website/product inconsistencies.
