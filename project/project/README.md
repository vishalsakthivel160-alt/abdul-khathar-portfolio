# Freelance Portfolio

This project is split into two fully independent parts, deployed and
run separately:

```
project/
├── frontend/   → static site (HTML/CSS/JS). Deploy to Vercel/Netlify/etc.
└── backend/    → Express API that emails contact form submissions.
                  Deploy to Render/Railway/Fly.io/any Node host.
```

They only communicate over HTTP: the frontend's contact form sends a
`POST` request to the backend's `/api/contact` endpoint using the URL
set in `frontend/js/config.js` (`apiBaseUrl`).

## Quick start

1. **Backend first** — follow `backend/README.md` to install
   dependencies, set up a free Resend account, configure `.env`, and
   run it locally or deploy it. Note the URL it's running on.
2. **Frontend** — open `frontend/js/config.js`, fill in your name,
   contact details, social links, and set `apiBaseUrl` to the
   backend's URL. Follow `frontend/README.md` to run or deploy it.

Each folder has its own `package.json`, its own `README.md`, and its
own environment variables — they can live in separate repositories if
you prefer.
