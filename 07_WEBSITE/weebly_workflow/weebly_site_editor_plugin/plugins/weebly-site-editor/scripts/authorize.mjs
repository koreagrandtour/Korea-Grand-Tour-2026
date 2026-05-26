#!/usr/bin/env node

import crypto from "node:crypto";
import fs from "node:fs/promises";
import http from "node:http";
import { loadEnv } from "./load-env.mjs";

loadEnv();

const env = process.env;
const applicationId = env.SQUARE_APPLICATION_ID;
const applicationSecret = env.SQUARE_APPLICATION_SECRET;
const redirectUrl = env.SQUARE_REDIRECT_URL || "http://localhost:8787/oauth/callback";
const callbackHost = env.SQUARE_CALLBACK_HOST || "127.0.0.1";
const callbackPort = Number(env.SQUARE_CALLBACK_PORT || "8787");
const environment = env.SQUARE_ENVIRONMENT || "production";
const scopes =
  env.SQUARE_SCOPES ||
  "ONLINE_STORE_SITE_READ ONLINE_STORE_SNIPPETS_READ ONLINE_STORE_SNIPPETS_WRITE";
const version = env.SQUARE_VERSION || "2026-01-22";
const tokenPath = env.SQUARE_TOKEN_PATH || ".square-token.json";
const tokenFileMode = 0o600;

if (!applicationId || !applicationSecret) {
  console.error("Set SQUARE_APPLICATION_ID and SQUARE_APPLICATION_SECRET first.");
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

const connectBase =
  environment === "sandbox"
    ? "https://connect.squareupsandbox.com"
    : "https://connect.squareup.com";
const state = crypto.randomBytes(24).toString("hex");
const callbackUrl = new URL(redirectUrl);
const authorizeUrl = new URL(`${connectBase}/oauth2/authorize`);

authorizeUrl.searchParams.set("client_id", applicationId);
authorizeUrl.searchParams.set("scope", scopes);
authorizeUrl.searchParams.set("session", "false");
authorizeUrl.searchParams.set("state", state);
authorizeUrl.searchParams.set("redirect_uri", redirectUrl);

async function exchangeCode(code) {
  const response = await fetch(`${connectBase}/oauth2/token`, {
    method: "POST",
    headers: {
      "Square-Version": version,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      client_id: applicationId,
      client_secret: applicationSecret,
      code,
      grant_type: "authorization_code",
      redirect_uri: redirectUrl,
    }),
  });

  const payload = await response.json();

  if (!response.ok) {
    throw new Error(JSON.stringify(payload, null, 2));
  }

  const tokenRecord = {
    ...payload,
    environment,
    square_version: version,
    authorized_at: new Date().toISOString(),
  };

  await fs.writeFile(tokenPath, `${JSON.stringify(tokenRecord, null, 2)}\n`, {
    mode: tokenFileMode,
  });
}

const server = http.createServer(async (request, response) => {
  try {
    const requestUrl = new URL(request.url || "/", redirectUrl);

    if (requestUrl.pathname !== callbackUrl.pathname) {
      response.writeHead(404);
      response.end("Not found");
      return;
    }

    const returnedState = requestUrl.searchParams.get("state");
    const code = requestUrl.searchParams.get("code");
    const error = requestUrl.searchParams.get("error");

    if (error) {
      throw new Error(error);
    }

    if (!code || returnedState !== state) {
      throw new Error("OAuth callback was missing a code or failed state verification.");
    }

    await exchangeCode(code);
    response.writeHead(200, { "Content-Type": "text/plain" });
    response.end(
      `Authorization complete. Token saved to ${tokenPath}. You can close this tab.`
    );
    console.log(`Authorization complete. Token saved to ${tokenPath}.`);
    console.log("Future API calls can refresh access automatically from this token file.");
    server.close();
  } catch (error) {
    response.writeHead(500, { "Content-Type": "text/plain" });
    response.end(String(error.message || error));
    console.error(error);
    server.close(() => process.exit(1));
  }
});

server.listen(callbackPort, callbackHost, () => {
  console.log("Open this URL to authorize the Square account:");
  console.log(authorizeUrl.toString());
  console.log("");
  console.log(`Waiting locally at http://${callbackHost}:${callbackPort}${callbackUrl.pathname}`);
  console.log(`Square will redirect to ${redirectUrl}`);
});
