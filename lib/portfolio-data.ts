// ─── Portfolio Configuration ──────────────────────────────────────────────────

export const person = {
  firstName: "Marc",
  lastName: "Pios",
  name: "Marc Pios",
  role: "Financial Systems Developer",
  avatar: "/profile-picture.jpg",
  email: "marcpios@proton.me",
  location: "Asia/Manila",
  languages: ["English", "Filipino"],
};

export const social = [
  {
    name: "GitHub",
    icon: "github" as const,
    link: "https://github.com/kristianism",
  },
  {
    name: "Telegram",
    icon: "telegram" as const,
    link: "https://t.me/thisiskristian",
  },
  {
    name: "Discord",
    icon: "discord" as const,
    link: "https://discord.com/users/iamkristian",
  },
  {
    name: "LinkedIn",
    icon: "linkedin" as const,
    link: "https://www.linkedin.com/in/marcpios/",
  },
  {
    name: "Email",
    icon: "email" as const,
    link: `mailto:${person.email}`,
  },
];

export const home = {
  title: `${person.name}'s Portfolio`,
  description: `Portfolio website showcasing my work as a ${person.role}`,
  headline: "Bridging the gap between financial integrity and scalable code.",
  subline: `I'm ${person.firstName}, a developer with a finance background, building the tools that automate, audit, and scale financial operations.`,
};

export const about = {
  title: "About",
  description: `Meet ${person.name}, ${person.role}`,
  intro: {
    display: true,
    title: "Introduction",
    description: `${person.firstName} is a financial systems developer with a background in management accounting and a drive to build the tools that make financial operations more reliable, automated, and transparent. His work spans cloud accounting systems, workflow automation, and on-chain financial infrastructure.`,
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Independent",
        timeframe: "2025 — Present",
        role: "Financial Systems Automation Developer",
        achievements: [
          "Designed and deployed self-hosted n8n workflows connecting accounting platforms (Xero, QuickBooks) with external APIs, eliminating manual data entry and delivering scheduled financial summaries to stakeholders.",
          "Built webhook-driven pipelines with custom JavaScript nodes for real-time alerts, transaction reconciliation, and complex financial data transformations.",
        ],
      },
      {
        company: "Freelance Web Development",
        timeframe: "2024 — Present",
        role: "Web Developer",
        achievements: [
          "Built full-stack web applications with Next.js and TypeScript, including server-rendered financial dashboards and Web3-connected frontends with wallet auth via Wagmi and RainbowKit.",
          "Delivered polished, responsive UIs with Tailwind CSS, GSAP, and Motion with Lenis for scroll-driven animations and smooth page transitions.",
        ],
      },
      {
        company: "Freelance Blockchain Development",
        timeframe: "2021 — Present",
        role: "Blockchain Developer",
        achievements: [
          "Developed and deployed ERC-20 tokens, NFT collections, yield farming and yield aggregator protocols, automated market makers, and lending systems with gas-optimized logic and on-chain financial mechanics.",
          "Conducted smart contract security audits, identifying vulnerabilities across reentrancy, access control, and arithmetic edge cases.",
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "Institute of Certified Forensic Accountants",
        description: "Certified Forensic Accountant (CrFA) credential, covering forensic accounting principles, investigative techniques, and legal aspects of financial fraud examination.", 
      },
      {
        name: "Institute of Financial Consultants",
        description: "Certified Financial Consultant (CFC) credential, covering financial planning, investment strategies, and ethical practices in the financial industry.",
      },
      {
        name: "University of Santo Tomas (UST) - BS Management Accounting",
        description: "Combining accounting principles with systems thinking, laying the groundwork for a career at the intersection of finance and technology.",
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "n8n Automation",
        description: "Designing and implementing custom n8n workflows to automate data pipelines, API integrations, and repetitive tasks across financial systems.",
        tags: ["n8n", "Automation", "Webhooks", "APIs", "JavaScript"],
      },
      {
        title: "Next.js",
        description: "Developing robust, server-rendered financial web applications, clean architecture, type-safe APIs, and interfaces built for data density and reliability.",
        tags: ["TypeScript", "React", "Next.js", "Tailwind CSS", "Wagmi", "RainbowKit"],
      },
      {
        title: "Web Motion",
        description: "Implementing performant, scroll-driven animations and UI transitions using GSAP and Motion, with Lenis for buttery-smooth scroll experiences.",
        tags: ["CSS", "GSAP", "Motion", "Lenis"],
      },
      {
        title: "Solidity",
        description: "Developing smart contract systems that encode financial rules on-chain, with emphasis on security, auditability, and upgradeability patterns.",
        tags: ["Blockchain", "DeFi", "Foundry", "Hardhat", "Smart Contracts", "Web3"],
      },
      {
        title: "Cloud Accounting",
        description: "Proficient across multiple accounting platforms from setup and chart of accounts configuration to reconciliation workflows and financial reporting",
        tags: ["Xero", "Xero API", "Quickbooks", "Manager.io"],
      },
      {
        title: "Productivity Tools",
        description: "Proficient with modern productivity and collaboration suites for documentation, project tracking, and cross-team communication in professional environments.",
        tags: ["Microsoft 365", "Google Workspace", "Slack", "Trello", "Notion", "Obsidian"],
      },
    ],
  },
};

