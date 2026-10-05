# Borehole Works — Website

Marketing website for **Borehole Works**, a borehole drilling, pump, water tank and plumbing company serving Gauteng, South Africa (Pretoria, Centurion, Midrand, Johannesburg, Sandton and surrounds).

- **Live URL:** https://www.boreholeworks.co.za
- **Framework:** Next.js (App Router) + TypeScript + Tailwind CSS
- **Package manager:** pnpm
- **Deployment:** <!-- TODO: confirm — Vercel? -->

---

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site locally.

```bash
pnpm build   # production build
pnpm start   # run the production build locally
```

---

## Brand Reference

| | |
|---|---|
| **Company name** | Borehole Works |
| **Phone** | 072 411 5472 |
| **WhatsApp** | wa.me/27724115472 |
| **Email** | <!-- TODO: add --> |
| **Location** | Gauteng, South Africa |
| **Logo mark** | Water droplet icon — see `/public/water_droplet_logo_transparent.png` |

Keep any new copy consistent with this reference.

---

## Project Structure

```
app/
├── layout.tsx                          # Root layout, metadata, JSON-LD
├── page.tsx                            # Homepage → renders HomepageExperience
├── about/
├── contact/
├── faq/
├── gallery/
├── privacy-policy/
├── terms-of-service/
├── services/                           # Services overview (/services)
├── service-areas/                      # Service area hub + per-suburb pages
├── borehole-drilling/                  # Service page
├── pump-installation-repairs/          # Service page
├── solar-borehole-pumps/               # Service page
├── jojo-water-tank-installation/       # Service page
├── irrigation-systems/                 # Service page
├── plumbing-services/                  # Service page
├── geyser-installation-repairs/        # Service page
├── blocked-drains-unblocking/          # Service page
├── emergency-plumber-burst-pipes/      # Service page
└── sitemap.ts

components/
├── header.tsx
├── footer.tsx
├── whatsapp-button.tsx
├── service-cta.tsx
├── service-page-template.tsx           # Shared wrapper for all /service pages
├── service-area-template.tsx           # Shared wrapper for all /service-areas/[suburb] pages
├── scroll-reveal.tsx                   # Scroll-in animation (up / left / wipe variants)
├── breadcrumbs.tsx
├── contact-form.tsx
├── contact-info.tsx
├── image-marquee.tsx
├── plumbing-cta.tsx
├── theme-provider.tsx
├── watermarked-image.tsx
├── icons/
├── ui/
├── home/
│   ├── home-data.ts                    # Homepage arrays: hero images, service index, audience tabs, gallery strip
│   └── homepage-experience.tsx         # Homepage component, imports data from home-data.ts
└── service-area/
    ├── area-photo.tsx
    ├── area-call-desk.tsx
    └── area-schema.tsx                 # JSON-LD schema builder for area pages

lib/
├── analytics.ts
├── utils.ts
└── service-areas/
    ├── index.ts                        # Re-exports everything; SERVICE_AREAS array; getServiceArea(), areaUrl()
    ├── gallery.ts                      # GALLERY: every job photo, its caption and watermark flag
    ├── services.ts                     # SERVICES: the 9 service keys, names and hrefs
    ├── types.ts                        # ServiceArea, AreaSlug, GalleryPhoto types
    └── areas/                          # One file per suburb, each with 9 callouts (all services)
        ├── pretoria.ts
        ├── centurion.ts
        ├── midrand.ts
        ├── johannesburg.ts
        ├── sandton.ts
        ├── morningside.ts
        ├── fourways.ts
        ├── randburg.ts
        ├── rosebank.ts
        ├── roodepoort.ts
        └── bedfordview.ts

public/
├── favicon.ico, favicon-16x16.png, favicon-32x32.png
├── site.webmanifest
├── water_droplet_logo_transparent.png
└── ...job photos referenced in lib/service-areas/gallery.ts
```

---

## Current Services (9)

The active service list, defined in `lib/service-areas/services.ts` and used across the header nav, homepage index, and every service-area page:

1. Borehole Drilling
2. Pump Installation & Repairs
3. Solar Borehole Pumps
4. JoJo Water Tank Installation
5. Irrigation Systems
6. Plumbing Services
7. Geyser Installation & Repairs
8. Blocked Drains Unblocking
9. Emergency Plumber & Burst Pipes

**Removed:** Bathroom Renovations (folder deleted; not part of the current offering).

---

## Service Areas (11)

Pretoria, Centurion, Midrand, Johannesburg, Sandton, Morningside, Fourways, Randburg, Rosebank, Roodepoort, Bedfordview.

Each has its own file under `lib/service-areas/areas/`, with 9 callouts (one per service, each with unique local copy and a unique photo within that page) plus a hero, a local "story" section, an FAQ set, and a list of suburbs it covers.

---

## URL Structure

- Service pages: `/service-name` (e.g. `/borehole-drilling`)
- Service areas: `/service-areas/[suburb]` (e.g. `/service-areas/pretoria`)

---

## Notes for Future Edits

- **`ServiceAreaTemplate`** (`components/service-area-template.tsx`) is a shared wrapper — editing it affects *every* service-area page at once. Check there first before assuming a bug is suburb-specific.
- **`lib/service-areas/`** is intentionally split one file per suburb so no single file grows unmanageable. To add a new suburb: create `lib/service-areas/areas/<slug>.ts`, add the slug to `AreaSlug` in `types.ts`, then import and add it to the `SERVICE_AREAS` array in `index.ts`.
- To add a new service: add it to `SERVICES` in `lib/service-areas/services.ts`, then add a matching callout (with a photo already in `GALLERY`) to whichever area files should offer it.
- **`components/home/`** follows the same pattern: `home-data.ts` holds the static arrays (hero images, service index, audience tabs, gallery strip), `homepage-experience.tsx` holds only markup and behavior. Add new homepage content to `home-data.ts`, not inline in the component.
- **`ScrollReveal`** (`components/scroll-reveal.tsx`) has an outer/inner div split on purpose — the outer div is what gets observed for scroll visibility, the inner div carries the animation styles. The `wipe` variant's `clip-path` breaks scroll detection if applied to the observed element directly, so don't collapse this back into one div.
- Bulk find-and-replace across the repo (e.g. for a phone number change) works well from Git Bash:
  ```bash
  find . -type f \( -name "*.tsx" -o -name "*.ts" \) -not -path "*/node_modules/*" \
    -exec sed -i 's/OLD_VALUE/NEW_VALUE/g' {} +
  ```
  Always `grep -r` first to preview matches before running the replace.

---

## Known TODOs

- [ ] Confirm deployment provider and add it above.
- [ ] Add a real contact email to the Brand Reference table.
