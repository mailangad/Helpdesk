# Final QA of the published Help Center

Date: 2026-09-26. Standard: `STYLE_GUIDE.md` plus the "ADDENDUM: callouts and spacing" of the style pass.

## Totals

| | Count |
|---|---|
| Articles in Intercom (list API) | 327 (326 published, 1 draft) |
| Published articles checked | 324 (12123178 and 12921679 skipped: known locked) |
| Titles and descriptions checked | 326 (all published) |
| Bodies checked with the Python checker on the last body sent in the style pass (verified equal to live on spot checks) | 205 |
| Bodies fetched live with `get_article` and checked | 119 |
| Articles updated in this pass | 43 (all backed up to `scratchpad/backups/<id>.final.html` first) |
| Images lost | 0 (every checked article has at least as many images as its pre-style backup) |

Note: the list API returned one article twice across pages and missed 12123133; a second listing with a different page size found it. Always de-duplicate when paging.

## Issues found and fixed

| Issue | Articles | IDs |
|---|---|---|
| "Skills Matrix" instead of "Skill Matrix" (text, link text, one description) | 14 | 12919966 (also description), 12919955, 17182753, 17183629, 17183626, 17183952, 17183949, 17183627, 12125106, 17183562, 17183557, 17183623, 12125124, 12125137 |
| Filler words ("just below/above/before", "just you", "just given", "just like", "simply") | 17 | 12123181, 17183337, 17182735, 12919960, 17182750, 12124971, 12123129, 12124969, 12920931, 12124943, 12124940, 12124937, 12124933, 12124836, 12123699, 12123704, 12123648 |
| Link text still using an old "How to …?" title | 11 | 12123154, 12123160, 12123131, 12123192, 12123133, 12123137, 17183180, 17183176, 12123549, 12123781, 17183948 |
| Heading directly followed by a heading | 1 | 12123695 (added a one-line intro under "What you can do") |

Only the flagged words were changed. State, parent, author and all images were left as they were. Updates were confirmed by re-fetching a sample (12919966, 17182753, 12123781).

## Checks with no findings

- Empty `<p>`, `<p>&nbsp;</p>`, empty list items or headings: none.
- Consecutive `<hr>`, or `<hr>` anywhere except before a final "Related articles": none.
- Links to app.intercom.com or atlassian.net, empty hrefs, links to unpublished articles: none.
- "Lean Suite", titles starting "How to", how-to titles ending in "?", "Next up" / "Next article", "Congratulations", "let's": none (except the locked 12921679).
- Note/Tip/Important/Warning lines outside a callout: none.
- Descriptions missing or over 140 characters: none (except the locked 12123178). Release Notes descriptions left as they are.
- Title Case titles such as "How To Add A New Tag": none.
- Lean Creator naming (owner request): no article calls Lean Creator "Document Management", "Leancreator", "Lean creator" or "Lean Creator (Document Management)". 17183946 correctly lists Document Management and Lean Creator as separate modules.

## Duplicates and overlaps (not unpublished)

Merge or redirect one of each pair:

| Keep (suggested) | Overlaps with | Topic |
|---|---|---|
| 17183950 What is the F-Tag module? | 12124990 About the F-Tag module | F-Tag intro |
| 17183949 Create a team and set required skills | 12124661 Create a new team | Create a Skill Matrix team |
| 17183176 Assign and schedule a template | 12920991 Assign a template to a user | DSW assignment |
| 17183948 Use the Kaizen Dashboard | 12123562 About the Kaizen Dashboard | Kaizen Dashboard |
| 17183337 Create a KPI step by step | 12920022 Create a KPI | KPI creation |
| 17183343 Enter KPI values | 12920026 Enter KPI data manually | KPI data entry |
| 12920931 Start a template or activity | 12920887 Start and submit an assigned activity | DSW activity start |
| 17183557 Create a Kaizen and add sections | 12123466 Create a Kaizen | Kaizen creation |
| 17183564 Configure tag types, fields and auto-assignment | 12124998 Configure the F-Tag module for your workspace | F-Tag setup |
| 17183182 Set up Kaizen project types, methodologies and templates | 12123208, 12123462, 12123471 | Kaizen setup (partial overlap; keep the task articles, link from 17183182) |
| 17183621 Build quizzes, courses and learning plans | 12125124 Use the Instructor Panel | Instructor workflow |
| 17183625 Assign courses to roles and share them | 12125099 Assign a course to a user | Course assignment (partial) |
| 12123715 Kaizen phase sections | 12123696 About Kaizen phases and sections | Phases and sections (partial) |
| 17183561 Manage action plans, timelines and delays | 12123761 About the Action Plan section | Action plans (partial) |

## Remaining items for a human

1. **Locked articles:** 12123178 (no description; title "What is the side window of a suggestion and its features?") and 12921679 (title "How to create Questions & Responses in the Lean Creator Window?", no description). Fix in the Intercom UI.
2. **UI label to confirm:** 12920876 lists the activity type "Assessment / Skills Matrix". Left as is because it may be the on-screen label; 12919955 and 12919960 use "Assessment/Skill Matrix". Confirm the label in the app and align.
3. **Borderline capitalization (UI names?):** "About the Team Detail View" (12124810), "View Course Analytics" (12125129), "About the Schedule Dashboard" (12920981), "About the LMS Dashboard" (12125143). Keep if these match the app.
4. **Negative feedback:** 12123781 "About the Expansion section" has 1 sad reaction and 1 conversation. Review the content.
5. **Back-to-back screenshots with no text between them** (addendum rule; needs captions or step text, not a mechanical fix): for example 12123707 (6 in a row), 12123755 (6), 12123754 (5), 12123836 (2), 12123509, 12123776, 12123781.
6. **Link text that still says "What is …?"** for renamed targets (for example "What is the Best Practice module?" in 12123637). Minor; update when the article is next edited.
7. **Release note 12565743** has no intro sentence. Release Notes were left as they are.
8. **Collections:** create "Document Management" (17183630) and "QA Matrix" (17185105) collections; both articles currently have no collection. Then apply the order in `COLLECTION_ORDER.md`.
9. **Draft 12960771** "Untitled public article" is empty. Delete it or fill it.
10. **Duplicates:** decide on the pairs above.
