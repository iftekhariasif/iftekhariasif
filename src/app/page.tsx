import { SiteFooter } from "@/components/site-footer";
import { Hero } from "@/components/sections/hero";
import { defaultLocale } from "@/lib/i18n";

export default function Home() {
  const locale = defaultLocale;

  return (
    <div className="flex min-h-dvh flex-col">
      <main className="flex flex-1">
        <Hero locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