export const projects = [
  {
    slug: "my-portfolio",
    title: "Personal Portfolio Website",
    summary:
      "A fast, animated portfolio site built with Next.js showcasing projects, skills, and a photo gallery with fluid scroll experiences powered by Motion and Lenis. Inspired by OnceUI's Magic Portfolio template.",
    image: "/portfolio-website.png",
    tags: ["Next.js", "React", "TypeScript", "Motion", "Lenis"],
    link: "#",
    year: "2026",
  },
  {
    slug: "resin-manila",
    title: "RSN + MNL Website",
    summary:
      "A fast, animated portfolio site built with Next.js showcasing projects, skills, and a photo gallery with fluid scroll experiences powered by Motion and Lenis. Inspired by OnceUI's Magic Portfolio template.",
    image: "/resin-manila.png",
    tags: ["Next.js", "React", "TypeScript", "Motion", "Lenis"],
    link: "https://www.resinmanila.com/",
    year: "2026",
  },
  {
    slug: "n8n-workflows",
    title: "n8n Workflow Library",
    summary:
      "A growing library of self-hosted n8n automation workflows designed to eliminate repetitive tasks across financial systems, APIs, and data pipelines.",
    image: "/n8n-workflow.png",
    tags: ["n8n", "Javascript", "Automation", "Webhooks", "APIs"],
    link: "#",
    year: "2025",
  },
];

export const gallery = {
  title: `Photo Gallery — ${person.name}`,
  description: `A curated collection of moments`,
  images: [
    { src: "/resin-manila.png", alt: "Resin Manila Website", orientation: "horizontal" as const },
    { src: "/n8n-telegram-to-trello.png", alt: "N8N Workflow 1", orientation: "vertical" as const },
    { src: "/lxp-growers.png", alt: "LXP Growers Website", orientation: "horizontal" as const },
    { src: "/n8n-telegram-to-xero-quote.png", alt: "N8N Workflow 2", orientation: "vertical" as const },
    { src: "/fratelli-solutions.png", alt: "Fratelli Solutions Website", orientation: "horizontal" as const },
    { src: "/images/gallery/gallery-06.jpg", alt: "Gallery image 6", orientation: "vertical" as const },
  ],
};

export const navItems = [
  { label: "Home", href: "#home", icon: "home" as const },
  { label: "About", href: "#about", icon: "person" as const },
  { label: "Work", href: "#projects", icon: "grid" as const },
  { label: "Gallery", href: "#gallery", icon: "gallery" as const },
];
