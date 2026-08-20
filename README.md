# Open Electribe Editor — Website

SEO-optimized, bilingual (EN/DE) landing page for the [Open Electribe Editor](https://github.com/vxdy/Open-Korg-ESX-Sample-Manager) project, built as a static site for GitHub Pages. No build step, no dependencies — just static HTML/CSS/JS.

## Structure

```
index.html                 English page (site root)
de/index.html               German page
assets/css/style.css        Shared styles
assets/js/main.js           Mobile nav + install-tabs toggle (progressive enhancement only)
assets/img/                 Generated icons, OG images, and UI mockup placeholders
robots.txt, sitemap.xml     Crawling / indexing
manifest.webmanifest        PWA-ish metadata for the icon
404.html                    Custom not-found page
.nojekyll                   Disables Jekyll processing on GitHub Pages
```

## Deploying to GitHub Pages

1. Turn this folder into its own git repository (or push it into an existing one) and push to GitHub.
2. In the repo, go to **Settings → Pages** and set the source to the `main` (or `master`) branch, root folder.
3. GitHub will publish it at `https://<your-username>.github.io/<repo-name>/`.

### If your final URL differs from the placeholder

Every page currently assumes the site lives at:

```
https://vxdy.github.io/open-electribe-editor-site/
```

That exact string appears in `index.html`, `de/index.html`, `robots.txt`, and `sitemap.xml` (canonical URLs, hreflang alternates, Open Graph URLs/images, sitemap entries). If you rename the repo or use a custom domain, replace it everywhere, e.g.:

```bash
grep -rl "vxdy.github.io/open-electribe-editor-site" . | xargs sed -i 's#https://vxdy.github.io/open-electribe-editor-site#https://YOUR-NEW-BASE-URL#g'
```

If you use a **custom domain**, also add a `CNAME` file at the root containing just the domain name.

All internal links (nav, CSS/JS/img, favicons) use root-relative paths (`/assets/...`), which only work correctly once the site is served from the domain root — i.e. after Pages is live. They will look broken if you just double-click `index.html` locally; serve the folder with a local static server instead (e.g. `python -m http.server`) to preview it.

## Replacing the screenshot placeholders

There are no real product screenshots yet, so `assets/img/mockup-hero.png`, `mockup-patterns.png` and `mockup-samples.png` are stylized mockups generated to match the tab layout described in the app's README — not actual screenshots. They're clearly labeled as previews on the hero section.

To swap in real screenshots:

1. Capture the actual app UI (same dark theme) at roughly the same aspect ratio (hero: 1400×900, showcase: 1200×760 works best, but any size is fine — the CSS scales images to fit).
2. Replace the files in `assets/img/` with the same filenames, or update the `src`/`width`/`height` attributes in `index.html` and `de/index.html` if you rename them.
3. Remove the "UI preview — mockup, not a live screenshot" badge (`.mockup-tag` span) in the hero section once it's a real screenshot.
4. Consider regenerating `assets/img/og-image.png` / `og-image-de.png` with an actual UI crop for a more authentic social-share preview (the generator script used is not included here — these were produced with a one-off Python/Pillow script).

## SEO features included

- Unique title/meta description per language, canonical URLs, `hreflang` alternates (`en`, `de`, `x-default`)
- Open Graph + Twitter Card tags with per-language share images
- `SoftwareApplication` and `FAQPage` JSON-LD structured data on both pages
- `robots.txt` + `sitemap.xml` with hreflang annotations
- Semantic HTML (single `h1`, landmark regions, skip link), descriptive `alt` text
- Fast-loading: no external fonts/JS/CSS dependencies, everything self-hosted

## Notes

- No `LICENSE` file exists in the source repository at the time of writing, so the site avoids naming a specific license — it just links to the GitHub repo. Add a proper license badge/link once one is chosen.
- Copy is grounded in the source repo's `README.md`; no Electribe model numbers or unverified claims were added.
