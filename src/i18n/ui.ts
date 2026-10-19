import type { Locale } from "./locale";

export const UI = {
  en: {
    skipToContent: "Skip to content",
    home: "Home",
    navAria: "Primary",
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      education: "Education and Languages",
      contacts: "Contacts",
    },
    email: "Email",
    resume: "Resume",
    switchLabel: "RU",
    switchTo: "Switch to Russian",
    about: "About Me",
    skills: "Skills",
    experience: "Experience",
    education: "Education and Languages",
    contacts: "Contacts",
    contactsIntro: "Feel free to get in touch through any of the links below.",
    close: "Close",
    footerRights: "Ilya Isaev. All rights reserved.",
    lastUpdated: "Last updated: August 29, 1997",
  },
  ru: {
    skipToContent: "К содержанию",
    home: "На главную",
    navAria: "Основная навигация",
    nav: {
      about: "Обо мне",
      skills: "Навыки",
      experience: "Опыт работы",
      education: "Образование и языки",
      contacts: "Контакты",
    },
    email: "Почта",
    resume: "Резюме",
    switchLabel: "EN",
    switchTo: "Переключить на английский",
    about: "Обо мне",
    skills: "Навыки",
    experience: "Опыт работы",
    education: "Образование и языки",
    contacts: "Контакты",
    contactsIntro: "Свяжитесь со мной любым удобным способом:",
    close: "Закрыть",
    footerRights: "Илья Исаев. Все права защищены.",
    lastUpdated: "Последнее обновление: 29 августа 1997",
  },
} as const satisfies Record<
  Locale,
  {
    readonly skipToContent: string;
    readonly home: string;
    readonly navAria: string;
    readonly nav: {
      readonly about: string;
      readonly skills: string;
      readonly experience: string;
      readonly education: string;
      readonly contacts: string;
    };
    readonly email: string;
    readonly resume: string;
    readonly switchLabel: string;
    readonly switchTo: string;
    readonly about: string;
    readonly skills: string;
    readonly experience: string;
    readonly education: string;
    readonly contacts: string;
    readonly contactsIntro: string;
    readonly close: string;
    readonly footerRights: string;
    readonly lastUpdated: string;
  }
>;
