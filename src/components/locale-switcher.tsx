"use client";

import { locales, localeLabels, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

interface LocaleSwitcherProps {
  readonly locale: Locale;
  readonly onChange: (next: Locale) => void;
}

export const LocaleSwitcher = ({ locale, onChange }: LocaleSwitcherProps) => {
  return (
    <div
      role="group"
      aria-label="Language selection"
      className="inline-flex items-center rounded-full border border-border/60 bg-background/60 p-1 shadow-xs backdrop-blur-md transition-colors"
    >
      {locales.map((l) => {
        const isActive = l === locale;
        return (
          <button
            key={l}
            type="button"
            lang={l}
            aria-pressed={isActive}
            onClick={() => onChange(l)}
            className={cn(
              "relative rounded-full px-3 py-1 text-xs font-semibold tracking-wide transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
              isActive
                ? "bg-foreground text-background shadow-xs"
                : "text-muted-foreground hover:text-foreground"
            )}
          >
            {localeLabels[l]}
          </button>
        );
      })}
    </div>
  );
};
