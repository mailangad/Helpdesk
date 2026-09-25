# Product follow-ups found during the documentation review

These items can't be fixed by writing docs alone. Some facts need to be confirmed before we publish. Some claims on the website disagree with what was said on calls. The rest are bugs and feature requests that customers raised on the last 100 calls.

## 1. Facts to confirm before publishing (calls contradicted each other)

| Topic | What calls said |
|---|---|
| Time Study max upload | 2 hr (most calls). The website says 4 hr. Size limits quoted as 2 GB → 3–4 GB → 11 GB. |
| Time Study utilization % | Calculated on VA only. Customer saw 129% and 17%, and the team couldn't explain the numbers. |
| Outlook/Google calendar sync for DSW | Described as available (Quick Connect 8/7, Mirai 8/3) and as "on roadmap" (LeanCreator 9/16). |
| Lean Studio dashboard clone | Described as available (Donaldson 8/6, 9/14) and as "coming in a week" (Donaldson 8/21, Tomball 8/17). |
| Kaizen description / export limit | Raised 150 → 200 → 400; 600 promised for 9/20. |
| Savings types | Soft, hard, virtual, plus a fourth that the presenter couldn't recall. |
| SSO providers | Microsoft and Google confirmed. ADP answered "yes". The website mentions only "SSO". |
| True/False "flag response" option | Said to be missing (9/14). Needs checking in current build. |
| Manual/external training in the Skills Matrix | Was on staging only on 9/3. Needs checking whether it has been released. |
| Lean Creator "schedule from template screen" | Shown as a prototype on 9/23. |
| EWO spare parts linking to NetSuite/SAP | Mentioned, but no inventory control exists. |
| Kaizen deletion | Customers asked. Fin said deletion isn't possible. |
| AI models used | Gemini (Lean Creator / Time Study); OpenAI and Anthropic (RCA). Confirm this is OK to publish. |

## 2. Website claims (Jainikpa/theleansuite) not seen in the product or on calls
Confirm each of these before any help article repeats it:
- Offline mode for audits, Lean Creator, LOTO, SOP, DWI and SMP.
- 30+ languages for AI SOP/DWI.
- A long list of named integrations: SAP PM, Maximo, Fiix, Limble, UpKeep, Workday, SuccessFactors, Cornerstone, Intelex, Cority, Ignition, Tulip, Tableau, Visio export, and others.
- SCORM upload in the LMS. Calls said external LMS/SCORM integration is a *request*.
- Vision AI modules: Ergonomic Study (REBA/RULA), VSM from video, SMED changeover, AI SMP. Calls said ergonomics and SMED are *roadmap*.
- QR "scan-to-learn with no account needed" (OPL). Calls said step QR codes *require login*.
- `/continuous-improvement-software` says "COMING SOON: Lean AI RCA". The `/ai-root-cause-analysis` page and the calls show it as live.
- Pricing conflicts:
  - `/pricing` says there are no tiers and the product is free for teams of 25 or fewer.
  - `/linkedin-page` describes a Free plan for up to 10 users, plus Growth, Business and Enterprise plans.
- ROI calculator lists modules that exist nowhere else: SPC charts, Visual Scheduling, Inventory Visibility.
- The homepage integrations image points to `/assets/sections/integrations/integrations.png`, which doesn't exist in the repo. The image may be broken.
- `/audit-readliness` is a misspelled URL.

## 3. Bugs raised on calls (as of the call date; some may already be fixed)

**Kaizen**
- Pinned saved views don't persist after refresh or across modules (Whirlpool 8/6, 8/13).
- 4M1D is missing an "M" until reload (Daikin 9/8).
- Photos in presentation mode need a refresh (Tomball 9/23).
- Hard/soft savings don't show in presentation Results (Daikin 8/6).
- A "sync/claim your account" pop-up appears after presentation mode (Daikin 8/6).
- The Problem Description section disappears after adding it (ticket 215475474821483).

**EWO**
- Reports are empty when filtered (Tomball 9/25).
- The "Tools" section is mandatory; this was agreed to become optional.

**KPI**
- Values on the same date with different categories are summed, not averaged.
- The "total" dropdown silently makes a KPI calculated.
- The user is navigated away after creating a KPI.
- Upload fails on null rows, with an unclear error.
- Values didn't display on a new facility.

**Lean Studio**
- Heat map legend/tooltip toggles do nothing.
- Shift+click grouping failed during a demo.

**Lean Creator / SOP**
- Draft Preview and Start open a blank screen.
- Saved drafts can't be edited with the pencil.
- The .mov format produced no step QR codes.
- The "finish reason = stop" error appears.
- AI generation times out on new facilities and on pasted text.
- Frames came out black (fixed).

**Tags**
- The default assignee can't be deleted from assignments.

**Time Study**
- Edits were lost during an outage.
- Studies don't load after the auth token expires.

**Documents**
- The new-folder name field is hidden.

**Auth**
- The reset Submit button is missing when the password contains special characters.
- Forgot-password emails are not arriving.
- ID-only users are now asked for a password.
- SSO requires a mock `phone_number` claim, and IT teams find this unusual.

## 4. Top feature requests (frequency across calls)

**Lean Creator**
- A grid of all submissions with open/closed/critical counts.
- Tolerance-based numeric answers and SPC/control charts.
- Photos in downloaded reports.
- Monthly roll-up report and overdue-by-user report.

**SOP**
- WYSIWYG editing, undo, and version history.
- Upload your own step image.
- Print/Download in the three-dot menu.
- Share AI drafts with other users.
- One-page job-aid layout.
- Clone an SOP into another language.
- Custom output template.
- Generate from a video in Documents, or from multiple videos.

**Time Study**
- Process label dropdown from a master list.
- Multi-camera studies.
- Batch processing.
- Re-analyse a selected window.
- Manual "Off station".
- Rename "semi-VA" to "required NVA".
- Bulk relabel.
- Per-operator statistics.
- Ergonomics.

**KPI**
- Shared-drive source.
- Grid entry.
- Hide fixed targets.
- Ask for a Pareto category only when off target.
- Admin UI for pillars.

**Lean Studio**
- Clone boards as templates.
- Notes, announcements, or a feed widget.

**EWO**
- Severity/priority field.
- Spare-parts inventory (min/max, scan-out).
- Technician-simplified view.

**LMS**
- 30/60/90-day expiry reminders.
- Required hours per person.
- Supervisor training-hours and cancellation entry.
- HSE course library.
- Historical training import.
- External content integration (M+, Vector Solutions, SCORM).

**Kaizen**
- Longer export description.
- Expansion phase columns.
- Glide path relabel, colours, and data labels.
- Custom fields per project type.
- AI quality scoring against "golden" Kaizens.

**Platform**
- In-app bug/feature reporting.
- In-app chat or feed. Lean Hub/Spaces is in design.
- Custom branding and logo.
- Public API documentation for customers.
- Outlook sync.
- QR code that opens a specific checklist.
- Machine ledger / equipment history (Haceb quote).
- Odoo and NetSuite integrations.
- Strategy Deployment / Hoshin module.

**Spanish**
- Speech-to-text in Spanish.
- Untranslated strings.

## 5. Gaps in this review
- **Apollo calls with no data:** Watershed 8/7 and Haceb/Whirlpool Weekly 8/7 had no transcript or insights.
- **Source code:** the production app's source was not accessible. The repo available was the marketing site. Screen names come from call walkthroughs.
- **Daily Issue Management pages on the marketing site:** only partly inventoried.
