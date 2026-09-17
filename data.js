/* ============================================================
   ВСЁ СОДЕРЖИМОЕ САЙТА ЖИВЁТ ЗДЕСЬ.
   Меняй только текст в кавычках — вёрстку трогать не нужно.

   После правок запусти сборку:  node build.js
   Она сгенерирует index.html (английская версия)
   и ru/index.html (русская) с готовым текстом внутри.

   Структура: SITE.en — английская версия, SITE.ru — русская.
   Обе должны иметь одинаковый набор полей.
   ============================================================ */

const SITE = {
  /* Адрес сайта — нужен для превью ссылок и карты сайта */
  url: 'https://byalexei.github.io',

  /* Два акцентных цвета — на их паре построены все градиенты сайта.
     Оба должны быть достаточно тёмными: на них лежит белый текст. */
  accent: '#3452d9',
  accent2: '#0e7490',

  /* Фотография рядом с именем. Файла нет — покажется кружок с инициалами. */
  photo: 'photo.jpg',

  /* Картинки для превью ссылок (1200×630). Генерируются: python tools/og-image.py */
  ogImage: { en: 'og-image-en.jpg', ru: 'og-image-ru.jpg' },

  /* Контакты — одинаковые для обоих языков. '' = не показывать. */
  links: {
    email: 'byalexei@gmail.com',
    telegram: 'https://t.me/avbychkov',
    phone: '+7 (903) 527-20-60',
    whatsapp: '+998 (90) 828-21-89',      // номер отличается от телефона — это не опечатка
    linkedin: 'https://www.linkedin.com/in/avbychkov'
  },

  /* Файлы резюме — одинаковые для обоих языков */
  cv: {
    en: { file: 'files/cv-en.pdf', name: 'Alexey_Bychkov_CV_EN.pdf' },
    ru: { file: 'files/cv-ru.pdf', name: 'Бычков_Алексей_CV_RU.pdf' }
  },

  /* ---------------------------------------------------------
     АНГЛИЙСКАЯ ВЕРСИЯ  (корень сайта)
     --------------------------------------------------------- */
  en: {
    meta: {
      title: 'Alexey Bychkov — HR Director | People & Culture Leader',
      description: 'HR Director with 16 years of experience. Builds HR functions from the ground up: grading and rewards, assessment, performance management, recruitment.',
      ogTitle: 'Alexey Bychkov — HR Director',
      ogDescription: '16 years in HR, 5+ as HR Director. Job grading & C&B, competency models, performance management, HR in M&A. Open to new roles.',
      photoAlt: 'Alexey Bychkov, HR Director — portrait',
      firstName: 'Alexey',
      lastName: 'Bychkov'
    },

    nav: {
      about: 'About',
      results: 'Results',
      experience: 'Experience',
      expertise: 'What I do',
      contact: 'Contact'
    },

    hero: {
      name: 'Alexey Bychkov',
      role: 'HR Director · People & Culture Leader',
      tagline: 'I build the HR function from the ground up — and fix the one you already have: grading and rewards, assessment, performance management, recruitment. 16 years in the profession, 5+ of them as HR Director.',
      location: 'Vietnam (GMT+7) · remote · open to relocation and travel',
      status: 'Open to new roles and projects',
      ctaPrimary: 'Get in touch',
      cvButton: 'Download CV',
      cvOptions: { en: 'English (PDF)', ru: 'Russian (PDF)' },
      linkedinTitle: 'LinkedIn profile'
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
        { value: '14',       label: 'offices in the network' },
        { value: '25+',      label: 'team members led' }
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

    results: {
      heading: 'Selected results',
      items: [
        'Company-wide job grading system, competency model and assessment framework — implemented at HR Baraka Group',
        'KPI / OKR performance management rolled out across a 25+ person, 7-function HR department',
        'HR integration of ~10 M&A and JV deals at R-Pharm, including Canon Medical Systems and Albiogen',
        'Core HR processes digitalized across the Moscow HQ and 14 international offices of Rusatom International Network'
      ]
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
            "A department of 25+ people across 7 functions in the HR competence center of a holding serving companies that generate ~20% of Uzbekistan's economy.",
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
            "HR, internal communications and business travel for the company running Rosatom's global presence: HQ in Moscow and 14 offices worldwide.",
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
        }
      ],
      /* Ранние позиции — свёрнуты по умолчанию, раскрываются по клику */
      early: {
        summary: 'Early career — recruitment and onboarding, 2010–2015',
        hint: '4 positions',
        items: [
          {
            period: '2014 — 2015',
            company: 'Finval Group · industrial equipment',
            role: 'Recruitment and Onboarding Manager',
            points: ['Full-cycle recruitment at all levels, corporate competency model, welcome trainings.']
          },
          {
            period: '2012 — 2013',
            company: 'R-Pharm',
            role: 'Recruitment Specialist',
            points: ['Recruitment for sales and marketing, diagnostic assessment tools, assessment centers for the talent pool.']
          },
          {
            period: '2011 — 2012',
            company: 'Skagen · recruitment agency',
            role: 'Recruitment Consultant',
            points: ['Full cycle, including mass recruitment.']
          },
          {
            period: '2010 — 2011',
            company: 'Elgad-ZSI · manufacturing',
            role: 'Recruitment and Onboarding Manager',
            points: ['First HR role: recruitment and onboarding at a manufacturing company.']
          }
        ]
      }
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

    expertise: {
      heading: 'What I do',
      intro: 'Areas where I go deepest — as an in-house leader and as a consultant.',
      items: [
        {
          title: 'HR function from scratch',
          desc: 'Building HR from a blank page, or rebuilding what is already there. Done it twice from the inside.',
          bullets: ['Audit of the current state', 'Roadmap and org design', 'Full set of HR policies', 'Hiring and launching the HR team']
        },
        {
          title: 'Job grading and rewards',
          desc: 'A transparent system of jobs and pay: everyone knows what they are paid for and what it takes to earn more.',
          bullets: ['Job descriptions and evaluation', 'Grades and salary ranges', 'Bonus and benefits policy', 'AI-assisted automated grading']
        },
        {
          title: 'Competency model and assessment',
          desc: 'One shared language for what you expect from people — plus the tools that actually measure it.',
          bullets: ['Job profiles', 'Assessment centers', 'Competency-based interviews', 'Talent pool and succession']
        },
        {
          title: 'Performance management',
          desc: 'A goal-setting and review system built on KPIs or OKRs — together with the manager training without which it never takes off.',
          bullets: ['Goal cascading', 'Review cycle and rules', 'Link to rewards', 'Manager training']
        },
        {
          title: 'HR in M&A and integration',
          desc: 'Deal support and team integration. Around 10 deals, international ones included.',
          bullets: ['People due diligence', 'Team integration plan', 'Harmonizing pay systems', 'Retaining key people']
        },
        {
          title: 'Recruitment and executive search',
          desc: 'Filling key positions and turning recruitment into a process rather than an emergency.',
          bullets: ['Executive search', 'International search', 'Funnel and metrics setup', 'Growing the recruitment team']
        }
      ]
    },

    /* Рекомендации. Пока пусто — блок не показывается.
       Пример элемента:
       { text: 'Цитата…', name: 'Имя Фамилия', title: 'Должность, компания' } */
    testimonials: {
      heading: 'What colleagues say',
      items: []
    },

    contact: {
      heading: 'Get in touch',
      text: 'Tell me a couple of words about your task or the role — I reply within a day.',
      emailLabel: 'Email',
      emailSubject: 'Contact from byalexei.github.io',
      preferred: 'Preferred',
      telegramLabel: 'Telegram',
      phoneLabel: 'Phone',
      whatsappLabel: 'WhatsApp',
      whatsappNote: 'separate number',
      linkedinLabel: 'LinkedIn',
      button: 'Send an email'
    },

    footer: 'Handcrafted',
    langSwitch: 'RU',
    langSwitchTitle: 'Русская версия'
  },

  /* ---------------------------------------------------------
     РУССКАЯ ВЕРСИЯ  (/ru/)
     --------------------------------------------------------- */
  ru: {
    meta: {
      title: 'Алексей Бычков — директор по персоналу',
      description: 'HR-директор с 16-летним опытом. Строит HR-функцию с нуля: грейдинг и вознаграждение, оценка персонала, performance management, подбор. Открыт к новым ролям.',
      ogTitle: 'Алексей Бычков — директор по персоналу',
      ogDescription: '16 лет в HR, 5+ на позиции HRD. Грейдинг и C&B, модель компетенций, performance management, HR при M&A. Открыт к новым ролям.',
      photoAlt: 'Алексей Бычков, директор по персоналу — портрет',
      firstName: 'Алексей',
      lastName: 'Бычков'
    },

    nav: {
      about: 'Обо мне',
      results: 'Результаты',
      experience: 'Опыт',
      expertise: 'Чем занимаюсь',
      contact: 'Контакты'
    },

    hero: {
      name: 'Алексей Бычков',
      role: 'Директор по персоналу (HRD)',
      tagline: 'Строю HR-функцию с нуля и привожу в порядок ту, что уже есть: грейды и вознаграждение, оценка, performance management, подбор. 16 лет в профессии, из них 5+ на позиции HR-директора.',
      location: 'Вьетнам (GMT+7) · удалённо · готов к переезду и командировкам',
      status: 'Открыт к новым ролям и проектам',
      ctaPrimary: 'Связаться',
      cvButton: 'Скачать резюме',
      cvOptions: { ru: 'На русском (PDF)', en: 'На английском (PDF)' },
      linkedinTitle: 'Профиль в LinkedIn'
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
        { value: '14',      label: 'офисов в международной сети' },
        { value: '25+',     label: 'человек в подчинении' }
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

    results: {
      heading: 'Ключевые результаты',
      items: [
        'Внедрил систему грейдов, модель компетенций и систему оценки в масштабе холдинга — HR Baraka Group',
        'Запустил performance management на базе KPI / OKR в HR-департаменте из 25+ человек и 7 функций',
        'Провёл HR-интеграцию ~10 сделок M&A и СП в Р-Фарм, включая Canon Medical Systems и Albiogen',
        'Цифровизировал ключевые HR-процессы штаб-квартиры и 14 зарубежных офисов Русатом — Международная Сеть'
      ]
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
        }
      ],
      early: {
        summary: 'Ранний опыт — рекрутмент и адаптация, 2010–2015',
        hint: '4 позиции',
        items: [
          {
            period: '2014 — 2015',
            company: 'Финвал · промышленное оборудование',
            role: 'Менеджер по подбору и адаптации',
            points: ['Полный цикл подбора всех уровней, модель компетенций, welcome-тренинги.']
          },
          {
            period: '2012 — 2013',
            company: 'Р-Фарм',
            role: 'Специалист группы подбора',
            points: ['Подбор в коммерцию и маркетинг, диагностические методики, ассессмент-центры для кадрового резерва.']
          },
          {
            period: '2011 — 2012',
            company: 'Skagen · кадровое агентство',
            role: 'Специалист по подбору',
            points: ['Полный цикл, включая массовый рекрутмент.']
          },
          {
            period: '2010 — 2011',
            company: 'Элгад-ЗСИ · производство',
            role: 'Менеджер по подбору и адаптации',
            points: ['Первая HR-роль: подбор и адаптация на производственном предприятии.']
          }
        ]
      }
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

    expertise: {
      heading: 'Чем я занимаюсь',
      intro: 'Области, в которых я разбираюсь глубже всего — как руководитель внутри компании и как консультант.',
      items: [
        {
          title: 'HR-функция с нуля',
          desc: 'Сборка HR с чистого листа или пересборка того, что уже есть. Дважды делал это изнутри компании.',
          bullets: ['Аудит текущего состояния', 'Дорожная карта и оргдизайн', 'Локальные нормативные акты', 'Наём и запуск HR-команды']
        },
        {
          title: 'Грейдинг и вознаграждение',
          desc: 'Прозрачная система должностей и оплаты труда: понятно, за что человек получает деньги и что нужно, чтобы получать больше.',
          bullets: ['Описание и оценка должностей', 'Грейды и вилки окладов', 'Политика премирования и льгот', 'Автоматизированное грейдирование с AI']
        },
        {
          title: 'Модель компетенций и оценка',
          desc: 'Единый язык требований к людям — и инструменты, которыми эти требования измеряются.',
          bullets: ['Профили должностей', 'Ассессмент-центры', 'Интервью по компетенциям', 'Кадровый резерв и преемственность']
        },
        {
          title: 'Performance management',
          desc: 'Система целей и оценки результата на базе KPI или OKR — вместе с обучением руководителей, без которого она не взлетает.',
          bullets: ['Каскадирование целей', 'Регламент и цикл оценки', 'Связка с вознаграждением', 'Обучение руководителей']
        },
        {
          title: 'HR при M&A и интеграции',
          desc: 'Сопровождение сделок и объединение команд. Около 10 сделок, включая международные.',
          bullets: ['Due diligence по персоналу', 'План интеграции команд', 'Гармонизация систем оплаты', 'Удержание ключевых людей']
        },
        {
          title: 'Подбор и прямой поиск',
          desc: 'Закрытие ключевых позиций и настройка подбора как процесса, а не как аврала.',
          bullets: ['Executive search', 'Международный поиск', 'Настройка воронки и метрик', 'Развитие команды рекрутеров']
        }
      ]
    },

    testimonials: {
      heading: 'Рекомендации',
      items: []
    },

    contact: {
      heading: 'Связаться',
      text: 'Напишите пару слов о задаче или роли — отвечу в течение дня.',
      emailLabel: 'Почта',
      emailSubject: 'Контакт с сайта byalexei.github.io',
      preferred: 'Предпочтительно',
      telegramLabel: 'Telegram',
      phoneLabel: 'Телефон',
      whatsappLabel: 'WhatsApp',
      whatsappNote: 'отдельный номер',
      linkedinLabel: 'LinkedIn',
      button: 'Написать письмо'
    },

    footer: 'Сделано своими руками',
    langSwitch: 'EN',
    langSwitchTitle: 'English version'
  }
};

/* Делает содержимое доступным сборке (node build.js) */
if (typeof module !== 'undefined') module.exports = SITE;
