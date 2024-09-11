import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nowHiring: "Now Hiring:",
      jobPosition:
        "Are you driven and motivated? 1st Line IT Support Engineer?",
      aboutUs: "About Us",
      services: "Services",
      whyUs: "Why Us",
      portfolio: "Portfolio",
      testimonials: "Testimonials",
      blog: "Team",
      hotline: "hotline 24/7",
      callNow: "Call Now:",
      freeQuote: "Free Quote",
      itagency: "Dasuty agency",
      technology: "Technology & IT",
      solution: "Solutions",
      about:
        "We transform businesses of most major sectors with powerful and adaptable digital solutions that satisfy the needs of today.",
      servicess: "Our Services",
      showreal: "Dasuty's Showreels",
      quote:
        "Technology is best when it brings people together. - Patricia Cross",
      help: "We can help to maintain and modernize your IT infrastructure & solve various infrastructure-specific issues a business may face.",
      partner:
        "Dasuty Co is the partner of choice for many of the world’s leading enterprises, SMEs, and technology challengers. We help businesses elevate their value through custom software development, product design, QA, and consultancy services.",
      experience: "20 Years of Experience",
      projects: "15K Projects completed",
      awards: "240 Awards achieved",
      clients: "180 Satisfied clients in 24 countries",
      ourServices: "Perfect IT Solutions For Your Business",
      service_01: "IT Consultation",
      service_01_desc:
        "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
      service_01_details: "Strategy | Consultation | Management",
      service_02: "Robotics",
      service_02_desc:
        "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
      service_02_details: "Management | Backup & Recovery | Transfer",
      service_03: "Website Development",
      service_03_desc:
        "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
      service_03_details: "Ecommerce | Landing Page | CMS | Plugin",
      service_04: "UI/UX Design",
      service_04_desc:
        "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
      service_04_details: "Website | Mobile App",
      service_05: "Cloud Services",
      service_05_desc:
        "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
      service_05_details: "Cloud Storage | Hosting & VPS",
      service_06: "Game Development",
      service_06_desc:
        "Trust our top minds to eliminate workflow pain points, implement new tech & app.",
      service_06_details: "Unity 2D/3D | VR/AR | iOS & Android | HTC Vive",
      whyChooseUs: "Why choose us",
      boostBusiness: "Boost Your Business With New Tech",
      assistBusiness:
        "Our team can assist you in transforming your business through latest tech capabilities to stay ahead of the curve.",
      latestSolutions: "Latest IT Solutions & Integration With Blockchain",
      paymentGateways: "Over 100+ Payment Gateways Support",
      aiLearning: "AI Machine & Deep Learning",
      support: "Dedicated Support 24/7",
    },
  },
  ru: {
    translation: {
      nowHiring: "Идет набор:",
      jobPosition: "Вы целеустремлены и мотивированы? Инженер IT-поддержки?",
      aboutUs: "О нас",
      services: "Услуги",
      whyUs: "Почему мы",
      portfolio: "Портфолио",
      testimonials: "Отзывы",
      blog: "Блог",
      hotline: "горячая линия 24/7",
      callNow: "Позвоните сейчас:",
      freeQuote: "Бесплатная консультация",
      itagency: "Дасутй агентство",
      technology: "Технологии и ИТ",
      solution: "Решения",
      about:
        "Мы трансформируем бизнес большинства основных секторов с помощью мощных и адаптируемых цифровых решений, которые отвечают потребностям сегодняшнего дня.",
      servicess: "Наши услуги",
      showreal: "Дасутй Шоурилс",
      quote:
        "Технология лучше всего, когда она объединяет людей. - Патрисия Кросс",
      help: "Мы можем помочь поддерживать и модернизировать вашу ИТ-инфраструктуру и решать различные инфраструктурные проблемы, с которыми может столкнуться бизнес.",
      partner:
        "Дасутй Co - это партнер выбора для многих ведущих мировых предприятий, малых и средних предприятий, а также технологических новаторов. Мы помогаем компаниям повышать их ценность с помощью разработки индивидуального программного обеспечения, дизайна продуктов, QA и консультационных услуг.",
      experience: "20 лет опыта",
      projects: "15K завершенных проектов",
      awards: "240 наград",
      clients: "180 довольных клиентов в 24 странах",
      ourServices: "Идеальные ИТ-решения для вашего бизнеса",
      service_01: "ИТ-консультация",
      service_01_desc:
        "Доверьтесь нашим лучшим умам, чтобы устранить проблемы рабочего процесса, внедрить новые технологии и приложения.",
      service_01_details: "Стратегия | Консультация | Управление",
      service_02: "Безопасность данных",
      service_02_desc:
        "Доверьтесь нашим лучшим умам, чтобы устранить проблемы рабочего процесса, внедрить новые технологии и приложения.",
      service_02_details:
        "Управление | Резервное копирование и восстановление | Передача данных",
      service_03: "Разработка веб-сайтов",
      service_03_desc:
        "Доверьтесь нашим лучшим умам, чтобы устранить проблемы рабочего процесса, внедрить новые технологии и приложения.",
      service_03_details: "Электронная торговля | Лендинг | CMS | Плагины",
      service_04: "UI/UX дизайн",
      service_04_desc:
        "Доверьтесь нашим лучшим умам, чтобы устранить проблемы рабочего процесса, внедрить новые технологии и приложения.",
      service_04_details: "Вебсайты | Мобильные приложения",
      service_05: "Облачные сервисы",
      service_05_desc:
        "Доверьтесь нашим лучшим умам, чтобы устранить проблемы рабочего процесса, внедрить новые технологии и приложения.",
      service_05_details: "Облачное хранилище | Хостинг и VPS",
      service_06: "Разработка игр",
      service_06_desc:
        "Доверьтесь нашим лучшим умам, чтобы устранить проблемы рабочего процесса, внедрить новые технологии и приложения.",
      service_06_details: "Unity 2D/3D | VR/AR | iOS & Android | HTC Vive",
      whyChooseUs: "Почему выбирают нас",
      boostBusiness: "Ускорьте свой бизнес с помощью новых технологий",
      assistBusiness:
        "Наша команда может помочь вам преобразовать ваш бизнес с помощью новейших технологий, чтобы оставаться впереди.",
      latestSolutions: "Последние IT-решения и интеграция с блокчейном",
      paymentGateways: "Поддержка более 100+ платежных шлюзов",
      aiLearning: "ИИ Машинное обучение и глубокое обучение",
      support: "Круглосуточная поддержка 24/7",
    },
  },
  uz: {
    translation: {
      nowHiring: "Ishga yollash:",
      jobPosition:
        "Siz maqsadga intilgan va motivatsiyangiz bormi? Birinchi liniya IT yordami muhandisi?",
      aboutUs: "Biz haqimizda",
      services: "Xizmatlar",
      whyUs: "Nega biz?",
      portfolio: "Portfel",
      testimonials: "Sharhlar",
      blog: "Blog",
      hotline: "24/7 issiq chiziq",
      callNow: "Hozir qo'ng'iroq qiling:",
      freeQuote: "Bepul taklif",
      itagency: "Dasuty tashkilot",
      technology: "Texnologiya va IT",
      solution: "Yechimlar",
      about:
        "Biz bugungi kun ehtiyojlarini qondiradigan kuchli va moslashuvchan raqamli echimlar bilan ko'pgina yirik sektorlar biznesini o'zgartiramiz.",
      servicess: "Bizning xizmatlarimiz",
      showreal: "Dasutyning Showreels",
      quote:
        "Texnologiya odamlarni birlashtirganida eng yaxshi bo'ladi. - Patritsiya Kross",
      help: "Biz sizning IT infratuzilmalaringizni saqlash va modernizatsiya qilishda hamda biznesingiz duch keladigan infratuzilmaga oid muammolarni hal qilishda yordam bera olamiz.",
      partner:
        "Iteck Co dunyoning yetakchi korxonalari, KOS va texnologiya muammolarini hal qiluvchilar uchun tanlangan hamkor. Biz maxsus dasturiy ta'minotni ishlab chiqish, mahsulot dizayni, QA va konsalting xizmatlari orqali korxonalar qiymatini oshirishga yordam beramiz.",
      experience: "20 yillik tajriba",
      projects: "15K yakunlangan loyiha",
      awards: "240 ta mukofot",
      clients: "24 mamlakatdagi 180 mamnun mijoz",
      ourServices: "Biznesingiz uchun mukammal IT yechimlari",
      service_01: "IT maslahat",
      service_01_desc:
        "Bizning yetakchi mutaxassislarimizga ishoning, ular ish jarayonidagi muammolarni bartaraf etadi va yangi texnologiya va ilovalarni joriy etadi.",
      service_01_details: "Strategiya | Konsalting | Boshqaruv",
      service_02: "Ma'lumotlar xavfsizligi",
      service_02_desc:
        "Bizning yetakchi mutaxassislarimizga ishoning, ular ish jarayonidagi muammolarni bartaraf etadi va yangi texnologiya va ilovalarni joriy etadi.",
      service_02_details: "Boshqaruv | Zaxiralash va qayta tiklash | Transfer",
      service_03: "Veb-sayt ishlab chiqish",
      service_03_desc:
        "Bizning yetakchi mutaxassislarimizga ishoning, ular ish jarayonidagi muammolarni bartaraf etadi va yangi texnologiya va ilovalarni joriy etadi.",
      service_03_details: "Elektron tijorat | Qo'nish sahifasi | CMS | Plagin",
      service_04: "UI/UX dizayni",
      service_04_desc:
        "Bizning yetakchi mutaxassislarimizga ishoning, ular ish jarayonidagi muammolarni bartaraf etadi va yangi texnologiya va ilovalarni joriy etadi.",
      service_04_details: "Veb-saytlar | Mobil ilovalar",
      service_05: "Bulutli xizmatlar",
      service_05_desc:
        "Bizning yetakchi mutaxassislarimizga ishoning, ular ish jarayonidagi muammolarni bartaraf etadi va yangi texnologiya va ilovalarni joriy etadi.",
      service_05_details: "Bulutli saqlash | Xosting va VPS",
      service_06: "O'yin ishlab chiqish",
      service_06_desc:
        "Bizning yetakchi mutaxassislarimizga ishoning, ular ish jarayonidagi muammolarni bartaraf etadi va yangi texnologiya va ilovalarni joriy etadi.",
      service_06_details: "Unity 2D/3D | VR/AR | iOS va Android | HTC Vive",
      whyChooseUs: "Nega bizni tanlashadi",
      boostBusiness: "Biznesingizni yangi texnologiyalar bilan rivojlantiring",
      assistBusiness:
        "Jamoamiz sizning biznesingizni zamonaviy texnologiyalar yordamida o'zgartirishingizga yordam berishi mumkin, raqobatda oldinda bo'ling.",
      latestSolutions:
        "Eng yangi IT yechimlari va blokcheyn bilan integratsiya",
      paymentGateways: "100+ to'lov shlyuzlari qo'llab-quvvatlanadi",
      aiLearning: "AI mashina va chuqur o'rganish",
      support: "24/7 kechayu kunduz qo'llab-quvvatlash",
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // default language
  interpolation: {
    escapeValue: false, // React already escapes by default
  },
});

export default i18n;
