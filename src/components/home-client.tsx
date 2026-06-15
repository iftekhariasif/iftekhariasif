"use client";

import { useEffect, useState } from "react";
import { Hero } from "@/components/sections/hero";
import { SiteFooter } from "@/components/site-footer";
import { LocaleSwitcher } from "@/components/locale-switcher";
import {
  defaultLocale,
  getDictionary,
  locales,
  type Locale,
} from "@/lib/i18n";

const STORAGE_KEY = "locale";

function isLocale(value: string | null): value is Locale {
  return value !== null && (locales as readonly string[]).includes(value);
}

export function HomeClient() {
  // Render the default locale on the server / first paint, then resolve the
  // visitor's preference after hydration (no SSR mismatch this way).
  const [locale, setLocale] = useState<Locale>(defaultLocale);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const browser = navigator.language.toLowerCase();
    const resolved = isLocale(saved)
      ? saved
      : locales.find((l) => browser.startsWith(l));
    // localStorage/navigator are only available after hydration, so this
    // intentionally syncs state in a mount effect (runs once, no SSR mismatch).
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (resolved) setLocale(resolved);
  }, []);

  // Keep the document language and tab title in sync with the active locale.
  useEffect(() => {
    document.documentElement.lang = locale;
    const t = getDictionary(locale);
    document.title = `${t.name} | ${t.title}`;
  }, [locale]);

  const handleChange = (next: Locale) => {
    setLocale(next);
    localStorage.setItem(STORAGE_KEY, next);
  };

  return (
    <div className="flex h-dvh flex-col overflow-hidden">
      <LocaleSwitcher locale={locale} onChange={handleChange} />
      <main className="flex min-h-0 flex-1">
        <Hero locale={locale} />
      </main>
      <SiteFooter locale={locale} />
    </div>
  );
}
