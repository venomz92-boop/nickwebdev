# Nick's WebDev

A production-ready single-page website for Nick's WebDev, built with React, TypeScript, and Vite.

The visual direction is a dark, editorial digital-agency aesthetic with restrained blue-violet accents, layered website mockups, transparent pricing, and a real project preview.

## Stack

- React 19
- TypeScript
- Vite
- Plain, token-driven CSS
- Inline SVG icons (no icon library)
- Static hosting (Cloudflare Pages)

## Local commands

```bash
npm install
npm run dev
npm run build
npm run preview
```

The production output is written to **`dist`**. The Vite configuration explicitly sets `build.outDir` to `dist`.

## Deploy to Cloudflare Pages

The site is fully static — there is no server or form backend to deploy.

1. Push this repository to GitHub (or use Cloudflare Pages direct upload).
2. In Cloudflare Pages, create a project:
   - Framework preset: **Vite**
   - Build command: **`npm run build`**
   - Build output directory: **`dist`**
   - Node version: **20 or newer**
3. Deploy.

Cloudflare builds in the cloud, so nothing needs to be installed locally. A prebuilt `dist` folder (or the supplied zip) can also be uploaded directly through **Create project → Upload assets**.

## WhatsApp setup

The project enquiry section builds a pre-filled WhatsApp message and opens it in WhatsApp. There is no email server, API key, or secret in the project.

Configuration lives in `src/config.ts`:

```ts
whatsappNumber: "60165833713", // international format, digits only
whatsappDisplay: "+60 16-583 3713", // formatted for display
email: "", // optional; leave blank to hide email links
```

`whatsappNumber` is used for:

- the "Contact on WhatsApp" buttons
- the footer WhatsApp link
- the project enquiry section, which composes a message from the visitor's name, business, chosen package, and project description

If the number changes, update both `whatsappNumber` and `whatsappDisplay`. If `whatsappNumber` is left blank, the site hides WhatsApp links and the enquiry button shows a clear "not available" message rather than a broken link.

Once `email` is set, email links appear in the contact section and footer.

### How the enquiry works

- Name and project description are validated in the browser; errors are announced and focus moves to the first invalid field.
- The "Continue on WhatsApp" button is a normal link to `https://wa.me/<number>?text=<encoded message>`.
- WhatsApp opens in a new tab with the message ready to review. Nothing is sent until the visitor presses send inside WhatsApp.
- The page states this explicitly, so it never claims an enquiry was delivered when it was not.
- No form data is sent to this website, stored, or exposed.

## Content honesty notes

- Prices, inclusions, delivery estimates, and payment terms come directly from the supplied brief.
- The only portfolio project is **KundasangHomestay.my**, presented as a personal project, not a client case study.
- The laptop, tablet, and phone screens show **fictional illustrative designs** (ALPA, RIMBA, KOPI KITA, NIPAH). They are not represented as client work.
- No testimonials, fake statistics, awards, client logos, or growth guarantees are used.

## Accessibility and performance

- Semantic section landmarks and a skip link
- Keyboard-operable accordion with Arrow Up, Arrow Down, Home, and End support
- Visible focus states, labelled fields, and announced validation errors
- Mobile navigation closes with Escape and locks background scrolling
- Reduced-motion support
- Self-hosted Inter and Inter Tight fonts
- Locally stored, compressed JPEG imagery
- Production assets served with long-term cache headers via `public/_headers`
