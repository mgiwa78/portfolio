import { writeFileSync, copyFileSync, mkdirSync } from "node:fs";
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

const bullet = (text) =>
  new Paragraph({
    numbering: { reference: "bullets", level: 0 },
    spacing: { after: 60 },
    children: [new TextRun({ text, font: "Calibri", size: 20 })],
  });

const section = (title) =>
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    spacing: { before: 200, after: 80 },
    border: {
      bottom: { style: "single", size: 6, color: "999999", space: 4 },
    },
    children: [
      new TextRun({
        text: title,
        bold: true,
        font: "Calibri",
        size: 22,
        allCaps: true,
      }),
    ],
  });

const job = (title, meta) =>
  new Paragraph({
    spacing: { before: 120, after: 40 },
    children: [
      new TextRun({ text: title, bold: true, font: "Calibri", size: 20 }),
      new TextRun({ text: `  ${meta}`, font: "Calibri", size: 20 }),
    ],
  });

const skill = (label, value) =>
  new Paragraph({
    spacing: { after: 40 },
    children: [
      new TextRun({ text: `${label}: `, bold: true, font: "Calibri", size: 20 }),
      new TextRun({ text: value, font: "Calibri", size: 20 }),
    ],
  });

const doc = new Document({
  styles: {
    default: {
      document: {
        styles: [
          {
            id: "Normal",
            run: { font: "Calibri", size: 20 },
          },
        ],
      },
      heading1: {
        run: { font: "Calibri", size: 22, bold: true, allCaps: true },
        paragraph: {
          spacing: { before: 200, after: 80 },
          keepNext: true,
        },
      },
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
            style: {
              paragraph: {
                indent: { left: 360, hanging: 180 },
              },
            },
          },
        ],
      },
    ],
  },
  sections: [
    {
      properties: {
        page: {
          size: { width: 12240, height: 15840 },
          margin: { top: 540, right: 720, bottom: 540, left: 720 },
        },
      },
      children: [
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 40 },
          children: [
            new TextRun({
              text: "GIWA MUHAMMAD",
              bold: true,
              font: "Calibri",
              size: 32,
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 40 },
          children: [
            new TextRun({
              text: "Senior Full-Stack Engineer  ·  SaaS, Marketplaces & Payments",
              font: "Calibri",
              size: 20,
            }),
          ],
        }),
        new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 160 },
          children: [
            new TextRun({ text: "Cairo, Egypt (Remote, GMT+2)  ·  WhatsApp ", font: "Calibri", size: 18 }),
            new ExternalHyperlink({
              link: "https://wa.me/2349054551017",
              children: [
                new TextRun({ text: "+234 905 455 1017", font: "Calibri", size: 18, color: "1155CC", underline: {} }),
              ],
            }),
            new TextRun({
              text: "  ·  mgiwa78@gmail.com  ·  github.com/mgiwa78  ·  linkedin.com/in/muhammad-giwa  ·  mgiwa.vercel.app",
              font: "Calibri",
              size: 18,
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({
              text: "Full-stack engineer with 5+ years of experience building and running production SaaS products, marketplaces, and the payment systems underneath them. Founder of SmartEdu, a live multi-tenant school-management platform, and lead or sole engineer on platforms across education, logistics, field operations, real estate, and commerce.",
              font: "Calibri",
              size: 20,
            }),
          ],
        }),
        new Paragraph({
          spacing: { after: 80 },
          children: [
            new TextRun({
              text: "Strongest in TypeScript, Node.js, Next.js, and PostgreSQL, with real depth in Stripe Connect and Paystack, escrow and split payments, multi-tenant data isolation, background job processing, and owning CI/CD and infrastructure end to end. Personal systems work also covers Go concurrency, Rust async ingestion, and a C#/.NET double-entry ledger.",
              font: "Calibri",
              size: 20,
            }),
          ],
        }),

        section("Skills"),
        skill("Languages", "TypeScript, JavaScript, Go, Rust, C#, Dart, SQL"),
        skill("Frontend", "Next.js, React, Redux Toolkit, Vue.js, Tailwind CSS"),
        skill("Mobile", "React Native, Expo, Flutter"),
        skill(
          "Backend",
          "Node.js, Express, TypeORM, ASP.NET Core, REST APIs, microservices"
        ),
        skill(
          "Payments",
          "Stripe, Stripe Connect, Paystack, escrow and split-payment flows, double-entry ledgers, reconciliation"
        ),
        skill("Data", "PostgreSQL, MySQL, MongoDB, Redis, SQLite"),
        skill(
          "Realtime & Async",
          "Socket.io, BullMQ, RabbitMQ, Tokio, webhooks, transactional outbox"
        ),
        skill(
          "Infrastructure",
          "Docker, GitHub Actions CI/CD, Nginx, Linux VPS, Cloudflare Workers, Prometheus, Grafana, OpenTelemetry"
        ),
        skill(
          "Security",
          "JWT, tenant-scoped RBAC, TOTP two-factor auth, rate limiting, HMAC webhooks"
        ),

        section("Experience"),
        job(
          "Founder & CTO  |  SmartEdu",
          "2026 – Present"
        ),
        bullet(
          "Founded and built a multi-tenant school-management SaaS for African schools, live at smartedu.ng; sole engineer across the backend, three frontends, infrastructure, and go-to-market."
        ),
        bullet(
          "Designed a subdomain-per-tenant architecture on Node.js, TypeORM, and PostgreSQL so independent schools share infrastructure without sharing data."
        ),
        bullet(
          "Built fee collection on Paystack with invoices, installment plans, automated reminders, and a platform revenue share on each transaction; reconciliation and report-card PDFs run as BullMQ jobs on Redis."
        ),
        bullet(
          "Shipped admissions, QR attendance, grading and report cards, payroll, and role-based portals for staff, teachers, parents, and students, designed mobile-first for low-bandwidth connections."
        ),
        bullet(
          "Run staging and production on a Linux VPS with Nginx, wildcard TLS, PM2, and GitHub Actions CI/CD; the frontend is a Turborepo of three Next.js apps sharing one component library."
        ),

        job(
          "Full-Stack Engineer  |  Nexlen Systems",
          "Aug 2024 – Present  ·  Remote (UK)"
        ),
        bullet(
          "Work on Artisans Manager, a UK trades platform where customers post jobs and tradespeople quote and manage the work, across its Next.js web app and React Native mobile app."
        ),
        bullet(
          "Largest contributor by commits to the Next.js frontend: dashboard, jobs, subscriptions, and accessibility fixes, shipped through pull requests to a shared staging branch."
        ),
        bullet(
          "Built mobile features in React Native and Expo: organisation and project management, job billing, rate cards, multiple contact channels per client, and subscription checks that gate features by plan."
        ),
        bullet(
          "Earlier, migrated a legacy Laravel Blade frontend to Vue.js; my role now also includes Laravel backend tasks."
        ),

        job(
          "Senior Full-Stack Engineer, Architecture Lead  |  Raffles Energies",
          "Jun 2024 – Apr 2025"
        ),
        bullet(
          "Led architecture and backend development for web and mobile platforms, designing the relational schema, indexing strategy, and Node.js API from inception for multiple client applications."
        ),
        bullet(
          "Added Redis caching and query optimization to reduce response latency, and built asynchronous job processing and workflow-automation pipelines."
        ),
        bullet(
          "Implemented JWT authentication and tenant-aware RBAC; containerized services and ran production deployments through structured, low-risk release cycles."
        ),

        job("Full-Stack Engineer  |  Alphatrol Limited", "May 2024 – Oct 2024"),
        bullet(
          "Took full ownership of Guardtrol, a real-time multi-location monitoring platform, across its Flutter mobile app, Node.js/Express backend on MongoDB and MySQL, and React web dashboard."
        ),
        bullet(
          "Migrated the legacy JavaScript codebase to TypeScript and set up the CI/CD pipelines that deployed the platform, using GitHub Actions."
        ),

        job(
          "Backend Engineer  |  Centre for Innovation & Entrepreneurship",
          "Nov 2023 – Apr 2024"
        ),
        bullet(
          "Scaled a Laravel learning-management system for a government organization running multiple centers, redesigning the relational schema to support expanded roles and institutional structure."
        ),

        job(
          "Full-Stack Web Engineer  |  Bariansystems",
          "May 2023 – Nov 2023  ·  Abuja"
        ),
        bullet(
          "Led frontend development on a large-scale project in Vue.js, with Laravel APIs and MySQL on the backend; turned Figma designs into Vue.js and Laravel UI components and took part in code reviews."
        ),

        job(
          "Frontend Developer (Internship)  |  Innovative Global Solutions (IGS)",
          "Aug 2022 – Jun 2023  ·  Abuja"
        ),
        bullet(
          "Built a clinic management system in PHP and Bootstrap 5 for patient and clinic operations, including its MySQL schema, and took part in code reviews."
        ),

        section("Contract & Consulting"),
        job(
          "Mobile & Full-Stack Engineer  |  Neurapath",
          "Sep 2026 – Present  ·  Remote"
        ),
        bullet(
          "One of two engineers on a private messaging and voice-calling app (React Native, Expo, Redux Toolkit, Socket.io, Firebase): built sign-in and onboarding, chat with voice notes, call screens, push notifications, and in-app subscriptions; also worked on its Express API and admin dashboard."
        ),

        job("Sole Engineer  |  VerraEarth", "2026 – Present  ·  Remote"),
        bullet(
          "Building a curated multi-vendor marketplace end to end: customer, vendor, and admin portals in Next.js on a Node.js, TypeORM, and PostgreSQL API with about 50 data entities."
        ),
        bullet(
          "Built Stripe Connect checkout with platform-held payments, application fees, and per-vendor transfers, plus an escrow-release service that pays vendors after a settlement window."
        ),

        job("Sole Engineer  |  StackMSP", "Jun 2025 – Present  ·  Remote"),
        bullet(
          "Sole engineer on the live MSP platform at stackmsp.com: React/Vite portals, a Node.js and TypeORM API, Stripe billing, QuickBooks, and a Go Windows RMM agent with signed jobs and patch management."
        ),

        job("Sole Engineer  |  TruckPayPro", "2026  ·  Remote"),
        bullet(
          "Built trucking payroll and dispatch at truckpaypro.com: settlements from loads, isolated multi-company workspaces for dispatchers, Stripe subscriptions, and QuickBooks, Motive, and DAT integrations."
        ),

        job("Sole Engineer  |  JanitorIQ", "2026  ·  Remote"),
        bullet(
          "Built janitoriq.com, an operations platform for cleaning companies: crew scheduling, GPS time tracking, digital checklists, invoicing, and QuickBooks/Wave sync, billed through Stripe."
        ),

        job(
          "Lead Engineer  |  FairChild Institute",
          "Oct 2025 – Jul 2026  ·  Remote"
        ),
        bullet(
          "Led engineering on an institutional learning-management platform: four React/Vite portals (student, instructor, admin, support) on one Node.js and TypeORM API modeling about 100 data entities."
        ),
        bullet(
          "Hardened the platform with TOTP 2FA, rate limiting, and input sanitization, and shipped to three environments with Docker, Nginx, GitHub Actions, backups, and Prometheus/Grafana/Loki monitoring."
        ),

        job(
          "Frontend Engineer  |  IDEAS Project, Federal Government contract",
          "Jul 2024 – Dec 2024"
        ),
        bullet(
          "Built the React frontend (Vite, React Router) for the grant and learning management system of the IDEAS Project, a World Bank-supported skills program under Nigeria's Federal Ministry of Education."
        ),
        bullet(
          "Covered grant applications, learner enrollment across Nigerian states, online courses, progress monitoring, and certificates, with role-based staff views."
        ),

        job(
          "CTO (Contract)  |  Tegy Inc.",
          "Mar 2024 – Jul 2024  ·  Remote (San Francisco)"
        ),
        bullet(
          "Built the founding platform for a freight-logistics startup on React, Node.js/Express, and MySQL, live at tegyinc.com: a real-time load board with bidding, broker-to-dispatcher messaging, and route tracking."
        ),

        job(
          "Full-Stack Developer  |  Amron Global Services",
          "Feb 2021 – May 2022  ·  Remote"
        ),
        bullet(
          "Built a custom real estate management application for property and payment management in PHP, JavaScript, MySQL, and Bootstrap 5. Amron hired me again in 2026 to build its current platform."
        ),

        section("Personal Systems Projects"),
        job(
          "Payment Ledger  |  github.com/mgiwa78/payment-ledger",
          "2026  ·  Personal"
        ),
        bullet(
          "Built a double-entry ASP.NET Core 10 API on Postgres with JWT auth, idempotent transfers, HMAC-signed webhook intake, and a transactional outbox worker (FOR UPDATE SKIP LOCKED, backoff, dead-letter)."
        ),
        bullet(
          "Money stored as integer minor units; journal lines must balance; transfers use Postgres xmin optimistic concurrency with retry, then 409 on conflict."
        ),

        job(
          "Distributed Workflow Engine  |  github.com/mgiwa78/distributed-workflow-engine",
          "2026  ·  Personal"
        ),
        bullet(
          "Go job engine with a fixed worker pool, channels for job/result handoff, per-job context cancellation, and SQLite persistence so unfinished work is reclaimed after a crash."
        ),

        job(
          "Event Ingestion  |  github.com/mgiwa78/event-ingestion",
          "2026  ·  Personal"
        ),
        bullet(
          "Rust Tokio/Axum service that accepts events over HTTP and TCP, applies backpressure with bounded queues, and appends NDJSON to sharded WAL files with Prometheus metrics and graceful drain on shutdown."
        ),

        section("Education"),
        new Paragraph({
          spacing: { before: 80, after: 40 },
          children: [
            new TextRun({
              text: "Bachelor of Software Engineering  |  Nile University of Nigeria, Abuja",
              bold: true,
              font: "Calibri",
              size: 20,
            }),
          ],
        }),
      ],
    },
  ],
});

const buffer = await Packer.toBuffer(doc);
const outputsDir = join(root, "Claude outputs");
mkdirSync(outputsDir, { recursive: true });
mkdirSync(join(root, "public"), { recursive: true });

const targets = [
  join(outputsDir, "Giwa-Muhammad-Resume-FullStack.docx"),
  join(outputsDir, "Giwa-Muhammad-Resume-Backend.docx"),
  join(outputsDir, "Giwa-Muhammad-Resume-Payments.docx"),
  join(outputsDir, "Giwa-Muhammad-Resume-Mobile.docx"),
  join(outputsDir, "Giwa-Muhammad-Resume-QA-Automation.docx"),
  join(outputsDir, "Giwa-Muhammad-Senior-Full-Stack-Engineer.docx"),
  join(root, "public", "Senior-Full-Stack-Engineer-Resume.docx"),
];

for (const target of targets) {
  writeFileSync(target, buffer);
  console.log("wrote", target);
}

const primaryDocx = join(outputsDir, "Giwa-Muhammad-Resume-FullStack.docx");
console.log("primary", primaryDocx);
