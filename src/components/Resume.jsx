import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import {
  Globe,
  Mail,
  Phone,
  Instagram,
  Send,
  ExternalLink,
  Download,
  Linkedin,
  Briefcase,
  FolderKanban,
  Layers,
  Sparkles,
  Wrench,
  Trophy,
  Languages,
  GraduationCap,
  Calendar,
  Building2,
  CheckCircle2,
  User,
} from 'lucide-react';

const SectionTitle = ({ icon: Icon, children }) => (
  <h3 className="flex items-center gap-2.5 text-xs sm:text-[13px] font-semibold uppercase tracking-[0.14em] text-gray-500 mb-5 sm:mb-6 pb-3 border-b border-gray-100">
    <span className="inline-flex items-center justify-center w-8 h-8 rounded-lg bg-gray-900 text-white flex-shrink-0">
      <Icon size={15} strokeWidth={2.2} />
    </span>
    {children}
  </h3>
);

const ContactPill = ({ href, icon: Icon, children, external = false }) => (
  <a
    href={href}
    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    className="contact-link group inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 text-[13px] text-gray-600 shadow-sm hover:border-gray-900 hover:text-gray-900 transition-colors"
  >
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-lg bg-gray-100 text-gray-700 group-hover:bg-gray-900 group-hover:text-white transition-colors flex-shrink-0">
      <Icon size={14} strokeWidth={2.1} />
    </span>
    {children}
  </a>
);

const RichText = ({ text, className, as: Tag = 'p' }) => {
  const parts = String(text).split(/(\*\*[^*]+\*\*)/g);
  return (
    <Tag className={className}>
      {parts.map((part, i) =>
        part.startsWith('**') && part.endsWith('**') ? (
          <strong key={i} className="font-semibold text-gray-900">
            {part.slice(2, -2)}
          </strong>
        ) : (
          <React.Fragment key={i}>{part}</React.Fragment>
        )
      )}
    </Tag>
  );
};

const portfolioUrl = (slug, lang) =>
  `https://telebots.site/${lang === 'ua' ? 'uk' : 'en'}/portfolio/${slug}`;

