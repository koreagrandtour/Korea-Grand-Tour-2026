# KGT Route Map Itinerary Deployment

This route page is intended to run from a static host plus a server-side Kakao API bridge.

Recommended production host:

- Cloudflare Pages connected to this GitHub repository
- Build command: none
- Output directory: `docs`
- Pages Functions directory: `functions`

Required Cloudflare environment variables:

- `KAKAO_JAVASCRIPT_KEY`
- `KAKAO_REST_API_KEY`

Kakao Developers configuration:

- Register the final Pages domain for the JavaScript key.
- Keep the REST API key server-side only. Do not put it in HTML or JavaScript.

Working URL after Cloudflare Pages deploy:

```text
https://<cloudflare-pages-domain>/kgt-route-map-itinerary/
```

The page also works locally if the existing KGT API bridge is running on `http://localhost:8787`.
