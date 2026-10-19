export const LOCALES = ["en", "ru"] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE = "en" as const satisfies Locale;

export const getLocale = (currentLocale: string | undefined): Locale =>
  currentLocale === "ru" ? "ru" : DEFAULT_LOCALE;
