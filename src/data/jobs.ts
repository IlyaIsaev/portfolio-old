import type { Locale } from "../i18n/locale";

type Job = {
  readonly id: string;
  readonly cardTitle: string;
  readonly role: string;
  readonly period: string;
  readonly duration: string;
  readonly employer: string;
  readonly href: string;
  readonly label: string;
  readonly logo: string;
  readonly summary: readonly string[];
  readonly points: readonly string[];
};

const JOBS = {
  en: [
    {
      id: "balthazar",
      cardTitle: "Balthazar Labs",
      role: "Senior Frontend Developer",
      period: "April 2024 – June 2026",
      duration: "2 years 3 months",
      employer:
        "Balthazar Labs · Amsterdam-based deep tech SaaS startup · Remote, contract",
      href: "https://www.balthazar.app/",
      label: "balthazar.app",
      logo: "/icons/msagent-4.png",
      summary: [
        "SaaS platform for research labs in deep tech industries (semiconductors, photonics, quantum technologies, etc.): tracking of experiments, prototypes and results, real-time dashboards, Python scripting.",
        "Stack: React, TypeScript, Effector, Feature-Sliced Design, TanStack Query, TanStack Virtual, TanStack Router, React Hook Form, Zod, Kubb, AG Grid, WebSockets, Monaco Editor, Keycloak, Playwright, Vitest",
      ],
      points: [
        "Designed an architecture based on Feature-Sliced Design and developed the platform frontend from scratch through to production. Owned the frontend end to end: made technical decisions, planned and estimated work, and aligned API contracts with the backend team.",
        "Built server data handling on TanStack Query (caching, optimistic updates) and client business logic on Effector. Made the OpenAPI specification the single source of truth for the backend contract: requests are typed via openapi-typescript and openapi-react-query, and Kubb generates TypeScript types, Zod schemas for validating server responses and React Hook Form forms, and test data with Faker.",
        "Developed AG Grid interfaces for experiment management and results analysis, and implemented real-time updates of data, threaded comments and charts over WebSockets. Rendered data-heavy charts with the Canvas API to avoid the DOM overhead of SVG.",
        "Embedded a Python code editor built on Monaco Editor, with execution of user scripts and log streaming over WebSockets. Implemented a custom file tree for the connected Git repository: lazy folder loading, virtualization with TanStack Virtual for large repositories, and file and folder operations.",
        "Ensured responsiveness on low-end devices and slow connections: built all data feeds, including high-volume logs, on TanStack Virtual with server-side pagination; route-based code splitting and lazy loading of heavy modules (React.lazy, Suspense) reduced the JavaScript loaded at startup.",
        "Set up automated testing: Playwright for e2e, Vitest for unit tests, and Docker for identical environments locally and in CI. Set up production error monitoring with Sentry.",
        "Formalized architectural rules for AI agents (FSD, Effector, TypeScript) and introduced AI-agent workflows for routine tasks: developing new features within the FSD architecture, refactoring, and writing tests.",
      ],
    },
    {
      id: "detsky-mir",
      cardTitle: "Detsky Mir",
      role: "Senior Frontend Developer",
      period: "October 2020 – March 2024",
      duration: "3 years 6 months",
      employer: "Detsky Mir · Russia's largest children's goods retailer · Moscow",
      href: "https://www.detmir.ru/",
      label: "detmir.ru",
      logo: "/logos/detmir-cubes.svg",
      summary: [
        "Supplier portal of the Detsky Mir marketplace: management of products, supplies and settlements, electronic document workflow with e-signatures.",
        "Stack: TypeScript, React, Redux Toolkit, RTK Query, React Router, MUI, Styled Components, Storybook, Koa.js, Cypress, Jest, React Testing Library, Webpack, GitLab CI/CD",
      ],
      points: [
        "Developed a React and Redux Toolkit SPA in a team of 10 frontend developers; helped new developers onboard onto the project.",
        "Built portal sections: creating and editing product cards with variants and sizes, managing prices, supplies and stock, and analytics reports for suppliers.",
        "Owned the migration of the state layer from Redux and Redux Thunk to Redux Toolkit and RTK Query, which eliminated reducer boilerplate and manual data-fetching logic.",
        "Developed the internal component library based on MUI with a Storybook catalog: built complex table and form components and customized the theme to the design system, so new portal sections could be assembled from ready-made blocks.",
        "Developed a BFF on Koa.js that aggregated data from several backend services and proxied authentication, reducing the number of client requests and simplifying client logic.",
        "Covered key scenarios with Cypress e2e tests and components with Jest and React Testing Library unit tests; set up GitLab CI/CD and refactored the Webpack configuration to optimize the build.",
      ],
    },
    {
      id: "epam",
      cardTitle: "EPAM Systems",
      role: "Frontend Developer",
      period: "December 2017 – September 2020",
      duration: "2 years 10 months",
      employer: "EPAM Systems · global IT services company",
      href: "https://www.epam.com/",
      label: "epam.com",
      logo: "/logos/epam.png",
      summary: [
        "Outsourced development of internal systems for Sberbank and VTB used to manage banking processes.",
        "Stack: JavaScript, TypeScript, React, Redux (Thunk, Saga), MobX, Formik, React Data Grid, Recharts, Jest, Enzyme, Ant Design, SASS",
      ],
      points: [
        "Worked on three internal portals: built one from scratch with React, MobX and TypeScript (team of 5 frontend developers), migrated a legacy app from scalajs-react to React and Redux (2 developers), and evolved a large VTB portal on React and Redux (20 developers).",
        "Built a dynamic form engine that rendered forms from a backend JSON schema: field structure, validation and field dependencies were defined on the server, so forms could change without involving frontend developers.",
        "Built data-heavy interfaces: React Data Grid tables with virtual scrolling, lazy loading, compound filters, and Excel/CSV import and export; operational analytics with Recharts.",
        "Implemented multi-step approval workflows and role-based access control in the UI: availability of sections, actions and fields depended on user permissions.",
        "Mentored junior developers: conducted code reviews and helped them onboard onto the project.",
      ],
    },
  ],
  ru: [
    {
      id: "balthazar",
      cardTitle: "Balthazar Labs",
      role: "Senior Frontend Developer",
      period: "Апрель 2024 – Июнь 2026",
      duration: "2 года 3 месяца",
      employer: "Balthazar Labs · Удалённо, по контракту",
      href: "https://www.balthazar.app/",
      label: "balthazar.app",
      logo: "/icons/msagent-4.png",
      summary: [
        "SaaS-платформа для научно-исследовательских лабораторий в наукоёмких отраслях (полупроводники, фотоника, квантовые технологии и т. п.): трекинг экспериментов, прототипов и результатов, дашборды в реальном времени, Python-сценарии.",
        "Стек: React, TypeScript, Effector, Feature-Sliced Design, TanStack Query, TanStack Virtual, TanStack Router, React Hook Form, Zod, Kubb, AG Grid, WebSockets, Monaco Editor, Keycloak, Playwright, Vitest",
      ],
      points: [
        "Спроектировал архитектуру на основе Feature-Sliced Design и разработал frontend-часть платформы с нуля до вывода в production. Полностью отвечал за frontend: принимал технические решения, планировал и оценивал работу, согласовывал API-контракты с backend-командой.",
        "Построил работу с серверными данными на TanStack Query (кэширование, оптимистичные обновления), а клиентскую бизнес-логику на Effector. OpenAPI-спецификацию сделал единым источником правды для контракта с backend: запросы типизированы через openapi-typescript и openapi-react-query, а Kubb генерирует TypeScript-типы, Zod-схемы для валидации ответов сервера и форм на React Hook Form, а также тестовые данные на Faker.",
        "Разработал на AG Grid интерфейсы управления экспериментами и анализа результатов и реализовал обновление данных, комментариев с ветками ответов и графиков в реальном времени через WebSockets. Графики с большим объёмом данных отрисовал на Canvas API, чтобы избежать нагрузки на DOM, которую создаёт SVG.",
        "Встроил в интерфейс редактор Python-кода на Monaco Editor с запуском пользовательских скриптов и потоковым выводом логов через WebSockets. Реализовал кастомное дерево файлов для подключённого Git-репозитория: ленивая подгрузка папок, виртуализация на TanStack Virtual для больших репозиториев, операции с файлами и папками.",
        "Обеспечил отзывчивость на слабых устройствах и при медленном соединении: все ленты данных, включая логи большого объёма, построил на TanStack Virtual и серверной пагинации; code splitting по маршрутам и ленивая загрузка тяжёлых модулей (React.lazy, Suspense) сократили объём JavaScript при запуске.",
        "Выстроил автоматизированное тестирование: Playwright для e2e, Vitest для unit, Docker для одинакового окружения локально и в CI. Настроил мониторинг ошибок в production через Sentry.",
        "Формализовал архитектурные правила для AI-агентов (FSD, Effector, TypeScript) и внедрил работу с AI-агентами для типовых задач: разработка нового функционала в рамках архитектуры FSD, рефакторинг, написание тестов.",
      ],
    },
    {
      id: "detsky-mir",
      cardTitle: "«Детский мир»",
      role: "Senior Frontend Developer",
      period: "Октябрь 2020 – Март 2024",
      duration: "3 года 6 месяцев",
      employer: "«Детский мир»",
      href: "https://detmir.market",
      label: "detmir.market",
      logo: "/logos/detmir-cubes.svg",
      summary: [
        "Личный кабинет поставщика маркетплейса «Детского мира»: управление товарами, поставками и взаиморасчётами, электронный документооборот с подписанием документов.",
        "Стек: TypeScript, React, Redux Toolkit, RTK Query, React Router, MUI, Styled Components, Storybook, Koa.js, Cypress, Jest, React Testing Library, Webpack, GitLab CI/CD",
      ],
      points: [
        "В команде из 10 frontend-разработчиков развивал SPA на React и Redux Toolkit; помогал новым разработчикам адаптироваться в проекте.",
        "Разрабатывал разделы кабинета: создание и редактирование карточек товаров с вариантами и размерами, управление ценами, поставками и остатками, аналитическую отчётность для поставщиков.",
        "Отвечал за переход слоя состояния с Redux и Redux Thunk на Redux Toolkit и RTK Query, что избавило проект от шаблонного кода редьюсеров и ручной логики загрузки данных.",
        "Развивал внутреннюю библиотеку компонентов на базе MUI с каталогом в Storybook: создавал сложные компоненты таблиц и форм, настраивал тему под дизайн-систему, что позволило собирать новые разделы кабинета из готовых блоков.",
        "Разрабатывал BFF на Koa.js с агрегацией данных из нескольких backend-сервисов и проксированием авторизации, что сократило число запросов с клиента и упростило его логику.",
        "Покрывал ключевые сценарии e2e-тестами на Cypress, а компоненты unit-тестами на Jest и React Testing Library; настраивал CI/CD в GitLab и рефакторил конфигурацию Webpack, оптимизируя сборку.",
      ],
    },
    {
      id: "epam",
      cardTitle: "EPAM Systems",
      role: "Frontend Developer",
      period: "Декабрь 2017 – Сентябрь 2020",
      duration: "2 года 10 месяцев",
      employer: "EPAM Systems",
      href: "https://www.epam.com/",
      label: "epam.com",
      logo: "/logos/epam.png",
      summary: [
        "Аутсорс-разработка внутренних систем Сбербанка и ВТБ для управления банковскими процессами.",
        "Стек: JavaScript, TypeScript, React, Redux (Thunk, Saga), MobX, Formik, React Data Grid, Recharts, Jest, Enzyme, Ant Design, SASS",
      ],
      points: [
        "Работал над тремя внутренними порталами: разработка с нуля на React, MobX и TypeScript (команда из 5 frontend-разработчиков), перевод легаси-приложения с scalajs-react на React и Redux (2 разработчика), развитие крупного портала ВТБ на React и Redux (20 разработчиков).",
        "Создал движок динамических форм, который рендерил формы по JSON-схеме с backend: структура полей, валидация и зависимости между полями задавались на сервере, что позволяло менять формы без участия frontend-разработчиков.",
        "Строил интерфейсы для работы с большими объёмами данных: таблицы на React Data Grid с виртуальным скроллом, ленивой подгрузкой, составными фильтрами и импортом и экспортом в Excel и CSV; операционную аналитику на Recharts.",
        "Реализовывал многошаговые процессы согласования и ролевую модель доступа в интерфейсе: доступность разделов, действий и полей зависела от прав пользователя.",
        "Менторил junior-разработчиков: проводил code review и помогал с онбордингом в проект.",
      ],
    },
  ],
} as const satisfies Record<Locale, readonly Job[]>;

export const getJobs = (locale: Locale): readonly Job[] => JOBS[locale];
