"use client";

import Image from "next/image";
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
    <header className="sticky top-0 z-40 w-full px-4 pt-4 sm:px-8 sm:pt-6">
      <div className="mx-auto flex max-w-5xl items-center justify-between">
        {/* Left: Brand Favicon & Identity */}
        <a
          href="#home"
          className="group flex items-center gap-3 transition-opacity hover:opacity-85 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-lg"
          aria-label={siteConfig.fullName}
        >
          <div className="relative flex size-9 items-center justify-center overflow-hidden rounded-xl border border-border/80 bg-card shadow-xs transition-transform duration-200 group-hover:scale-105">
            <Image
              src="/icon.png"
              alt={siteConfig.fullName}
              width={36}
              height={36}
              className="size-full object-cover"
              priority
            />
          </div>
          <div className="hidden flex-col sm:flex">
            <span className="text-xs font-semibold tracking-wider text-foreground uppercase">
              {siteConfig.fullName}
            </span>
            <span className="text-[10px] tracking-wide text-muted-foreground">
              iftekhariasif.com
            </span>
          </div>
        </a>

        {/* Right: Controls (Language + Theme) */}
        <div className="flex items-center gap-2 sm:gap-3">
          <LocaleSwitcher locale={locale} onChange={onChangeLocale} />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
};
