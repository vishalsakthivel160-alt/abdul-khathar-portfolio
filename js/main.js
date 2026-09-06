(function () {
  "use strict";

  /* =====================================================================
     0. Helpers
  ===================================================================== */
  const isPlaceholder = (value) =>
    !value || /^\[.*\]$/.test(String(value).trim());

  /* =====================================================================
     1. Inject config-driven content (name, contact info, social links)
  ===================================================================== */
  function applyConfig() {
    const cfg = window.SITE_CONFIG || {};

    document
      .querySelectorAll("[data-name], .nav__brand, [data-footer-name]")
      .forEach((el) => {
        if (!isPlaceholder(cfg.name)) el.textContent = cfg.name;
      });

    if (!isPlaceholder(cfg.email)) {
      document.querySelectorAll("[data-contact-email]").forEach((el) => {
        el.textContent = cfg.email;
        el.setAttribute("href", `mailto:${cfg.email}`);
      });
    }

    if (!isPlaceholder(cfg.phone)) {
      document
        .querySelectorAll("[data-contact-phone]")
        .forEach((el) => (el.textContent = cfg.phone));
    }

    if (!isPlaceholder(cfg.location)) {
      document
        .querySelectorAll("[data-contact-location]")
        .forEach((el) => (el.textContent = cfg.location));
    }

    // Social links: hide any link whose URL hasn't been filled in yet.
    const social = cfg.social || {};
    document.querySelectorAll("[data-social]").forEach((link) => {
      const key = link.getAttribute("data-social");
      const url = social[key];
      if (isPlaceholder(url)) {
        link.style.display = "none";
      } else {
        link.setAttribute("href", url);
      }
    });

    // Internship placeholders
    const internship = cfg.internship || {};
    const roleEl = document.querySelector("[data-internship-role]");
    const companyEl = document.querySelector("[data-internship-company]");
    const datesEl = document.querySelector("[data-internship-dates]");
    if (roleEl && !isPlaceholder(internship.role))
      roleEl.textContent = internship.role;
    if (companyEl && !isPlaceholder(internship.company))
      companyEl.textContent = internship.company;
    if (datesEl && !isPlaceholder(internship.dates))
      datesEl.textContent = internship.dates;
  }

  /* =====================================================================
     2. Navigation: mobile menu, smooth scroll, active link highlighting
  ===================================================================== */
  function setupNav() {
    const toggle = document.getElementById("navToggle");
    const menu = document.getElementById("navMenu");
    const links = Array.from(document.querySelectorAll(".nav__link"));

    function closeMenu() {
      menu.classList.remove("is-open");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    }

    function openMenu() {
      menu.classList.add("is-open");
      toggle.setAttribute("aria-expanded", "true");
      toggle.setAttribute("aria-label", "Close menu");
    }

    toggle.addEventListener("click", () => {
      const isOpen = menu.classList.contains("is-open");
      isOpen ? closeMenu() : openMenu();
    });

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        const targetId = link.getAttribute("href");
        if (targetId.startsWith("#")) {
          const target = document.querySelector(targetId);
          if (target) {
            e.preventDefault();
            closeMenu();
            const reduced = document.documentElement.classList.contains(
              "reduced-motion"
            );
            target.scrollIntoView({
              behavior: reduced ? "auto" : "smooth",
              block: "start",
            });
            history.pushState(null, "", targetId);
          }
        }
      });
    });

    // Active link highlighting based on section in view
    const sections = links
      .map((l) => document.querySelector(l.getAttribute("href")))
      .filter(Boolean);

    if ("IntersectionObserver" in window && sections.length) {
      const sectionObserver = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            const id = `#${entry.target.id}`;
            const link = links.find((l) => l.getAttribute("href") === id);
            if (!link) return;
            if (entry.isIntersecting) {
              links.forEach((l) => l.classList.remove("is-active"));
              link.classList.add("is-active");
            }
          });
        },
        { rootMargin: "-45% 0px -45% 0px" }
      );
      sections.forEach((s) => sectionObserver.observe(s));
    }
  }

  /* =====================================================================
     3. Project detail modal
  ===================================================================== */
  function setupModal() {
    const modal = document.getElementById("projectModal");
    const content = document.getElementById("modalContent");
    let lastFocused = null;

    function renderProject(key) {
      const data = (window.PROJECT_DATA || {})[key];
      if (!data) return "";

      const links = [];
      if (data.liveUrl) {
        links.push(
          `<a class="btn btn--primary btn--small" href="${data.liveUrl}" target="_blank" rel="noopener noreferrer">Visit Live Website</a>`
        );
      }
      if (data.githubUrl) {
        links.push(
          `<a class="btn btn--outline btn--small" href="${data.githubUrl}" target="_blank" rel="noopener noreferrer">View on GitHub</a>`
        );
      }

      const metaBits = [];
      if (data.date) metaBits.push(data.date);
      if (data.tag) metaBits.push(data.tag);

      return `
        <span class="modal__tag">${data.tag || "Project"}</span>
        <h2 id="modalTitle">${data.title}</h2>
        ${metaBits.length ? `<p class="modal__meta">${metaBits.join(" · ")}</p>` : ""}
        <p class="modal__desc">${data.description}</p>
        <ul class="modal__tech">
          ${data.tech.map((t) => `<li>${t}</li>`).join("")}
        </ul>
        <p class="modal__outcome"><strong>Outcome:</strong> ${data.outcome}</p>
        ${
          links.length
            ? `<div class="modal__actions">${links.join("")}</div>`
            : `<p class="modal__note">Live demo and source links are not published yet.</p>`
        }
      `;
    }

    function openModal(key) {
      content.innerHTML = renderProject(key);
      if (!content.innerHTML) return;
      lastFocused = document.activeElement;
      modal.classList.add("is-open");
      modal.setAttribute("aria-hidden", "false");
      document.body.classList.add("no-scroll");
      const closeBtn = modal.querySelector(".modal__close");
      closeBtn && closeBtn.focus();
    }

    function closeModal() {
      modal.classList.remove("is-open");
      modal.setAttribute("aria-hidden", "true");
      document.body.classList.remove("no-scroll");
      if (lastFocused) lastFocused.focus();
    }

    document.querySelectorAll("[data-modal-open]").forEach((btn) => {
      btn.addEventListener("click", () =>
        openModal(btn.getAttribute("data-modal-open"))
      );
    });

    modal.querySelectorAll("[data-modal-close]").forEach((el) => {
      el.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("is-open")) {
        closeModal();
      }
    });
  }

  /* =====================================================================
     4. Contact form
  ===================================================================== */
  function setupContactForm() {
    const form = document.getElementById("contactForm");
    if (!form) return;

    const submitBtn = document.getElementById("submitBtn");
    const statusEl = document.getElementById("formStatus");
    let isSubmitting = false;

    const fields = {
      name: { input: document.getElementById("name"), error: document.getElementById("nameError") },
      email: { input: document.getElementById("email"), error: document.getElementById("emailError") },
      subject: { input: document.getElementById("subject"), error: document.getElementById("subjectError") },
      message: { input: document.getElementById("message"), error: document.getElementById("messageError") },
    };

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function setError(field, message) {
      fields[field].error.textContent = message || "";
      fields[field].input.setAttribute("aria-invalid", message ? "true" : "false");
    }

    function validate() {
      let valid = true;

      const name = fields.name.input.value.trim();
      if (name.length < 2) {
        setError("name", "Please enter your name.");
        valid = false;
      } else {
        setError("name", "");
      }

      const email = fields.email.input.value.trim();
      if (!emailPattern.test(email)) {
        setError("email", "Please enter a valid email address.");
        valid = false;
      } else {
        setError("email", "");
      }

      const subject = fields.subject.input.value.trim();
      if (subject.length < 2) {
        setError("subject", "Please add a short subject.");
        valid = false;
      } else {
        setError("subject", "");
      }

      const message = fields.message.input.value.trim();
      if (message.length < 10) {
        setError("message", "Please add a little more detail (at least 10 characters).");
        valid = false;
      } else {
        setError("message", "");
      }

      return valid;
    }

    function setSubmitting(state) {
      isSubmitting = state;
      submitBtn.disabled = state;
      submitBtn.classList.toggle("is-loading", state);
    }

    function showStatus(message, type) {
      statusEl.textContent = message;
      statusEl.className = "form-status" + (type ? ` form-status--${type}` : "");
    }

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      if (isSubmitting) return;

      showStatus("", "");

      // Honeypot: if filled, silently drop (bot behaviour) but still
      // show a normal success message so bots don't learn anything.
      const honeypot = document.getElementById("company").value;

      if (!validate()) {
        showStatus("Please fix the highlighted fields and try again.", "error");
        return;
      }

      const payload = {
        name: fields.name.input.value.trim(),
        email: fields.email.input.value.trim(),
        subject: fields.subject.input.value.trim(),
        message: fields.message.input.value.trim(),
        company: honeypot, // honeypot field, checked server-side
      };

      setSubmitting(true);

      try {
        const base = (window.SITE_CONFIG && window.SITE_CONFIG.apiBaseUrl) || "";
        const response = await fetch(`${base}/api/contact`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });

        let data = {};
        try {
          data = await response.json();
        } catch (_) {
          /* non-JSON response, fall through to generic error */
        }

        if (!response.ok) {
          throw new Error(data.message || "Something went wrong. Please try again.");
        }

        showStatus(
          "Message sent — thank you. I'll get back to you shortly.",
          "success"
        );
        form.reset();
      } catch (err) {
        showStatus(
          err.message ||
            "Something went wrong sending your message. Please try again, or email directly.",
          "error"
        );
      } finally {
        setSubmitting(false);
      }
    });
  }

  /* =====================================================================
     Init
  ===================================================================== */
  document.addEventListener("DOMContentLoaded", () => {
    applyConfig();
    setupNav();
    setupModal();
    setupContactForm();
  });
})();
