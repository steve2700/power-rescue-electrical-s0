# Power Rescue Electrical

Website for Power Rescue Electrical, emergency and general electricians across Gauteng, South Africa.
Live at https://www.powerrescue.co.za

Built with Next.js (App Router), TypeScript and Tailwind CSS.

## Run it

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## How the site is organised

| Path | What it does |
|---|---|
| `lib/power-rescue.ts` | The list of services (`SERVICES`) and areas (`AREAS`). Header, footer, `/services`, the homepage and the sitemap all read this. |
| `lib/service-pages.ts` | All the content for each service page: headings, FAQs, photos, repair lists. |
| `lib/site.ts` | The site URL (`www`). |
| `components/service-page.tsx` | The shared template every service page uses. |
| `app/[slug]/page.tsx` | Renders a service page from `lib/service-pages.ts`. |
| `app/emergency-electrical-repairs/` | The emergency page, which has its own layout. |
| `app/services`, `faq`, `areas`, `about`, `contact`, `gallery` | The other pages. |
| `components/home/` | The homepage and the WhatsApp job card. |
| `public/pr/` | All project photos. |
| `public/robots.txt`, `public/llms.txt`, `app/sitemap.ts` | Crawler and AI-assistant files. |

## Add a new service

1. Add an entry to `SERVICES` in `lib/power-rescue.ts`.
2. Add a matching block (same slug) to `SERVICE_PAGES` in `lib/service-pages.ts`.
3. Add the photos to `public/pr/`.

The page, the menu, the footer, the sitemap and the homepage pick it up automatically.
Also add it to `public/llms.txt`.

## Before launch

- Set `GOOGLE_ADS_CONVERSION_ID` in `lib/analytics.ts` to turn on conversion tracking.
- Check `app/page.tsx` has the homepage canonical, and that the domain redirects the bare domain to `www`.
