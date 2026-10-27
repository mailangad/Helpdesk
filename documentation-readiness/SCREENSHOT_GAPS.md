# Screenshot gaps (after round 6)

Generated 2026-10-27 from the 316 published Help Center articles (plus any published since). Each row is a step that opens a screen, menu, form or dialog, or shows a result, and has no screenshot directly after it. Concept and reference articles with no image are listed with an overview shot.

**How the list was built:** every numbered step containing *click, open, select, choose, go to, tap, navigate, scroll* or *switch* with no image before the next step or heading. Steps that only point to another article ("See …", "Need help?") and login steps are left out. Treat it as a capture list, not a quality score: a step may be fine without an image if the next step's image covers it.

**Machine-readable list:** `capture/shots_v6.json` (393 entries: id, article_id, url_path, action_description, output_file). URL paths are relative to the app root (`https://lean-suite.web.app` in the crawler). "State" is the screen as it should look **right after** the step: dialogs open, drop-downs expanded, forms filled with demo data.

**Total remaining:** 393 shots across 182 articles.

Capture rules: demo facility only, 1440x900, wait for spinners and skeletons to clear, blur real names/avatars/emails, and crop out the left-menu user card and the top-right account menu.


## Getting Started (17)

Module home: `/main/home`


### 17183944 Get started with LeanSuite as a frontline user

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/home` | 3. Complete a checklist or sign an SOP | Open the item and tap Start. |
| `/main/home` | 3. Complete a checklist or sign an SOP | Tap Submit. |

### 17183480 About notifications and reminders

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/home` |  | Bell icon (top right) clicked: notifications panel open with a few notifications |

### 17182735 Log in to LeanSuite

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/home` | Logging in for the first time | You'll be asked to set a new password. Choose one you'll remember. |

### 17183483 Save, pin and share dashboard views

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/suggestion/view-all` | Save a view | Apply the filters you want, for example Status = Open or Department = Assembly. |
| `/main/suggestion/view-all` | Save a view | Open Saved Views and click Save view. |
| `/main/suggestion/view-all` | Save a view | Give it a name, for example "Open Work Orders" or "My department – overdue". |

### 17183482 Use LeanSuite on mobile, tablets and shared devices

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `mobile app` |  | LeanSuite mobile app home in a 390x844 phone frame showing assigned work |

### 17183479 Change your language

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/home` | Change the app language | Click your name in the top right. |
| `/main/home` | Change the app language | Open Language Preferences. |
| `/main/home` | Change the app language | Choose your language and save. |

### 17182736 Reset or change your password

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/home` | If you forgot your password | On the login page, click Forgot password. |
| `/main/home` | If you forgot your password | Enter your new password, confirm it, and click Submit. |
| `/main/home` | If you know your password and want to change it | Click your name in the top right corner. |
| `/main/home` | If you know your password and want to change it | Open Personal settings. |
| `/main/home` | If you know your password and want to change it | Open Password, enter your current password and the new one, and save. |
| `/main/home` | For admins: reset a user's password | Click the gear icon (top right) and open Admin Settings → User Management. |

## Administration (12)

Module home: `/main/home`


### 17182745 Set up departments, lines, workstations and assets

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/home (gear icon → Admin Settings)` | Add items | Use the facility switcher (top left) to choose the facility. |
| `/main/home (gear icon → Admin Settings)` | Add items | Click the gear icon and open Admin Settings → Asset Management. |
| `/main/home (gear icon → Admin Settings)` | Add items | Click Add and create your departments first, then lines under each department, then workstations and assets. |

### 17182743 Create roles and manage permissions

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/home (gear icon → Admin Settings)` | Create a role | Click the gear icon (top right) and open Admin Settings → Roles. |
| `/main/home (gear icon → Admin Settings)` | Create a role | Click Create and name the role. |

### 17182742 Bulk upload users

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/home (gear icon → Admin Settings)` | Step 1: Download the template | Click the gear icon (top right) and open Admin Settings → User Management. |
| `/main/home (gear icon → Admin Settings)` | Step 1: Download the template | Open the Excel menu and click Download User Upload Template. |
| `/main/home (gear icon → Admin Settings)` | Step 3: Upload | In User Management, choose the bulk upload option and select your file. |
| `/main/home (gear icon → Admin Settings)` | Step 3: Upload | Check everything on Review data, fix any rows flagged with errors, then click Next. |

### 17182740 Add a user

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/home (gear icon → Admin Settings)` | Add a single user | Use the facility switcher (top left) to choose the facility the user belongs to. |
| `/main/home (gear icon → Admin Settings)` | Add a single user | Click the gear icon (top right) and open Admin Settings → User Management. |
| `/main/home (gear icon → Admin Settings)` | Add a single user | Click Add User. |

## Suggestion (40)

Module home: `/main/suggestion/view-all`


### 12123192 Submit a suggestion to a campaign

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/suggestion/view-all` | Steps | 1. Open the Suggestion Campaign dashboard by clicking Campaigns in the parent menu on the home page. |

### 12123191 View Suggestion Campaign details and submitted suggestions

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/suggestion/view-all` | Steps | 2. Open the Suggestion Campaign dashboard by clicking Campaigns in the parent menu on the home page. The dashboard shows each campaign as a campaign card. |
| `/main/suggestion/view-all` | Steps | 3. Click anywhere on the campaign card to open the campaign detail view. |

### 12123188 Edit Suggestion Campaign details

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/suggestion/view-all` | Steps | 2. Open the Suggestion Campaign dashboard by clicking Campaigns in the parent menu on the home page. |
| `/main/suggestion/view-all` | Steps | 3. Find the campaign card you want to change and click the three dots in its top right corner. |
| `/main/suggestion/view-all` | Steps | 6. Click Update Campaign at the bottom. |

### 12123187 Create a Suggestion Campaign

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/suggestion/view-all` | Steps | 2. Open the Suggestion Campaign dashboard by clicking Campaigns in the parent menu on the home page. |

### 12123157 Open a suggestion after creation

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/suggestion/view-all` | Steps | 1. Go to the Suggestion dashboard. |
| `/main/suggestion/view-all` | Steps | 2. Choose how to open the suggestion. You can use the side window or the detail view. |

### 12123147 Attach a sketch to a suggestion

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/suggestion/view-all` | Steps | Open the suggestion in the detail view. |
| `/main/suggestion/view-all` | Steps | Click the Attach button at the top and select Sketch from the drop-down list. |

### 12123146 Attach a photo or a photo with a sketch to a suggestion

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/suggestion/view-all` | Steps | Open the suggestion in the detail view. |
| `/main/suggestion/view-all` | Steps | Click the Attach button at the top and select Photo from the drop-down list. |
| `/main/suggestion/view-all` | Steps | Choose a photo from your device, or take one with your device camera. |

### 12123143 Attach a file to a suggestion

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/suggestion/view-all` | Steps | 1. Click the suggestion to open it in the side window. |
| `/main/suggestion/view-all` | Steps | 3. Click anywhere inside the box, or drag and drop a file into it. The file appears in a list below the box. |
| `/main/suggestion/view-all` | Steps | 1. Open the suggestion in the detail view. |

