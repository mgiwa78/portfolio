export interface Project {
  id: number;
  slug: string;
  title: string;
  category: string;
  /** Only set when independently verified (git history / deployment evidence). */
  year?: string;
  role: string;
  featured?: boolean;
  tagline: string;
  problem: string;
  approach: string;
  highlights: string[];
  outcome: string;
  stack: string[];
  link?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "smartedu",
    title: "SmartEdu",
    category: "Multi-tenant SaaS",
    year: "2026",
    role: "Solo Engineer",
    featured: true,
    tagline:
      "A multi-tenant school-management platform for schools across Africa, from fee collection to parent communication, on one subdomain-per-school architecture.",
    problem:
      "Schools run admissions, fees, attendance, and grading on paper and spreadsheets, with no shared system and no way for a parent to see anything in real time. SmartEdu had to serve many independent schools on one platform without them ever touching each other's data.",
    approach:
      "I designed a subdomain-per-tenant architecture, each school gets its own app.smartedu.ng address, on a Node.js and TypeORM backend with Postgres, Redis, and BullMQ handling the background work: report card generation, fee reminders, and payment reconciliation. The frontend is a Turborepo of three Next.js apps (marketing site, tenant app, internal backoffice) sharing a component and design-token library.",
    highlights: [
      "Admissions, attendance (including QR self check-in), grading, and report cards as one connected academic record",
      "Fee structures, invoices, installment plans, and Paystack collection, with a platform-level revenue share on every transaction",
      "Staff HR: roles, permissions, payroll, and leave, alongside hostel, transport, clinic, and library modules",
      "Role-scoped portals for staff, teachers, parents, and students, built mobile-first for low-bandwidth connections",
    ],
    outcome:
      "Live in staging and production with CI/CD on every push, backed by sales and onboarding material built to bring schools onto the platform.",
    stack: [
      "Next.js",
      "Node.js",
      "TypeScript",
      "PostgreSQL",
      "Redis",
      "BullMQ",
      "Socket.io",
      "Paystack",
      "Turborepo",
    ],
  },
  {
    id: 2,
    slug: "fairchild",
    title: "FairChild",
    category: "Learning Platform",
    year: "2025 to present",
    role: "Lead Engineer",
    featured: true,
    tagline:
      "An institutional learning management system built for FairChild Institute: separate student, instructor, and support portals on one shared backend.",
    problem:
      "FairChild Institute needed a real LMS, not a generic one: course delivery, attendance, grading, payments, and support, each with its own portal, and each with a different view into the same academic data.",
    approach:
      "I led the build of a Node.js and TypeORM API modeling institution, applicant, instructor, staff, and student domains separately, backed by around 100 database entities. Three React and Vite frontends (student, instructor, support) consume it, with Socket.io for messaging and Redis-backed queues for background work like report generation and reminders.",
    highlights: [
      "Course delivery, task and quiz grading, attendance, and a shared calendar across instructor and student portals",
      "Enrollment, course applications, and a Stripe-backed student wallet and payments flow",
      "A dedicated support portal with ticketing and a knowledge base, separate from the academic apps",
      "SCORM support, Puppeteer-generated PDFs for reports and receipts, and a real three-environment deployment pipeline",
    ],
    outcome:
      "In production across dev, staging, and prod environments with CI/CD, automated backups, and rollback. Currently scoping a Phase 2: a secure DRM video pipeline and React Native instructor and student apps at parity with the web portals.",
    stack: [
      "React",
      "TypeScript",
      "Node.js",
      "Express",
      "TypeORM",
      "PostgreSQL",
      "Redis",
      "Socket.io",
      "Stripe",
    ],
  },
  {
    id: 3,
    slug: "butee",
    title: "Butee",
    category: "Marketplace",
    year: "2026",
    role: "Solo Engineer",
    tagline:
      "A two-sided marketplace for home-service hairstyling: customers book, stylists get matched, and payments sit in escrow until the job is done.",
    problem:
      "Booking a home-service stylist needs trust in both directions: a customer paying before the work happens, and a stylist trusting they'll get paid after. That made this fundamentally a payments and dispute system with a booking flow wrapped around it.",
    approach:
      "I built customer, stylist, and admin portals on Next.js and Redux against a Node.js and TypeORM API, with escrow-based payments (Paystack, plus a dedicated escrow service) and wallet ledgers instead of direct transfers. Realtime chat runs over Socket.io, and Redis-backed queues handle notifications and payout processing.",
    highlights: [
      "Escrow-held payments with wallet ledgers, released only once a booking is confirmed complete",
      "Stylist onboarding with portfolio and KYC review, service requests, and booking management",
      "In-app chat between customer and stylist, plus a disputes and reporting flow for when things go wrong",
      "An admin backoffice covering bookings, escrow, payouts, KYC review, and platform analytics",
    ],
    outcome:
      "Built solo end to end, from schema to deployment tooling (Docker, Railway health checks and migrations), across roughly five months of active development.",
    stack: [
      "Next.js",
      "Redux Toolkit",
      "Node.js",
      "TypeORM",
      "MySQL",
      "Redis",
      "Socket.io",
      "Paystack",
    ],
  },
  {
    id: 4,
    slug: "amron",
    title: "Amron",
    category: "Operations Platform",
    year: "2026",
    role: "Solo Engineer",
    tagline:
      "An operations platform for a real estate and civil engineering firm: property, plot, and project allocation, run from one admin console.",
    problem:
      "Amron Global Services manages construction projects, real estate developments, and client allocations across a growing property portfolio, coordinated by spreadsheet and manual handoffs between teams rather than a system built for it.",
    approach:
      "I built a React and Vite admin console (TanStack Query and Table, Radix UI) against a Node.js and TypeORM API, plus a Next.js marketing site for public-facing content. The admin handles property, plot, and project records, allocations to specific clients, and the team, blog, and gallery content the public site pulls from the same backend.",
    highlights: [
      "Property, plot, and project allocation workflows with client-profile tracking",
      "A shared backend serving both the internal admin and the public marketing site, plus Amron's PalmHeights brand",
      "Team, blog, and gallery content management from a single console",
      "Production deployment with Docker, CI/CD, and automated FTP release to the live site",
    ],
    outcome:
      "In production, with the admin console, API, and marketing site all shipped and deployed under CI/CD.",
    stack: [
      "React",
      "Vite",
      "TypeScript",
      "TanStack Query",
      "Node.js",
      "TypeORM",
      "Next.js",
    ],
  },
  {
    id: 5,
    slug: "palmheights",
    title: "PalmHeights",
    category: "Marketing Site",
    year: "2026",
    role: "Solo Engineer",
    tagline:
      "The marketing site for Palm Heights Estate, Amron's luxury real estate development in Abuja: listings, plots, and a lead pipeline that lands in a real inbox.",
    problem:
      "A real estate brand needed a site that could carry property and plot listings on its own, without waiting on the main Amron admin for every content change, while still drawing from the same underlying data.",
    approach:
      "I built a Next.js site with its own Redux and RTK Query data layer against a namespaced slice of Amron's shared backend, so Palm Heights reads as its own product while riding on shared infrastructure. Contact submissions route through Resend directly into the sales inbox, and the site is built around structured data for search visibility.",
    highlights: [
      "Property and plot listings and project detail pages with galleries, filtering, and pagination",
      "SEO built in from the start: sitemap, robots, Open Graph images, and LocalBusiness and FAQ structured data",
      "Team pages and a contact flow that emails the business directly, no admin step in between",
      "Independent staging and production environments, deployed by CI/CD to a live server",
    ],
    outcome:
      "Live in staging and production, shipped and deployed solo end to end.",
    stack: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Framer Motion"],
  },
  {
    id: 6,
    slug: "qiblacore",
    title: "QiblaCore",
    category: "Travel Platform",
    year: "2026",
    role: "Solo Engineer",
    featured: true,
    tagline:
      "A Hajj and Umrah travel platform, architected as three apps and shipped one at a time, starting with the one that had to exist first.",
    problem:
      "A pilgrimage travel agency needed a real digital presence before it needed a booking system: something that could earn trust and convert enquiries while the more complex portal and backoffice work was scoped properly.",
    approach:
      "I scaffolded a Turborepo monorepo for all three apps (marketing site, pilgrim portal, staff backoffice) up front, sharing a design-token package and UI kit, then shipped the marketing site first: fully static, content modeled as typed, Zod-validated data rather than a CMS. The enquiry form composes an email client-side instead of posting to a server, deliberately, to avoid storing personal data the agency doesn't need to hold.",
    highlights: [
      "A shared token and component system built to carry across all three apps from day one",
      "A six-part travel journal with generated Open Graph images and full structured data, not a bolted-on blog",
      "A measured performance call: benchmarked Webpack against Turbopack and shipped the smaller, faster bundle",
      "Domain models and UI primitives for the pilgrim portal and backoffice, designed and documented ahead of the build",
    ],
    outcome:
      "The marketing site is live on Cloudflare Workers. The client portal and staff backoffice are architected, not yet built: I shipped the piece that needed to exist first and left the rest ready to build on.",
    stack: ["Next.js", "TypeScript", "Turborepo", "Tailwind CSS", "Zod", "Cloudflare Workers"],
  },
  {
    id: 7,
    slug: "verraearth",
    title: "VerraEarth",
    category: "Marketplace",
    year: "2026",
    role: "Solo Engineer",
    featured: true,
    tagline:
      "A vetted marketplace for makers: sellers prove their goods are actually handmade, and payments split automatically between the platform and the vendor.",
    problem:
      "Most marketplaces will list anything. VerraEarth wanted the opposite: a curated space where every vendor proves their products are genuinely crafted, not relabeled and resold, which meant building the vetting process into the platform itself, not just the storefront.",
    approach:
      "I built customer, vendor, and admin portals on Next.js and Redux against a Node.js and TypeORM API, with Stripe Connect handling split payments (a platform fee plus a per-vendor transfer) and a delayed escrow-release service that holds vendor payouts until a release window passes. Vendor applications go through an admin review queue before a store goes live.",
    highlights: [
      "Stripe Connect payouts with automatic platform fees and a delayed release window, not instant transfers",
      "A vendor application and review flow gating who gets to sell, with a directory of storefronts once approved",
      "Realtime messaging, a disputes flow, and support tickets between customers and vendors",
      "A community layer: articles, comments, and events sitting alongside the storefronts",
    ],
    outcome:
      "Built solo over roughly four months of active development, with the full commerce, payout, and moderation loop in place.",
    stack: [
      "Next.js",
      "Redux Toolkit",
      "Node.js",
      "TypeORM",
      "PostgreSQL",
      "Stripe Connect",
      "Socket.io",
    ],
  },
  {
    id: 8,
    slug: "skorlar",
    title: "Skorlar",
    category: "Collaboration Platform",
    role: "Full-Stack Engineer",
    tagline:
      "An end-to-end collaboration platform for academic supervision, replacing scattered emails and paper trails with one shared workspace for supervisors and students.",
    problem:
      "Academic supervision ran on email threads and printed drafts: no shared view of progress, no single place for feedback, and no way for a supervisor to track more than a handful of students without things slipping.",
    approach:
      "I built Skorlar on Next.js and Node.js with a PostgreSQL backend, JWT-based authentication, and role-based access control, containerized with Docker and deployed through a CI/CD pipeline.",
    highlights: [
      "Real-time communication between supervisors and students",
      "Progress tracking with milestone management",
      "Document management with version control",
      "Role-based access control across supervisor and student roles",
    ],
    outcome:
      "Adopted across dozens of academic projects, reducing coordination delays and improving completion rates.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "JWT Auth", "Docker", "CI/CD", "Stripe"],
  },
  {
    id: 9,
    slug: "stackmsp",
    title: "StackMSP",
    category: "Infrastructure SaaS",
    role: "Full-Stack Engineer",
    tagline:
      "A microservice-based SaaS platform automating onboarding and offboarding for managed service providers, across RMM, PSA, IAM, HR, and endpoint tools.",
    problem:
      "MSPs onboard and offboard client employees across half a dozen disconnected systems by hand: RMM, PSA, identity, HR, endpoint management. Every new hire or termination meant repeating the same manual steps across every tool, for every client, with no isolation between tenants.",
    approach:
      "I architected StackMSP as isolated microservices, each with its own database, built on Node.js and Go with RabbitMQ for event-driven communication between services and Redis for live state and caching. Every service is tenant-scoped, with RBAC and JWT authentication enforced at the service boundary, containerized with Docker and designed for Kubernetes-based horizontal scaling.",
    highlights: [
      "Service-isolated databases per microservice, with clean boundaries instead of a shared monolith schema",
      "Event-driven orchestration over RabbitMQ connecting RMM, PSA, IAM, HR, and endpoint management integrations",
      "Tenant-scoped RBAC and JWT authentication enforced independently in every service",
      "Redis-backed live state and caching layer supporting automated onboarding and offboarding workflows",
    ],
    outcome:
      "Architected and built for horizontal scaling and production-grade multi-tenant SaaS operation.",
    stack: ["Node.js", "Go", "RabbitMQ", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
  },
  {
    id: 10,
    slug: "tegy-inc",
    title: "Tegy Inc.",
    category: "Logistics Platform",
    role: "Full-Stack Engineer",
    tagline:
      "A subscription freight load board connecting brokers, carriers, and dispatchers, from load posting to route tracking, for a San Francisco logistics startup.",
    problem:
      "Freight brokers and carriers were matching loads through phone calls and fragmented tools, with no shared, real-time view of available freight, no transparent pricing, and no built-in way to track a load from pickup to delivery.",
    approach:
      "I built the core platform end to end on React and Node.js/Express with MySQL: real-time load discovery and bidding, in-app conversation between broker and dispatcher, and route tracking once a load is accepted, wrapped in a subscription access model.",
    highlights: [
      "Real-time load board where brokers post loads and carriers or dispatchers discover and bid on them",
      "In-app broker-to-dispatcher conversation flow, from first bid to accepted load",
      "Route tracking from pickup through delivery, surfaced in a My Loads dashboard with live notifications",
      "Subscription-based access with transparent, upfront freight pricing",
    ],
    outcome:
      "Built as the founding platform for a freight logistics startup founded in 2025, aimed at removing the friction between brokers, carriers, and shippers.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "JWT Auth",
      "Real-time",
      "REST API",
      "Stripe",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getCategories(): string[] {
  return Array.from(new Set(projects.map((p) => p.category)));
}
