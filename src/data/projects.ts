export interface Project {
  id: number;
  slug: string;
  title: string;
  tagline: string;
  story: string;
  stack: string[];
  features: string[];
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "skorlar",
    title: "Skorlar™",
    tagline:
      "Academic supervision was fragmented, slow, and paper-driven. I built Skorlar™, an end-to-end collaboration platform where supervisors and students could manage research seamlessly.",
    story:
      "Academic supervision was fragmented, slow, and paper-driven. I built Skorlar™, an end-to-end collaboration platform where supervisors and students could manage research seamlessly.\n\nTech: Next.js, Node.js, MongoDB, JWT Auth, Docker, CI/CD\n\nImpact: Streamlined document sharing, progress tracking, and communication for dozens of academic projects reducing delays and increasing completion rates.",
    stack: ["Next.js", "Node.js", "PostgreSQL", "JWT Auth", "Docker", "CI/CD", "Stripe"],
    features: [
      "Real-time communication between supervisors and students",
      "Progress tracking with milestone management",
      "Document management with version control",
      "Secure JWT-based authentication and authorization",
      "Role-based access control (RBAC)",
      "Automated email notifications",
      "Deployed with Docker containers and CI/CD pipelines",
    ],
  },
  {
    id: 2,
    slug: "stackmsp",
    title: "StackMSP",
    tagline:
      "Microservice-based onboarding/offboarding SaaS for MSPs. Node.js and Go, RabbitMQ, Redis, PostgreSQL, Docker — scalable multi-tenant with RBAC and JWT.",
    story:
      "StackMSP is a microservice-based SaaS platform designed to automate onboarding and offboarding workflows for Managed Service Providers (MSPs).\n\nThe system integrates with RMM, PSA, IAM, HR, and endpoint management tools to orchestrate account provisioning, access control, and task automation across multiple tenants.\n\nBuilt using a distributed architecture, StackMSP leverages Node.js and Go for backend services, RabbitMQ for event-driven inter-service communication, Redis for live state management and caching, PostgreSQL for service-isolated databases, Docker for containerization, and is designed for Kubernetes-based scaling.\n\nEach microservice operates independently with its own database instance, ensuring service isolation, scalability, and resilience. The platform implements tenant-scoped role-based access control (RBAC) and secure JWT authentication.\n\nStackMSP is architected for horizontal scaling, reliability, and clean service boundaries — built with production-grade SaaS principles in mind.",
    stack: [
      "Node.js",
      "Go",
      "RabbitMQ",
      "Redis",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
    ],
    features: [
      "Microservice-based architecture with service-isolated databases",
      "Integration with RMM, PSA, IAM, HR, and endpoint management tools",
      "Event-driven inter-service communication via RabbitMQ",
      "Redis for live state management and caching",
      "Automated onboarding and offboarding workflows across tenants",
      "Tenant-scoped RBAC and secure JWT authentication",
      "Docker containerization, designed for Kubernetes scaling",
      "Horizontal scaling with clear service boundaries",
    ],
  },
  {
    id: 3,
    slug: "tegy-inc",
    title: "Tegy Inc.",
    tagline:
      "Subscription freight load board connecting shippers, brokers, and carriers — real-time load matching, transparent pricing, and streamlined booking. Built the full platform.",
    story:
      "Tegy Inc. is an innovative freight logistics technology company (San Francisco, CA) transforming how freight brokers, shippers, and carriers connect and operate.\n\nI built the core platform: a subscription-based freight broker load board where brokers post available loads and carriers/dispatchers discover, bid on, and manage loads. The flow includes real-time load discovery, bidding, in-app conversation between broker and dispatcher, load acceptance, route tracking from pickup through delivery, and a user-friendly dashboard (My loads, Calendar, Notifications, Profile, Settings).\n\nThe platform emphasizes simplicity, real-time matching, and reduced friction — giving brokers direct load posting without approval delays and carriers transparent access to freight and pricing. Tegy aims to improve supply chain efficiency by connecting shippers, brokers, and carriers in one intuitive digital environment. Founded in 2025, the company focuses on empowering small carriers and brokers with technology that simplifies freight booking and optimizes operations.",
    stack: [
      "React",
      "Node.js",
      "Express",
      "MySQL",
      "JWT Auth",
      "Real-time",
      "REST API",
      "Subscription platform",
      "Stripe",
    ],
    features: [
      "Real-time load board — brokers post loads, carriers/dispatchers discover and bid",
      "In-app conversation flow between broker and dispatcher",
      "Accept load and route tracking from pickup through delivery",
      "My loads dashboard, Calendar, Notifications with badge counts",
      "Transparent freight pricing and streamlined booking",
      "Subscription-based access; user-friendly dashboard and profiles",
      "Designed to reduce friction and optimize supply chain operations",
    ],
  },
];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
