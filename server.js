/**
 * Standalone backend for the portfolio contact form.
 * Runs as its own Node/Express server, completely separate from the
 * frontend. Deploy it anywhere that runs Node (Render, Railway, Fly.io,
 * a VPS, or as a container) — the frontend just needs its public URL.
 *
 * Endpoints:
 *   GET  /health         -> simple uptime check
 *   POST /api/contact    -> validates + emails a contact form submission
 *
 * Required environment variables (see .env.example):
 *   RESEND_API_KEY    - API key from https://resend.com
 *   CONTACT_TO_EMAIL  - the portfolio owner's real inbox
 *   CONTACT_FROM      - a verified sender, e.g. "Portfolio <contact@yourdomain.com>"
 *   ALLOWED_ORIGIN    - the deployed frontend's origin, e.g. https://yourportfolio.com
 *   PORT              - optional, defaults to 4000
 */

require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 4000;

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_TO_EMAIL = process.env.CONTACT_TO_EMAIL || "abdulkhathar585@gmail.com";
const CONTACT_FROM = process.env.CONTACT_FROM;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN || "*";

app.use(express.json({ limit: "20kb" }));
app.use(
  cors({
    origin: ALLOWED_ORIGIN === "*" ? true : ALLOWED_ORIGIN,
    methods: ["POST", "GET", "OPTIONS"],
  })
);

// ---------------------------------------------------------------------
// Basic in-memory rate limiting (per IP). For real production scale,
// back this with Redis or a managed rate-limiting service instead.
// ---------------------------------------------------------------------
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const RATE_LIMIT_MAX = 3;
const submissionLog = new Map();

function isRateLimited(ip) {
  const now = Date.now();
  const timestamps = (submissionLog.get(ip) || []).filter(
    (t) => now - t < RATE_LIMIT_WINDOW_MS
  );
  timestamps.push(now);
  submissionLog.set(ip, timestamps);
  return timestamps.length > RATE_LIMIT_MAX;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

app.get("/health", (req, res) => {
  res.json({ ok: true, service: "portfolio-contact-api" });
});

app.post("/api/contact", async (req, res) => {
  const ip = (req.headers["x-forwarded-for"] || "").split(",")[0].trim() || req.ip;

  if (isRateLimited(ip)) {
    return res.status(429).json({
      ok: false,
      message: "Too many messages sent recently. Please try again in a minute.",
    });
  }

  const { name, email, subject, message, company } = req.body || {};

  // Honeypot — real visitors never fill this hidden field.
  if (company) {
    return res.status(200).json({ ok: true });
  }

  if (
    !name || typeof name !== "string" || name.trim().length < 2 ||
    !email || !isValidEmail(email) ||
    !subject || typeof subject !== "string" || subject.trim().length < 2 ||
    !message || typeof message !== "string" || message.trim().length < 10
  ) {
    return res.status(400).json({
      ok: false,
      message: "Please fill in all fields with valid information.",
    });
  }

  if (!RESEND_API_KEY || !CONTACT_TO_EMAIL || !CONTACT_FROM) {
    console.error("Missing email service environment variables.");
    return res.status(500).json({
      ok: false,
      message: "The contact form isn't fully configured yet. Please email directly instead.",
    });
  }

  const safeName = escapeHtml(name.trim());
  const safeEmail = escapeHtml(email.trim());
  const safeSubject = escapeHtml(subject.trim());
  const safeMessage = escapeHtml(message.trim()).replace(/\n/g, "<br />");

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: CONTACT_FROM,
        to: [CONTACT_TO_EMAIL],
        reply_to: email.trim(),
        subject: `New portfolio enquiry: ${subject.trim()}`,
        html: `
          <div style="font-family: Arial, sans-serif; font-size: 15px; color: #14171f; line-height: 1.6;">
            <h2 style="margin-bottom: 4px;">New message from your portfolio site</h2>
            <p style="color: #6b7180; margin-top: 0;">Reply directly to this email to respond to ${safeName}.</p>
            <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
              <tr><td style="padding: 8px 0; font-weight: bold; width: 120px;">Name</td><td style="padding: 8px 0;">${safeName}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Email</td><td style="padding: 8px 0;">${safeEmail}</td></tr>
              <tr><td style="padding: 8px 0; font-weight: bold;">Subject</td><td style="padding: 8px 0;">${safeSubject}</td></tr>
            </table>
            <div style="padding: 16px; background: #f7f7f4; border-radius: 8px;">${safeMessage}</div>
          </div>
        `,
      }),
    });

    if (!response.ok) {
      const errBody = await response.text();
      console.error("Resend API error:", response.status, errBody);
      return res.status(502).json({
        ok: false,
        message: "Couldn't send your message right now. Please try again shortly.",
      });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact form send failed:", err);
    return res.status(500).json({
      ok: false,
      message: "Something went wrong. Please try again or email directly.",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Contact API listening on port ${PORT}`);
});
