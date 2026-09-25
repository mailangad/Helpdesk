# Help Center Article Backlog

Every article below comes from gaps found in the Intercom Help Center, 105 recent support tickets, and the last 100 Apollo calls (7/28–9/25/2026). The draft outlines describe what LeanSuite staff showed customers on those calls.

**Button and screen names are as spoken on calls. Verify each one in the product before publishing.**

- `(verify)` = details were inconsistent across calls.
- `(coming)` = promised on a call but not yet shipped.

Each article lists its priority, whether it is **NEW** or an **UPDATE**, and the calls or tickets that show demand.

---

## Collection: Getting Started & Account (NEW collection)

### 1. Logging in to LeanSuite: P0, NEW
_Demand: about 30 Intercom tickets; Quick Connect 8/7; Watershed 9/11; Plastivaloire 8/13_
- Web address (theleansuite.app) and mobile apps.
- You can log in with an email address, a username, or an Employee ID. Email is not required for shop-floor users.
- First login uses a temporary password and forces a password change.
- If you belong to several facilities, you may have more than one account. Check which email or username you were set up with. (Pafco and Watershed ran into this.)
- Troubleshooting:
  - "Unauthorized exception – incorrect username or password"
  - "An error occurred while processing your request"
  - The reset Submit button doesn't appear when the password contains certain special characters (verify)
  - Users who used to log in with an ID only are now asked for a password
  - Session or token expiry: go back to the Dashboard and refresh
- **Publish internal article 4672769**. Every how-to article's "Step 1: log in" links to it.

### 2. Resetting or changing your password: P0, NEW
- Forgot password: enter your email, receive a code, then enter the **Verification code** in the field at the top of the form, next to the email field. Customers missed this field. Then set a new password.
- Change your password: click your name (top right) → **Personal settings → Password**.
- Admin reset: gear → Admin → User Management → reset. The user receives a temporary password.
- If you have no email address, ask your admin to reset your password.

### 3. Getting access to your company's workspace: P0, NEW
_Tickets: 215475584879887, 215475587001838, 215475097065173_
- Do **not** use the public "Start free" sign-up to join your company. That creates a separate new facility. (Daikin 7/28 and MentorGo 9/18 both did this.)
- Ask your site admin to add you.
- Moving to another facility: use **Request Transfer**, which an admin approves.
- New customers: only one person signs up with the sign-up link and becomes Admin. That person adds everyone else. Modules show as locked until LeanSuite enables them.

### 4. Finding your way around: P1, NEW
- The waffle (hamburger) icon next to the logo jumps between modules.
- Facility switcher (top left).
- Home dashboard tabs: **Assigned to me / Approvals / Upcoming (next 7 days) / Overdue / Worked on**.
- Notification bell.
- Gear menu, visible to admins only.
- Grayed-out tiles are modules that aren't licensed or enabled (for example, Time & Motion Study).
- Accept the "new version available" prompt after releases.

### 5. Language preferences: P2, NEW
- Click your name → **Language Preferences**. English, Spanish and French are confirmed. Chinese is not available.
- Turn off your browser's automatic translation because it conflicts with the app.
- Inline translation covers LMS courses, quizzes and suggestions. A Translate button appears on a suggestion.
- AI SOPs: ask for a language when you generate, for example "build this SOP in Spanish".
- Speech-to-text does not support Spanish yet.

### 6. Notifications and reminders: P1, NEW
- Email and push preferences, and the bell icon.
- Due-date reminders are sent 1 day before and 1 day after the due date.
- DSW sends an email 30 minutes before a scheduled item.
- @mentions send email.
- Escalation emails.
- Calendar sync with Google and Outlook (verify: one call said Outlook is coming, another said it is available).
- Only an overdue notification exists for LMS expiry. The 30/60/90-day reminders were requested but aren't built.

### 7. Using LeanSuite on mobile, shared tablets and kiosks: P1, NEW
- Install the iOS or Android app. Log in, including with SSO; SSO in the app needs the latest version.
- Scan asset QR codes to create a tag with the location pre-filled. Scan SOP QR codes to play step videos (requires login).
- Voice-to-text and the AI writing clean-up.
- Shop floor without phones: use shared tablets or kiosks, with Employee ID login.
- Take checklist photos in the app.

---

## Collection: Administration (NEW collection)

### 8. Adding and managing users: P0, NEW
_Demand: Hartmann 8/10, 9/3, 9/18, 9/25; BASF 8/12; Sulzer 8/19; Quick Connect 8/7; Daikin QL 8/11; 7 tickets_
1. Choose the facility with the facility switcher.
2. Go to Gear → **Admin Settings → User Management → Add User**.
3. Enter first and last name, and an email or Employee ID. Job title, manager, shift and cost center are optional.
4. The **Is Workspace User** checkbox gives access to several facilities.
   - A workspace user with no facility selected can see everything but can't act.
   - To add someone to a single facility, leave the box unticked and add them from inside that facility.
5. Deactivate leavers by setting their **status to Inactive**. Don't delete them.
6. Admins can change a user's email or job title later.
7. Renaming a facility is done by LeanSuite support, not by admins.

