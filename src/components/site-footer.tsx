import { siteConfig } from "@/lib/site-config";

export function SiteFooter() {
  return (
    <footer className="pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto max-w-5xl px-6 text-center text-[11px] uppercase tracking-[0.25em] text-muted-foreground/70">
        &copy; {siteConfig.copyrightYear} {siteConfig.name}
      </div>
    </footer>
  );
}