### 12123150 Choose how to attach information to a suggestion

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/suggestion/view-all` | Steps | Choose how to add the information. There are 3 ways: |

### 12123124 Export suggestions from the Suggestion dashboard

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/suggestion/view-all` | Steps | 4. Click Save. |

### 12123121 Search the Suggestion dashboard

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/suggestion/view-all` | Search using filters | Click the Filter button next to the search box. A side window opens with fields to choose from. |
| `/main/suggestion/view-all` | Search using filters | Scroll through the window and set the fields relevant to your search. |
| `/main/suggestion/view-all` | Group suggestions with Group By | 1. Click Group By. A side window similar to the filter window opens. |

### 12123131 Add a comment to a suggestion

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/suggestion/view-all` | Steps | 1. Open the suggestion in the side window or the detail view. |
| `/main/suggestion/view-all` | Steps | 3. In the Show options, choose Comment to display the comment area. |

### 12123164 Revert a suggestion to its initial state

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/suggestion/view-all` | Steps | 1. Open the suggestion you want to revert. |
| `/main/suggestion/view-all` | Steps | 4. Choose Pending Feedback to return the suggestion to its initial state. |

### 12123154 Initiate a Kaizen from a suggestion

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/suggestion/view-all` | Steps | 1. Open the approved suggestion you want to turn into a Kaizen. You can use the side window or the detail view. These steps use the detail view. |
| `/main/suggestion/view-all` | Steps | 4. Click Create in the top right corner. |

### 12123160 Move a suggestion forward after approval

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/suggestion/view-all` | Steps | 1. Open the approved suggestion. |
| `/main/suggestion/view-all` | Steps | 3. Choose the option that fits: |

### 12123137 Approve a suggestion

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/suggestion/view-all` | Steps | 1. Open the suggestion you want to approve. You can open it in the side window or the detail view. |
| `/main/suggestion/view-all` | Steps | 3. Choose an option. A window opens based on your choice. Follow the steps for the option you chose. |

### 12123133 Add an approver or implementor to a suggestion

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/suggestion/view-all` | Steps | 1. Open the suggestion you want to add an approver or implementor to. |
| `/main/suggestion/view-all` | Steps | 4. Enter the name of the user you want to add and select them from the list. |
| `/main/suggestion/view-all` | Steps | 5. Click the green tick on the right to save. |
| `/main/suggestion/view-all` | Steps | 4. Enter the name of the user you want to add and select them from the list. |
| `/main/suggestion/view-all` | Steps | 5. Click the green tick on the right to save. |

### 12123017 Add or edit fields while creating a suggestion

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/suggestion/view-all` | Steps | 3. Click Apply in the bottom right corner to apply your choices to the Create Suggestion window. |

### 12123066 Set suggestion points in Suggestion Settings

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/suggestion-settings/im-preference` | Steps | 1. Open the Suggestion module by clicking Suggestion on the home page. |
| `/main/suggestion-settings/im-preference` | Steps | 5. Click Save & Apply in the bottom right corner. |

## Kaizen and EWO (97)

Module home: `/main/kaizen/dashboard/kaizen`


### 12123638 Add a file to a Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Add a file | Open the Kaizen you want to add a file to, in either the side window or the detail view. |
| `/main/kaizen/dashboard/kaizen` | Add a file | Select the file from your device. |

### 12123761 About the Action Plan section in Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Stage 1: Add an action | In the section, click Manage actions → Add new. |
| `/main/kaizen/dashboard/kaizen` | Stage 1: Add an action | Choose the Action Type (for example, corrective or preventive). |
| `/main/kaizen/dashboard/kaizen` | Stage 1: Add an action | Add the assignee: search for and select the person responsible. |

### 17183561 Manage action plans, timelines and delays in a Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Add actions | Click Manage actions → Add new. |

### 17183182 Set up Kaizen project types, methodologies and templates

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/settings/settings` | 1. Add a project type | Click the gear icon (top right) and open Kaizen Settings. |
| `/main/kaizen/dashboard/kaizen` | 1. Add a project type | Click Add Project Type. |
| `/main/kaizen/dashboard/ewo` | 1. Add a project type | Choose the module: Kaizen for improvement projects, or EWO for work orders and downtime. |
| `/main/kaizen/dashboard/kaizen` | 2. Add a methodology and phases | Click Add Methodology → Create. |
| `/main/kaizen/settings/settings` | 3. Add phase templates (optional) | In Kaizen Settings, scroll to your project type. |
| `/main/kaizen/dashboard/kaizen` | 3. Add phase templates (optional) | Under Templates, click + Add Templates on a phase. |
| `/main/kaizen/dashboard/kaizen` | 3. Add phase templates (optional) | Click Save and apply. |

### 17183559 Present, export and analyze a Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Present mode | Click the Present (play) button at the top of a Kaizen. It turns into a slide presentation automatically. |
| `/main/kaizen/dashboard/kaizen` | RCA Agent (AI root-cause analysis) | Open the RCA Agent tab. |
| `/main/kaizen/dashboard/kaizen` | RCA Agent (AI root-cause analysis) | Click Run RCA Analysis. The AI suggests a 5 Whys, 4M and fishbone analysis. |

### 17183557 Create a Kaizen and add sections

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Create the project | Go to Kaizen and click Create new. |
| `/main/kaizen/dashboard/kaizen` | Create the project | Click Create. |

