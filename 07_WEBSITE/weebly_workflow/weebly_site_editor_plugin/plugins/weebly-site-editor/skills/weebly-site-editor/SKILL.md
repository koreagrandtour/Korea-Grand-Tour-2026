---
name: weebly-site-editor
description: Work on classic Weebly or Square Online websites by reading known site configs, backing up theme code, drafting and testing scoped HTML/CSS/JavaScript, and rolling out reviewed changes through the Weebly editor or Square Online APIs.
---

# Weebly Site Editor

Use this skill when the user wants Codex to inspect, customize, test, or roll out code for a Weebly or Square Online website.

## Known Site

For Korea Grand Tour, read `sites/koreagrandtour.json` from the plugin root before planning edits. That site is a classic Weebly subdomain:

- Canonical URL: `https://koreagrandtour.weebly.com/`
- Editor: `https://www.weebly.com/editor/main.php#/`
- Theme: `MyTheme`, based on `Birdseye`
- Square OAuth has been authorized, but Square Sites API returned no sites.
- Use the Weebly browser/editor path, not Square Snippets API, for Korea Grand Tour.
- A theme backup exists under `backups/koreagrandtour-20260517-181124/`.

## First Decision

Determine which editing surface the account uses:

- Square Online: use Square OAuth, Sites API, and Snippets API.
- Classic Weebly editor: use browser-assisted inspection and the Weebly Theme > Edit HTML/CSS flow where the user is already authorized. Do not ask for raw passwords.

For unknown sites, prefer the Square Online API path when the goal is to deploy site-wide JavaScript, CSS, meta tags, analytics, widgets, banners, or small interactive components and the site appears in `list-sites`.

For classic Weebly sites, prefer theme edits for shared structure/styles/scripts and page editor changes for page-specific content.

## Authorization

For Square Online:

1. Ask the user to create or identify a Square Developer application.
2. Use `scripts/authorize.mjs` for a local OAuth callback, or generate an OAuth URL with `scripts/create-oauth-url.mjs` when exchanging the code elsewhere.
3. Request scopes narrowly:
   - `ONLINE_STORE_SITE_READ`
   - `ONLINE_STORE_SNIPPETS_READ`
   - `ONLINE_STORE_SNIPPETS_WRITE`
4. Exchange the returned authorization code outside the chat transcript or through a secure local callback flow.
5. Store tokens only in local secret storage or an ignored `.square-token.json` file.
6. Use the confidential OAuth code flow when long-running access is required. Square access tokens expire, but code-flow refresh tokens are reusable and do not expire unless access is revoked or invalidated.
7. Refresh access tokens before API calls with `scripts/square-online.mjs`; do not ask the user to reauthorize unless refresh fails.

For classic Weebly:

- Use the browser session the user authorizes.
- Never collect or persist account passwords.
- Keep a manual backup of edited theme files before publishing.
- Do not treat the Square OAuth token as sufficient for classic Weebly theme editing.

## Architecture Notes

Modern Square Online:

- Sites API lists site IDs, titles, domains, and published status.
- Snippets API manages one snippet per Square application per site.
- The snippet is injected into the end of the page `<head>` on site pages.
- Checkout pages are excluded.
- Square does not provide a public sandbox eCommerce environment for Sites/Snippets API calls, so production testing must be careful and reversible.
- Sellers cannot edit an app-managed snippet from the Square Dashboard.
- Long-running write access depends on the saved refresh token and can be revoked by the seller.

Classic Weebly:

- Themes can expose HTML layout files, stylesheets, scripts, and assets in the editor.
- Page content is largely builder-managed; theme edits affect templates and shared surfaces.
- Embedded Code blocks can place page-level HTML/CSS/JS, but complex full-document HTML pasted into a block is often unreliable.
- Theme structure and filenames vary by template.

Korea Grand Tour theme structure:

- Layouts: `header.html`, `no-header.html`, `splash.html`
- Styles: `styles/main.less` imports `_global`, `_nav`, `_page-types`, `_ui-kit`, `_responsive`, and related files.
- Scripts/assets: `assets/custom.js`, `assets/plugins.js`, `assets/images`, `assets/fonts`
- Useful page IDs are in `sites/koreagrandtour.json`.

## Workflow

1. Inspect: identify site type, target URL, target page, existing theme/snippet behavior, and deployment constraints. For known sites, load the matching file under `sites/`.
2. Plan: state whether the change belongs in an API snippet, theme file, page embed, or a migration outside Weebly.
3. Backup: retrieve the current snippet or export/copy existing theme files before edits. For Weebly, export the theme zip first.
4. Draft locally: edit a local copy of the exported theme or a standalone snippet first.
5. Test locally: render the proposed code in a local harness when possible.
6. Review: show the exact diff or snippet content before touching the live editor.
7. Apply: use `scripts/square-online.mjs deploy-snippet` for Square Online, or browser-assisted code editor changes for classic Weebly.
8. Save/publish only after explicit user approval.
9. Verify: inspect the live published page and check console errors, layout, mobile behavior, and rollback path.

## Guardrails

- Do not alter checkout behavior through snippets.
- Avoid scraping private editor endpoints unless the user explicitly approves and the request is consistent with platform terms.
- Do not deploy obfuscated or third-party code without explaining what it loads.
- Do not describe access as guaranteed forever. Say "long-running until revoked or invalidated."
- Keep CSS under a unique namespace such as `.codex-weebly-*`.
- Prefer idempotent snippets that can be safely updated or removed.
- Record the previous snippet content before every overwrite.
- For classic Weebly theme edits, avoid publishing in the same step as saving unless the user explicitly requested it.

## Useful Commands

From the plugin root:

```bash
node scripts/authorize.mjs
node scripts/create-oauth-url.mjs
node scripts/square-online.mjs list-sites
node scripts/square-online.mjs get-snippet <site_id>
node scripts/square-online.mjs deploy-snippet <site_id> ./snippet.html
node scripts/square-online.mjs delete-snippet <site_id>
node scripts/square-online.mjs refresh-token
```

## Primary References

- Square OAuth API: https://developer.squareup.com/docs/oauth-api/overview
- Square Online APIs: https://developer.squareup.com/docs/online-api
- Square Sites API: https://developer.squareup.com/docs/sites-api/overview
- Square Snippets API: https://developer.squareup.com/docs/snippets-api/overview
