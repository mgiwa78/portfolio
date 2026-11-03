export const profile = {
  name: "Giwa Muhammad",
  title: "Senior Full-Stack Engineer",
  tagline:
    "Founder & CTO at SmartEdu. I build SaaS products, mobile apps, marketplaces, and the payment systems underneath them.",
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
    dates: "Sep 2026 - Present",
    title: "Mobile & Full-Stack Engineer (Contract)",
    company: "Neurapath",
    href: "/work/neurapath",
    note: "Contract, remote",
    description:
      "One of two engineers on a private messaging and voice-calling app. I build most of the React Native app (sign-in and onboarding, chat with voice notes, call screens, push notifications, and in-app subscriptions) and work on its Express API and admin dashboard.",
    stack: ["React Native", "Expo", "Redux Toolkit", "Socket.io", "Firebase"],
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
      "Web and mobile work on Nexlen's UK trades platform, where customers post jobs and tradespeople quote and manage the work. I'm the largest contributor to its Next.js web app and build features in its React Native app: project management, job billing, rate cards, client contact channels, and subscription-gated features. Earlier I migrated a legacy Laravel Blade frontend to Vue.js.",
    stack: ["Next.js", "React Native", "Expo", "TypeScript", "Vue.js", "Laravel"],
  },
  {
    dates: "Jul 2024 - Dec 2024",
    title: "Frontend Engineer (Contract)",
    company: "IDEAS Project",
    href: "/work/ideas-mis",
    note: "Federal Government contract",
    description:
      "Built the React frontend for the grant and learning management system of a World Bank-supported skills program under Nigeria's Federal Ministry of Education: grant applications and approval, learner enrollment across states, online courses, progress monitoring, and certificates.",
    stack: ["React", "Vite", "React Router"],
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
    dates: "May 2024 - Oct 2024",
    title: "Full-Stack Engineer",
    company: "Alphatrol Limited",
    description:
      "Owned Guardtrol, a real-time multi-location monitoring platform, across its Flutter mobile app, Node.js backend, and React web dashboard. Migrated the legacy JavaScript codebase to TypeScript and set up the CI/CD pipelines that deployed it.",
    stack: ["Flutter", "TypeScript", "Node.js", "Express", "React", "MongoDB", "MySQL"],
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
  {
    dates: "May 2023 - Nov 2023",
    title: "Full-Stack Web Engineer",
    company: "Bariansystems",
    note: "Abuja",
    description:
      "Led frontend development on a large-scale project in Vue.js, with Laravel APIs and MySQL on the backend. Turned Figma designs into Vue.js and Laravel UI components and took part in code reviews.",
    stack: ["Vue.js", "Laravel", "MySQL", "Figma"],
  },
  {
    dates: "Aug 2022 - Jun 2023",
    title: "Frontend Developer (Internship)",
    company: "Innovative Global Solutions (IGS)",
    note: "Abuja",
    description:
      "Built a clinic management system in PHP and Bootstrap 5 for patient and clinic operations, including its MySQL schema.",
    stack: ["PHP", "Bootstrap 5", "MySQL", "JavaScript"],
  },
  {
    dates: "Feb 2021 - May 2022",
    title: "Full-Stack Developer (Contract)",
    company: "Amron Global Services",
    href: "/work/amron",
    note: "Contract, remote",
    description:
      "Built a custom real estate management application for property and payment management. Amron hired me again in 2026 to build its current platform.",
    stack: ["PHP", "JavaScript", "MySQL", "Bootstrap 5"],
  },
];

export const education = {
  degree: "Bachelor of Software Engineering",
  school: "Nile University of Nigeria, Abuja",
};
