#!/usr/bin/env node
/**
 * Notion Free -> Make Zero-Polling Bridge
 * Queries the Notion Content Pipeline database for articles in state
 * "🚀 Disparar Automatización" that have not been distributed yet,
 * and triggers the Make Custom Webhook with ?page_id=<id>.
 */

const NOTION_TOKEN = process.env.NOTION_TOKEN;
const NOTION_DATABASE_ID =
  process.env.NOTION_DATABASE_ID || "0d7558e3408a4c3db06c5aada7b9d9c1";
const MAKE_WEBHOOK_URL =
  process.env.MAKE_WEBHOOK_URL ||
  "https://hook.us2.make.com/ms2v5jah3lz9woirqqjon395y6ckst4n";

if (!NOTION_TOKEN) {
  console.error("❌ Missing NOTION_TOKEN environment variable (GitHub Secret).");
  process.exit(1);
}

async function queryReadyArticles() {
  const url = `https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`;

  const payload = {
    filter: {
      and: [
        {
          property: "Status",
          select: { equals: "🚀 Disparar Automatización" },
        },
        {
          property: "Canonical URL",
          url: { is_not_empty: true },
        },
        {
          property: "Dev.to Post ID",
          rich_text: { is_empty: true },
        },
        {
          property: "Slug",
          rich_text: { is_not_empty: true },
        },
      ],
    },
  };

  const response = await fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${NOTION_TOKEN}`,
      "Notion-Version": "2022-06-28",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errText = await response.text();
    throw new Error(`Notion API Error (${response.status}): ${errText}`);
  }

  const data = await response.json();
  return data.results || [];
}

async function triggerMakeWebhook(page) {
  const pageId = page.id.replace(/-/g, "");
  const titleProp = page.properties?.Title?.title || [];
  const title = titleProp.map((t) => t.plain_text).join("") || pageId;

  const triggerUrl = `${MAKE_WEBHOOK_URL}?page_id=${encodeURIComponent(pageId)}`;
  console.log(`🚀 Disparando Make Webhook para: "${title}" (page_id: ${pageId})...`);

  const res = await fetch(triggerUrl, { method: "GET" });
  const body = await res.text();

  if (!res.ok) {
    throw new Error(`Make Webhook falló (${res.status}): ${body}`);
  }

  console.log(`✅ Respuesta de Make (${res.status}): ${body}`);
}

async function main() {
  console.log("🔍 Consultando Notion Content Pipeline por artículos en '🚀 Disparar Automatización'...");
  const pages = await queryReadyArticles();

  if (pages.length === 0) {
    console.log("✨ No hay artículos pendientes en '🚀 Disparar Automatización'. 0 operaciones consumidas en Make.");
    return;
  }

  console.log(`📦 Se encontraron ${pages.length} artículo(s) listos para distribuir.`);
  for (const page of pages) {
    await triggerMakeWebhook(page);
  }
}

main().catch((err) => {
  console.error("❌ Error en Notion-Make Bridge:", err.message);
  process.exit(1);
});
