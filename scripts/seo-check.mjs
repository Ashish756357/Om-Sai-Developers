import assert from "node:assert/strict";

const isProduction = process.env.SEO_CHECK_ENV === "production";
const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
const baseUrl = configuredUrl ?? "http://localhost:3000";

if (isProduction) {
  assert.ok(configuredUrl, "NEXT_PUBLIC_SITE_URL is required in production.");
}

const siteUrl = new URL(baseUrl);
assert.ok(siteUrl.protocol === "https:" || !isProduction, "Production site URL must use HTTPS.");

const get = async (pathname) => {
  const response = await fetch(new URL(pathname, siteUrl));
  assert.equal(response.status, 200, `${pathname} returned HTTP ${response.status}.`);
  return response;
};

const html = await (await get("/")).text();
const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
const title = html.match(/<title>([^<]+)<\/title>/i)?.[1];
const description = html.match(/<meta name="description" content="([^"]+)"/i)?.[1];
const h1Count = (html.match(/<h1\b/gi) ?? []).length;
const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/i)?.[1];

assert.ok(title, "Homepage title is missing.");
assert.ok(description, "Homepage description is missing.");
assert.equal(h1Count, 1, `Expected one H1, found ${h1Count}.`);
assert.ok(canonical, "Canonical link is missing.");
assert.equal(new URL(canonical).origin, siteUrl.origin, "Canonical origin does not match site origin.");
assert.ok(jsonLd, "JSON-LD is missing.");
JSON.parse(jsonLd);

if (isProduction) {
  assert.ok(!html.includes("http://localhost"), "Production HTML contains a localhost URL.");
}

const robots = await (await get("/robots.txt")).text();
assert.match(robots, /User-Agent:\s*\*/i, "robots.txt has no wildcard user agent.");
assert.match(robots, new RegExp(`Sitemap:\\s*${siteUrl.origin.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}/sitemap\\.xml`, "i"));

const sitemap = await (await get("/sitemap.xml")).text();
assert.match(sitemap, new RegExp(`<loc>${siteUrl.origin.replace(/[.*+?^${}()|[\\]\\\\]/g, "\\$&")}/?</loc>`));
if (isProduction) {
  assert.doesNotMatch(sitemap, /localhost/, "Sitemap contains localhost in production.");
}

const internalLinks = [...html.matchAll(/href="(\/[^"]*)"/gi)].map((match) => match[1]);
for (const pathname of [...new Set(internalLinks)]) {
  await get(pathname);
}

console.log(`SEO checks passed for ${siteUrl.origin}: title, description, canonical, H1, JSON-LD, robots, sitemap, and ${new Set(internalLinks).size} internal link target(s).`);
