export const profile = {
  name: "Giwa Muhammad",
  title: "Senior Full-Stack Engineer",
  tagline: "Founder & CTO at SmartEdu. I build SaaS products, marketplaces, and the payment systems underneath them.",
  location: "Nigeria, remote (GMT+1)",
  email: "mgiwa78@gmail.com",
  github: "https://github.com/mgiwa78",
  linkedin: "https://linkedin.com/in/muhammad-giwa",
  resume: "/Giwa-Muhammad-Resume.pdf",
  site: "https://mgiwa.vercel.app",
};

export interface Role {
  dates: string;
  title: string;
  company: string;
  href?: string;
  note?: string;
  description: string;
  stack: string[];
}

export const experience: Role[] = [
  {
    dates: "2026 - Present",
    title: "Founder & CTO",
    company: "SmartEdu",
    href: "https://smartedu.ng",
    description:
      "Building a multi-tenant school-management platform for schools across Africa. Each school runs on its own subdomain; fees are collected through Paystack with installment plans and a platform revenue share. I also run onboarding and go-to-market.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Redis", "BullMQ", "Paystack", "Turborepo"],
  },
  {
    dates: "2026 - Present",
    title: "Sole Engineer (Contract)",
    company: "VerraEarth",
    href: "/work/verraearth",
    note: "Contract, remote",
    description:
      "Building a curated multi-vendor marketplace end to end. Checkout splits each order through Stripe Connect into a platform fee and per-vendor transfers, and an escrow-release service pays vendors after a settlement window. Vendors go through an application and review queue before they can sell.",
    stack: ["Next.js", "Node.js", "TypeORM", "PostgreSQL", "Stripe Connect", "BullMQ"],
  },
  {
    dates: "Oct 2025 - Jul 2026",
    title: "Lead Engineer (Contract)",
    company: "FairChild Institute",
    href: "/work/fairchild",
    note: "Contract, remote",
    description:
      "Led engineering on the institute's learning platform: student, instructor, admin, and support portals on one Node.js and TypeORM API, with Stripe payments, SCORM courses, and realtime messaging. Added 2FA, rate limiting, and monitoring, and shipped to three environments.",
    stack: ["React", "Node.js", "TypeORM", "PostgreSQL", "Redis", "Socket.io", "Stripe"],
  },
  {
    dates: "Aug 2024 - Present",
    title: "Full-Stack Engineer",
    company: "Nexlen Systems",
    note: "Remote, UK",
    description:
      "Build and maintain production web applications across the frontend and the Node.js API layer. Migrated a legacy Laravel Blade codebase to a structured Vue.js frontend and cut redundant API calls along the way.",
    stack: ["Vue.js", "Node.js", "TypeScript", "Laravel"],
  },
  {
    dates: "Jun 2024 - Apr 2025",
    title: "Senior Full-Stack Engineer, Architecture Lead",
    company: "Raffles Energies",
    description:
      "Led architecture and backend development for web and mobile clients. Designed the schema and Node.js API from scratch, added Redis caching and background job processing, and ran containerized production releases.",
    stack: ["Node.js", "PostgreSQL", "Redis", "Docker", "React"],
  },
  {
    dates: "Mar 2024 - Jul 2024",
    title: "CTO (Contract)",
    company: "Tegy Inc",
    href: "/work/tegy-inc",
    note: "Contract, remote (San Francisco)",
    description:
      "Built the founding platform for a freight-logistics startup: a real-time load board where brokers post freight and carriers bid, broker-to-dispatcher messaging, and route tracking from pickup to delivery.",
    stack: ["React", "Node.js", "Express", "MySQL"],
  },
  {
    dates: "Nov 2023 - Apr 2024",
    title: "Backend Engineer",
    company: "Centre for Innovation & Entrepreneurship",
    description:
      "Scaled a Laravel learning-management system for a government organization running multiple centers, and redesigned the schema to support new roles and institutional structure.",
    stack: ["Laravel", "PHP", "MySQL"],
  },
];

export const education = {
  degree: "Bachelor of Software Engineering",
  school: "Nile University of Nigeria, Abuja",
};
