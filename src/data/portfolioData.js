import profileImg from '../assets/profile.jpg';
import shineSparkImg from '../assets/shine_spark.jpg';
import codeChallengeImg from '../assets/code_challenge.jpg';
import productAnalysisImg from '../assets/product_analysis.jpg';

export const portfolioData = {
  personal: {
    name: "Abdul Khathar S",
    badgeInitials: "AK",
    title: "Freelance Web Developer & Digital Marketing Professional",
    statusBadge: "Available for Internships & Freelance Work",
    headline: "Building high-performing websites and digital experiences that help businesses grow.",
    longDescription: "Freelance Web Developer and Digital Marketing Professional specializing in responsive websites, SEO, lead generation, digital marketing, and social media promotion — actively working in web development and digital marketing since 2024.",
    email: "abdulkhathar.dev@gmail.com",
    phone: "+91 98765 43210",
    location: "Chennai, India",
    profileImage: profileImg,
  },

  socialLinks: [
    { name: "LinkedIn", url: "https://linkedin.com", icon: "Linkedin" },
    { name: "GitHub", url: "https://github.com", icon: "Github" },
    { name: "Instagram", url: "https://www.instagram.com/ak_digital?stkn=MTlqejdvZHg5aWpzeg==", icon: "Instagram" },
  ],

  navLinks: [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Freelancing", href: "#freelancing" },
    { name: "Digital Marketing", href: "#digital-marketing" },
    { name: "Contact", href: "#contact" },
  ],

  aboutStats: [
    { value: "2024", label: "Working in web development & digital marketing since" },
    { value: "4 Months", label: "Internship in website development & digital marketing" },
    { value: "8.9 CGPA", label: "Master of Computer Applications, SRM University" },
  ],

  aboutBio: [
    "I'm an MCA graduate with hands-on experience in web development, digital marketing, SEO, and lead generation, built through real client website projects rather than theory alone. I've been working in web development and digital marketing since 2024, including a 4-month internship focused on website development and digital marketing.",
    "My work sits at the intersection of two skill sets that are usually kept separate: I build the website, and I make sure the right people find it. That means on-page SEO, content marketing, social media campaigns, and WhatsApp-based customer engagement sit alongside the actual development work.",
    "I'm comfortable coordinating small-budget Meta and Facebook advertising campaigns, and I communicate directly with clients to deliver websites that are practical, easy to manage, and built to be found in search.",
  ],

  services: [
    {
      id: 1,
      title: "Web Development",
      description: "Responsive and modern websites for businesses, personal brands, and professional services.",
      icon: "Code2",
    },
    {
      id: 2,
      title: "Responsive Website Development",
      description: "Business websites with service pages, pricing, booking/contact functionality, WhatsApp integration, and SEO-friendly structure.",
      icon: "Layout",
    },
    {
      id: 3,
      title: "Digital Marketing",
      description: "Digital marketing strategies focused on visibility, audience engagement, social media promotion, and customer acquisition.",
      icon: "BarChart3",
    },
    {
      id: 4,
      title: "SEO",
      description: "On-page SEO, keyword research, SEO-friendly content, meta titles, meta descriptions, internal linking, and search-friendly website structures.",
      icon: "Search",
    },
    {
      id: 5,
      title: "Lead Generation",
      description: "WhatsApp lead generation, website enquiries, and digital campaigns designed to generate customer leads.",
      icon: "Zap",
    },
    {
      id: 6,
      title: "Social Media Marketing",
      description: "Social media content planning, Instagram marketing, audience engagement strategies, and brand growth.",
      icon: "Share2",
    },
  ],

  featuredProject: {
    id: "shine-spark",
    title: "Shine & Spark — Car & Bike Wash Website",
    subtitle: "Car & Bike Wash Website (Real Client Project)",
    tag: "Real Client Project",
    image: shineSparkImg,
    description: "Developed a responsive website for a car and bike washing business with service pages, pricing, doorstep washing, online booking, and WhatsApp lead capture. Included on-page SEO, keyword-focused content, meta titles and descriptions, internal linking, a search-friendly site structure, FAQ and blog content, customer search-query targeting, and a small-budget Meta/Facebook lead generation campaign.",
    tech: ["HTML", "CSS", "JavaScript", "SEO", "Meta/Facebook Ads", "WhatsApp Lead Gen"],
    outcome: "A live, functioning business website with a clear booking path and WhatsApp lead capture, supported by SEO-friendly content and a small paid campaign.",
    liveUrl: "https://shine-spark.netlify.app",
    githubUrl: null,
  },

  projects: [
    {
      id: "code-challenge-generator",
      title: "Code Challenge Generator",
      tag: "Personal Project",
      date: "07 · 2025",
      image: codeChallengeImg,
      description: "Developed a full-stack application that generates coding challenges using AI/LLM integration, with interactive problem selection, REST APIs, and automated challenge creation.",
      tech: ["React", "Flask", "OpenAI API", "REST API", "Python", "HTML", "CSS", "JavaScript"],
      outcome: "Automated coding challenge creation using AI.",
      liveUrl: null,
      githubUrl: null,
    },
    {
      id: "product-analysis-recommendation",
      title: "Product Analysis and Recommendation System",
      tag: "Personal Project",
      date: "12 · 2025",
      image: productAnalysisImg,
      description: "Analyzed sales data to identify top-performing products and customer trends, and implemented recommendation logic for personalized product suggestions.",
      tech: ["React", "Flask", "Python", "Pandas", "Scikit-learn"],
      outcome: "Supported better decision-making through data-driven product insights and recommendations.",
      liveUrl: null,
      githubUrl: null,
    },
  ],

  freelancing: {
    heading: "Let's Build Something Great Together",
    subheading: "Available for freelance web development and digital marketing projects. I craft modern websites, boost search visibility, and build lead generation engines that help your business grow.",
    features: [
      "Custom Business Websites & Landing Pages",
      "On-Page SEO Optimization & Keyword Strategy",
      "WhatsApp & Direct Enquiry Lead Capture",
      "Social Media Marketing & Content Promotion",
    ],
  },

  digitalMarketing: {
    heading: "Digital Marketing & Social Media Strategy",
    subheading: "Expanding business reach, driving customer engagement, and building strong brand presence across digital channels.",
    username: "@ak_digital",
    instagramUrl: "https://www.instagram.com/ak_digital?stkn=MTlqejdvZHg5aWpzeg==",
    topics: [
      "Digital Marketing",
      "Social Media Marketing",
      "Instagram Marketing",
      "Content Promotion",
      "Audience Engagement",
    ],
    cards: [
      {
        title: "Digital Marketing Strategy",
        description: "Comprehensive digital campaigns focused on brand awareness, audience growth, and customer acquisition.",
        icon: "Megaphone",
      },
      {
        title: "Social Media Marketing",
        description: "Strategic social media management, post scheduling, visual branding, and community building.",
        icon: "Share2",
      },
      {
        title: "Instagram Marketing",
        description: "Engaging content, reel strategy, profile optimization, and organic Instagram audience growth.",
        icon: "Instagram",
      },
      {
        title: "Content Promotion & Engagement",
        description: "Targeted content creation, direct audience interaction, lead funnels, and performance tracking.",
        icon: "TrendingUp",
      },
    ],
  },

  education: [
    {
      id: 1,
      degree: "Master of Computer Applications (MCA)",
      institution: "SRM University, Vadapalani Campus",
      duration: "2022 — 2024",
      grade: "CGPA: 8.9",
    },
    {
      id: 2,
      degree: "Bachelor of Science (B.Sc)",
      institution: "CAIIHM, Chennai",
      duration: "2018 — 2021",
      grade: "CGPA: 8.0",
    },
  ],

  experience: [
    {
      id: 1,
      role: "Freelance Web Developer & Digital Marketing Professional",
      company: "Self-Employed",
      duration: "2024 — Present",
      bullets: [
        "Website development for client projects, from planning through launch",
        "SEO implementation, including on-page optimization and search-friendly structure",
        "Digital marketing strategy and execution for small businesses",
        "Lead generation through websites, WhatsApp, and digital campaigns",
        "WhatsApp-based customer engagement and enquiry handling",
        "Support for small-budget Meta/Facebook advertising campaigns",
        "Direct client communication and coordination throughout each project",
      ],
    },
    {
      id: 2,
      role: "Website Development & Digital Marketing Intern",
      company: "Web & Marketing Agency",
      duration: "4-Month Internship",
      bullets: [
        "4-month internship in website development and digital marketing, providing hands-on experience alongside freelance client work.",
        "Built responsive web layouts, performed on-page SEO audits, and structured client site content.",
      ],
    },
  ],

  skills: {
    frontend: ["HTML", "CSS", "JavaScript", "ReactJS"],
    backend: ["Flask", "REST API", "Python"],
    programming: ["Python", "SQL", "JavaScript"],
    database: ["MS SQL"],
    digitalMarketing: [
      "Digital Marketing",
      "SEO",
      "On-Page SEO",
      "Keyword Research",
      "Content Marketing",
      "Lead Generation",
      "Meta/Facebook Ads",
      "Social Media Marketing",
      "Website Marketing",
      "Google Analytics",
      "WhatsApp Lead Generation",
    ],
    toolsAndPlatforms: [
      "VS Code",
      "Git",
      "GitHub",
      "Vercel",
      "Anaconda",
      "OpenAI API",
      "Pandas",
      "Scikit-learn",
      "MS Excel",
    ],
  },

  certifications: [
    { title: "Digital Marketing Foundations", issuer: "Professional Certification" },
    { title: "Python for Data Science", issuer: "IBM" },
    { title: "Data Analytics with Power BI", issuer: "Learnbay" },
  ],
};
