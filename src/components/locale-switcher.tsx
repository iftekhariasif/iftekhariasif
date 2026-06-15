"use client";

import { locales, localeLabels, type Locale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

export function LocaleSwitcher({
  locale,
  onChange,
}: {
  locale: Locale;
  onChange: (next: Locale) => void;
}) {
  return (
    <div className="absolute right-5 top-5 z-10 flex items-center gap-3 text-xs font-medium tracking-wide">
      {locales.map((l, i) => (
        <div key={l} className="flex items-center gap-3">
          {i > 0 && <span className="text-muted-foreground/40">/</span>}
          <button
            type="button"
            lang={l}
            aria-pressed={l === locale}
            onClick={() => onChange(l)}
            className={cn(
              "transition-colors hover:text-foreground",
              l === locale ? "text-foreground" : "text-muted-foreground/70",
            )}
          >
            {localeLabels[l]}
          </button>
        </div>
      ))}
    </div>
  );
}
