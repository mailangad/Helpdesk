# Help Center update from customer calls (September 20 to October 26, 2026)

Date: 2026-10-27. Standard: `STYLE_GUIDE.md` (including the callout and spacing rules in §11). Every changed body was backed up to `scratchpad/backups/<id>.calls.html` before it was changed. Each update was re-fetched to confirm the save, the author, the state and an unchanged image count. The log is `scratchpad/calls_update_log.jsonl` (copy in `intercom-backups/calls_update_log.jsonl`).

Only features shown working in a customer's live instance (or already in the release notes) went into published articles. Features demoed as "coming in the next release" went into drafts or into this report. No customer names, company names or personal data were copied into articles.

Nothing was deleted, unpublished or moved. No authors were changed. Each edit was made under the shared lock (`lock(id,"calls")`), and images added by the screenshot agent were kept.

## Summary

| | Count |
|---|---|
| Calls in the date range (Apollo) | 77 (2026-09-21 to 2026-10-26) |
| Read in full (transcript) | 26 |
| Reviewed through AI insights (summary, questions, next steps) | 42 |
| No recording or transcript available | 6 (short single-participant meetings) |
| Excluded, not customer calls | 3 (2 public webinar sessions and 1 corporate call) |
| Release notes newer than the docs | None. The newest note is "Release highlights: April to September 2026" (17183634). |
| Articles updated | 16 |
| Articles created, published | 2 |
| Articles created, draft | 2 |
| Images lost | 0 |
| Links to drafts from published articles | 0 |

Most product detail came from the recurring time-study and KPI working sessions, two Kaizen/EWO setup sessions, LMS and Skill Matrix onboarding sessions, and the quality-audit (QMS) check-ins. The other calls were discovery, demo and pricing calls. They were scanned for product claims and customer questions.

## Findings and actions

