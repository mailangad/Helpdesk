# Published Article Fixes

Read-only audit of all **244 published** LeanSuite Intercom Help Center articles (audited 2026-09-25). Nothing was changed in Intercom.

Priority: **P0** = broken/empty/wrong content, **P1** = outdated or missing new features, **P2** = typos/cosmetic.

## Summary

| Metric | Count |
|---|---|
| Published articles audited | 244 |
| P0 | 84 |
| P1 | 123 |
| P2 | 37 |
| Internal-article links (app.intercom.com) | 138 |
| Confluence links (edit/draftShareId/resumedraft) | 127 |
| Personal Google Drive video links | 111 |
| Atlassian-hosted (broken) images | 2 |
| Zero screenshots | 41 |
| Empty sections / placeholders / empty tables | 72 |
| Typos (title or body) | 128 |
| Outdated / missing new features | 60 |

### By collection

| Collection | Articles | P0 | P1 | P2 |
|---|---|---|---|---|
| Kaizen | 62 | 35 | 27 | 0 |
| F-Tag | 40 | 14 | 21 | 5 |
| Suggestion System | 31 | 5 | 17 | 9 |
| Best Practice | 26 | 10 | 16 | 0 |
| LMS | 24 | 8 | 14 | 2 |
| Cost Management | 17 | 4 | 9 | 4 |
| Skill Matrix | 14 | 2 | 9 | 3 |
| Daily Standard Work | 9 | 2 | 4 | 3 |
| Lean Creator | 8 | 1 | 3 | 4 |
| KPI | 7 | 3 | 1 | 3 |
| Release Notes | 6 | 0 | 2 | 4 |

### Systemic fixes (apply across collections)

- **Internal-article links**: replace every `app.intercom.com/.../internal-article/...` link with the public Help Center URL. Present in nearly all Kaizen, F-Tag, Suggestion, Best Practice, LMS, Cost Management and Skill Matrix articles (DSW, Lean Creator, KPI, Release Notes are clean).
- **Confluence links**: remove `edit-v2`/`draftShareId`/`resumedraft`/`createpage` links - customers cannot open them.
- **Google Drive "Watch Now" videos**: move to a public host (Intercom video, YouTube/Vimeo, Loom).
- **Broken emoji shortcodes**: `:Copy_Icon_Transparent:`, `:Workflow_Icon:`, `:Excel_Icon:`, `:Cost_Management_System:`, `:Skill_Matrix_System:`, `:red_star:` render as raw text - replace with inline icons.
- **Tutorial-chain phrasing**: all 17 Kaizen phase-section articles use "X down, Y to go" / "Let's move ahead..." - rewrite as standalone articles.
- **Branding**: standardise "Lean Suite" -> "LeanSuite" (e.g. 12123201, 12124027, 12920854, 12920014).
- **Screenshots**: retake pre-Mar-2026 screenshots (home page icon refresh).

## Top 20 highest-priority fixes

| # | Intercom ID | Collection | Fix |
|---|---|---|---|
| 1 | 12920014 | KPI | "What is KPI in Lean Suite?" body is only the text "KPI Builder" - write the overview (or unpublish in favour of new KPI drafts) |
| 2 | 12123205 | Kaizen | "What is a Kaizen" images hosted on api.media.atlassian.com - broken for customers; re-upload |
| 3 | 12125137 | LMS | "What is LMS" images hosted on api.media.atlassian.com - broken; re-upload |
| 4 | 12930648 | KPI | KPI builder table - every description cell empty |
| 5 | 12921679 | Lean Creator | Response types table empty and article ends abruptly |
| 6 | 12920991 | Daily Standard Work | All descriptions empty - archive, superseded by draft 17183176 |
| 7 | 12123562 | Kaizen | Dashboard headings table of empty bullets + outdated (Due Date -> Revised Due Date, no Gantt/saved views) - superseded by 17183948 |
| 8 | 12124661 | Skill Matrix | Empty collapsibles - superseded by 17183949 |
| 9 | 12123843 | Kaizen | Tool phase: Step 5 collapsibles (Tool List Card / Edit Tool Window) empty - core instructions missing |
| 10 | 12123152 | Suggestion System | Empty collapsibles and mislabelled "Kaizen" in a Suggestion article |
| 11 | 12123895 | Cost Management | Field Mapping section empty |
| 12 | 12123975 / 12123933 / 12123856 | Cost Management | Unfilled "This section____" placeholders published |
| 13 | 12125069 | F-Tag | Malformed href on User-Reassignments link |
| 14 | 12125060 | F-Tag | Malformed hrefs on Sketch and Photo links |
| 15 | 12125042 | F-Tag | Malformed "Next Up" Reports link |
| 16 | 12125014 | F-Tag | Empty collapsibles + "Deleting a Priority" copy-paste in Trade Type article |
| 17 | 12125099 | LMS | Missing course assignment to Roles (Sep 2025), share, in-class attendance |
| 18 | 12053058 | Release Notes | Leaks internal status "Pending | Under testing" to customers |
| 19 | 12565743 | Release Notes | Wrong version number 2025.1.5.1 (duplicated from Oct notes) |
| 20 | 12125143 / 12125133 / 12123674 | LMS / Kaizen | Copy-paste module errors ("Suggestion Dashboard", "a suggestion" in LMS; "best practice" in Kaizen) |

## Published articles fully superseded by new drafts

Overlap confirmed by reading each draft. Recommended action: when the draft is published, archive/unpublish the old article and redirect links.

| Published ID | Title | Superseded by draft | Overlap |
|---|---|---|---|
| 12920991 | How to assign a template to a user? | 17183176 | DSW assignment: new draft covers assign to User/Role/Asset + frequency; published table descriptions are all empty |
| 12123562 | What is a Kaizen Dashboard? | 17183948 | Kaizen Dashboard: new draft covers Table/Gantt/Kanban views, Revised Due Date, days delayed, labels, filters, saved views, export |
| 12124661 | How to create a new team? | 17183949 | Skill Matrix teams: new draft covers team creation + required skills; published collapsibles are empty |
| 12124990 | What if F-tag Module in LeanSuite? | 17183950 | F-Tag overview: new draft replaces "What if F-tag Module" (title typo, pre-Tag Type/Floor Plan/Kanban) |
| 12920022 | How to create a new KPI? | 17183337 | KPI creation: new draft covers 5-step creation; published Source row empty |
| 12920026 | How to input data manually into a KPI ? | 17183343 | KPI values: new draft covers single + bulk value entry |

## Per-collection fix lists

### Kaizen (62)

