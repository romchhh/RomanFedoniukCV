import React, { useRef, useState } from 'react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import { Globe, Mail, Phone, Instagram, Send, ExternalLink, Download, Linkedin } from 'lucide-react';

const content = {
  ua: {
    name: 'Роман Федонюк',
    title: 'Product Manager / Project Manager',
    about:
      'Product Manager із досвідом власного бізнесу та впровадження CRM/ERP-систем. ' +
      'Запустив компанію TeleBots з нуля: від ідеї та першого клієнта — до автономно працюючого бізнесу зі стабільним потоком замовлень. ' +
      'Думаю, що маю гарне поєднання технічного розуміння (API, боти, Odoo, SQL) і бізнес-мислення: ' +
      'вмію перекласти потреби клієнта у чіткий продукт і довести його до релізу. ' +
      'Досвід роботи з командами розробників, управління проєктами та прямої комунікації зі стейкголдерами на всіх рівнях. ' +
      'Шукаю сильний продукт, де зможу рости разом з командою, брати відповідальність і приносити цінність.',
    expLabel: 'Досвід роботи',
    projLabel: 'Проєкти',
    skillsLabel: 'Ключові навички',
    achieveLabel: 'Досягнення',
    langsLabel: 'Мови',
    eduLabel: 'Освіта',
    savePdf: 'Відкрити PDF',
    jobs: [
      {
        title: 'Founder & CEO',
        company: 'TeleBots',
        link: 'telebots.site',
        period: '05/2024 — зараз',
        points: [
          'Заснував компанію з розробки чат-ботів, вебсайтів та впровадження CRM — від ідеї до перших клієнтів за 2 місяці',
          'Вивів бізнес в автономний режим: побудував систему залучення клієнтів та операційні процеси без постійного втручання',
          'Керую командою розробників, закриваю угоди та відповідаю за повний цикл delivery — від брифу до запуску',
          'Самостійно розробив продуктову стратегію, позиціонування та підхід до продажів на ринку UA/PL',
        ],
      },
      {
        title: 'Business Analyst',
        company: 'TODO',
        period: '09/2023 — 04/2024',
        points: [
          'Проводив discovery-сесії з клієнтами, описував бізнес-процеси та готував ТЗ для впровадження ERP Odoo',
          'Координував rollout модулів CRM, складу, фінансів та виробництва — в рамках термінів і бюджету',
          'Супроводжував клієнтів від підписання контракту до підтримки post-go-live, мінімізуючи ризики зриву дедлайнів',
        ],
      },
      {
        title: 'Project Manager',
        company: 'Компанія з впровадження CRM',
        period: '01/2023 — 07/2023',
        points: [
          'Вів декілька паралельних проєктів впровадження CRM-систем, координував команди та комунікацію з клієнтами',
          'Налагодив процес звітності та контролю термінів, що дозволило знизити кількість прострочень',
          'Брав участь у передпродажних зустрічах та формуванні комерційних пропозицій',
        ],
      },
    ],
    projectsList: [
      {
        name: 'TeleBots Platform',
        desc: 'Продукт для автоматизації продажів і підтримки через Telegram-боти. Обслуговує B2B-клієнтів у ніші e-commerce та сервісного бізнесу.',
        tech: 'Telegram Bot API · Python · CRM-інтеграції · n8n',
      },
      {
        name: 'ERP Odoo — впровадження',
        desc: 'Повний цикл впровадження ERP для виробничих компаній: від аналізу процесів до навчання команди та підтримки.',
        tech: 'Odoo · Business Analysis · Change Management',
      },
    ],
    skillsList: [
      'Product Management',
      'Agile / Scrum',
      'Business Analysis',
      'Roadmapping',
      'CRM & ERP',
      'Stakeholder Mgmt',
      'User Stories',
      'SQL basics',
      'API Integration',
      'Figma basics',
    ],
    achievements: [
      'Запустив бізнес і вийшов на самоокупність протягом першого кварталу',
      'Впровадив ERP без зупинки операцій клієнта',
      'Побудував систему продажів без особистого залучення',
    ],
    langs: [
      { name: 'Українська', level: 'Native' },
      { name: 'Англійська', level: 'B2' },
      { name: 'Польська', level: 'B1' },
    ],
    degree: 'Бакалавр — КПІ ім. Ігоря Сікорського',
    faculty: 'ФІОТ · Комп\'ютерна інженерія (123)',
    eduPeriod: '2021 — зараз',
  },

  en: {
    name: 'Roman Fedoniuk',
    title: 'Product Manager / Project Manager',
    about:
      'Product Manager with hands-on experience founding a tech company and implementing CRM/ERP systems. ' +
      'Built TeleBots from scratch — from idea and first client to an autonomously operating business with a steady order flow. ' +
      'I think I have a good combination of technical fluency (APIs, bots, Odoo, SQL) and business thinking: ' +
      'I can translate client needs into a clear product and take it all the way to release. ' +
      'Experienced working with dev teams, managing projects end-to-end, and communicating directly with stakeholders at all levels. ' +
      'Looking for a strong product where I can grow with the team, own meaningful outcomes, and deliver measurable value from day one.',
    expLabel: 'Experience',
    projLabel: 'Projects',
    skillsLabel: 'Key Skills',
    achieveLabel: 'Achievements',
    langsLabel: 'Languages',
    eduLabel: 'Education',
    savePdf: 'Open PDF',
    jobs: [
      {
        title: 'Founder & CEO',
        company: 'TeleBots',
        link: 'telebots.site',
        period: '05/2024 — Present',
        points: [
          'Founded a chatbot & CRM implementation company — from idea to first paying clients in under 2 months',
          'Scaled to autonomous operations: built a client acquisition system that runs without my daily involvement',
          'Managing developers, closing deals, and owning the full delivery cycle from brief to launch',
          'Independently developed product strategy, positioning, and a sales approach for the UA/PL market',
        ],
      },
      {
        title: 'Business Analyst',
        company: 'TODO',
        period: '09/2023 — 04/2024',
        points: [
          'Ran discovery sessions, mapped business processes, and wrote specifications for Odoo ERP rollouts',
          'Coordinated implementation of CRM, warehouse, finance, and manufacturing modules — on time and on budget',
          'Guided clients from contract signing through post-go-live support, reducing delivery risks',
        ],
      },
      {
        title: 'Project Manager',
        company: 'CRM Implementation Company',
        period: '01/2023 — 07/2023',
        points: [
          'Managed multiple concurrent CRM implementation projects, coordinating dev teams and client communication',
          'Introduced reporting and deadline-tracking processes that reduced project overruns',
          'Participated in pre-sales meetings and commercial proposal preparation',
        ],
      },
    ],
    projectsList: [
      {
        name: 'TeleBots Platform',
        desc: 'Product for sales & support automation via Telegram bots. Serving B2B clients in e-commerce and service businesses.',
        tech: 'Telegram Bot API · Python · CRM integrations · n8n',
      },
      {
        name: 'ERP Odoo Implementation',
        desc: 'Full-cycle ERP implementation for manufacturing companies: from process analysis to team training and ongoing support.',
        tech: 'Odoo · Business Analysis · Change Management',
      },
    ],
    skillsList: [
      'Product Management',
      'Agile / Scrum',
      'Business Analysis',
      'Roadmapping',
      'CRM & ERP',
      'Stakeholder Mgmt',
      'User Stories',
      'SQL basics',
      'API Integration',
      'Figma basics',
    ],
    achievements: [
      'Reached profitability within the first quarter of launching the business',
      'Delivered ERP rollouts without halting client operations',
      'Built a self-running sales system requiring no personal involvement',
    ],
    langs: [
      { name: 'Ukrainian', level: 'Native' },
      { name: 'English', level: 'B2' },
      { name: 'Polish', level: 'B1' },
    ],
    degree: "Bachelor's — Igor Sikorsky Kyiv Polytechnic Institute",
    faculty: 'IASA · Computer Engineering (123)',
    eduPeriod: '2021 — Present',
  },

  pl: {
    name: 'Roman Fedoniuk',
    title: 'Product Manager / Project Manager',
    about:
      'Product Manager z doświadczeniem w prowadzeniu własnej firmy technologicznej i wdrażaniu systemów CRM/ERP. ' +
      'Zbudowałem TeleBots od zera — od pomysłu i pierwszego klienta do autonomicznie działającego biznesu ze stałym przepływem zamówień. ' +
      'Łączę rozumienie techniczne (API, boty, Odoo, SQL) z myśleniem biznesowym: ' +
      'potrafię przełożyć potrzeby klienta na konkretny produkt i doprowadzić go do wydania. ' +
      'Mam doświadczenie w pracy z zespołami deweloperskimi, zarządzaniu projektami end-to-end i bezpośredniej komunikacji z interesariuszami na wszystkich poziomach. ' +
      'Szukam silnego produktu, gdzie będę mógł rozwijać się razem z zespołem, brać odpowiedzialność i dostarczać mierzalną wartość od pierwszego miesiąca.',
    expLabel: 'Doświadczenie',
    projLabel: 'Projekty',
    skillsLabel: 'Kluczowe umiejętności',
    achieveLabel: 'Osiągnięcia',
    langsLabel: 'Języki',
    eduLabel: 'Wykształcenie',
    savePdf: 'Otwórz PDF',
    jobs: [
      {
        title: 'Założyciel i CEO',
        company: 'TeleBots',
        link: 'telebots.site',
        period: '05/2024 — obecnie',
        points: [
          'Założyłem firmę tworzącą chatboty i wdrażającą CRM — od pomysłu do pierwszych płacących klientów w ciągu 2 miesięcy',
          'Przeskalowałem do trybu autonomicznego: zbudowałem system pozyskiwania klientów bez mojego codziennego udziału',
          'Zarządzam deweloperami, zamykam sprzedaż i odpowiadam za pełny cykl dostawy od briefu do launchu',
          'Samodzielnie opracowałem strategię produktową, pozycjonowanie i podejście sprzedażowe na rynku UA/PL',
        ],
      },
      {
        title: 'Analityk Biznesowy',
        company: 'TODO',
        period: '09/2023 — 04/2024',
        points: [
          'Prowadziłem sesje discovery, mapowałem procesy biznesowe i pisałem specyfikacje do wdrożeń ERP Odoo',
          'Koordynowałem rollout modułów CRM, magazynu, finansów i produkcji — w terminie i budżecie',
          'Wspierałem klientów od podpisania umowy przez post-go-live, minimalizując ryzyko opóźnień',
        ],
      },
      {
        title: 'Project Manager',
        company: 'Firma wdrażająca CRM',
        period: '01/2023 — 07/2023',
        points: [
          'Prowadziłem równolegle kilka projektów wdrożenia CRM, koordynując zespoły i komunikację z klientami',
          'Wdrożyłem procesy raportowania i kontroli terminów, które zmniejszyły liczbę przekroczeń harmonogramów',
          'Uczestniczyłem w spotkaniach przedsprzedażowych i przygotowywaniu ofert handlowych',
        ],
      },
    ],
    projectsList: [
      {
        name: 'TeleBots Platform',
        desc: 'Produkt do automatyzacji sprzedaży i wsparcia przez chatboty Telegram. Obsługuje klientów B2B z e-commerce i sektora usług.',
        tech: 'Telegram Bot API · Python · integracje CRM · n8n',
      },
      {
        name: 'Wdrożenie ERP Odoo',
        desc: 'Pełny cykl wdrożenia ERP dla firm produkcyjnych: od analizy procesów po szkolenie zespołu i wsparcie.',
        tech: 'Odoo · Business Analysis · Change Management',
      },
    ],
    skillsList: [
      'Product Management',
      'Agile / Scrum',
      'Business Analysis',
      'Roadmapping',
      'CRM & ERP',
      'Stakeholder Mgmt',
      'User Stories',
      'SQL basics',
      'API Integration',
      'Figma basics',
    ],
    achievements: [
      'Osiągnąłem rentowność w pierwszym kwartale od uruchomienia firmy',
      'Wdrożyłem ERP bez przerywania operacji klienta',
      'Zbudowałem system sprzedaży działający bez mojego bezpośredniego udziału',
    ],
    langs: [
      { name: 'Ukraiński', level: 'Native' },
      { name: 'Angielski', level: 'B2' },
      { name: 'Polski', level: 'B1' },
    ],
    degree: 'Licencjat — Politechnika Kijowska im. Igora Sikorskiego',
    faculty: 'IASA · Inżynieria Komputerowa (123)',
    eduPeriod: '2021 — obecnie',
  },
};

