# Serene Palms website flow

## Entry point

`app/page.tsx` is the public entry point for `/`. It renders `SerenePalmsLanding` from `components/SerenePalmsLanding.tsx`.

## Visitor flow

1. **Hero / first impression**
   - Visitor sees the Serene Palms proposition, location, ShaderGradient atmosphere, brochure form, and site-visit CTA.
2. **Trust bar**
   - Visitor validates the legal and lending signals before exploring further.
3. **Highlights**
   - Visitor understands why the township is a lower-friction ownership and investment choice.
4. **Amenities**
   - Visitor sees the lifestyle, sustainability, utilities, and service promise.
5. **Master plan**
   - Visitor reviews mock inventory. Available plots open a detail modal; Booked and Sold plots remain informational.
6. **Configurations**
   - Visitor chooses between a raw NA plot and a turnkey villa conversation.
7. **Location**
   - Visitor validates access to Khed, Mumbai/Pune, beaches, forts, and Dapoli essentials.
8. **ROI calculator**
   - Visitor adjusts area, appreciation, and nightly rental rate to understand indicative outcomes.
9. **Contact**
   - Visitor submits a site-visit request with WhatsApp number, timeline, and preferred date.

## Conversion exits

- Brochure form: submits locally and opens the site-visit modal for the next step.
- Book Site Visit buttons: open the site-visit modal.
- Available plot cards: open plot details, then route to the site-visit modal through Enquire Now.
- WhatsApp button and footer link: open WhatsApp with a pre-filled Serene Palms enquiry message.
- Navigation links: scroll to the relevant section.
- Footer: provides brochure/contact routes, privacy-policy placeholder route, compliance note, and copyright.

## Technical ownership

- `app/page.tsx`: route entry.
- `components/SerenePalmsLanding.tsx`: page layout, forms, modal, plot viewer, calculator, and WhatsApp links.
- `components/ShaderHero.tsx`: hero-only ShaderGradient canvas.
- `app/globals.css`: shared typography, buttons, form controls, plot states, and responsive section utilities.
