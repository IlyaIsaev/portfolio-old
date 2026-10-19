import type { Locale } from "../i18n/locale";

type SpokenLanguage = {
  readonly name: string;
  readonly level: string;
};

const LANGUAGES = {
  en: [
    { name: "Russian", level: "native" },
    { name: "English", level: "B2 (upper-intermediate)" },
  ],
  ru: [
    { name: "Русский", level: "Родной" },
    { name: "Английский", level: "B2 — Средне-продвинутый" },
  ],
} as const satisfies Record<Locale, readonly SpokenLanguage[]>;

export const getLanguages = (locale: Locale): readonly SpokenLanguage[] =>
  LANGUAGES[locale];
