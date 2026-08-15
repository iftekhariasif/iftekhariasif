import { getDictionary, type Locale } from "@/lib/i18n";
import { MapPinIcon } from "@/components/icons";

interface SiteFooterProps {
  readonly locale?: Locale;
}

export const SiteFooter = ({ locale }: SiteFooterProps) => {
  const t = getDictionary(locale);
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-auto w-full py-6 pb-[max(1.5rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 text-center text-xs text-muted-foreground/80 sm:flex-row">
        {/* Left: Uppercase Copyright */}
        <div className="text-[11px] font-semibold tracking-wider uppercase">
          {t.name} &copy; {currentYear} ALL RIGHTS RESERVED
        </div>

        {/* Right: Uppercase Location with MapPin Icon */}
        <div className="flex items-center gap-1.5 text-[11px] font-semibold tracking-wider uppercase text-muted-foreground/70">
          <MapPinIcon className="size-3.5" />
          <span>{t.location}</span>
        </div>
      </div>
    </footer>
  );
};
