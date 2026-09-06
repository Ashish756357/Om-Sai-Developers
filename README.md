# Om-Sai-Developers

## SEO deployment

Set `NEXT_PUBLIC_SITE_URL=https://www.omsaidevelopers.com` in the deployment environment. The production fallback also uses this verified HTTPS origin, while development defaults to `http://localhost:3000`. Metadata, canonical, JSON-LD, `robots.txt`, and the sitemap derive their origin from this variable.

Run the local production smoke test with:

```sh
npm run build
npm run start
npm run seo:check
```

Run the deployment-mode guard with `SEO_CHECK_ENV=production npm run seo:check`. It fails unless `NEXT_PUBLIC_SITE_URL` is configured and uses HTTPS.