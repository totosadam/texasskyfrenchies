# Texas Sky Frenchies — website

Hosted on Netlify. Your client edits the site by logging in at
**texasskyfrenchies.com/admin** — no code, no GitHub.

```
index.html      the website
admin/          the login + editor panel
data/           the content the editor writes to (don't edit by hand)
images/         all the photos
_redirects      Netlify routing for the login
```

---

## ONE-TIME SETUP (about 5 minutes, you do this once)

The editor needs Netlify's login system switched on.

### 1. Upload these files
Push/upload everything in this folder to the repo Netlify is deploying, at the
**root** (so `index.html`, `admin`, `data`, `images`, `_redirects` sit at the top
level). Netlify redeploys automatically.

### 2. Turn on Identity
1. Open **app.netlify.com** → click your site
2. Top menu: **Integrations** (older sites: **Site configuration**) → find
   **Identity** → click **Enable Identity**

### 3. Turn on Git Gateway
Still under Identity:
1. Scroll to **Services → Git Gateway** → **Enable Git Gateway**
2. Authorize it against your GitHub repo when asked

This is what lets the editor save changes back to the repo.

### 4. Close registration (important)
Identity → **Registration preferences** → set to **Invite only**.
Without this, strangers could sign themselves up to your editor.

### 5. Invite your client
Identity → **Invite users** → enter `totosadam82@gmail.com` → **Send**

They get an email, click the link, and **choose their own password** on that
screen. (Passwords can't be pre-set from these files — the site is public code,
so anything written here would be readable by anyone.)

### 6. Done
They log in at **texasskyfrenchies.com/admin** from then on.

---

## WHAT YOUR CLIENT DOES (all they need to know)

Go to **texasskyfrenchies.com/admin**, log in with their email and password.
Four sections appear in the left sidebar:

**Available Puppies**
- Change a status: click a puppy, pick **Available / Reserved / Sold** from the
  dropdown, then **Publish** (top right)
- Add a puppy: **Add Puppy** at the bottom of the list, drag the photo in, type
  the name, pick the status, **Publish**
- Remove a puppy: click the **⋯** on its row → **Remove**
- Reorder: drag the rows

**Photos & Galleries**
- Both galleries and every big feature photo on the page. Drag a new image in
  to replace one, or **Add Photo** to extend a gallery.

**Phone & Links**
- The phone number (every call button on the site follows it), the blue bar at
  the top (empty = hidden), and the Instagram/Facebook links.

**Reviews**
- The three customer quotes.

Every change is live about 60 seconds after clicking **Publish**.
Nothing can be permanently broken — Netlify keeps every previous version, and
you can roll back from **Deploys** in the Netlify dashboard.

---

## Notes for you (not the client)

- The design itself lives in the Omelette project as a Design Component. Layout
  or wording changes to the fixed parts of the page get made there and
  `index.html` regenerated. Puppies, photos, phone and reviews should only be
  changed through `/admin` so client edits aren't overwritten.
- `data/*.json` is written by the editor. Editing it by hand is fine but
  unnecessary.
- Photo filenames are case-sensitive. The editor handles this for you.
- To add another person who can edit, invite them under Identity → Invite users.
- If `/admin` shows a blank page, check that Git Gateway is enabled — that's the
  usual cause.
