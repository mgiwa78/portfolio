import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import BackLink from "@/components/BackLink";
import Tags from "@/components/Tags";
import { getProject, projects } from "@/data/projects";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return { title: project.title, description: project.summary };
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="font-mono text-xs uppercase tracking-widest text-fg">{title}</h2>
      <div className="mt-3">{children}</div>
    </section>
  );
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const index = projects.findIndex((p) => p.slug === slug);
  const next = projects[(index + 1) % projects.length];

  const facts: { label: string; value: React.ReactNode }[] = [
    { label: "Role", value: project.role },
    ...(project.year ? [{ label: "Year", value: project.year }] : []),
    ...(project.links?.length
      ? [
          {
            label: "Links",
            value: (
              <span className="flex flex-col gap-1">
                {project.links.map((l) => (
                  <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer" className="prose-link w-fit">
                    {l.label}
                  </a>
                ))}
              </span>
            ),
          },
        ]
      : []),
  ];

  return (
    <div className="mx-auto min-h-screen max-w-3xl px-6 py-12 md:px-12 md:py-20 lg:py-24">
      <BackLink href="/work">All projects</BackLink>

      <article>
        <h1 className="mt-6 text-4xl font-semibold tracking-tight text-fg sm:text-5xl">{project.title}</h1>
        <p className="mt-4 text-lg leading-relaxed">{project.description}</p>

        <dl className="mt-8 grid grid-cols-1 gap-x-8 gap-y-4 border-y border-border py-6 text-sm sm:grid-cols-[7rem_1fr]">
          {facts.map((f) => (
            <div key={f.label} className="contents">
              <dt className="font-mono text-xs uppercase tracking-wide text-subtle sm:pt-0.5">{f.label}</dt>
              <dd className="text-fg">{f.value}</dd>
            </div>
          ))}
          <dt className="font-mono text-xs uppercase tracking-wide text-subtle sm:pt-1">Stack</dt>
          <dd>
            <Tags items={project.stack} />
          </dd>
        </dl>

        {project.image && (
          <Image
            src={project.image}
            alt={`${project.title} homepage`}
            width={1440}
            height={900}
            sizes="(min-width: 768px) 672px, 100vw"
            className="mt-10 rounded-md border border-border"
            priority
          />
        )}

        <div className="max-w-[65ch]">
          <Section title="Context">
            <p>{project.context}</p>
          </Section>

          <Section title="What I built">
            <p>{project.built}</p>
          </Section>

          <Section title="Details">
            <ul className="space-y-2">
              {project.details.map((d) => (
                <li key={d} className="flex gap-3">
                  <span aria-hidden className="mt-[0.7em] h-px w-3 shrink-0 bg-subtle" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </Section>

          <Section title="Status">
            <p>{project.status}</p>
          </Section>
        </div>
      </article>

      <nav aria-label="More projects" className="mt-16 flex items-center justify-between border-t border-border pt-6 text-sm">
        <Link href="/" className="text-subtle hover:text-fg">
          Home
        </Link>
        <Link href={`/work/${next.slug}`} className="group/link text-right">
          <span className="block font-mono text-xs uppercase tracking-wide text-subtle">Next project</span>
          <span className="font-medium text-fg group-hover/link:text-accent">{next.title}</span>
        </Link>
      </nav>
    </div>
  );
}
