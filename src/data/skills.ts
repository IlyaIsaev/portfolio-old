import type { Locale } from "../i18n/locale";

type SkillTextPart = {
  readonly text: string;
  readonly isBold: boolean;
};

type Skill = {
  readonly label: string;
  readonly value: string;
  readonly icon: string;
};

const EMPHASIZED_SKILL_NAMES = [
  "React",
  "TypeScript",
  "Feature-Sliced Design",
  "Redux Toolkit",
  "TanStack Query",
  "TanStack Router",
  "TanStack Virtual",
  "React Query",
  "WebSockets",
  "React Router",
  "React Hook Form",
  "Zod",
  "shadcn/ui",
  "Tailwind CSS",
  "Playwright",
  "Vitest",
  "AG Grid",
  "Monaco Editor",
  "Keycloak",
  "Vite",
  "Claude Code",
  "Cursor",
  "MobX",
  "Effector",
] as const;

const escapeRegExp = (value: string) => value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

const EMPHASIZED_SKILL_PATTERN_SOURCE = [...EMPHASIZED_SKILL_NAMES]
  .sort((left, right) => right.length - left.length)
  .map((name) => {
    if (name === "React") {
      return `\\b${escapeRegExp(name)}\\b(?! Testing Library| Data Grid)`;
    }
    if (name === "TypeScript") {
      return `(?<!-)\\b${escapeRegExp(name)}\\b`;
    }
    if (name === "Feature-Sliced Design") {
      return `\\b${escapeRegExp(name)}\\b(?: \\(FSD\\))?`;
    }
    return `\\b${escapeRegExp(name)}\\b`;
  })
  .join("|");

export const splitEmphasizedSkillText = (value: string): readonly SkillTextPart[] => {
  const pattern = new RegExp(EMPHASIZED_SKILL_PATTERN_SOURCE, "gi");
  const parts: SkillTextPart[] = [];
  let lastIndex = 0;

  for (const match of value.matchAll(pattern)) {
    const index = match.index;
    if (index > lastIndex) {
      parts.push({ text: value.slice(lastIndex, index), isBold: false });
    }
    parts.push({ text: match[0], isBold: true });
    lastIndex = index + match[0].length;
  }

  if (lastIndex < value.length) {
    parts.push({ text: value.slice(lastIndex), isBold: false });
  }

  return parts.length > 0 ? parts : [{ text: value, isBold: false }];
};

const SKILL_ROWS = {
  en: [
    {
      label: "Core stack",
      value:
        "React, TypeScript, JavaScript, Feature-Sliced Design (FSD), React Router, TanStack Router",
      icon: "/icons/computer_explorer-2.png",
    },
    {
      label: "State and data",
      value:
        "Effector, TanStack Query (React Query), Redux Toolkit (RTK Query), Redux (Thunk, Saga), MobX",
      icon: "/icons/file_gears-0.png",
    },
    {
      label: "Forms and API",
      value:
        "React Hook Form, Formik, Zod, OpenAPI (openapi-typescript, Kubb), WebSockets",
      icon: "/icons/network_normal_two_pcs-2.png",
    },
    {
      label: "Tables and visualization",
      value:
        "AG Grid, React Data Grid, TanStack Virtual, Canvas API, Recharts, Monaco Editor",
      icon: "/icons/chart1-3.png",
    },
    {
      label: "UI and styling",
      value:
        "MUI, Ant Design, Mantine, shadcn/ui, Tailwind CSS, Styled Components, SASS, Storybook, Figma",
      icon: "/icons/paint_old-0.png",
    },
    {
      label: "AI",
      value: "Claude Code, Cursor, agent rules and context tailored to the project architecture",
      icon: "/icons/computer_user_pencil-0.png",
    },
    {
      label: "Testing",
      value: "Playwright, Vitest, Cypress, Jest, React Testing Library",
      icon: "/icons/computer_search-0.png",
    },
    {
      label: "Backend, build, and DevOps",
      value: "Node.js, Koa.js (BFF), Webpack, Docker, GitLab CI/CD, Sentry",
      icon: "/icons/hard_disk_drive_tools-0.png",
    },
  ],
  ru: [
    {
      label: "Основной стек",
      value:
        "React, TypeScript, JavaScript, Feature-Sliced Design (FSD), React Router, TanStack Router",
      icon: "/icons/computer_explorer-2.png",
    },
    {
      label: "Состояние и данные",
      value:
        "Effector, TanStack Query (React Query), Redux Toolkit (RTK Query), Redux (Thunk, Saga), MobX",
      icon: "/icons/file_gears-0.png",
    },
    {
      label: "Формы и API",
      value:
        "React Hook Form, Formik, Zod, OpenAPI (openapi-typescript, Kubb), WebSockets",
      icon: "/icons/network_normal_two_pcs-2.png",
    },
    {
      label: "Таблицы и визуализация",
      value:
        "AG Grid, React Data Grid, TanStack Virtual, Canvas API, Recharts, Monaco Editor",
      icon: "/icons/chart1-3.png",
    },
    {
      label: "UI и стилизация",
      value:
        "MUI, Ant Design, Mantine, shadcn/ui, Tailwind CSS, Styled Components, SASS, Storybook, Figma",
      icon: "/icons/paint_old-0.png",
    },
    {
      label: "AI",
      value: "Claude Code, Cursor, правила и контекст агентов под архитектуру проекта",
      icon: "/icons/computer_user_pencil-0.png",
    },
    {
      label: "Тестирование",
      value: "Playwright, Vitest, Cypress, Jest, React Testing Library",
      icon: "/icons/computer_search-0.png",
    },
    {
      label: "Backend, сборка и DevOps",
      value: "Node.js, Koa.js (BFF), Webpack, Docker, GitLab CI/CD, Sentry",
      icon: "/icons/hard_disk_drive_tools-0.png",
    },
  ],
} as const satisfies Record<Locale, readonly Skill[]>;

export const getSkills = (locale: Locale): readonly Skill[] => SKILL_ROWS[locale];
