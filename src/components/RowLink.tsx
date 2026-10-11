import Link from "next/link";
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr";

/**
 * Title link for a list row. The absolute span stretches the hit area over
 * the whole row so the entire block is clickable, not just the title text.
 */
export default function RowLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http");
  const className =
    "group/link inline-flex items-baseline font-medium leading-tight text-fg hover:text-accent focus-visible:text-accent";
  const inner = (
    <>
      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded-md lg:-inset-x-6 lg:block" />
      <span>{children}</span>
      <ArrowUpRight
        size={14}
        weight="bold"
        aria-hidden
        className="ml-1 inline-block shrink-0 translate-y-px transition-transform duration-150 group-hover/link:-translate-y-0.5 group-hover/link:translate-x-0.5 motion-reduce:transition-none"
      />
    </>
  );
  return external ? (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={className}>
      {inner}
    </Link>
  );
}
