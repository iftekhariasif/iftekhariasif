"use client";

import { LocaleSwitcher } from "@/components/locale-switcher";
import { ThemeToggle } from "@/components/theme-toggle";
import { type Locale } from "@/lib/i18n";
import { siteConfig } from "@/lib/site-config";

interface HeaderProps {
  readonly locale: Locale;
  readonly onChangeLocale: (next: Locale) => void;
}

export const Header = ({ locale, onChangeLocale }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-40 w-full px-4 pt-3 sm:px-8 sm:pt-4">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        {/* Left: Brand Monogram / Identity */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
          aria-label={siteConfig.fullName}
        >
          <div className="flex size-8 sm:size-8.5 items-center justify-center rounded-xl bg-foreground text-background font-mono text-xs font-bold tracking-tighter shadow-sm transition-transform duration-200 group-hover:scale-105">
            IA
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="text-[11px] font-semibold tracking-wider text-foreground uppercase">
              {siteConfig.fullName}
            </span>
            <span className="text-[9px] tracking-wide text-muted-foreground">
              iftekhariasif.com
            </span>
          </div>
        </a>

        {/* Right: Controls (Language + Theme) */}
        <div className="flex items-center gap-2">
          <LocaleSwitcher locale={locale} onChange={onChangeLocale} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
