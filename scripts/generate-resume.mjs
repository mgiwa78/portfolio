// Generates the tailored resume variants (Word .docx) from one set of facts.
//
// ATS rules this file follows:
//   - single column, no tables, text boxes, headers/footers, icons, or images
//   - standard section names: Summary, Skills, Experience, Projects, Education
//   - every job is under Experience (contract roles are labelled in the title), so parsers
//     count all of them as work history
//   - each job line is "Title | Company | Location | Mon YYYY – Mon YYYY"
//   - keywords appear in Skills AND inside dated job bullets
//   - two pages maximum
//
// Run: node scripts/generate-resume.mjs   (then export PDFs, see scripts/export-resume-pdfs.ps1)

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import {
  AlignmentType,
  Document,
  ExternalHyperlink,
  HeadingLevel,
  LevelFormat,
  Packer,
  Paragraph,
  TextRun,
} from "docx";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const FONT = "Calibri";
const BODY = 20; // half-points: 10pt
const SMALL = 19;

// ---------------------------------------------------------------- facts

const contact = {
  name: "Giwa Muhammad",
  location: "Cairo, Egypt (Remote)",
  phone: "+234 905 455 1017",
  whatsapp: "https://wa.me/2349054551017",
  email: "mgiwa78@gmail.com",
  links: [
    ["linkedin.com/in/muhammad-giwa", "https://linkedin.com/in/muhammad-giwa"],
    ["github.com/mgiwa78", "https://github.com/mgiwa78"],
    ["mgiwa.vercel.app", "https://mgiwa.vercel.app"],
  ],
};

const education = "Bachelor of Software Engineering | Nile University of Nigeria | Abuja, Nigeria";
const courses = "Data Structures and Algorithms; System Design | Completed Nov 2026";

