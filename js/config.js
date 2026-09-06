/**
 * SITE CONFIG
 * -----------
 * Every piece of personal / contact information lives here so the rest of
 * the site never needs to be touched when real details are ready.
 *
 * Replace the bracketed placeholder strings with real information before
 * going live. Anything left as an empty string ("") will simply be hidden
 * from the UI instead of showing broken or fake data.
 */

const SITE_CONFIG = {
  // ---- Backend -------------------------------------------------------
  // The contact API now runs as its own separate backend project.
  // Set this to that backend's deployed URL, e.g. "https://your-api.onrender.com".
  // Leave it as an empty string only if the frontend and backend are
  // genuinely served from the same origin.
  apiBaseUrl: "",

  // ---- Identity -----------------------------------------------------
  name: "Abdul Khathar S",
  title: "Freelance Web Developer & Digital Marketing Professional",
  tagline: "Working in Web Development & Digital Marketing since 2024",

  // ---- Contact --------------------------------------------------------
  email: "[CLIENT EMAIL]",
  phone: "[CLIENT PHONE]",
  location: "[CLIENT LOCATION]",

  // ---- Social ---------------------------------------------------------
  // Leave blank ("") for any link that isn't ready yet — it will not render.
  social: {
    linkedin: "[LINKEDIN URL]",
    github: "[GITHUB URL]",
    instagram: "[INSTAGRAM URL]",
  },

  // ---- Internship -------------------------------------------------------
  internship: {
    company: "[INTERNSHIP COMPANY]",
    role: "[INTERNSHIP ROLE]",
    dates: "[INTERNSHIP DATES]",
    duration: "4-Month Internship",
  },

  // ---- Featured project -------------------------------------------------
  featuredProject: {
    name: "Shine & Spark",
    subtitle: "Car & Bike Wash Website",
    liveUrl: "https://shine-spark.netlify.app",
  },
};
