import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "@phosphor-icons/react/dist/ssr";
import SectionNav from "@/components/SectionNav";
import SocialLinks from "@/components/SocialLinks";
import RowLink from "@/components/RowLink";
import Tags from "@/components/Tags";
import { profile, experience, education } from "@/data/profile";
import { projects } from "@/data/projects";

function SectionHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-bg/80 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only">
      <h2 className="font-mono text-xs uppercase tracking-widest text-fg">{children}</h2>
    </div>
  );
}

const rowHover =
  "absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition-colors duration-200 motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-hover lg:group-hover:shadow-[inset_0_1px_0_0_var(--border)]";

const rowDim =
  "group relative grid pb-1 transition-opacity duration-200 motion-reduce:transition-none sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50";

export default function Home() {
  const featured = projects.filter((p) => p.featured);

  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-16 lg:py-0">
      <a
        href="#content"
        className="absolute left-0 top-0 block -translate-x-full rounded bg-fg px-4 py-3 text-sm font-medium text-bg focus-visible:translate-x-0"
      >
        Skip to content
      </a>

      <div className="lg:flex lg:justify-between lg:gap-4">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[46%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <h1 className="text-4xl font-semibold tracking-tight text-fg sm:text-5xl">
              <Link href="/">{profile.name}</Link>
            </h1>
            <p className="mt-3 text-lg font-medium tracking-tight text-fg sm:text-xl">{profile.title}</p>
            <p className="mt-4 max-w-sm leading-normal">{profile.tagline}</p>
            <SectionNav />
          </div>
          <div className="mt-8 lg:mt-0">
            <SocialLinks />
            <p className="mt-4 font-mono text-xs text-subtle">{profile.location}</p>
          </div>
        </header>

        <main id="content" className="pt-20 lg:w-[54%] lg:py-24">
          {/* About */}
          <section id="about" aria-label="About me" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <SectionHeading>About</SectionHeading>
            <div className="space-y-4">
              <p>
                I&apos;m a full-stack engineer working remotely from Nigeria. For the past five years I&apos;ve
                built SaaS products, marketplaces, and the payment systems underneath them, usually as the engineer
                responsible for the whole thing, from the database schema to the deploy pipeline.
              </p>
              <p>
                Right now I&apos;m Founder and CTO at{" "}
                <a className="prose-link" href="https://smartedu.ng" target="_blank" rel="noopener noreferrer">
                  SmartEdu
                </a>
                , a school-management platform built for schools across Africa, and a full-stack engineer at Nexlen
                Systems, a UK-based company. Before that I led engineering on{" "}
                <Link className="prose-link" href="/work/fairchild">
                  FairChild Institute&apos;s
                </Link>{" "}
                learning platform, was contract CTO for{" "}
                <Link className="prose-link" href="/work/tegy-inc">
                  Tegy
                </Link>
                , a San Francisco freight startup, and led backend architecture at Raffles Energies.
              </p>
              <p>
                Most of my work is TypeScript: Next.js and React on the front end, Node.js on the back, PostgreSQL and
                Redis underneath, and Go where it fits. I do my best work on problems that involve money or many
                tenants: escrow and split payments, billing, background jobs, and keeping one customer&apos;s data away
                from another&apos;s.
              </p>
            </div>
          </section>

          {/* Experience */}
          <section
            id="experience"
            aria-label="Work experience"
            className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          >
            <SectionHeading>Experience</SectionHeading>
            <ol className="group/list">
              {experience.map((role) => (
                <li key={`${role.company}-${role.dates}`} className="mb-12">
                  <div className={rowDim}>
                    <div className={rowHover} />
                    <p className="z-10 mb-2 mt-1 font-mono text-xs uppercase tracking-wide text-subtle sm:col-span-2">
                      {role.dates}
                    </p>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="leading-snug">
                        {role.href ? (
                          <RowLink href={role.href}>
                            {role.title} · {role.company}
                          </RowLink>
                        ) : (
                          <span className="font-medium text-fg">
                            {role.title} · {role.company}
                          </span>
                        )}
                      </h3>
                      {role.note && <p className="mt-0.5 text-sm text-subtle">{role.note}</p>}
                      <p className="mt-2 text-sm leading-normal">{role.description}</p>
                      <div className="mt-3">
                        <Tags items={role.stack} />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <p className="text-sm text-subtle">
              {education.degree}, {education.school}
            </p>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="group/link mt-6 inline-flex items-center font-medium text-fg hover:text-accent"
            >
              View full resume
              <ArrowUpRight
                size={14}
                weight="bold"
                aria-hidden
                className="ml-1 transition-transform duration-150 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5"
              />
            </a>
          </section>

          {/* Projects */}
          <section id="projects" aria-label="Selected projects" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
            <SectionHeading>Projects</SectionHeading>
            <ol className="group/list">
              {featured.map((project) => (
                <li key={project.slug} className="mb-12">
                  <div className={rowDim}>
                    <div className={rowHover} />
                    <p className="z-10 mb-2 mt-1 font-mono text-xs uppercase tracking-wide text-subtle sm:col-span-2">
                      {project.year}
                    </p>
                    <div className="z-10 sm:col-span-6">
                      <h3 className="leading-snug">
                        <RowLink href={`/work/${project.slug}`}>{project.title}</RowLink>
                      </h3>
                      <p className="mt-0.5 text-sm text-subtle">{project.role}</p>
                      <p className="mt-2 text-sm leading-normal">{project.description}</p>
                      {project.image && (
                        <Image
                          src={project.image}
                          alt={`${project.title} homepage`}
                          width={1440}
                          height={900}
                          sizes="(min-width: 1024px) 420px, 100vw"
                          className="mt-4 rounded-md border border-border"
                        />
                      )}
                      <div className="mt-3">
                        <Tags items={project.stack.slice(0, 6)} />
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              href="/work"
              className="group/link inline-flex items-center font-medium text-fg hover:text-accent"
            >
              View all {projects.length} projects
              <ArrowRight
                size={14}
                weight="bold"
                aria-hidden
                className="ml-1 transition-transform duration-150 group-hover/link:translate-x-1"
              />
            </Link>
          </section>

          <footer className="max-w-md pb-16 text-sm text-subtle sm:pb-0">
            Built with Next.js and Tailwind CSS, set in Geist, and deployed on Vercel. Reach me at{" "}
            <a className="prose-link" href={`mailto:${profile.email}`}>
              {profile.email}
            </a>
            .
          </footer>
        </main>
      </div>
    </div>
  );
}