### 17183189 What is an EWO?

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/ewo` | Set up EWO | Go to gear icon → Kaizen Settings → Add Project Type, choose module EWO, and name it, for example "Downtime Report". |
| `/main/kaizen/dashboard/ewo` | Set up EWO | Click Add template on that phase and choose the sections to show, for example Problem Description, Description of Repair, Root Cause Analysis, Action Plan and MTTR. |
| `/main/kaizen/dashboard/ewo` | Set up EWO | Click Save and apply. |
| `/main/kaizen/dashboard/ewo` | Set up EWO | In EWO Settings, maintain your breakdown types, for example mechanical, electrical or lubrication. Click Create New to add a type. |
| `/main/kaizen/dashboard/ewo` | Create an EWO | Go to EWO → Create new. |
| `/main/kaizen/dashboard/ewo` | Create an EWO | Choose the breakdown type. |
| `/main/kaizen/dashboard/ewo` | Create an EWO | Select Create. |

### 12123843 About the Tool section in Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Use the Tool section | 4. Click the down arrow to view the options. |

### 12123839 About the Team section in Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Add team members | 3. Click Add Member. The button is replaced by a search drop-down menu. |
| `/main/kaizen/dashboard/kaizen` | Add team members | 5. Click in the field and start typing the name of the user you want to add as the selected member type (in this example, Lead). |
| `/main/kaizen/dashboard/kaizen` | Member type | Click the member type icon next to the delete (bin) icon. A small member type window opens. |
| `/main/kaizen/dashboard/kaizen` | Member type | Click the type you want to change to. |

### 12123837 About the Target section in Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Use the Target section | 5. Click Save when you finish. |

### 12123836 About the Root Cause Analysis section in Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Use the Root Cause Analysis section | 4. Click Save. The Save button becomes active after you enter the information. |

### 12123788 About the MTTR section in Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Use the MTTR section | 4. Click Save when you finish. |

### 12123787 About the Failure Curve Analysis section in Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Use the Failure Curve Analysis section | 4. Click Save when you finish. |

### 12123781 About the Expansion section in Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Use the Expansion section | 5. Click Save. |
| `/main/kaizen/dashboard/kaizen` | Edit or delete an expansion item (optional) | 2. Click the cross icon in the top-right corner when you finish. |

### 12123778 About the Description section in Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Use the Description section | 4. Click Save. |

### 12123776 About the Description of Repairs section in Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Use the Description of Repairs section | 6. To add another spare part, click the green + sign next to the number field. |
| `/main/kaizen/dashboard/kaizen` | Use the Description of Repairs section | 7. Click Save when you finish. |

### 12123772 About the Additional Details section in Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Use the Additional Details section | 4. Click Save. |

### 12123755 About the 5W1H section in Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Use the 5W1H section | 4. Click Save when you finish. |

### 12123754 About the 5G section in Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Use the 5G section | 4. Click Save when you finish. |

### 12123749 About the 5WHY section in Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Use the 5WHY section | 3. Click Add New to add a 5 Why item. When the section is added for the first time, it has no 5 Why items. |
| `/main/kaizen/dashboard/kaizen` | Use the 5WHY section | 5. Click Save when you finish. |

### 12123746 About the 4M1D section in Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Use the 4M1D section | Click Add Item. When the section is added for the first time, it has no items. |
| `/main/kaizen/dashboard/kaizen` | Create a 4M1D item (Stage 1) | In Category, choose Man, Machine, Material, Method or Design. |
| `/main/kaizen/dashboard/kaizen` | Create a 4M1D item (Stage 1) | When you have added all the causes for the category, click Save. |
| `/main/kaizen/dashboard/kaizen` | Add an assignee and date (Stage 2) | Click the avatar icon in the top-left corner of the card. The Add Assignee window opens. |
| `/main/kaizen/dashboard/kaizen` | Add an assignee and date (Stage 2) | Type the name of the assignee and select them from the results. The avatar is replaced by the user's picture or initials. |
| `/main/kaizen/dashboard/kaizen` | Add an assignee and date (Stage 2) | Click the calendar icon next to the assignee icon. A calendar window opens. |
| `/main/kaizen/dashboard/kaizen` | Add an assignee and date (Stage 2) | Choose the date. It appears next to the assignee's avatar. |

### 12123699 Use the drag-and-drop box in a Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Add a file or document | Click and drag the file into the box. |

### 12123674 View the workflow attached to a Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Steps | 2. Click the Workflow icon next to the Attach button. It is in the same place in both views. |

### 12123659 Edit the due date of a Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Open the due date request | 1. Open the Kaizen in either the side window or the detail view. |
| `/main/kaizen/dashboard/kaizen` | Open the due date request | 2. Scroll down to the Due Date field. |
| `/main/kaizen/dashboard/kaizen` | Fill in the request | 4. Click the calendar icon on the right of the Revised Due Date field. |
| `/main/kaizen/dashboard/kaizen` | Fill in the request | 8. Click Save to submit the request. |

### 12123648 Add a web URL to a Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Add a URL in the side window | Go to the URL Attach field. It is always shown and can't be collapsed. |
| `/main/kaizen/dashboard/kaizen` | Add a URL in the detail view | Open the Kaizen in the detail view. |
| `/main/kaizen/dashboard/kaizen` | Add a URL in the detail view | In the implementation field (top left), go to Add Link, directly above the drag & drop box. |

### 12123647 Add a sketch to a Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Add a sketch | Open the Kaizen you want to add a sketch to, in either the side window or the detail view. |
| `/main/kaizen/dashboard/kaizen` | Add a sketch | Choose the Sketch option from the attachment options. |

### 12123641 Add a photo or a photo with a sketch to a Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Add a photo or a photo with a sketch | Open the Kaizen you want to add a photo to, in either the side window or the detail view. |
| `/main/kaizen/dashboard/kaizen` | Add a photo or a photo with a sketch | Choose the Photo option from the attachment options. |

### 12123569 Add or remove sections from Kaizen phases

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Open the phase | 3. Click the phase you want to add a section to. |
| `/main/kaizen/dashboard/kaizen` | Add a section | 1. Choose the section you want to add to the selected phase. |

### 12123555 About Kaizen Settings

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/settings/settings` | Setting up Kaizen: the recommended order | Open Kaizen Settings from the gear menu. |
| `/main/kaizen/dashboard/ewo` | Setting up Kaizen: the recommended order | Add a project type. Choose the module (Kaizen or EWO) and give it a name, for example Quick Win, JDI or DMAIC. |
| `/main/kaizen/settings/settings` | Setting up Kaizen: the recommended order | Add a template for each phase. Choose the sections that open automatically in that phase, such as Problem Description, 5W1H, 5 Whys or Action Plan, then save and apply. |

### 12123544 Export the Kaizen Dashboard to a .csv file

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Steps | 3. Choose where to save the file on your computer. |
| `/main/kaizen/dashboard/kaizen` | Steps | 5. Click Save. |

### 12123528 Edit a revised due date reason in Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Steps | 4. Click Delete to remove the reason, or Edit to rename it. |
| `/main/kaizen/dashboard/kaizen` | Steps | 6. Click Update at the bottom right. |

### 12123512 Edit a tool or skill in Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Steps | 3. Click Edit to change the tool, or Delete to remove it. |

### 12123509 Edit a tool or skill connected to a loss type in Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Steps | 1. Go to the List of Tools attached to the loss type. |
| `/main/kaizen/dashboard/kaizen` | Steps | 3. Click Edit. |
| `/main/kaizen/dashboard/kaizen` | Steps | 5. Click Save at the bottom. |

### 12123503 Distribute savings by default in a Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Steps | 4. Click Submit once you have entered the values you want. |

### 12123496 Add a revised due date reason in Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Steps | 4. Click Submit at the bottom right of the window. |

### 12123490 Add default tools or skills to a loss type in Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Steps | 4. Click the tool you want to add. Scroll down if needed. |

### 12123487 Add and track tools or skills in Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Fill in the tool details | 9. Click Submit. |

### 12123483 Add a loss type in Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Fill in the loss type details | 9. Click Submit. |

### 12123479 Add a loss category in Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/settings/settings` | Open the Add Loss Type window | 2. Click the Add Loss button at the top right of the Loss Management dashboard. |

### 12123462 Add a Kaizen methodology

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Add the methodology | 4. Click Create on the right of the box. |
| `/main/kaizen/dashboard/kaizen` | Add the phases | 7. Click Save at the bottom right. |

### 12123658 Choose how to attach information to a Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Steps | Choose one of the 4 ways to add information, and follow the linked article. |