// Bullets are keyed by variant; `default` is used when a variant has no entry of its own.
const roles = {
  smartedu: {
    title: "Founder & CTO",
    company: "SmartEdu",
    location: "Remote",
    dates: "2026 – Present",
    bullets: {
      default: [
        "Founded and built a multi-tenant school-management SaaS for African schools, live at smartedu.ng; sole engineer across the backend, three frontends, infrastructure, and go-to-market.",
        "Designed a subdomain-per-tenant architecture on Node.js, TypeORM, and PostgreSQL so independent schools share infrastructure without sharing data.",
        "Built fee collection on Paystack with invoices, installment plans, automated reminders, and a platform revenue share on each transaction; reconciliation and report-card PDFs run as BullMQ jobs on Redis.",
        "Shipped admissions, QR attendance, grading and report cards, payroll, and role-based portals for staff, teachers, parents, and students in a Turborepo of three Next.js apps.",
        "Run staging and production on a Linux VPS with Nginx, wildcard TLS, PM2, and GitHub Actions CI/CD; wrote a 373-test Playwright end-to-end suite and 120 unit tests.",
      ],
      mobile: [
        "Founded and built a multi-tenant school-management SaaS for African schools, live at smartedu.ng, designed mobile-first for parents and students on low-bandwidth connections.",
        "Sole engineer across the Node.js and PostgreSQL backend, three Next.js apps, Paystack fee collection, BullMQ background jobs, and GitHub Actions CI/CD.",
      ],
      qa: [
        "Built SmartEdu's end-to-end suite from scratch in Playwright and TypeScript: 373 tests in 75 spec files covering the marketing site, the staff, teacher, student, and parent portals, and the platform backoffice.",
        "Designed the suite's architecture: four Playwright projects with their own base URLs, a global setup that logs six seeded roles in through the API once and reuses their sessions, and a config that boots the API and three Next.js apps before the run, with parallel workers, CI retries, and traces, screenshots, and video on failure.",
        "Wrote access-control and security tests: a cross-role route matrix proving each role is redirected out of the others' areas, route-guard tests, and password-reset tests that check the response never reveals whether an account exists.",
        "Wrote 120 unit tests with Node's test runner for the highest-risk logic: money arithmetic, fee allocation, gateway charges, payment-gateway signature verification, auth security, and the grading engine.",
        "System under test: a multi-tenant SaaS live at smartedu.ng, with a subdomain-per-tenant Node.js and PostgreSQL backend, Paystack payments, BullMQ jobs, and a Turborepo of three Next.js apps.",
      ],
    },
  },

  freelance: {
    title: "Full-Stack Engineer (Freelance)",
    company: "Self-employed",
    location: "Remote",
    dates: "Jun 2025 – Present",
    bullets: {
      default: [
        "StackMSP (sole engineer): live MSP platform at stackmsp.com with React/Vite portals, a Node.js and TypeORM API, Stripe billing, QuickBooks integration, and a Go Windows RMM agent with signed jobs and patch management.",
        "VerraEarth (sole engineer): multi-vendor marketplace with customer, vendor, and admin portals in Next.js on a Node.js, TypeORM, and PostgreSQL API (about 50 entities); Stripe Connect checkout with per-vendor transfers and an escrow-release service.",
        "Neurapath (one of two engineers, since Sep 2026): React Native and Expo messaging and voice-calling app with Redux Toolkit, Socket.io, and Firebase push; built sign-in, voice-note chat, call screens, and in-app subscriptions.",
        "TruckPayPro and JanitorIQ (sole engineer, 2026): trucking payroll and dispatch, and cleaning-company operations, each with Stripe billing and QuickBooks sync, plus Motive and DAT integrations on TruckPayPro.",
      ],
      payments: [
        "VerraEarth (sole engineer): multi-vendor marketplace on Next.js, Node.js, TypeORM, and PostgreSQL; built Stripe Connect checkout with platform-held payments, application fees, per-vendor transfers, and an escrow-release service that pays vendors after a settlement window.",
        "StackMSP (sole engineer): live MSP platform at stackmsp.com with Stripe billing, QuickBooks integration, React/Vite portals, a Node.js API, and a Go Windows RMM agent with signed jobs.",
        "TruckPayPro (sole engineer, 2026): trucking payroll and dispatch with settlements computed from loads, per diem, reimbursements, and deductions; Stripe subscriptions; QuickBooks, Motive, and DAT integrations.",
        "JanitorIQ (sole engineer, 2026): operations platform for cleaning companies with invoicing, Stripe billing, and QuickBooks/Wave sync.",
      ],
      mobile: [
        "Neurapath (one of two engineers, since Sep 2026): built core features of a private messaging and voice-calling app in React Native (Expo, Expo Router, NativeWind): sign-in and onboarding, chat with recorded voice notes, call screens with call tones, and Firebase push notifications.",
        "Neurapath: moved app state to Redux Toolkit with RTK Query API slices, and built in-app subscriptions with a mock billing mode so purchase and restore flows can be tested without the app stores; also contributed to the Express API and admin dashboard.",
        "VerraEarth and StackMSP (sole engineer): a Stripe Connect marketplace in Next.js and Node.js, and a live MSP platform with React portals and a Go Windows agent.",
      ],
      qa: [
        "VerraEarth (sole engineer): wrote 34 Jest unit tests for the marketplace rules (platform-fee calculation, discount rules and time windows, vendor visibility, input validation, pagination), and a script that generates the API's Postman collection.",
        "StackMSP, TruckPayPro, and JanitorIQ (sole engineer): built and shipped live SaaS platforms on React, Node.js, and PostgreSQL with Stripe billing and QuickBooks integrations.",
        "Neurapath (one of two engineers): React Native and Expo app with in-app subscriptions and a mock billing mode so purchase and restore flows can be tested without the app stores.",
      ],
    },
  },

  nexlen: {
    title: "Full-Stack Engineer",
    company: "Nexlen Systems",
    location: "Remote (UK)",
    dates: "Aug 2024 – Present",
    bullets: {
      default: [
        "Build the Next.js web app and React Native mobile app for the company's UK trades platform, where customers post jobs and tradespeople quote and manage the work.",
        "Largest contributor by commits to the Next.js frontend: dashboard, jobs, subscriptions, and accessibility fixes, shipped through pull requests to a shared staging branch.",
        "Built React Native and Expo features: organization and project management, job billing, rate cards, multiple contact channels per client, and subscription checks that gate features by plan.",
        "Migrated a legacy Laravel Blade frontend to Vue.js; the role now also includes Laravel backend work.",
      ],
      backend: [
        "Build features across the company's UK trades platform: Next.js web app, React Native mobile app, and Laravel backend tasks.",
        "Largest contributor by commits to the Next.js frontend, shipped through pull requests to a shared staging branch; migrated a legacy Laravel Blade frontend to Vue.js.",
      ],
      qa: [
        "Build the Next.js web app and React Native mobile app for the company's UK trades platform, shipping through pull requests to a shared staging branch.",
        "Largest contributor by commits to the Next.js frontend, including accessibility fixes; migrated a legacy Laravel Blade frontend to Vue.js.",
      ],
    },
  },

  fairchild: {
    title: "Lead Engineer (Contract)",
    company: "FairChild Institute",
    location: "Remote",
    dates: "Oct 2025 – Jul 2026",
    bullets: {
      default: [
        "Led engineering on an institutional learning-management platform: four React/Vite portals (student, instructor, admin, support) on one Node.js and TypeORM API modeling about 100 data entities.",
        "Hardened the platform with TOTP 2FA, rate limiting, Helmet, and input sanitization; shipped to dev, staging, and production with Docker, Nginx, GitHub Actions, backups, and Prometheus/Grafana/Loki monitoring.",
      ],
      payments: [
        "Led engineering on an institutional learning-management platform: four React/Vite portals on one Node.js and TypeORM API modeling about 100 data entities.",
        "Built Stripe-backed student payments and wallet, SCORM course support, Puppeteer-generated PDFs, Socket.io messaging, and BullMQ background jobs on Redis.",
      ],
      qa: [
        "Led engineering on an institutional learning-management platform: four React portals on one Node.js and TypeORM API with Stripe payments, SCORM courses, and Socket.io messaging.",
        "Set up Jest with coverage reporting for the API and wrote unit tests for the academic grading logic; shipped to dev, staging, and production with Prometheus, Grafana, and Loki monitoring.",
      ],
      mobile: [
        "Led engineering on an institutional learning platform: four React portals on one Node.js and TypeORM API with Stripe payments, SCORM courses, Socket.io messaging, and three deployment environments.",
      ],
    },
  },

  raffles: {
    title: "Senior Full-Stack Engineer, Architecture Lead",
    company: "Raffles Energies",
    dates: "Jun 2024 – Apr 2025",
    bullets: {
      default: [
        "Led architecture and backend development for web and mobile platforms, designing the relational schema, indexing strategy, and Node.js API from inception for multiple client applications.",
        "Added Redis caching, query optimization, and asynchronous job processing; implemented JWT authentication and tenant-aware RBAC, and containerized services with Docker.",
      ],
      qa: [
        "Led architecture and backend development for web and mobile platforms, designing the schema and Node.js API from inception.",
        "Used Postman for API testing and debugging, implemented JWT authentication and tenant-aware RBAC, and ran production deployments through structured release cycles.",
      ],
      mobile: [
        "Designed the schema and Node.js API from inception for the company's web and mobile clients, with JWT authentication, tenant-aware RBAC, Redis caching, and background jobs.",
      ],
    },
  },

  ideas: {
    title: "Frontend Engineer (Contract)",
    company: "IDEAS Project, Federal Ministry of Education (Nigeria)",
    dates: "Jul 2024 – Dec 2024",
    bullets: {
      default: [
        "Built the React frontend (Vite, React Router) for the grant and learning-management system of a World Bank-supported skills program: grant applications, learner enrollment across Nigerian states, online courses, progress monitoring, and certificates, with role-based staff views.",
      ],
    },
  },

  alphatrol: {
    title: "Full-Stack Engineer",
    company: "Alphatrol Limited",
    dates: "May 2024 – Oct 2024",
    bullets: {
      default: [
        "Owned Guardtrol, a real-time multi-location monitoring platform, across its Flutter mobile app, Node.js/Express backend on MongoDB and MySQL, and React web dashboard; migrated the codebase from JavaScript to TypeScript and set up GitHub Actions CI/CD.",
      ],
    },
  },

  tegy: {
    title: "CTO (Contract)",
    company: "Tegy Inc.",
    location: "Remote (San Francisco)",
    dates: "Mar 2024 – Jul 2024",
    bullets: {
      default: [
        "Built the founding platform for a freight-logistics startup on React, Node.js/Express, and MySQL, live at tegyinc.com: a real-time load board with bidding, broker-to-dispatcher messaging, and route tracking.",
      ],
    },
  },

  cie: {
    title: "Backend Engineer",
    company: "Centre for Innovation & Entrepreneurship",
    dates: "Nov 2023 – Apr 2024",
    bullets: {
      default: [
        "Scaled a Laravel learning-management system for a government organization running multiple centers, redesigning the relational schema to support expanded roles and institutional structure.",
      ],
    },
  },

  barian: {
    title: "Full-Stack Web Engineer",
    company: "Bariansystems",
    location: "Abuja, Nigeria",
    dates: "May 2023 – Nov 2023",
    bullets: {
      default: [
        "Led frontend development on a large-scale Vue.js project with Laravel APIs and MySQL; turned Figma designs into UI components and took part in code reviews.",
      ],
    },
  },

  igs: {
    title: "Frontend Developer Intern",
    company: "Innovative Global Solutions (IGS)",
    location: "Abuja, Nigeria",
    dates: "Aug 2022 – Jun 2023",
    bullets: {
      default: [
        "Built a clinic management system in PHP, MySQL, and Bootstrap 5 for patient and clinic operations, and took part in code reviews.",
      ],
    },
  },

  amron: {
    title: "Full-Stack Developer (Contract)",
    company: "Amron Global Services",
    location: "Remote",
    dates: "Feb 2021 – May 2022",
    bullets: {
      default: [
        "Built a real estate management application for property and payment management in PHP, JavaScript, MySQL, and Bootstrap 5; rehired in 2026 to build the company's current platform.",
      ],
    },
  },
};

