const defaultSiteUrl = process.env.NODE_ENV === "production"
	? "https://www.omsaidevelopers.com"
	: "http://localhost:3000";

export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL ?? defaultSiteUrl);

export const siteOrigin = siteUrl.origin;
