/* ============================================================
   ВСЁ СОДЕРЖИМОЕ САЙТА ЖИВЁТ ЗДЕСЬ.
   Меняй только текст в кавычках — вёрстку трогать не нужно.

   Структура: SITE.ru — русская версия, SITE.en — английская.
   Обе должны иметь одинаковый набор полей.
   ============================================================ */

const SITE = {
  /* Два акцентных цвета — на их паре построены все градиенты сайта.
     Меняются в одном месте, перекрашивается всё.
     Оба должны быть достаточно тёмными: на них лежит белый текст.
     Примеры пар: '#3452d9' + '#0e7490' (синий и бирюзовый)
                  '#7c3aed' + '#be185d' (фиолетовый и малиновый)
                  '#0f766e' + '#4d7c0f' (изумрудный и оливковый) */
  accent: '#3452d9',
  accent2: '#0e7490',

  /* Фотография рядом с именем. Положи файл в папку с сайтом.
     Файла нет — покажется кружок с инициалами. '' — фото не нужно. */
  photo: 'photo.jpg',

  /* Контакты — одинаковые для обоих языков.
     Пустая строка '' = плитка не показывается. */
  links: {
    email: 'byalexei@gmail.com',
    telegram: 'https://t.me/avbychkov',
    phone: '+7 903 527-20-60',
    whatsapp: '+998 90 828-21-89',
    linkedin: '',                     // например 'https://linkedin.com/in/...'
    website: 'https://gradex.uz'      // сайт консалтинговой практики
  },

  /* ---------------------------------------------------------
     РУССКАЯ ВЕРСИЯ
     --------------------------------------------------------- */
  ru: {
    meta: {
      title: 'Алексей Бычков — HR-директор',
      description: 'HR-директор с 16-летним опытом. Построение HR-функции с нуля, грейдинг и C&B, оценка персонала, performance management, HR при M&A.'
    },

    nav: {
      about: 'Обо мне',
      experience: 'Опыт',
      services: 'Услуги',
      contact: 'Контакты'
    },

    hero: {
      name: 'Алексей Бычков',
      role: 'Директор по персоналу (HRD)',
      tagline: 'Строю HR-функцию с нуля и привожу в порядок ту, что уже есть: грейды и вознаграждение, оценка, performance management, подбор. 16 лет в профессии, из них 5+ на позиции HR-директора.',
      location: 'Вьетнам (GMT+7) · удалённо · готов к переезду и командировкам',
      status: 'Открыт к новым ролям и проектам',
      ctaPrimary: 'Связаться',
      ctaSecondary: 'Скачать резюме (PDF)',
      cvFile: 'files/cv-ru.pdf',              // '' — кнопка откроет печать браузера
      cvName: 'Бычков_Алексей_CV.pdf'         // имя файла при скачивании
    },

    about: {
      heading: 'Обо мне',
      paragraphs: [
        '16 лет в HR: пять с лишним лет — директором по персоналу, ещё пять — HR бизнес-партнёром. Дважды строил HR-функцию с нуля в новых бизнесах и в условиях ограниченных ресурсов — от первого рекрутёра до полного контура: подбор, C&B, грейдинг, оценка, обучение, коммуникации, кадровое администрирование.',
        'Сопровождал сделки M&A и запуск совместных предприятий, управлял международными командами в России, СНГ и Европе, включая сеть из 14 зарубежных офисов. Сейчас — партнёр в HR-консалтинговой практике полного цикла Gradex, в арсенале которой собственная AI-платформа грейдирования должностей.',
        'В HR-функции ценю сервисность и технологичность. Ищу роль HR-лидера с широкой зоной ответственности и соответствующим масштабом полномочий.'
      ],
      facts: [
        { value: '16 лет',  label: 'в профессии' },
        { value: '5+ лет',  label: 'на позиции HRD' },
        { value: '~10',     label: 'сделок M&A и СП' },
        { value: '14',      label: 'офисов в международной сети' }
      ],
      skillsHeading: 'Ключевые компетенции',
      skills: [
        'Организационное развитие',
        'Грейдинг и C&B',
        'M&A и интеграция бизнесов',
        'HR Tech и AI в HR',
        'Performance management (KPI / OKR)',
        'Рекрутмент и прямой поиск',
        'Модель компетенций и оценка',
        'Кадровый резерв',
        'Внутренние коммуникации и HR-бренд',
        'HR-аналитика',
        'Английский — C1'
      ],
      toolsHeading: 'Инструменты',
      tools: ['1С «Управление предприятием»', 'E-Staff', 'Experium', 'Huntflow', 'SHL Tools', 'Asana', 'Jira', 'MS Project', 'Visio', 'AI-инструменты']
    },

    experience: {
      heading: 'Опыт работы — 16 лет',
      items: [
        {
          period: 'ноябрь 2025 — сейчас',
          company: 'Gradex · Ташкент (удалённо)',
          role: 'Партнёр',
          points: [
            'HR-консалтинг полного цикла: оргразвитие и оргдизайн, подбор, модель компетенций, оценка и грейдинг должностей, HR-бренд и внутренние коммуникации.',
            'Диагностика HR-задач клиента и подбор решений под конкретный бизнес-контекст — от постановки задачи до внедрения.',
            'В арсенале практики — собственная AI-платформа автоматизированного грейдирования, применяемая на клиентских проектах.'
          ]
        },
        {
          period: 'январь 2023 — октябрь 2025',
          company: 'HR Baraka Group · Ташкент',
          role: 'Директор по управлению персоналом и организационному развитию',
          points: [
            'Департамент 25+ человек и 7 функций в центре HR-компетенций холдинга, обслуживающего компании с ~20% экономики Узбекистана.',
            'Внедрил систему грейдов должностей, модель компетенций и профили должностей, выстроил систему оценочных мероприятий.',
            'Реализовал управление деятельностью на базе KPI / OKR и полный комплект локальных нормативных актов.',
            'С командой реализовал более 20 коммерчески успешных внешних проектов: подбор, грейдирование, performance management, оценка, тренинги.',
            'Запустил программу стажировок и «Обмен опытом», расширил каталог внутренних тренингов, открыл новые каналы коммуникаций.'
          ]
        },
        {
          period: 'август 2021 — январь 2023',
          company: 'Русатом — Международная Сеть (ГК «Росатом») · Москва',
          role: 'Директор по персоналу',
          points: [
            'HR, внутренние коммуникации и деловой туризм в компании глобального присутствия Росатома: штаб-квартира в Москве и 14 зарубежных офисов.',
            'Оперативно обновил российскую и международную команды под новые вызовы бизнеса; собрал компактную HR-команду с высокой оценкой сервиса внутренними заказчиками.',
            'Внедрил прозрачный ассессмент кандидатов на основе модели компетенций и профилей должностей.',
            'Цифровизировал документооборот и HR-процессы: кадровые перемещения, ежегодная оценка, подбор, командирование, адаптация.'
          ]
        },
        {
          period: 'сентябрь 2016 — август 2021',
          company: 'Р-Фарм · Москва',
          role: 'HR бизнес-партнёр',
          points: [
            'Лидировал HR-интеграцию новых бизнесов в периметр группы — около 10 сделок, включая Canon Medical Systems и Albiogen.',
            'Участник рабочей группы по транзитному периоду в сделке по продаже части бизнеса миноритарному акционеру (Mitsui).',
            'Имплементировал performance management и управление преемственностью на ключевые позиции; проводил внутренние тренинги.',
            'C&B: организационное планирование и бюджетирование расходов на персонал, актуализация грейдов, гибкие льготы.'
          ]
        },
        {
          period: 'сентябрь 2015 — октябрь 2016',
          company: 'Р-Фарм · Москва',
          role: 'Руководитель отдела подбора персонала',
          points: [
            'Управлял распределённой командой ~10 рекрутеров (РФ, СНГ, Германия): методология, развитие компетенций, бюджет.',
            'Международный поиск старшего и высшего менеджмента; трансформация репортинга и внедрение современных метрик функции.'
          ]
        },
        {
          period: '2010 — 2015',
          company: 'Финвал · Р-Фарм · Skagen · Элгад-ЗСИ',
          role: 'Ранний опыт: рекрутмент и адаптация',
          points: [
            'Полный цикл подбора всех уровней, модель компетенций, welcome-тренинги, диагностические методики, ассессмент-центры для кадрового резерва, массовый рекрутмент.'
          ]
        }
      ]
    },

    education: {
      heading: 'Образование',
      items: [
        {
          period: '2011',
          place: 'Московский педагогический государственный университет',
          detail: 'Факультет педагогики и психологии: педагогика, психолого-педагогическое консультирование'
        }
      ],
      coursesHeading: 'Курсы и сертификаты',
      courses: [
        'AI Fluency: Framework & Foundations (Anthropic, 2025)',
        'AI Fluency for Educators (Anthropic, 2025)',
        'Английский C1 Advanced (Skyeng, 2024)',
        'Vision Zero: безопасный и здоровьесберегающий менеджмент (Экостандарт, 2018)',
        'Оценка методом Assessment Center (Moscow Business School, 2013)',
        'Управление рекрутментом и хэдхантинг (SRC, 2013)'
      ]
    },

    services: {
      heading: 'Услуги',
      intro: 'Консультирую компании по HR — самостоятельно и в составе практики Gradex. Если задача не подходит ни под один пункт, напишите: скорее всего, обсудим.',
      items: [
        {
          title: 'HR-функция с нуля',
          desc: 'Собираю HR с чистого листа или пересобираю то, что уже есть. Дважды делал это изнутри компаний — теперь как консультант.',
          bullets: ['Аудит текущего состояния', 'Дорожная карта и оргдизайн', 'Локальные нормативные акты', 'Наём и запуск HR-команды'],
          price: 'Проект от 2 месяцев'
        },
        {
          title: 'Грейдинг и вознаграждение',
          desc: 'Прозрачная система должностей и оплаты труда: понятно, за что человек получает деньги и что нужно, чтобы получать больше.',
          bullets: ['Описание и оценка должностей', 'Грейды и вилки окладов', 'Политика премирования и льгот', 'AI-платформа автоматизированного грейдирования'],
          price: 'Проект 4–8 недель'
        },
        {
          title: 'Модель компетенций и оценка',
          desc: 'Единый язык требований к людям — и инструменты, которыми эти требования измеряются.',
          bullets: ['Профили должностей', 'Ассессмент-центры', 'Интервью по компетенциям', 'Кадровый резерв и преемственность'],
          price: 'Проект 4–6 недель'
        },
        {
          title: 'Performance management',
          desc: 'Система целей и оценки результата на базе KPI или OKR — вместе с обучением руководителей, без которого она не взлетает.',
          bullets: ['Каскадирование целей', 'Регламент и цикл оценки', 'Связка с вознаграждением', 'Обучение руководителей'],
          price: 'Проект 4–8 недель'
        },
        {
          title: 'HR при M&A и интеграции',
          desc: 'Сопровождение сделок и объединения команд. Около 10 сделок за плечами, включая международные.',
          bullets: ['Due diligence по персоналу', 'План интеграции команд', 'Гармонизация систем оплаты', 'Удержание ключевых людей'],
          price: 'По итогам диагностики'
        },
        {
          title: 'Подбор и прямой поиск',
          desc: 'Закрытие ключевых позиций и настройка подбора как процесса, а не как аврала.',
          bullets: ['Executive search', 'Международный поиск', 'Настройка воронки и метрик', 'Развитие команды рекрутеров'],
          price: 'По итогам диагностики'
        }
      ],
      note: 'Точная стоимость зависит от масштаба компании и объёма работ. Первая встреча — бесплатно.'
    },

    contact: {
      heading: 'Связаться',
      text: 'Напишите пару слов о задаче — отвечу в течение дня. Предпочтительный способ связи — почта.',
      emailLabel: 'Почта',
      telegramLabel: 'Telegram',
      phoneLabel: 'Телефон',
      whatsappLabel: 'WhatsApp',
      websiteLabel: 'Практика',
      button: 'Написать письмо'
    },

    footer: 'Сделано своими руками',
    langButton: 'EN'
  },

  /* ---------------------------------------------------------
     АНГЛИЙСКАЯ ВЕРСИЯ
     --------------------------------------------------------- */
  en: {
    meta: {
      title: 'Alexey Bychkov — HR Director',
      description: 'HR Director with 16 years of experience. Building the HR function from scratch, job grading and C&B, assessment, performance management, HR in M&A.'
    },

    nav: {
      about: 'About',
      experience: 'Experience',
      services: 'Services',
      contact: 'Contact'
    },

    hero: {
      name: 'Alexey Bychkov',
      role: 'HR Director · People & Culture Leader',
      tagline: 'I build the HR function from the ground up — and fix the one you already have: grading and rewards, assessment, performance management, recruitment. 16 years in the profession, 5+ of them as HR Director.',
      location: 'Based in Vietnam (GMT+7) · remote · open to relocation and travel',
      status: 'Open to new roles and projects',
      ctaPrimary: 'Get in touch',
      ctaSecondary: 'Download CV (PDF)',
      cvFile: 'files/cv-en.pdf',
      cvName: 'Alexey_Bychkov_CV.pdf'
    },

    about: {
      heading: 'About me',
      paragraphs: [
        '16 years in HR: over five of them as HR Director, another five as HR Business Partner. Twice built the HR function from scratch in new businesses with limited resources — from the first recruiter to a full-scope function: recruitment, C&B, job grading, assessment, learning and development, communications, HR administration.',
        'Supported M&A deals and joint venture launches, managed international teams across Russia, CIS and Europe, including a network of 14 offices worldwide. Currently a partner at Gradex, a full-cycle HR consulting practice with a proprietary AI-powered job grading platform in its toolkit.',
        'In the HR function I value a service mindset and a technological edge. Looking for an HR leadership role with a broad scope of responsibility and a matching level of authority.'
      ],
      facts: [
        { value: '16 years', label: 'in the profession' },
        { value: '5+ years', label: 'as HR Director' },
        { value: '~10',      label: 'M&A and JV deals' },
        { value: '14',       label: 'offices in the network' }
      ],
      skillsHeading: 'Core competencies',
      skills: [
        'Organizational Development',
        'Job Grading & C&B',
        'M&A HR Integration',
        'HR Tech & AI in HR',
        'Performance Management (KPI / OKR)',
        'Recruitment & Executive Search',
        'Competency Models & Assessment',
        'Succession Planning',
        'Internal Communications & Employer Branding',
        'HR Analytics',
        'English — C1'
      ],
      toolsHeading: 'Tools',
      tools: ['1C HRM', 'E-Staff', 'Experium', 'Huntflow', 'SHL Tools', 'Asana', 'Jira', 'MS Project', 'Visio', 'AI tools']
    },

    experience: {
      heading: 'Experience — 16 years',
      items: [
        {
          period: 'Nov 2025 — present',
          company: 'Gradex · Tashkent (remote)',
          role: 'Partner',
          points: [
            'Full-cycle HR consulting: organizational development and design, recruitment, competency models, job assessment and grading, employer branding and internal communications.',
            'Diagnosing client HR challenges and tailoring solutions to the specific business context — from problem framing to implementation.',
            'The practice runs a proprietary AI-powered grading platform, applied on client projects.'
          ]
        },
        {
          period: 'Jan 2023 — Oct 2025',
          company: 'HR Baraka Group · Tashkent',
          role: 'Director of HR and Organizational Development',
          points: [
            'A department of 25+ people across 7 functions in the HR competence center of a holding serving companies that generate ~20% of Uzbekistan\'s economy.',
            'Implemented a company-wide job grading system, a competency model and job profiles, and built the assessment framework.',
            'Rolled out KPI / OKR-based performance management and a full set of internal HR policies.',
            'Delivered 20+ commercially successful external projects with the team: recruitment, grading, performance management, assessment, training.',
            'Launched an internship and knowledge-sharing program, expanded the internal training catalog, opened new communication channels.'
          ]
        },
        {
          period: 'Aug 2021 — Jan 2023',
          company: 'Rusatom International Network (Rosatom) · Moscow',
          role: 'HR Director',
          points: [
            'HR, internal communications and business travel for the company running Rosatom\'s global presence: HQ in Moscow and 14 offices worldwide.',
            'Rapidly renewed the Russian and international teams in response to new business challenges; built a compact HR team praised by internal clients for service quality.',
            'Introduced a transparent candidate assessment system based on a competency model and job profiles.',
            'Digitalized document flow and HR processes: internal transfers, annual appraisal, recruitment, business travel, onboarding.'
          ]
        },
        {
          period: 'Sep 2016 — Aug 2021',
          company: 'R-Pharm · Moscow',
          role: 'HR Business Partner',
          points: [
            'Led HR integration of new businesses into the group — around 10 deals, including Canon Medical Systems and Albiogen.',
            'Member of the transition-period working group for the sale of a business stake to a minority shareholder (Mitsui).',
            'Implemented performance management and succession planning for key positions; delivered internal trainings.',
            'C&B: organizational planning and personnel cost budgeting, grade system updates, flexible benefits rollout.'
          ]
        },
        {
          period: 'Sep 2015 — Oct 2016',
          company: 'R-Pharm · Moscow',
          role: 'Head of Recruitment',
          points: [
            'Managed a distributed team of ~10 recruiters (Russia, CIS, Germany): methodology, competency development, budget.',
            'International executive search for senior and top management; transformed reporting and introduced modern recruitment metrics.'
          ]
        },
        {
          period: '2010 — 2015',
          company: 'Finval · R-Pharm · Skagen · Elgad-ZSI',
          role: 'Early career: recruitment and onboarding',
          points: [
            'Full-cycle recruitment at all levels, corporate competency models, welcome trainings, diagnostic assessment tools, assessment centers for the talent pool, mass recruitment.'
          ]
        }
      ]
    },

    education: {
      heading: 'Education',
      items: [
        {
          period: '2011',
          place: 'Moscow Pedagogical State University',
          detail: 'Faculty of Pedagogy and Psychology: pedagogy, psychological and pedagogical counseling'
        }
      ],
      coursesHeading: 'Courses and certificates',
      courses: [
        'AI Fluency: Framework & Foundations (Anthropic, 2025)',
        'AI Fluency for Educators (Anthropic, 2025)',
        'English C1 Advanced (Skyeng, 2024)',
        'Vision Zero: Safety and Health Management (EcoStandard, 2018)',
        'Assessment Center Technology and Tools (Moscow Business School, 2013)',
        'Recruitment Management and Headhunting (SRC, 2013)'
      ]
    },

    services: {
      heading: 'Services',
      intro: 'I consult companies on HR — independently and as part of the Gradex practice. If your task does not fit any of these, drop me a line anyway.',
      items: [
        {
          title: 'HR function from scratch',
          desc: 'I build HR from a blank page, or rebuild what is already there. Done it twice from the inside — now as a consultant.',
          bullets: ['Audit of the current state', 'Roadmap and org design', 'Full set of HR policies', 'Hiring and launching the HR team'],
          price: 'Project from 2 months'
        },
        {
          title: 'Job grading and rewards',
          desc: 'A transparent system of jobs and pay: everyone knows what they are paid for and what it takes to earn more.',
          bullets: ['Job descriptions and evaluation', 'Grades and salary ranges', 'Bonus and benefits policy', 'AI-powered automated grading platform'],
          price: 'Project 4–8 weeks'
        },
        {
          title: 'Competency model and assessment',
          desc: 'One shared language for what you expect from people — plus the tools that actually measure it.',
          bullets: ['Job profiles', 'Assessment centers', 'Competency-based interviews', 'Talent pool and succession'],
          price: 'Project 4–6 weeks'
        },
        {
          title: 'Performance management',
          desc: 'A goal-setting and review system built on KPIs or OKRs — together with the manager training without which it never takes off.',
          bullets: ['Goal cascading', 'Review cycle and rules', 'Link to rewards', 'Manager training'],
          price: 'Project 4–8 weeks'
        },
        {
          title: 'HR in M&A and integration',
          desc: 'Deal support and team integration. Around 10 deals behind me, international ones included.',
          bullets: ['People due diligence', 'Team integration plan', 'Harmonizing pay systems', 'Retaining key people'],
          price: 'Scoped after diagnostics'
        },
        {
          title: 'Recruitment and executive search',
          desc: 'Filling key positions and turning recruitment into a process rather than an emergency.',
          bullets: ['Executive search', 'International search', 'Funnel and metrics setup', 'Growing the recruitment team'],
          price: 'Scoped after diagnostics'
        }
      ],
      note: 'Final pricing depends on the size of the company and the scope of work. The first call is free.'
    },

    contact: {
      heading: 'Get in touch',
      text: 'Tell me a couple of words about your task — I reply within a day. Email is the preferred channel.',
      emailLabel: 'Email',
      telegramLabel: 'Telegram',
      phoneLabel: 'Phone',
      whatsappLabel: 'WhatsApp',
      websiteLabel: 'Practice',
      button: 'Send an email'
    },

    footer: 'Handcrafted',
    langButton: 'RU'
  }
};