const projects = {
  ledger: {
    name: "Payment Ledger (C#, ASP.NET Core, PostgreSQL)",
    link: "github.com/mgiwa78/payment-ledger",
    text: "Double-entry ledger API with JWT auth, idempotent transfers, HMAC-signed webhook intake, integer minor-unit money, optimistic concurrency with retry, and a transactional outbox worker (FOR UPDATE SKIP LOCKED, backoff, dead-letter).",
  },
  workflow: {
    name: "Distributed Workflow Engine (Go, SQLite)",
    link: "github.com/mgiwa78/distributed-workflow-engine",
    text: "Job engine with a fixed worker pool, channel-based job and result handoff, per-job context cancellation, and SQLite persistence so unfinished work is reclaimed after a crash.",
  },
  ingestion: {
    name: "Event Ingestion (Rust, Tokio, Axum)",
    link: "github.com/mgiwa78/event-ingestion",
    text: "Service that accepts events over HTTP and TCP, applies backpressure with bounded queues, appends NDJSON to sharded WAL files, and exposes Prometheus metrics with graceful drain on shutdown.",
  },
  tranche: {
    name: "Tranche, buy-now-pay-later platform (Expo, NestJS, Next.js)",
    text: "Built end to end: an Expo shopper app with pay-in-four checkout through Paystack, installment timeline, and push reminders; a NestJS payments engine with a double-entry ledger and BullMQ scheduling; and a Next.js merchant dashboard, sharing one Zod contract package in a Turborepo.",
  },
};

