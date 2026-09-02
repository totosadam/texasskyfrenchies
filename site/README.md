# Texas Sky Frenchies — website

This folder is the whole website. It is plain HTML, so it runs free on GitHub Pages
with no logins, no monthly fee, and nothing to install.

```
index.html      the website itself  — you almost never touch this
content.js      the puppies, photos, phone number — THIS is the file you edit
images/         all the photos
```

---

## PART 1 — Put the site online (one time, about 10 minutes)

1. Go to **github.com** and make a free account.
2. Click the **+** in the top-right → **New repository**.
   - Repository name: `texas-sky-frenchies`
   - Select **Public**
   - Click **Create repository**
3. On the next page click **uploading an existing file**.
4. Drag **everything inside this folder** into the browser window
   (`index.html`, `content.js`, and the `images` folder). Wait for the uploads
   to finish, then click **Commit changes**.
5. Go to the **Settings** tab → **Pages** in the left sidebar.
   - Under *Branch* choose **main** and folder **/ (root)** → **Save**
6. Wait 1–2 minutes, refresh that page, and GitHub shows your live link:
   `https://YOUR-USERNAME.github.io/texas-sky-frenchies`

That link is the live website. Done.

### Using your own domain (optional)
On the same **Settings → Pages** screen, type your domain into **Custom domain**
and save. Then at your domain registrar (GoDaddy, Namecheap, etc.) add these
DNS records:

- Four **A** records for `@` pointing to `185.199.108.153`, `185.199.109.153`,
  `185.199.110.153`, `185.199.111.153`
- One **CNAME** record for `www` pointing to `YOUR-USERNAME.github.io`

---

## PART 2 — Everyday updates (this is all your client needs)

### Mark a puppy Reserved or Sold
1. Open the repository on github.com → click **content.js**
2. Click the **pencil** icon (top right of the file)
3. Find the puppy and change its status line, e.g.
   `status: "Available",` → `status: "Sold",`
   Only these three words work: `"Available"`, `"Reserved"`, `"Sold"`
4. Scroll down → **Commit changes** → **Commit changes** again
5. The live site updates in about 30 seconds

### Change a puppy's name or description
Same steps — edit the `name:` or `note:` line. Keep the quotes and the comma.

### Add a new puppy
1. Upload the photo first: repository → **images** folder → **Add file → Upload files**
   → drag the photo in → **Commit changes**.
   Use a simple filename with no spaces, e.g. `puppy-blue-male.jpeg`
2. Open **content.js**, click the pencil, and copy one whole puppy block:

```js
    {
      name:   "Male · Blue Fluffy",
      note:   "AKC registered",
      status: "Available",
      photo:  "puppy-blue-male.jpeg",
    },
```

3. Paste it into the `puppies: [ ... ]` list and edit the four lines.
4. **Commit changes**.

### Remove a puppy
Delete its whole block, from `{` down to `},` — then commit.

### Swap a photo without touching any code
Upload the new photo to `images/` using the **exact same filename** as the old
one. GitHub replaces it and the site shows the new picture. (If your phone
gives it a `.jpg` name but the old one was `.jpeg`, rename it to match first.)

### Change the phone number
One line at the top of `content.js`:
`phone: "(972) 213-2152",` — every call button on the site follows it.

### Hide the blue bar at the very top
Set `announcement: "",` — empty quotes hides the whole bar.

### Change the two photo galleries
`colorsGallery` is the "A rainbow of Frenchie colors" grid.
`albumGallery` is "Moments from our home".
Both are just lists of filenames from the `images/` folder — add, remove, or
reorder the lines.

---

## Rules that keep it from breaking

- Always keep the `"quotes"` around text and the `,` comma at the end of a line.
- Never use a curly “smart quote” — plain `"` only.
- Photo filenames are case-sensitive: `Photo.JPEG` is not `photo.jpeg`.
- If a photo doesn't show up, the filename in `content.js` doesn't match the
  file in `images/`. That's almost always the problem.
- Made a mistake? On github.com open **content.js** → **History** → pick the
  version from before your edit → **Revert**. Nothing is ever lost.

## Want a proper admin panel instead?
The same repository can be connected to Netlify (also free) to give your client
a login page with forms and drag-and-drop photo uploads — no code at all. Ask
and it can be added on top of this setup without redoing anything.
