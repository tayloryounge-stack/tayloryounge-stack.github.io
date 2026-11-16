(() => {
  'use strict';
  const product = document.body.dataset.product;
  const select = document.querySelector('[data-language]');
  const supported = ['en', 'zh-Hans', 'zh-Hant', 'ja', 'ko'];
  const normalize = value => {
    const lang = String(value || '').toLowerCase().replace(/_/g, '-');
    if (lang.startsWith('zh')) return /hant|tw|hk|mo/.test(lang) ? 'zh-Hant' : 'zh-Hans';
    return supported.find(item => lang === item || lang.startsWith(item + '-'));
  };
  let saved;
  try { saved = localStorage.getItem('funnyday-product-language'); } catch (_) {}
  let language = normalize(new URLSearchParams(location.search).get('lang')) || normalize(saved) || (navigator.languages || [navigator.language]).map(normalize).find(Boolean) || 'en';
  let preview = 'home';
  let dictionary;
  const imageLocale = lang => lang === 'en' ? 'en-US' : lang;
  const previewKey = { home: 'tab1', plan: 'tab2', detail: 'tab3' };
  const renderPreview = () => {
    const img = document.querySelector('[data-preview-image]');
    img.src = `assets/${imageLocale(language)}/${preview}.jpg`;
    img.alt = dictionary[language][previewKey[preview]];
    document.querySelectorAll('[data-preview]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.preview === preview)));
  };
  const render = () => {
    const copy = dictionary[language];
    document.documentElement.lang = language;
    select.value = language;
    select.setAttribute('aria-label', copy.language);
    document.querySelectorAll('[data-copy]').forEach(node => { if (copy[node.dataset.copy]) node.textContent = copy[node.dataset.copy]; });
    document.title = `${copy.name} — ${copy.title1} ${copy.title2}`;
    document.querySelector('meta[name="description"]').content = copy.intro;
    document.querySelector('meta[property="og:title"]').content = document.title;
    document.querySelector('meta[property="og:description"]').content = copy.intro;
    document.querySelectorAll('[data-shot]').forEach(img => { img.src = `assets/${imageLocale(language)}/${img.dataset.shot}.jpg`; img.alt = copy[previewKey[img.dataset.shot]]; });
    document.querySelectorAll('[data-legal]').forEach(link => { link.hash = language; });
    document.querySelector('.preview-options').setAttribute('aria-label', copy.screens);
    document.querySelector('nav').setAttribute('aria-label', copy.features);
    renderPreview();
  };
  fetch('copy.json').then(response => { if (!response.ok) throw new Error('Translation file unavailable'); return response.json(); }).then(data => {
    dictionary = data;
    render();
    select.addEventListener('change', () => {
      language = select.value;
      try { localStorage.setItem('funnyday-product-language', language); } catch (_) {}
      const url = new URL(location.href); url.searchParams.set('lang', language); history.replaceState(null, '', url);
      render();
    });
    document.querySelectorAll('[data-preview]').forEach(button => button.addEventListener('click', () => { preview = button.dataset.preview; renderPreview(); }));
  }).catch(() => { select.disabled = true; });
})();