### 17183184 Build a workflow for Kaizen, EWO or F-Tag

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/workflow/dashboard` | 1. Create the workflow | Open the module menu (the grid icon next to the LeanSuite logo) and go to Workflow → Add New. |
| `/main/workflow/dashboard` | 1. Create the workflow | Choose the module (for example Kaizen, EWO, Tag, Best Practice or KPI) and the project type it applies to. |
| `/main/workflow/dashboard` | 1. Create the workflow | Click Submit. |
| `/main/workflow/dashboard` | 3. Connect statuses with transitions | Click Transition. |
| `/main/workflow/dashboard` | 3. Connect statuses with transitions | Choose the From and To statuses. |

### 12123549 Search the Kaizen Dashboard

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Search using filters | Select one of the filters next to the search bar. |
| `/main/kaizen/dashboard/kaizen` | Search using filters | Choose an option from the drop-down menu. |
| `/main/kaizen/dashboard/kaizen` | Save and pin a view | Click Save view. |
| `/main/kaizen/dashboard/kaizen` | Save and pin a view | To open the dashboard with this view by default, pin it. |

### 12123664 Export data from a Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Steps | 3. Choose where to save the file on your computer. |

### 12123465 Add and edit fields when creating a Kaizen

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/kaizen` | Steps | 2. Choose which fields to show and which are required. |

## Tag (F-Tag) (41)

Module home: `/main/tag/tag-dashboard`


### 12882033 About the Floor Plan in F-Tag

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/floor-plan-detail` | Set up the Floor Plan | Go to the Floor Plan settings in the F-Tag module. |
| `/main/tag/floor-plan-detail` | Set up the Floor Plan | Set the areas and choose the pin size. |

### 17183950 What is the F-Tag module?

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-settings` | How a tag works | Raise: on the web or mobile app, choose the tag type, location, priority and a description, and add a photo. Scan a location QR code to fill in the location automatically. |

### 17183568 Escalate F-Tags between tiers

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-dashboard` | Escalate a tag | Open the tag. |
| `/main/tag/tag-dashboard` | Escalate a tag | Click Escalate. You can add a comment explaining why. |

### 12125080 About the F-Tag side window

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-dashboard` |  | A tag row clicked: F-Tag side window open on the right with its fields expanded |

### 12125071 About the F-Tag workflow after creation

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-dashboard` |  | A tag open in the detail view with the Status drop-down expanded |

### 12125069 Move an F-Tag through its stages

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-dashboard` |  | Open |
| `/main/tag/tag-dashboard` | Stage 2: Submit the F-Tag | 1. Click Submit, next to the Attach button (in both the side window and the detail view). The F-Tag becomes available for analysis and feedback. |

### 12125066 Edit information in an F-Tag

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-dashboard` |  | A tag open in the detail view; details panel on the right in edit mode |

### 12125058 Attach a sketch to an F-Tag

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-dashboard` | Steps | 2. Select the Sketch option. |

### 12125057 Attach a photo or a photo with a sketch to an F-Tag

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-dashboard` | Steps | 2. Select the Photo option. |

### 12125055 Attach a file to an F-Tag

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-dashboard` |  | A tag open in the detail view with the Attach drop-down expanded (Attach, Sketch, Photo) |

### 12125043 Search the F-Tag dashboard

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-dashboard` | Search with filters | Click the Filter button next to the search box. A side window opens with fields you can filter by, such as Tag Labels. |
| `/main/tag/tag-dashboard` | Search with filters | Scroll through the window and set the fields relevant to your search. |
| `/main/tag/tag-dashboard` | Group F-Tags with Group By | 1. Click Group By. A side window similar to the filter window opens. |
| `/main/tag/tag-dashboard` | Save views | 3. To reuse the view, click Saved Views and select it from the list. The saved filters are applied. |

### 12124995 Create an F-Tag

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-dashboard` | Steps | 5. Select the Tag Type that classifies the tag. |

### 12125060 Choose how to attach information to an F-Tag

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-dashboard` | Steps | 2. Choose one of the three ways to add information: |

### 17183569 Use QR codes and print F-Tags

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-dashboard` | Raise a tag with a location QR code | Add a photo, choose the tag type, describe the problem and submit. |

### 12125042 Export data from the F-Tag dashboard

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-dashboard` | Steps | 1. Go to the F-Tag Dashboard and filter the list by your preferred criteria. Only the F-Tags that match your search are exported. |
| `/main/tag/tag-dashboard` | Steps | 4. Click Save. |

### 12125053 Add a comment to an F-Tag

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-dashboard` | Steps | 1. Open the F-Tag you want to comment on, in the side window or the detail view. |

### 12125068 Open an F-Tag after creation

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-dashboard` | Steps | 1. Go to the F-Tag Dashboard. |
| `/main/tag/tag-dashboard` | Steps | 2. Choose how to open the F-Tag: |

### 12125040 Edit user re-assignments in F-Tag

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-settings` | Steps | 5. Click Save. |

### 12125007 Edit a default due date in F-Tag

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-settings` | Steps | 3. Go to the top-right corner above the Default Due Date list. |
| `/main/tag/tag-settings` | Steps | 4. Click the arrow and select Default Due Date View. The Default Due Date window opens. |
| `/main/tag/tag-settings` | Steps | 7. Update the information and click Save. |

### 12124999 Create a default due date in F-Tag

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-settings` | Steps | 5. Click Create New. The Create Default Due Dates window opens. |
| `/main/tag/tag-settings` | Steps | 7. Click Save in the bottom-right corner. |

### 12125037 About default due dates in F-Tag

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-settings` |  | Tag Settings on the Default Due Date tab with its list |

### 12125006 Edit a default assignee in F-Tag

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-settings` | Steps | 2. On the home page, click F-Tag to open the F-Tag Dashboard. |
| `/main/tag/tag-settings` | Steps | 6. Update the information and click Save. |

### 12125024 Create a default assignee in F-Tag

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-settings` | Steps | 2. On the home page, click F-Tag to open the F-Tag Dashboard. |

### 12125018 Edit or delete an issue or sub-issue in F-Tag

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-settings` | Steps | 4. Choose the pillar whose issue you want to edit. |
| `/main/tag/tag-settings` | Edit an issue | 2. Choose the issue you want to edit. |
| `/main/tag/tag-settings` | Edit an issue | 4. Click Save. |

### 12125001 Create an issue and sub-issue in F-Tag

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-settings` | Steps | 5. Click Create New. The Create Issue window opens. |

### 12125028 About issues in F-Tag

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-settings` |  | Tag Settings on the Issue tab showing issues and sub-issues |

### 12124994 Add and edit fields when creating an F-Tag

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/tag/tag-dashboard` | Steps | 3. Click Apply in the bottom-right corner to apply the settings to the Create F-Tag window. A green confirmation message appears. |

## Best Practice (20)

Module home: `/main/kaizen/dashboard/best-practice`


### 12124971 Use the drag-and-drop box in a Best Practice

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/best-practice` | Add a file or document | 2. Click and drag the file into the box. |

