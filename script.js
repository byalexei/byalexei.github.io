/* ============================================================
   Берёт содержимое из data.js и расставляет его по странице.
   Плюс переключение языка, подсветка шапки и плавное появление.

   Логику менять не нужно — весь текст правится в data.js.
   ============================================================ */

(function () {
  'use strict';

  /* --- Маленькие помощники -------------------------------------- */

  // Находит место на странице по атрибуту data-slot
  const slot = (name) => document.querySelector(`[data-slot="${name}"]`);

  // Экранирует текст, чтобы символы < > & не ломали вёрстку
  const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) =>
    ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));

  // Собирает инициалы: «Алексей Фамилия» -> «АФ»
  const initials = (name) =>
    String(name).trim().split(/\s+/).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

  /* --- Отрисовка страницы --------------------------------------- */

  function render(lang) {
    const t = SITE[lang];              // тексты выбранного языка
    const L = SITE.links;              // ссылки, общие для обоих языков

    /* Служебное: язык страницы, заголовок вкладки, описание */
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    document.querySelector('meta[name="description"]').content = t.meta.description;
    document.querySelector('meta[property="og:title"]').content = t.meta.title;
    document.querySelector('meta[property="og:description"]').content = t.meta.description;

    /* Шапка */
    slot('header-name').textContent = t.hero.name;
    slot('lang').textContent = t.langButton;

    slot('nav').innerHTML = `
      <a href="#about">${esc(t.nav.about)}</a>
      <a href="#experience">${esc(t.nav.experience)}</a>
      <a href="#services">${esc(t.nav.services)}</a>
      <a href="#contact">${esc(t.nav.contact)}</a>`;

    /* Первый экран */
    slot('hero').innerHTML = `
      <div>
        ${t.hero.status ? `<div class="hero__status">${esc(t.hero.status)}</div>` : ''}
        <h1 class="hero__name">${esc(t.hero.name)}</h1>
        <div class="hero__role">${esc(t.hero.role)}</div>
        <p class="hero__tagline">${esc(t.hero.tagline)}</p>
        ${t.hero.location ? `<div class="hero__location">${esc(t.hero.location)}</div>` : ''}
        <div class="buttons">
          <a class="btn btn--primary" href="#contact">${esc(t.hero.ctaPrimary)}</a>
          ${t.hero.cvFile
            /* есть готовый PDF — отдаём его; иначе открываем печать браузера */
            ? `<a class="btn btn--ghost" href="${esc(t.hero.cvFile)}" download="${esc(t.hero.cvName)}">${esc(t.hero.ctaSecondary)}</a>`
            : `<button class="btn btn--ghost" type="button" data-action="print">${esc(t.hero.ctaSecondary)}</button>`}
        </div>
      </div>
      <div class="hero__avatar">
        <div class="hero__avatar-inner">
          <span class="hero__initials">${esc(initials(t.hero.name))}</span>
          ${SITE.photo ? `<img src="${esc(SITE.photo)}" alt="${esc(t.hero.name)}">` : ''}
        </div>
      </div>`;

    /* Файла с фотографией нет — убираем картинку, останутся инициалы */
    const photo = document.querySelector('.hero__avatar img');
    if (photo) photo.addEventListener('error', () => photo.remove());

    /* Обо мне */
    slot('about').innerHTML = `
      <h2 class="section__heading">${esc(t.about.heading)}</h2>
      <div class="about">
        <div class="about__text">
          ${t.about.paragraphs.map((p) => `<p>${esc(p)}</p>`).join('')}
        </div>
        <div>
          ${t.about.facts.length ? `
            <div class="facts">
              ${t.about.facts.map((f) => `
                <div class="fact">
                  <div class="fact__value">${esc(f.value)}</div>
                  <div class="fact__label">${esc(f.label)}</div>
                </div>`).join('')}
            </div>` : ''}
          ${t.about.skills.length ? `
            <div class="skills">
              <div class="skills__heading">${esc(t.about.skillsHeading)}</div>
              <ul class="skills__list">
                ${t.about.skills.map((s) => `<li>${esc(s)}</li>`).join('')}
              </ul>
            </div>` : ''}
          ${t.about.tools && t.about.tools.length ? `
            <div class="skills skills--tools">
              <div class="skills__heading">${esc(t.about.toolsHeading)}</div>
              <ul class="skills__list">
                ${t.about.tools.map((s) => `<li>${esc(s)}</li>`).join('')}
              </ul>
            </div>` : ''}
        </div>
      </div>`;

    /* Опыт работы */
    slot('experience').innerHTML = `
      <h2 class="section__heading">${esc(t.experience.heading)}</h2>
      <div class="timeline">
        ${t.experience.items.map((job) => `
          <article class="job">
            <div class="job__period">${esc(job.period)}</div>
            <div>
              <h3 class="job__role">${esc(job.role)}</h3>
              <div class="job__company">${esc(job.company)}</div>
              <ul class="job__points">
                ${job.points.map((p) => `<li>${esc(p)}</li>`).join('')}
              </ul>
            </div>
          </article>`).join('')}
      </div>
      ${t.education ? `
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
          ${t.education.courses && t.education.courses.length ? `
            <div class="skills">
              <div class="skills__heading">${esc(t.education.coursesHeading)}</div>
              <ul class="skills__list">
                ${t.education.courses.map((c) => `<li>${esc(c)}</li>`).join('')}
              </ul>
            </div>` : ''}
        </div>` : ''}`;

    /* Услуги */
    slot('services').innerHTML = `
      <h2 class="section__heading">${esc(t.services.heading)}</h2>
      <p class="section__intro">${esc(t.services.intro)}</p>
      <div class="grid">
        ${t.services.items.map((s) => `
          <article class="card">
            <h3 class="card__title">${esc(s.title)}</h3>
            <p class="card__desc">${esc(s.desc)}</p>
            ${s.bullets && s.bullets.length ? `
              <ul class="card__bullets">
                ${s.bullets.map((b) => `<li>${esc(b)}</li>`).join('')}
              </ul>` : ''}
            ${s.price ? `<div class="card__price">${esc(s.price)}</div>` : ''}
          </article>`).join('')}
      </div>
      ${t.services.note ? `<p class="services__note">${esc(t.services.note)}</p>` : ''}`;

    /* Контакты — показываем только те строчки, которые заполнены */
    const digits = (s) => s.replace(/[^\d+]/g, '');

    const contacts = [
      L.email    && { label: t.contact.emailLabel,    value: L.email, href: `mailto:${L.email}` },
      L.telegram && { label: t.contact.telegramLabel, value: '@' + L.telegram.split('/').pop(), href: L.telegram },
      L.phone    && { label: t.contact.phoneLabel,    value: L.phone, href: `tel:${digits(L.phone)}` },
      L.whatsapp && { label: t.contact.whatsappLabel, value: L.whatsapp, href: `https://wa.me/${digits(L.whatsapp).replace('+', '')}` },
      L.website  && { label: t.contact.websiteLabel,  value: L.website.replace(/^https?:\/\//, ''), href: L.website },
      L.linkedin && { label: 'LinkedIn', value: 'linkedin', href: L.linkedin }
    ].filter(Boolean);

    slot('contact').innerHTML = `
      <h2 class="section__heading">${esc(t.contact.heading)}</h2>
      <p class="contact__text">${esc(t.contact.text)}</p>
      <div class="contact__list">
        ${contacts.map((c) => `
          <a class="contact__item" href="${esc(c.href)}" ${c.href.startsWith('http') ? 'target="_blank" rel="noopener"' : ''}>
            <span class="contact__label">${esc(c.label)}</span>
            <span class="contact__value">${esc(c.value)}</span>
          </a>`).join('')}
      </div>
      ${L.email ? `
        <div class="buttons">
          <a class="btn btn--primary" href="mailto:${esc(L.email)}">${esc(t.contact.button)}</a>
        </div>` : ''}`;

    /* Подвал */
    slot('footer').innerHTML = `
      <span>© ${new Date().getFullYear()} ${esc(t.hero.name)}</span>
      <span>${esc(t.footer)}</span>`;

    setupReveal();
  }

  /* --- Плавное появление секций при прокрутке -------------------- */

  let observer;

  function setupReveal() {
    if (observer) observer.disconnect();

    observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);         // показали один раз — и хватит
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.section > .container').forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

  /* --- Запуск ---------------------------------------------------- */

  // Запомненный язык или русский по умолчанию
  let lang = localStorage.getItem('lang') === 'en' ? 'en' : 'ru';

  // Акцентные цвета из data.js подставляем в стили
  document.documentElement.style.setProperty('--accent', SITE.accent);
  document.documentElement.style.setProperty('--accent-2', SITE.accent2 || SITE.accent);

  render(lang);

  // Переключатель языка
  slot('lang').addEventListener('click', () => {
    lang = lang === 'ru' ? 'en' : 'ru';
    localStorage.setItem('lang', lang);
    render(lang);
  });

  // Кнопка «Скачать резюме» открывает окно печати (там есть «Сохранить как PDF»)
  document.addEventListener('click', (e) => {
    if (e.target.closest('[data-action="print"]')) window.print();
  });

  // Тонкая линия под шапкой появляется только после прокрутки
  const header = document.querySelector('.header');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

})();
