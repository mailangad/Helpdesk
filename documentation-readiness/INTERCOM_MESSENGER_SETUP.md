# Show the Help Center in the in-app chat (Intercom Messenger)

Checked through the API on 2026-10-27:

| Setting | State |
|---|---|
| Help Center ("leansuite", help.theleansuite.com) | **Website on** |
| Published articles | 316, all in collections |
| Messenger spaces and Fin content sources | **Not available through the API.** Set them in the Intercom UI using the steps below. |
| Identity verification | **Off** (see step 4) |

## 1. Turn on the Help space for logged-in users
1. Go to **Settings → Channels → Messenger**.
2. Open the **Web** tab and choose **Users** (logged-in people in theleansuite.app), not Visitors.
3. Under **Spaces**, switch on **Help**. Keep **Home** and **Messages** on.
4. On **Home**, add the **Search for help** block (it may be called "Help Center articles"). That gives customers a search box as soon as they open the chat.
5. Make sure the Help space shows the **leansuite** Help Center. If there's more than one Help Center, pick it under **Help Center → Messenger**.
6. Click **Save and set live**.

## 2. Let Fin answer from the training material
1. Go to **Fin AI Agent → Content** (it may be called "Knowledge → Sources").
2. Make sure **Help Center: leansuite** is a source and switched on for **Users**.
3. Under **Fin AI Agent → Deploy → Chat**, switch Fin on for **Users** in the Messenger.

## 3. Check article audiences
1. Go to **Knowledge → Help Center → Articles**.
2. Filter the audience to make sure no collection is set to **Visitors only**. Articles must be visible to **Users**.

## 4. Strongly recommended: identity verification
Identity verification is off. Without it, someone could pretend to be another logged-in customer in the chat.
1. Go to **Settings → Workspace → Security → Messenger** and turn on **identity verification** (Messenger security).
2. The LeanSuite app must send a user hash, or a JWT, when it starts Intercom. That needs a small change by the developers.

## 5. Test
1. Log in to theleansuite.app and open the chat bubble.
2. Check that you see the **Help** tab and the search box.
3. Search "create a Kaizen" and open an article.
4. Ask Fin "How do I create a KPI?" and check that it answers with a Help Center article.