| # | Finding (call date) | Live? | Action |
|---|---|---|---|
| 1 | AI Time & Motion Study has a **Processes** page (top right of Time & Motion Studies): **Add Processes**, **Edit steps**, **Add step**, value-added or non-value-added per step. New Study now has a **Processes** multi-select instead of the free-text process label (10/5, 10/9, 9/30). | Yes, used by the customer | **New** 17740576. **Updated** 17183329 (step and Important callout), 17183331 ("matched by process label" removed), 17183323 (workflow step). |
| 2 | **Recheck this window**: choose a window of up to 5 minutes and the operators, type instructions, then **Apply proposal** or **Keep current version** (9/28 demo, 9/30 and 10/2 in use). | Yes | **Updated** 17183331 (new section). |
| 3 | **Focus** button next to operator names in the timeline, with a list of activities below. The totals stay study-wide (10/2). | Yes | **Updated** 17183331. |
| 4 | Change the process an activity belongs to by double-clicking it in the timeline (10/5). | Yes | **Updated** 17183331 and 17740576. |
| 5 | Upload guidance: 4K files of 60 GB or more were too slow. 1080p (and 720p) gave good results. Split long recordings into parts. The local copy can be deleted after upload. No direct GoPro cloud import (10/9 to 10/23). | Yes (advice from the product team) | **Updated** 17183326 (new "File size and resolution" section). Also added tips for using a large digit only and checking memory card space. |
| 6 | Lean Creator **Submissions → Grid** view: every answer in one table, with attachments, comments, flags and scores; filters (flagged); double-click a row for the full report; a version dropdown for submissions on earlier versions (9/28 demo, 9/30 in use). | Yes | **New** 17740577. Linked from 12919894 and 17183180. |
| 7 | Editing and republishing a template creates a new version, and past submissions stay with their version. Customers asked how to change a question "for next time" (9/30, 10/12). | Yes | **Updated** 12919963 (Good to know). |
| 8 | On-demand forms (downtime log, troubleshooting log) are started from **DSW → My Templates** or with **Start** in Lean Creator. They don't need a schedule (10/5, 10/19). | Yes | **Updated** 12920931 (new section "Start a form on demand"). |
| 9 | First login: the button to save the new password stays disabled until the password includes a special character (10/21). | Yes | **Updated** 17182735 (first-login step) and 17182736 (troubleshooting rewritten). |
| 10 | Mobile app login asks for the workspace address (company.theleansuite.com) before SSO. One customer could log in on a phone but not on a tablet (10/23). The DSW Start button spun on mobile (10/5). | Yes | **Updated** 17183482 (workspace step and Troubleshooting) and 17182735. |
| 11 | KPI: assign an owner under **Access and visibility** and they get an email when a value is due. Targets can be global or set per month (9/25, 9/28). | Yes | **Updated** 17183343 (Good to know). |
| 12 | KPI window: **Create tag** for an action item, and **Add document** to link a Kaizen (9/28). | Yes | **Updated** 12920091 (new section "Act on a KPI"). |
| 13 | Lean Studio Freeform templates (for example Value Stream Map) are whiteboards. Typed numbers aren't linked to data. A customer expected them to update automatically (10/7). | Yes | **Updated** 13311987 (Note). |
| 14 | Admins can't yet mark an SOP as signed off on someone's behalf (only external training on the profile) (10/21). | Yes (limitation) | **Updated** 17183626 (Note). |
| 15 | "Is there a help library?" was asked on a demo (10/20). The in-app chat icon at the bottom right suggests articles (10/14). | Yes | **Updated** 17183477 (Getting help). |
| 16 | New navigation: **Try Enhanced sidebar**, grouped modules (Daily Management, Standard Work, Vision AI, Improvement, People Development), collapsible sidebar, global search with **/**, a new home agenda. Announced for the release around November 1 (10/19 demo, 10/26 "this weekend"). | **No**, not yet released | **Draft** 17740578. Verify against the release before publishing. |
| 17 | Features released between late September and October have no release note. | n/a | **Draft** 17740586 "Release highlights: late September to October 2026". |
| 18 | Time Study: choose a "main photo" per operator, **Create new operator from selected**, a new **Cycle study** type, a new list view with filters, a "combine" summary of several studies (10/23, 10/26). | No, they are in the coming release | Report only (see below). |
| 19 | Lean Creator forms: **Save** (partial) vs **Submit**, edit submitted forms, pin templates, custom form reports, and a fix for start and end times not shown to supervisors (10/14 to 10/26). | No, they are coming | Report only. |
| 20 | LMS **Create with AI** for courses. It was shown on 9/29 and 10/21, but on 10/21 it was said to ship "November first week" (shown on a lower environment). Instructor-hours reporting is "next release". | Unclear | Report only. |
| 21 | Kaizen/EWO setup walkthrough (9/23): project type, methodology, phase templates, workflow statuses and rules, Show fields, MTTR, saved and pinned views. | Yes | Already documented in 17183182, 17183184 and 17183189. No change. |
| 22 | CapEx-style approval workflow with role-based "who can move", an amount threshold condition, email on transition and a field update on transition (10/9). | Yes | Already covered by 17183184 (rules: who, when, what). No change. |
| 23 | Strategy / X-matrix: "we don't have a dedicated X-matrix module". The goals and strategy module is a mock-up (10/5, 10/20). | No | Report only. Don't document. |
| 24 | Lean Studio KPI **scorecard view** (month over month) and KPI tree across facilities, shown in customer instances (9/28, 9/30, 10/8). | Yes, but the setup steps weren't shown | Mentioned in draft release note 17740586. A how-to is needed once the steps are confirmed. |

## Articles updated (16)

| ID | Title | What changed |
|---|---|---|
| 17183329 | Create a time study and select operators | The "process label" step now says to select **Processes** (multi-select), with a link to the new article. Important callout reworded. Related articles +1. |
| 17183331 | Review, edit and certify a time study | New sections "Focus on one operator" and "Ask the AI to recheck part of the study" (Recheck this window, a 5-minute limit, Apply proposal / Keep current version). New edit bullet: change an activity's process. Certification no longer says "matched by process label". Related articles +1. |
| 17183326 | Record video for an AI time study | New "File size and resolution" section: 1080p, split long recordings, large uploads, delete the local copy, and a Note on no direct cloud import. Tip on large digits. Check the memory card. |
| 17183323 | What is AI Time & Motion Study? | Workflow: new step "Set up the processes and steps", with a link. |
| 12919894 | About the Lean Creator dashboard | Link to the new Submissions/grid article. |
| 17183180 | Add rules, required evidence and scoring to a template | Flagged answers: link to the grid view. |
| 12919963 | Edit questions and responses in Lean Creator | Good to know: republishing creates a version, and earlier submissions are kept by version. |
| 12920931 | Start a Daily Standard Work template or activity | New section "Start a form on demand" (My Templates → Start), with a Tip that admins can use Start in Lean Creator. |
| 17182735 | Log in to LeanSuite | First login: a grayed-out save button means the password rules aren't met yet (add a special character). Mobile workspace address step. |
| 17182736 | Reset or change your password | The troubleshooting item for the Submit/Confirm button was rewritten: the password must meet the rules, including a special character. |
| 17183482 | Use LeanSuite on mobile, tablets and shared devices | Workspace address step. New Troubleshooting: login works on a phone but not on a tablet, and a start button spins without opening. |
| 17183343 | Enter KPI values | New Good to know: assign the KPI owner under Access and visibility (email reminders). Global vs per-period targets. |
| 12920091 | View data in a KPI | New section "Act on a KPI": Create tag, Add document (link a Kaizen). |
| 13311987 | Set up a Freeform dashboard and use templates in Lean Studio | Note: templates such as the VSM are whiteboards and aren't linked to data. |
| 17183626 | Link training to the Skill Matrix and record external training | Note: you can't yet mark an SOP as signed off on someone's behalf. |
| 17183477 | Find your way around LeanSuite | Getting help: the in-app chat icon at the bottom right. |

## Articles created (4)

| ID | Title | Collection | URL | State |
|---|---|---|---|---|
| 17740576 | Set up processes and steps for AI time studies | AI Time and Motion Study (19761725) | https://help.theleansuite.com/en/articles/17740576-set-up-processes-and-steps-for-ai-time-studies | Published |
| 17740577 | View submissions and reports for a Lean Creator template | Lean Creator → Build templates (19761880) | https://help.theleansuite.com/en/articles/17740577-view-submissions-and-reports-for-a-lean-creator-template | Published |
| 17740578 | Use the enhanced sidebar and global search | Getting Started (19761634) | (draft) | Draft. Publish only after the November release is live, and check the labels and module groups against the released UI. |
| 17740586 | Release highlights: late September to October 2026 | Release notes (14770621) | (draft) | Draft. Review it with the product team, then publish. |

## Needs product confirmation before documenting

- **November release contents:** the new navigation (draft 17740578), Time Study operator photos ("main photo", "create new operator from selected"), the **Cycle study** type, the Time Study list view with filters and "combine" summary, and LMS **Create with AI** for courses. Confirm what shipped, then publish the draft and extend 17183329, 17183331 and the LMS course articles.
- **Lean Creator Save vs Submit / edit a submitted form / pinning templates:** promised as "a day or two" (10/14) and "coming" (10/23). Confirm, then update 12920931 and 17740577.
- **Time Study "Processes" tab inside a study** (time by process: labor, on the clock, presence): shown on 10/5 as work in progress. Not documented until the UI is final.
- **Lean Studio KPI scorecard view:** live in customer instances, but the steps to create one weren't shown. A how-to is needed.
- **Assigning DSW templates to an asset** (plus a role) was described on demos (10/1, 10/21) but not shown step by step. Check this against 17183176.
- **Password rules:** confirm the exact rules (a special character is required) and whether some special characters still hide the Submit button, as earlier tickets reported.
- **Kaizen export description limit:** 600 characters was requested on 9/22. Confirm the current limit (followups list: 150 → 200 → 400).
- **Expansion report Excel export and glide path colors/labels:** promised for the November release (10/6).
- **Offline use of the app:** a customer was told offline is available "through the app" (10/22). This isn't confirmed anywhere else. Don't document it until it's confirmed.
- **LMS:** admins couldn't see course presentations, only quizzes, when reviewing courses (10/8). The competency report download button didn't work (10/1). Confirm whether these are fixed.

## Recurring customer questions worth a product fix

1. **Navigation is hard to follow / too many clicks.** This came up on 10/9, 10/14, 10/16, 10/19 and in a lost evaluation (10/9). The new navigation addresses it, so ship and document it.
2. **Very large video uploads.** Files of 11 to 60 GB were moved by hand from camera cloud to PC to LeanSuite (10/9 to 10/19). Ask for a resumable upload, a size warning before upload, and a SharePoint or camera-cloud import.
3. **Organizing a growing list of processes and studies.** Customers asked for ordering, categories/labels and folders (10/9, 10/21). A list view with filters is coming. Ordering and labels for processes are still requested.
4. **Operator identity in time studies.** Look-alike operators get merged and numbers get misread (9/25 to 10/23). Operator photos are coming. Operator ordering by vest number was also requested.
5. **Reporting on custom forms.** Customers want downtime per machine, total downtime and open vs closed counts from Lean Creator forms (9/23, 10/7, 10/26).
6. **Partial save and later completion of forms.** Supervisors need to close a downtime entry later, and start and end times weren't visible to supervisors (10/14, 10/23).
7. **Export a person's training history to Excel** for audits (10/21). Mark external SOP sign-offs as complete in bulk (10/2, 10/21). Pick team members by job function (10/2).
8. **Document ID and version on audit reports** for GMP audits (10/12). Fewer mandatory fields when flagging (10/12).
9. **Tablet login problems and mobile DSW Start spinning** (10/5, 10/23).
10. **Spare-parts inventory (min/max, scan-out)** was asked again (9/23, 10/7). It isn't in the product. The suggestion was to integrate with the ERP instead.
11. **Speech-to-text in Spanish and untranslated strings** (9/21). Already on the followups list.
12. **Clearer audit/schedule notification emails** (10/9, a reason given for a lost evaluation).

## Files

- New articles and updates: see the log, `scratchpad/calls_update_log.jsonl` (also `intercom-backups/calls_update_log.jsonl`).
- Backups: `scratchpad/backups/<id>.calls.html` (16 files).
- `COLLECTION_ORDER.md` was updated with the new articles in position.
