/* ============================================================
   Небольшие удобства, работающие в браузере.
   Весь текст уже лежит в HTML — сюда он не имеет отношения.

   1. Запоминает выбранный язык и при первом заходе отправляет
      русскоязычный браузер на русскую версию.
   2. Выпадающее меню «Скачать резюме».
   3. Линия под шапкой при прокрутке, плавное появление секций.
   ============================================================ */

(function () {
  'use strict';

  const html = document.documentElement;
  const lang = html.dataset.lang;                 // язык этой страницы: 'en' или 'ru'
  const other = lang === 'en' ? 'ru' : 'en';
  const otherHref = lang === 'en' ? 'ru/' : '../';

  /* --- 1. Язык ---------------------------------------------------- */

  let saved = null;
  try { saved = localStorage.getItem('lang'); } catch (e) { /* приватный режим */ }

  // Явно выбранный раньше язык важнее языка браузера
  if (saved === other) {
    location.replace(otherHref + location.hash);
    return;
  }

  // Первый визит с русскоязычного браузера — на русскую версию.
  // Только с английской страницы, чтобы не зациклиться.
  if (!saved && lang === 'en' && /^ru\b/i.test(navigator.language || '')) {
    location.replace('ru/' + location.hash);
    return;
  }

  // Клик по переключателю запоминает выбор
  const switcher = document.querySelector('[data-lang-switch]');
  if (switcher) {
    switcher.addEventListener('click', () => {
      try { localStorage.setItem('lang', switcher.dataset.langSwitch); } catch (e) { /* ignore */ }
    });
  }

  /* --- 2. Меню «Скачать резюме» ----------------------------------- */

  document.querySelectorAll('.dropdown').forEach((dd) => {
    const toggle = dd.querySelector('.dropdown__toggle');

    const open = (state) => {
      dd.classList.toggle('is-open', state);
      toggle.setAttribute('aria-expanded', String(state));
    };

    toggle.addEventListener('click', (e) => {
      e.stopPropagation();
      open(!dd.classList.contains('is-open'));
    });

    // Клик мимо и Esc закрывают меню
    document.addEventListener('click', () => open(false));
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape') open(false); });
  });

  /* --- 3. Шапка и плавное появление ------------------------------- */

  const header = document.querySelector('.header');
  const onScroll = () => header.classList.toggle('is-scrolled', window.scrollY > 8);
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  // Секции проявляются, когда доезжаешь до них. Без JS они просто видны.
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.section > .container').forEach((el) => {
      el.classList.add('reveal');
      observer.observe(el);
    });
  }

})();
