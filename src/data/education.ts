import type { Locale } from "../i18n/locale";

type Education = {
  readonly field: string;
  readonly school: string;
  readonly note: string;
};

const EDUCATION = {
  en: {
    field: "Peoples' Friendship University of Russia (RUDN), Moscow",
    school: "Faculty of Physics, Mathematics and Natural Sciences",
    note: "Applied Mathematics (incomplete), 2010",
  },
  ru: {
    field: "Неоконченное высшее",
    school: "Российский университет дружбы народов, Москва (2010)",
    note: "Факультет физико-математических и естественных наук, Математика. Прикладная математика",
  },
} as const satisfies Record<Locale, Education>;

export const getEducation = (locale: Locale): Education => EDUCATION[locale];