### 12124956 Edit information in a Best Practice

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/best-practice` | Edit properties information | 2. Go to the field you want to change (in the detail view, it is in the Details field). |
| `/main/kaizen/dashboard/best-practice` | Edit properties information | 3. Choose the new value from the field's drop-down menu. |

### 12124943 Add a web URL to a Best Practice

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/best-practice` |  | A Best Practice open in the detail view, Add Link / URL field visible |

### 12124940 Add a sketch to a Best Practice

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/best-practice` | Add a sketch | 2. Scroll to the drag & drop box. |
| `/main/kaizen/dashboard/best-practice` | Add a sketch | 3. Click the relevant icon in the bottom-right corner of the box. |

### 12124937 Add a photo or a photo with a sketch to a Best Practice

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/best-practice` | Add a photo or a photo with a sketch | 2. Scroll to the drag & drop box. |
| `/main/kaizen/dashboard/best-practice` | Add a photo or a photo with a sketch | 3. Click the relevant icon in the bottom-right corner of the box. |

### 12124933 Add a file to a Best Practice

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/best-practice` | Add a file using the drag & drop box | 2. Scroll to the drag & drop box. |

### 12124950 Choose how to attach information to a Best Practice

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/best-practice` | Steps | 2. Choose one of the four ways to add information: |

### 12124842 Export data from the Best Practice dashboard

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/best-practice` | Steps | 4. Click Save. |

### 12124851 Search the Best Practice dashboard

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/best-practice` | Search using filters | 1. Select one of the filters next to the search bar. |
| `/main/kaizen/dashboard/best-practice` | Search using filters | 2. Choose an option from the drop-down menu. |

### 17183632 Track adoption of a shared Best Practice

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/bp-report` |  | Best Practice Report with the Count By Adoption Status By Facility chart loaded |

### 12124957 Export data from a Best Practice

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/best-practice` | Steps | 4. Click Save. |

### 12124952 Edit the due date of a Best Practice

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/best-practice` | Open the request window | 1. Open the Best Practice you want to edit, in either the side window or the detail view. |
| `/main/kaizen/dashboard/best-practice` | Fill in the request | 4. Click Save. |

### 12124929 Add and remove sections in Best Practice phases

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/best-practice` | Add a section | 1. Choose the section you want to add to the selected phase. |

### 12124960 Open an existing Best Practice

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/best-practice` | Open the detail view | 1. Open the side window as described above. |

### 12124964 About the Best Practice process after creation

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kaizen/dashboard/best-practice` |  | A Best Practice open in the detail view (toolbar, phases, sections, details panel) |

## Cost Management (11)

Module home: `/main/cost-management/dashboard`


### 12123867 Export data from the Loss Trees dashboard

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/cost-management/loss-trees` | Steps | 4. Click the Excel icon next to the Add New button in the top-right corner of the window. |

### 12123871 Export results from the Cost Management dashboard

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/cost-management/dashboard` | Steps | 4. Go to Section 3, where the filtered results are displayed. |
| `/main/cost-management/dashboard` | Steps | 5. Select the tab you want to export: Hard Savings Projects or All Saving Projects. |

### 12123862 Delete a Loss Tree

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/cost-management/loss-trees` | Steps | 4. Select Delete to remove the Loss Tree from the database. |
| `/main/cost-management/loss-trees` | Steps | 5. A browser pop-up asks you to confirm. Click OK to proceed. |

### 12123864 Export data from a Loss Tree

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/cost-management/loss-trees` | Steps | 5. The option expands to Export Loss Tree Detail. Click it. |

### 12123848 Add a Loss Tree

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/cost-management/loss-trees` | Steps | 3. In the top-right corner, click Add New. The Add Loss Tree window opens. |

### 17183951 Set savings targets and track imports in Cost Management

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/cost-management/import-history` | Set savings targets | 2. Open Savings Target. The page lists each target with the columns Year, Savings Target ($), Departments and Action (the ⋯ menu). |

### 12123895 Import data into Cost Management

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/cost-management/import-history` | Stage 1: Upload File | 3. Select the defect type. The two options are above the Drag & Drop box: |
| `/main/cost-management/import-history` | Stage 1: Upload File | 5. Click Next to go to Stage 2. |
| `/main/cost-management/import-history` | Stage 2: Field Mapping | 6. For each column in your file, select the matching Cost Management field. For example, map your "Cost" column to the Cost field. |

## Skill Matrix (16)

Module home: `/main/skill-matrix/teams`


### 17183952 About the Job Cover Matrix

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/skill-matrix/teams` |  | A team open on its Job Cover Matrix view (people x skills with levels) |

### 17183949 Create a Skill Matrix team and set required skills

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/skill-matrix/teams` | Create the team | Go to Skill Matrix → All Teams and click to create a new team. You can also use Create New → Team in the top bar. |
| `/main/skill-matrix/teams` | Create the team | Choose the team lead, and the department or line if relevant. |
| `/main/skill-matrix/teams` | Set what the team needs | Click Save. |

### 17183629 Read the radar chart and plan skill gaps

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/skill-matrix/gap-planning` | Use the Gap Planning page | Open Gap Planning from the Skill Matrix menu. The page shows GAP (%), GAP Closure YTD (%) and GAP Closure Total (%) at the top, and tabs for each level step (1-2 level, 2-3 level, 3-4 level, 4-5 level). |
| `/main/skill-matrix/gap-planning` | Use the Gap Planning page | Choose Individual and a person (or another option) from the two drop-downs. |

### 17183626 Link training to the Skill Matrix and record external training

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/skill-matrix/profile` |  | User profile Training Tracker tab listing courses and external training |

### 12124803 About Skill Matrix navigation

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/skill-matrix/teams` | Competency Update | Choose what to update by: Tools, Users, Kaizen Teams or Skill Matrix Teams. |
| `/main/skill-matrix/teams` | Competency Update | Pick from Select Tool and Select Users. |

### 12124779 View or export team data for a past date

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/skill-matrix/teams` | Steps | 4. In the top-right corner, click the calendar icon in the Select Date box. |

### 12124763 View competency detail for a team member

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/skill-matrix/teams` | Open a member's details | 4. Open a team member's details from either view. |

### 12124734 Export team overview results from Skill Matrix

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/skill-matrix/teams` | Steps | 5. Go to the All Tools sub-section and click the PDF icon in the right corner. |

### 12124693 Export data from Skill Matrix reports

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/skill-matrix/reports` | Export the data | 3. Select the sub-section you want to export from. |
| `/main/skill-matrix/reports` | Export the data | 4. Click the first Excel icon to export all users' competency data, or the second Excel icon to export the data of the selected sub-section. |

### 12124680 Edit a team in Skill Matrix

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/skill-matrix/teams` | Steps | 4. In the right corner, under the Select Date box, click Edit Team. The Edit Team window opens. |

### 12124643 Clone a team in Skill Matrix

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/skill-matrix/teams` | Steps | 4. Click the Clone icon next to the team name. The Create Team window opens, with the fields already filled in from the source team. |

