# Serene Palms build record

## 2026-09-03

### Added
- Replaced the ShaderGradient hero background with a lightweight React Three Fiber scene using Drei `RoundedBox`, soft lighting, slow rotation, and subtle pointer response.
- Paused the R3F render loop when the browser tab is hidden via `document.visibilityState`.
- Replaced the starter Next.js screen with the Serene Palms Township real-estate landing page.
- Added a sticky responsive navigation with anchor links, a site-visit modal, and a floating WhatsApp action.
- Added a client-side lead capture form for brochure requests and site visits.
- Added trust badges covering Collector-sanctioned NA status, individual 7/12 extracts, TP sanction, and loan assistance.
- Added highlights, amenities, configurations, location, master-plan inventory, calculator, contact, and compliance footer sections.
- Added interactive plot cards with Available, Booked, and Sold states.
- Added a client-side investment calculator for five-year capital gain and monthly vacation-rental gross yield.
- Added `@react-three/fiber`, `three`, and `@react-three/drei` for the hero 3D moment.
- Added Framer Motion for the hero entrance animation and Lucide React icons for interface actions.

### Why
- The page is structured around the highest-conversion real-estate journey: establish trust, show the lifestyle, prove connectivity, expose availability, explain returns, and make a site visit easy to request.
- The hero canvas adds coastal atmosphere without competing with the headline or form; its low speed, muted palette, and restrained grain keep the visual treatment calm.
- The single rounded object keeps the 3D moment lighter than a full shader scene while still responding to the visitor and stopping work when the tab is not visible.
- Interactive inventory and calculator controls let visitors self-qualify before contacting the sales team.
- The project is split into an App Router entry point and client-owned interactive components so the static page shell stays simple and the browser-only features are isolated.

### Validation
- `npm run lint`
- `npm run build`
