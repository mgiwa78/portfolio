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
    <div
      className="min-h-screen"
      style={{ background: "var(--color-background)" }}
    >
      {/* Back nav */}
      <header
        className="sticky top-0 z-10 mt-20"
        style={{
          background: "rgba(7,8,12,0.92)",
          backdropFilter: "blur(20px)",
          borderBottom: "1px solid rgba(201,169,110,0.1)",
        }}
      >
        <div className="container mx-auto px-6 lg:px-10 py-4">
          <Link
            href="/#projects"
            className="project-back-link inline-flex items-center gap-2 text-xs transition-colors duration-200"
          >
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M15 19l-7-7 7-7" />
            </svg>
            Back to Projects
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 lg:px-10 py-14 md:py-20">
        <div className="max-w-3xl mx-auto">
          <ProjectPageContent project={project} />
        </div>
      </main>
    </div>
  );
}
