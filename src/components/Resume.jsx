import React, { useState } from 'react';
import { Globe, Mail, Phone, Instagram, Send, ExternalLink } from 'lucide-react';

const Resume = () => {
  const [lang, setLang] = useState('ua');
  const [photoUrl, setPhotoUrl] = useState('/photo.jpg');

  const content = {
    ua: {
      name: "Роман Федонюк",
      title: "Product Manager / Project Manager",
      about: "Product Manager з досвідом запуску власного бізнесу та впровадження CRM/ERP систем. Шукаю можливість розвиватися з крутим продуктом, навчатися та приносити користь.",
      experience: "Досвід",
      jobs: [
        {
          title: "Founder & CEO",
          company: "TeleBots",
          link: "telebots.site",
          period: "05/2024 - Зараз",
          points: [
            "Запустив компанію з розробки чат-ботів, сайтів та впровадження CRM",
            "Вивів бізнес у автономний режим з постійним потоком клієнтів",
            "Керую командою розробників та процесами від продажів до delivery"
          ]
        },
        {
          title: "Business Analyst",
          company: "TODO",
          period: "09/2023 - 04/2024",
          points: [
            "Аналізував бізнес-процеси клієнтів та готував технічні завдання",
            "Координував впровадження ERP Odoo (модулі CRM, склад, фінанси, виробництво)",
            "Працював з клієнтами на всіх етапах проєкту від discovery до підтримки"
          ]
        },
        {
          title: "Project Manager",
          company: "Компанія з впровадження CRM",
          period: "01/2023 - 07/2023",
          points: [
            "Керував проєктами впровадження CRM систем",
            "Координував команду розробників та комунікацію з клієнтами",
            "Забезпечував дотримання термінів та бюджетів проєктів"
          ]
        }
      ],
      projects: "Проєкти",
      projectsList: [
        {
          name: "TeleBots Platform",
          desc: "Розробка бізнес чат-ботів для автоматизації продажів та підтримки",
          tech: "Telegram API, Python, CRM інтеграції"
        },
        {
          name: "ERP Odoo Implementation",
          desc: "Впровадження ERP систем для оптимізації бізнес-процесів виробничих компаній",
          tech: "Odoo, Business Process Analysis"
        }
      ],
      education: "Освіта",
      degree: "Бакалавр, КПІ ім. Ігоря Сікорського",
      faculty: "ФІОТ, Спеціальність 123 - Комп'ютерна інженерія",
      eduPeriod: "2021 - Зараз",
      skills: "Ключові навички",
      skillsList: [
        "Product Management",
        "Agile/Scrum",
        "Business Analysis",
        "CRM/ERP Systems",
        "Stakeholder Management",
        "SQL basics",
        "API Integration"
      ],
      languages: "Мови",
      langs: [
        { name: "Українська", level: "Native" },
        { name: "Англійська", level: "B2" },
        { name: "Польська", level: "B1" }
      ],
      contacts: "Контакти"
    },
    en: {
      name: "Roman Fedoniuk",
      title: "Product Manager / Project Manager",
      about: "Product Manager with experience launching my own business and implementing CRM/ERP systems. Looking to grow with an exciting product, learn, and bring value.",
      experience: "Experience",
      jobs: [
        {
          title: "Founder & CEO",
          company: "TeleBots",
          link: "telebots.site",
          period: "05/2024 - Present",
          points: [
            "Launched a company developing chatbots, websites, and implementing CRM systems",
            "Scaled business to autonomous operations with consistent client flow",
            "Managing development team and processes from sales to delivery"
          ]
        },
        {
          title: "Business Analyst",
          company: "TODO",
          period: "09/2023 - 04/2024",
          points: [
            "Analyzed client business processes and prepared technical specifications",
            "Coordinated Odoo ERP implementation (CRM, warehouse, finance, manufacturing modules)",
            "Worked with clients through all project stages from discovery to support"
          ]
        },
        {
          title: "Project Manager",
          company: "CRM Implementation Company",
          period: "01/2023 - 07/2023",
          points: [
            "Managed CRM system implementation projects",
            "Coordinated development teams and client communication",
            "Ensured project deadlines and budgets were met"
          ]
        }
      ],
      projects: "Projects",
      projectsList: [
        {
          name: "TeleBots Platform",
          desc: "Business chatbot development for sales and support automation",
          tech: "Telegram API, Python, CRM integrations"
        },
        {
          name: "ERP Odoo Implementation",
          desc: "ERP system implementation to optimize business processes for manufacturing companies",
          tech: "Odoo, Business Process Analysis"
        }
      ],
      education: "Education",
      degree: "Bachelor's Degree, Igor Sikorsky Kyiv Polytechnic Institute",
      faculty: "IASA, Specialty 123 - Computer Engineering",
      eduPeriod: "2021 - Present",
      skills: "Key Skills",
      skillsList: [
        "Product Management",
        "Agile/Scrum",
        "Business Analysis",
        "CRM/ERP Systems",
        "Stakeholder Management",
        "SQL basics",
        "API Integration"
      ],
      languages: "Languages",
      langs: [
        { name: "Ukrainian", level: "Native" },
        { name: "English", level: "B2" },
        { name: "Polish", level: "B1" }
      ],
      contacts: "Contacts"
    },
    pl: {
      name: "Roman Fedoniuk",
      title: "Product Manager / Project Manager",
      about: "Product Manager z doświadczeniem w uruchamianiu własnego biznesu i wdrażaniu systemów CRM/ERP. Szukam możliwości rozwoju z ekscytującym produktem, nauki i wnoszenia wartości.",
      experience: "Doświadczenie",
      jobs: [
        {
          title: "Założyciel i CEO",
          company: "TeleBots",
          link: "telebots.site",
          period: "05/2024 - Obecnie",
          points: [
            "Uruchomiłem firmę tworzącą chatboty, strony internetowe i wdrażającą systemy CRM",
            "Przeskalowałem biznes do trybu autonomicznego ze stałym przepływem klientów",
            "Zarządzam zespołem deweloperów i procesami od sprzedaży do dostawy"
          ]
        },
        {
          title: "Analityk Biznesowy",
          company: "TODO",
          period: "09/2023 - 04/2024",
          points: [
            "Analizowałem procesy biznesowe klientów i przygotowywałem specyfikacje techniczne",
            "Koordynowałem wdrożenie ERP Odoo (moduły CRM, magazyn, finanse, produkcja)",
            "Pracowałem z klientami na wszystkich etapach projektu od discovery do wsparcia"
          ]
        },
        {
          title: "Project Manager",
          company: "Firma wdrażająca CRM",
          period: "01/2023 - 07/2023",
          points: [
            "Zarządzałem projektami wdrożenia systemów CRM",
            "Koordynowałem zespoły deweloperskie i komunikację z klientami",
            "Zapewniałem dotrzymanie terminów i budżetów projektów"
          ]
        }
      ],
      projects: "Projekty",
      projectsList: [
        {
          name: "TeleBots Platform",
          desc: "Rozwój biznesowych chatbotów do automatyzacji sprzedaży i wsparcia",
          tech: "Telegram API, Python, integracje CRM"
        },
        {
          name: "Wdrożenie ERP Odoo",
          desc: "Wdrażanie systemów ERP w celu optymalizacji procesów biznesowych firm produkcyjnych",
          tech: "Odoo, Business Process Analysis"
        }
      ],
      education: "Wykształcenie",
      degree: "Licencjat, Politechnika Kijowska im. Igora Sikorskiego",
      faculty: "IASA, Specjalność 123 - Inżynieria Komputerowa",
      eduPeriod: "2021 - Obecnie",
      skills: "Kluczowe umiejętności",
      skillsList: [
        "Product Management",
        "Agile/Scrum",
        "Business Analysis",
        "CRM/ERP Systems",
        "Stakeholder Management",
        "SQL basics",
        "API Integration"
      ],
      languages: "Języki",
      langs: [
        { name: "Ukraiński", level: "Native" },
        { name: "Angielski", level: "B2" },
        { name: "Polski", level: "B1" }
      ],
      contacts: "Kontakt"
    }
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-white text-black p-8">
      <div className="max-w-4xl mx-auto">
        {/* Language Selector */}
        <div className="flex justify-end gap-2 mb-8">
          <button
            onClick={() => setLang('ua')}
            className={`px-4 py-2 rounded border-2 transition-all duration-200 hover:scale-105 ${
              lang === 'ua' ? 'bg-black text-white border-black' : 'bg-white text-black border-black hover:bg-gray-50 hover:shadow-md'
            }`}
          >
            UA
          </button>
          <button
            onClick={() => setLang('en')}
            className={`px-4 py-2 rounded border-2 transition-all duration-200 hover:scale-105 ${
              lang === 'en' ? 'bg-black text-white border-black' : 'bg-white text-black border-black hover:bg-gray-50 hover:shadow-md'
            }`}
          >
            EN
          </button>
          <button
            onClick={() => setLang('pl')}
            className={`px-4 py-2 rounded border-2 transition-all duration-200 hover:scale-105 ${
              lang === 'pl' ? 'bg-black text-white border-black' : 'bg-white text-black border-black hover:bg-gray-50 hover:shadow-md'
            }`}
          >
            PL
          </button>
        </div>

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start gap-8 mb-6">
            <div className="flex-shrink-0">
              {photoUrl ? (
                <img src={photoUrl} alt="Roman Fedoniuk" className="w-32 h-40 rounded-lg object-cover border-2 border-black transition-all duration-300 hover:scale-105 hover:shadow-lg" />
              ) : (
                <div className="w-32 h-40 bg-gray-100 border-2 border-black rounded-lg flex items-center justify-center transition-all duration-300 hover:scale-105 hover:shadow-lg">
                  <input
                    type="text"
                    placeholder="Photo URL"
                    value={photoUrl}
                    onChange={(e) => setPhotoUrl(e.target.value)}
                    className="w-full h-full text-center text-xs p-2 bg-transparent rounded-lg"
                  />
                </div>
              )}
            </div>
            <div className="flex-grow">
              <h1 className="text-4xl font-bold mb-1">{t.name}</h1>
              <h2 className="text-xl mb-4 text-gray-600">{t.title}</h2>
              <p className="text-base leading-relaxed max-w-2xl">{t.about}</p>
            </div>
          </div>

          {/* Contacts */}
          <div className="flex flex-wrap gap-4 text-sm border-t-2 border-black pt-6">
            <a href="mailto:roman.fedoniuk@gmail.com" className="flex items-center gap-1 hover:underline transition-all duration-200 hover:text-blue-600 hover:scale-105">
              <Mail size={16} />
              roman.fedoniuk@gmail.com
            </a>
            <a href="https://wa.me/380960908006" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline transition-all duration-200 hover:text-green-600 hover:scale-105">
              <Phone size={16} />
              +380 96 090 8006
            </a>
            <a href="https://t.me/nowayrm" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline transition-all duration-200 hover:text-blue-500 hover:scale-105">
              <Send size={16} />
              @nowayrm
            </a>
            <a href="https://www.instagram.com/roma_fedoniukk/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline transition-all duration-200 hover:text-pink-600 hover:scale-105">
              <Instagram size={16} />
              @roma_fedoniukk
            </a>
            <a href="https://telebots.site/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:underline transition-all duration-200 hover:text-purple-600 hover:scale-105">
              <Globe size={16} />
              telebots.site
            </a>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-12">
          {/* Left Column */}
          <div className="col-span-2 space-y-10">
            {/* Experience */}
            <section>
              <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-black">{t.experience}</h3>
              <div className="space-y-8">
                {t.jobs.map((job, idx) => (
                  <div key={idx} className="transition-all duration-200 hover:bg-gray-50 p-4 rounded-lg hover:shadow-sm">
                    <div className="mb-3">
                      <div className="flex items-start justify-between mb-1">
                        <h4 className="text-lg font-bold transition-colors duration-200 hover:text-gray-800">{job.title}</h4>
                        <span className="text-xs bg-black text-white px-2 py-1 rounded whitespace-nowrap ml-2 transition-all duration-200 hover:bg-gray-800">{job.period}</span>
                      </div>
                      <p className="text-base font-medium text-gray-700">
                        {job.company}
                        {job.link && (
                          <a href={`https://${job.link}`} target="_blank" rel="noopener noreferrer" className="ml-2 text-xs hover:underline transition-all duration-200 hover:text-blue-600 hover:scale-110">
                            <ExternalLink size={12} className="inline" />
                          </a>
                        )}
                      </p>
                    </div>
                    <ul className="space-y-2">
                      {job.points.map((point, i) => (
                        <li key={i} className="text-sm leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 transition-colors duration-200 hover:text-gray-800">
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            {/* Projects */}
            <section>
              <h3 className="text-xl font-bold mb-6 pb-2 border-b-2 border-black">{t.projects}</h3>
              <div className="space-y-6">
                {t.projectsList.map((project, idx) => (
                  <div key={idx} className="transition-all duration-200 hover:bg-gray-50 p-4 rounded-lg hover:shadow-sm">
                    <h4 className="text-base font-bold mb-1 transition-colors duration-200 hover:text-gray-800">{project.name}</h4>
                    <p className="text-sm mb-2 leading-relaxed transition-colors duration-200 hover:text-gray-700">{project.desc}</p>
                    <p className="text-xs text-gray-600 transition-colors duration-200 hover:text-gray-500">{project.tech}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            {/* Skills */}
            <section>
              <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-black">{t.skills}</h3>
              <div className="flex flex-wrap gap-2">
                {t.skillsList.map((skill, idx) => (
                  <span key={idx} className="text-xs bg-black text-white px-3 py-1 rounded transition-all duration-200 hover:bg-gray-800 hover:scale-105 hover:shadow-md cursor-default">
                    {skill}
                  </span>
                ))}
              </div>
            </section>

            {/* Languages */}
            <section>
              <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-black">{t.languages}</h3>
              <div className="space-y-2">
                {t.langs.map((l, idx) => (
                  <div key={idx} className="flex justify-between items-center text-sm transition-all duration-200 hover:bg-gray-50 p-2 rounded hover:shadow-sm">
                    <span className="font-medium transition-colors duration-200 hover:text-gray-800">{l.name}</span>
                    <span className="text-xs bg-black text-white px-2 py-1 rounded transition-all duration-200 hover:bg-gray-800 hover:scale-105">{l.level}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h3 className="text-lg font-bold mb-4 pb-2 border-b-2 border-black">{t.education}</h3>
              <div className="transition-all duration-200 hover:bg-gray-50 p-4 rounded-lg hover:shadow-sm">
                <h4 className="text-sm font-bold mb-1 transition-colors duration-200 hover:text-gray-800">{t.degree}</h4>
                <p className="text-xs text-gray-700 mb-2 transition-colors duration-200 hover:text-gray-600">{t.faculty}</p>
                <span className="text-xs bg-black text-white px-2 py-1 rounded transition-all duration-200 hover:bg-gray-800 hover:scale-105">{t.eduPeriod}</span>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
