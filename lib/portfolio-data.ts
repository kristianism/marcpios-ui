// ─── Portfolio Configuration ──────────────────────────────────────────────────

export const person = {
  firstName: "Marc",
  lastName: "Pios",
  name: "Marc Pios",
  role: "Financial Systems Developer",
  avatar: "/profile.jpg",
  email: "marcpios@pm.me",
  location: "Asia/Manila",
  languages: ["English", "Filipino"],
};

export const social = [
  {
    name: "GitHub",
    icon: "github" as const,
    link: "https://github.com",
  },
  {
    name: "LinkedIn",
    icon: "linkedin" as const,
    link: "https://linkedin.com",
  },
  {
    name: "Facebook",
    icon: "facebook" as const,
    link: "https://facebook.com",
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
        name: "University of Design",
        description: "Studied software engineering and human-computer interaction.",
      },
      {
        name: "Build the Future",
        description: "Studied online marketing and personal branding.",
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Figma",
        description: "Able to prototype with high fidelity at rapid speed.",
        tags: ["Figma", "Design Systems", "Prototyping"],
      },
      {
        title: "Next.js",
        description: "Building modern web applications with Next.js and React.",
        tags: ["TypeScript", "React", "Next.js", "Tailwind CSS"],
      },
      {
        title: "Motion Design",
        description: "Creating fluid animations and micro-interactions.",
        tags: ["GSAP", "Framer Motion", "CSS Animations"],
      },
    ],
  },
};

export const projects = [
  {
    slug: "design-system",
    title: "Design System",
    summary:
      "A comprehensive design system built for consistency and scalability across multiple products and platforms.",
    image: "/images/projects/project-01.jpg",
    tags: ["Design", "React", "TypeScript"],
    link: "#",
    year: "2024",
  },
  {
    slug: "portfolio-builder",
    title: "Portfolio Builder",
    summary:
      "An intuitive portfolio builder that lets creators showcase their work with beautiful, customizable templates.",
    image: "/images/projects/project-02.jpg",
    tags: ["Next.js", "Tailwind", "GSAP"],
    link: "#",
    year: "2023",
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
  { label: "Work", href: "#projects", icon: "grid" as const },
  { label: "About", href: "#about", icon: "person" as const },
  { label: "Gallery", href: "#gallery", icon: "gallery" as const },
];
