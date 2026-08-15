import { en } from "./dictionaries/en";
import { ja } from "./dictionaries/ja";
import type { Dictionary } from "@/types";

export * from "@/types";

/**
 * Supported locales. Add new ones here, provide a matching dictionary in
 * `dictionaries`, and register it below — components pick it up automatically.
 */
export const locales = ["en", "ja"] as const;
export type Locale = (typeof locales)[number];

/** Human-readable label for each locale, shown in the language switcher. */
export const localeLabels: Readonly<Record<Locale, string>> = {
  en: "EN",
  ja: "日本語",
};

export const defaultLocale: Locale = "en";

export const dictionaries: Readonly<Record<Locale, Dictionary>> = {
  en,
  ja,
};

/** Type guard to validate whether a given value is a supported locale */
export const isLocale = (value: unknown): value is Locale =>
  typeof value === "string" && (locales as readonly string[]).includes(value);

/** Returns the dictionary for a locale, falling back gracefully to default */
export const getDictionary = (locale?: Locale): Dictionary =>
  dictionaries[locale ?? defaultLocale] ?? dictionaries[defaultLocale];