const content = {
  ua: {
    name: 'Роман Федонюк',
    title: 'Product Manager / Project Manager',
    about: [
      '**Product / Project Manager з 3+ роками досвіду в IT та власним бізнесом у розробці digital-продуктів.** Працював на стику бізнесу, продукту та розробки: проводив discovery, формував вимоги, планував і координував delivery, працював із клієнтами та стейкголдерами, керував розробниками та відповідав за результат проєкту.',
      'Запустив і розвинув власну IT-компанію **TeleBots** — від першого клієнта до стабільного потоку проєктів, команди та вибудуваних процесів продажів і delivery.',
      'Маю технічну базу в **API, SQL, Python, Telegram Bot API, CRM/ERP та інтеграціях**, тому можу ефективно комунікувати з розробниками, розуміти технічні обмеження та переводити бізнес-задачі у зрозумілі для команди рішення.',
    ],
    expLabel: 'Досвід',
    projLabel: 'Selected Projects',
    skillsLabel: 'Що я вмію',
    toolsLabel: 'Інструменти',
    achieveLabel: 'Досягнення',
    langsLabel: 'Мови',
    eduLabel: 'Освіта',
    domainsLabel: 'Домени',
    resultLabel: 'Результат',
    roleLabel: 'Роль',
    savePdf: 'Відкрити PDF',
    jobs: [
      {
        title: 'Founder & CEO',
        company: 'TeleBots',
        link: 'https://telebots.site/',
        period: '05/2024 — зараз',
        summary:
          'Заснував та розвиваю компанію, яка створює вебпродукти, Telegram-боти та системи автоматизації для бізнесу.',
        points: [
          'Відповідаю за повний цикл: **від першого контакту та discovery до запуску й підтримки**.',
          'Проводжу зустрічі з клієнтами, визначаю бізнес-потреби, формую scope, оцінюю терміни та бюджет.',
          'Перетворюю бізнес-запити на **структуровані вимоги, user stories, задачі та roadmap**.',
          'Планую роботу команди, розподіляю задачі, контролюю прогрес, дедлайни та якість.',
          'Керую розробниками та координую кілька проєктів одночасно; веду переговори й комерційні пропозиції.',
          'Вибудував процеси продажів, delivery та підтримки — значна частина операцій працює без постійного залучення.',
          'Працюю з інтеграціями Telegram, CRM, платежів, API, Google Sheets, AI-сервісами; клієнти з UA та EU.',
        ],
        result:
          'Побудував працюючий digital-бізнес з нуля, сформував команду та процеси для паралельного ведення комерційних проєктів.',
      },
      {
        title: 'Business Analyst',
        company: 'TODO',
        period: '09/2023 — 04/2024',
        summary: 'Впровадження та кастомізація **Odoo ERP** для бізнесу.',
        points: [
          'Проводив discovery, аналізував бізнес-процеси, виявляв точки для автоматизації.',
          'Описував процеси, user stories та функціональні вимоги; готував ТЗ для розробників.',
          'Брав участь у впровадженні модулів **CRM, Sales, Inventory, Manufacturing, Accounting**.',
          'Координував комунікацію між бізнесом, клієнтом і техкомандою; контролював відповідність домовленостям.',
          'Брав участь у тестуванні, прийманні та onboarding користувачів; супроводжував post-go-live.',
        ],
        result:
          'Переводив складні бізнес-процеси у системну модель і доводив її до працюючого рішення без зупинки операцій.',
      },
      {
        title: 'Project Manager',
        company: 'Компанія з впровадження CRM',
        period: '01/2023 — 07/2023',
        points: [
          'Координував кілька паралельних CRM-проєктів і комунікацію із замовниками.',
          'Збирав вимоги, структурував scope, планував етапи та контролював дедлайни.',
          'Координував розробників; вів звітність щодо прогресу, ризиків і блокерів.',
          'Брав участь у presale-зустрічах та підготовці комерційних пропозицій.',
        ],
      },
    ],
    projectsList: [
      {
        name: 'Filo Estate',
        domain: 'Real Estate',
        desc: 'Вебплатформа для продажу та презентації новобудов в Анталії. Формував структуру продукту, комунікацію із замовником, постановку задач і координацію розробки: каталог, фільтри, заявки.',
        role: 'Product / Project',
        link: portfolioUrl('filo-estate', 'ua'),
      },
      {
        name: 'TURBO Education',
        domain: 'EdTech',
        desc: 'Персональний вебпродукт і освітня екосистема для засновника освітнього бізнесу. Працював над структурою продукту, вимогами, контентною логікою, social proof і delivery.',
        role: 'Product / Project',
        link: portfolioUrl('litun-edu', 'ua'),
      },
      {
        name: 'TradeGround',
        domain: 'Marketplace',
        desc: 'Маркетплейс у Telegram (бот + міні-додаток) для діаспори: каталог, оплата, профілі продавців, адмінка. Працював над продуктовою логікою, структурою сервісу, автоматизацією та інтеграціями.',
        role: 'Product / Project',
        link: portfolioUrl('tradeground-bot', 'ua'),
      },
      {
        name: 'Carbit',
        domain: 'Automotive / Data',
        desc: 'SaaS-моніторинг автооголошень з AUTO.RIA, OLX і Telegram. Брав участь у продуктовій логіці, автоматизації збору даних, фільтрах, сповіщеннях і тарифній моделі.',
        role: 'Product / Project',
        link: portfolioUrl('carbit', 'ua'),
      },
      {
        name: 'American Express',
        domain: 'Automotive / E-commerce',
        desc: 'Вебплатформа підбору та доставки авто зі США. Customer journey від заявки й підбору до аукціону, доставки, розмитнення й ремонту. Постановка задач, комунікація замовник ↔ розробка, контроль delivery.',
        role: 'Product / Project',
        link: 'https://americanexspress.com.ua/',
      },
      {
        name: 'Нормально',
        domain: 'Automotive / Leasing',
        desc: 'Digital-продукт для продажу та оновлення авто з фокусом на лізингову модель і швидкий підбір на аукціонах США. Брав участь у бізнес-логіці, UX-сценаріях і delivery веб/бот-рішення.',
        role: 'Product / Project',
        link: 'https://www.normalno-normalno.ua/',
        secondaryLink: portfolioUrl('normalnoauto', 'ua'),
      },
      {
        name: 'Telegram Automation & AI',
        domain: 'Automation / AI',
        desc: 'Серія B2B-рішень: Telegram-боти, CRM-інтеграції, AI-підтримка, Google Sheets, API та automated workflows для продажів, підтримки й внутрішніх процесів.',
        role: 'Founder / PM',
        link: 'https://telebots.site/uk/portfolio',
      },
      {
        name: 'Odoo ERP Implementations',
        domain: 'ERP / Business Automation',
        desc: 'Впровадження ERP для бізнесу: аналіз процесів, CRM, склад, виробництво, фінанси, постановка вимог, координація розробки та супровід після запуску.',
        role: 'Business Analyst',
      },
    ],
    skillsGroups: [
      {
        title: 'Product',
        items: [
          'Discovery',
          'Requirements',
          'Roadmapping',
          'Backlog',
          'User Stories / AC',
          'MVP & prioritization',
          'Stakeholder mgmt',
          'Product delivery',
        ],
      },
      {
        title: 'Project',
        items: [
          'Planning',
          'Scope & deadlines',
          'Risk management',
          'Team coordination',
          'Agile / Scrum / Kanban',
          'Client communication',
          'Reporting',
          'Presales & estimation',
        ],
      },
      {
        title: 'Business Analysis',
        items: [
          'Process analysis',
          'Requirements elicitation',
          'Process mapping',
          'Functional specs',
          'CRM / ERP',
          'Change management',
          'Automation',
        ],
      },
      {
        title: 'Technical',
        items: [
          'API / REST',
          'SQL',
          'Python',
          'Telegram Bot API',
          'CRM / ERP integrations',
          'AI / LLM integrations',
          'Git',
          'Figma',
        ],
      },
    ],
    tools: [
      { group: 'Management', items: 'Jira, Trello, Notion, ClickUp' },
      { group: 'Communication', items: 'Slack, Telegram, Google Meet' },
      { group: 'Docs / Design', items: 'Google Sheets, Docs, Figma' },
      { group: 'Technical', items: 'Git, Postman, SQL, REST API' },
      { group: 'CRM / ERP', items: 'Odoo, CRM systems' },
      { group: 'Automation', items: 'n8n, Telegram Bot API' },
    ],
    achievements: [
      'Запустив IT-компанію **з нуля** та вивів на стабільну комерційну діяльність.',
      'Побудував процес **від ліда до релізу**: discovery → estimation → development → QA → launch → support.',
      'Керував командою розробників і паралельно координував кілька клієнтських проєктів.',
      'Реалізував проєкти в доменах: **real estate, edtech, marketplace, automotive, e-commerce, services, automation, ERP, AI**.',
      'Брав участь у впровадженні ERP без зупинки операцій клієнта.',
      'Вибудував продажі та delivery так, щоб бізнес міг працювати без постійного операційного контролю.',
    ],
    domains: [
      'Real Estate',
      'EdTech',
      'Marketplace',
      'Automotive',
      'E-commerce',
      'Travel',
      'Automation',
      'ERP',
      'AI',
    ],
    langs: [
      { name: 'Українська', level: 'Native' },
      { name: 'Англійська', level: 'B2' },
      { name: 'Польська', level: 'B1' },
    ],
    degree: 'Бакалавр — КПІ ім. Ігоря Сікорського',
    faculty: "ФІОТ · Комп'ютерна інженерія (123)",
    eduPeriod: '2022 — 2026',
  },

  en: {
    name: 'Roman Fedoniuk',
    title: 'Product Manager / Project Manager',
    about: [
      '**Product / Project Manager with 3+ years in IT and a founder background building digital products.** Worked at the intersection of business, product, and engineering: discovery, requirements, planning and delivery, client & stakeholder communication, developer management, and ownership of project outcomes.',
      'Founded and scaled **TeleBots** — from the first client to a steady project pipeline, a team, and established sales & delivery processes.',
      'Technical foundation in **APIs, SQL, Python, Telegram Bot API, CRM/ERP and integrations** — so I can talk to engineers, understand constraints, and turn business problems into clear solutions for the team.',
    ],
    expLabel: 'Experience',
    projLabel: 'Selected Projects',
    skillsLabel: 'What I Do',
    toolsLabel: 'Tools',
    achieveLabel: 'Achievements',
    langsLabel: 'Languages',
    eduLabel: 'Education',
    domainsLabel: 'Domains',
    resultLabel: 'Outcome',
    roleLabel: 'Role',
    savePdf: 'Open PDF',
    jobs: [
      {
        title: 'Founder & CEO',
        company: 'TeleBots',
        link: 'https://telebots.site/en',
        period: '05/2024 — Present',
        summary:
          'Founded and run a company that builds web products, Telegram bots, and business automation systems.',
        points: [
          'Own the full cycle: **first contact & discovery → launch & support**.',
          'Run client meetings, define needs, shape scope, estimate timeline and budget.',
          'Translate business requests into **requirements, user stories, tasks, and roadmaps**.',
          'Plan team work, assign tasks, control progress, deadlines, and quality.',
          'Manage developers across multiple projects; handle negotiations and commercial proposals.',
          'Built sales, delivery, and support processes so operations can run without constant involvement.',
          'Work with Telegram, CRM, payments, APIs, Google Sheets, and AI integrations; clients in UA and EU.',
        ],
        result:
          'Built a working digital business from scratch with a team and processes for running multiple commercial projects in parallel.',
      },
      {
        title: 'Business Analyst',
        company: 'TODO',
        period: '09/2023 — 04/2024',
        summary: 'Implementation and customization of **Odoo ERP** for businesses.',
        points: [
          'Ran discovery, mapped processes, and identified automation opportunities.',
          'Wrote process docs, user stories, and functional requirements; prepared specs for developers.',
          'Contributed to rollout of **CRM, Sales, Inventory, Manufacturing, Accounting** modules.',
          'Coordinated communication between business, client, and tech; tracked delivery against agreements.',
          'Supported testing, UAT, user onboarding, and post-go-live issues.',
        ],
        result:
          'Turned complex client processes into a system model and shipped a working solution without stopping operations.',
      },
      {
        title: 'Project Manager',
        company: 'CRM Implementation Company',
        period: '01/2023 — 07/2023',
        points: [
          'Coordinated multiple concurrent CRM projects and client communication.',
          'Gathered requirements, structured scope, planned stages, and tracked deadlines.',
          'Coordinated developers; reported on progress, risks, and blockers.',
          'Joined presales meetings and helped prepare commercial proposals.',
        ],
      },
    ],
    projectsList: [
      {
        name: 'Filo Estate',
        domain: 'Real Estate',
        desc: 'Web platform for selling and presenting new developments in Antalya. Shaped product structure, client communication, requirements, and delivery coordination: catalog, filters, lead forms.',
        role: 'Product / Project',
        link: portfolioUrl('filo-estate', 'en'),
      },
      {
        name: 'TURBO Education',
        domain: 'EdTech',
        desc: 'Personal brand site and education ecosystem for an education-business founder. Worked on product structure, requirements, content logic, social proof, and delivery.',
        role: 'Product / Project',
        link: portfolioUrl('litun-edu', 'en'),
      },
      {
        name: 'TradeGround',
        domain: 'Marketplace',
        desc: 'Telegram marketplace (bot + mini-app) for the diaspora: catalog, payments, seller profiles, admin. Owned product logic, service structure, automation, and integrations.',
        role: 'Product / Project',
        link: portfolioUrl('tradeground-bot', 'en'),
      },
      {
        name: 'Carbit',
        domain: 'Automotive / Data',
        desc: 'SaaS monitoring for car listings from AUTO.RIA, OLX, and Telegram. Contributed to product logic, data collection automation, filters, notifications, and pricing plans.',
        role: 'Product / Project',
        link: portfolioUrl('carbit', 'en'),
      },
      {
        name: 'American Express',
        domain: 'Automotive / E-commerce',
        desc: 'Web platform for sourcing and delivering cars from the US. Full customer journey from application and selection to auction, shipping, customs, and repair. Requirements, stakeholder–dev communication, delivery control.',
        role: 'Product / Project',
        link: 'https://americanexspress.com.ua/',
      },
      {
        name: 'Normalno',
        domain: 'Automotive / Leasing',
        desc: 'Digital product for car sales/refresh with a leasing-focused model and fast US-auction selection. Contributed to business logic, UX flows, and web/bot delivery.',
        role: 'Product / Project',
        link: 'https://www.normalno-normalno.ua/',
        secondaryLink: portfolioUrl('normalnoauto', 'en'),
      },
      {
        name: 'Telegram Automation & AI',
        domain: 'Automation / AI',
        desc: 'Series of B2B solutions: Telegram bots, CRM integrations, AI support, Google Sheets, APIs, and automated workflows for sales, support, and internal ops.',
        role: 'Founder / PM',
        link: 'https://telebots.site/en/portfolio',
      },
      {
        name: 'Odoo ERP Implementations',
        domain: 'ERP / Business Automation',
        desc: 'ERP rollouts for businesses: process analysis, CRM, warehouse, manufacturing, finance, requirements, development coordination, and post-launch support.',
        role: 'Business Analyst',
      },
    ],
    skillsGroups: [
      {
        title: 'Product',
        items: [
          'Discovery',
          'Requirements',
          'Roadmapping',
          'Backlog',
          'User Stories / AC',
          'MVP & prioritization',
          'Stakeholder mgmt',
          'Product delivery',
        ],
      },
      {
        title: 'Project',
        items: [
          'Planning',
          'Scope & deadlines',
          'Risk management',
          'Team coordination',
          'Agile / Scrum / Kanban',
          'Client communication',
          'Reporting',
          'Presales & estimation',
        ],
      },
      {
        title: 'Business Analysis',
        items: [
          'Process analysis',
          'Requirements elicitation',
          'Process mapping',
          'Functional specs',
          'CRM / ERP',
          'Change management',
          'Automation',
        ],
      },
      {
        title: 'Technical',
        items: [
          'API / REST',
          'SQL',
          'Python',
          'Telegram Bot API',
          'CRM / ERP integrations',
          'AI / LLM integrations',
          'Git',
          'Figma',
        ],
      },
    ],
    tools: [
      { group: 'Management', items: 'Jira, Trello, Notion, ClickUp' },
      { group: 'Communication', items: 'Slack, Telegram, Google Meet' },
      { group: 'Docs / Design', items: 'Google Sheets, Docs, Figma' },
      { group: 'Technical', items: 'Git, Postman, SQL, REST API' },
      { group: 'CRM / ERP', items: 'Odoo, CRM systems' },
      { group: 'Automation', items: 'n8n, Telegram Bot API' },
    ],
    achievements: [
      'Launched an IT company **from scratch** and took it to stable commercial operations.',
      'Built the **lead-to-release** loop: discovery → estimation → development → QA → launch → support.',
      'Managed a developer team while coordinating multiple client projects in parallel.',
      'Shipped work across **real estate, edtech, marketplace, automotive, e-commerce, services, automation, ERP, AI**.',
      'Contributed to ERP rollouts without stopping client operations.',
      'Built sales and delivery processes so the business can run without constant operational control.',
    ],
    domains: [
      'Real Estate',
      'EdTech',
      'Marketplace',
      'Automotive',
      'E-commerce',
      'Travel',
      'Automation',
      'ERP',
      'AI',
    ],
    langs: [
      { name: 'Ukrainian', level: 'Native' },
      { name: 'English', level: 'B2' },
      { name: 'Polish', level: 'B1' },
    ],
    degree: "Bachelor's — Igor Sikorsky Kyiv Polytechnic Institute",
    faculty: 'FIOT · Computer Engineering (123)',
    eduPeriod: '2022 — 2026',
  },

  pl: {
    name: 'Roman Fedoniuk',
    title: 'Product Manager / Project Manager',
    about: [
      '**Product / Project Manager z 3+ latami doświadczenia w IT i własnym biznesem w tworzeniu produktów cyfrowych.** Pracowałem na styku biznesu, produktu i developmentu: discovery, wymagania, planowanie i delivery, komunikacja z klientami oraz stakeholderami, zarządzanie deweloperami i odpowiedzialność za wynik projektu.',
      'Założyłem i rozwinąłem **TeleBots** — od pierwszego klienta do stabilnego pipeline’u projektów, zespołu oraz procesów sprzedaży i delivery.',
      'Mam bazę techniczną w **API, SQL, Python, Telegram Bot API, CRM/ERP i integracjach**, więc skutecznie komunikuję się z deweloperami, rozumiem ograniczenia techniczne i przekładam cele biznesowe na jasne rozwiązania dla zespołu.',
    ],
    expLabel: 'Doświadczenie',
    projLabel: 'Selected Projects',
    skillsLabel: 'Co potrafię',
    toolsLabel: 'Narzędzia',
    achieveLabel: 'Osiągnięcia',
    langsLabel: 'Języki',
    eduLabel: 'Wykształcenie',
    domainsLabel: 'Domeny',
    resultLabel: 'Efekt',
    roleLabel: 'Rola',
    savePdf: 'Otwórz PDF',
    jobs: [
      {
        title: 'Założyciel i CEO',
        company: 'TeleBots',
        link: 'https://telebots.site/en',
        period: '05/2024 — obecnie',
        summary:
          'Założyłem i prowadzę firmę tworzącą produkty webowe, boty Telegram oraz systemy automatyzacji dla biznesu.',
        points: [
          'Odpowiadam za pełny cykl: **od pierwszego kontaktu i discovery do launchu i wsparcia**.',
          'Prowadzę spotkania z klientami, definiuję potrzeby, kształtuję scope, szacuję czas i budżet.',
          'Przekładam potrzeby biznesowe na **wymagania, user stories, zadania i roadmapę**.',
          'Planuję pracę zespołu, dzielę zadania, kontroluję postęp, terminy i jakość.',
          'Zarządzam deweloperami w wielu projektach naraz; prowadzę negocjacje i oferty handlowe.',
          'Zbudowałem procesy sprzedaży, delivery i wsparcia — część operacji działa bez stałego udziału.',
          'Pracuję z integracjami Telegram, CRM, płatności, API, Google Sheets i AI; klienci z UA i EU.',
        ],
        result:
          'Zbudowałem działający biznes digital od zera, zespół i procesy do równoległego prowadzenia projektów komercyjnych.',
      },
      {
        title: 'Analityk Biznesowy',
        company: 'TODO',
        period: '09/2023 — 04/2024',
        summary: 'Wdrażanie i customizacja **Odoo ERP** dla biznesu.',
        points: [
          'Prowadziłem discovery, mapowałem procesy i wskazywałem obszary automatyzacji.',
          'Opisywałem procesy, user stories i wymagania funkcjonalne; przygotowywałem specyfikacje.',
          'Brałem udział we wdrożeniach modułów **CRM, Sales, Inventory, Manufacturing, Accounting**.',
          'Koordynowałem komunikację biznes–klient–tech i zgodność z ustaleniami.',
          'Wspierałem testy, odbiór, onboarding użytkowników oraz post-go-live.',
        ],
        result:
          'Przekładałem złożone procesy klienta na model systemowy i doprowadzałem go do działającego rozwiązania bez przerywania operacji.',
      },
      {
        title: 'Project Manager',
        company: 'Firma wdrażająca CRM',
        period: '01/2023 — 07/2023',
        points: [
          'Koordynowałem równolegle kilka projektów CRM i komunikację z klientami.',
          'Zbierałem wymagania, strukturyzowałem scope, planowałem etapy i pilnowałem terminów.',
          'Koordynowałem deweloperów; raportowałem postęp, ryzyka i blockery.',
          'Uczestniczyłem w presales i przygotowaniu ofert handlowych.',
        ],
      },
    ],
    projectsList: [
      {
        name: 'Filo Estate',
        domain: 'Real Estate',
        desc: 'Platforma webowa do sprzedaży i prezentacji nowych inwestycji w Antalyi. Kształtowałem strukturę produktu, komunikację z klientem, wymagania i koordynację delivery: katalog, filtry, leady.',
        role: 'Product / Project',
        link: portfolioUrl('filo-estate', 'en'),
      },
      {
        name: 'TURBO Education',
        domain: 'EdTech',
        desc: 'Produkt webowy i ekosystem edukacyjny dla założyciela biznesu edukacyjnego. Pracowałem nad strukturą produktu, wymaganiami, logiką treści, social proof i delivery.',
        role: 'Product / Project',
        link: portfolioUrl('litun-edu', 'en'),
      },
      {
        name: 'TradeGround',
        domain: 'Marketplace',
        desc: 'Marketplace w Telegramie (bot + mini-app) dla diaspory: katalog, płatności, profile sprzedawców, admin. Logika produktowa, struktura serwisu, automatyzacja i integracje.',
        role: 'Product / Project',
        link: portfolioUrl('tradeground-bot', 'en'),
      },
      {
        name: 'Carbit',
        domain: 'Automotive / Data',
        desc: 'SaaS do monitoringu ogłoszeń auto z AUTO.RIA, OLX i Telegram. Logika produktu, automatyzacja zbierania danych, filtry, powiadomienia i model taryfowy.',
        role: 'Product / Project',
        link: portfolioUrl('carbit', 'en'),
      },
      {
        name: 'American Express',
        domain: 'Automotive / E-commerce',
        desc: 'Platforma webowa doboru i dostawy aut z USA. Pełny customer journey: wniosek, dobór, aukcja, dostawa, odprawa celna, naprawa. Wymagania, komunikacja klient–dev, kontrola delivery.',
        role: 'Product / Project',
        link: 'https://americanexspress.com.ua/',
      },
      {
        name: 'Normalno',
        domain: 'Automotive / Leasing',
        desc: 'Produkt digital do sprzedaży/odświeżenia aut z modelem leasingowym i szybkim doborem na aukcjach USA. Logika biznesowa, scenariusze UX oraz delivery web/bot.',
        role: 'Product / Project',
        link: 'https://www.normalno-normalno.ua/',
        secondaryLink: portfolioUrl('normalnoauto', 'en'),
      },
      {
        name: 'Telegram Automation & AI',
        domain: 'Automation / AI',
        desc: 'Seria rozwiązań B2B: boty Telegram, integracje CRM, AI support, Google Sheets, API i automated workflows dla sprzedaży, supportu i procesów wewnętrznych.',
        role: 'Founder / PM',
        link: 'https://telebots.site/en/portfolio',
      },
      {
        name: 'Odoo ERP Implementations',
        domain: 'ERP / Business Automation',
        desc: 'Wdrożenia ERP: analiza procesów, CRM, magazyn, produkcja, finanse, wymagania, koordynacja developmentu i wsparcie po starcie.',
        role: 'Business Analyst',
      },
    ],
    skillsGroups: [
      {
        title: 'Product',
        items: [
          'Discovery',
          'Requirements',
          'Roadmapping',
          'Backlog',
          'User Stories / AC',
          'MVP & prioritization',
          'Stakeholder mgmt',
          'Product delivery',
        ],
      },
      {
        title: 'Project',
        items: [
          'Planning',
          'Scope & deadlines',
          'Risk management',
          'Team coordination',
          'Agile / Scrum / Kanban',
          'Client communication',
          'Reporting',
          'Presales & estimation',
        ],
      },
      {
        title: 'Business Analysis',
        items: [
          'Process analysis',
          'Requirements elicitation',
          'Process mapping',
          'Functional specs',
          'CRM / ERP',
          'Change management',
          'Automation',
        ],
      },
      {
        title: 'Technical',
        items: [
          'API / REST',
          'SQL',
          'Python',
          'Telegram Bot API',
          'CRM / ERP integrations',
          'AI / LLM integrations',
          'Git',
          'Figma',
        ],
      },
    ],
    tools: [
      { group: 'Management', items: 'Jira, Trello, Notion, ClickUp' },
      { group: 'Communication', items: 'Slack, Telegram, Google Meet' },
      { group: 'Docs / Design', items: 'Google Sheets, Docs, Figma' },
      { group: 'Technical', items: 'Git, Postman, SQL, REST API' },
      { group: 'CRM / ERP', items: 'Odoo, CRM systems' },
      { group: 'Automation', items: 'n8n, Telegram Bot API' },
    ],
    achievements: [
      'Uruchomiłem firmę IT **od zera** i doprowadziłem do stabilnej działalności komercyjnej.',
      'Zbudowałem proces **od leada do releasu**: discovery → estimation → development → QA → launch → support.',
      'Zarządzałem zespołem deweloperów i równolegle koordynowałem kilka projektów klienckich.',
      'Realizowałem projekty w domenach: **real estate, edtech, marketplace, automotive, e-commerce, services, automation, ERP, AI**.',
      'Brałem udział we wdrożeniach ERP bez przerywania operacji klienta.',
      'Zbudowałem sprzedaż i delivery tak, by biznes mógł działać bez stałej kontroli operacyjnej.',
    ],
    domains: [
      'Real Estate',
      'EdTech',
      'Marketplace',
      'Automotive',
      'E-commerce',
      'Travel',
      'Automation',
      'ERP',
      'AI',
    ],
    langs: [
      { name: 'Ukraiński', level: 'Native' },
      { name: 'Angielski', level: 'B2' },
      { name: 'Polski', level: 'B1' },
    ],
    degree: 'Licencjat — Politechnika Kijowska im. Igora Sikorskiego',
    faculty: 'FIOT · Inżynieria Komputerowa (123)',
    eduPeriod: '2022 — 2026',
  },
};

