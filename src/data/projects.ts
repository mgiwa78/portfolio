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
      "373 Playwright end-to-end tests across all four portals and the backoffice, including a cross-role permission matrix, plus 120 unit tests on money math, payment-gateway signatures, and the grading engine",
    ],
    status:
      "Live at smartedu.ng, with separate staging and production environments and CI/CD on every push. I also run onboarding and go-to-market.",
    stack: ["Next.js", "Node.js", "TypeScript", "PostgreSQL", "Redis", "BullMQ", "Socket.io", "Paystack", "Playwright", "Turborepo"],
    links: [{ label: "smartedu.ng", href: "https://smartedu.ng" }],
    image: "/projects/smartedu.png",
  },
  {
    slug: "neurapath",
    title: "Neurapath",
    year: "2026",
    role: "Mobile and full-stack engineer (contract)",
    featured: true,
    summary: "Private messaging and voice-calling app in React Native.",
    description:
      "A paid messaging app built around privacy: encrypted messages and voice calls that expire on a schedule, with no phone number needed. I'm one of two engineers, working mostly on the React Native app.",
    context:
      "Neurapath sells privacy, so the app has to feel trustworthy at every step: sign-up without a phone number, messages that delete themselves, calls that connect reliably, and a subscription that works the same on iOS and Android.",
    built:
      "The app is React Native on Expo SDK 58 with Expo Router, Redux Toolkit and RTK Query for state and API calls, and NativeWind for styling. Realtime updates come over Socket.io, push notifications through Firebase Cloud Messaging, in-app purchases through expo-iap, and tokens live in secure storage. The API is Express.",
    details: [
      "Sign-in and onboarding: email, one-time code, ID reveal, profile setup, and the subscription paywall",
      "Chat with recorded voice notes, and incoming and outgoing call screens with call tones",
      "Moved the app's state to Redux Toolkit with RTK Query API slices",
      "In-app subscriptions with a mock billing mode, so purchase and restore flows can be tested without the app stores",
      "Also worked on the API, the admin dashboard, and the marketing site's GitHub Actions deployment",
    ],
    status: "In active development. The marketing site is live at oneneurapath.com.",
    stack: ["React Native", "Expo", "Expo Router", "Redux Toolkit", "NativeWind", "Socket.io", "Firebase", "Express"],
    links: [{ label: "oneneurapath.com", href: "https://oneneurapath.com" }],
    image: "/projects/neurapath.png",
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
      "34 Jest unit tests on platform fees, discount rules and time windows, vendor visibility, and validation",
    ],
    status: "Ongoing contract. I'm the only engineer on it; the commerce, payout, and moderation loop is complete.",
    stack: ["Next.js", "Redux Toolkit", "Node.js", "TypeORM", "PostgreSQL", "Stripe Connect", "BullMQ", "Socket.io"],
  },
  {
    slug: "stackmsp",
    title: "StackMSP",
    year: "2025 - Present",
    role: "Sole engineer (contract)",
    featured: true,
    summary: "Multi-tenant MSP platform: PSA, RMM agent, billing, and a signed Windows patch-management agent.",
    description:
      "A live platform for managed service providers. Each MSP gets a subdomain for clients, contracts, invoices, proposals, support, and device management, with a Go Windows agent that checks in, runs jobs, and installs patches.",
    context:
      "MSPs were running client management, billing, and endpoint work across disconnected tools. Onboarding a client or a device meant repeating the same steps in every system, with no shared view of contracts, invoices, or the machines under management.",
    built:
      "A Node.js, Express, and TypeORM API on MySQL, with Redis and BullMQ for background work and Socket.io for live updates. The tenant and customer portals are React 19 and Vite with Redux Toolkit; the marketing site is Next.js. The RMM agent is Go: it enrolls a Windows machine, signs every request, runs jobs, and reports Windows Update state. Stripe handles subscriptions; QuickBooks is connected over OAuth with tokens encrypted at rest.",
    details: [
      "Subdomain-per-tenant PSA: clients, contracts, invoices, proposals, a customer portal, and a platform admin console",
      "Go Windows agent with per-request RSA signatures, signed jobs, and Windows Update scan and install, including a patch-policy and audit trail",
      "Workflows for onboarding and offboarding, a script catalog tenants can clone, and Ingram Micro product sync",
      "Stripe billing, QuickBooks OAuth, tenant-scoped RBAC, and a 170-test API suite covering auth, tenancy, and agent signing",
    ],
    status: "Live at stackmsp.com. Ongoing contract; I am the only engineer across the API, portals, landing site, and agent.",
    stack: ["React", "Vite", "Redux Toolkit", "Node.js", "TypeORM", "MySQL", "Go", "Redis", "BullMQ", "Stripe", "Docker"],
    links: [{ label: "stackmsp.com", href: "https://stackmsp.com" }],
    image: "/projects/stackmsp.png",
  },
  {
    slug: "truckpaypro",
    title: "TruckPayPro",
    year: "2026",
    role: "Sole engineer (contract)",
    featured: true,
    summary: "Trucking payroll and dispatch: settlements from loads, multi-company isolation, QuickBooks and Stripe.",
    description:
      "A payroll and dispatch platform for small fleets and multi-company dispatchers. Driver pay is calculated from dispatched loads, deductions, and reimbursements, then synced to QuickBooks. Dispatchers who run more than one carrier get isolated company workspaces under one parent billing account.",
    context:
      "Friday settlements were a spreadsheet job: loads in one place, fuel and advances in another, QuickBooks somewhere else. Dispatchers serving several carriers also needed those books kept apart without running a separate product for each company.",
    built:
      "A React app with Redux Toolkit against a Railway-hosted API. Checkout and subscriptions go through Stripe. QuickBooks Online connects over OAuth so completed loads become invoices and expenses push to the right accounts. Motive (and Samsara) pull GPS and fleet data; DAT loads can be saved into the dispatch inbox. Each Dispatcher Pro child company has its own drivers, loads, payroll, and integrations.",
    details: [
      "Settlement engine: unpaid loads, per diem, reimbursements, and custom deductions into net pay and year-to-date statements",
      "Dispatcher Pro: parent billing, a company switcher, and per-company isolation for loads, payroll, inventory, and integrations",
      "Dispatch kanban from assign through delivery, a driver portal, DVIR, and broker/invoice tracking",
      "Stripe subscriptions, QuickBooks Online sync, Motive/Samsara GPS, and DAT load-board import",
    ],
    status: "Live at truckpaypro.com, with a driver portal and Dispatcher Pro multi-company accounts.",
    stack: ["React", "Redux Toolkit", "Stripe", "QuickBooks", "Railway"],
    links: [{ label: "truckpaypro.com", href: "https://truckpaypro.com" }],
    image: "/projects/truckpaypro.png",
  },
  {
    slug: "janitoriq",
    title: "JanitorIQ",
    year: "2026",
    role: "Sole engineer (contract)",
    featured: true,
    summary: "Operations SaaS for cleaning companies: scheduling, GPS time tracking, invoicing, and QuickBooks.",
    description:
      "A platform for janitorial businesses to schedule crews, clock in with GPS, run digital checklists, invoice clients, and sync the books to QuickBooks or Wave. Stripe bills the product itself.",
    context:
      "Cleaning companies were running jobs on sticky notes, texts, and spreadsheets: who is on site, whether the checklist was done, and whether the invoice had gone out were three different conversations. Off-the-shelf tools were either too generic or too expensive for a small crew.",
    built:
      "A React app with Redux Toolkit, React Router, and maps for job sites, talking to a Railway-hosted API on MongoDB. Socket.io carries in-app team messaging. Subscriptions and payments go through Stripe; clients, invoices, and payments sync to QuickBooks Online and Wave.",
    details: [
      "Drag-and-drop scheduling, recurring jobs, and role-based access for admins, managers, and field staff",
      "GPS-verified clock-in/out, digital checklists and inspections, and in-app crew messaging",
      "Quotes, invoices, and payroll tools in one workspace, with QuickBooks Online and Wave sync",
      "Stripe-billed Core plan (per-seat after six users) and a mobile-ready field view for cleaners",
    ],
    status: "Live at janitoriq.com. The native App Store and Play listings were still in progress at last check.",
    stack: ["React", "Redux Toolkit", "MongoDB", "Stripe", "QuickBooks", "Socket.io", "Railway"],
    links: [{ label: "janitoriq.com", href: "https://janitoriq.com" }],
    image: "/projects/janitoriq.png",
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
      "Jest set up with coverage reporting, with unit tests on the academic grading logic",
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
    slug: "tranche",
    title: "Tranche",
    year: "2026",
    role: "Sole engineer",
    summary: "Buy-now-pay-later platform: shopper app, merchant dashboard, and payments engine.",
    description:
      "Shoppers buy now and pay in four installments; merchants get paid and see their orders. I built the whole thing: an Expo shopper app, a NestJS payments engine, and a Next.js merchant dashboard and staff console.",
    context:
      "Buy-now-pay-later is mostly a scheduling and money-movement problem. Every order turns into a set of installments that have to be charged on time, reminded before they're due, and reconciled exactly, without the app and the server ever disagreeing about what's owed.",
    built:
      "A Turborepo with one shared contract package: TypeScript types, Zod schemas, and the installment-schedule and naira-formatting functions, used by the app, the web, and the API so they compute the same numbers. The NestJS API records money in a double-entry ledger, charges saved cards through Paystack, and schedules payment reminders on BullMQ. The Expo app opens Paystack's hosted checkout in an in-app browser session and returns through a deep link.",
    details: [
      "Shopper app: catalog, pay-in-four plan picker with schedule preview, checkout, installment timeline, and early payment",
      "Push reminders before each installment is due, through Expo notifications",
      "Double-entry ledger in the payments engine, with Paystack for card charges and BullMQ for scheduled jobs",
      "Next.js merchant dashboard, staff console, and marketing site sharing the same contract package",
      "Docker images, a Render blueprint, and CI/CD for deployment",
    ],
    status: "Built end to end, with Docker and a Render blueprint configured for deployment.",
    stack: ["Expo", "React Native", "Redux Toolkit", "NestJS", "PostgreSQL", "BullMQ", "Paystack", "Next.js", "Turborepo"],
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
      "This is my second system for Amron. In 2021 I built them a PHP application for property and payment management. By 2026 the business covered construction projects, real estate developments, and client allocations across a larger portfolio, and it needed one platform that could also power its public sites.",
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
    year: "2023 - 2024",
    role: "Sole engineer",
    summary: "Collaboration platform for academic research supervision.",
    description:
      "One workspace for supervisors and students to manage research projects: milestones, documents, and feedback in one place instead of email threads. I built all of it, from the API to the deployment.",
    context:
      "Academic supervision ran on email threads and printed drafts. There was no shared view of progress, and a supervisor with more than a few students lost track quickly.",
    built:
      "A Next.js frontend on the App Router and a Node.js and Express REST API on MongoDB, with JWT authentication and separate supervisor and student roles. I set up the server infrastructure with Docker, Docker Compose, and CI/CD pipelines to serve more than one frontend.",
    details: [
      "Real-time communication between supervisors and students",
      "Milestone-based progress tracking",
      "Document management with version history",
      "REST APIs for user management, secured with JWT and role-based access",
      "UI components refactored over several iterations as supervisors' needs changed",
    ],
    status: "Built between September 2023 and March 2024, and used across dozens of academic projects.",
    stack: ["Next.js", "Node.js", "Express", "MongoDB", "JWT", "Docker", "CI/CD"],
  },
  {
    slug: "ideas-mis",
    title: "IDEAS Project MIS",
    year: "2024",
    role: "Frontend engineer (government contract)",
    summary: "Grant and learning management system for a World Bank-supported skills program.",
    description:
      "A Federal Government system for the IDEAS Project, a World Bank-supported skills program under Nigeria's Federal Ministry of Education. Training bodies apply for grants on behalf of learners, learners across Nigerian states enroll and study online, and they finish with a certificate. I built the frontend over six months in 2024.",
    context:
      "The program funds skills training at scale, which means two pipelines in one system: grant applications from training bodies that have to be reviewed and approved, and learners from across the country who need to enroll, study, and be monitored until they finish. Each step has its own staff, from admins to enrollment officers.",
    built:
      "A React single-page app built with Vite and React Router, with role-based views for each type of staff and for learners. It covers the whole flow, from grant application through approval, enrollment, online coursework, progress monitoring, and certification.",
    details: [
      "Grant applications submitted by training bodies on behalf of learners, then reviewed and approved",
      "Learner applications from across Nigerian states into specific skill-acquisition programs",
      "Online curriculum delivery, with learning progress monitored by staff",
      "Certificates issued to learners who complete their programs",
      "Role-based dashboards for admins, enrollment officers, and other staff",
    ],
    status: "Live at mis-webv2.ideasprojectng.com (sign-in required).",
    stack: ["React", "Vite", "React Router"],
    links: [{ label: "mis-webv2.ideasprojectng.com", href: "https://mis-webv2.ideasprojectng.com/auth/login" }],
  },

];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}
