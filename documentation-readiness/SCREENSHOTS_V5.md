# Screenshots round 5 (crawler v5)

Source: `capture/app-inventory/screens5/*.png` (112 captures, 1440x900) and `app-inventory-v5.json`.
Crops: `screenshots/v5/` (commit `5e6e890`). Articles reference them as
`https://raw.githubusercontent.com/mailangad/Helpdesk/5e6e890c4db910b1d707f40d9241c5153509b8e7/documentation-readiness/screenshots/v5/<name>.png`. Intercom re-hosted each one on save.

Privacy: every crop excludes the left menu user card and the top-right account menu. Real people's names and avatars were blurred, and tooltips were patched out. Each final crop was checked by eye.

## Images created (9)

| Image | Source screen | Redaction | Used in |
|---|---|---|---|
| dsw-reports-charts.png | daily-standard-work-pie-chart | tooltip patched | 12920854 What is Daily Standard Work? |
| lms-course-catalog-cards.png | lms-course-catalog | none needed (demo account name only) | 12125139 About the Course Catalog |
| lms-my-learning-table.png | lms-my-learning | tooltip patched | 12125145 About My Learning |
| lms-reports-overview-chart.png | lms-lms-reports | tooltip patched | 12125130 About LMS reports |
| tag-reports-general-analytics.png | tag-tag-reports | tooltip patched | 12125045 About F-Tag reports |
| tag-kanban-board.png | tag-kanban-board | Most Active User, assignee names and avatars blurred; tooltip patched | 12882047 About the Kanban Board in F-Tag |
| cost-management-savings-projects.png | cost-management-landing | assignee avatars and Department/Line/Workstation/Asset chips (contain a person's name) blurred | 12124064 About the Cost Management dashboard |
| ewo-dashboard-table.png | ewo-landing | one title containing a person's name blurred; Intercom bubble removed | not placed (see below) |
| best-practice-dashboard-table.png | best-practice-landing | none needed | not placed (see below) |

## Articles updated (7, all verified: image count went up by exactly 1)

| ID | Title | Images before → after | Text changes |
|---|---|---|---|
| 12125145 | About My Learning | 3 → 4 | Described the Course Type values (Online / In-Class) and the pager total |
| 12125139 | About the Course Catalog | 4 → 5 | **Correction:** the tip "Click More to see additional search filters" now points to the Search by course title box, **Filters** and **Group By**, because there is no More button in the UI. Added a description of the Grid card: status, and the Enroll Now / Continue / Start Course buttons and wishlist heart |
| 12125130 | About LMS reports | 7 → 8 | **Correction:** "Pillar Training (in mins)" is now the chart name **Pillar-wise Training Duration and Trainee Count**, with table columns Pillar, Number of Trainees and Training Duration (Minutes). Added the gear and Export buttons |
| 12125045 | About F-Tag reports | 3 → 4 | Added a description of General Analytics: the Estimated Cost By Asset chart, the T-Asset / Cost table and the Status chart |
| 12882047 | About the Kanban Board in F-Tag | 0 → 1 | Added how to open the board (Kanban Board menu item, Table / List / Kanban switch), the column counts and the card contents |
| 12124064 | About the Cost Management dashboard | 6 → 7 | **Correction:** the tile names now match the UI: Projected Saving ($), Closed Project Saving ($), Carry Over ($), Slippage ($) and Variance ($). Added a project card description |
| 12920854 | What is Daily Standard Work? | 7 → 8 | Added a "5. DSW Reports" subsection covering the flag-item charts, Filters, gear, Export and the table columns |

Backups of each body taken before the update are in `scratchpad/backups/<id>.shots5.html`. The log is `scratchpad/shots5_log.jsonl`. Only the body changed. State, parent, author, title and description are unchanged.

## Created but not placed

- **ewo-dashboard-table** and **best-practice-dashboard-table**: articles 17183189 (What is an EWO?) and 12124910 (About the Best Practice dashboard) already have a v1 toolbar screenshot that shows the same columns. Adding these would duplicate it.

## Screens skipped

| Screen(s) | Reason |
|---|---|
| Kaizen / EWO / Best Practice Approval Dashboard | Table still a loading skeleton (toolbars already covered in v4) |
| DSW Schedule Dashboard | Table skeleton (toolbar already covered in v4b) |
| DSW Reports lower cards | Skeleton / "Report Not Found"; only the top two charts were used |
| Cost Management Loss Trees, Mapping Resultant & Causal Losses, Import History, Reports | Skeleton tables/charts with a spinner (headers already covered in v4) |
| Skill Matrix Reports, Skill Matrix Settings (Competency Management) | Skeleton tables with a spinner |
| Skill Matrix Competency Update, Gap Planning, User Profile, All Teams | Same as the v4b crops, nothing new |
| Kaizen Reports | Skeleton chart |
| EWO Reports | Charts empty or near-empty (no bars or a single bar). Tabs already covered in v4 |
| Best Practice Report | Spinners and empty "no records" illustrations |
| QA Matrix Dashboard / Reports / Settings | Same as the v4 crops. Reports show "Report Not Found" |
| Suggestion Reports | v4b crop is better (the Pillar chart is still loading in v5) |
| Suggestion Points / Settings, Tag Settings, Tag Floor Plan, Tag Dashboard | Same as the v4b crops |
| Lean Creator Templates / Marketplace / Time & Motion Study, Workflow, KPI, Lean Studio, Document Management, LMS Dashboard / Instructor Panel, DSW Overview / Calendar / Kanban / My Templates | Already covered by v4b with the same content |
| Best Practice Settings, Kaizen Settings, EWO Settings, Cost Management Settings | Already covered by v4. The EWO and Cost Management settings also show real names |
| Icon-duplicate captures (pie_chart, donut_large, account_tree and similar) | Duplicates of the named screens. Checked the Cost Management ones: also still loading |

## Needs a human

- 12920854 lists "Start a template or activity" twice under "What you can do", linking to the same article with two different slugs. It was left as is because nothing may be deleted.
- 12920854's Good to know says DSW Reports shows "completed vs pending activities … submissions by user". Only the flag-item charts loaded in the capture, so this could not be confirmed.
- On the Course Catalog, **Start Course** appeared greyed out on a Private In-Class course. Confirm when it becomes active.
- Re-crawl once these load: Approval dashboards, Cost Management subpages, Skill Matrix Reports / Settings, Kaizen / Best Practice reports.
