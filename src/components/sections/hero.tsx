import { SocialLinks } from "@/components/social-links";
import { getDictionary, type Locale } from "@/lib/i18n";

export function Hero({ locale }: { locale?: Locale }) {
  const t = getDictionary(locale);

  return (
    <section
      id="home"
      className="flex w-full items-center justify-center px-6 py-16"
    >
      <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          {t.name}
        </h1>
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
          {t.title}
        </p>
        <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
          {t.bio}
        </p>
        <p className="mt-6 text-base font-medium leading-relaxed text-foreground sm:text-lg">
          {t.cta}
        </p>
        <SocialLinks className="mt-10" />
      </div>
    </section>
  );
}
