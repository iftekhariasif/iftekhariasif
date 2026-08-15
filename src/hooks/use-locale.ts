"use client";

import { useCallback, useEffect, useSyncExternalStore } from "react";
import {
  defaultLocale,
  getDictionary,
  isLocale,
  locales,
  type Locale,
} from "@/lib/i18n";
import { safeStorage } from "@/lib/utils";
import type { Dictionary } from "@/types";

const STORAGE_KEY = "locale";

const subscribeLocale = (callback: () => void): (() => void) => {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
};

const getLocaleSnapshot = (): Locale => {
  const saved = safeStorage.get<string | null>(STORAGE_KEY, null);
  if (isLocale(saved)) return saved;

  const browser = navigator.language?.toLowerCase() ?? "";
  const matched = locales.find((l) => browser.startsWith(l));
  return matched ?? defaultLocale;
};

const getLocaleServerSnapshot = (): Locale => defaultLocale;

export const useLocale = () => {
  const locale = useSyncExternalStore(
    subscribeLocale,
    getLocaleSnapshot,
    getLocaleServerSnapshot
  );

  const dictionary: Dictionary = getDictionary(locale);

  useEffect(() => {
    document.documentElement.lang = locale;
    document.title = `${dictionary.name} | ${dictionary.title}`;
  }, [locale, dictionary]);

  const setLocale = useCallback((next: Locale) => {
    safeStorage.set(STORAGE_KEY, next);
  }, []);

  return {
    locale,
    dictionary,
    setLocale,
  };
};
