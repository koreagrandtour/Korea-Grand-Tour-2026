#!/usr/bin/env node

import fs from "node:fs/promises";
import { loadEnv } from "./load-env.mjs";

loadEnv();

const command = process.argv[2];
const siteId = process.argv[3];
const inputPath = process.argv[4];

const explicitAccessToken = process.env.SQUARE_ACCESS_TOKEN;
const applicationId = process.env.SQUARE_APPLICATION_ID;
const applicationSecret = process.env.SQUARE_APPLICATION_SECRET;
const tokenPath = process.env.SQUARE_TOKEN_PATH || ".square-token.json";
const version = process.env.SQUARE_VERSION || "2026-01-22";
const environment = process.env.SQUARE_ENVIRONMENT || "production";
const baseUrl =
  environment === "sandbox"
    ? "https://connect.squareupsandbox.com"
    : "https://connect.squareup.com";

if (
  environment === "production" &&
  process.env.SQUARE_APPLICATION_ID?.startsWith("sandbox-")
) {
  console.error(
    "SQUARE_ENVIRONMENT is production, but SQUARE_APPLICATION_ID is a sandbox app ID. Use the production application ID for your real Square account."
  );
  process.exit(1);
}

let accessToken = explicitAccessToken;
let tokenRecord = null;

async function readTokenRecord() {
  if (explicitAccessToken) return null;

  try {
    const text = await fs.readFile(tokenPath, "utf8");
    return JSON.parse(text);
  } catch (error) {
    if (error.code === "ENOENT") {
      console.error(
        "Authorize first with scripts/authorize.mjs, or set SQUARE_ACCESS_TOKEN."
      );
      process.exit(1);
    }
    throw error;
  }
}

function isExpiringSoon(record) {
  if (!record?.expires_at) return false;

  const expiresAt = Date.parse(record.expires_at);
  if (Number.isNaN(expiresAt)) return false;

  const fiveMinutes = 5 * 60 * 1000;
  return expiresAt - Date.now() <= fiveMinutes;
}

async function writeTokenRecord(record) {
  await fs.writeFile(tokenPath, `${JSON.stringify(record, null, 2)}\n`, {
    mode: 0o600,
  });
}

async function refreshAccessToken(record) {
  if (!record?.refresh_token) {
    console.error("The token file has no refresh_token. Run scripts/authorize.mjs again.");
    process.exit(1);
  }

  if (!applicationId || !applicationSecret) {
    console.error(
      "Set SQUARE_APPLICATION_ID and SQUARE_APPLICATION_SECRET to refresh access."
    );
    process.exit(1);
  }

  const response = await fetch(`${baseUrl}/oauth2/token`, {
    method: "POST",
    headers: {
      "Square-Version": version,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: applicationId,
      client_secret: applicationSecret,
      grant_type: "refresh_token",
      refresh_token: record.refresh_token,
    }),
  });

  const payload = await response.json();

  if (!response.ok) {
    console.error(JSON.stringify(payload, null, 2));
    process.exit(response.status);
  }

  const nextRecord = {
    ...record,
    ...payload,
    environment,
    square_version: version,
    refreshed_at: new Date().toISOString(),
  };

  await writeTokenRecord(nextRecord);
  return nextRecord;
}

async function ensureAccessToken({ forceRefresh = false } = {}) {
  if (explicitAccessToken && !forceRefresh) {
    accessToken = explicitAccessToken;
    return;
  }

  tokenRecord ||= await readTokenRecord();

  if (forceRefresh || isExpiringSoon(tokenRecord) || !tokenRecord.access_token) {
    tokenRecord = await refreshAccessToken(tokenRecord);
  }

  accessToken = tokenRecord.access_token;
}

async function squareFetch(path, options = {}) {
  const response = await fetch(`${baseUrl}${path}`, {
    ...options,
    headers: {
      "Square-Version": version,
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
      ...(options.headers || {}),
    },
  });

  const text = await response.text();
  const payload = text ? JSON.parse(text) : {};

  if (!response.ok) {
    console.error(JSON.stringify(payload, null, 2));
    process.exit(response.status);
  }

  return payload;
}

function requireSiteId() {
  if (!siteId) {
    console.error(`Usage: node scripts/square-online.mjs ${command} <site_id>`);
    process.exit(1);
  }
}

async function main() {
  if (command === "refresh-token") {
    await ensureAccessToken({ forceRefresh: true });
    console.log(`Refreshed access token in ${tokenPath}.`);
    return;
  }

  await ensureAccessToken();

  if (command === "list-sites") {
    const payload = await squareFetch("/v2/sites");
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  if (command === "get-snippet") {
    requireSiteId();
    const payload = await squareFetch(`/v2/sites/${siteId}/snippet`);
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  if (command === "deploy-snippet") {
    requireSiteId();
    if (!inputPath) {
      console.error("Usage: node scripts/square-online.mjs deploy-snippet <site_id> <snippet_file>");
      process.exit(1);
    }

    const content = await fs.readFile(inputPath, "utf8");
    const payload = await squareFetch(`/v2/sites/${siteId}/snippet`, {
      method: "POST",
      body: JSON.stringify({ snippet: { content } }),
    });
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  if (command === "delete-snippet") {
    requireSiteId();
    const payload = await squareFetch(`/v2/sites/${siteId}/snippet`, {
      method: "DELETE",
    });
    console.log(JSON.stringify(payload, null, 2));
    return;
  }

  console.error(`Unknown command: ${command || "(none)"}`);
  console.error(
    "Commands: list-sites, get-snippet, deploy-snippet, delete-snippet, refresh-token"
  );
  process.exit(1);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
