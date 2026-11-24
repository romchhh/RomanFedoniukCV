import { Link } from 'react-router-dom';
import { Briefcase, Code2, ArrowRight } from 'lucide-react';

const cards = [
  {
    to: '/pm',
    icon: Briefcase,
    title: 'Product / Project Manager',
    desc: 'CV для ролі Product / Project Manager: досвід, discovery, delivery, кейси та soft skills.',
    badge: 'PM',
  },
  {
    to: '/fullstack',
    icon: Code2,
    title: 'Fullstack Developer',
    desc: 'CV для fullstack-розробника: стек, інтеграції, боти, вебпродукти та technical кейси.',
    badge: 'Dev',
  },
];

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 via-gray-50 to-white px-4 py-10 sm:px-6 md:px-10">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10 sm:mb-14">
          <div className="mx-auto mb-5 w-28 h-36 sm:w-32 sm:h-40 rounded-2xl overflow-hidden border border-gray-200 shadow-sm bg-gray-50">
            <img
              src="/photo.jpg"
              alt="Роман Федонюк"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight mb-2">
            Роман Федонюк
          </h1>
          <p className="text-base sm:text-lg text-gray-500 max-w-xl mx-auto">
            Обери версію CV — Product Manager або Fullstack Developer
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <Link
                key={card.to}
                to={card.to}
                className="group rounded-2xl border border-gray-200 bg-white p-6 sm:p-7 shadow-[0_10px_40px_rgba(15,23,42,0.06)] hover:border-gray-900 hover:shadow-[0_14px_44px_rgba(15,23,42,0.1)] transition-all"
              >
                <div className="flex items-start justify-between gap-3 mb-5">
                  <span className="inline-flex items-center justify-center w-11 h-11 rounded-xl bg-gray-900 text-white">
                    <Icon size={20} strokeWidth={2.1} />
                  </span>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 bg-gray-50 border border-gray-100 px-2.5 py-1 rounded-full">
                    {card.badge}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2 leading-snug">
                  {card.title}
                </h2>
                <p className="text-sm leading-relaxed text-gray-500 mb-5">
                  {card.desc}
                </p>
                <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-900">
                  Відкрити CV
                  <ArrowRight
                    size={16}
                    className="transition-transform group-hover:translate-x-0.5"
                  />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