// ---------------------------------------------------------------- variants

const S = {
  languages: ["Languages", "TypeScript, JavaScript, SQL, Go, Rust, C#, PHP, Dart"],
  frontend: ["Frontend", "React, Next.js, Vue.js, Redux Toolkit, Vite, Tailwind CSS, HTML, CSS"],
  backend: ["Backend", "Node.js, Express, NestJS, TypeORM, ASP.NET Core, Laravel, REST APIs, microservices"],
  mobile: ["Mobile", "React Native, Expo, Expo Router, Flutter, Firebase Cloud Messaging, in-app purchases"],
  databases: ["Databases", "PostgreSQL, MySQL, MongoDB, Redis, SQLite"],
  payments: ["Payments", "Stripe, Stripe Connect, Paystack, escrow and split payments, double-entry ledgers, reconciliation, QuickBooks API"],
  async: ["Messaging & Async", "BullMQ, RabbitMQ, Socket.io, webhooks, transactional outbox, Tokio"],
  devops: ["DevOps & Cloud", "Docker, GitHub Actions, CI/CD, Nginx, Linux, PM2, Cloudflare Workers, Prometheus, Grafana, Git"],
  testing: ["Testing", "Playwright, Jest, Node.js test runner, Postman, end-to-end and unit testing"],
  security: ["Security", "JWT, RBAC, multi-tenant data isolation, TOTP 2FA, rate limiting, HMAC webhooks"],
};

