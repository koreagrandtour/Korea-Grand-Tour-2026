# Weebly Site Editor

Local Codex plugin scaffold for working on classic Weebly and Square Online websites with code.

## Current Shape

- Uses Square OAuth for modern Square Online authorization.
- Keeps long-running access by storing the OAuth refresh token locally and refreshing access tokens before API calls.
- Uses Square Sites API to list available Square Online sites.
- Uses Square Snippets API to add, update, retrieve, or remove one site-wide snippet per app.
- Keeps classic Weebly theme editing as a browser-assisted workflow because public API coverage for full theme source editing is not the same as Square Online snippet deployment.
- Tracks known target sites under `sites/`.
- For Korea Grand Tour, the confirmed write path is the logged-in Weebly editor, not Square Sites/Snippets API.

## Current Target

The current target site is Korea Grand Tour:

- Provided URL: `https://www.koreagrandtour.weebly.com`
- Canonical URL: `https://koreagrandtour.weebly.com/`
- Public pages observed: Home, About, Route, Rides, Join
- Editor route: `Theme > Edit HTML / CSS`
- Theme: `MyTheme`, based on `Birdseye`
- Current backup: `backups/koreagrandtour-20260517-181124/export.zip`

Square OAuth was completed, but `node scripts/square-online.mjs list-sites` returned no sites. Future chats should use the Weebly editor/browser workflow for this site.

## Access Duration

Square does not issue a literal forever access token. In the confidential OAuth code flow, the refresh token can be reused and does not expire unless the seller revokes the app authorization, the token is lost, or Square changes/invalidates access. Access tokens still expire and must be refreshed.

This plugin is configured for that long-running model:

- Request write scope during authorization.
- Save the refresh token in `.square-token.json`, which is ignored by git.
- Automatically refresh the access token before Square Online API calls when the saved token is near expiry.
- Let the seller revoke access from Square when desired.

## Supported Deployment Path

Square Online supports a snippet application model:

1. Authorize a Square seller account with OAuth.
2. List sites with `ONLINE_STORE_SITE_READ`.
3. Deploy HTML/CSS/JavaScript with `ONLINE_STORE_SNIPPETS_WRITE`.
4. Verify the published site in a browser.

Square inserts the snippet at the end of the page `<head>` on site pages, excluding checkout pages. A given app can manage one snippet per site.

## Local Scripts

```bash
node scripts/authorize.mjs
node scripts/create-oauth-url.mjs
node scripts/square-online.mjs list-sites
node scripts/square-online.mjs get-snippet <site_id>
node scripts/square-online.mjs deploy-snippet <site_id> ./snippet.html
node scripts/square-online.mjs delete-snippet <site_id>
node scripts/square-online.mjs refresh-token
```

See `.env.example` for required environment variables.

The scripts read `.env` automatically from the plugin root.

For a real production Square app, register an HTTPS redirect URL in Square. During local development, use an HTTPS tunnel that forwards to `http://127.0.0.1:8787/oauth/callback`, put the HTTPS tunnel URL in `SQUARE_REDIRECT_URL`, and keep `SQUARE_CALLBACK_HOST=127.0.0.1` plus `SQUARE_CALLBACK_PORT=8787`.

## Safety Model

- Never store Square secrets in this repository.
- Keep `.env` and `.square-token.json` local only.
- Treat `.square-token.json` as full write access to your authorized Square Online sites.
- Review generated snippets before deployment.
- Retrieve and save the existing snippet before overwriting it.
- For classic Weebly, export the theme zip before every code rollout.
- Save and publish are separate review gates; do not publish without explicit user approval.
- Verify behavior on the live site after deployment because Square Online has no public sandbox eCommerce environment for these APIs.
