# Screenshot shot list for the draft articles

Every draft needs screenshots of the screens it describes. This list names each shot, the screen to open, and what to highlight.

## Capture rules
- **Use a demo or sandbox facility, never a customer's.** Screens must not show real customer names, people, Kaizens, suggestions or KPIs. Before capturing, fill the demo facility with realistic sample data: users, departments, a few Kaizens, tags, suggestions and KPIs.
- **Settings:** desktop at 1440×900, browser zoom 100%. Use a phone frame (390×844) for mobile and app shots.
- **Highlighting:** mark the button or field being described with a single red box or arrow. Crop to the relevant area rather than the full screen, unless it's an overview shot.
- **File names:** `<article-id>-<nn>-<short-name>.png`, for example `17182736-01-forgot-password.png`.
- **Where to put them:** save them in `documentation-readiness/screenshots/`. Insert them into each Intercom draft through the article editor. The Intercom API tools here can't upload images.
- **Missing screens:** if a screen doesn't match the article text, fix the text. The article text came from call walkthroughs, and the screenshot pass is the verification step.

---

## Getting Started & Account
| Article | # | Screen | Show / highlight |
|---|---|---|---|
| 17182735 Log in | 01 | Login page (web) | Username/email field and the Forgot password link |
| | 02 | First-login "set new password" screen | New password fields |
| | 03 | App store listing or app login (phone frame) | The mobile app login |
| 17182736 Reset password | 01 | Forgot password form, before sending | Email field |
| | 02 | Reset form after the code is sent | **Verification code field at the top** (customers miss it) |
| | 03 | Your name menu → Personal settings → Password | Menu path and password form |
| | 04 | Admin → User Management → user → reset | Reset button |
| 17182738 Workspace access | 01 | Facility switcher open (top left) | List of facilities |
| | 02 | Request Transfer screen | Request button |
| 17183477 Find your way | 01 | Home dashboard | The 5 tabs: Assigned to me, Approvals, Upcoming, Overdue, Worked on |
| | 02 | Module grid menu open | Grid icon next to the logo |
| | 03 | Top-right area | Bell, gear and name menu |
| | 04 | A locked or grayed-out module tile | Locked state |
| 17183479 Language | 01 | Name menu → Language Preferences | Language dropdown |
| | 02 | Suggestion with the Translate option | Translate button |
| 17183480 Notifications | 01 | Bell panel open | A few notifications |
| | 02 | Notification preferences | Email/push toggles |
| 17183482 Mobile | 01 | App home (phone) | Assigned work |
| | 02 | QR scan → new tag with location pre-filled (phone) | Pre-filled location |
| | 03 | Checklist question with the camera (phone) | Photo capture |
| 17183483 Saved views | 01 | Dashboard filters applied → Saved views → Save view | Save view dialog |
| | 02 | Saved views list | **Pin icon** |
| | 03 | Column picker open | Column toggles |
| 17183486 Report a bug | none needed | | |
| 17183488 Security FAQ | none needed | | |
| 17183944 Frontline guide | 01–04 | Reuse: login, home dashboard, Start/Submit on a checklist (phone), raise a tag (phone) | |
| 17183946 Which module | 01 | Module grid menu | All module tiles |
| 17183947 Troubleshooting | none needed | | |

