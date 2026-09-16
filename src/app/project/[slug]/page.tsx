import { redirect } from "next/navigation";
import { projects } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function LegacyProjectRedirect({ params }: PageProps) {
  const { slug } = await params;
  redirect(`/work/${slug}`);
}
