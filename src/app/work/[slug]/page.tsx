import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getProjectBySlug, projects } from "@/data/projects";
import WorkPageContent from "./WorkPageContent";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} | Giwa Muhammad`,
    description: project.tagline,
  };
}

export default async function WorkDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <div className="min-h-screen" style={{ background: "var(--color-background)" }}>
      {/* Back nav */}
      <header
        className="sticky top-0 z-10 mt-16"
        style={{
          background: "rgba(10,10,12,0.9)",
          backdropFilter: "blur(16px)",
          borderBottom: "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="container mx-auto px-6 lg:px-10 py-4">
          <Link
            href="/work"
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
            Back to Work
          </Link>
        </div>
      </header>

      <main className="container mx-auto px-6 lg:px-10 py-14 md:py-20">
        <div className="max-w-3xl mx-auto">
          <WorkPageContent project={project} />
        </div>
      </main>
    </div>
  );
}
