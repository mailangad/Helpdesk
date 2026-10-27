# Screenshots round 6

Source: existing captures only (the app is not reachable from this environment): `capture/app-inventory/screens/` (Kaizen and Suggestion detail views), `screens5/kaizen-landing.png`, and earlier vetted crops in `screenshots/v4`, `v4b`, `v5` and the root folder.
Crops: `screenshots/v6/` (commit `92f8e8e`), referenced as `https://raw.githubusercontent.com/mailangad/Helpdesk/92f8e8e03e12e825b57e59603d2b4ddc57e15be5/documentation-readiness/screenshots/v6/<name>.png`, the same pinned-commit pattern as v5. Intercom re-hosted every image on save (checked: each saved body has an `intercom-attachments` URL with the file name).

Privacy: new crops exclude the left menu (user card) and the top bar account menu. The Project Lead name and avatar in the Kaizen details panel are blurred, and the Intercom bubble is cropped out. Reused crops were re-checked by eye. The only account name visible anywhere is the demo login "LeanSuitee User2", which is not in any v6 crop.

## Summary

- Images added: **25**
- Articles updated: **22** (all verified: image count went up by exactly the number added; state, parent and author unchanged)
- Text corrections: **2**
- Captions added for back-to-back images: **0** (the old images are on the Intercom CDN, which is blocked here, so they could not be viewed; listed in `SCREENSHOT_GAPS.md`)
- Remaining gaps: **393** shots in 182 articles, see `SCREENSHOT_GAPS.md` and `capture/shots_v6.json`

## Articles updated

| ID | Title | Images before → after | Images added | Text changes |
|---|---|---|---|---|
| 12123205 | What is Kaizen? | 0 → 1 | kaizen-dashboard-table.png | Added a one-line lead-in before the image |
| 12123695 | About the Kaizen process after creation | 0 → 1 | kaizen-detail-view.png | Added a one-line lead-in before the image |
| 12123661 | Edit information in a Kaizen | 0 → 2 | kaizen-details-panel.png, kaizen-implementation-field.png | — |
| 12123715 | About Kaizen section types | 0 → 1 | kaizen-add-section-bar.png | Added a one-line lead-in before the image |
| 17183561 | Manage action plans, timelines and delays in a Kaizen | 0 → 2 | kaizen-add-section-bar.png, kaizen-dashboard-view-switch.png | **Correction:** "In a Kaizen, click More → Action Plan." → "In a Kaizen, click Action Plan in the Add Section bar, or find it under & More." |
| 12123761 | About the Action Plan section in Kaizen | 0 → 1 | kaizen-add-section-bar.png | — |
| 12124836 | What is Best Practice? | 0 → 1 | best-practice-dashboard-table.png | Added a one-line lead-in before the image |
| 12124027 | What is Cost Management? | 0 → 1 | cost-management-kpis.png | Added a one-line lead-in before the image |
| 12882033 | About the Floor Plan in F-Tag | 0 → 1 | tag-floor-plan.png | Added a one-line lead-in before the image |
| 12125081 | About F-Tag statuses | 0 → 1 | tag-kanban-board.png | Added a one-line lead-in before the image |
| 12125137 | What is LMS? | 0 → 1 | lms-dashboard.png | Added a one-line lead-in before the image |
| 17183627 | About teams, skills, roles and procedures in the Skill Matrix | 0 → 1 | skill-matrix-all-teams.png | — |
| 13311870 | Create a dashboard in Lean Studio | 0 → 1 | lean-studio-create-dashboard.png | **Correction:** "Open Lean Studio and click to create a new dashboard." → "Open Lean Studio and click + Create Dashboard at the top right." |
| 17182751 | About AI drafts, drafts and published templates | 0 → 1 | lean-creator-ai-drafts-toolbar.png | Added a one-line lead-in before the image |
| 17182750 | Create an SOP from a video | 0 → 1 | lean-creator-ai-drafts-toolbar.png | — |
| 17183331 | Review, edit and certify a time study | 0 → 1 | time-motion-compare.png | — |
| 17183489 | Export data from LeanSuite | 0 → 1 | suggestion-dashboard-export.png | — |
| 17183944 | Get started with LeanSuite as a frontline user | 0 → 2 | home-counters.png, lms-my-learning-table.png | — |
| 17183946 | Choose the right LeanSuite module | 0 → 1 | home-switch-to.png | Added a one-line lead-in before the image |
| 17182738 | Get access to your company's LeanSuite workspace | 0 → 1 | facility-switcher.png | — |
| 12123152 | Edit information in a suggestion | 0 → 1 | suggestion-details-panel.png | — |
| 12123638 | Add a file to a Kaizen | 0 → 1 | kaizen-attach-button.png | — |

## Images created (v6)

| Image | Source | Redaction |
|---|---|---|
| kaizen-dashboard-table.png, kaizen-dashboard-view-switch.png | screens5/kaizen-landing | none needed (test data only) |
| kaizen-detail-view.png, kaizen-details-panel.png | screens/main_kaizen_fdefb051… | Project Lead name and avatar blurred; Intercom bubble cropped out |
| kaizen-implementation-field.png, kaizen-attach-button.png | screens/main_kaizen_fdefb051… | none needed |
| kaizen-add-section-bar.png | screens/main_kaizen_e8771a9c… | none needed |
| facility-switcher.png | screens5/kaizen-landing (top left) | none needed (demo facility name) |
| lean-studio-create-dashboard.png, lean-creator-ai-drafts-toolbar.png, time-motion-compare.png | cropped from v4b crops | none needed (v4b already blurred a template name) |
| suggestion-dashboard-export.png | root 17183483-toolbar.png, collapse button trimmed | none needed |
| best-practice-dashboard-table, cost-management-kpis, tag-floor-plan, tag-kanban-board, lms-dashboard, skill-matrix-all-teams, home-counters, lms-my-learning-table, home-switch-to, suggestion-details-panel | copies of earlier vetted crops (v4, v4b, v5, root) | as before (Kanban names and avatars blurred in v5) |

## Text corrections

- **17183561 Manage action plans, timelines and delays in a Kaizen:** step 1 said "click **More → Action Plan**". The Kaizen screen has an **Add Section** bar with an **Action Plan** quick option and an **& More** drop-down. Now: "click **Action Plan** in the **Add Section** bar, or find it under **& More**."
- **13311870 Create a dashboard in Lean Studio:** step 1 said "click to create a new dashboard". The button is **+ Create Dashboard** at the top right. Now: "click **+ Create Dashboard** at the top right."

## Screens considered and skipped

- Suggestion detail views (2220, 2235–2241): the Attach drop-down is never open, so the Photo / Sketch steps could not be illustrated. 2236 shows the Approve button and 2235 the Reject / Mark As Complete pair, but those articles already have images at those steps.
- Kaizen detail views: used for overview, details and Add Section. The Photo / Sketch icons in the drag & drop box were not used for the "Choose the Photo option" steps because the screen does not show which icon is which.
- Lean Studio dashboard cards: the pencil icon was not used for 13311893 (Edit dashboard details) because the capture does not show whether it edits details or the layout.
- All other captures were already used in rounds 1–5, or still loading (see SCREENSHOTS_V5.md).

Backups of each body before the update: `scratchpad/backups/<id>.shots6.html`. Log: `scratchpad/shots6_log.jsonl`.
