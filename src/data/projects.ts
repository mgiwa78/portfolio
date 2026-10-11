export interface Project {
  slug: string;
  title: string;
  /** Only set when verified from git history, deployments, or the resume. */
  year?: string;
  role: string;
  featured?: boolean;
  summary: string;
  description: string;
  context: string;
  built: string;
  details: string[];
  status: string;
  stack: string[];
  links?: { label: string; href: string }[];
  image?: string;
}

export const projects: Project[] = [
  {
    slug: "smartedu",
    title: "SmartEdu",
    year: "2026",
    role: "Founder & CTO",
    featured: true,
    summary: "Multi-tenant school-management SaaS for schools across Africa.",
    description:
      "A school-management platform where every school runs as its own tenant on its own subdomain. Admissions, fees, attendance, grading, and parent communication live in one system, billed through Paystack.",
    context:
      "Most schools were running admissions, fees, and grading on paper and spreadsheets. Parents had no visibility, and fee reconciliation was done by hand. The platform had to serve many independent schools on shared infrastructure without any school seeing another's data.",
    built:
      "Each school gets its own subdomain, which resolves to a tenant on every request. The backend is Node.js with TypeORM on PostgreSQL. Redis and BullMQ handle work that shouldn't block a request: report-card PDFs, fee reminders, and payment reconciliation. The frontend is a Turborepo of three Next.js apps (marketing site, tenant app, internal backoffice) sharing one component and design-token package.",
    details: [
      "Admissions, attendance with QR self check-in, grading, and report cards as one connected academic record",
      "Fee structures, invoices, installment plans, and Paystack collection, with a platform revenue share on each transaction",
      "Staff roles and permissions, payroll, leave, and hostel, transport, clinic, and library modules",
      "Separate portals for staff, teachers, parents, and students, built mobile-first for low-bandwidth connections",
    ],
    status:
      "Live at smartedu.ng, with separate staging and production environments and CI/CD on every push. I also run onboarding and go-to-market.",
    stack: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Socket.io", "Paystack", "Turborepo"],
    links: [{ label: "smartedu.ng", href: "https://smartedu.ng" }],
    image: "/projects/smartedu.png",
  },
  {
    slug: "verraearth",
    title: "VerraEarth",
    year: "2026",
    role: "Sole engineer (contract)",
    featured: true,
    summary: "Curated multi-vendor marketplace with Stripe Connect payouts and escrow.",
    description:
      "A marketplace for makers. Vendors are reviewed before they can sell, and every checkout splits into a platform fee and per-vendor transfers that are held until a release window passes.",
    context:
      "VerraEarth only wants vendors who make what they sell, so vetting is part of the product: applicants are reviewed before a storefront goes live. On the payments side, a single order can contain items from several vendors, and vendors shouldn't be paid until the order has had time to settle.",
    built:
      "Customer, vendor, and admin portals in Next.js and Redux Toolkit against a Node.js and TypeORM API on PostgreSQL. Checkout creates platform-held payments with per-vendor transfers through Stripe Connect, and an escrow-release service pays vendors out after a delay. BullMQ workers send email and notifications; Socket.io carries messaging.",
    details: [
      "Stripe Connect onboarding, application fees, per-vendor transfers, and delayed payout release",
      "Vendor application and admin review queue that gates who can open a storefront",
      "Customer-vendor messaging, disputes with attachments, and support tickets",
      "Role-based permissions, audit logs, and a maintenance mode with admin bypass",
    ],
    status: "Ongoing contract. I'm the only engineer on it; the commerce, payout, and moderation loop is complete.",
    stack: ["Next.js", "Redux Toolkit", "Node.js", "TypeORM", "PostgreSQL", "Stripe Connect", "BullMQ", "Socket.io"],
  },
  {
    slug: "fairchild",
    title: "FairChild",
    year: "2025 - 2026",
    role: "Lead engineer (contract)",
    featured: true,
    summary: "Learning-management platform for FairChild Institute: four portals, one API.",
    description:
      "An institutional LMS for FairChild Institute. Student, instructor, admin, and support portals share one Node.js API with payments, SCORM courses, and realtime messaging.",
    context:
      "FairChild needed more than an off-the-shelf LMS: course delivery, attendance, grading, payments, and a support desk, each with its own portal and its own view of the same academic data.",
    built:
      "A Node.js and TypeORM API on PostgreSQL that models institution, applicant, instructor, staff, and student domains separately, around 100 entities in all. React and Vite portals consume it. BullMQ queues on Redis run report generation and reminders, Socket.io carries messaging, Stripe handles payments, and Puppeteer renders PDFs.",
    details: [
      "Course delivery, quiz and task grading, attendance, and a shared calendar across student and instructor portals",
      "Enrollment, course applications, and a Stripe-backed student wallet",
      "A separate support portal with ticketing and a knowledge base",
      "Hardening: TOTP two-factor auth, rate limiting, Helmet, and input sanitization",
    ],
    status:
      "Shipped to dev, staging, and production with Docker, Nginx, GitHub Actions, automated backups, and Prometheus, Grafana, and Loki monitoring. My contract ended in July 2026.",
    stack: ["React", "Vite", "TypeScript", "Node.js", "Express", "TypeORM", "PostgreSQL", "Redis", "Socket.io", "Stripe"],
    links: [{ label: "fairchildinstitute.com (client)", href: "https://fairchildinstitute.com" }],
  },
  {
    slug: "tegy-inc",
    title: "Tegy",
    year: "2024",
    role: "CTO (contract)",
    featured: true,
    summary: "Freight load board connecting brokers and carriers.",
    description:
      "The founding platform for a San Francisco freight-logistics startup: brokers post loads, carriers and dispatchers bid on them, and accepted loads are tracked from pickup to delivery.",
    context:
      "Brokers and carriers were matching loads over phone calls and scattered tools, with no shared real-time view of available freight and no clear pricing.",
    built:
      "A React frontend on a Node.js and Express API with MySQL. Loads, bids, and broker-to-dispatcher conversations update in real time, and an accepted load is tracked through delivery. Access is subscription-based.",
    details: [
      "Real-time load board: brokers post loads, carriers and dispatchers find and bid on them",
      "In-app conversation between broker and dispatcher from first bid to accepted load",
      "Route tracking from pickup to delivery, with a My Loads dashboard and notifications",
      "Subscription access with upfront freight pricing",
    ],
    status: "Live at tegyinc.com.",
    stack: ["React", "Node.js", "Express", "MySQL", "Stripe"],
    links: [{ label: "tegyinc.com", href: "https://tegyinc.com" }],
    image: "/projects/tegy-inc.png",
  },
  {
    slug: "stackmsp",
    title: "StackMSP",
    role: "Architect and engineer",
    featured: true,
    summary: "Microservice SaaS that automates employee onboarding and offboarding for MSPs.",
    description:
      "A multi-tenant platform for managed service providers that automates onboarding and offboarding across RMM, PSA, identity, HR, and endpoint-management tools.",
    context:
      "MSPs onboard and offboard their clients' employees across half a dozen disconnected systems by hand. Every hire or termination meant repeating the same steps in every tool, for every client.",
    built:
      "Independent services in Node.js and Go, each with its own PostgreSQL database. Services talk over RabbitMQ events rather than shared tables, Redis holds live workflow state and caches, and tenant-scoped RBAC with JWT is enforced at every service boundary. Everything runs in Docker and is designed to scale horizontally on Kubernetes.",
    details: [
      "Database per service, with no shared schema between services",
      "Event-driven orchestration over RabbitMQ across RMM, PSA, IAM, HR, and endpoint integrations",
      "Tenant-scoped RBAC and JWT checks enforced independently in each service",
      "Redis-backed workflow state for long-running onboarding and offboarding runs",
    ],
    status: "Architecture project, designed for horizontal scaling and tenant isolation.",
    stack: ["Node.js", "Go", "RabbitMQ", "Redis", "PostgreSQL", "Docker", "Kubernetes"],
  },
  {
    slug: "qiblacore",
    title: "QiblaCore",
    year: "2026",
    role: "Sole engineer",
    summary: "Hajj and Umrah travel platform, planned as three apps and built one at a time.",
    description:
      "A digital platform for a pilgrimage travel agency: a marketing site, a pilgrim portal, and a staff backoffice in one Turborepo monorepo.",
    context:
      "The agency needed a credible public presence before it needed a booking system. The portal and backoffice depend on decisions about payments, documents, and departures that weren't settled yet.",
    built:
      "I set up the monorepo for all three apps at once, with shared design-token and UI packages, then built the marketing site first. It is fully static, with content stored as typed, Zod-validated data rather than in a CMS. The enquiry form composes an email on the client instead of posting to a server, so the agency never stores personal data it doesn't need.",
    details: [
      "Shared token and component packages used by all three apps",
      "A six-article travel journal with generated Open Graph images and structured data",
      "Benchmarked Webpack against Turbopack builds and shipped the smaller bundle",
      "Domain models and UI primitives for the portal and backoffice documented ahead of the build",
    ],
    status:
      "The marketing site is built and configured for Cloudflare Workers. The pilgrim portal and staff backoffice are designed but not built yet.",
    stack: ["Next.js", "TypeScript", "Turborepo", "Tailwind CSS", "Zod", "Cloudflare Workers"],
  },
  {
    slug: "butee",
    title: "Butee",
    year: "2026",
    role: "Sole engineer",
    summary: "Two-sided marketplace for home-service hairstylists, with escrow payments.",
    description:
      "Customers book stylists to come to them; payment is held in escrow until the booking is complete. Customer, stylist, and admin portals on one API.",
    context:
      "Booking a stylist to your home needs trust in both directions: the customer pays before the work, and the stylist needs to know they'll be paid after. That made the product mostly a payments and disputes system with booking on top.",
    built:
      "Next.js and Redux Toolkit portals against a Node.js and TypeORM API on MySQL. Payments go through Paystack into escrow, with wallet ledgers rather than direct transfers. Socket.io carries chat; Bull queues on Redis process notifications and payouts.",
    details: [
      "Escrow-held payments and wallet ledgers, released when a booking is confirmed complete",
      "Stylist onboarding with portfolio and KYC review",
      "Customer-stylist chat, plus a disputes and reporting flow",
      "Admin backoffice for bookings, escrow, payouts, KYC, and analytics",
    ],
    status: "Built over about five months, from schema to Docker and Railway deployment config.",
    stack: ["Next.js", "Redux Toolkit", "Node.js", "TypeORM", "MySQL", "Redis", "Socket.io", "Paystack"],
  },
  {
    slug: "amron",
    title: "Amron",
    year: "2026",
    role: "Sole engineer",
    summary: "Operations console for a real estate and civil engineering firm.",
    description:
      "An admin console and API for Amron Global Services: property, plot, and project records, client allocations, and the content that powers the public sites.",
    context:
      "Amron manages construction projects, real estate developments, and client allocations across a growing portfolio. That work was being coordinated through spreadsheets and handoffs between teams.",
    built:
      "A React and Vite admin console using TanStack Query and Table and Radix UI, on a Node.js and TypeORM API. The same API serves the public marketing site and the PalmHeights brand site.",
    details: [
      "Property, plot, and project allocation workflows tied to client profiles",
      "One backend serving the admin console, the Amron site, and the PalmHeights site",
      "Team, blog, gallery, and announcement management from one console",
      "Docker builds, GitHub Actions CI/CD, and automated FTP releases",
    ],
    status: "Admin console, API, and marketing site shipped with CI/CD.",
    stack: ["React", "Vite", "TypeScript", "TanStack Query", "Node.js", "TypeORM", "Next.js"],
  },
  {
    slug: "palmheights",
    title: "PalmHeights",
    year: "2026",
    role: "Sole engineer",
    summary: "Listings site for a luxury real estate development in Abuja.",
    description:
      "The site for Palm Heights Estate, Amron's development in Abuja: property and plot listings, project pages, and a contact flow that goes straight to the sales inbox.",
    context:
      "The brand needed its own site for listings without duplicating Amron's backend or waiting on the main admin for every change.",
    built:
      "A Next.js site with its own Redux Toolkit data layer, reading from a namespaced slice of Amron's shared API. Contact submissions are sent through Resend directly to the sales team. Structured data is built in from the start.",
    details: [
      "Property and plot listings with filters, pagination, and gallery detail pages",
      "Sitemap, robots, Open Graph images, and LocalBusiness and FAQ structured data",
      "Contact form validated with Zod and delivered by Resend",
      "Separate staging and production deploys from GitHub Actions",
    ],
    status: "Deployed to staging and production environments through CI/CD.",
    stack: ["Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "Zod", "Resend"],
  },
  {
    slug: "skorlar",
    title: "Skorlar",
    role: "Full-stack engineer",
    summary: "Collaboration platform for academic research supervision.",
    description:
      "One workspace for supervisors and students to manage research projects: milestones, documents, and feedback in one place instead of email threads.",
    context:
      "Academic supervision ran on email threads and printed drafts. There was no shared view of progress, and a supervisor with more than a few students lost track quickly.",
    built:
      "Next.js and Node.js on PostgreSQL, with JWT authentication and role-based access for supervisors and students, containerized with Docker and deployed through CI/CD.",
    details: [
      "Real-time messaging between supervisors and students",
      "Milestone-based progress tracking",
      "Document management with version history",
      "Role-based access for supervisors and students",
    ],
    status: "Used across dozens of academic projects.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "Docker"],
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