### 9. Bulk uploading users: P0, NEW
1. Gear → Admin → User Management → **Excel → Download User Upload Template**.
2. Required columns: **Employee ID** and **Username**. The username can be the same as the Employee ID. Email is optional.
   - Other columns: first name, last name, job title, status.
   - An ID of 6 or more characters is recommended. Placeholder IDs cause errors.
3. Upload, then **Assign fields** (map the columns), then **Review data**, then Next.
4. **Export Users** gives you the current list. Edit it and re-upload to update existing users (for example, marking them inactive) and add new ones.
5. Watch out for:
   - Uploading the same new-user file twice creates duplicates. Delete them in User Management.
   - Upload hourly staff and salaried staff as separate files if they come from different sources.
   - Use this one entry point only. Another "Upload bulk user" path failed for one customer (Hartmann 9/18).

### 10. Roles and permissions: P0, NEW
- Gear → Admin → **Roles → Create**. Name the role and toggle granular permissions per module and action (view, create, approve, manage users, and so on).
- The **LeanSuite Administrator** role has every permission.
- There are no fixed access "levels"; you build roles for each job, such as Quality Supervisor or CI Engineer.
- **After changing someone's role, they must log out and log back in.** This came up on 6+ calls.
- Roles are used as:
  - assignees for DSW schedules, SOP sign-off, document approval and course assignment
  - "who can move" in workflow transitions
  - KPI visibility
- Roles are not skills. Secondary qualifications such as forklift or labeler are **skills**; see the Skills Matrix articles.
- The default "no role" permission covers most frontline users.

### 11. Facilities, workspace and asset hierarchy: P0, NEW
_Tickets: 215475472293477, 215475776491950; calls: Luis 9/2, Daikin 8/25, Simona 9/10, LeanCreator 9/16_
- A workspace is the company. Facilities are data boundaries inside it.
  - Templates, courses and dashboards must be shared to other facilities before they appear there.
  - A corporate or procurement team can be its own facility.
- Gear → **Admin Settings → Asset Management → Add**. The hierarchy is **Department/Area → Line → Workstation → Asset**, up to 4 levels. An asset number is required for assets.
- New values appear straight away in the Kaizen, Suggestion, Tag, Lean Creator and DSW dropdowns.
- Bulk upload goes through LeanSuite (send an Excel file).
- Reorganizing: old values are soft-deleted. They are marked inactive and stay on historic records, but are hidden from new ones.
- **Generate QR codes** for departments, lines and assets from Asset Management.
- Rename fields (for example, Department → Location) and hide unlicensed modules.

### 12. Setting up SSO (for IT admins): P0, NEW
_Demand: SSO sessions 7/28, 7/30; Tomball 8/7, 8/28; Donaldson; Jennie 9/11_
- Supported identity providers: Microsoft Entra ID / Azure AD (SAML) and Google. ADP was said to be supported (verify).
- **Required claims spec.** IT asked "just tell me what to put in here":
  - email
  - username mapped so it matches the LeanSuite username (for example **user.mailnickname**)
  - **phone_number**: required by the auth provider. Fill it with a constant using a claim transformation; it isn't stored.
  - gender (a constant)
  - Use full URI claim names.
- Exchange the Federation Metadata XML with LeanSuite. **Re-send the metadata after any claim change.**
- Troubleshooting:
  - "Invalid phone number format"
  - Username arrives as an opaque ID
  - Test in a separate browser
- Mobile app SSO needs the latest app version.
- Don't bulk-create users until SSO is finalized.

### 13. Microsoft/SharePoint connection for KPI data: P1, NEW
- Allow pop-ups for theleansuite.app. The pop-up blocker stops the Microsoft sign-in window.
- Your Microsoft 365 admin must approve the **"Lean connector"** consent request.
- File-location rules are covered in KPI article 33.

---

## Collection: Lean Creator (UPDATE and extend; published intro missing)

### 14. What is Lean Creator? Admin builder vs Daily Standard Work: P0, finish draft 12745936
- Admins build audits, checklists, inspections, quizzes, surveys, SOPs, OPLs, assessments and Kaizen section templates in **Lean Creator**. Operators run the assigned items in **Daily Standard Work**. Customers repeatedly couldn't find "the end-user side".
- The 9/19–20 release made Lean Creator the admin hub:
  - AI drafts are listed at the top.
  - Each template row opens **Build / Submissions / Reporting**.
  - Marketplace and Time & Motion now sit in Lean Creator's navigation.
  - Schedules can be created from the template screen (verify whether this is live).

### 15. Create with AI: which mode to use: P0, NEW
_Demand: 25+ calls_
| Mode | Input | Output |
|---|---|---|
| **Video SOP** | Video (narration helps; silent video also works). Recommended ≤ 10–15 min for SOPs. | SOP number, title, version, purpose, scope, PPE, tools, materials, warnings, and steps with frames |
| **OPL** | **Images only** (before and after; order them in your prompt), or a short video | One-point lesson with auto-added acknowledgement questions |
| **Form** | A prompt (for example "5S audit for fab shop"), or an uploaded form or procedure | Audit, checklist, LPA, Gemba walk or safety inspection with rules |
| **Combine Docs** | Several SOPs or manuals | One consolidated procedure. A custom output template isn't available yet. |
| **Assessment** | A prompt | On-the-job skills assessment linked to the Skills Matrix |