## Administration
| Article | # | Screen | Show / highlight |
|---|---|---|---|
| 17182740 Add user | 01 | Gear → Admin Settings → User Management | Menu path |
| | 02 | Add User form | Name, Email/Employee ID and **Is Workspace User** with the facility list |
| | 03 | User status set to Inactive | Status field |
| 17182742 Bulk upload | 01 | User Management → Excel menu | Download User Upload Template and Export Users |
| | 02 | The template in Excel with 2–3 sample rows | Required columns |
| | 03 | Assign fields (column mapping) step | Mapping dropdowns |
| | 04 | Review data step with one row flagged as an error | Error indicator |
| 17182743 Roles | 01 | Admin Settings → Roles list | The LeanSuite Administrator role |
| | 02 | Create role → permission toggles for one module | Toggles |
| | 03 | Adding users to a role | User picker |
| 17182745 Assets | 01 | Admin Settings → Asset Management | Department → Line → Workstation → Asset tree |
| | 02 | Add asset form | Asset number (required) |
| | 03 | QR code generation for a line | QR output |
| 17183194 SSO | 01 | *Entra ID screen, captured by IT or from Microsoft docs* | Attributes & Claims with the 4 claims |
| | 02 | *Entra* claim transformation for phone_number | Constant value |
| 17183489 Export | 01 | Any dashboard | Export button |
| 17183943 Admin checklist | none needed (links to other articles) | | |

## Lean Creator
| Article | # | Screen | Show / highlight |
|---|---|---|---|
| 12745936 What is Lean Creator | 01 | Lean Creator home after the 9/19–20 redesign | AI drafts section, template list, left menu (Marketplace, Time & Motion) |
| | 02 | Template row open | Build / Submissions / Reporting tabs |
| 17182747 Create with AI | 01 | Create with AI mode picker | Video SOP / OPL / Form / Combine Docs |
| | 02 | Chat panel with the attach icon | Attach icon |
| 17182750 Video SOP | 01 | Video SOP, attaching a video | Attach icon |
| | 02 | Generated SOP, Preview tab (phone layout) | Pencil icons |
| | 03 | SOP tab (document layout) | Purpose, scope, PPE, steps |
| | 04 | Change frame picker | Frame options |
| | 05 | A step with its QR code | QR code |
| | 06 | Printed/downloaded PDF, pages 1 and 2 | Procedure starts on page 2 |
| 17182751 Draft stages | 01 | AI drafts list at the top of Lean Creator | "Only you" drafts |
| | 02 | Save dialog | Name, labels (type → Add), template type, pillar, **visibility: Private / Workspace / Public** |
| | 03 | Published template with the AI edit button | AI edit |
| 17182753 Publish & assign | 01 | Acknowledgement/signature question in Build | Signature question |
| | 02 | Save & Publish → assign prompt | Assign dialog |
| | 03 | User side: Dashboard → Assigned to me → item → Start | Start |
| | 04 | User side: completed form | **Submit button at the top** |
| | 05 | DSW → Submitted → View report | Start/end time |
| 17183180 Rules & scoring | 01 | Question → Response properties | Mark as flagged, Enable scoring |
| | 02 | Add rule dialog | Condition and action list (follow-up, Require evidence, Start Tag, Suggestion or Kaizen) |
| | 03 | Scoring total and pass mark | Pass threshold |
| | 04 | Submitted report showing score and pass/fail | Score |
| 17183491 OPL | 01 | OPL mode with 2 images attached and a prompt | Images plus prompt |
| | 02 | Generated OPL | Acknowledgement questions |
| 17183492 Custom Kaizen section | 01 | New template with Template Type = Kaizen | Template type field |
| | 02 | Kaizen Settings → Add template listing it | Custom section |
| 12920999 Marketplace | 01 | Lean Creator → Marketplace | Template cards |
| | 02 | Preview of a template | Use this template |
| | 03 | My Templates showing the copy | The copied template |
| 12920914 My Templates | 01 | My Templates list | Labels and filters, ⋮ menu (Assign, Delete) |

## Daily Standard Work
| Article | # | Screen | Show / highlight |
|---|---|---|---|
| 17183176 Assign & schedule | 01 | Template ⋮ → Assign | Menu |
| | 02 | Assign step 1 | Title; User / Role / Asset choice |
| | 03 | Asset picker | Department → Line → Workstation → Asset |
| | 04 | Frequency step | Repeat options and end date |
| | 05 | DSW Calendar with a scheduled item and an overdue (red) item | Red item |
| 12920887 Start & submit | 01 | DSW views: Calendar, Kanban, Grid | View switcher |
| | 02 | Submitted tab → Grid → View Report | View Report, Download report |
| | 03 | Filter: My activities vs Facility activities | Filter |
| | 04 | DSW Reports page | Flagged items chart |

