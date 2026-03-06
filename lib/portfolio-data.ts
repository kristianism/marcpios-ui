// ─── Portfolio Configuration ──────────────────────────────────────────────────

export const person = {
  firstName: "Marc",
  lastName: "Pios",
  name: "Marc Pios",
  role: "Financial Systems Developer",
  avatar: "/profile.jpg",
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
    name: "LinkedIn",
    icon: "linkedin" as const,
    link: "https://www.linkedin.com/in/marcpios/",
  },
  {
    name: "Facebook",
    icon: "facebook" as const,
    link: "https://facebook.com/marcpios",
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
  subline: `I'm ${person.firstName}, a ${person.role.toLowerCase()} specializing in building robust infrastructure where financial logic meets high-performance code. After hours, I build my own projects.`,
  featured: {
    display: false,
    title: "Featured Work",
    href: "#projects",
  },
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
          "Designed and deployed self-hosted n8n automation workflows connecting accounting platforms (Xero, QuickBooks) with external APIs to eliminate manual financial data entry.",
          "Built automated reporting pipelines that aggregate transaction data, reconcile records, and deliver scheduled financial summaries to stakeholders.",
          "Integrated webhook-driven workflows to trigger real-time alerts and actions based on financial events, reducing response time on critical accounting tasks.",
          "Developed JavaScript-powered n8n nodes for custom data transformation and business logic, extending native workflow capabilities for complex financial use cases.",
        ],
      },
      {
        company: "Freelance Web Developer",
        timeframe: "2024 — Present",
        role: "Web Developer",
        achievements: [
          "Built full-stack web applications with Next.js and TypeScript, focusing on server-rendered financial interfaces and data-dense dashboards.",
          "Developed Web3-connected frontends using Wagmi and RainbowKit, enabling wallet authentication and on-chain interactions for DeFi applications.",
          "Implemented scroll-driven animations and page transitions using GSAP and Motion with Lenis, delivering polished UI experiences.",
          "Designed and shipped responsive, accessible UIs with Tailwind CSS across multiple independent and client projects.",
        ],
      },
      {
        company: "Freelance Blockchain Developer",
        timeframe: "2021 — Present",
        role: "Blockchain Developer",
        achievements: [
          "Developed and deployed ERC-20 token contracts and NFT collections, covering minting logic, metadata standards, and on-chain royalty enforcement.",
          "Built yield farming and yield aggregator protocols, implementing reward distribution mechanics, vault strategies, and gas-optimized compounding logic.",
          "Contributed to lending protocol development, working on collateralization logic, liquidation mechanisms, and interest rate models.",
          "Participated in smart contract security audits, identifying vulnerabilities across reentrancy, access control, and arithmetic edge cases.",
        ],
      },
    ],
  },
  studies: {
    display: true,
    title: "Studies",
    institutions: [
      {
        name: "University of Santo Tomas (UST) - BS Management Accounting",
        description: "Combining accounting principles with systems thinking, laying the groundwork for a career at the intersection of finance and technology.",
      },
      {
        name: "Placeholder",
        description: "Studied online marketing and personal branding.",
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
    title: "Portfolio Website",
    summary:
      "A fast, animated portfolio site built with Next.js showcasing projects, skills, and a photo gallery with fluid scroll experiences powered by GSAP and Lenis. Inspired by OnceUI's Magic Portfolio template.",
    image: "/images/projects/project-01.jpg",
    tags: ["Next.js", "React", "TypeScript", "GSAP", "Lenis"],
    link: "#",
    year: "2026",
  },
  {
    slug: "n8n-workflows",
    title: "n8n Workflow Library",
    summary:
      "A growing library of self-hosted n8n automation workflows designed to eliminate repetitive tasks across financial systems, APIs, and data pipelines.",
    image: "/images/projects/project-02.jpg",
    tags: ["n8n", "Javascript", "Automation", "Webhooks", "APIs"],
    link: "#",
    year: "2026",
  },
];

export const gallery = {
  title: `Photo Gallery — ${person.name}`,
  description: `A curated collection of moments`,
  images: [
    { src: "/images/gallery/gallery-01.jpg", alt: "Gallery image 1", orientation: "horizontal" as const },
    { src: "/images/gallery/gallery-02.jpg", alt: "Gallery image 2", orientation: "vertical" as const },
    { src: "/images/gallery/gallery-03.jpg", alt: "Gallery image 3", orientation: "horizontal" as const },
    { src: "/images/gallery/gallery-04.jpg", alt: "Gallery image 4", orientation: "vertical" as const },
    { src: "/images/gallery/gallery-05.jpg", alt: "Gallery image 5", orientation: "horizontal" as const },
    { src: "/images/gallery/gallery-06.jpg", alt: "Gallery image 6", orientation: "vertical" as const },
  ],
};

export const navItems = [
  { label: "Home", href: "#home", icon: "home" as const },
  { label: "About", href: "#about", icon: "person" as const },
  { label: "Work", href: "#projects", icon: "grid" as const },
  { label: "Gallery", href: "#gallery", icon: "gallery" as const },
];