- Upload **PDF or images**. Excel fails when a file has several sheets; Word and PowerPoint work poorly. Convert them to PDF.
- Long pasted text times out. Instead:
  - attach it as a PDF
  - start a **new** AI session
  - use a short prompt, and tell the AI to skip images
- Video and documents can't be combined in one run yet.
- You can refine the result by chatting, for example "add a CTQ to step 6" or "it's a rear window hinge, not a PCB".
- Known errors:
  - "finish reason = stop": go back and retry.
  - Generation times out on a brand-new facility.
  - .mov files may not produce QR codes (verify).

### 16. Creating an SOP from a video: P0, NEW
1. Lean Creator → **Create with AI → Video SOP** → click the attach icon (first icon on the left) → choose the video → add an optional prompt, including the language.
2. Processing takes about 3 minutes per minute of video. Large files are compressed automatically.
3. Review the output. The **Preview** tab shows the phone or tablet layout; the **SOP** tab shows the document layout.
4. Edit each section with the pencil icon. Manual edits in Preview appear in the SOP view only after you **Save**. Chat edits apply immediately.
5. Change a step's image with **Change** (frame picker). Uploading your own image isn't available yet.
6. **Per-step QR codes**: scanning one plays that step's clip in the LeanSuite app after login. Unauthenticated users see nothing.
7. Printing: page 1 holds purpose and scope; the procedure always starts on page 2.

### 17. SOP and template lifecycle: AI draft → Draft → Published: P0, NEW
_Demand: Pafco 7/28, 8/6, 8/13, 8/20, 9/1; Watershed 8/10; BASF 8/12_
- **AI drafts are visible only to their creator.** They are listed at the top of the page. Save the draft to make it available to others.
- The editing tools differ at each stage:
  - AI draft: pencil icons and image swap.
  - Saved draft: pencil editing (coming); image swap from frames isn't available.
  - Published: an AI edit button (tone, fix errors) → Save & Apply.
- Save: name, **labels** (type the label, then click Add; they work like hashtags), pillar, template type (SOP / Other / Kaizen…), and **visibility**:
  - **Private**: this facility (the default)
  - **Workspace**: all of your company's facilities
  - **Public**: published to the Marketplace for other companies. Never choose this for internal SOPs.
- **Start** begins the electronic-signature workflow. It is not a preview. Status chips such as "Publishing" are not buttons.
- The three-dot menu has Assign and Delete. Download is available from edit mode; Print and Download in the menu are coming.

### 18. Publishing, assigning and collecting sign-off: P0, NEW
_Demand: Hartmann 9/18; Pafco 8/6; Daikin 7/28; Jennie 9/11_
1. Optionally add an **acknowledgement or signature** question and comprehension questions.
2. **Save & Publish**. You are prompted to assign it.
3. Assign to users, a role, a team or job function, or an asset.
   - For a one-time read-and-sign, set the frequency to one occurrence ("do now").
4. The assignee sees it on their Dashboard under **Assigned to me / Upcoming** → **Start**. They must open the document before the signature works → answer → **Submit**. The Submit button is at the top of the screen; the download icon is not Submit.
5. Track completion:
   - Teams view: Pending feedback → Signed
   - Training Tracker
   - DSW → Facility Activities → **Submitted**, which shows start and end time → View report
6. Pass/Fail questions on instructor-led sign-offs should be answered by the instructor, not the trainee.

### 19. Building a checklist or audit manually: P1, UPDATE of 12919955, 12921679 and 12919960
- Pages vs sections: one form can have several pages, each with several sections.
- The left pane is the question list; the right pane is a live phone preview. Drag the six-dot handle to reorder questions.
- Question types:
  - True/False
  - Multiple choice
  - Number
  - Slider/percentage (with steps)
  - Star rating
  - Text
  - Date/time
  - Image
  - **Visual Instruction**: an image with instructions. Save the image to a file first; pasting doesn't work.
  - **User** and **Department/Line/Workstation/Shift**: dropdowns fed by the lists in Admin
  - **Shift** (verify)
- **Response properties**:
  - Number: min, max and default. There is no tolerance (≥ / ≤) option.
  - **Mark this response as flagged/critical**. On True/False this was missing at one point (verify).
  - **Enable scoring**.
- No name or date fields are needed; the submitter and date are captured automatically.
- Save & Publish, and choose the language.
- Share a template to other facilities by editing it and sharing to the workspace.

### 20. Rules, required evidence and scoring: P0, NEW
- **Add rule**: condition (for example "is False", "> 22.3") → action:
  - ask a follow-up question
  - **Require evidence** (photo and comment)
  - flag
  - start an F-Tag, Suggestion or Kaizen
  - notify someone
- A question can have several rules.
- Use Require Evidence on critical steps to stop pencil-whipping.
- **Audit scoring** (released 9/6): points per answer, a total ("out of 25"), and a **pass/fail threshold**.
  - Coming: score-trend reporting and AI audit summaries.
- A critical answer that starts a Kaizen needs a Kaizen project type and methodology configured first (see article 36).