const Resume = () => {
  const [lang, setLang] = useState('ua');
  const resumeRef = useRef(null);
  const t = content[lang];

  const handleOpenPdf = async () => {
    if (!resumeRef.current) {
      return;
    }

    const canvas = await html2canvas(resumeRef.current, {
      scale: 2,
      useCORS: true,
      backgroundColor: '#ffffff',
    });

    const imgData = canvas.toDataURL('image/png');
    const pdf = new jsPDF('p', 'mm', 'a4');
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pageHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;
    }

    const fileName = `Roman_Fedoniuk_CV_${lang}.pdf`;
    const blob = pdf.output('blob');
    const blobUrl = URL.createObjectURL(blob);
    const newTab = window.open(blobUrl, '_blank');

    if (!newTab) {
      pdf.save(fileName);
    }

    setTimeout(() => URL.revokeObjectURL(blobUrl), 60000);
  };

  return (
    <>
      <style>{`
        @media print {
          .no-print { display: none !important; }
          body { margin: 0; background: white; }
          .resume-outer { background: white; padding: 0; }
          .resume-card {
            box-shadow: none !important;
            border: none !important;
            border-radius: 0 !important;
            max-width: 100% !important;
          }
        }
      `}</style>

      <div className="resume-outer min-h-screen bg-gray-50 p-6 md:p-10">

        {/* Top bar */}
        <div className="no-print flex justify-end items-center gap-2 mb-6 max-w-5xl mx-auto">
          {['ua', 'en', 'pl'].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-4 py-1.5 rounded border text-sm font-medium transition-all duration-150 ${
                lang === l
                  ? 'bg-black text-white border-black'
                  : 'bg-white text-black border-gray-300 hover:border-black'
              }`}
            >
              {l.toUpperCase()}
            </button>
          ))}
          <button
            onClick={handleOpenPdf}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors ml-2"
          >
            <Download size={14} />
            {t.savePdf}
          </button>
        </div>

        {/* Resume card */}
        <div
          ref={resumeRef}
          className="resume-card bg-white max-w-5xl mx-auto rounded-xl border border-gray-200 overflow-hidden shadow-sm"
        >

          {/* Header */}
          <div className="px-10 pt-10 pb-8 border-b border-gray-100">
            <div className="flex items-start gap-7 mb-7">
              {/* Avatar placeholder */}
              <div className="flex-shrink-0 w-28 h-36 rounded-lg border-2 border-gray-100 bg-gray-50 flex items-center justify-center text-2xl font-semibold text-gray-400 overflow-hidden">
                <img
                  src="/photo.jpg"
                  alt={t.name}
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>

              <div className="flex-grow pt-1">
                <h1 className="text-3xl font-bold text-gray-900 mb-1 tracking-tight">{t.name}</h1>
                <p className="text-base text-gray-500 mb-4 font-medium">{t.title}</p>
                <p className="text-sm leading-relaxed text-gray-700 max-w-2xl">{t.about}</p>
              </div>
            </div>

            {/* Contacts */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              <a href="mailto:roman.fedoniuk@gmail.com" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition-colors">
                <Mail size={13} /> roman.fedoniuk@gmail.com
              </a>
              <a href="https://wa.me/380960908006" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition-colors">
                <Phone size={13} /> +380 96 090 8006
              </a>
              <a href="https://t.me/nowayrm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition-colors">
                <Send size={13} /> @nowayrm
              </a>
              <a href="https://www.instagram.com/roma_fedoniukk/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition-colors">
                <Instagram size={13} /> @roma_fedoniukk
              </a>
              <a href="https://www.linkedin.com/in/roman-fedoniuk-10a515175/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition-colors">
                <Linkedin size={13} /> linkedin.com/in/roman-fedoniuk-10a515175
              </a>
              <a href="https://telebots.site/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 text-xs text-gray-500 hover:text-gray-900 transition-colors">
                <Globe size={13} /> telebots.site
              </a>
            </div>
          </div>

          {/* Body */}
          <div className="grid grid-cols-3 divide-x divide-gray-100">

            {/* Left / main column */}
            <div className="col-span-2 px-10 py-8 space-y-10">

              {/* Experience */}
              <section>
                <h3 className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-6 pb-2 border-b border-gray-100">
                  {t.expLabel}
                </h3>
                <div className="space-y-7">
                  {t.jobs.map((job, idx) => (
                    <div key={idx}>
                      <div className="flex items-start justify-between mb-1">
                        <span className="text-sm font-semibold text-gray-900">{job.title}</span>
                        <span className="text-[10px] bg-gray-100 text-gray-500 px-2.5 py-0.5 rounded-full whitespace-nowrap ml-3 mt-0.5">
                          {job.period}
                        </span>
                      </div>
                      <p className="text-xs text-gray-500 mb-3 flex items-center gap-1.5">
                        {job.company}
                        {job.link && (
                          <a
                            href={`https://${job.link}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-gray-800 transition-colors"
                          >
                            <ExternalLink size={10} />
                          </a>
                        )}
                      </p>
                      <ul className="space-y-1.5">
                        {job.points.map((point, i) => (
                          <li key={i} className="text-xs leading-relaxed text-gray-700 pl-3.5 relative before:content-['—'] before:absolute before:left-0 before:text-gray-300">
                            {point}
                          </li>
                        ))}
                      </ul>
                      {idx < t.jobs.length - 1 && <div className="mt-7 border-b border-gray-100" />}
                    </div>
                  ))}
                </div>
              </section>

              {/* Projects */}
              <section>
                <h3 className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-6 pb-2 border-b border-gray-100">
                  {t.projLabel}
                </h3>
                <div className="space-y-4">
                  {t.projectsList.map((project, idx) => (
                    <div key={idx} className="bg-gray-50 rounded-lg px-4 py-3.5">
                      <p className="text-sm font-semibold text-gray-900 mb-1">{project.name}</p>
                      <p className="text-xs leading-relaxed text-gray-600 mb-2">{project.desc}</p>
                      <p className="text-[11px] text-gray-400 italic">{project.tech}</p>
                    </div>
                  ))}
                </div>
              </section>
            </div>

            {/* Right / sidebar */}
            <div className="px-7 py-8 space-y-8">

              {/* Skills */}
              <section>
                <h3 className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-4 pb-2 border-b border-gray-100">
                  {t.skillsLabel}
                </h3>
                <div className="flex flex-wrap gap-1.5">
                  {t.skillsList.map((skill, idx) => (
                    <span
                      key={idx}
                      className="text-[11px] bg-black text-white px-2.5 py-0.5 rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </section>

              {/* Achievements */}
              <section>
                <h3 className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-4 pb-2 border-b border-gray-100">
                  {t.achieveLabel}
                </h3>
                <ul className="space-y-2.5">
                  {t.achievements.map((a, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-xs text-gray-600 leading-relaxed">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-300 flex-shrink-0" />
                      {a}
                    </li>
                  ))}
                </ul>
              </section>

              {/* Languages */}
              <section>
                <h3 className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-4 pb-2 border-b border-gray-100">
                  {t.langsLabel}
                </h3>
                <div className="space-y-2">
                  {t.langs.map((l, idx) => (
                    <div key={idx} className="flex justify-between items-center">
                      <span className="text-xs text-gray-700">{l.name}</span>
                      <span className="text-[10px] bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full">{l.level}</span>
                    </div>
                  ))}
                </div>
              </section>

              {/* Education */}
              <section>
                <h3 className="text-[10px] font-semibold uppercase tracking-widest text-gray-400 mb-4 pb-2 border-b border-gray-100">
                  {t.eduLabel}
                </h3>
                <div className="bg-gray-50 rounded-lg px-4 py-3.5">
                  <p className="text-xs font-semibold text-gray-800 mb-1 leading-snug">{t.degree}</p>
                  <p className="text-[11px] text-gray-500 mb-2">{t.faculty}</p>
                  <span className="text-[10px] bg-white border border-gray-200 text-gray-500 px-2 py-0.5 rounded-full">
                    {t.eduPeriod}
                  </span>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;