## LMS (32)

Module home: `/main/people-development/lms/dashboard`


### 17183621 Build quizzes, courses and learning plans in the Instructor Panel

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/people-development/lms/instructor-panel` | Open the Instructor Panel | Open LMS → Instructor Panel. |
| `/main/people-development/lms/instructor-panel` | Open the Instructor Panel | Click + Create New in the Continue Editing or Backlog section to start a new item. |
| `/main/people-development/lms/instructor-panel` | Create a course | Choose Public (anyone can enroll themselves) or Private (only people you assign can take it; others can request to enroll, and requests appear under Enrollment Requests at the top of the Instructor Panel). |

### 12125129 View Course Analytics

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/people-development/lms/instructor-panel` | Steps | 2. Open the Instructor Panel from the LMS parent menu. |
| `/main/people-development/lms/reports` | Steps | 5. Click Course Analytics. |

### 12125120 Mark submitted quizzes

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/people-development/lms/instructor-panel` | Before you begin | Open the Instructor Panel from the LMS parent menu. |
| `/main/people-development/lms/instructor-panel` | Before you begin | In the top bar, click View Details on the Submitted Quizzes card. The Your Tasks dashboard opens. |
| `/main/people-development/lms/instructor-panel` | Mark a quiz | 1. On the Your Tasks dashboard, click the quiz you want to mark. |
| `/main/people-development/lms/instructor-panel` | Mark a quiz | 3. When you have marked all the questions, click Save in the top bar. |

### 12125118 Enroll in a course

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/people-development/lms/course-catalog?viewType=grid` | Enroll | In the right-side panel, click Enroll Now below the Wishlist icon. |

### 12125115 Edit or delete an instructor

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/people-development/lms/instructor-panel` | Open the instructor list | 3. Click View Details on the Instructors card to open the instructor dashboard. |
| `/main/people-development/lms/instructor-panel` | Edit an instructor | Click Edit. The Add Instructor window opens. |
| `/main/people-development/lms/instructor-panel` | Edit an instructor | Click Update at the top right. |
| `/main/people-development/lms/instructor-panel` | Delete an instructor | Click Delete. A browser pop-up asks you to confirm. |
| `/main/people-development/lms/instructor-panel` | Delete an instructor | Click OK to delete the instructor, or Cancel to keep them. |

### 12125114 Delete a course

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/people-development/lms/dashboard` | Steps | 5. Click Delete. A browser pop-up asks you to confirm. |
| `/main/people-development/lms/dashboard` | Steps | 6. Click OK to delete the course, or Cancel to keep it. |

### 12125113 Build and publish a quiz

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/people-development/lms/instructor-panel` | Build a quiz | 1. Go to the Instructor Panel or the All Quizzes dashboard and find the quiz you want to build. |
| `/main/people-development/lms/instructor-panel` | Build a quiz | 4. Click Publish at the top right to make the quiz available in your workspace. |

### 12125106 Build and publish a course

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/people-development/lms/instructor-panel` | Build a course | 1. Go to the Instructor Panel or the All Courses dashboard and find the course you want to build. |
| `/main/people-development/lms/instructor-panel` | Build a course | 4. Click Publish at the top right to make the course available in your workspace. |

### 12125105 Create a course category

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/people-development/lms/instructor-panel` | Create a new course category | Open the Instructor Panel in the LMS. |
| `/main/people-development/lms/instructor-panel` | Create a new course category | Click View All Courses. |
| `/main/people-development/lms/instructor-panel` | Create a new course category | On the All Courses dashboard, click Add New at the top right. The Create Course window opens. |
| `/main/people-development/lms/instructor-panel` | Create a new course category | In the Course Category field, choose an existing category, or use the button in that field to create a new one. |
| `/main/people-development/lms/instructor-panel` | Create a new course category | Complete the other course fields and click Save at the top right. |

### 17183623 Run an in-class training session

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/people-development/lms/instructor-panel` | Set up the session | In the Instructor Panel, create or open a course and choose In-class. |
| `/main/people-development/lms/dashboard` | Set up the session | Click Save. |

### 12125126 View and add instructors

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/people-development/lms/instructor-panel` | Add an instructor | 5. In Select Instructor, choose the person. This drop-down lists every member of your workspace; start typing a name to filter it. |

### 17183625 Assign courses to roles and share them across facilities

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/people-development/lms/instructor-panel` | Share with other facilities | In the Instructor Panel, open the course. |
| `/main/people-development/lms/dashboard` | Share with other facilities | Open Course Share and choose the facilities to share with. |

### 12125123 View course details

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/people-development/lms/dashboard` | Steps | 3. Click the course you want to open. You can open a course from both the Table and Grid views: |

## Lean Creator (32)

Module home: `/main/lean-creator/templates`


### 17740577 View submissions and reports for a Lean Creator template

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/lean-creator/templates` | Open a template's submissions | Open Lean Creator. |
| `/main/lean-creator/templates` | Open a template's submissions | In the template list, click the template's row. |
| `/main/lean-creator/templates` | Open a template's submissions | Click Submissions. |
| `/main/lean-creator/templates` | See all submissions in one grid | At the top right of Submissions, select Grid. |
| `/main/lean-creator/templates` | See all submissions in one grid | Double-click a row to open that submission's full report in a pop-up. |
| `/main/lean-creator/templates` | See submissions for earlier versions | At the top of Submissions, open the version list, for example V6, published September 20. |

### 17182750 Create an SOP from a video

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/lean-creator/templates` | Create the SOP | Click the attach icon and select your video. |

### 17186038 Add questions and responses in Lean Creator

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/lean-creator/templates` | Enter the question | 1. Open the Lean Creator window by creating a new template or opening an existing one. |
| `/main/lean-creator/templates` | Set the response properties | 4. Choose whether the response is mandatory by using the Required field. |

### 17183491 Create a one-point lesson (OPL) with AI

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/lean-creator/templates` | Create the OPL | Go to Lean Creator → Create with AI and choose OPL. |
| `/main/lean-creator/templates` | Review and save | Click Save. |
| `/main/lean-creator/templates` | Review and save | Add a name, labels and pillar (for example Safety), and choose the visibility. |
| `/main/lean-creator/templates` | Review and save | Click Save & Publish. |

### 17183180 Add rules, required evidence and scoring to a template

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/lean-creator/templates` | Flag a response | In Lean Creator, open your template in Build and select a question. |
| `/main/lean-creator/templates` | Flag a response | Open Response properties. |
| `/main/lean-creator/templates` | Add a rule | Select the question and click Add rule. |
| `/main/lean-creator/templates` | Add a rule | Choose the action: |
| `/main/lean-creator/templates` | Score an audit | Select a question, open Response properties and turn on scoring. |