## Kaizen & EWO
| Article | # | Screen | Show / highlight |
|---|---|---|---|
| 17183182 Kaizen setup | 01 | Gear → Kaizen Settings | Menu item |
| | 02 | Add Project Type | Module: Kaizen / EWO |
| | 03 | Add Methodology with phases | Phases |
| | 04 | Add template on a phase | Section picker, Save and apply |
| | 05 | Project type edit | Total days, **Days by phase** toggle |
| | 06 | "No workflow created" error | Error message |
| | 07 | Presentation settings | Logo size, phase colours |
| 17183184 Workflow builder | 01 | Workflow → Add New | Module and project type |
| | 02 | Workflow editor with statuses | Status groups by colour |
| | 03 | Transition dialog | From / To |
| | 04 | Add rule on a transition | Who / When / What |
| | 05 | Preferences | Auto-selection conditions |
| | 06 | Module transition to Kaizen | Target module |
| 17183557 Create Kaizen | 01 | Create form | Required fields, **Show fields** |
| | 02 | Project page → More | Section list |
| | 03 | Result section | Hard vs soft savings |
| 17183559 Present & RCA | 01 | Project toolbar | Present, PDF, workflow icon, Attach |
| | 02 | Present mode slide | |
| | 03 | RCA Agent → Run RCA Analysis output | Push to Action Plan |
| | 04 | Link Docs dialog | |
| 17183561 Actions & Gantt | 01 | Action Plan → Manage actions → Add new | Action form |
| | 02 | Kaizen Dashboard → Gantt | Delayed bars |
| | 03 | Revised due date request | Reason field |
| | 04 | View team details (workload) | Overloaded member |
| 17183948 Kaizen Dashboard | 01 | Table view | Key columns |
| | 02 | Column picker | |
| | 03 | Export button | |
| 17183189 EWO | 01 | EWO create form with breakdown start/end | Downtime auto-calculated |
| | 02 | EWO full view sections | RCA drill-down, Failure Curve, MTTR |
| | 03 | EWO Settings → Breakdown types | |
| | 04 | EWO Reports | MTTR chart |
| 17183562 Glossary | none needed | | |

## F-Tag
| Article | # | Screen | Show / highlight |
|---|---|---|---|
| 17183950 F-Tag intro | 01 | Create tag form | Type, location, priority, photo |
| | 02 | Tag dashboard | Filters, Group by |
| 17183564 Tag settings | 01 | Tag types list | Colours |
| | 02 | Field rename/hide settings | |
| | 03 | Default assignee rules | |
| | 04 | Reassignment limit setting | |
| 12882033 Floor Plan | 01 | Floor Plan with clustered pins | |
| | 02 | Floor Plan settings upload | |
| 12882047 Kanban | 01 | Tag Kanban board | Status columns |
| 17183568 Tiers | 01 | Tag → Escalate with comment | Escalate button |
| | 02 | Filter by escalation status → saved view | |
| 17183569 QR & print | 01 | Printed QR sheet for a line | |
| | 02 | Print tag output | |

## Suggestions
| Article | # | Screen | Show / highlight |
|---|---|---|---|
| 17183570 Points | 01 | Assign-points prompt on approval | |
| | 02 | Leaderboard / Wall of Fame | |
| | 03 | Prize catalog | |
| | 04 | Campaign page | Bonus points |
| 17183572 Statuses | 01 | Suggestion detail | Status chip, Approve, add approver, Initiate Kaizen |
| 17183574 Lean AI | 01 | Create suggestion | Mic (speech-to-text) and AI rephrase |
| | 02 | AI-recommended status and priority | |