const variants = {
  fullstack: {
    files: [
      "Claude outputs/Giwa-Muhammad-Resume-FullStack.docx",
      "Claude outputs/Giwa-Muhammad-Senior-Full-Stack-Engineer.docx",
      "public/Senior-Full-Stack-Engineer-Resume.docx",
    ],
    headline: "Senior Full-Stack Engineer | TypeScript, React, Next.js, Node.js, PostgreSQL",
    summary:
      "Senior full-stack engineer with 5+ years of experience building production SaaS platforms, marketplaces, mobile apps, and payment systems with TypeScript, React, Next.js, Node.js, and PostgreSQL. Founder and CTO of SmartEdu, a live multi-tenant school-management SaaS, and sole or lead engineer on platforms in education, logistics, field operations, and commerce. Strong in Stripe Connect and Paystack payments, multi-tenant architecture, Redis and BullMQ background jobs, automated testing, and owning CI/CD and infrastructure end to end.",
    skills: [S.languages, S.frontend, S.backend, S.databases, S.payments, S.mobile, S.devops, S.testing, S.security],
    roles: ["smartedu", "freelance", "nexlen", "fairchild", "raffles", "ideas", "alphatrol", "tegy", "cie", "barian", "igs", "amron"],
    projects: ["ledger", "workflow", "ingestion"],
  },

  backend: {
    files: ["Claude outputs/Giwa-Muhammad-Resume-Backend.docx"],
    headline: "Senior Backend Engineer | Node.js, TypeScript, PostgreSQL, Go",
    summary:
      "Backend-leaning full-stack engineer with 5+ years of experience designing the data models, APIs, and asynchronous infrastructure behind production products: multi-tenant architectures on PostgreSQL, job pipelines on Redis and BullMQ, event-driven services on RabbitMQ, and payment systems on Stripe Connect and Paystack, usually as the engineer who owns the system from schema to deployment. Founder of SmartEdu, a live multi-tenant SaaS; previously led engineering on FairChild Institute's learning platform and backend architecture at Raffles Energies. Personal systems work in Go, Rust, and C#.",
    skills: [S.backend, S.languages, S.databases, S.async, S.devops, S.payments, S.security, S.testing, S.frontend],
    roles: ["smartedu", "freelance", "nexlen", "fairchild", "raffles", "cie", "alphatrol", "tegy", "ideas", "barian", "amron"],
    projects: ["ledger", "workflow", "ingestion"],
  },

  payments: {
    files: ["Claude outputs/Giwa-Muhammad-Resume-Payments.docx"],
    headline: "Senior Full-Stack Engineer | Payments & Fintech (Stripe Connect, Paystack)",
    summary:
      "Full-stack engineer with 5+ years of experience, focused on payments. Built Stripe Connect split payments with delayed escrow release, Paystack fee collection with installment plans and a platform revenue share, a buy-now-pay-later engine on a double-entry ledger, Stripe subscription billing with QuickBooks sync, and the reconciliation jobs behind them. Founder of SmartEdu, a live multi-tenant platform that collects school fees through Paystack. Comfortable owning the whole system: TypeScript, Node.js, and PostgreSQL on the back end, Next.js and React on the front, Redis and BullMQ for asynchronous work, and the CI/CD that ships it.",
    skills: [S.payments, S.backend, S.databases, S.async, S.languages, S.frontend, S.devops, S.security, S.testing],
    roles: ["smartedu", "freelance", "nexlen", "fairchild", "raffles", "tegy", "alphatrol", "ideas", "cie", "amron"],
    projects: ["ledger", "tranche"],
  },

  mobile: {
    files: ["Claude outputs/Giwa-Muhammad-Resume-Mobile.docx"],
    headline: "Mobile Engineer | React Native, Expo, TypeScript, Flutter",
    summary:
      "Mobile engineer with 5+ years of full-stack experience, building React Native apps with Expo and, earlier, Flutter. Recent work includes a private messaging and voice-calling app with push notifications and in-app subscriptions, a buy-now-pay-later shopper app with Paystack checkout and payment reminders, and the mobile app for a UK trades-management platform. Because I also build the APIs and web apps behind them, I handle the whole mobile path: authentication and secure token storage, payments, push notifications, realtime updates, EAS builds and over-the-air updates, and the backend endpoints the app depends on.",
    skills: [
      ["Mobile", "React Native, Expo, Expo Router, React Navigation, Flutter, EAS Build, over-the-air updates"],
      ["Mobile platform", "Push notifications (Expo, Firebase Cloud Messaging), in-app purchases, secure token storage, deep linking, camera and media"],
      ["State & UI", "Redux Toolkit, RTK Query, Zod, Socket.io, NativeWind (Tailwind CSS), Reanimated"],
      ["Languages", "TypeScript, JavaScript, Dart, SQL"],
      ["Backend & web", "Node.js, Express, NestJS, Next.js, React, PostgreSQL, Redis, BullMQ"],
      ["Payments", "Paystack, Stripe, Stripe Connect"],
      ["Tooling", "Git, GitHub Actions, Docker, Playwright, Jest"],
    ],
    roles: ["smartedu", "freelance", "nexlen", "fairchild", "raffles", "ideas", "alphatrol", "tegy", "cie", "barian", "igs", "amron"],
    projects: ["tranche"],
  },

  qa: {
    files: ["Claude outputs/Giwa-Muhammad-Resume-QA-Automation.docx"],
    headline: "QA Automation Engineer / SDET | Playwright, TypeScript, Jest",
    summary:
      "Software engineer in test with 5+ years of full-stack experience. I have written more than 500 automated tests across the products I build: a 373-test Playwright suite covering four user roles and an admin backoffice, unit tests in Jest and Node's test runner, and targeted tests for the riskiest logic, including payment calculations, gateway signature checks, grading engines, and access control. Because I also build the systems I test, I write suites that stay maintainable: API-driven fixtures instead of UI logins, seeded test data, role-permission matrices, and failure artifacts (traces, screenshots, video) that make a red test quick to diagnose.",
    skills: [
      ["Test automation", "Playwright, Jest, Node.js test runner, ts-jest"],
      ["Test types", "End-to-end, unit, regression, role-based access, authentication and security, API testing"],
      ["Practices", "Fixtures and global setup, API-driven auth, seeded test data (Faker), parallel runs, retries, traces, screenshots and video on failure, HTML reports, CI integration"],
      ["API tools", "Postman, Swagger/OpenAPI, REST"],
      ["Languages", "TypeScript, JavaScript, SQL"],
      ["Stack under test", "Next.js, React, React Native, Node.js, Express, PostgreSQL, MySQL, MongoDB, Redis, Stripe, Paystack"],
      ["Tooling", "Git, GitHub Actions, Docker"],
    ],
    roles: ["smartedu", "freelance", "nexlen", "fairchild", "raffles", "ideas", "alphatrol", "tegy", "cie", "barian", "amron"],
    projects: [],
  },
};

