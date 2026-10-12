(function () {
  'use strict';

  var root = document.documentElement;
  var $ = function (s, c) { return (c || document).querySelector(s); };
  var $$ = function (s, c) { return Array.prototype.slice.call((c || document).querySelectorAll(s)); };
  function store(key, val) { try { localStorage.setItem(key, val); } catch (e) {} }

  /* ---------- Theme (light / dark) ---------- */
  var themeBtn = $('#themeBtn');
  var themeMeta = $('meta[name="theme-color"]');

  function updateThemeLabel() {
    var dark = root.getAttribute('data-theme') === 'dark';
    themeBtn.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
    themeBtn.setAttribute('aria-pressed', String(dark));
    if (themeMeta) themeMeta.setAttribute('content', dark ? '#0A1522' : '#F3F7FB');
  }

  themeBtn.addEventListener('click', function () {
    var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    store('theme', next);
    updateThemeLabel();
  });

  try {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function (e) {
      if (localStorage.getItem('theme')) return;
      root.setAttribute('data-theme', e.matches ? 'dark' : 'light');
      updateThemeLabel();
    });
  } catch (e) {}

  /* ---------- Mobile menu ---------- */
  var menuBtn = $('#menuBtn');
  var nav = $('#nav');
  function closeMenu() { nav.classList.remove('open'); menuBtn.setAttribute('aria-expanded', 'false'); }
  menuBtn.addEventListener('click', function () {
    var open = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(open));
  });
  $$('a', nav).forEach(function (a) { a.addEventListener('click', closeMenu); });
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') closeMenu(); });

  /* ---------- Active nav link on scroll ---------- */
  var links = $$('a', nav);
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        links.forEach(function (a) {
          a.classList.toggle('active', a.getAttribute('href') === '#' + en.target.id);
        });
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach(function (s) { io.observe(s); });
  }

  /* ---------- Project filters ---------- */
  var chips = $$('.chip');
  var empty = $('#empty');
  function tokens(el) { return (el.getAttribute('data-cat') || '').split(/\s+/); }

  function filter(cat) {
    chips.forEach(function (c) {
      var on = c.dataset.filter === cat;
      c.classList.toggle('is-on', on);
      c.setAttribute('aria-pressed', String(on));
    });
    $$('.row, .card').forEach(function (el) {
      el.classList.toggle('is-hidden', !(cat === 'all' || tokens(el).indexOf(cat) !== -1));
    });
    $$('.board').forEach(function (b) {
      var any = $$('.row', b).some(function (r) { return !r.classList.contains('is-hidden'); });
      b.classList.toggle('is-hidden', !any);
    });
    empty.hidden = $$('.row, .card').some(function (el) { return !el.classList.contains('is-hidden'); });
  }
  chips.forEach(function (c) { c.addEventListener('click', function () { filter(c.dataset.filter); }); });

  /* ---------- Copy email ---------- */
  var copyBtn = $('#copyBtn');
  copyBtn.addEventListener('click', function () {
    var email = $('#emailLink').textContent.trim();
    var done = function () {
      copyBtn.textContent = 'Copied';
      setTimeout(function () { copyBtn.textContent = 'Copy'; }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(email).then(done, done);
    } else {
      var t = document.createElement('textarea');
      t.value = email; document.body.appendChild(t); t.select();
      try { document.execCommand('copy'); } catch (e) {}
      document.body.removeChild(t); done();
    }
  });

  /* ---------- Contact form: opens the visitor's email app ---------- */
  var form = $('#contactForm');
  var msg = $('#formMsg');
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var name = form.name.value.trim();
    var email = form.email.value.trim();
    var text = form.message.value.trim();
    var valid = { name: !!name, email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email), message: !!text };
    ['name', 'email', 'message'].forEach(function (k) { form[k].setAttribute('aria-invalid', String(!valid[k])); });

    if (!valid.name || !valid.email || !valid.message) {
      msg.textContent = 'Please fill in your name, a valid email and a message.';
      return;
    }
    var to = $('#emailLink').textContent.trim();
    var subject = 'Portfolio message from ' + name;
    var body = text + '\n\n' + name + '\n' + email;
    window.location.href = 'mailto:' + to + '?subject=' + encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    msg.textContent = 'Your email app should open with the message ready to send.';
  });

  $('#year').textContent = new Date().getFullYear();
  updateThemeLabel();
})();
