import type { Metadata } from "next";
import Link from "next/link";
import BackLink from "@/components/BackLink";
import { projects } from "@/data/projects";
import { profile } from "@/data/profile";

export const metadata: Metadata = {
  title: "Projects",
  description: "Every project on this site: SaaS platforms, marketplaces, an institutional LMS, MSP and field-ops products, and the infrastructure under them.",
};

export default function WorkArchive() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:py-24">
      <BackLink href="/">{profile.name}</BackLink>
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-fg sm:text-5xl">All projects</h1>
      <p className="mt-3 max-w-xl">
        Client contracts, my own products, and the platforms underneath them. Most were built solo, schema to deployment.
      </p>

      <table className="mt-12 w-full border-collapse text-left">
        <thead className="sticky top-0 z-10 border-b border-border bg-bg/80 px-6 py-5 backdrop-blur">
          <tr>
            <th className="py-4 pr-8 font-mono text-xs font-medium uppercase tracking-wide text-fg">Year</th>
            <th className="py-4 pr-8 font-mono text-xs font-medium uppercase tracking-wide text-fg">Project</th>
            <th className="hidden py-4 pr-8 font-mono text-xs font-medium uppercase tracking-wide text-fg lg:table-cell">
              Role
            </th>
            <th className="hidden py-4 pr-8 font-mono text-xs font-medium uppercase tracking-wide text-fg md:table-cell">
              Built with
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((p) => (
            <tr key={p.slug} className="border-b border-border last:border-none">
              <td className="whitespace-nowrap py-4 pr-6 align-top font-mono text-sm text-subtle">{p.year ?? "-"}</td>
              <td className="py-4 pr-4 align-top">
                <Link href={`/work/${p.slug}`} className="font-medium text-fg hover:text-accent">
                  {p.title}
                </Link>
                <p className="mt-0.5 text-sm">{p.summary}</p>
              </td>
              <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">{p.role}</td>
              <td className="hidden py-4 pr-4 align-top md:table-cell">
                <p className="font-mono text-xs leading-6 text-subtle">{p.stack.slice(0, 5).join(", ")}</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
