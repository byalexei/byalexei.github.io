/* ============================================================
   СБОРКА САЙТА:  node build.js

   Берёт содержимое из data.js и генерирует готовые страницы
   с полным текстом внутри — так их видят поисковики и
   мессенджеры, которые не выполняют JavaScript.

     index.html      — английская версия (корень сайта)
     ru/index.html   — русская версия
     sitemap.xml     — карта сайта для поисковиков
     robots.txt      — разрешение на индексацию

   Вёрстка секций описана ниже. Тексты сюда не пишутся —
   только в data.js.
   ============================================================ */

'use strict';

const fs = require('fs');
const path = require('path');
const SITE = require('./data.js');

/* --- Помощники --------------------------------------------------- */

// Экранирует текст, чтобы < > & " не ломали разметку
const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) =>
  ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

// «Алексей Бычков» -> «АБ»
const initials = (name) =>
  String(name).trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

// Оставляет в номере только цифры и плюс: '+7 (903) 527-20-60' -> '+79035272060'
const digits = (s) => String(s).replace(/[^\d+]/g, '');

// Разрешает перенос адреса только по логичным границам: перед @ и после /
const breakable = (s) => esc(s).replace(/@/g, '<wbr>@').replace(/\//g, '/<wbr>');

// Страницы для сборки: язык -> папка и префикс путей к общим файлам
const PAGES = {
  en: { dir: '',    base: '',    url: SITE.url + '/' },
  ru: { dir: 'ru',  base: '../', url: SITE.url + '/ru/' }
};

/* --- Иконки (Feather Icons, лицензия MIT) ------------------------ */

const svg = (inner) =>
  `<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${inner}</svg>`;

const ICONS = {
  mail:     svg('<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'),
  telegram: svg('<path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4 20-7z"/>'),
  phone:    svg('<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>'),
  whatsapp: svg('<path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>'),
  linkedin: svg('<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>'),
  download: svg('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>'),
  chevron:  svg('<polyline points="6 9 12 15 18 9"/>')
};

/* --- Шапка документа: title, описание, превью ссылок ------------- */

function head(lang, t, page) {
  const other = lang === 'en' ? 'ru' : 'en';
  const ogImage = SITE.url + '/' + SITE.ogImage[lang];
  const locale = lang === 'en' ? 'en_US' : 'ru_RU';
  const altLocale = lang === 'en' ? 'ru_RU' : 'en_US';

  // Структурированные данные о человеке — для поисковиков
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: t.hero.name,
    givenName: t.meta.firstName,
    familyName: t.meta.lastName,
    jobTitle: t.hero.role,
    description: t.meta.description,
    url: page.url,
    image: SITE.url + '/' + SITE.photo,
    email: 'mailto:' + SITE.links.email,
    sameAs: [SITE.links.linkedin, SITE.links.telegram].filter(Boolean)
  };

  return `
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">

  <title>${esc(t.meta.title)}</title>
  <meta name="description" content="${esc(t.meta.description)}">
  ${SITE.googleSiteVerification ? `<meta name="google-site-verification" content="${esc(SITE.googleSiteVerification)}">` : ''}
  <link rel="canonical" href="${page.url}">
  <link rel="alternate" hreflang="en" href="${PAGES.en.url}">
  <link rel="alternate" hreflang="ru" href="${PAGES.ru.url}">
  <link rel="alternate" hreflang="x-default" href="${PAGES.en.url}">

  <!-- Превью ссылки в мессенджерах и соцсетях (Open Graph) -->
  <meta property="og:type" content="profile">
  <meta property="og:url" content="${page.url}">
  <meta property="og:title" content="${esc(t.meta.ogTitle)}">
  <meta property="og:description" content="${esc(t.meta.ogDescription)}">
  <meta property="og:image" content="${ogImage}">
  <meta property="og:image:width" content="1200">
  <meta property="og:image:height" content="630">
  <meta property="og:image:alt" content="${esc(t.meta.photoAlt)}">
  <meta property="og:locale" content="${locale}">
  <meta property="og:locale:alternate" content="${altLocale}">
  <meta property="og:site_name" content="${esc(t.hero.name)}">
  <meta property="profile:first_name" content="${esc(t.meta.firstName)}">
  <meta property="profile:last_name" content="${esc(t.meta.lastName)}">

  <!-- Превью в X / Twitter -->
  <meta name="twitter:card" content="summary_large_image">
  <meta name="twitter:title" content="${esc(t.meta.ogTitle)}">
  <meta name="twitter:description" content="${esc(t.meta.ogDescription)}">
  <meta name="twitter:image" content="${ogImage}">

  <!-- Иконки вкладки и домашнего экрана -->
  <link rel="icon" href="${page.base}favicon.svg" type="image/svg+xml">
  <link rel="icon" href="${page.base}favicon-32.png" sizes="32x32" type="image/png">
  <link rel="apple-touch-icon" href="${page.base}apple-touch-icon.png">
  <meta name="theme-color" content="${SITE.accent}">

  <link rel="stylesheet" href="${page.base}styles.css">
  <style>:root{--accent:${SITE.accent};--accent-2:${SITE.accent2};}</style>

  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;
}

/* --- Секции страницы --------------------------------------------- */

function header(lang, t, page) {
  const other = lang === 'en' ? 'ru' : 'en';
  const switchHref = lang === 'en' ? 'ru/' : '../';
  return `
  <header class="header">
    <div class="container header__inner">
      <a class="header__name" href="#top">${esc(t.hero.name)}</a>
      <nav class="nav" aria-label="${lang === 'en' ? 'Sections' : 'Разделы'}">
        <a href="#about">${esc(t.nav.about)}</a>
        <a href="#results">${esc(t.nav.results)}</a>
        <a href="#experience">${esc(t.nav.experience)}</a>
        <a href="#expertise">${esc(t.nav.expertise)}</a>
        <a href="#contact">${esc(t.nav.contact)}</a>
      </nav>
      <a class="lang" href="${switchHref}" hreflang="${other}" lang="${other}" data-lang-switch="${other}" title="${esc(t.langSwitchTitle)}">${esc(t.langSwitch)}</a>
    </div>
  </header>`;
}

function hero(lang, t, page) {
  const cvOrder = lang === 'en' ? ['en', 'ru'] : ['ru', 'en'];
  const cvMenu = cvOrder.map((l) => `
            <a href="${page.base}${SITE.cv[l].file}" download="${esc(SITE.cv[l].name)}" hreflang="${l}">${ICONS.download}<span>${esc(t.hero.cvOptions[l])}</span></a>`).join('');

  const avatar = SITE.photo
    ? `<img src="${page.base}${SITE.photo}" alt="${esc(t.meta.photoAlt)}" width="760" height="760" fetchpriority="high">`
    : `<span class="hero__initials" aria-hidden="true">${esc(initials(t.hero.name))}</span>`;

  return `
    <section class="hero">
      <div class="container hero__inner">
        <div>
          ${t.hero.status ? `<div class="hero__status">${esc(t.hero.status)}</div>` : ''}
          <h1 class="hero__name">${esc(t.hero.name)}</h1>
          <p class="hero__role">${esc(t.hero.role)}</p>
          <p class="hero__tagline">${esc(t.hero.tagline)}</p>
          ${t.hero.location ? `<p class="hero__location">${esc(t.hero.location)}</p>` : ''}
          <div class="buttons">
            <a class="btn btn--primary" href="#contact">${esc(t.hero.ctaPrimary)}</a>
            <div class="dropdown">
              <button class="btn btn--ghost dropdown__toggle" type="button" aria-haspopup="true" aria-expanded="false">
                ${esc(t.hero.cvButton)} ${ICONS.chevron}
              </button>
              <div class="dropdown__menu" role="menu">${cvMenu}
              </div>
            </div>
            ${SITE.links.linkedin ? `<a class="btn btn--icon" href="${esc(SITE.links.linkedin)}" target="_blank" rel="noopener noreferrer" title="${esc(t.hero.linkedinTitle)}" aria-label="${esc(t.hero.linkedinTitle)}">${ICONS.linkedin}</a>` : ''}
          </div>
        </div>
        <div class="hero__avatar">
          <div class="hero__avatar-inner">${avatar}</div>
        </div>
      </div>
    </section>`;
}

const pills = (heading, items, extraClass = '') => items && items.length ? `
          <div class="skills ${extraClass}">
            <div class="skills__heading">${esc(heading)}</div>
            <ul class="skills__list">
              ${items.map((s) => `<li>${esc(s)}</li>`).join('\n              ')}
            </ul>
          </div>` : '';

function about(t) {
  return `
    <section class="section" id="about">
      <div class="container">
        <h2 class="section__heading">${esc(t.about.heading)}</h2>
        <div class="about">
          <div class="about__text">
            ${t.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('\n            ')}
          </div>
          <div>
            <div class="facts">
              ${t.about.facts.map((f) => `
              <div class="fact">
                <div class="fact__value">${esc(f.value)}</div>
                <div class="fact__label">${esc(f.label)}</div>
              </div>`).join('')}
            </div>
            ${pills(t.about.skillsHeading, t.about.skills)}
            ${pills(t.about.toolsHeading, t.about.tools, 'skills--tools')}
          </div>
        </div>
      </div>
    </section>`;
}

function results(t) {
  if (!t.results || !t.results.items.length) return '';
  return `
    <section class="section section--tint" id="results">
      <div class="container">
        <h2 class="section__heading">${esc(t.results.heading)}</h2>
        <ol class="results">
          ${t.results.items.map((r) => `<li>${esc(r)}</li>`).join('\n          ')}
        </ol>
      </div>
    </section>`;
}

const job = (j) => `
          <article class="job">
            <div class="job__period">${esc(j.period)}</div>
            <div>
              <h3 class="job__role">${esc(j.role)}</h3>
              <div class="job__company">${esc(j.company)}</div>
              <ul class="job__points">
                ${j.points.map((p) => `<li>${esc(p)}</li>`).join('\n                ')}
              </ul>
            </div>
          </article>`;

function experience(t) {
  const early = t.experience.early && t.experience.early.items.length ? `
        <details class="early">
          <summary class="early__summary">
            <span class="early__title">${esc(t.experience.early.summary)}</span>
            <span class="early__hint">${esc(t.experience.early.hint)} ${ICONS.chevron}</span>
          </summary>
          <div class="timeline timeline--early">${t.experience.early.items.map(job).join('')}
          </div>
        </details>` : '';

  const education = t.education ? `
        <div class="education">
          <h3 class="education__heading">${esc(t.education.heading)}</h3>
          ${t.education.items.map((e) => `
          <article class="job">
            <div class="job__period">${esc(e.period)}</div>
            <div>
              <h4 class="job__role">${esc(e.place)}</h4>
              <div class="job__points">${esc(e.detail)}</div>
            </div>
          </article>`).join('')}
          ${pills(t.education.coursesHeading, t.education.courses)}
        </div>` : '';

  return `
    <section class="section" id="experience">
      <div class="container">
        <h2 class="section__heading">${esc(t.experience.heading)}</h2>
        <div class="timeline">${t.experience.items.map(job).join('')}
        </div>
        ${early}
        ${education}
      </div>
    </section>`;
}

function expertise(t) {
  return `
    <section class="section section--tint" id="expertise">
      <div class="container">
        <h2 class="section__heading">${esc(t.expertise.heading)}</h2>
        <p class="section__intro">${esc(t.expertise.intro)}</p>
        <div class="grid">
          ${t.expertise.items.map((s) => `
          <article class="card">
            <h3 class="card__title">${esc(s.title)}</h3>
            <p class="card__desc">${esc(s.desc)}</p>
            <ul class="card__bullets">
              ${s.bullets.map((b) => `<li>${esc(b)}</li>`).join('\n              ')}
            </ul>
          </article>`).join('')}
        </div>
      </div>
    </section>`;
}

// Рекомендации: место в вёрстке заложено, показывается, когда появятся цитаты
function testimonials(t) {
  if (!t.testimonials || !t.testimonials.items.length) return '';
  return `
    <section class="section" id="testimonials">
      <div class="container">
        <h2 class="section__heading">${esc(t.testimonials.heading)}</h2>
        <div class="quotes">
          ${t.testimonials.items.map((q) => `
          <figure class="quote">
            <blockquote class="quote__text">${esc(q.text)}</blockquote>
            <figcaption class="quote__author">
              <span class="quote__name">${esc(q.name)}</span>
              <span class="quote__title">${esc(q.title)}</span>
            </figcaption>
          </figure>`).join('')}
        </div>
      </div>
    </section>`;
}

function contact(t) {
  const L = SITE.links;
  const c = t.contact;
  const mailHref = `mailto:${L.email}?subject=${encodeURIComponent(c.emailSubject)}`;

  const items = [
    L.email && {
      icon: 'mail', label: c.emailLabel, value: L.email, href: mailHref,
      badge: c.preferred
    },
    L.telegram && {
      icon: 'telegram', label: c.telegramLabel, value: '@' + L.telegram.split('/').pop(), href: L.telegram, external: true
    },
    L.phone && {
      icon: 'phone', label: c.phoneLabel, value: L.phone, href: 'tel:' + digits(L.phone)
    },
    L.whatsapp && {
      icon: 'whatsapp', label: c.whatsappLabel, value: L.whatsapp,
      href: 'https://wa.me/' + digits(L.whatsapp).replace('+', ''), external: true, note: c.whatsappNote
    },
    L.linkedin && {
      icon: 'linkedin', label: c.linkedinLabel, value: L.linkedin.replace(/^https?:\/\/(www\.)?/, ''), href: L.linkedin, external: true
    }
  ].filter(Boolean);

  return `
    <section class="section section--tint" id="contact">
      <div class="container">
        <h2 class="section__heading">${esc(c.heading)}</h2>
        <p class="contact__text">${esc(c.text)}</p>
        <div class="contact__list">
          ${items.map((i) => `
          <a class="contact__item" href="${esc(i.href)}"${i.external ? ' target="_blank" rel="noopener noreferrer"' : ''}>
            <span class="contact__icon">${ICONS[i.icon]}</span>
            <span class="contact__body">
              <span class="contact__label">${esc(i.label)}${i.note ? ` <span class="contact__note">· ${esc(i.note)}</span>` : ''}${i.badge ? ` <span class="contact__badge">${esc(i.badge)}</span>` : ''}</span>
              <span class="contact__value">${breakable(i.value)}</span>
            </span>
          </a>`).join('')}
        </div>
        ${L.email ? `
        <div class="buttons">
          <a class="btn btn--primary" href="${esc(mailHref)}">${esc(c.button)}</a>
        </div>` : ''}
      </div>
    </section>`;
}

function footer(t) {
  return `
  <footer class="footer">
    <div class="container footer__inner">
      <span>© ${new Date().getFullYear()} ${esc(t.hero.name)}</span>
      <span>${esc(t.footer)}</span>
    </div>
  </footer>`;
}

/* --- Страница целиком -------------------------------------------- */

function page(lang) {
  const t = SITE[lang];
  const p = PAGES[lang];
  return `<!DOCTYPE html>
<html lang="${lang}" data-lang="${lang}">
<head>${head(lang, t, p)}
</head>
<body>
${header(lang, t, p)}

  <main id="top">
${hero(lang, t, p)}
${about(t)}
${results(t)}
${experience(t)}
${expertise(t)}
${testimonials(t)}
${contact(t)}
  </main>
${footer(t)}

  <script src="${p.base}script.js" defer></script>
</body>
</html>
`;
}

/* --- Служебные файлы для поисковиков ----------------------------- */

function sitemap() {
  const today = new Date().toISOString().slice(0, 10);
  const entry = (lang) => `  <url>
    <loc>${PAGES[lang].url}</loc>
    <lastmod>${today}</lastmod>
    <xhtml:link rel="alternate" hreflang="en" href="${PAGES.en.url}"/>
    <xhtml:link rel="alternate" hreflang="ru" href="${PAGES.ru.url}"/>
    <xhtml:link rel="alternate" hreflang="x-default" href="${PAGES.en.url}"/>
  </url>`;
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entry('en')}
${entry('ru')}
</urlset>
`;
}

const robots = () => `User-agent: *
Allow: /

Sitemap: ${SITE.url}/sitemap.xml
`;

/* --- Запись файлов ----------------------------------------------- */

function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, 'utf8');
  console.log('  ' + file);
}

console.log('Сборка сайта:');
write('index.html', page('en'));
write(path.join('ru', 'index.html'), page('ru'));
write('sitemap.xml', sitemap());
write('robots.txt', robots());
console.log('Готово.');