// ---------------------------------------------------------------- layout

const run = (text, opts = {}) => new TextRun({ text, font: FONT, size: BODY, ...opts });

const link = (text, href, size = SMALL) =>
  new ExternalHyperlink({ link: href, children: [run(text, { size, color: "1155CC", underline: {} })] });

const heading = (title) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 160, after: 60 },
    keepNext: true,
    border: { bottom: { style: "single", size: 6, color: "999999", space: 2 } },
    children: [run(title.toUpperCase(), { bold: true, size: 22 })],
  });

const bullet = (text) =>
  new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 30 },
    children: [run(text)],
  });

const jobLine = (r) =>
  new Paragraph({
    spacing: { before: 100, after: 30 },
    keepNext: true,
    children: [
      run(`${r.title} | ${r.company}`, { bold: true }),
      run([r.location, r.dates].filter(Boolean).map((s) => ` | ${s}`).join("")),
    ],
  });

const skillLine = ([label, value]) =>
  new Paragraph({ spacing: { after: 20 }, children: [run(`${label}: `, { bold: true }), run(value)] });

function build(key, v) {
  const sep = () => run("  |  ", { size: SMALL });
  const children = [
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 20 },
      children: [run(contact.name, { bold: true, size: 34 })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 30 },
      children: [run(v.headline, { bold: true, size: 21 })],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 20 },
      children: [
        run(contact.location, { size: SMALL }),
        sep(),
        link(contact.phone, contact.whatsapp),
        run(" (WhatsApp)", { size: SMALL }),
        sep(),
        link(contact.email, `mailto:${contact.email}`),
      ],
    }),
    new Paragraph({
      alignment: AlignmentType.CENTER,
      spacing: { after: 60 },
      children: contact.links.flatMap(([text, href], i) => (i ? [sep(), link(text, href)] : [link(text, href)])),
    }),

    heading("Summary"),
    new Paragraph({ spacing: { after: 40 }, children: [run(v.summary)] }),

    heading("Skills"),
    ...v.skills.map(skillLine),

    heading("Experience"),
  ];

  // Always reverse-chronological (current roles first), whatever order a variant lists them in.
  for (const id of Object.keys(roles).filter((id) => v.roles.includes(id))) {
    const r = roles[id];
    children.push(jobLine(r), ...(r.bullets[key] ?? r.bullets.default).map(bullet));
  }

  if (v.projects.length) {
    children.push(heading("Projects"));
    for (const id of v.projects) {
      const p = projects[id];
      children.push(
        new Paragraph({
          spacing: { before: 80, after: 30 },
          keepNext: true,
          children: [run(p.name, { bold: true }), ...(p.link ? [run(" | "), link(p.link, `https://${p.link}`, BODY)] : [])],
        }),
        bullet(p.text)
      );
    }
  }

  children.push(
    heading("Education"),
    new Paragraph({ spacing: { after: 20 }, children: [run(education)] }),
    new Paragraph({ spacing: { after: 0 }, children: [run("Courses: ", { bold: true }), run(courses)] })
  );

  return new Document({
    creator: contact.name,
    title: `${contact.name} - ${v.headline.split(" | ")[0]} Resume`,
    styles: {
      default: {
        document: { run: { font: FONT, size: BODY } },
        heading1: { run: { font: FONT, size: 22, bold: true, color: "000000" }, paragraph: { keepNext: true } },
      },
    },
    numbering: {
      config: [
        {
          reference: "bullets",
          levels: [
            {
              level: 0,
              format: LevelFormat.BULLET,
              text: "•",
              alignment: AlignmentType.LEFT,
              style: { paragraph: { indent: { left: 300, hanging: 180 } } },
            },
          ],
        },
      ],
    },
    sections: [
      {
        properties: {
          page: {
            size: { width: 12240, height: 15840 }, // US Letter
            margin: { top: 620, right: 760, bottom: 620, left: 760 },
          },
        },
        children,
      },
    ],
  });
}

const only = process.argv[2];
for (const [key, v] of Object.entries(variants)) {
  if (only && only !== key) continue;
  const buffer = await Packer.toBuffer(build(key, v));
  for (const rel of v.files) {
    const target = join(root, rel);
    mkdirSync(dirname(target), { recursive: true });
    writeFileSync(target, buffer);
    console.log(key.padEnd(10), "->", rel);
  }
}