## KPI
| Article | # | Screen | Show / highlight |
|---|---|---|---|
| 17183335 KPI basics | 01 | KPI → Indicators list | |
| | 02 | KPI tree view | |
| | 03 | Pareto + Trend chart | |
| 17183337 Create KPI | 01–05 | Each wizard step: Details, Frequency, Share, Source, Publish | Step header |
| 17183339 Connect Excel | 01 | Source → Microsoft → file search | Search box |
| | 02 | Column mapping (date and actual) | |
| | 03 | Schedule settings | |
| | 04 | Upload file mapping | |
| 17183343 Enter values | 01 | Input value, single entry | Target override (optional) |
| | 02 | Date-range grid | Date pickers top right |
| | 03 | Lean Studio: click a date → Add KPI | |

## Lean Studio
| Article | # | Screen | Show / highlight |
|---|---|---|---|
| 13311666 What is Lean Studio | 01 | A good demo tier board | |
| 13311679 Dashboard types | 01 | Create dashboard: Grid vs Freeform choice | |
| 13311870 Create dashboard | 01 | Create dialog | Name, layout, sharing |
| 13311974 Grid dashboard | 01 | Finished SQDC grid board | |
| 13311987 Freeform | 01 | Edit Layout toolbar | Sticky note, shapes, arrows |
| | 02 | Template library | Categories |
| | 03 | Shift-select → Group → Save as template | |
| 13312050 Add widget | 01–03 | Add widget → chart type → module/report → filters | |
| 13312033 Widget types | 01 | Widget picker list | Custom heat map |
| 13312024 Huddle | 01 | Board comment panel with @mention | |
| | 02 | Create tag from a red tile | |
| | 03 | Meeting timer | |
| 13311893, 13312017, 13312040 | 01 each | Edit details, Edit layout, Edit widget | |
| 13312027 Export | none needed | | |

## AI Time & Motion Study
| Article | # | Screen | Show / highlight |
|---|---|---|---|
| 17183323 Overview | 01 | Study results overview | VA/SVA/NVA summary, Yamazumi |
| 17183326 Recording | 01 | *Photo:* operator with front/back number; good vs bad camera angle | Use a staged or internal photo; no customer site |
| 17183329 Create study | 01 | Add new study | Shot type, takt, process label |
| | 02 | Upload/compression progress | |
| | 03 | Operator selection | Untick, rename, merge |
| 17183331 Review & certify | 01 | Timeline with the colour legend | Grey = skipped |
| | 02 | Double-click edit dialog | |
| | 03 | Recertify / Certify buttons | |
| | 04 | Findings → Convert to Kaizen | |
| | 05 | Compare view | Fit each study / Shared clock, Save comparison |

## LMS / Skills / Documents / Best Practice / Cost
| Article | # | Screen | Show / highlight |
|---|---|---|---|
| 17183621 Quizzes, courses, plans | 01 | Instructor Panel → Create New | Quiz / Course / Learning Plan |
| | 02 | Course settings | Public/Private, attempts, refresher, completion window |
| | 03 | Enrollment requests | |
| 17183623 In-class | 01 | In-class setup | Seats, waitlist, auto-enrol |
| | 02 | Attendance code | |
| 17183625 Roles & share | 01 | Assign to role | |
| | 02 | Course Share | Facility picker, Private access |
| 17183626 Skills link | 01 | Course linked to a skill level | |
| | 02 | Manual training record | |
| 17183627 Skills model | 01 | Tool Management skill list | |
| 17183949 Create team | 01 | Team with required skills and levels | |
| 17183629 Radar | 01 | Radar chart | Required / original / current, "as of" date |
| | 02 | Gap planning view | |
| 17183952 Job Cover Matrix | 01 | Job cover matrix | Single-qualified job highlighted |
| 17183630 Documents | 01 | Documents with folders | |
| | 02 | Document details | Owner, review date, versions |
| 17183632 BP adoption | 01 | Adoption view | Reviewed / applicable / implemented / reason |
| 17183951 Cost | 01 | Savings targets page | |
| | 02 | Import History | |

**Total:** about 150 screenshots across 73 drafts. About 10 articles need none.
