import Link from "next/link";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";

export default function BackLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="group/link inline-flex items-center font-medium leading-tight text-accent"
    >
      <ArrowLeft
        size={14}
        weight="bold"
        aria-hidden
        className="mr-1 transition-transform duration-150 group-hover/link:-translate-x-1"
      />
      {children}
    </Link>
  );
}
