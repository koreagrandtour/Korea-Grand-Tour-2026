#!/usr/bin/env node

import crypto from "node:crypto";
import { loadEnv } from "./load-env.mjs";

loadEnv();

const env = process.env;
const applicationId = env.SQUARE_APPLICATION_ID;
const redirectUrl = env.SQUARE_REDIRECT_URL;
const environment = env.SQUARE_ENVIRONMENT || "production";
const scopes =
  env.SQUARE_SCOPES ||
  "ONLINE_STORE_SITE_READ ONLINE_STORE_SNIPPETS_READ ONLINE_STORE_SNIPPETS_WRITE";

if (!applicationId || !redirectUrl) {
  console.error("Set SQUARE_APPLICATION_ID and SQUARE_REDIRECT_URL first.");
  process.exit(1);
}

if (environment === "production" && applicationId.startsWith("sandbox-")) {
  console.error(
    "SQUARE_ENVIRONMENT is production, but SQUARE_APPLICATION_ID is a sandbox app ID. Use the production application ID for your real Square account."
  );
  process.exit(1);
}

if (environment === "sandbox" && !applicationId.startsWith("sandbox-")) {
  console.error(
    "SQUARE_ENVIRONMENT is sandbox, but SQUARE_APPLICATION_ID does not look like a sandbox app ID."
  );
  process.exit(1);
}

const baseUrl =
  environment === "sandbox"
    ? "https://connect.squareupsandbox.com/oauth2/authorize"
    : "https://connect.squareup.com/oauth2/authorize";

const state = crypto.randomBytes(24).toString("hex");
const url = new URL(baseUrl);
url.searchParams.set("client_id", applicationId);
url.searchParams.set("scope", scopes);
url.searchParams.set("session", "false");
url.searchParams.set("state", state);
url.searchParams.set("redirect_uri", redirectUrl);

console.log("Open this URL to authorize the Square account:");
console.log(url.toString());
console.log("");
console.log("State value to verify on callback:");
console.log(state);