### 21. Template Marketplace: P1, finish DSW draft 12920999
- Lean Creator → **Marketplace** (left nav; refresh the page if it isn't visible) → **Preview** → **Use this template** clones it into **My Templates** → edit it, add rules, and schedule it.
- Available templates include: 5S, Gemba Walk, Safety Gemba Walk, Kamishibai, Forklift Inspection, Industrial Safety, Safety Observation, Leadership HSE, Risk Assessment, LOTO, and Video SOPs with comprehension questions.
- Your templates stay private unless you publish them as Public.
- There are no LMS courses in the Marketplace yet.

### 22. Custom Kaizen sections built in Lean Creator: P1, NEW
- Create a template with **Template Type = Kaizen**. For example "5 Questions for Zero Defect" or a 5W2H form.
- Set the pillar and visibility (use Workspace to push it to all facilities).
- It then appears in Kaizen Settings → Add template, and under the More sections of a Kaizen.

### 23. Lean Creator reports and submissions: P1, NEW
- Template row → **Submissions** / **Reporting**. Flagged and critical responses appear there.
- A grid of all submissions across templates is not available yet.

---

## Collection: Daily Standard Work (UPDATE)

### 24. Assigning and scheduling a template: P0, rewrite 12920991 (field table empty)
1. Lean Creator → published template → **⋮ → Assign**.
2. Title the assignment, for example "Daily Check – Line 1" or "Building 1 5S Weekly".
3. Choose who it is assigned to:
   - **User**: each user must complete it.
   - **Role**: ⚠️ **marked complete for everyone once ONE member completes it**. To make each person accountable, assign individual users.
   - **Asset** (Department → Line → Workstation → Asset): history is kept on the asset. Use this for CILR and machine checks. The asset list must already exist in Admin.
4. Frequency works like a recurring meeting (daily; weekly on a chosen day; every N weeks; monthly on the first Sunday), plus an end date or Never. Add an estimated duration.
5. Submit. The item appears on the assignee's **Calendar**. An email reminder is sent 30 minutes before it's due. Overdue items show **red**.
6. Rotating auditors: create one schedule per area.
7. To reassign, use ⋮ → Assign.

### 25. Completing assigned work: P0, finish draft 12920887
- Open it from the Dashboard or Calendar → **Start** → answer and attach photos → **Submit**.
- Use the web app or the mobile app. Views: Calendar, Grid, Kanban (In progress / Upcoming / Overdue / Done) and Overview. Refresh if a view doesn't render.

### 26. Viewing submitted reports and DSW Reports: P1, UPDATE 12920896
- **Submitted** tab → Grid → **View Report** (click a photo to open it) → **Download report**. Photos are not included in the download yet.
- Filters: My activities vs **Facility activities** (needs permission). Date, label and template type.
- DSW **Reports** (left nav):
  - completed vs pending
  - flagged items over time
  - submissions by user
  - flagged-questions list
- There is no monthly roll-up. Build one in Lean Studio.

### 27. My Templates: P2, finish draft 12920914

---

## Collection: AI Time & Motion Study (NEW collection, P0; about 30 calls)

### 28. What is AI Time & Motion Study?: P0
- One video gives you:
  - value-added / semi-value-added / non-value-added time per operator (plus Waiting and Unobserved/Off-station)
  - Elements
  - Operator Utilization
  - Yamazumi and takt
  - Findings (ECRS: eliminate, combine, rearrange, simplify) with seconds and minutes saved
  - Scenarios
  - Compare
- It is a separately licensed module. The tile is grayed out until it is enabled.
- The AI gets you about 80% of the way; human review is expected.
- It lives inside Lean Creator's navigation (since 9/19–20).

### 29. Recording video for a time study (camera guide): P0
- **Overhead or near-overhead**, close to the work, **landscape**, and not too high: operators must stay large in frame.
- Lighting: avoid backlight.
- Avoid blind spots and overlapping camera angles, which double-count work.
- Operators wear **large, high-contrast numbers on front and back**, or coloured vests. Welding jackets hide numbers.
- Consistent shirts, limited foot traffic, an optional 10-second roll call facing the camera, and a date/time overlay.
- Use one camera per workstation or section, and start multi-camera recordings at about the same time.
- GoPros overheat, so use fans. Mount with tripods or magnets.
- Operators narrating to the camera get flagged as waste.

### 30. Uploading a video and starting a study: P0
1. Time & Motion → **Add new study** → name it → choose the **shot type** (wide/open area, close-up/workstation, enclosed fixture).
   - Optionally enter **takt time** and a **Process label**. Use exactly the same label for the same process, because certified studies with that label become AI reference.
   - Add **process notes**: on a new process, describe which steps are value-added and which are not.
2. Upload limits:
   - Up to about **2 hours** per study (verify; one call said 4 hours).
   - Up to about **11 GB** (verify; other calls said 3–4 GB).
   - Files over 1 GB compress automatically, taking about 5–10 minutes. You can keep working, and you get an email when processing is done.
   - GoPro Media Cloud joined clips work.
   - Several cameras in one study isn't supported: upload one study per camera or segment, then use **Compare**.
3. HD processing is the default and is slower.

### 31. Reviewing operators: P0
- The AI detects everyone in the video. **Uncheck** passers-by and sweepers.
- **Rename** operators; use the same names across cameras.
- Read the AI appearance descriptions to spot duplicates.
- **Merge** duplicates, or **Delete → Reassign elements to** another operator. Tracked time is not lost.
- A live progress indicator shows chunk "x of y".

### 32. Reviewing and editing results, and certifying: P0
- Timeline colours: green = VA; semi-VA; red = NVA; blue = Waiting; **grey/shadowed = skipped, not counted**. Customers deleted grey segments without knowing this.
- **Double-click** a bar to edit its start/end, description or classification.
- **Split** or **join** elements, **Add element**, copy and paste, reassign an element to another operator.
- Adding "Off station" manually isn't available yet.
- Click **Recertify** to recompute VA% after edits.
- **Certify**:
  - Certified ("golden") studies become the AI's reference and vocabulary for later runs of that process.
  - For long videos, certify at a high level by correcting VA/NVA labels; don't re-time everything.
  - Certify 10–15 minute segments for each new process type.
  - Re-run older videos to benefit from new certifications.
- Operator Utilization counts only the time the operator is in frame. It is calculated on VA only (verify: a customer saw 129% and 17%).
- If a study won't load, go back to Dashboard → Lean Creator → Time Study and refresh.
- Delete trial studies with the icon on the dashboard row.

### 33. Findings, scenarios and converting to Kaizen: P1
- ECRS findings with seconds saved → **convert to a Kaizen**.
- Save Scenario 1 and 2 → **Compare** → minutes and $ saved, based on a configurable hourly rate.

### 34. Comparing studies: P1
- Select studies → **Compare elements**.
  - Timeline by operator or full study.
  - **Fit each study** vs **Shared clock**.
  - Click a legend item to filter.
- **Save comparison** (top right) saves it to the dashboard, where you can rename it.
- Multi-camera: operator names must match. Use the discrepancy bar, Open row and **Review camera movements** (verify whether this is still a prototype).

---

## Collection: KPI (REWRITE; 7 articles from Nov 2025)

### 35. KPI concepts: Indicators vs KPIs, targets, trees: P0
- **Indicator** = lowest level (for example a workstation). **KPI** = a roll-up.
- **KPI → Indicators** is where KPIs are defined.
- Targets:
  - The **global target** is set on the KPI.
  - The target on an individual entry is an optional **override for that day**. Leave it blank to use the global target. Overrides can be locked to certain users.
  - Global vs **month-by-month** targets.
- **KPI trees** roll up department → plant → workspace.
  - Visualize **leaf** KPIs, not tree KPIs.
  - A tree averages its children, so calculate ratios such as OEE at leaf level.
- Cross-plant roll-up: plants share KPIs with a "global" facility, which builds a parent KPI. Plants don't see each other's KPIs.
- One KPI with categories, or separate KPIs? Separate KPIs are recommended, combined on one Lean Studio chart.
- Pillars are set up by LeanSuite for now; an admin UI is coming.

### 36. Creating a KPI (wizard): P0, UPDATE 12920022
1. Pillar, description, unit, target, direction ("lower is better"), aggregation (sum or average), optional **RAG ranges**.
   - Optional **Advanced Details → Select options** builds a formula from other KPIs, for example A ÷ B.
   - Enable **Pareto for this KPI** and add categories (downtime reasons, shifts).
   - ⚠️ Touching the "total" dropdown silently makes the KPI a calculated KPI.
2. **Save & Next → Frequency**: repeat every N days or weeks on chosen weekdays.
   - The start and end **time** is the daily task window: it drives the calendar entry and the reminder email.
   - The end **date** (or Never) is the KPI's lifetime.
3. **Save & Next → Share** with yourself, the facility, people or roles. Assignees get reminders. Visibility rules can make a KPI private (for example finance).
4. **Save & Next → Source**: Manual / LeanSuite module data / Google Sheet / Excel on OneDrive or SharePoint.
5. **Publish**. **View all** shows the next review date.

### 37. Entering KPI values: P0, UPDATE 12920026
- **Input value**:
  - **Single entry**: date, value, category, optional target override, comment.
  - **Bulk**: set a date range with the two date pickers (top right) and fill in the grid. Use this to backfill.
- **Upload file**: Excel or CSV → map sheet, date, actual, optional target and category → upload.
  - Remove empty rows and extra columns first; the error message is unclear.
- Enter values from a Lean Studio board: click a date → **Add KPI**.

### 38. Connecting a KPI to Excel (OneDrive/SharePoint) or Google Sheets: P0, NEW
- Source → Microsoft → sign in (allow pop-ups; your admin must consent to the Lean connector) → search for the file by name.
- **Only the OneDrive root folder is searched.** Shared drives are not supported yet.
- Select the sheet or table → map **Date** and **Actuals** → set the frequency (time, time zone, repeat, end date).
- **The file must keep exactly the same name.**
  - LeanSuite reads that one file and adds only new dates.
  - Daily exports with a date suffix must be renamed to the fixed name.
- One file can feed several KPIs.
- Machine or historian data: through the OEM API or a daily file drop to SharePoint.

### 39. Viewing KPI data: P1, UPDATE 12920091
- **View KPI**: history by week or month. Switch **Bar → Pareto + Trend** or Pie. Uncategorized values appear separately.
- Linked Kaizens, Excel export, and Recent trends over 1 year.

---

## Collection: Lean Studio (WRITE THE 12 EMPTY DRAFTS, P0)

### 40. What is Lean Studio? (draft 13311666)
- Live dashboards and tier boards built from Kaizen, KPI, DSW/Lean Creator, Tags and LMS data. Use them in huddles instead of exporting PDFs; share the board link.
- Must be enabled; it shows "locked" if not licensed.

### 41. Types of dashboards (draft 13311679)
- **Grid/fixed board** or **Freeform**, chosen when you create the dashboard.
- Non-admins see a view-only board.

### 42. Creating a dashboard, Grid and Freeform (drafts 13311870, 13311974, 13311987)

### 43. Widgets (drafts 13312033, 13312050, 13312040)
- Add widget → chart type → **Module** (Kaizen / KPI / DSW / Tags) → report → filters (facilities, date range YTD/QTD/MTD, status, e.g. Type = DMAIC) → Save & Next → name it.
- A chart type that doesn't match the report fails.
- Types:
  - column, line, single value, table
  - Kanban of Kaizens
  - heat map, including a **custom heat map** (your own letter, title and colours) further down the list
  - pie
  - embeds (Power BI, Looker Studio)
- Legend and tooltip toggles work only on line and bar charts.

### 44. Working on a board during a huddle
- Click a date → **Add KPI**.
- **Create tag** from a red tile, with fields you can trim and department auto-assign.
- **Comments icon**: @mentions send email; attach files and links.
- **Meeting timer**; escalate items between tier boards.

### 45. Freeform canvas and templates (NEW; released about 9/6)
- **Edit Layout** → sticky notes, text, shapes and arrows alongside data widgets.
- About 30 templates: Problem Solving, Process & Flow, Daily Management, Improvement, Strategy & Teams. Examples: Fishbone, 5 Whys, VSM, Kanban, Daily Huddle, impact/effort, announcement.
- **Save as template**, or select shapes with Shift+click → **Group** → **My Templates**, shared across the workspace.
  - Donaldson 9/14 couldn't get this to work live, and LeanSuite had to email the steps.

### 46. Editing layout and details, activity, export (drafts 13312017, 13311893, 13312024, 13312027)
- Custom date range.
- Description limit: 400 characters (600 was promised for 9/20).
- **Clone** a dashboard to other facilities (the "standard facility" pattern).
  - Verify: some calls said cloning is available, others said it was coming.

---

## Collection: Kaizen & EWO (UPDATE + NEW)

### 47. Setting up Kaizen: the required order: P0, NEW
_Error "no workflow created" hit on MentorGo 9/21 and Donaldson 9/14_
1. Gear → **Kaizen Settings** (log out and back in if it's missing after you were given permission).
2. **Add Project Type**: pick the module **Kaizen** or **EWO** → name it (Quick Win, JDI, DMAIC, Downtime Report, TWTTP…).
3. **Add Methodology** → Create → add phases (Basic Info; D-M-A-I-C; P-D-C-A).
   - A methodology is required before the type appears on the create form.
   - It stays a mandatory field even when there is only one.
4. **Add template** per phase → choose the sections that open automatically (Problem Description, 5W1H, 5 Whys, Action Plan…) → Save and apply.
5. Edit the pencil → **Total days**, or the **Days by phase** toggle. Due dates are set automatically and feed workload; delays trigger email and a dashboard flag.
6. **Create a Workflow** for the module and type (article 48).
7. Presentation settings: logo size, fonts, phase colours (Phase 1 = Plan…). Refresh presentation mode after changing them.
- Terms: Focused vs Systematic; project type vs methodology vs phase vs section.

### 48. Workflow builder: statuses, transitions and rules: P0, NEW
1. Waffle → **Workflow → Add New** → module (Kaizen / EWO / Tags) + project type → name → optional workspace-level (all facilities) → Submit.
2. Statuses: To Do (grey), In Progress (yellow), Done (green) groups.
   - Rename a status by clicking its chip.
   - **Add** statuses to a group.
   - Choose whether each state allows edits or locks the record.
3. **Transition** → From → To → name it. Add send-back transitions (Pending Approval → Proposal). Delete any you don't need.
4. **Add rule** on the transition arrow. There are three parts:
   - **Who** can move it (required, or items get stuck): submitter / reporter / assignee / member, named users, or a **role**.
   - **When**: validations such as due date filled, KPI filled, or hard savings > 0.
   - **What happens**: update a field (for example Saving status → Active / Complete / Inactive, which feeds the glide path) and send notifications.
5. **Preferences**: conditions (pillar, type) auto-select the workflow. Users never pick a workflow.
6. **Module transition**: from Done, convert an EWO or Tag into a Kaizen. The original record is kept.
7. See a project's workflow with the workflow icon next to Attach.
- Worked example: the Quick Win flow built on the Kaizen & EWO Setup call (9/23).

### 49. Creating a Kaizen and simplifying the form: P1, UPDATE 12123466 and 12123465
- Required fields: Title, Project Lead, Project Type, Methodology.
- **Show fields**: admins hide or require fields.
- **More** → add sections: Result/Benefit (hard vs soft savings, cost), Team, Targets, KPIs, Tools/Skills, 5Y, 5W1H, 4M, Action Plan.

### 50. Kaizen project toolbar: P1, NEW
- **Present**: an auto-built PDCA slide deck (arrow keys to move). The format is managed centrally; branding is in Presentation settings.
- **PDF** export.
- **RCA Agent → Run RCA Analysis**: produces 5 Whys, 4M1D and fishbone from the fields, **Link Docs**, uploaded files and Documents → then push to the Action Plan.
- **Link Docs**: link another LeanSuite record (for example an EWO) or an external link.
- Comments with @mention.
- Attachments: photos may need a refresh to show in Present mode.

### 51. Action plans, Gantt and portfolio: P1, NEW
- More → **Action Plan** → Manage actions → Add new (corrective or preventive, assignee, deadline) → refresh (there is no live refresh).
- Kaizen Dashboard → **Gantt** view; delay tracking (days delayed, slippage); **Revised Due Date** (non-admins need a reason code); Delay Management export.

### 52. Kaizen dashboard: saved views, pinning, columns, export: P1, UPDATE 12123562 and 12123549
- Filters → **Save view** → **pin** it to make it the default. Several views are allowed; one pin per dashboard.
  - Known bug: the pin doesn't persist across modules or after a refresh.
- Column picker (left of refresh) to rearrange or hide columns.
- Export columns: description capped (200 → 400 characters), tools used, attachments, expansions.
- Reports: Benefit & Cost, Workload.
- Why report counts differ from list counts: reports have a **default YTD "Created on" filter**, and lists follow the facility switcher.

### 53. Workload management: P2, NEW
- Admin: working hours and days per user, overridable.
- Team hours per project. **View team details** shows who is overloaded.
- The team builder suggests people by skill and available hours.

### 54. EWO (Emergency Work Order): setup and use: P0, NEW
- **Setup**:
  - Kaizen Settings → project type with module **EWO** → methodology "Basic Info".
  - Template: Problem Description, Description of Repair, Root Cause Analysis, Action Plan, MTTR. **Tools** is added by default.
  - Workflow, for example Open Work Order → Pending RCA → Done.
  - **EWO Settings → Breakdown Types**.
- **Create**:
  - Title, type, methodology, assignee, line or workstation.
  - Show fields → **Breakdown start/end**, which auto-calculates downtime; breakdown type. Hide Saving status.
- **Quick view vs full view** (the arrow next to the ID).
- **Sections**:
  - Description of Repair: replacement vs adjustment, parts.
  - RCA category drill-down: insufficient strength / increased stress / natural deterioration. Drives the Pareto.
  - Pillar: options depend on earlier choices.
  - **Failure Curve Analysis**: infant mortality / random / wear-out.
  - 5W1H phenomena description, 5Y, Action Plan.
  - **MTTR**: initial wait, diagnostic, parts retrieval, repair.
  - Spare parts (verify NetSuite/SAP linking).
  - Trigger a Kaizen from an EWO.
- **Reports** (left nav): MTTR breakdown, open vs closed, by pillar, lost time by breakdown type, root cause.
- When to use EWO instead of a Lean Creator downtime checklist: EWO has dedicated downtime reports.
- Technician tip: trim the template to Team / Description / Root cause / Action.

### 55. Glossary for Kaizen and EWO fields: P1, NEW (EN + ES)
_Tickets asked about "Ahorro duro proyectado", "cesionario", "etiqueta", slippage, NCI, Sponsor vs Member_
- Hard, soft, virtual (and a fourth type, verify) savings; savings status Plan / Active / Complete / Inactive.
- Slippage and days delayed; revised due date.
- Project lead, sponsor, member, assignee.
- Focused vs Systematic; "Tools" = skills/tools used for gap planning.
- What an Action is (a sub-unit of a Kaizen); how Tag, EWO and Kaizen differ.
- Kaizen IDs: a converted suggestion keeps its own number, and the Kaizen gets its own sequence.
- Deletion policy for Kaizens (tickets asked; Fin said deletion isn't possible; verify).

---

## Collection: F-Tag / Issue Management (UPDATE)

### 56. Tag types and Tag Settings: P1, UPDATE 12125047
- Tag type create/edit/delete, with colours.
- Rename fields (for example Trade type → Issue category) and hide unused ones.
- Priorities (for example <24h / <48h); default-assignee rules by department or type.
- **Reassignment limit**: after N reassignments, reassignment locks and the manager is notified.
- One form for all tag types. Different fields per type are not possible; different workflows or tiers are.

### 57. Floor Plan: P1, finish draft 12882033
- Upload floor plans; tags cluster by location. Click a spot to start a tag with the area detected.
- Drag-and-drop pins; dot size.

### 58. Kanban board: P2, finish draft 12882047

### 59. Tier escalation: P1, NEW
- Configure Tier 1 ↔ 2 ↔ 3. Escalate with a comment; tier members get an email.
- Tier-2 queue: filter by Escalation status → save view → pin → share the view. Or use a Lean Studio tier board.
- **Pending verification**: an approver completes the tag.

### 60. QR codes and printing tags: P2, NEW

---

## Collection: Suggestions (UPDATE)

### 61. Points, rewards, leaderboard and prize catalog: P1, NEW
_Tickets: HDTLS-1227, 215475162269642, 215475893534047_
- Point rules: on submission, on approval or conversion to a project, and for financial impact.
- The "assign points?" pop-up on approval.
- Prize catalog redemption; leaderboard and Wall of Fame; campaign bonus points.
- Troubleshooting: missing points; not appearing on the leaderboard.

### 62. Suggestion statuses explained: P1, NEW
- Pending feedback: who it is waiting on.
- Pending implementation → mark complete or **Initiate Kaizen**.
- Inline approvers (for example finance); @mention for a soft approval.
- Troubleshooting: "approve does nothing"; adding a collaborator while the suggestion is pending.

### 63. Lean AI in Suggestions: P2, UPDATE 12122771
- Rephrase and tone, speech-to-text, recommended status and priority, grouping similar ideas, translate.

### 64. RICE prioritization score: P2, NEW

### 65. Kiosk and shared-device submission: P2, NEW

---

## Collection: LMS & Skills Matrix (UPDATE)

### 66. Creating quizzes, courses and learning plans: P1, UPDATE 12125106, 12125113 and 12125087
- LMS → **Instructor Panel** → Create New: **build the quiz first**, then the course, then the learning plan.
- Quiz settings: time limit, question types (multiple choice, short answer = manual grading, true/false, drag and drop), no passing mark or "do not grade".
- Course settings:
  - code, categories, duration, completion window (**overdue** when missed)
  - **Public** (self-enrol) or **Private** (assigned; users can request enrolment → Enrollment requests)
  - max attempts, lockout, **Refresher** auto-assign every year
  - prerequisites
- Lectures can hold SOPs, PDFs, video and PowerPoint.
- (coming) AI course builder and an EHS course library.

### 67. In-class (instructor-led) sessions: P1, NEW
- Location, instructor, seats, waitlist, auto-enrol, and an **attendance code** trainees enter, which acts as the e-signature.
- The instructor marks trainees present or absent. Planned vs actual instructor hours.

### 68. Assigning courses to roles and sharing across facilities: P1, NEW
- Assign a course or learning plan to a **role** (for example onboarding).
- **Course Share** → pick facilities; with **Private access**, the course is visible there but only assigned people can open it.

### 69. Linking courses to skill levels: P1, NEW
- Link a course to a skill level: passing the course upgrades the Skills Matrix and radar chart automatically.
- Level criteria examples:
  - 1→2: pass a course
  - 2→3 and 3→4: apply the skill N times
  - 4→5: train-the-trainer
- On-the-job assessments on an iPad, built with Lean Creator AI; the assessor can start one from a QR code.

### 70. Recording manual or external training: P1, NEW
- Pick the user and course, then enter hours. Where to do this depends on role permissions (verify release status).

### 71. Skills Matrix model: teams, skills, procedures and qualifications: P1, UPDATE 12124806 and 12124661
- A team or job profile, for example "Dry Press Operator" → members → required skills and levels, plus required SOPs, trainings and courses.
- **Tool Management** is the master skill list; skills can be bulk-added.
- Signing off a procedure document grants skills, and the job cover matrix then shows who is qualified.
- Roles vs skills (see article 10).

### 72. Reading the radar chart and gap planning: P1, UPDATE 12124763
_Fin gave a wrong answer on a ticket about this_
- Required level vs current level; original (start of year) vs this year's gain; the "as of" date; editing the original level.
- Integrated gap planning: Kaizens plus courses to close gaps.

### 73. User profile and training tracker: P2, UPDATE 12124812

### 74. LMS troubleshooting: "my catalog is empty": P2, NEW (tickets)

---

## Collection: Document Management (NEW)

### 75. Document Management basics: P1
- Home → **Documents → Add New** → folders (for example per line or workstation) → drag and drop files.
- Owner, **expiration/review date** with review emails, version history (only the latest is visible), role-based access, and no storage cap.
- Assign documents for sign-off: the user must open the document before signing.
- Link documents into Kaizens so the RCA Agent can use them.
- Known bug: the new-folder name field is hidden.

---

## Other

### 76. Best Practice adoption tracking: P2
- UPDATE 12124962 and write the missing "adopt/reject shared best practice" article it links to.

### 77. Cost Management updates: P2
- Saving Type filter, department and line savings targets, Import History manual vs API.

### 78. Public API and data export: P2, NEW
- API key and Swagger/Postman docs.
- Excel exports per module.

### 79. Security, data and AI FAQ: P2, NEW
- Data ownership; access for 30 days after cancellation.
- Private templates are never reused.
- AI models used (Gemini for Lean Creator and Time Study; OpenAI and Anthropic for the RCA Agent; verify before publishing) and whether AI can be turned off.
- SOC 2 Type 1, Azure hosting, US or EU data residency.

### 80. How to report a bug or request a feature: P1, NEW
- There is no in-app channel today. Use support@theleansuite.com or your CSM.

### 81. Release notes backfill: P0
- April–September 2026. Key items:
  - Lean Creator admin-hub redesign (9/19–20)
  - audit scoring (9/6)
  - Lean Studio freeform canvas and templates (about 9/6)
  - per-step SOP QR codes (about 9/12)
  - SOP print starts on page 2
  - frame picker
  - Private-by-default save
  - Time Study compression and email on completion, operator merge/rename/exclude, compare and save comparison
  - Kaizen presentation settings (logo, phase colours, savings type)
  - description limit 400
  - Documents module
  - Lean Studio custom date range
  - the Kaizen export columns
  - EWO module
- Also fix 12565743 and 12053058 (see REPORT.md).