### 17182753 Publish and assign a template for sign-off

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/lean-creator/templates` | Publish | 2. Click Save & Publish. You'll be prompted to assign the template. |
| `/main/lean-creator/templates` | Assign | 4. Choose who it's for: |
| `/main/lean-creator/templates` | Assign | 5. Set the frequency. For a one-time read-and-sign, choose a single occurrence. For recurring checks, set the repeat and an end date. |
| `/main/lean-creator/templates` | Assign | 6. Click Submit. |
| `/main/lean-creator/templates` | What the user sees | They click Start to open it. The document must be opened before it can be signed. |
| `/main/lean-creator/templates` | What the user sees | They read it, answer any questions, and click Submit. The Submit button is at the top of the screen. |

### 12927244 Edit template properties in Lean Creator

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/lean-creator/templates` | Open the template menu | 2. Find the template you want to edit and go to the last column, Action. |
| `/main/lean-creator/templates` | Edit the properties | 5. Make your changes and click Update in the top right corner. |

### 12919963 Edit questions and responses in Lean Creator

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/lean-creator/templates` | Edit and save | 4. When you have finished, click one of these in the top right corner: |

### 12919955 Create a template in Lean Creator

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/lean-creator/templates` | Create the template | 4. Click Create in the top right corner. |
| `/main/lean-creator/templates` | Build and publish | 5. Build your template. Building a template can take more than one sitting, so you can save your work as a draft. Open the template again from the dashboard to continue editing. |
| `/main/lean-creator/templates` | Build and publish | 6. When the template is ready, click Save & Publish. You are then prompted to schedule (assign) it. |

### 17183492 Create a custom Kaizen section in Lean Creator

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/lean-creator/templates` | Build the section | Go to Lean Creator and create a new template, either yourself or with AI. |
| `/main/lean-creator/templates` | Build the section | Choose the pillar. |

## AI Time and Motion Study (13)

Module home: `/main/lean-creator/time-and-motion`


### 17740576 Set up processes and steps for AI time studies

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/lean-creator/time-and-motion` | Add a process | Go to Lean Creator → Time & Motion Study. |
| `/main/lean-creator/time-and-motion` | Add a process | Click Processes at the top right of the Time & Motion Studies page. |
| `/main/lean-creator/time-and-motion` | Add a process | Click Add Processes. |
| `/main/lean-creator/time-and-motion` | Add steps to a process | In the process list, open the process and click Edit steps. |
| `/main/lean-creator/time-and-motion` | Add steps to a process | Click Add step and enter the step name. |
| `/main/lean-creator/time-and-motion` | Add steps to a process | Choose the step's category: value-added or non-value-added. |
| `/main/lean-creator/time-and-motion` | Use processes in a study | On the Time & Motion Studies page, click + New Study. |
| `/main/lean-creator/time-and-motion` | Use processes in a study | Under Processes, select every process that appears in the video. You can select more than one. |

### 17183331 Review, edit and certify a time study

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/lean-creator/time-and-motion` | Compare studies | View by operator or for the full study. Choose Fit each study or Shared clock. |
| `/main/lean-creator/time-and-motion` | Compare studies | Click a category in the legend, such as VA, to show only that category. Click it again to reset. |
| `/main/lean-creator/time-and-motion` | Compare studies | Click Save comparison to keep it on your dashboard, where you can rename it. |

### 17183329 Create a time study and select operators

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/lean-creator/time-and-motion` | Create the study | Go to Lean Creator → Time & Motion Study and click + New Study at the top right. |
| `/main/lean-creator/time-and-motion` | Create the study | Name the study and choose the shot type that matches your video, for example a wide area or a close-up of a workstation. |

## Daily Standard Work (16)

Module home: `/main/dsw/overview`


### 17183176 Assign and schedule a Daily Standard Work template

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/dsw/overview` | Open the assignment | 1. Go to Lean Creator and find your published template. |
| `/main/dsw/overview` | Open the assignment | 2. Click the ⋮ menu on the template and choose Assign. |
| `/main/dsw/overview` | Choose who it's for | 4. Choose whether to assign the template to users, a role or an asset. |
| `/main/dsw/overview` | Set the frequency | 6. Click Submit. |

### 12920945 Clone a template from the Template Marketplace

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/dsw/my-templates?tab=marketplace` | Clone a template from Daily Standard Work | 2. Click the Marketplace tab, next to My Templates. |
| `/main/dsw/my-templates?tab=marketplace` | Clone a template from Daily Standard Work | 3. Find the template you want. Click Preview first if you want to look inside. |
| `/main/dsw/my-templates?tab=marketplace` | Clone a template from Lean Creator | In Lean Creator, click Marketplace. It opens the Marketplace tab shown above. |
| `/main/dsw/my-templates?tab=marketplace` | Clone a template from Lean Creator | Click Preview to look at a template. |
| `/main/dsw/my-templates?tab=marketplace` | Clone a template from Lean Creator | Click Use template to clone it into My Templates. |

### 12920931 Start a Daily Standard Work template or activity

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/dsw/overview` | Find the activity on the Overview Dashboard | 1. In the top menu bar, click My Activities. |
| `/main/dsw/kanban` | Start from the Kanban Board | In the DSW menu, click Kanban Board. |

### 12920922 Preview a Daily Standard Work template

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/dsw/my-templates` | Preview a template | 1. In the Daily Standard Work menu, go to My Templates. |

### 12920896 View submitted Daily Standard Work reports

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/dsw/overview` | From the Overview Dashboard | 1. Go to the Overview Dashboard from the home page. |
| `/main/dsw/dsw-report` | From the Overview Dashboard | 3. In the Status Window, click Submitted. |
| `/main/dsw/kanban` | From the Kanban Board | In the Daily Standard Work menu, click Kanban Board. |
| `/main/dsw/overview` | From the Kanban Board | Open the report from the activity's card. |

## KPI (19)

Module home: `/main/kpi/kpi-dashboard`


### 17183339 Connect a KPI to Excel or Google Sheets

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kpi/kpi-dashboard` | Connect the file | Open the KPI, go to the Source step, and choose Excel (Microsoft) or Google Sheet. |
| `/main/kpi/kpi-dashboard` | Connect the file | Select the sheet or table. |
| `/main/kpi/kpi-dashboard` | Uploading a file instead | Open the KPI and click Upload file. |
| `/main/kpi/kpi-dashboard` | Uploading a file instead | Choose the Excel or CSV file. |

### 17183337 Create a KPI

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kpi/kpi-dashboard` | Details | 2. Choose the pillar and enter a name and description. |
| `/main/kpi/kpi-dashboard` | Details | 5. Click Save & Next. |
| `/main/kpi/kpi-dashboard` | Frequency | 6. Choose how often a value is due, for example every day, or every week on Monday. |
| `/main/kpi/kpi-dashboard` | Frequency | 9. Click Save & Next. |
| `/main/kpi/kpi-dashboard` | Share | 11. Click Save & Next. |
| `/main/kpi/kpi-dashboard` | Source | 12. Choose where the values come from: |
| `/main/kpi/kpi-dashboard` | Publish | 13. Click Publish. |

### 17183335 About KPI indicators, targets and trees

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kpi/kpi-dashboard` | KPI trees | Open the KPI Builder. |

