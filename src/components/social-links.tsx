import { socialLinks } from "@/lib/site-config";
import { cn } from "@/lib/utils";

interface SocialLinksProps {
  readonly className?: string;
}

export const SocialLinks = ({ className }: SocialLinksProps) => {
  return (
    <ul className={cn("flex flex-wrap items-center justify-center gap-2.5", className)}>
      {socialLinks.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            title={label}
            className="group relative flex size-10.5 items-center justify-center rounded-xl border border-border/70 bg-card/60 text-muted-foreground backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-foreground/40 hover:bg-accent/80 hover:text-foreground hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:translate-y-0 active:scale-95"
          >
            <Icon className="size-4.5 transition-transform duration-200 group-hover:scale-110" />
            <span className="sr-only">{label}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};