const waitForImages = (root) =>
  Promise.all(
    Array.from(root.querySelectorAll('img')).map(
      (img) =>
        new Promise((resolve) => {
          if (img.complete && img.naturalWidth > 0) {
            resolve();
            return;
          }
          img.onload = () => resolve();
          img.onerror = () => resolve();
        })
    )
  );

const Resume = () => {
  const [lang, setLang] = useState('ua');
  const [pdfLoading, setPdfLoading] = useState(false);
  const resumeRef = useRef(null);
  const t = content[lang];

  const handleOpenPdf = async () => {
    if (!resumeRef.current || pdfLoading) {
      return;
    }

    setPdfLoading(true);

    const source = resumeRef.current;
    const clone = source.cloneNode(true);
    clone.classList.add('pdf-capture');
    clone.setAttribute('aria-hidden', 'true');
    clone.style.cssText = [
      'position:fixed',
      'left:-10000px',
      'top:0',
      'width:900px',
      'max-width:900px',
      'margin:0',
      'pointer-events:none',
      'z-index:-1',
    ].join(';');

    document.body.appendChild(clone);

    try {
      await waitForImages(clone);
      // Let layout settle after desktop PDF styles apply
      await new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)));

      const canvas = await html2canvas(clone, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#ffffff',
        width: 900,
        windowWidth: 900,
        scrollX: 0,
        scrollY: 0,
        logging: false,
      });

      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
        compress: true,
      });

      const pageWidth = pdf.internal.pageSize.getWidth();
      const pageHeight = pdf.internal.pageSize.getHeight();
      const margin = 8;
      const contentWidth = pageWidth - margin * 2;
      const contentHeight = pageHeight - margin * 2;

      const pxPerMm = canvas.width / contentWidth;
      const pageHeightPx = Math.floor(contentHeight * pxPerMm);

      let offsetY = 0;
      let pageIndex = 0;

      while (offsetY < canvas.height) {
        const sliceHeight = Math.min(pageHeightPx, canvas.height - offsetY);
        const pageCanvas = document.createElement('canvas');
        pageCanvas.width = canvas.width;
        pageCanvas.height = sliceHeight;

        const ctx = pageCanvas.getContext('2d');
        ctx.fillStyle = '#ffffff';
        ctx.fillRect(0, 0, pageCanvas.width, pageCanvas.height);
        ctx.drawImage(
          canvas,
          0,
          offsetY,
          canvas.width,
          sliceHeight,
          0,
          0,
          canvas.width,
          sliceHeight
        );

        const imgData = pageCanvas.toDataURL('image/jpeg', 0.92);
        const sliceHeightMm = sliceHeight / pxPerMm;

        if (pageIndex > 0) {
          pdf.addPage();
        }

        pdf.addImage(imgData, 'JPEG', margin, margin, contentWidth, sliceHeightMm);

        offsetY += sliceHeight;
        pageIndex += 1;
      }

      const fileName = `Roman_Fedoniuk_CV_${lang}.pdf`;
      const blob = pdf.output('blob');
      const blobUrl = URL.createObjectURL(blob);
      const newTab = window.open(blobUrl, '_blank');

      if (!newTab) {
        pdf.save(fileName);
      }

      setTimeout(() => URL.revokeObjectURL(blobUrl), 60000);
    } finally {
      clone.remove();
      setPdfLoading(false);
    }
  };

  const AboutBlock = ({ className }) => (
    <div className={className}>
      {t.about.map((paragraph, idx) => (
        <RichText
          key={idx}
          text={paragraph}
          className={`text-[14px] sm:text-[15px] leading-relaxed text-gray-700 ${idx > 0 ? 'mt-3' : ''}`}
        />
      ))}
    </div>
  );

  return (
    <div className="resume-outer min-h-screen bg-gradient-to-b from-gray-100 via-gray-50 to-white px-3 py-4 sm:p-6 md:p-10">

      {/* Top bar */}
      <div className="no-print flex flex-wrap justify-between sm:justify-end items-center gap-2 mb-5 sm:mb-7 max-w-6xl mx-auto">
        <div className="flex items-center gap-2">
          {['ua', 'en', 'pl'].map((l) => (
            <button
              key={l}
              type="button"
              onClick={() => setLang(l)}
              className={`min-w-[48px] px-4 py-2.5 rounded-xl border text-sm font-semibold transition-all duration-150 ${
                lang === l
                  ? 'bg-black text-white border-black shadow-sm'
                  : 'bg-white text-black border-gray-300 hover:border-black'
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
        </div>
        <button
          type="button"
          onClick={handleOpenPdf}
          disabled={pdfLoading}
          className="flex items-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors disabled:opacity-60 disabled:cursor-wait shadow-sm"
        >
          <Download size={16} />
          {pdfLoading ? 'PDF…' : t.savePdf}
        </button>
      </div>

      {/* Resume card */}
      <div
        ref={resumeRef}
        className="resume-card bg-white max-w-6xl mx-auto rounded-2xl border border-gray-200/80 overflow-hidden shadow-[0_10px_40px_rgba(15,23,42,0.06)]"
      >

        {/* Header */}
        <div className="resume-header px-5 sm:px-9 md:px-11 pt-6 sm:pt-9 md:pt-11 pb-6 sm:pb-9 border-b border-gray-100 bg-[linear-gradient(180deg,#ffffff_0%,#fafafa_100%)]">
          <div className="resume-identity flex items-center sm:items-start gap-4 sm:gap-8 mb-5 sm:mb-6">
            <div className="resume-photo flex-shrink-0 w-[88px] h-[112px] sm:w-32 sm:h-40 rounded-2xl border border-gray-200 bg-gray-50 shadow-sm overflow-hidden">
              <img
                src="/photo.jpg"
                alt={t.name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <div className="flex-grow min-w-0 pt-0 sm:pt-1">
              <div className="inline-flex items-center gap-1.5 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.14em] text-gray-500 mb-2">
                <User size={13} />
                CV
              </div>
              <h1 className="resume-name text-[1.6rem] sm:text-4xl font-bold text-gray-900 mb-1 tracking-tight leading-tight">
                {t.name}
              </h1>
              <p className="resume-title text-[14px] sm:text-lg text-gray-500 font-medium leading-snug">
                {t.title}
              </p>
              <AboutBlock className="about-desktop max-w-3xl mt-5" />
            </div>
          </div>

          <AboutBlock className="about-mobile mb-5" />

          <div className="flex flex-wrap gap-2.5 sm:gap-3">
            <ContactPill href="mailto:roman.fedoniuk@gmail.com" icon={Mail}>
              roman.fedoniuk@gmail.com
            </ContactPill>
            <ContactPill href="https://wa.me/380960908006" icon={Phone} external>
              +380 96 090 8006
            </ContactPill>
            <ContactPill href="https://t.me/nowayrm" icon={Send} external>
              @nowayrm
            </ContactPill>
            <ContactPill href="https://www.instagram.com/roma_fedoniukk/" icon={Instagram} external>
              @roma_fedoniukk
            </ContactPill>
            <ContactPill href="https://www.linkedin.com/in/roman-fedoniuk-10a515175/" icon={Linkedin} external>
              <span className="contact-full">linkedin.com/in/roman-fedoniuk-10a515175</span>
              <span className="contact-short">LinkedIn</span>
            </ContactPill>
            <ContactPill href="https://telebots.site/" icon={Globe} external>
              telebots.site
            </ContactPill>
          </div>
        </div>

        {/* Body */}
        <div className="resume-body grid grid-cols-1 md:grid-cols-3 md:divide-x divide-gray-100">

          {/* Main column */}
          <div className="resume-main md:col-span-2 px-5 sm:px-9 md:px-11 py-7 sm:py-9 space-y-9 sm:space-y-11 border-b md:border-b-0 border-gray-100">

            {/* Experience */}
            <section>
              <SectionTitle icon={Briefcase}>{t.expLabel}</SectionTitle>
              <div className="space-y-7 sm:space-y-8">
                {t.jobs.map((job, idx) => (
                  <div key={idx} className="relative pl-0">
                    <div className="job-head flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-2">
                      <div>
                        <p className="text-base sm:text-lg font-semibold text-gray-900 leading-snug">
                          {job.title}
                        </p>
                        <p className="mt-1 inline-flex items-center gap-1.5 text-sm text-gray-500">
                          <Building2 size={14} className="text-gray-400" />
                          {job.company}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full whitespace-nowrap self-start">
                        <Calendar size={13} />
                        {job.period}
                      </span>
                    </div>
                    {job.link && (
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-900 transition-colors mb-3"
                      >
                        <Globe size={14} />
                        {job.link.replace(/^https?:\/\//, '').replace(/\/$/, '')}
                        <ExternalLink size={12} />
                      </a>
                    )}
                    {job.summary && (
                      <RichText
                        text={job.summary}
                        className="text-sm leading-relaxed text-gray-600 mb-3"
                      />
                    )}
                    <ul className="space-y-2">
                      {job.points.map((point, i) => (
                        <li
                          key={i}
                          className="text-sm leading-relaxed text-gray-700 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[0.55rem] before:w-1.5 before:h-1.5 before:rounded-full before:bg-gray-300"
                        >
                          <RichText text={point} as="span" />
                        </li>
                      ))}
                    </ul>
                    {job.result && (
                      <div className="mt-3.5 flex items-start gap-2.5 text-sm leading-relaxed text-gray-800 bg-gray-50 border border-gray-100 rounded-xl px-3.5 py-3">
                        <CheckCircle2 size={16} className="text-gray-700 mt-0.5 flex-shrink-0" />
                        <p>
                          <span className="font-semibold text-gray-900">{t.resultLabel}: </span>
                          {job.result}
                        </p>
                      </div>
                    )}
                    {idx < t.jobs.length - 1 && <div className="mt-7 sm:mt-8 border-b border-gray-100" />}
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <SectionTitle icon={FolderKanban}>{t.projLabel}</SectionTitle>
              <div className="space-y-3.5 sm:space-y-4">
                {t.projectsList.map((project, idx) => (
                  <div
                    key={idx}
                    className="rounded-2xl border border-gray-100 bg-gray-50/80 px-4 sm:px-5 py-4 sm:py-5 hover:border-gray-200 hover:bg-gray-50 transition-colors"
                  >
                    <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1.5 mb-2">
                      {project.link ? (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-base font-semibold text-gray-900 hover:underline inline-flex items-center gap-1.5"
                        >
                          {project.name}
                          <ExternalLink size={14} className="text-gray-400" />
                        </a>
                      ) : (
                        <p className="text-base font-semibold text-gray-900">{project.name}</p>
                      )}
                      <span className="text-xs font-medium bg-white border border-gray-200 text-gray-600 px-2.5 py-1 rounded-full">
                        {project.domain}
                      </span>
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600 mb-2">{project.desc}</p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
                      {project.role && (
                        <p className="text-xs sm:text-[13px] text-gray-500">
                          <span className="font-semibold text-gray-700">{t.roleLabel}:</span> {project.role}
                        </p>
                      )}
                      {project.secondaryLink && (
                        <a
                          href={project.secondaryLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs sm:text-[13px] text-gray-500 hover:text-gray-900 inline-flex items-center gap-1 transition-colors"
                        >
                          Case
                          <ExternalLink size={12} />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="resume-aside px-5 sm:px-7 md:px-8 py-7 sm:py-9 space-y-8 sm:space-y-9 bg-[#fbfbfb]">

            {/* Domains */}
            <section>
              <SectionTitle icon={Layers}>{t.domainsLabel}</SectionTitle>
              <div className="flex flex-wrap gap-2">
                {t.domains.map((domain) => (
                  <span
                    key={domain}
                    className="text-[13px] font-medium bg-white border border-gray-200 text-gray-700 px-3 py-1.5 rounded-full shadow-sm"
                  >
                    {domain}
                  </span>
                ))}
              </div>
            </section>

            {/* Skills */}
            <section>
              <SectionTitle icon={Sparkles}>{t.skillsLabel}</SectionTitle>
              <div className="space-y-5">
                {t.skillsGroups.map((group) => (
                  <div key={group.title}>
                    <p className="text-[13px] font-semibold text-gray-800 mb-2">{group.title}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((skill) => (
                        <span
                          key={skill}
                          className="text-[12px] sm:text-[13px] font-medium bg-gray-900 text-white px-2.5 py-1 rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Tools */}
            <section>
              <SectionTitle icon={Wrench}>{t.toolsLabel}</SectionTitle>
              <div className="space-y-3">
                {t.tools.map((tool) => (
                  <div key={tool.group} className="rounded-xl bg-white border border-gray-100 px-3.5 py-2.5">
                    <p className="text-[13px] font-semibold text-gray-800">{tool.group}</p>
                    <p className="text-[13px] text-gray-500 leading-snug mt-0.5">{tool.items}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Achievements */}
            <section>
              <SectionTitle icon={Trophy}>{t.achieveLabel}</SectionTitle>
              <ul className="space-y-3">
                {t.achievements.map((a, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-600 leading-relaxed">
                    <CheckCircle2 size={16} className="text-gray-800 mt-0.5 flex-shrink-0" />
                    <RichText text={a} as="span" />
                  </li>
                ))}
              </ul>
            </section>

            {/* Languages */}
            <section>
              <SectionTitle icon={Languages}>{t.langsLabel}</SectionTitle>
              <div className="space-y-2.5">
                {t.langs.map((l) => (
                  <div
                    key={l.name}
                    className="flex justify-between items-center gap-3 rounded-xl bg-white border border-gray-100 px-3.5 py-2.5"
                  >
                    <span className="text-sm text-gray-700 font-medium">{l.name}</span>
                    <span className="text-xs font-semibold bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full flex-shrink-0">
                      {l.level}
                    </span>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <SectionTitle icon={GraduationCap}>{t.eduLabel}</SectionTitle>
              <div className="rounded-2xl bg-white border border-gray-100 px-4 py-4 shadow-sm">
                <p className="text-sm font-semibold text-gray-800 mb-1.5 leading-snug">{t.degree}</p>
                <p className="text-[13px] text-gray-500 mb-3">{t.faculty}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium bg-gray-100 text-gray-600 px-2.5 py-1 rounded-full">
                  <Calendar size={12} />
                  {t.eduPeriod}
                </span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
