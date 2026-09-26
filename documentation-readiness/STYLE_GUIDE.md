# LeanSuite Help Center style guide

Based on common industry practice: the Diátaxis framework, the Google and Microsoft developer style guides, and the Atlassian, Stripe and Intercom help centers.

## 1. Article types
Every article is exactly one of four types.

| Type | Purpose | Title pattern | Example |
|---|---|---|---|
| **How-to (task)** | Get one job done | Imperative verb, sentence case | *Create a Kaizen* · *Bulk upload users* |
| **Concept (explanation)** | Understand what something is or why | "About …" or "What is …" (noun) | *About the Kaizen dashboard* · *What is Lean Studio?* |
| **Reference** | Look up facts: fields, columns, settings, glossary | Noun phrase | *Kaizen and EWO glossary* · *Widget types* |
| **Troubleshooting** | Fix a specific problem | The symptom, or "Troubleshoot …" | *Troubleshoot login problems* |

Don't mix types. If a how-to needs a long explanation, link to the concept article.

## 2. Titles
- **Sentence case.** Capitalize only the first word and proper nouns or module names: *Create a KPI*, not *How To Create A KPI?*.
- **How-to titles start with a verb**, without "How to" or a question mark: *Assign a template to a role*.
- Exception: **"What is X?"** is fine for a module's introduction article, because it matches how people search.
- Keep titles to about 60 characters or fewer, and use the words users use in the app, for example "Tag", not "Issue Tracker".
- Use the exact UI names for modules: Kaizen, EWO, Tag (F-Tag), Suggestion, Best Practice, Lean Creator, Daily Standard Work, KPI, Lean Studio, LMS, Skill Matrix, Cost Management, QA Matrix, Document Management, Workflow.

## 3. Description (subtitle)
- Every article has one: **one sentence, no more than 140 characters, saying what the reader will be able to do or learn.** It appears in search results and helps Fin, Intercom's AI agent, find the right article.
- Example: *"Add a user to a facility or workspace, and deactivate users who leave."*

## 4. How-to article structure
1. **Intro:** one or two sentences on what the reader will achieve and why.
2. **Who can do this:** only when the task needs a special permission, for example *"You need the Kaizen admin permission"*. Use a callout.
3. **Before you begin:** prerequisites, only if there are any.
4. **Steps:**
   - numbered, one action per step
   - start each step with a verb
   - **bold** the UI element names
   - use → for menu paths, for example **Admin Settings → User Management**
5. **Result:** what the reader sees when it worked.
6. **Tips / Good to know:** optional; keep it short.
7. **Troubleshooting:** optional; common errors and their fixes.
8. **Related articles:** 2 to 4 links to published articles.

## 5. Concept and reference structure
- **Concept:** intro, key ideas under short headings, "What you can do" (links to how-tos), and related articles.
- **Reference:** intro sentence, then a table or list, plus related articles.

## 6. Writing style
- **Talk to the reader:** second person ("you") and present tense.
- **Keep it short:** sentences under about 25 words, and paragraphs of 3 lines or fewer.
- **Stay in voice:** active voice; say "select", "enter" and "turn on".
- **No filler:** no "simply", "just", "easily", emoji, "Congratulations!", "let's", or references to "the previous article".
- **Spelling:** American English (color, organize, enroll).
- **Numbers:** numerals for numbers and times ("3 days", "30 minutes").
- **Keyboard shortcuts:** **⌘K** / **Ctrl+K**.
- **Admonitions** (use them sparingly):
  - **Note:** useful information.
  - **Important:** something that could cause a problem.
  - **Tip:** a better way to do something.

## 7. Screenshots and media
- Screenshots come from the current app, taken in a **demo facility**. Never show customer data or real people's names; blur them.
- Crop to the relevant area, and use a full screen only for overview shots.
- Place the screenshot **after** the step it illustrates.
- Every image has **alt text** describing what it shows.
- Videos are hosted on a shared company channel, not a personal drive, and are introduced as *"Watch a video walkthrough (1:20)"*.

## 8. Links
- Link only to published articles.
- Use descriptive link text, never "click here".
- Link the first mention of a related task, and don't repeat the same link in one article.

## 9. Collection structure
Order the articles in each module collection like this:
1. What is X? (concept)
2. Setting up X (admin how-tos)
3. Everyday tasks (how-tos)
4. Dashboards and reports
5. Reference and glossary
6. Troubleshooting

## 10. Maintenance
- **Every release:**
  - a release note
  - updates to every affected article
  - new screenshots wherever the UI changed
- **Every call:** each "I'll send you the steps" on a customer call becomes an article.
- **Quarterly review:** check the most-viewed articles, and any articles with negative reactions or Fin handoffs.
