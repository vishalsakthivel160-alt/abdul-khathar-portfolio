# Freelance Portfolio — Frontend

Static site (plain HTML/CSS/JavaScript, no build step, no framework)
for a Freelance Web Developer & Digital Marketing Professional. This
folder is completely independent of the backend — deploy it to any
static host (Vercel, Netlify, GitHub Pages, S3/CloudFront, etc.).

## Structure

```
frontend/
├── index.html            # All page sections
├── css/style.css         # Design system + all styles
├── js/
│   ├── config.js         # Name, contact info, social links, API URL
│   ├── project-data.js   # Content shown in the "View Project" modals
│   ├── animations.js     # Scroll reveal + header state (reduced-motion aware)
│   └── main.js           # Nav, modal, contact form logic
├── assets/                # Favicon, OG image, image placeholders
├── robots.txt
└── sitemap.xml
```

## 1. Fill in your information

Edit **`js/config.js`**:

- `name`, `email`, `phone`, `location`
- `social.linkedin` / `github` / `instagram` — leave blank to hide that link
- `internship.company` / `role` / `dates`
- `apiBaseUrl` — the deployed URL of the **separate backend** project
  (see `../backend/README.md`), e.g. `"https://your-api.onrender.com"`.
  The contact form posts to `${apiBaseUrl}/api/contact`.

Also update the placeholder text in `index.html`'s `<head>` (title,
meta description, canonical URL, Open Graph tags) and the domain in
`robots.txt` / `sitemap.xml`.

### Profile photo & project screenshots

The hero portrait and Shine & Spark gallery use elegant SVG
placeholders. Replace the inline `<svg>` blocks in `index.html` with
real images once available, e.g.:

```html
<img src="/assets/profile.jpg" alt="[Client Name], Freelance Web Developer" loading="lazy" />
```

## 2. Run locally

Any static file server works, e.g.:

```bash
npm run dev
```

This serves the site at `http://localhost:5500`. Point `apiBaseUrl` in
`config.js` at your locally running backend (`http://localhost:4000`
by default) while developing.

## 3. Deploy

Push this folder to Vercel, Netlify, or any static host. No
environment variables or server runtime are needed here — all secrets
live in the backend project instead.

## Notes on honesty of content

Every claim on this site (experience since 2024, the 4-month
internship, the Shine & Spark client project, skills, education, and
certifications) reflects only what was provided when this site was
built. Fields intentionally left as placeholders (internship
company/role/dates, contact details, social links) are called out in
`js/config.js` so they're easy to find and replace.
