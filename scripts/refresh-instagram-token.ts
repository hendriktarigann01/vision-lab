// scripts/refresh-instagram-token.ts
// Jalankan script ini setiap 50 hari (sebelum 60 hari expired)

import * as dotenv from "dotenv";
import * as fs from "fs";
import * as path from "path";

dotenv.config({ path: ".env.local" });

interface TokenResponse {
  access_token: string;
  token_type: string;
  expires_in: number;
}

interface LongLivedTokenResponse extends TokenResponse {
  expires_in: number; // 5184000 seconds = 60 days
}

async function exchangeForLongLivedToken(
  shortLivedToken: string
): Promise<LongLivedTokenResponse> {
  const appId = process.env.FACEBOOK_APP_ID;
  const appSecret = process.env.FACEBOOK_APP_SECRET;

  if (!appId || !appSecret) {
    throw new Error("Missing FACEBOOK_APP_ID or FACEBOOK_APP_SECRET");
  }

  const url = `https://graph.facebook.com/v24.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${appId}&client_secret=${appSecret}&fb_exchange_token=${shortLivedToken}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Token exchange failed: ${JSON.stringify(data)}`);
  }

  return data;
}

async function refreshLongLivedToken(
  currentToken: string
): Promise<LongLivedTokenResponse> {
  const url = `https://graph.facebook.com/v24.0/oauth/access_token?grant_type=fb_exchange_token&client_id=${process.env.FACEBOOK_APP_ID}&client_secret=${process.env.FACEBOOK_APP_SECRET}&fb_exchange_token=${currentToken}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Token refresh failed: ${JSON.stringify(data)}`);
  }

  return data;
}

async function getTokenExpiration(token: string): Promise<number> {
  const url = `https://graph.facebook.com/v24.0/debug_token?input_token=${token}&access_token=${token}`;

  const response = await fetch(url);
  const data = await response.json();

  if (!response.ok) {
    throw new Error(`Token debug failed: ${JSON.stringify(data)}`);
  }

  return data.data.expires_at;
}

async function updateEnvFile(newToken: string) {
  const envPath = path.join(process.cwd(), ".env.local");
  let envContent = fs.readFileSync(envPath, "utf8");

  // Replace token
  const tokenRegex = /INSTAGRAM_ACCESS_TOKEN=.*/;
  envContent = envContent.replace(
    tokenRegex,
    `INSTAGRAM_ACCESS_TOKEN=${newToken}`
  );

  // Add timestamp
  const now = new Date().toISOString();
  const timestampRegex = /INSTAGRAM_TOKEN_UPDATED_AT=.*/;

  if (envContent.includes("INSTAGRAM_TOKEN_UPDATED_AT")) {
    envContent = envContent.replace(
      timestampRegex,
      `INSTAGRAM_TOKEN_UPDATED_AT=${now}`
    );
  } else {
    envContent += `\nINSTAGRAM_TOKEN_UPDATED_AT=${now}`;
  }

  fs.writeFileSync(envPath, envContent);
  console.log(".env.local updated successfully");
}

async function main() {
  try {
    const currentToken = process.env.INSTAGRAM_ACCESS_TOKEN;

    if (!currentToken) {
      throw new Error("INSTAGRAM_ACCESS_TOKEN not found in .env.local");
    }

    console.log("Checking current token...");

    // Check expiration
    const expiresAt = await getTokenExpiration(currentToken);
    const expiresDate = new Date(expiresAt * 1000);
    const daysUntilExpiry = Math.floor(
      (expiresAt * 1000 - Date.now()) / (1000 * 60 * 60 * 24)
    );

    console.log(`Current token expires: ${expiresDate.toLocaleString()}`);
    console.log(`Days until expiry: ${daysUntilExpiry} days`);

    if (daysUntilExpiry > 10) {
      console.log("Token is still valid, no refresh needed");
      return;
    }

    console.log("Refreshing token...");

    // Refresh token
    const newTokenData = await refreshLongLivedToken(currentToken);

    console.log("✅ New token obtained");
    console.log(
      `New token expires in: ${newTokenData.expires_in / 86400} days`
    );

    // Update .env.local
    await updateEnvFile(newTokenData.access_token);

    console.log("🎉 Token refresh completed successfully!");
    console.log("⚠️  Remember to redeploy your application with the new token");
  } catch (error) {
    console.error("❌ Token refresh failed:", error);
    process.exit(1);
  }
}

main();