### 12920075 Edit a KPI

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kpi/kpi-dashboard` | Edit and publish | 3. In the top right corner of the window, click the pencil (edit) icon, to the left of the close (X) icon. The Create KPI window opens. |
| `/main/kpi/kpi-dashboard` | Edit and publish | 5. Click Publish to make the changes live. |

### 17183343 Enter KPI values

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/kpi/kpi-dashboard` | Enter one value | Open the KPI and click Input value. |
| `/main/kpi/kpi-dashboard` | Enter one value | Choose the date and enter the value. |
| `/main/kpi/kpi-dashboard` | Enter one value | If the KPI uses categories, choose one, for example the reason for downtime. |
| `/main/kpi/kpi-dashboard` | Enter from a Lean Studio board | On a Lean Studio dashboard, click a date on a KPI widget. |
| `/main/kpi/kpi-dashboard` | Enter from a Lean Studio board | Click Add KPI. |

## Lean Studio (25)

Module home: `/main/custom-dashboard`


### 13311870 Create a dashboard in Lean Studio

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/custom-dashboard` | Create the dashboard | Choose who to share it with. |

### 13312050 Add a widget to a Lean Studio dashboard

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/custom-dashboard` | Add a widget | Open your dashboard and click Edit Layout. |
| `/main/custom-dashboard` | Add a widget | Click Add widget and choose the chart type. |
| `/main/custom-dashboard` | Add a widget | Choose the module the data comes from, such as Kaizen, KPI, Daily Standard Work or Tags, and then the report. |
| `/main/custom-dashboard` | Add a widget | Set filters, for example facility (you can choose several), date range (YTD, QTD, MTD or a custom range), status or project type. |
| `/main/custom-dashboard` | Add a widget | Click Save & Next. |

### 13312040 Edit a widget in a Lean Studio dashboard

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/custom-dashboard` | Edit a widget | Open the dashboard and click Edit Layout. |
| `/main/custom-dashboard` | Edit a widget | Open the widget's edit option. |
| `/main/custom-dashboard` | Edit a widget | Click Save. |

### 13312033 Lean Studio widget types

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/custom-dashboard` |  | A dashboard in Edit Layout with the Add widget panel open listing the widget types |

### 13312027 Export charts from Lean Studio dashboards

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/custom-dashboard` |  | A dashboard open with a widget menu expanded showing the export option |

### 13312024 Use a Lean Studio board in a huddle

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/custom-dashboard` | Enter a KPI value | Click a date on a KPI widget. |
| `/main/custom-dashboard` | Enter a KPI value | Click Add KPI. |

### 13312017 Edit a dashboard layout in Lean Studio

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/custom-dashboard` | Edit the layout | Open the dashboard and click Edit Layout. |

### 13311987 Set up a Freeform dashboard and use templates in Lean Studio

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/custom-dashboard` | Add notes and shapes | Open a Freeform dashboard and click Edit Layout. |
| `/main/custom-dashboard` | Use a template | In Edit Layout, open the template library. |
| `/main/custom-dashboard` | Use a template | Choose a template to add it to the canvas. |
| `/main/custom-dashboard` | Save your own template | Select the shapes you want. Hold Shift and click each one. |
| `/main/custom-dashboard` | Save your own template | Click Group. |
| `/main/custom-dashboard` | Save your own template | Click Save as template. |

### 13311974 Set up a Grid dashboard in Lean Studio

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/custom-dashboard` | Set up the dashboard | In Lean Studio, create a new dashboard and choose the Grid layout. |
| `/main/custom-dashboard` | Set up the dashboard | Click Edit Layout. |
| `/main/custom-dashboard` | Set up the dashboard | Add widgets, for example a single-value tile for each KPI, a trend chart, a table of open actions, and a heat map such as a safety cross. |

### 13311893 Edit dashboard details in Lean Studio

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/custom-dashboard` | Edit dashboard details | Open the dashboard in Lean Studio. |
| `/main/custom-dashboard` | Edit dashboard details | Open the dashboard's settings or edit option. |

## Document Management (2)

Module home: `/main/documents?viewType=table`


### 17183630 What is Document Management?

| Screen (URL path) | Section | Step to illustrate (capture the screen right after it) |
|---|---|---|
| `/main/documents?viewType=table` | Add documents | Click Document Management on your home page (or open it from the module menu). The Documents page opens. |
| `/main/documents?viewType=table` | Add documents | Click Add and create folders, for example one per line or workstation. |

## Needs a human (could not be fixed from captured screens)

### Back-to-back screenshots with no text between them (47 pairs in 28 articles)
The old images are hosted on the Intercom CDN, which this environment cannot reach, so they could not be viewed and no caption was added (captions are only added when the image itself can be seen). In the pairs where one image is a known crop (12123975, 12124064, 12123856), the second image is an old upload. Open each article in the editor and add a one-line caption before the second image:

| Article | Pairs |
|---|---|
| 17186037 About the suggestion side window | 4 |
| 12123755 About the 5W1H section in Kaizen; 12123699 Use the drag-and-drop box in a Kaizen; 12123707 About the Kaizen side window; 12123975 About Cost Management reports; 12124974 About the Best Practice side window | 3 each |
| 12124971 drag-and-drop box in a Best Practice; 12123781 Expansion section; 12123754 5G section; 12123558 About Kaizen navigation; 12123856 Check import history; 12123895 Import data into Cost Management | 2 each |
| 12125069, 12123839, 12123836, 12123776, 12123563, 12123509, 12123462, 12124064, 12124898, 12124851, 12125062, 12125068, 12125018, 12123557, 12123549, 12123666 | 1 each |

### Text to confirm in the app
- **12123160 Move a suggestion forward after approval** says Mark As Complete is "next to the Approve button". In the captured suggestion 2235 (status Pending Implementation) the button next to **Mark As Complete** is **Reject**. Not changed, because the other state was not captured.
- **12123648 Add a web URL to a Kaizen** says the detail view has **Add Link** directly above the drag & drop box. In the captured Kaizen detail views the block above the drag & drop box is **Linked Docs**, and there is a link icon in the toolbar. Confirm where a web URL is added now and update the steps.
- **Attach drop-down (Suggestion, Kaizen, Best Practice, F-Tag):** steps say "Click Attach and select Photo / Sketch". No capture has the drop-down open, so these steps are listed above.

## Not needing a screenshot

- 17183562 Kaizen and EWO glossary: reference glossary of terms, no single screen
- 17183488 Security, data and AI: frequently asked questions: FAQ, no screen
- 17183947 Troubleshoot common problems in LeanSuite: troubleshooting table, no screen
- 17183486 Report a bug or request a feature: contact info, no screen
- 17183326 Record video for an AI time study: camera-recording guidance, no app screen
- 17183943 Set up LeanSuite for your site: admin checklist: checklist that links to other articles
- 17183194 Set up Single Sign-On (SSO) with Microsoft Entra ID: Microsoft Entra ID (external) screens, capture by IT
