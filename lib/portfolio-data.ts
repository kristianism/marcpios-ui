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
    description: `${person.firstName} is a design engineer with a passion for transforming complex challenges into simple, elegant design solutions. Their work spans digital interfaces, interactive experiences, and the convergence of design and technology.`,
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Studio Alpha",
        timeframe: "2022 — Present",
        role: "Senior Design Engineer",
        achievements: [
          "Redesigned the entire platform UI/UX, resulting in a 20% increase in user engagement and 30% faster load times.",
          "Spearheaded the integration of AI tools into design workflows, enabling designers to iterate 50% faster.",
        ],
      },
      {
        company: "Creativ3",
        timeframe: "2018 — 2022",
        role: "Lead Designer",
        achievements: [
          "Developed a design system that unified the brand across platforms, improving design consistency by 40%.",
          "Led a cross-functional team to launch a new product line, contributing to a 15% increase in overall revenue.",
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
        name: "Forensic Accountant",
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
        tags: ["GSAP", "Motion", "Lenis"],
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
  {
    slug: "figma-pipeline",
    title: "Figma-to-Code Pipeline",
    summary:
      "Automated design handover tool that bridges the gap between design and development workflows.",
    image: "/images/projects/project-03.jpg",
    tags: ["Automation", "Figma API", "Node.js"],
    link: "#",
    year: "2023",
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
