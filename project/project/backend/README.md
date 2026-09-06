# Portfolio Backend (Contact API)

A small, standalone Express server with one job: receive the contact
form submission from the frontend and email it to the portfolio owner
via [Resend](https://resend.com). It is entirely independent of the
frontend — deploy it separately, on any Node host.

## Endpoints

- `GET /health` — uptime check
- `POST /api/contact` — body: `{ name, email, subject, message, company }`
  (`company` is a hidden honeypot field, expected to be empty)

## Setup

```bash
npm install
cp .env.example .env
```

Fill in `.env`:

- `RESEND_API_KEY` — from your Resend account
- `CONTACT_TO_EMAIL` — the real inbox that should receive messages
- `CONTACT_FROM` — a verified sender address/domain in Resend
- `ALLOWED_ORIGIN` — the frontend's deployed URL (locks down CORS)
- `PORT` — optional, defaults to `4000`

## Run locally

```bash
npm run dev
```

The API is now available at `http://localhost:4000`.

## Deploy

Any Node host works — for example:

**Render / Railway / Fly.io**
1. Push this `backend/` folder to its own repository (or a subfolder of one).
2. Create a new Web Service pointing at it, build command `npm install`,
   start command `npm start`.
3. Add the environment variables from `.env.example` in the host's dashboard.
4. Note the deployed URL (e.g. `https://your-api.onrender.com`) — the
   frontend needs it.

## Connecting the frontend

In the frontend project, open `frontend/js/config.js` and set:

```js
apiBaseUrl: "https://your-api.onrender.com",
```

The frontend will POST to `${apiBaseUrl}/api/contact`. Leaving
`apiBaseUrl` empty assumes the API is on the same origin as the
frontend (only true if you put them behind the same domain/proxy).

## Security notes

- CORS is restricted to `ALLOWED_ORIGIN` — set it to your real frontend
  domain in production, not `*`.
- All input is validated server-side; the frontend's own validation is
  just for a fast, friendly UX.
- A hidden honeypot field silently discards basic bot spam.
- Basic in-memory rate limiting per IP is included; for real-world
  scale, back this with Redis or a managed rate limiter instead.
- No email credentials are ever sent to or stored in the browser.
