import type { Locale } from "../i18n/locale";

const CONTACT_LINKS = {
  email: "ilya.isaev.dev@gmail.com",
  github: {
    href: "https://github.com/IlyaIsaev",
    label: "GitHub",
  },
  linkedin: {
    href: "https://www.linkedin.com/in/ilya-isaev-18539729a",
    label: "LinkedIn",
  },
  telegram: {
    href: "https://t.me/iai2025",
    label: "Telegram",
  },
} as const;

type ProfileCopy = {
  readonly name: string;
  readonly title: string;
  readonly tagline: string;
  readonly summary: readonly string[];
};

const PROFILE_COPY = {
  en: {
    name: "Ilya Isaev",
    title: "Senior Frontend Developer",
    tagline: "8+ years of experience in React and TypeScript",
    summary: [
      "Senior Frontend Developer with 8+ years of experience in React and TypeScript. Built web applications for two of Russia's largest banks and the country's largest children's goods retailer. In my latest role, I owned the frontend of a SaaS platform for research labs end to end: built it from scratch and shipped it to production.",
      "Key competencies: frontend architecture, data-heavy and real-time interfaces, performance optimization, legacy system modernization, automated testing, AI-assisted development, mentoring.",
    ],
  },
  ru: {
    name: "Илья Исаев",
    title: "Senior Frontend-разработчик",
    tagline: "8+ лет опыта с React и TypeScript",
    summary: [
      "Senior Frontend-разработчик, 8+ лет опыта с React и TypeScript. Разрабатывал веб-приложения для Сбербанка, ВТБ и «Детского мира»; на последнем месте работы целиком отвечал за frontend платформы для научно-исследовательских лабораторий: создал его с нуля и вывел в production.",
      "Ключевые компетенции: frontend-архитектура, интерфейсы для больших объёмов данных и real-time, оптимизация производительности, модернизация легаси-систем, автоматизированное тестирование, внедрение AI-агентов в разработку, наставничество.",
    ],
  },
} as const satisfies Record<Locale, ProfileCopy>;

export const getProfile = (locale: Locale): ProfileCopy => PROFILE_COPY[locale];

type LinkContact = {
  readonly kind: "mail" | "external";
  readonly icon: string;
  readonly href: string;
  readonly text: string;
};

type DownloadContact = {
  readonly kind: "download";
  readonly icon: string;
  readonly href: string;
  readonly download: string;
};

type Contact = LinkContact | DownloadContact;

const SHARED_CONTACTS = [
  {
    kind: "mail",
    icon: "/icons/mailbox_world-0.png",
    href: `mailto:${CONTACT_LINKS.email}`,
    text: CONTACT_LINKS.email,
  },
  {
    kind: "external",
    icon: "/icons/briefcase-0.png",
    href: CONTACT_LINKS.linkedin.href,
    text: CONTACT_LINKS.linkedin.label,
  },
  {
    kind: "external",
    icon: "/icons/directory_closed-0.png",
    href: CONTACT_LINKS.github.href,
    text: CONTACT_LINKS.github.label,
  },
  {
    kind: "external",
    icon: "/icons/conn_dialup_alt.png",
    href: CONTACT_LINKS.telegram.href,
    text: CONTACT_LINKS.telegram.label,
  },
] as const satisfies readonly Contact[];

const RESUME_DOWNLOAD = {
  en: {
    kind: "download",
    icon: "/icons/notepad_file-0.png",
    href: "/Ilya-Isaev-resume.pdf",
    download: "Ilya Isaev — Senior Frontend Developer.pdf",
  },
  ru: {
    kind: "download",
    icon: "/icons/notepad_file-0.png",
    href: "/Ilia-Isaev-resume-ru.pdf",
    download: "Илья Исаев — Senior Frontend Developer.pdf",
  },
} as const satisfies Record<Locale, DownloadContact>;

export const getContacts = (locale: Locale): readonly Contact[] => [
  ...SHARED_CONTACTS,
  RESUME_DOWNLOAD[locale],
];
