import { en } from "./dictionaries/en";

/**
 * Supported locales. Add new ones here, provide a matching dictionary in
 * `dictionaries`, and register it below — components pick it up automatically.
 */
export const locales = ["en"] as const; // "ja" to be added later
export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

/** Shape every locale's content must satisfy. */
export type Dictionary = {
  /** Display name shown in the hero and footer. */
  name: string;
  /** Tagline shown beneath the name. */
  title: string;
  /** Intro paragraph. */
  bio: string;
  /** Call-to-action line shown above the social links. */
  cta: string;
  /** SEO meta description (search results + social cards). */
  description: string;
};

const dictionaries: Record<Locale, Dictionary> = {
  en,
  // ja, // TODO: add Japanese translation
};

/** Returns the dictionary for a locale, falling back to the default. */
export function getDictionary(locale: Locale = defaultLocale): Dictionary {
  return dictionaries[locale] ?? dictionaries[defaultLocale];
}
