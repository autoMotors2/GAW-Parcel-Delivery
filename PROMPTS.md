# GAW Parcel Delivery Ltd: Prompt Pack for Claude in VS Code

**The job:** relaunch this working logistics platform as a **brand-new site, GAW Parcel Delivery Ltd**, on
**gawparceldeliveryltd.com** (Hostinger Node.js app). Only these change: **name, logo, tagline, domain, email and
tracking/reference prefix**. **These stay exactly the same:** colour palette, fonts, layout, every photo, every page,
every feature and the admin console path (`/private-user/`). Target time: **under 2 hours** (≈ 100 min + buffer).

**How to use**
- Send the prompts **in order, one per chat turn**. Each one ends with STOP. Have a quick look (`npm run dev` →
  http://localhost:3000) before you send the next one. Don't add extra work mid-run: note it for after launch.
- If something breaks, send **Prompt F (Fix)**. In a new chat, send **Prompt R (Resume)** first.
- **Time budget:** P0 5′ (you) · P1 8′ · P2 20′ · P3 25′ · P4 10′ · P5 12′ · P6 5′ · P7 20′ ≈ **105 min**.

**How it stays under 2 hours**
1. **Do the slow owner jobs in parallel (start these now, before P1):** they don't need the code.
   - Point the **gawparceldeliveryltd.com DNS** at Hostinger (A/CNAME from hPanel). Propagation can take hours, so start it first.
   - Create a **new, empty private GitHub repo** and note its URL.
   - Create the **new Hostinger Node.js app** (don't connect the repo yet) and the persistent folder `/home/<user>/gawparcel-data/`.
   - Create the **info@gawparceldeliveryltd.com** mailbox.
   - Generate the new admin password hash and session secret (commands in P6).
2. **The brand is already centralised.** `src/config/brand.ts` drives the UI. The tracking ID length is derived from
   the prefix (`ID_LENGTH = 8` in `src/shared/trackingId.ts`), and the logo pipeline already exists
   (`scripts/optimize-images.mjs --brand`). This is a values swap plus a docs sweep, not a rebuild.
3. **No redesign, no new copy, no Lighthouse pass, no new features.** Anything else goes under Blocked / Needs owner.

> ⛔ **Fresh site, fresh identity.** GAW Parcel Delivery Ltd gets a **new GitHub repo** (fresh history), a **new
> Hostinger Node.js app**, a **new empty database** and **new admin credentials**. The previous brand's name, domain,
> email, repo, app and chat widget are **never** mentioned in code, docs, metadata, git history or commit messages,
> and nothing is pushed to the previous repo or app.

---

## Project values (source of truth)

All values below were confirmed by the owner on 2026-10-30.

| Key | Value |
|---|---|
| Name / legal name | **GAW Parcel Delivery Ltd** (`COMPANY`, `LEGAL_NAME`). Use it in titles, meta, the footer copyright, legal pages and documents. |
| Short name (UI) | **GAW Parcel Delivery** (`COMPANY_SHORT`: buttons, repeated mentions, "GAW Parcel Delivery Operations Console"). Never just "GAW" in copy. |
| Tagline | **Fast • Safe • Worldwide** (as printed on the logo, which shows FAST • SAFE • WORLDWIDE in capitals; `TAGLINE`). Use "•" (U+2022) with a space either side. Where a plain-text form is needed (OG/Twitter title, JSON-LD `slogan`), use the same string. |
| Domain | **gawparceldeliveryltd.com** (`www.` redirects to the root domain) |
| Email | **info@gawparceldeliveryltd.com** |
| Admin console | **https://gawparceldeliveryltd.com/private-user/** (same app, same domain, path-based; already built) · locally `http://localhost:3000/private-user/` **and** `http://localhost:3000/#/admin` |
| Tracking ID | **`GW` + 6 characters = 8 total**, e.g. `GW7K2M9P`; piece labels `GW7K2M9P-01`. The prefix must be 2 letters so IDs stay 8 characters, and it must not be `QR` (quote links use it). |
| Reference prefixes | `GW-TKT-######`, `GW-INV-######`, `GW-SL-######` (`REFERENCE_PREFIX`); quotes keep `QR-YYYY-#####`. |
| Logo source | `images/GAW Global Parcel Delivery Logo.png` (renamed in P1 to `images/gaw-parcel-delivery-logo.png`): **2045×769, RGB, NOT transparent**. A light-grey/white checkerboard is baked into the pixels, and thin white outlines around the letters touch it. Black "GAW" with red speed lines, red globe (black continents) with a red orbit arrow and a red parcel box, black "PARCEL", red "DELIVERY", black "LTD", small black tagline between two red rules. |
| Palette, fonts, photos | **Unchanged.** Red `#D3070B` + graphite/ink + greys already match the logo's red and black. P2 samples the logo red: if it differs a lot, **report it, don't change tokens**. |
| DB file (default) | `gawparcel.db` (production uses `DB_PATH`). Fresh, empty database. Table and column names unchanged. |
| Package name | `gaw-parcel-delivery` |
| Persistent folder (Hostinger) | `/home/<user>/gawparcel-data/` → `gawparcel.db` + `uploads/` |
| Live chat (Smartsupp) | **Off for launch.** `SMARTSUPP_KEY` in `brand.ts` belongs to the previous site: set it to `''` (chat off). Turn it back on with Prompt O when the owner has a key for a GAW Smartsupp account. |
| Internal code names **kept** | CSS `--ngf-*`, classes `ngf-*`, storage keys `ngf_*`, session cookie `ngf.sid` (in `server/middleware/auth.ts`). Users never see them. Optional after launch: Prompt 9. |
| Phone / WhatsApp / HQ address / social / company number | **Not supplied. Leave empty in `brand.ts`, so the UI keeps hiding them.** Never invent them. A "Ltd" usually has to show its registered number and office on the site: ask the owner (Prompt O). |
| Old brand terms | Whatever `src/config/brand.ts` holds **before** P3 (name, short name, tagline, domain, email, tracking/reference prefix), plus the DB file name in `server/db.ts`, the package name, the old logo file name and the logo-artwork spelling of the old name that the docs describe. P1 reads them and keeps the list **in the chat only**. Never write it into a committed file. |

---

### Prompt 0: Owner jobs (you, ~5 min, no Claude needed)
The values table is confirmed. Start the parallel owner jobs listed under "How it stays under 2 hours", then send P1.

### Prompt 1: Safety net, branch, remotes, inventory (no code changes, ~8 min)
```
We're relaunching this working site as a brand-new site, "GAW Parcel Delivery Ltd", on gawparceldeliveryltd.com. Read PROMPTS.md (its values table is the source of truth), CLAUDE.md, docs/PROJECT_TRACKER.md, src/config/brand.ts, src/shared/trackingId.ts, src/shared/references.ts, scripts/optimize-images.mjs, server/seo.ts, server/index.ts, server/db.ts and docs/DEPLOYMENT.md.

Rules for the whole job: don't change the design, colours, fonts, layout, photos or features. Only the name, logo, tagline, domain, email and tracking/reference prefix change. The previous brand's name, domain, email, repo and chat key must not appear anywhere in the finished site, docs, commit messages or git history. Never push to the previous repo.
1. Create branch `gaw` from the current HEAD. Rename the (untracked) logo source with `mv "images/GAW Global Parcel Delivery Logo.png" images/gaw-parcel-delivery-logo.png`. Expected uncommitted changes: PROMPTS.md, the old logo source in images/ deleted, and images/gaw-parcel-delivery-logo.png added. If those are the only ones, commit them as "docs: GAW Parcel Delivery launch plan and logo source". Any other uncommitted change: STOP and ask me.
2. Run `git remote -v`, then REMOVE every remote from this local clone so nothing can be pushed to the previous repo by mistake. This changes local git config only. Don't write the remote URLs into any file.
3. Run `npm run build` and `npm test`, and record the baseline.
4. Build the "old brand terms" list (see the values table) and count each term, case-insensitive, in src, server, scripts, index.html, Public, docs, CLAUDE.md, package.json, package-lock.json and .env.example. Group the counts as: visible text & metadata / documents & PDFs / tracking & references / docs. For the 2-letter old ID prefix, search for ID-shaped patterns (prefix + ID characters, prefix + "-TKT/-INV/-SL") rather than the bare letters. Skip the kept internal code names (ngf-, --ngf-, ngf_, ngf.sid).
5. Measure the new logo: confirm its size, sample the background tones and the red, and say whether the existing key-out in optimize-images.mjs should handle it as is (same checkerboard style) or which constants need tuning.

STOP and report: the baseline result, the old-term counts per group (in chat only), the logo findings, and any questions.
```

### Prompt 2: New logo and icons (~20 min)
```
Replace the logo with images/gaw-parcel-delivery-logo.png. Keep the same placements; no layout change.

The source is NOT transparent: a 2045×769 RGB PNG with a light-grey/white checkerboard baked into the pixels, and thin white outlines around the letters that touch it. The existing loadTransparentLogo() in scripts/optimize-images.mjs already handles this style (edge flood fill, pocket removal, colour-to-alpha edge band). REUSE it and only tune its constants if P1 found they need it.

1. scripts/optimize-images.mjs: set LOGO_SRC to 'gaw-parcel-delivery-logo.png' and update the header comment (file name, 2045×769, what the artwork contains). Red pixels and the black wordmark must stay intact. Check letter counters (the inside of the G, A, P, R, D) and the gaps between the globe, the orbit arrow and the parcel are cleared, with no leftover checkerboard specks and no grey or pink halo. Dropping the thin white outlines is fine; tell me.
2. Update buildSquareMark()'s crop for the new artwork: a square around the red/black globe with its orbit arrow and the parcel (top right of the logo). Measure the crop box from the pixels rather than guessing. Check that the 16 and 32 px favicons read as a globe.
3. Run `node scripts/optimize-images.mjs --brand` (brand only: never run the full script, because the photo originals aren't all here). It must produce, in Public/brand/: logo.png (full colour on transparent), logo-white.png (black parts, i.e. "GAW", "PARCEL", "LTD", the tagline and the black continents, turned white; red kept), mark.png, favicon.png (512), favicon-32.png, favicon-16.png, icon-192.png, icon-maskable-512.png (safe padding), apple-touch-icon.png (180), and og-image.jpg (1200×630, the white logo centred on Ink as before).
4. Regenerate the small header/footer WebPs logo-web.webp and logo-white-web.webp at 104 px tall from the new PNGs (sharp, as BRAND_GUIDE §6 says). The new logo is about 2.66:1, so update LOGO_WEB_WIDTH / LOGO_WEB_HEIGHT in brand.ts to the real output size. /brand files are cached for 30 days, so bump the ?v=N cache-bust wherever logo, icon and OG URLs are referenced (index.html, Public/site.webmanifest, brand.ts if the URLs are there).
5. Composite logo.png on pure white AND on #141414 and look at both at 2× zoom (no checkerboard, no halo, no missing pieces). Show me both, plus the 32 px favicon.
6. Check the header (desktop and mobile, over the hero and scrolled), mobile drawer, footer, admin sidebar and login, one PDF and the browser tab at 375 and 1440 px. If the logo reads too small or too large somewhere, adjust ONLY that logo's height/width rule.

`npm run build` must pass. Commit "brand: GAW Parcel Delivery logo and icons". STOP and show me the logo on light and dark and the favicon.
```

### Prompt 3: Name, tagline, domain, email and tracking/reference prefix (~25 min)
```
Apply the PROMPTS.md values table everywhere users, documents or crawlers can see it. Keep all copy word for word apart from the name, tagline, domain and email. No new marketing text. Where copy was built around the old tagline's wording, make the smallest change that fits the new tagline, list each one, and record it in docs/CONTENT.md flagged "owner to confirm".

1. src/config/brand.ts: COMPANY and LEGAL_NAME "GAW Parcel Delivery Ltd", COMPANY_SHORT per the values table, TAGLINE "Fast • Safe • Worldwide", EMAIL, DOMAIN "gawparceldeliveryltd.com", TRACKING_PREFIX and REFERENCE_PREFIX per the values table, SMARTSUPP_KEY per the values table. ADMIN_PATH stays '/private-user/'. PHONE, WHATSAPP, HQ_ADDRESS and SOCIAL stay empty. Update the comments and TRACKING_ID_EXAMPLE.
2. Tracking IDs stay EXACTLY 8 characters. src/shared/trackingId.ts already derives the suffix length from ID_LENGTH and the prefix, so only update comments and examples (GW7K2M9P, GW7K2M9P-01, "gw 7k2-m9p" → "GW7K2M9P"). Grep src and server for any hard-coded old prefix in placeholders ("GW······"), regexes, help text or tests. Check the quote-vs-tracking detection in the track search still tells `QR-` quotes from tracking IDs. Update scripts/trackingId.test.ts, scripts/references.test.ts and every other scripts/*.test.ts that names the old brand or prefix. Run `npm test`.
3. Hard-coded strings: index.html (title, description, canonical https://gawparceldeliveryltd.com/, OG/Twitter title "GAW Parcel Delivery Ltd: Fast • Safe • Worldwide", URLs, image, JSON-LD Organization name/legalName/url/email/logo/slogan), Public/site.webmanifest (name "GAW Parcel Delivery Ltd", short_name "GAW Parcel": 12 characters max), App.tsx page titles and descriptions, page copy, image alt text, src/data/legalDocs.ts, DocumentBrand.tsx and every document/PDF label, server/index.ts (health service name "GAW Parcel Delivery API", start log), server/seo.ts (sitemap/robots host), server/db.ts (settings defaults, DB_FILE 'gawparcel.db', comments), .env.example (DB_PATH example), package.json name "gaw-parcel-delivery" (regenerate package-lock.json with `npm install --package-lock-only`), and comments in CSS files that name the old brand. In .ts/.tsx, import from brand.ts; don't hard-code the new strings.
4. The new name is about twice as long as the old one. At 375, 768 and 1440 px check the header, footer brand block and copyright, page titles/heroes that include the name, the admin sidebar title and login, and the PDF header. Fix overflow or bad wrapping with the smallest CSS change; no layout redesign.
5. Docs: docs/CONTENT.md and docs/BRAND_GUIDE.md (company facts, tagline, name-usage table, OG title, footer brand block, logo description §6 with the new file and artwork, ID formats §7 with the new prefix, mark description, minimum logo width/clear space measured from the "G"). CLAUDE.md: title, §1–§2 company-facts table (name, short name, tagline, email, domain, admin URL https://gawparceldeliveryltd.com/private-user/, tracking prefix + example, references), §6 rule 10 DB file name gawparcel.db, and every other mention of the old brand.
6. Grep again for every old brand term from P1 (case-insensitive) in src, server, scripts, Public, index.html, docs, CLAUDE.md, package.json, package-lock.json and .env.example. Expected: zero hits outside the kept ngf code names. List anything left.

`npm run build` and `npm test` must pass. On localhost: Home, Track, Contact and Legal at 375 and 1440; create a shipment in the admin (#/admin) and confirm it gets an 8-character GW ID that tracks publicly (also typed in lower case with spaces, and as a -01 piece label); download one PDF and check the name, logo, email and references. Commit "brand: GAW Parcel Delivery name, tagline, domain, email and IDs". STOP and report.
```

### Prompt 4: Admin console and production-mode check on /private-user/ (~10 min)
```
The admin console already lives at /private-user/ on the main domain (ADMIN_PATH in brand.ts, isAdminPath() in App.tsx, the /private-user routes in server/index.ts, server/seo.ts). Don't rebuild it, and don't edit server/middleware/auth.ts or the session settings. Only verify it works under the new brand and fix anything the rename broke.

1. Confirm the admin UI shows "<COMPANY_SHORT> Operations Console", the new white logo in the sidebar and above the login card, and ADMIN_URL https://gawparceldeliveryltd.com/private-user/ wherever the admin URL is shown (Settings → Company & Carrier Identity).
2. Test with `npm run build && npm start` in production mode: NODE_ENV=production in the shell only, with a scratch DB_PATH and UPLOADS_DIR in the scratchpad, never the real data/ folder. Check that:
   - /private-user and /private-user/ open the login, and /private-user-x and /private-users don't; a wrong password is rejected; login works;
   - create a shipment → GW ID → "view public tracking" opens /#/track/<id> on the same host;
   - /#/admin shows Home and /admin shows the 404 page;
   - /private-user/ responses carry X-Robots-Tag: noindex, nofollow;
   - robots.txt and sitemap.xml use https://gawparceldeliveryltd.com and don't mention private-user;
   - /api/health returns ok with "service": "GAW Parcel Delivery API";
   - the live chat loads only if a key is set, and never on /private-user/;
   - the public pages look unchanged apart from name, tagline and logo.
3. If any check fails, apply the smallest fix and commit "fix: …". STOP and report each check.
```

### Prompt 5: Docs, final sweep and full local check (~12 min)
```
1. docs/DEPLOYMENT.md: rewrite for GAW Parcel Delivery Ltd. One domain (gawparceldeliveryltd.com + www redirect), admin at https://gawparceldeliveryltd.com/private-user/, a NEW GitHub repo and a NEW Hostinger Node.js app, env vars (DB_PATH=/home/<user>/gawparcel-data/gawparcel.db, UPLOADS_DIR=/home/<user>/gawparcel-data/uploads), the mailbox from the values table with SPF/DKIM/DMARC, the smoke test (§7) with the /private-user/ checks and GW IDs, backups of gawparcel.db + uploads, and uptime monitoring on /api/health.
2. docs/PROJECT_TRACKER.md: this is a fresh site. Rewrite it so it doesn't name the previous brand, domain, email, repo or ID prefix anywhere (history included). Keep the phases and task wording with GAW values, replace Phase L with "Phase L — GAW Parcel Delivery launch" (tasks L.1–L.10 matching P1–P7 and Prompt 9), replace the old change log with one "GAW Parcel Delivery launch" section listing the work done in P1–P5 (today's date), add the owner decisions from the values table to the Decisions log, and keep Blocked / Needs owner current: phone, WhatsApp, HQ/registered office, company number, social links, Smartsupp key, lawyer review under the new name and jurisdiction, a vector/transparent logo original, and any copy flagged in P3. docs/PROMPT-UPDATE.md and docs/update.md: replace the old brand name with the new one (they describe the payments feature, which stays); tell me what changed.
3. Fresh `npm run build`, then sweep src, server, scripts, Public, index.html, docs, CLAUDE.md, PROMPTS.md, package.json, package-lock.json, .env.example AND dist/ + dist-server/ for the old brand terms from P1 (case-insensitive). Also check images/ contains no old logo file. Goal: ZERO hits anywhere except the kept internal ngf code names. List anything left and why.
4. Full run on localhost (production build, scratch DB): admin login at /private-user/ → create shipment (GW ID) → track publicly → change status → generate each document type → quote request → publish → public quote page → contact message (GW-TKT reference) → Messages inbox → package photo + payment request → proof upload → approve. Confirm the new name, tagline and logo everywhere and that nothing else changed visually (375/768/1440).
5. Confirm there's no demo data in code or seed (`grep -rn "DEMO DATA" src server` is empty) and SEED_DEMO_DATA is unset.
Commit "docs: GAW Parcel Delivery deployment and tracker" (and "fix: …" for any fixes). STOP with a short ready / not-ready report.
```

### Prompt 6: New admin password and session secret (~5 min, mostly me)
```
Set a new admin password and session secret for GAW Parcel Delivery Ltd. This is configuration only: don't edit auth logic, and never ask me for the password.

1. Give me the two commands to run MYSELF in the project folder:
   - node -e "console.log(require('bcryptjs').hashSync('MY-NEW-PASSWORD', 12))"
   - node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"
2. Tell me exactly what to put in my local .env (ADMIN_PASSWORD_HASH, SESSION_SECRET), whether the `$` characters in the hash need quoting, and remind me the same values go into Hostinger in P7. They must be NEW values, not ones used by any previous site.
3. After I say "done", restart and have me confirm: the old password is rejected, the new one works at http://localhost:3000/private-user/, and logout/login works.
STOP.
```

### Prompt 7: New GitHub repo and deploy to gawparceldeliveryltd.com on Hostinger (~20 min, mostly me in hPanel)
```
Prepare the deploy per docs/DEPLOYMENT.md. Don't deploy anything yourself; give me exact steps. This is a NEW site with a NEW repo, app and database (I created the empty repo, the Hostinger app, the gawparcel-data folder and the mailbox in parallel, and pointed the DNS).

1. GitHub, fresh history (no previous-brand commits or messages): check .gitignore excludes node_modules, dist, dist-server, data and .env, then give me the commands: `git checkout --orphan gaw-main`, `git add -A`, commit "GAW Parcel Delivery Ltd: initial release", `git branch -M main`, `git remote add origin <MY NEW EMPTY REPO URL>`, `git push -u origin main`. Ask me for the repo URL; don't guess it. Before pushing, confirm `git remote -v` shows ONLY the new repo and `git log --all --oneline` on the new main has exactly one commit. Tell me which old local branches to delete after the push (`git branch -D …`) so they're never pushed by accident.
2. hPanel → the new Node.js web app: connect the new repo, branch main, Node 22.x (≥ 22.5), install command `npm install` (postinstall builds; don't build twice), start command `npm start` (entry dist-server/server/index.js).
3. Environment variables: NODE_ENV=production, PORT only if hPanel requires it, ADMIN_PASSWORD_HASH and SESSION_SECRET (from P6), DB_PATH=/home/<user>/gawparcel-data/gawparcel.db and UPLOADS_DIR=/home/<user>/gawparcel-data/uploads (OUTSIDE the deploy directory), SEED_DEMO_DATA unset. The database starts empty.
4. Domain: gawparceldeliveryltd.com on this app, www.gawparceldeliveryltd.com redirecting (301) to the root (one host, so the admin session cookie works), SSL on both, force HTTPS. If DNS hasn't propagated yet, test on the Hostinger temporary URL first and repeat step 5 once it has.
5. Smoke test on the live domain (DEPLOYMENT §7): new logo, name, tagline and tab icon; the share preview uses gawparceldeliveryltd.com and /brand/og-image.jpg returns 200; https://gawparceldeliveryltd.com/private-user/ shows the login and the new password works; /#/admin shows Home and /admin the 404 page; robots.txt and sitemap.xml use the new domain and don't mention private-user; logged in, /api/diag/storage shows DB_PATH and UPLOADS_DIR in gawparcel-data; create → track a GW shipment; redeploy once and confirm the shipment is still there; response headers show compression and the /assets cache rule; view source shows only GAW names, domain and email.
6. Email: add SPF/DKIM/DMARC for the mailbox and send a test to Gmail ("Show original" → all PASS).
STOP and wait for my results, then tick the launch tasks in the tracker and commit "docs: GAW Parcel Delivery live".
```

---

## Utility prompts

### Prompt R: Resume in a new chat
```
Resume the GAW Parcel Delivery Ltd launch. Read CLAUDE.md, PROMPTS.md and docs/PROJECT_TRACKER.md, run `git status`, `git branch` and `git log --oneline -10`, then tell me which prompt we're on and what's next. Don't change anything until I confirm.
```

### Prompt F: Fix something that broke
```
Something broke: [what you see, which page/URL, steps, any error message].
Find the root cause (check the latest commits first) and explain it before fixing. Apply the smallest fix that doesn't change design or unrelated behaviour. Confirm `npm run build` and `npm test` pass and that admin login at /private-user/ → create → track (GW ID) still works, then commit "fix: …".
```

### Prompt O: Owner contact details arrived
```
Here are GAW Parcel Delivery Ltd's details: [phone / WhatsApp / registered office or HQ address / company number / social links / Smartsupp key].
Add them to src/config/brand.ts (and the JSON-LD in index.html). Confirm the UI that was hidden now shows them correctly in the Header, Footer, Contact page, legal pages and documents. Update the values table in PROMPTS.md and the tracker, build, and commit "content: add GAW Parcel Delivery contact details".
```

### Prompt 9 (optional, after launch): Rename the internal ngf code names
```
Rename the internal code names: CSS --ngf-* → --gaw-*, class ngf- → gaw-, storage keys ngf_* → gaw_*, the cookie ngf.sid → gaw.sid (SESSION_COOKIE and the logout clearCookie must change together; this logs everyone out once), and the Cookie Policy text. Update CLAUDE.md §7. It's a mechanical rename with no behaviour change: prove it by comparing the built bundles with the prefixes mapped back. Build, test, check 375/1440, commit "chore: rename internal ngf names to gaw".
```
