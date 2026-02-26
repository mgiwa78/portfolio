import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, projects } from "@/data/projects";
import ProjectPageContent from "./ProjectPageContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen bg-background">
      <header className="mt-20 border-black/[0.08] bg-surface/50 backdrop-blur-sm sticky top-0 z-10">
        <div className="container px-4 sm:px-6 py-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm font-medium text-text-secondary hover:text-accent-blue transition-colors duration-200"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7"></path>
            </svg>
            Projects
          </Link>
        </div>
      </header>
      <main className="container px-4 sm:px-6 py-10 md:py-16">
        <div className="max-w-3xl mx-auto">
          <ProjectPageContent project={project} />
        </div>
      </main>
    </div>
  );
}