| Intercom ID | Title | Priority | Imgs | Fixes needed |
|---|---|---|---|---|
| 12123205 | What is a Kaizen in LeanSuite? | P0 | 2 | - Both screenshots hosted on api.media.atlassian.com with expired tokens (BROKEN images)<br>- 2 internal-article links incl. 'Phase 1 : Introduction to Module Go to:' scaffolding at top<br>- 'Lean Suite' -> 'LeanSuite' x4<br>- Missing what's new: Gantt view, delay/slippage, labels, saved/pinned views, Revised Due Date |
| 12123208 | How to add a new Kaizen type? | P0 | 4 | - Confluence resumedraft draftShareId links x2 (login help + next)<br>- 'Step 1' not formatted as heading<br>- 'Lean Suite' -> 'LeanSuite'<br>- Retake screenshots (home page icons refreshed Mar-2026) |
| 12123471 | How to edit methodology settings in Kaizen type? | P0 | 5 | - Both collapsibles ('Enable Days to Due by phase Option', 'Is Default Option') are EMPTY<br>- Confluence edit-v2 draftShareId link<br>- No video<br>- 'The two setting are' typo; 'icon</b>and' spacing<br>- Retake screenshots |
| 12123479 | How to add a loss category in Kaizen Module? | P0 | 4 | - Step 1 collapsible 'Follow the steps to reach the Add Loss Type Window' is EMPTY<br>- Confluence edit-v2 draftShareId link<br>- Google Drive video<br>- Mixed H1/H2 step headings<br>- 'This conclude' typo<br>- Retake screenshots |
| 12123562 | What is a Kaizen Dashboard? | P0 | 3 | - 'Headings in kaizen Dashboard' collapsible contains a 5x4 table of EMPTY bullets - fill with the actual column list<br>- Confluence edit-v2 draftShareId link<br>- Google Drive video<br>- OUTDATED: 'Due Date' column is now 'Revised Due Date'; says 20 headings<br>- Missing: Gantt view, delay/slippage, labels, saved/pinned views<br>- Copy-paste: 'Views the status of best practice via color coding tags'<br>- 'Lean Suite' -> 'LeanSuite'<br>- Retake all screenshots<br>- Superseded by draft 17183948 - candidate to unpublish |
| 12123637 | How to add a comment to a Kaizen? | P0 | 4 | - Confluence edit-v2 draftShareId link (convert-to-Best-Practice)<br>- 2 internal-article links<br>- Google Drive video<br>- Uses H1 for step headings (inconsistent)<br>- Long off-topic Best Practice + tutorial-chain closing text<br>- 'let's a company', 'than can' typos<br>- Retake screenshots |
| 12123638 | How to add a file to a Kaizen? | P0 | 0 | - Both collapsibles (Side Window / Detail View) are EMPTY - article has no instructions<br>- 0 screenshots<br>- 'the above information' orphan intro<br>- Confluence edit-v2 draftShareId link<br>- Google Drive video |
| 12123641 | How to add a photo and a photo with a sketch to a Kaizen? | P0 | 0 | - Both collapsibles (Side Window / Detail View) are EMPTY - article has no instructions<br>- 0 screenshots<br>- 'the above information' orphan intro<br>- Confluence edit-v2 draftShareId link<br>- Google Drive video |
| 12123647 | How to add a sketch to a Kaizen? | P0 | 0 | - Both collapsibles (Side Window / Detail View) are EMPTY - article has no instructions<br>- 0 screenshots<br>- 'the above information' orphan intro<br>- Confluence edit-v2 draftShareId link<br>- Google Drive video |
| 12123648 | How to add a web url to a Kaizen? | P0 | 0 | - Both collapsibles (Side Window / Detail View) are EMPTY - article has no instructions<br>- 0 screenshots<br>- Intro 'the above information/data' refers to nothing (copied from parent article)<br>- Confluence edit-v2 draftShareId link<br>- Google Drive video |
| 12123658 | How to attach information & data to a Kaizen? | P0 | 0 | - Link table of 4 how-to articles is all Confluence edit-v2 draftShareId URLs (unopenable) - replace with Intercom article links 12123638/12123647/12123641/12123648<br>- Closing CTA is Confluence link<br>- 1 internal-article link<br>- Google Drive video<br>- Stray 'Context Quotes' label<br>- 'chose' typo<br>- No screenshots |
| 12123661 | How to edit information in your Kaizen? | P0 | 0 | - Both how-to collapsibles ('Editing Properties Information', 'Editing Attached Information') are EMPTY - no steps<br>- 0 screenshots<br>- 2 internal-article links<br>- Confluence edit-v2 draftShareId link<br>- Google Drive video<br>- 'Go to the end to learn more' but nothing there<br>- Outdated: 'Due Date' -> 'Revised Due Date' terminology; mention labels now editable |
| 12123664 | How to export data from a Kaizen? | P0 | 2 | - 1 internal-article link<br>- Confluence edit-v2 draftShareId link<br>- Closing text 'advance a workflow' should be 'advance a Kaizen'<br>- Retake screenshots (PDF icon location) |
| 12123666 | How to open a Kaizen after creation? | P0 | 3 | - 2 internal-article links (Need Help, 'Choose from below')<br>- Confluence edit-v2 draftShareId link<br>- Google Drive video<br>- Broken emoji shortcode ':Copy_Icon_Transparent:' renders as text<br>- 'Choose from below' points to only one internal link - add links to Side Window (12123707) and Detail View (12123704)<br>- Retake screenshots (Kaizen dashboard now has Gantt/saved views) |
| 12123674 | How to see the workflow attached to a Kaizen? | P0 | 3 | - 2 internal-article links<br>- Google Drive video<br>- Broken emoji shortcode ':Workflow_Icon:'<br>- Copy-paste error: 'export all the information from a best practice' (should be Kaizen)<br>- Typos 'can create see', 'in both view'<br>- Retake screenshots |
| 12123695 | What is the process after creating a Kaizen? | P0 | 0 | - 2 internal-article links<br>- Confluence edit-v2 draftShareId link<br>- Empty placeholder: 'You will find all the documentation ... in this space.' followed by nothing (Confluence page-tree macro lost) - replace with list of links<br>- 'Lean Suite' -> 'LeanSuite'<br>- No screenshots |
| 12123696 | What are phases and sections in a Kaizen? | P0 | 2 | - 5 internal-article links (Need Help x3, Smart Connections, next)<br>- Google Drive video<br>- Typo 'section choose' (chosen)<br>- Retake screenshots |
| 12123699 | What is drag & drop box in Kaizen and how to use it? | P0 | 6 | - Confluence edit-v2 draftShareId link<br>- Google Drive video<br>- Typos 'Drag & Drop Boc', 'from you system', 'let's you'<br>- Says '3 out of the 4 types' but lists 4 bullets - clarify<br>- Retake screenshots |
| 12123702 | What is the activity field in a Kaizen and the options available in it? | P0 | 3 | - 1 internal-article link<br>- Confluence edit-v2 draftShareId link<br>- Google Drive video<br>- 'Records or hold' grammar<br>- Retake screenshots |
| 12123704 | What is the Kaizen detail view and its features? | P0 | 3 | - 4 internal-article links (Need Help x2, Refresher, next)<br>- Google Drive video<br>- Empty cell in options table<br>- Typos 'chose', 'open it up'<br>- Missing new detail-view items (labels, Revised Due Date, delay/slippage indicator)<br>- Retake screenshots |
| 12123707 | What is the side window of a Kaizen & its features? | P0 | 6 | - 2 internal-article links<br>- Google Drive video<br>- Typos: 'let'' a user', 'let's you', 'The number phases'<br>- No captions for 6 side-window screenshots<br>- Retake screenshots (side window changed with Revised Due Date/labels) |
| 12123715 | What are the various Kaizen phase sections & how to use them? | P0 | 0 | - 1 internal-article link under 'Smart Connections'<br>- Confluence edit-v2 draftShareId link on 'Root Cause Analysis' CTA<br>- Sections table uses H2 headings in cells and has 3 empty cells; replace with linked list of the 17 section articles<br>- Lists 'Adoption' section but no Adoption article exists - add or remove<br>- Empty paragraphs/double hr scaffolding<br>- No screenshots (add one of 'Add section' list) |
| 12123746 | What is the "4M1D" phase section and how to use it? | P0 | 0 | - 0 screenshots in a long how-to (Steps 1-5 have none)<br>- Confluence edit-v2 draftShareId link<br>- 2 internal-article links (incl. inline 'team members')<br>- Google Drive video<br>- Copy-paste error: 'Material' description duplicates 'Machine' text<br>- 'Not Okay' instruction says 'Click on the thumbs up icon' (should be thumbs down)<br>- Empty table cells<br>- 'Let's move ahead with the next section i.e.' sentence cut off<br>- Typos 'Let's go ahead and a 4M1D', 'Calender', 'be created'<br>- Tutorial chain '5 down, 12 more to go' |
| 12123755 | What is the "5W1H" phase section and how to use it? | P0 | 8 | - Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Google Drive video<br>- Huge example table: 4 columns with columns 3-4 empty in most rows; 'Why' Question row duplicates the example text (copy-paste error)<br>- 'Lean Suite' -> 'LeanSuite'<br>- Tutorial chain '6 down, 11 more to go' (duplicates 5WHY count)<br>- Retake screenshots |
| 12123761 | What is the "Action Plan" phase section and how to use it? | P0 | 0 | - ALL three how-to collapsibles (Phase 1/2/3) are EMPTY (only empty headings) - article has no actual instructions<br>- 0 screenshots<br>- Confluence edit-v2 draftShareId link<br>- Google Drive video<br>- Workflow table has empty cells and misaligned columns<br>- Typo 'Calender'<br>- Tutorial chain '11 Sections down, 6 more to go' |
| 12123772 | What is the "Additional Details" phase section and how to use it? | P0 | 2 | - Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Google Drive video<br>- Fields table has empty 'Type of Field' cells for Drag & Drop Box rows and empty header cell<br>- Step 1 note says previous section is 'Adoption Section' (no such section - likely Expansion) copy-paste error<br>- Tutorial chain '14 down, 3 more to go' / 'Halfway through our last phase'<br>- Retake screenshots |
| 12123776 | What is the "Description of Repairs" phase section and how to use it? | P0 | 6 | - Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Google Drive video<br>- Tutorial chain '16 down, 1 more to go'<br>- Typos 'there two informations', 'Lean Suite'<br>- Retake screenshots |
| 12123778 | What is the "Description" phase section and how to use it? | P0 | 2 | - Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Google Drive video<br>- Tutorial chain 'Four down, 13 more to go'<br>- Typos 'Let's go ahead and a Description', 'added 4 section', 'move on the another set'<br>- Retake screenshots |
| 12123787 | What is the "Failure Curve Analysis" phase section and how to use it? | P0 | 3 | - 2 internal-article links (Need Help + closing link)<br>- Google Drive video<br>- Tutorial chain 'concluded the all the 17 sections', 'You deserve a break'<br>- Empty header cell in curve table<br>- Retake screenshots |
| 12123788 | What is the "MTTR" phase section and how to use it? | P0 | 4 | - Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Google Drive video<br>- Empty first paragraph/empty header cell in table<br>- 'Lean Suite' -> 'LeanSuite' in table header<br>- Tutorial chain '15 down, 2 more to go'<br>- Typo 'calender'<br>- Retake screenshots |
| 12123835 | What is the "Result" phase section and how to use it? | P0 | 8 | - Confluence edit-v2 draftShareId link<br>- 2 internal-article links<br>- Google Drive video<br>- Step 3 collapsibles Benefit / Cost / Capital Expense are EMPTY - core how-to missing<br>- Empty header cells in flowchart table<br>- Typos 'threedata', 'tems'<br>- Tutorial chain '7 down, 10 more to go'<br>- Retake screenshots |
| 12123836 | What is the "Root Cause Analysis" phase section and how to use it? | P0 | 4 | - 2 internal-article links<br>- Google Drive video<br>- Huge cascading table with mostly empty cells and duplicated block (whole Root cause list repeated twice), header row with 4 empty cells<br>- Typos 'Sub-Rootcasue', 'Calender', 'Rootcause'<br>- Tutorial chain 'One down, 16 more to go'<br>- Retake screenshots |
| 12123837 | What is the "Target" phase section and how to use it? | P0 | 3 | - Confluence edit-v2 draftShareId link at end<br>- 1 internal-article link (Need Help)<br>- Google Drive video<br>- Step 3 fields table has many empty cells/empty columns 3-4<br>- Intro flowchart table has empty header cell<br>- '* Marked Fields' collapsible EMPTY<br>- Tutorial chain '7 down, 10 more to go' / 'completed the Do Phase' copy-pasted from Result article<br>- Typos: 'there two informations', 'Calender Field'<br>- Retake screenshots |
| 12123839 | What is the "Team" phase section and how to use it? | P0 | 10 | - 4 internal-article links (Need Help, Savings Distribution x2, next)<br>- Google Drive video<br>- Duplicate numbered lists restart at 1 (Member Type/Delete Member all numbered 1.)<br>- Tutorial-chain 'Three down, 14 more to go' + 'move ahead with the Team phase section' (self-reference)<br>- Typos: 'Let's go ahead and a team', 'updations'<br>- Retake screenshots |
| 12123843 | What is the "Tool" phase section and how to use it? | P0 | 5 | - 3 internal-article links (app.intercom.com) incl. 'Need Help?' and next-article link<br>- Google Drive video link (personal Drive)<br>- Step 5 collapsibles 'Through the Tool List Card' and 'Through Edit Tool Window' are EMPTY - core instructions missing<br>- Tutorial-chain phrasing 'Two down, 15 more to go' and 'Let's move ahead with the Tool phase section' (wrong - this IS Tool)<br>- 'Useful Facts'/'Tips & Tricks' plain paragraphs not callouts<br>- Screenshots pre-Mar-2026 - retake |
| 12123462 | How to add a new Kaizen methodology? | P1 | 6 | - Confluence resumedraft draftShareId link<br>- Google Drive video<br>- Typo 'let's you'<br>- Retake screenshots |
| 12123465 | How to add and edit fields while creating a Kaizen? | P1 | 4 | - Confluence resumedraft draftShareId link<br>- 1 internal-article link<br>- Google Drive video<br>- Typos 'submit you Kaizen', 'are house in', 'Fields Updates Successfully'<br>- Retake screenshots |
| 12123466 | How to create a new Kaizen? | P1 | 5 | - 1 internal-article link (login help) + 1 closing internal-article link<br>- Google Drive video<br>- 'Scroll to the bottom to learn more about fields' but nothing at bottom except link<br>- 'Lean Suite' -> 'LeanSuite'<br>- Missing new create fields (labels, Revised Due Date not set at creation) and home icon refresh<br>- Retake screenshots (Create New menu/home refreshed) |
| 12123483 | How to add a loss type in kaizen Module? | P1 | 8 | - Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Google Drive video<br>- Orphan 'Field Name / Field Dropdown Options' header text<br>- 'Casual' should be 'Causal' (loss type category) x2<br>- Typos 'to chose', 'let's a user', 'pop up confirm'<br>- Lowercase 'kaizen' in title<br>- Retake screenshots |
| 12123487 | How to add/track tools or skills in Kaizen Module? | P1 | 7 | - Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Google Drive video<br>- Orphan 'Field Name / Field Dropdown Options' header text (table lost)<br>- Title mentions skills but body only tools<br>- Typos 'to chose', 'let's a user', 'know what more'<br>- Retake screenshots |
| 12123490 | How to add default tools or skills to a loss type in Kaizen setting? | P1 | 3 | - Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Google Drive video<br>- Title 'tools or skills' but body only tools<br>- Typos 'Loss in under which', 'to chose from'<br>- Retake screenshots |
| 12123496 | How to add a revised due date reason in Kaizen setting? | P1 | 4 | - 2 internal-article links<br>- Google Drive video<br>- Mention Revised Due Date now shown on dashboard/Gantt<br>- Retake screenshots |
| 12123503 | How to distribute savings by default in a Kaizen? | P1 | 4 | - Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Google Drive video<br>- 'let's a user to assign' typo<br>- Retake screenshots |
| 12123509 | How to edit a tool or a skill connected to a loss type in Kaizen setting? | P1 | 5 | - Confluence edit-v2 draftShareId link<br>- Google Drive video<br>- Title says 'tool or a skill' but body only tools<br>- Typos 'more that that', 'will be update', 'let's a user', 'Congratulation!'<br>- Leading empty hr / double hr scaffolding<br>- Retake screenshots |
| 12123512 | How to edit a tool or a skill in Kaizen? | P1 | 3 | - Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Google Drive video<br>- Title says 'tool or a skill' but body only covers tools<br>- Step 5 says 'click on submit' but button is 'Update'<br>- Typos 'Now that we how', 'pop up confirm'<br>- Retake screenshots |
| 12123528 | How to edit an existing revised due date reason in Kaizen setting? | P1 | 3 | - 1 internal-article link (x2 incl. closing)<br>- Google Drive video<br>- H1 used for step headings<br>- Duplicate 'Congratulations' paragraphs (tutorial chain)<br>- Retake screenshots |
| 12123534 | What is savings distribution in Kaizen module? | P1 | 1 | - Confluence edit-v2 draftShareId link<br>- 2 internal-article links<br>- Google Drive video<br>- 'One of the four features' - there are 5 features listed in navigation<br>- Typos 'let's a user', 'Lead. Coach'<br>- Retake screenshot |
| 12123538 | What is tool management in Kaizen? | P1 | 1 | - Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Google Drive video<br>- 'all the other' typo<br>- Retake screenshot |
| 12123544 | How to export a .csv file for the Kaizen dashboard? | P1 | 2 | - 2 Confluence edit-v2 draftShareId links<br>- Broken emoji shortcode ':Excel_Icon:'<br>- Google Drive video<br>- Mention exported columns now include Revised Due Date/labels<br>- Retake screenshots |
| 12123548 | How to export a .csv file for tool or skill usage count on the Kaizen project? | P1 | 4 | - 2 Confluence edit-v2 draftShareId links<br>- Broken emoji shortcode ':Excel_Icon:'<br>- Step 5 says button is on Kaizen dashboard but steps are inside a Kaizen - clarify location<br>- Lowercase 'click' at start of Step 3<br>- Retake screenshots |
| 12123549 | How to search a Kaizen dashboard? | P1 | 4 | - 2 Confluence edit-v2 draftShareId links<br>- Google Drive video (same video as Kaizen Dashboard article)<br>- Missing: saved/pinned views, label filter, Revised Due Date filter<br>- Typo 'These are many filters'<br>- Retake screenshots |
| 12123550 | Navigating inside the parent menu in Kaizen module. | P1 | 2 | - 7 Confluence edit-v2 draftShareId links (State 1 link table + features + next)<br>- 2 internal-article links<br>- Google Drive video<br>- Link table should point to Intercom articles 12123562/12123555/12123563/12123557<br>- Retake screenshots |
| 12123555 | What are Kaizen settings? | P1 | 2 | - 3 Confluence edit-v2 draftShareId links (Need Help + 2 'Choose from below')<br>- 3 internal-article links (bare URLs, no titles)<br>- Google Drive video<br>- 'Go to the bottom of the manual' - manual-style phrasing<br>- 'This functions activates' typo<br>- Retake screenshots |
| 12123557 | What are reports in Kaizen module? | P1 | 3 | - Confluence edit-v2 draftShareId link<br>- Google Drive video<br>- Typo 'Their are'<br>- Verify report widget list against current Reports page<br>- Empty paragraphs<br>- Retake screenshots |
| 12123558 | What are the navigation options in Kaizen system and how to use them? | P1 | 6 | - 2 Confluence edit-v2 draftShareId links<br>- Parent menu lists may be outdated (no Gantt/saved views, refreshed home icons)<br>- Typos 'tat can be attached', 'Lean Suite'<br>- Empty paragraphs between images<br>- Retake screenshots (home icons refreshed Mar-2026) |
| 12123563 | What is approval dashboard in Kaizen module? | P1 | 3 | - 3 Confluence edit-v2 draftShareId links (Revised Due Date Reasons, Reports next, look-back)<br>- 1 internal-article link<br>- Google Drive video<br>- Outdated: Due Date vs Revised Due Date - dashboard now shows 'Revised Due Date'; explain delay/slippage<br>- Typos 'their might be', 'lean suite', 'admin rights if a user'<br>- Retake screenshots |
| 12123569 | How to add or remove sections from phases in Kaizen module? | P1 | 6 | - 3 internal-article links<br>- Google Drive video<br>- 'Go below to learn how to add a new section!' but no link follows<br>- Typos 'ad add', 'pop up</b>will'<br>- Mixed H1/H2 step headings<br>- Retake screenshots |
| 12123651 | How to advance a kaizen into the next stage/phase or change status? | P1 | 2 | - 3 internal-article links (Need Help, workflow module, next)<br>- Google Drive video<br>- Missing: status changes now feed delay/slippage and Gantt; mention Revised Due Date<br>- Retake screenshots |
| 12123659 | How to edit due date of a Kaizen? | P1 | 5 | - Confluence edit-v2 draftShareId links x2 (Revised Due Date Reasons, next)<br>- 3 internal-article links<br>- Google Drive video<br>- Outdated: explain Due Date vs Revised Due Date shown on dashboard, delay/slippage indicator and Gantt impact<br>- Typos 'since its', 'require information', 'a due dates', 'let's you'<br>- Retake screenshots |
| 12123749 | What is the "5WHY" phase section and how to use it? | P1 | 3 | - 2 internal-article links<br>- Google Drive video<br>- Step 4 table has 6 columns with 3 empty in header rows and empty 'Corresponding Fields' row<br>- 'Lean Suite' -> 'LeanSuite'<br>- Tutorial chain '6 down, 11 more to go' (count duplicated with 5W1H)<br>- Retake screenshots |
| 12123754 | What is the "5G" phase section and how to use it? | P1 | 7 | - Confluence edit-v2 draftShareId link (same as 5W1H - wrong next link)<br>- 1 internal-article link<br>- Google Drive video<br>- Empty header cells in 5G table<br>- Tutorial chain '9 down, 8 more to go'<br>- Typo 'each for each'<br>- Retake screenshots |
| 12123781 | What is the "Expansion" phase section and how to use it? | P1 | 8 | - Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Google Drive video<br>- Typos 'facilities resources' (facility's), 'will be replaces', 'hierarchal'<br>- Empty header cell in fields table<br>- Tutorial chain '12 sections completed, 5 more to go'<br>- Retake screenshots |

### F-Tag (40)

| Intercom ID | Title | Priority | Imgs | Fixes needed |
|---|---|---|---|---|
| 12124990 | What if F-tag Module in LeanSuite? | P0 | 2 | - TITLE TYPO 'What if F-tag Module' -> 'What is the F-Tag Module in LeanSuite?'<br>- 'Lean Suite' -> 'LeanSuite'<br>- Missing Tag Types, Floor Plan, Kanban, tier escalation overview<br>- Superseded by draft 17183950 - candidate to unpublish |
| 12124998 | How to configure the F-Tag Module for your workspace? | P0 | 0 | - List of 6 settings is plain text with NO links (scaffolding)<br>- Missing new configuration: Tag Types, Floor Plan, Kanban, tier escalation<br>- 0 screenshots<br>- Typos 'preferences needs', 'settings houses' |
| 12125001 | How to create a new issue and sub-issue in F-Tag? | P0 | 4 | - Step 4 collapsibles 'Creating a new Issue' / 'Creating a new Sub-Issue' EMPTY - core steps missing<br>- Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Google Drive video<br>- Typos 'There are to options', 'When the Issues View (picture on left) allows'<br>- Retake screenshots |
| 12125009 | How to edit/delete a priority in F-Tag? | P0 | 2 | - Both collapsibles EMPTY ('Editing a Priority', 'Deleting a Priority') - no instructions<br>- Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Google Drive video<br>- Retake screenshots |
| 12125014 | How to edit/delete a trade type in F-Tag? | P0 | 2 | - Both collapsibles EMPTY ('Editing a Trade Type', 'Deleting a Priority')<br>- Copy-paste error: collapsible says 'Deleting a Priority' in Trade Type article<br>- 10 internal-article links in closing 'learn more modules' block + 1 Need Help<br>- Google Drive video<br>- 'Lean Suite' -> 'LeanSuite'<br>- Retake screenshots (Tag Settings now has Tag Types) |
| 12125042 | How to export data from the F-Tag dashboard? | P0 | 2 | - MALFORMED 'Next Up' link 'https://What%20are%20F-Tag%20Reports...' (broken) - point to 12125045<br>- 1 internal-article link<br>- Google Drive video<br>- 'search results in a from the' typo<br>- Mixed H1/H2 steps<br>- 1 older screenshot (Dec-2025) - retake |
| 12125053 | How to add a comment to an F-Tag? | P0 | 4 | - EMPTY 'Need Help?' callout<br>- Google Drive video<br>- 'a F-Tag' -> 'an F-Tag' x4<br>- Tutorial-chain closing text with no link<br>- Leading empty hr |
| 12125055 | How to attach a file to a F-Tag? | P0 | 0 | - Both collapsibles EMPTY (Side Window / Detail View) - no instructions<br>- 0 screenshots<br>- Orphan intro 'the above information/data'<br>- Confluence edit-v2 draftShareId link<br>- Google Drive video<br>- 'a F-Tag' in title |
| 12125057 | How to attach a photo and a photo with a sketch to a F-Tag? | P0 | 0 | - Both collapsibles EMPTY (Side Window / Detail View) - no instructions<br>- 0 screenshots<br>- Orphan intro 'the above information/data'<br>- Confluence edit-v2 draftShareId link<br>- Google Drive video<br>- 'a F-Tag' -> 'an F-Tag' |
| 12125058 | How to attach a sketch to a F-Tag? | P0 | 0 | - Both collapsibles EMPTY (Side Window / Detail View) - no instructions<br>- 0 screenshots<br>- Orphan intro 'the above information/data'<br>- Confluence edit-v2 draftShareId link<br>- Google Drive video<br>- 'a F-Tag' in title |
| 12125060 | How to attach information & data to a F-Tag? | P0 | 0 | - 2 of 3 table links are MALFORMED ('https://How%20to%20attach%20a%20Sketch...', 'https://How%20to%20attach%20a%20photo...') - replace with 12125058 and 12125057<br>- 0 screenshots<br>- 'a F-Tag' -> 'an F-Tag'<br>- 'more prospective way' -> 'perspective'<br>- 'chose' typo |
| 12125066 | How to edit information in a F-Tag? | P0 | 0 | - Both collapsibles EMPTY ('Editing Properties Information', 'Editing Attached Information') - no steps<br>- 0 screenshots<br>- 3 internal-article links<br>- 'a F-Tag' -> 'an F-Tag'<br>- 'There are two scope' typo<br>- Mention Tag Type editable |
| 12125069 | How to operate an F-Tag? | P0 | 8 | - MALFORMED link 'https://What%20are%20User-Reassignments...' (broken href) - point to 12125040<br>- Confluence edit-v2 draftShareId link in Smart Connections<br>- 1 internal-article link<br>- Step numbering broken (Stage 1, Stage 2, Step 3, Step 4, Step 4)<br>- Duplicate heading id / empty h3<br>- Typos 'en employer', 'employer' (employee), 'F-Tag's becomes'<br>- Missing tier escalation & Kanban status columns (new)<br>- Verify statuses list vs current (4 stages) |
| 12125080 | What is the side window of the F-Tag and its features? | P0 | 0 | - 'Below are the different states of the F-Tag Side Window:' followed by NOTHING - screenshots missing (0 images)<br>- Typos 'This fiels', 'this fields provides', 'a F-Tag'<br>- Missing Tag Type / tier escalation fields |
| 12124995 | How to create a new F-Tag? | P1 | 4 | - 1 internal-article link (login)<br>- Google Drive video<br>- 1 older screenshot (Step 3 Dec-2025 binary)<br>- Missing: selecting Tag Type, placing tag on Floor Plan (new)<br>- 'Lean Suite' -> 'LeanSuite'<br>- 'Enter the required information as required' |
| 12124999 | How to create a new default due date? | P1 | 4 | - 2 Confluence edit-v2 draftShareId links<br>- 1 internal-article link<br>- Google Drive video<br>- Typos 'There are to options', 'another types of priorities', 'When the Issues View (picture on left) allows'<br>- Mention default due date can now be set per Tag Type<br>- Retake screenshots |
| 12125003 | How to create a new Priority type in F-Tag? | P1 | 4 | - Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Google Drive video<br>- Typo 'as peer requirement'<br>- Mention priorities now drive tier escalation<br>- Retake screenshots |
| 12125005 | How to create a new trade type in F-Tag Module? | P1 | 4 | - Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Google Drive video<br>- Typos 'as peer requirement', 'Trade Type type'<br>- Retake screenshots |
| 12125006 | How to edit a Default Assignee? | P1 | 2 | - Confluence edit-v2 draftShareId link<br>- 1 internal-article link (login)<br>- Google Drive video<br>- Copy-paste error: closing says 'learned how to add a new Default Assignee' in an edit article<br>- Typo 'yo wish to edit Navigate'<br>- 'Lean Suite Account'<br>- Retake screenshots (home refreshed) |
| 12125007 | How to edit a default Due Date in F-Tag? | P1 | 3 | - Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Google Drive video<br>- Typos 'will be update', 'move on the to the'<br>- Retake screenshots |
| 12125018 | How to edit/delete an issue/sub-issue in F-Tag Module? | P1 | 6 | - Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Google Drive video<br>- Useful Facts says '4 settings' but Settings tab now also has Tag Labels/Tag Types<br>- 'edit.Enter' missing space; 'move on the next'<br>- Retake screenshots |
| 12125024 | How to set up/create a new default assignee in F-Tag Module? | P1 | 4 | - 2 internal-article links<br>- Google Drive video<br>- 'Lean Suite Account' -> 'LeanSuite'<br>- Mention default assignee by Tag Type / tier escalation assignee (new)<br>- Retake screenshots |
| 12125028 | What are issues inside F-Tag Module? | P1 | 0 | - 0 screenshots<br>- Confluence edit-v2 draftShareId link<br>- 2 internal-article links<br>- Typos 'pre-confugured', 'my require', 'equipment's'<br>- Mention issues now scoped by Tag Type |
| 12125032 | What is default assignee in F-Tag Module? | P1 | 1 | - 2 internal-article links<br>- Missing: tier escalation (auto-reassign to next tier) and Tag Type-based assignment<br>- Retake screenshot |
| 12125034 | What is priority in F-Tag Settings? | P1 | 3 | - Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Typos 'created with inside', 'a Default Due Dates'<br>- Missing: priority -> tier escalation link (new)<br>- Retake screenshots |
| 12125037 | What is the default due date in F-Tag Module? | P1 | 0 | - 0 screenshots<br>- Confluence edit-v2 draftShareId link<br>- Typos 'det a default due date', 'withing', 'as soon as possible ensure further loss'<br>- Mention due dates can now vary by Tag Type / priority and tier escalation |
| 12125038 | What is trade type in F-Tag Module? | P1 | 3 | - Confluence edit-v2 draftShareId link<br>- Copy-paste error: 'The Window lists all priorities...' and 'control how many priorities are visible' in Trade Type article<br>- Typo 'caried out be an engineer'<br>- Retake screenshots |
| 12125040 | What is user Re-Assignments and how to edit them? | P1 | 2 | - 1 internal-article link in 'Need Help?' callout<br>- Duplicate 'Useful Facts!' callouts with instructions buried inside callouts<br>- Confusing text 'F-Tag (a type of User Re-Assignment)'<br>- 'Lean Suite' -> 'LeanSuite'<br>- Closing 'next step' has no link<br>- Screenshots Nov-2025 - verify vs current Tag Settings (now includes Tag Types, tier escalation) |
| 12125045 | What are F-Tag Reports and how to navigate them? | P1 | 2 | - 'The process to of searching' typo<br>- Tag Distribution now tied to Floor Plan feature - link it<br>- Closing has no link to Tag Settings (12125047)<br>- Verify report sections vs current |
| 12125047 | What are the Tag Settings and how to use them? | P1 | 1 | - 3 internal-article links<br>- 'configurer' typo -> 'configure'<br>- 'Navigate to the end of the manual' manual phrasing<br>- OUTDATED: Tag Settings now include Tag Types, Floor Plan, tier escalation; screenshot is old (binary Dec-2025) - retake |
| 12125051 | What is the F-Tag dashboard? | P1 | 5 | - 'Lean Suite' -> 'LeanSuite'<br>- 'A F-Tag Dashboard' -> 'The F-Tag Dashboard'<br>- Says '20 headings' - verify; Kanban shown but Floor Plan & Tag Types not mentioned<br>- Empty paragraph padding in table cells<br>- No link to next article |
| 12125062 | How to clone a F-Tag? | P1 | 4 | - Google Drive video<br>- 'Log into your Lean Suite Account' - 'LeanSuite'<br>- 'fasten the process' -> 'speed up'<br>- Closing has no link to Activity article<br>- Mention clone now carries Tag Type (new Tag Types) |
| 12125068 | How to open a F-Tag after creation? | P1 | 4 | - 1 internal-article link in callout<br>- Google Drive video<br>- 'Choose from below!' followed by nothing - add links to 12125080 and 12125078<br>- 'a F-Tag' -> 'an F-Tag'<br>- Mention opening from Kanban board / Floor Plan (new views) |
| 12125078 | What is the F-Tag detail view and it's features? | P1 | 3 | - 'a elaborated', 'a F-Tag' typos; title 'it's features' -> 'its features'<br>- 2 of 3 screenshots are older (Dec-2025 binary) - retake<br>- Missing new detail view items: Tag Type, escalation tier, floor plan location |
| 12125081 | What is the status inside F-Tag and how is it connected to its operating? | P1 | 0 | - 0 screenshots (add status badge images)<br>- 2 internal-article links (same link used twice)<br>- Status names plain paragraphs (not headings)<br>- Typos 'is denotes', 'by which is to be resolved', 'it's relation'<br>- Contradiction: says Sent Back restores to Pending Verification but operate article says Open<br>- Missing: Kanban columns map to statuses; escalation tiers |
| 12124994 | How to add & edit fields while creating a F-Tag? | P2 | 2 | - Google Drive video<br>- 'a F-Tag' -> 'an F-Tag'<br>- 'This fields allows', 'Fields Updates Successfully' typos<br>- Mention Tag Type-specific fields |
| 12125043 | How to search the F-Tag dashboard? | P2 | 14 | - 1 internal-article link in callout<br>- Google Drive video<br>- Typos 'F-Tagin', 'second filed', 'loose the search results', 'bases on'<br>- Good: already covers Group By and Saved/pinned views<br>- Add link to export article at end |
| 12125046 | What are the navigation options in F-Tag Module and how to use them? | P2 | 2 | - 'Lean Suite' -> 'LeanSuite'<br>- Good: already lists Floor Plan and Kanban<br>- Add links to each menu option article (Floor Plan / Kanban drafts 12882033/12882047 once published) |
| 12125071 | Process after creation in F-Tag Module. | P2 | 0 | - 0 screenshots (overview page - acceptable)<br>- 'a F-Tag' -> 'an F-Tag'<br>- 'Lean Suite' -> 'LeanSuite'<br>- Add overview of Kanban board and tier escalation in post-creation flow |
| 12125075 | What is the activity field and its options? | P2 | 1 | - 'a F-Tag' -> 'an F-Tag' throughout<br>- 'Records or hold' grammar<br>- Closing 'learn how to use the comment section' has no link (add link to 12125053)<br>- Screenshot Nov-2025 - verify |

### Suggestion System (31)

| Intercom ID | Title | Priority | Imgs | Fixes needed |
|---|---|---|---|---|
| 12123043 | What are the navigation options in Suggestion System and how to use them? | P0 | 3 | - Parent menu bullet 'Points:' has NO description (empty)<br>- EMPTY 'Need help?' callout<br>- 13 empty paragraphs padding table cell<br>- 'Lean Suite' -> 'LeanSuite'<br>- Missing Leaderboard menu item (new) |
| 12123131 | How to add a comment to a suggestion? | P0 | 3 | - EMPTY 'Need Help?' callout<br>- 1 internal-article link<br>- Google Drive video<br>- Screenshots older (binary Dec-2025)<br>- H1 steps |
| 12123146 | How to attach a photo and a photo with a sketch to a suggestion? | P0 | 0 | - Both collapsibles EMPTY (Side Window / Detail View)<br>- 0 screenshots<br>- Orphan intro 'the above information/data'<br>- 1 internal-article link |
| 12123147 | How to attach a sketch to a suggestion? | P0 | 0 | - Both collapsibles EMPTY (Side Window / Detail View)<br>- 0 screenshots<br>- Orphan intro 'the above information/data'<br>- Confluence edit-v2 draftShareId link |
| 12123152 | How to edit information in your suggestion? | P0 | 0 | - Both collapsibles EMPTY and mislabeled 'Editing Properties Information in a Kaizen' / 'in a Kaizen' (copy-paste from Kaizen) in Suggestion article<br>- 0 screenshots<br>- 2 internal-article links<br>- Confluence edit-v2 draftShareId link<br>- 'two scope' typo |
| 12122771 | How to create a new Suggestion? | P1 | 4 | - 1 internal-article link (login)<br>- Confluence edit-v2 draftShareId link (fields article) - replace with 12123017<br>- Google Drive video<br>- Good: mentions Lean AI rewrite<br>- Add Lean AI auto status/priority + points earned on submit<br>- 1 older screenshot (Step 3) |
| 12123034 | What is the Suggestion dashboard? | P1 | 1 | - 'Lean Suite' -> 'LeanSuite'<br>- Missing new columns: points, RICE score, Lean AI status/priority<br>- Says '20 headings' - verify<br>- Leading empty paragraph |
| 12123066 | What are suggestion settings/preferences and how to edit them? | P1 | 2 | - OUTDATED: points now feed a Leaderboard - add leaderboard section<br>- Typos 'aims to creates', 'gaina t'<br>- Closing has no link to Reports |
| 12123074 | What are Reports in the Suggestion module? | P1 | 5 | - Typo 'The Reports section in the  provides' (missing module name), 'process to of searching', 'filtering you reports'<br>- Missing: Leaderboard/points report (new) |
| 12123129 | How does a suggestion proceed after creation? | P1 | 2 | - Missing overview of new flow: Lean AI status/priority triage, RICE scoring, points on approval/completion<br>- Typo 'A suggestion a can also'<br>- Closing has no link |
| 12123133 | How to add an approver/implementer to a Suggestion ? | P1 | 6 | - EMPTY 'Need Help ?' callout<br>- Google Drive video<br>- Typo 'Check ot the'<br>- Implementor collapsible says 'Click on the Add Approver button' (copy-paste; clarify same button)<br>- Inconsistent 'implementer'/'implementor' spelling |
| 12123137 | How to approve a Suggestion? | P1 | 5 | - EMPTY 'Need Help?' callout<br>- Google Drive video<br>- Missing: Lean AI suggested priority/status, RICE score on approval, points awarded to submitter<br>- Closing has no link |
| 12123154 | How to initiate a Kaizen from a Suggestion? | P1 | 1 | - EMPTY 'Need Help?' callout<br>- Google Drive video<br>- Step 3 has no screenshot of Create Kaizen window<br>- Closing hr with no next link |
| 12123160 | How to proceed a Suggestion after approval? | P1 | 1 | - EMPTY 'Need Help?' callout<br>- Google Drive video<br>- Typos 'This option it the most', 'monitores'<br>- Mention points awarded on completion (points/leaderboard)<br>- Old screenshot (Dec-2025 binary) |
| 12123164 | How to Revert a Suggestion to its Initial State? | P1 | 5 | - Google Drive video<br>- 'Lean Suite' -> 'LeanSuite'<br>- 'property informations'<br>- Statuses list may now include Lean AI status - verify |
| 12123175 | What is the priority of a suggestion and how to change it? | P1 | 1 | - OUTDATED: Suggestion priority now can be set by Lean AI (AI priority) and RICE scoring - add<br>- 'follow below to change the priority' but no link below<br>- Closing has no link |
| 12123178 | What is the side window of a suggestion and its features? | P1 | 8 | - 1 internal-article link (points to Kaizen article 4672960 - wrong module)<br>- Confluence edit-v2 draftShareId link<br>- 8 screenshots old (binary Dec-2025) - retake<br>- Missing new side-window fields: points, RICE score, Lean AI status/priority<br>- Typos 'this fields provides', 'bought into attention' |
| 12123181 | What is the suggestion detail view and its features? | P1 | 3 | - 1 internal-article link<br>- Confluence edit-v2 draftShareId link<br>- Typos 'a elaborated', 'Add Approver Buton'<br>- 3 old screenshots (Dec-2025) - retake<br>- Missing new fields: points, RICE, Lean AI status/priority |
| 12123187 | How to create a new campaign? | P1 | 5 | - EMPTY 'Need Help?' callout<br>- Google Drive video<br>- Duplicate 'Step 3' headings<br>- Typo 'Log into you Lean Suite Account'<br>- 'Custom Points' - link to new points/leaderboard feature |
| 12123191 | How to see campaign details and submitted suggestions? | P1 | 1 | - EMPTY 'Need Help?' callout<br>- Google Drive video<br>- Missing 'Campaign Card' image (caption present, image absent)<br>- Typos 'Log into you Lean Suite', 'through a Campaign Cards', 'there are some changes are'<br>- Mention leaderboard/points per campaign |
| 12123193 | What is a Suggestion Campaign ? | P1 | 3 | - EMPTY 'Need help?' callout<br>- 'Itis' typo; 'from you account'<br>- 'Lean Suite' -> 'LeanSuite'<br>- Mention custom points / leaderboard<br>- Home menu screenshot pre-Mar-2026 icons - retake |
| 12123201 | What is the Suggestion System in Lean Suite ? | P1 | 1 | - Title 'Lean Suite' -> 'LeanSuite' ('What is the Suggestion System in LeanSuite?')<br>- Missing overview of new features: points/leaderboard, RICE scoring, Lean AI status & priority<br>- Trailing empty paragraphs |
| 12123017 | How to add/edit fields while creating a suggestion ? | P2 | 3 | - 1 internal-article link<br>- Google Drive video<br>- 'This fields allows' typo<br>- Mention new fields (points, RICE, AI priority) if configurable |
| 12123121 | How to search the Suggestion dashboard? | P2 | 14 | - 1 internal-article link<br>- Typos 'second filed', 'loose the search results', 'bases on'<br>- Empty duplicate h3 heading<br>- Add filters for new Lean AI status/priority and RICE score |
| 12123124 | How to export suggestions/search results from suggestion dashboard? | P2 | 2 | - 1 internal-article link<br>- Google Drive video<br>- 'Next Up!' followed by nothing<br>- 1 older screenshot (Dec-2025 binary) |
| 12123143 | How to attach a file to a suggestion? | P2 | 4 | - Collapsibles populated (good)<br>- Orphan intro 'the above information/data' - rewrite |
| 12123150 | How to attach information & data to a Suggestion ? | P2 | 0 | - 0 screenshots (index page - acceptable)<br>- 'more prospective way' -> 'perspective'<br>- Trailing empty hr |
| 12123157 | How to open a Suggestion after creation? | P2 | 3 | - Google Drive video<br>- 'Choose from below!' followed by nothing - add links to side window (12123178) and detail view (12123181) |
| 12123167 | What is the activity field in suggestion system and its options? | P2 | 3 | - 1 internal-article link<br>- 'Records or hold' grammar<br>- Closing has no link to comment article (12123131) |
| 12123188 | How to edit existing campaign details? | P2 | 2 | - EMPTY 'Need Help?' callout<br>- Google Drive video<br>- Duplicate 'Step 2' headings<br>- 'Lean Suite Account'<br>- No mention of Delete flow despite 'Choose edit or delete' |
| 12123192 | How to submit a suggestion to a campaign? | P2 | 1 | - Google Drive video<br>- Good: Need Help callout has a real link<br>- Mention points earned per campaign suggestion |

### Best Practice (26)

| Intercom ID | Title | Priority | Imgs | Fixes needed |
|---|---|---|---|---|
| 12124836 | What is the Best Practice Module in LeanSuite? | P0 | 0 | - Orphan heading 'TKP's (Tactical Key Points)' with NO content (empty scaffolding)<br>- 'In summary' with no preceding body<br>- 1 internal-article link<br>- 0 screenshots<br>- 'Lean Suite' -> 'LeanSuite' x4 |
| 12124853 | Navigation in Best Practice Module | P0 | 4 | - Scaffolding 'Phase 3: Navigation Go to:' + internal link at top<br>- Confluence edit-v2 draftShareId link<br>- 3 internal-article links<br>- 'Lean Suite' -> 'LeanSuite'<br>- Retake screenshots (home icons) |
| 12124933 | How to add a file to a Best Practice? | P0 | 0 | - Both collapsibles EMPTY (Side Window / Detail View) - no instructions<br>- 0 screenshots<br>- Orphan intro 'the above information/data'<br>- Confluence edit-v2 link (truncated draftShareId) |
| 12124937 | How to add a photo and a photo with a sketch to a Best Practice? | P0 | 0 | - Both collapsibles EMPTY (Side Window / Detail View) - no instructions<br>- 0 screenshots<br>- Orphan intro 'the above information/data'<br>- Confluence edit-v2 link (truncated draftShareId) |
| 12124940 | How to add a sketch to a Best Practice? | P0 | 0 | - Both collapsibles EMPTY (Side Window / Detail View) - no instructions<br>- 0 screenshots<br>- Orphan intro 'the above information/data'<br>- Confluence edit-v2 link (truncated draftShareId) |
| 12124943 | How to add a web URL to a Best Practice? | P0 | 0 | - Both collapsibles EMPTY (Side Window / Detail View) - no instructions<br>- 0 screenshots<br>- Orphan intro 'the above information/data' (leading <br>)<br>- Confluence edit-v2 link (truncated draftShareId) |
| 12124950 | How to attach information & data to a Best Practice? | P0 | 0 | - All 4 how-to links in table + closing CTA are Confluence edit-v2 links with truncated draftShareId (unopenable) - replace with 12124933/12124940/12124937/12124943<br>- 1 internal-article link<br>- 0 screenshots<br>- 'chose' typo |
| 12124956 | How to edit information in your Best Practice? | P0 | 1 | - Both collapsibles EMPTY and mislabeled 'in a Kaizen' (copy-paste) in Best Practice article<br>- Confluence edit-v2 link (truncated draftShareId)<br>- 2 internal-article links<br>- Typos 'only editable is the editable state', 'yeild', 'require information'<br>- 'Go to the end to learn more' - nothing there |
| 12124960 | How to open a Best Practice after creation? | P0 | 3 | - Broken emoji shortcode ':Copy_Icon_Transparent:'<br>- Confluence edit-v2 link (truncated draftShareId, inEditorTemplatesPanel)<br>- 2 internal-article links<br>- Retake screenshots |
| 12124964 | Process after creation in a Best Practice | P0 | 0 | - Scaffolding line 'Phase 4: Post Creation Process Go to:' + internal-article link at top<br>- 4 internal-article links total<br>- 0 screenshots<br>- 'Lean Suite' -> 'LeanSuite'<br>- 'it's' misuse |
| 12124838 | How to create a new Best Practice? | P1 | 5 | - 3 internal-article links<br>- 'Step 1' not a heading<br>- 'Lean Suite' -> 'LeanSuite'<br>- 'kaizen type of methodology' typo<br>- Retake screenshots (Create New menu / home refreshed) |
| 12124842 | How to export data from the Best Practice Dashboard? | P1 | 2 | - 2 internal-article links<br>- Broken emoji shortcode ':Excel_Icon:'<br>- Mixed H1/H2<br>- Retake screenshots |
| 12124851 | How to search the Best Practice Dashboard? | P1 | 4 | - 2 internal-article links<br>- 'These are many filters' typo; 'it's active state'<br>- Missing saved/pinned views, Group By (if available)<br>- Retake screenshots |
| 12124898 | What are Reports the in the Best Practice Module? | P1 | 4 | - TITLE TYPO 'What are Reports the in the Best Practice Module?' -> 'What are Reports in the Best Practice Module?'<br>- 2 internal-article links<br>- 'process to of searching' typo<br>- Retake screenshots |
| 12124910 | What is a Best Practice Dashboard? | P1 | 3 | - Confluence edit-v2 link (truncated draftShareId)<br>- 'Lean Suite' -> 'LeanSuite'<br>- Says 20 headings - verify<br>- Missing saved/pinned views (if shared with Kaizen)<br>- Retake screenshots |
| 12124929 | How to add & remove sections from phases in Best Practice Module? | P1 | 5 | - 1 internal-article link + 1 more<br>- Confluence page link (atlassian.net/wiki/spaces/KC/pages/105840830 - internal wiki)<br>- 'Go below to learn how to add a new section!' - nothing below<br>- Typos 'ad add', 'pop up</b>will'<br>- Mixed H1/H2<br>- Retake screenshots |
| 12124930 | How to add a comment to a Best Practice? | P1 | 4 | - Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- H1 steps<br>- Retake screenshots |
| 12124947 | How to advance a Best Practice into the next stage/phase? | P1 | 2 | - 3 internal-article links<br>- 'let's users' typo<br>- Retake screenshots |
| 12124952 | How to edit due date of a Best Practice? | P1 | 6 | - 2 Confluence edit-v2 links (one truncated draftShareId)<br>- 3 internal-article links<br>- Outdated: explain Revised Due Date terminology<br>- Typos 'a due dates', 'This fields offers', 'Let's you'<br>- H1 steps<br>- Retake screenshots |
| 12124957 | How to export data from a Best Practice? | P1 | 2 | - 2 internal-article links<br>- 'advance a workflow' -> 'advance a Best Practice'<br>- Leading empty paragraph<br>- Retake screenshots |
| 12124962 | How to share a Best Practice with other facilities? | P1 | 4 | - 2 internal-article links<br>- Confluence edit-v2 draftShareId link<br>- Typos 'Select Facilites', 'facilites' x5, 'with you credentials'<br>- Step 3 has no screenshot<br>- Retake screenshots |
| 12124965 | What are phases and sections in a Best Practice? | P1 | 2 | - 4 internal-article links<br>- 'Follow below to learn more!' with nothing below<br>- Nonsense sentence 'methodology options of best practices will be the same as Best Practice' (should be 'as Kaizen')<br>- 'section choose' typo<br>- Retake screenshots |
| 12124967 | What is the activity field in a Best Practice and the options available in it? | P1 | 3 | - Confluence edit-v2 link (truncated draftShareId)<br>- 1 internal-article link<br>- 'Records or hold' grammar<br>- Retake screenshots |
| 12124969 | What is the Best Practice detail view and its features? | P1 | 3 | - 3 internal-article links<br>- Empty cells in options table<br>- Typos 'a elaborated', 'chose', 'open it up'<br>- Retake screenshots |
| 12124971 | What is the drag & drop box in Best Practice and how to use it? | P1 | 6 | - Confluence edit-v2 link with EMPTY draftShareId (truncated URL)<br>- '3 out of the 4' vs 4 bullets - clarify<br>- Retake screenshots |
| 12124974 | What is the side window of a Best Practice & its features? | P1 | 6 | - 2 internal-article links<br>- Typos 'let'' a user', 'let's you', 'The number phases'<br>- Retake 6 screenshots (Dec-2025) |

### LMS (24)

| Intercom ID | Title | Priority | Imgs | Fixes needed |
|---|---|---|---|---|
| 12125087 | How to add a new Course in LMS? | P0 | 5 | - EMPTY excerpt: 'The excerpt below focuses on how to create a new category...' followed by nothing<br>- 'Follow below for more instructions on creating a new course category!' - nothing below<br>- Confluence edit-v2 draftShareId link<br>- 2 internal-article links<br>- Google Drive video<br>- Course Type 'In-Class' - add attendance-code details (new) |
| 12125105 | How to create a new Course Category? | P0 | 0 | - EMPTY: 'Here's an excerpt of the category creation process!' followed by NOTHING - no steps, no screenshots<br>- Confluence edit-v2 draftShareId link |
| 12125114 | How to delete a course from the database in LMS? | P0 | 2 | - Copy-paste errors: Step 4 'Choose the course you wish to assign to a user' and Step 5 'confirm the assignment of the course' in DELETE article<br>- 3 internal-article links (+1 closing)<br>- Google Drive video<br>- Typos 'ins entirety', 'deleteing' |
| 12125120 | How to mark submitted quizzes as instructor in LMS? | P0 | 10 | - Opening collapsible 'Follow the steps to open up the submitted quizzes' is EMPTY<br>- 2 Confluence edit-v2 draftShareId links<br>- Typo 'Correct Answersm'<br>- Retake screenshots |
| 12125124 | How to use the instructor panel? | P0 | 0 | - 0 screenshots<br>- 'Choose from below' links are 2 Confluence edit-v2 draftShareId links (+1 closing) - unopenable<br>- 'follow the end of the manual' phrasing<br>- Missing new instructor workflow steps: assign to Role, share course, in-class session with attendance code |
| 12125133 | What are the navigation options in LMS system and how to use them? | P0 | 3 | - Copy-paste error: 'further options for a suggestion' / 'process a suggestion' (x3) in LMS article<br>- 10 empty paragraphs scaffolding<br>- Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- 'Switch To section on the home page' - verify vs Mar-2026 home<br>- Retake screenshots |
| 12125137 | What is LMS in LeanSuite? | P0 | 2 | - Both screenshots hosted on api.media.atlassian.com with expired tokens (BROKEN images)<br>- Confluence edit-v2 draftShareId link<br>- 'Lean Suite' -> 'LeanSuite'<br>- 'the the learner', 'a LMS' typos<br>- Missing what's new: assign to roles, course share, in-class with attendance code |
| 12125143 | What is the LMS Dashboard? | P0 | 2 | - Copy-paste error: 'learned about the Suggestion Dashboard' in LMS article<br>- Confluence edit-v2 draftShareId link<br>- 'Navigate to the end of the manual' phrasing<br>- Typos 'acts the central place', 'secton'<br>- Missing role-assigned courses / in-class sessions on dashboard |
| 12125091 | How to add a new Quiz in LMS? | P1 | 5 | - Confluence edit-v2 draftShareId link<br>- 2 internal-article links<br>- Google Drive video<br>- Typos 'Quizes tab', 'as peer your preference'<br>- 'Go to the end of the manual' phrasing |
| 12125094 | How to add a quiz to a course? | P1 | 7 | - 2 Confluence edit-v2 draftShareId links<br>- 1 internal-article link<br>- Google Drive video<br>- Retake screenshots |
| 12125099 | How to assign a course to a user/employee in LMS? | P1 | 5 | - OUTDATED: add 'Assign to Role' (courses can now be assigned to roles) - major missing feature<br>- Confluence edit-v2 draftShareId link<br>- 3 internal-article links<br>- Google Drive video<br>- Typos 'serch', 'Congratulation!', 'simple type backspace'<br>- Retake screenshots |
| 12125103 | How to compare quizzes in LMS System? | P1 | 3 | - 10 internal-article links in closing 'more modules' block + 2 Need Help<br>- 'hava' typo<br>- 'Lean Suite Modules'<br>- Retake screenshots |
| 12125106 | How to create a course inside LMS? | P1 | 3 | - 2 Confluence edit-v2 draftShareId links<br>- 1 internal-article link<br>- Google Drive video<br>- 'This manual will focus on the second part...' confusing framing<br>- Step 3 '5 phases' not described<br>- Missing: Share course option, Role targeting, in-class session setup with attendance code |
| 12125113 | How to create a Quiz inside LMS? | P1 | 3 | - Confusing: 'This manual will focus on the second part of the quiz creation i.e. Quiz Creation'<br>- Step 3 '3 phases' not described (no detail/screens per phase)<br>- Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Google Drive video<br>- 'manual' phrasing |
| 12125118 | How to enroll into a course in LMS? | P1 | 9 | - 2 Confluence edit-v2 draftShareId links<br>- 2 internal-article links<br>- 'enrolls in two ways' typo<br>- Missing: courses auto-assigned via Role; enrolling via shared course link; in-class attendance code check-in<br>- Retake screenshots |
| 12125123 | How to see a Course Detail in LMS? | P1 | 2 | - Google Drive video<br>- 3 internal-article links<br>- Step 2 'Need Help' links to Instructor Panel article (wrong - should be Course Catalog)<br>- Mention in-class course details (schedule, attendance code) |
| 12125126 | How to view and add instructors in LMS? | P1 | 5 | - Confluence edit-v2 draftShareId link<br>- 3 internal-article links<br>- Google Drive video<br>- Typos 'Log into you', 'drop down fiels', 'notification</b>will', 'delete and instructor'<br>- Retake screenshots |
| 12125129 | What are Course Analytics and how to view them? | P1 | 4 | - 2 Confluence edit-v2 draftShareId links<br>- 4 internal-article links<br>- Copy-paste error: Step 4 'Choose the course you wish to assign to a user' in analytics article<br>- Typos 'Pei Chart', 'windowwill', 'This is that the'<br>- Retake screenshots |
| 12125130 | What are LMS reports? | P1 | 7 | - Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- 'Go to the bottom of the manual' phrasing<br>- 'provided a high level' typo<br>- Mention attendance (in-class) reporting if available |
| 12125139 | What is the Course Catalog inside LMS? | P1 | 3 | - 2 internal-article links<br>- Missing course share / in-class course type filter<br>- 'to know explore' typo<br>- Retake screenshots |
| 12125142 | What is the instructor panel in LMS and how to navigate it? | P1 | 9 | - Confluence edit-v2 draftShareId link<br>- Broken emoji shortcode ':red_star:'<br>- 'Learn About Permissions inside Lean Suite!' with no link<br>- Heading typo 'Your Leaning Hub'<br>- 'ad navigation' typo<br>- Missing: assign course to Role, share course, in-class course with attendance code |
| 12125145 | What is the My Learning section in LMS? | P1 | 2 | - Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Missing: courses assigned to user's Role appear here; course share; in-class courses with attendance code |
| 12125115 | How to edit/delete an Instructor in LMS? | P2 | 1 | - Confluence edit-v2 draftShareId link<br>- 2 internal-article links<br>- Google Drive video<br>- 'A browser pop will confirm' typo<br>- Step 3 no screenshot |
| 12125128 | How to view submitted Quizes in LMS? | P2 | 4 | - TITLE TYPO 'Quizes' -> 'Quizzes' (also 'Submitted Quizes' card)<br>- Confluence edit-v2 draftShareId link<br>- 2 internal-article links<br>- 'shows th instructor' typo<br>- Retake screenshots |

### Cost Management (17)

| Intercom ID | Title | Priority | Imgs | Fixes needed |
|---|---|---|---|---|
| 12123856 | How to check import history in Cost Management? | P0 | 3 | - UNFINISHED placeholder 'Use the Search Box in the top left corner to____'<br>- Confluence edit-v2 draftShareId link<br>- 2 internal-article links<br>- 'Step 1' not a heading |
| 12123895 | How to import data in Cost Management? | P0 | 12 | - Stage 2 'Field Mapping' section is EMPTY (heading then straight to Step 5) - mapping steps missing<br>- Confusing duplicate 'Stage 1/Stage 2' headings reused for defect types<br>- 2 internal-article links (+1 closing)<br>- Google Drive video<br>- 'by the matrix' copy-paste from QA Matrix<br>- Retake screenshots |
| 12123933 | How to view the Kaizens related to a Loss Tree? | P0 | 4 | - UNFINISHED placeholder 'Search to_____'<br>- Missing icon names ('clicking on the of the kaizen', 'clicking on the button')<br>- Confluence edit-v2 draftShareId link<br>- 3 internal-article links<br>- Typos 'buy clicking', 'conclude it be learning'<br>- 'Step 1' not a heading |
| 12123975 | What are reports inside Cost Management and how to navigate them? | P0 | 8 | - UNFINISHED placeholders: 'This section___________' (Project Pipeline) and 'This section__________' (Glidepath) - descriptions missing<br>- Confluence edit-v2 draftShareId link<br>- Retake screenshots |
| 12123848 | How to add a new Loss Tree in Cost Management? | P1 | 3 | - 2 Confluence edit-v2 draftShareId links<br>- 2 internal-article links<br>- Google Drive video<br>- 'credenetials' typo<br>- References 'QA Matrix' (no public article)<br>- Step 4 lacks field list for Add Loss Tree window |
| 12123858 | How to create a Kaizen from a Loss Tree? | P1 | 4 | - Confluence edit-v2 draftShareId link<br>- 4 internal-article links<br>- 'Step 1' not a heading<br>- Mention new Kaizen fields (labels, Revised Due Date) in pre-filled create window |
| 12123871 | How to export results from Cost Management Dashboard? | P1 | 2 | - Broken emoji shortcode ':Cost_Management_System:'<br>- Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Google Drive video<br>- 'Log into you' typo<br>- Home icon screenshot pre-Mar-2026 - retake |
| 12123953 | How to view Top Losses Report for a Loss Tree? | P1 | 3 | - 2 Confluence edit-v2 draftShareId links<br>- 5 internal-article links<br>- Google Drive video<br>- Numbered list restarts at '1.' for all three ways<br>- Retake screenshots |
| 12123999 | What are the navigation options in Cost Management System? | P1 | 3 | - Confluence edit-v2 draftShareId links x2<br>- Typos 'Defets', 'Mapping Resultant & Casual Losses' (Causal), sentence truncated 'open in the right si'<br>- 'a Cost Management' grammar x3<br>- Retake screenshots |
| 12124027 | What is Cost Management in Lean Suite? | P1 | 0 | - TITLE 'Lean Suite' -> 'LeanSuite'<br>- Confluence edit-v2 draftShareId link<br>- Flowchart table uses H1 headings in cells and has 3 empty cells<br>- Compares to 'QA Matrix' (no article exists) - clarify or link<br>- 0 screenshots (add dashboard image) |
| 12124047 | What is Loss Tree Detail View and its features? | P1 | 3 | - Confluence edit-v2 draftShareId link<br>- Typos 'learning to sue the features', 'Congratulation!'<br>- Retake screenshots |
| 12124064 | What is the Cost Management Dashboard and how to navigate it? | P1 | 6 | - Confluence edit-v2 draftShareId link<br>- Typos 'which provided', 'dashboard look like'<br>- Retake screenshots |
| 12124081 | What is the Loss Trees Dashboard and it features? | P1 | 1 | - TITLE TYPO 'and it features' -> 'and its features'<br>- Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Retake screenshot |
| 12123862 | How to delete a Loss Tree? | P2 | 2 | - Confluence edit-v2 draftShareId link<br>- 2 internal-article links<br>- Typos 'credenetials', 'ro proceed', 'Casual Losses'<br>- 'Step 1' not a heading |
| 12123864 | How to export data from a Loss Tree? | P2 | 2 | - Confluence edit-v2 draftShareId link<br>- 3 internal-article links<br>- Google Drive video<br>- Typo 'Loss Tre Detail View'<br>- 'export a loss tree data' |
| 12123867 | How to export data from the Loss Tree dashboard? | P2 | 1 | - 2 internal-article links (+1 closing)<br>- Google Drive video<br>- 'Dashboard the parent menu' missing 'from' |
| 12123917 | How to open a loss tree after creation? | P2 | 2 | - Confluence edit-v2 draftShareId link<br>- 2 internal-article links<br>- Google Drive video<br>- Typos 'crdenetials', 'We ave' |

### Skill Matrix (14)

| Intercom ID | Title | Priority | Imgs | Fixes needed |
|---|---|---|---|---|
| 12124661 | How to create a new team? | P0 | 3 | - All three Step 4 collapsibles (Add Basic Info / Select Tools / Team Members) are EMPTY - core creation steps missing<br>- 2 internal-article links<br>- Google Drive video<br>- Screenshots pre-Mar-2026 (Create New menu)<br>- Superseded by draft 17183949 - candidate to unpublish |
| 12124803 | What are the navigation options inside Skill Matrix? | P0 | 3 | - Copy-paste error: 'Skill Matrix/Issue Tracker' (x4) - Issue Tracker is F-Tag<br>- 2 Confluence edit-v2 draftShareId links<br>- Sentence truncated 'open in the right si'<br>- 'Lean Suite' -> 'LeanSuite' |
| 12124643 | How to clone a team in Skill Matrix? | P1 | 3 | - Broken emoji shortcode ':Skill_Matrix_System:'<br>- Confluence edit-v2 draftShareId link<br>- 2 internal-article links<br>- Google Drive video<br>- 'Skil Matrix' typo<br>- Step 4 (clone icon) no screenshot |
| 12124680 | How to edit a team in Skill Matrix? | P1 | 2 | - Broken emoji shortcode ':Skill_Matrix_System:'<br>- 11 internal-article links (closing 'learn more modules' block + Need Help)<br>- Copy-paste: Step 3 'see the data for a particular date' in edit article<br>- 'Step 1' not a heading<br>- Steps 4-5 no screenshots |
| 12124734 | How to export team overview results from Skill Matrix? | P1 | 2 | - Broken emoji shortcode ':Skill_Matrix_System:'<br>- 2 internal-article links<br>- Google Drive video<br>- Copy-paste: Step 3 'see the data for a particular date' in export article<br>- 'Skil Matrix' typo<br>- Step 4 no screenshot of PDF icon |
| 12124749 | How to view a team in detail post creation? | P1 | 2 | - Broken emoji shortcode ':Skill_Matrix_System:'<br>- Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Google Drive video<br>- Home icon screenshot - retake |
| 12124763 | How to view competency detail for a member in a team? | P1 | 7 | - Confluence 'createpage.action' link (link to a page that does not exist) in Step 2 Need Help<br>- Confluence edit-v2 draftShareId links x2<br>- 1 internal-article link<br>- Google Drive video<br>- Retake screenshots |
| 12124779 | How to view/export team data for a particular date in Skill Matrix? | P1 | 4 | - Broken emoji shortcode ':Skill_Matrix_System:'<br>- Confluence edit-v2 draftShareId link<br>- 1 internal-article link<br>- Typos 'Skil Matrix', 'calender', 'skill matric', 'see the date for'<br>- 'Step 1' not a heading<br>- Home icon screenshot pre-Mar-2026 - retake |
| 12124796 | What are Reports inside Skill Matrix? | P1 | 7 | - 1 internal-article link (points to Cost Management nav 4673048 - wrong module)<br>- Typos 'Lean Sute', 'closer look that these'<br>- Retake screenshots |
| 12124805 | What is Team Dashboard in Skill Matrix? | P1 | 3 | - Confluence edit-v2 draftShareId link<br>- 'available viewing' missing 'for', 'Skill Matrix</b>button' spacing<br>- Retake screenshots (home icon) |
| 12124810 | What is the team detail view and its features? | P1 | 6 | - 4 Confluence edit-v2 draftShareId links<br>- 3 internal-article links (bare URL list)<br>- 'feautures' typo<br>- Retake screenshots |
| 12124693 | How to export data from Reports in Skill Matrix? | P2 | 3 | - Confluence edit-v2 draftShareId link<br>- 2 internal-article links<br>- Google Drive video<br>- '(Original, Current & Requires)' typo |
| 12124806 | What is the Skill Matrix in LeanSuite? | P2 | 1 | - Confluence edit-v2 draftShareId link<br>- 'Theskill' typo<br>- 'Lean Suite' -> 'LeanSuite'<br>- Retake screenshot |
| 12124812 | What is User Profile in Skill Matrix? | P2 | 7 | - 1 internal-article link<br>- Section labels plain text not headings<br>- 'Lean Suite' -> 'LeanSuite'<br>- Retake screenshots |

### Daily Standard Work (9)

| Intercom ID | Title | Priority | Imgs | Fixes needed |
|---|---|---|---|---|
| 12920854 | What is Daily Standard Work in Lean Suite ? | P0 | 5 | - TITLE 'Lean Suite' -> 'LeanSuite'<br>- 'My Templates' table description cell EMPTY<br>- Numbering inconsistent (1. list item, '2.' text, then unnumbered)<br>- Missing Marketplace description and Role/Asset assignment<br>- Typos 'calender', 'Syatem' |
| 12920991 | How to assign a template to a user? | P0 | 4 | - Fields table: ALL 14 'Descriptions' cells EMPTY<br>- 'Assign By' lists User/Asset but NOT Role - OUTDATED (DSW can now assign to Role and Asset)<br>- Duplicate 'Asset' row<br>- Typos 'clock on the Assign button', 'th schedule'<br>- Superseded by draft 17183176 - candidate to unpublish |
| 12920896 | How to view submitted reports in Daily Standard Work ? | P1 | 4 | - Says 'two ways (Overview, Kanban)' but only Overview documented - add Kanban section |
| 12920931 | How to start a template/task/activity in Daily standard work? | P1 | 4 | - Says two ways (Overview Dashboard / Kanban) but only Overview is documented - add Kanban path<br>- '2.1' sub-step with no 2.2<br>- Title casing 'Daily standard work' |
| 12920945 | How to clone a template from marketplace ? | P1 | 1 | - Only 1 screenshot - Step 2 (Marketplace tab, Clone Template button) has none<br>- Typo 'maretpplace', 'template and from'<br>- Title spacing 'marketplace ?' |
| 12920981 | What is the Schedule dashboard in Daily Standard Work ? | P1 | 2 | - Missing: assigning to Role and Asset (new)<br>- No link to assign article at end<br>- Title spacing 'Work ?' |
| 12920876 | What is the overview dashboard in Daily Standard Work ? | P2 | 6 | - Typos 'int he parent menu', 'Lena Creator', 'Calender View', 'mains sections'<br>- Mention Role/Asset activities in Activities Bar if applicable |
| 12920905 | What is the Kanban Board in Daily Standard Work and how to use it? | P2 | 3 | - Typos 'chose', 'until all activities are show'<br>- Trailing empty paragraphs<br>- Link to start/report articles |
| 12920922 | How to preview a template? | P2 | 2 | - Step 1 no screenshot<br>- Fine otherwise |

### Lean Creator (8)

| Intercom ID | Title | Priority | Imgs | Fixes needed |
|---|---|---|---|---|
| 12921679 | How to create Questions & Responses in the Lean Creator Window? | P0 | 6 | - Response Types table: 'Input Type' and 'Add Rule Property' columns EMPTY for 19 of 20 rows<br>- Article ENDS abruptly after Step 3 'Add Rule' screenshot - rules configuration and save steps missing<br>- OUTDATED: Rules (new) and Scoring need full sections<br>- Typos 'cannot be submitted is a question', 'choose is the response' |
| 12919894 | What is the Lean Creator Dashboard and how to use it? | P1 | 1 | - OUTDATED: dashboard now has Create with AI and Marketplace - add<br>- Only 1 screenshot |
| 12919955 | How to create a new template in Lean Creator ? | P1 | 6 | - EMPTY 'Need Help?' callout<br>- OUTDATED: missing 'Create with AI' option on Create Template<br>- Template types list (7) differs from DSW article list ('Quiz Survey') - reconcile<br>- Typos 'collection data', 'activates' (activities), 'inside a one facility' |
| 12919966 | Where are the Lean Creator Templates used? | P1 | 1 | - Marketplace mentioned but not linked; Marketplace now also in Lean Creator (new) - expand<br>- Typos 'The public options puts', 'The possibility are endless' |
| 12919959 | What is the Lean Creator Window and its components? | P2 | 4 | - Mention Rules/Scoring panel and Create with AI in window components (new) |
| 12919960 | How to create pages and sections in the Lean Creator Window? | P2 | 16 | - Duplicate heading 'Reordering Questions/Sections' (second should be 'Deleting pages/sections/questions') + empty h3<br>- Typos 'Leab Creator', 'alogn', 'be default', 'template type chose', 'Assignment/Skill Matrix' (should be Assessment) |
| 12919963 | How to edit Template questions and responses in Lean Creator? | P2 | 3 | - 'clicking on the Lean Creator Dashboard and [icon] button' garbled sentence<br>- Mention Create with AI to regenerate questions |
| 12927244 | How to edit template properties in Lean Creator? | P2 | 4 | - 'simple press back' typo<br>- Mention scoring settings in template properties (new)<br>- Closing has no link to 12919966 |

### KPI (7)

| Intercom ID | Title | Priority | Imgs | Fixes needed |
|---|---|---|---|---|
| 12920014 | What is KPI in Lean Suite ? | P0 | 0 | - ARTICLE IS EMPTY - body is only the text 'KPI Builder' (no overview content)<br>- TITLE 'Lean Suite' -> 'LeanSuite', spacing 'Suite ?' |
| 12920022 | How to create a new KPI? | P0 | 3 | - EMPTY 'Need Help?' callout<br>- 'Source' row description EMPTY in sections table<br>- Typos 'cloc on Create New', 'private of for', 'let's us'<br>- 'Lean Suite Account'<br>- No closing link<br>- Superseded by draft 17183337 - candidate to unpublish |
| 12930648 | What are the KPI builder sections and how to use them? | P0 | 9 | - ALL 5 field tables have EMPTY 'Descriptions' column (~35 empty cells) - the article's core content is missing<br>- Source section lists 4 input ways in 12920026 but Manual source not in table |
| 12920026 | How to input data manually into a KPI ? | P1 | 4 | - Says 4 input ways but only Manual documented (OK scope) - link to KPI builder Source section<br>- Title spacing 'KPI ?'<br>- Superseded by draft 17183343 - candidate to unpublish |
| 12920016 | The KPI dashboard and how to use it? | P2 | 1 | - Caption typo 'KPI Dashboar d' (broken code formatting)<br>- Title grammar 'The KPI dashboard and how to use it?' -> 'What is the KPI dashboard and how do I use it?'<br>- 'KPI's' apostrophe misuse |
| 12920075 | How to edit a KPI? | P2 | 2 | - Step 3 has no screenshot (pencil icon / Create KPI window) |
| 12920091 | How to view data in a KPI ? | P2 | 4 | - 'type or chart' typo<br>- Title spacing 'KPI ?' |

### Release Notes (6)

| Intercom ID | Title | Priority | Imgs | Fixes needed |
|---|---|---|---|---|
| 12053058 | September 13, 2025 (Major Release) | P1 | 0 | - INTERNAL NOTE LEAKED: 'Monthly Pillar Training Summary ... - Pending / Under testing' visible to customers - remove or confirm shipped<br>- Link 'assign courses to roles' to LMS assign article |
| 12565743 | February 28, 2026 (Major Release) | P1 | 0 | - WRONG version in description: 'Version: 2025.1.5.1' duplicates the Oct 25, 2025 release (should be 2026.x)<br>- 0 screenshots (Gantt, delay tracking would benefit)<br>- Add links to Gantt/Delay/labels articles once published |
| 12052734 | July 12, 2025  (Major Release) | P2 | 0 | - Title has double space 'July 12, 2025  (Major Release)'<br>- Mixed H3/H2 heading hierarchy<br>- 'Original Level non-editable' later reversed in Sep 13 release - add note<br>- Trailing zero-width paragraph |
| 12053045 | July 27, 2025 (Patch Release) | P2 | 0 | - Out of chronological order in collection (Patch Jul 27 listed after Jul 12) - verify ordering<br>- Link Floor Plan / Tag Type drafts once published |
| 12565741 | October 25, 2025 (Minor Release) | P2 | 0 | - Vague bug-fix line 'Resolved several issues related to KPI tracking' - add specifics<br>- Link RICE, Role/Asset scheduling to articles |
| 14568481 | March 30, 2026 (Major Release) | P2 | 4 | - Clean. Add links from each feature bullet to the relevant help article (Create with AI, Revised Due Date, cross-module creation from DSW) |
