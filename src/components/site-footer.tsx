import { getDictionary, type Locale } from "@/lib/i18n";

export function SiteFooter({ locale }: { locale?: Locale }) {
  const t = getDictionary(locale);

  return (
    <footer className="pt-5 pb-[max(1.25rem,env(safe-area-inset-bottom))]">
      <div className="mx-auto max-w-5xl px-6 text-center text-[11px] uppercase tracking-[0.25em] indent-[0.25em] text-muted-foreground/70">
        {t.name} &copy; All Rights Reserved
      </div>
    </footer>
  );
}
