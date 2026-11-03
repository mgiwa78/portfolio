import { GithubLogo, LinkedinLogo, EnvelopeSimple, FileText } from "@phosphor-icons/react/dist/ssr";
import { profile } from "@/data/profile";

const links = [
  { label: "GitHub", href: profile.github, Icon: GithubLogo, external: true },
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedinLogo, external: true },
  { label: "Email", href: `mailto:${profile.email}`, Icon: EnvelopeSimple, external: false },
  { label: "Resume (PDF)", href: profile.resume, Icon: FileText, external: true },
];

export default function SocialLinks() {
  return (
    <ul className="flex items-center gap-5" aria-label="Links">
      {links.map(({ label, href, Icon, external }) => (
        <li key={label}>
          <a
            href={href}
            aria-label={label}
            title={label}
            className="block text-subtle transition-colors duration-150 hover:text-accent"
            {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
          >
            <Icon size={22} weight="regular" />
          </a>
        </li>
      ))}
    </ul>
  );
}
