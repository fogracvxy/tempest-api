// Tempest API site: theme, search, copy buttons, code colours, "on this page" highlight. No libraries.
(function () {
  var root = document.documentElement;
  function setTheme(theme) {
    root.setAttribute('data-theme', theme);
    try { localStorage.setItem('tempest-theme', theme); } catch (e) { /* private window */ }
  }
  var saved = null;
  try { saved = localStorage.getItem('tempest-theme'); } catch (e) { /* private window */ }
  setTheme(saved || (window.matchMedia && matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));

  document.addEventListener('DOMContentLoaded', function () {
    var toggle = document.getElementById('theme');
    if (toggle) toggle.onclick = function () { setTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'); };
    var menu = document.getElementById('menu');
    if (menu) menu.onclick = function () { document.body.classList.toggle('menu'); };

    // Copy buttons
    document.querySelectorAll('.code').forEach(function (block) {
      var button = block.querySelector('.copy');
      var code = block.querySelector('code');
      button.onclick = function () {
        navigator.clipboard.writeText(code.textContent).then(function () {
          button.textContent = 'Copied'; button.classList.add('done');
          setTimeout(function () { button.textContent = 'Copy'; button.classList.remove('done'); }, 1400);
        });
      };
    });

    // Code colours: comments, strings, annotations, numbers, keywords
    var KEYWORDS = /^(public|private|protected|static|final|class|interface|enum|record|extends|implements|new|return|if|else|for|while|switch|case|default|break|continue|try|catch|finally|throw|throws|import|package|void|int|long|double|float|boolean|char|byte|short|var|null|true|false|this|super|instanceof|dependencies|repositories|compileOnly|implementation|maven|url)$/;
    function escape(s) { return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }
    document.querySelectorAll('pre code').forEach(function (el) {
      var lang = (el.className.match(/lang-(\w+)/) || [])[1] || '';
      if (!/java|groovy|kotlin|json|gradle/.test(lang)) return;
      var src = el.textContent, out = '', i = 0;
      var token = /(\/\/[^\n]*|\/\*[\s\S]*?\*\/)|("(?:[^"\\\n]|\\.)*"|'(?:[^'\\\n]|\\.)*')|(@[A-Za-z_]\w*)|(\b\d[\d_.]*[LlFfDd]?\b)|([A-Za-z_]\w*)/g;
      var m;
      while ((m = token.exec(src))) {
        out += escape(src.slice(i, m.index));
        var t = escape(m[0]);
        if (m[1]) out += '<span class="tk-c">' + t + '</span>';
        else if (m[2]) out += '<span class="tk-s">' + t + '</span>';
        else if (m[3]) out += '<span class="tk-a">' + t + '</span>';
        else if (m[4]) out += '<span class="tk-n">' + t + '</span>';
        else if (KEYWORDS.test(m[5])) out += '<span class="tk-k">' + t + '</span>';
        else out += t;
        i = token.lastIndex;
      }
      el.innerHTML = out + escape(src.slice(i));
    });

    // "On this page": the section being read
    var links = Array.prototype.slice.call(document.querySelectorAll('.toc a'));
    if (links.length && 'IntersectionObserver' in window) {
      var byId = {};
      links.forEach(function (a) { byId[a.getAttribute('href').slice(1)] = a; });
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting && byId[entry.target.id]) {
            links.forEach(function (a) { a.classList.remove('on'); });
            byId[entry.target.id].classList.add('on');
          }
        });
      }, { rootMargin: '-70px 0px -70% 0px' });
      Object.keys(byId).forEach(function (id) { var h = document.getElementById(id); if (h) observer.observe(h); });
    }

    // Search: pages and their sections, from search.json
    var input = document.getElementById('q');
    var box = document.getElementById('results');
    if (!input) return;
    var index = null, picked = -1;
    function load() {
      if (index) return Promise.resolve(index);
      return fetch('search.json').then(function (r) { return r.json(); }).then(function (data) { index = data; return data; });
    }
    function show(query) {
      var words = query.toLowerCase().split(/\s+/).filter(Boolean);
      if (!words.length) { box.classList.remove('open'); return; }
      load().then(function (pages) {
        var hits = [];
        pages.forEach(function (page) {
          page.sections.forEach(function (s) {
            var hay = (page.title + ' ' + s.title + ' ' + s.text).toLowerCase();
            if (words.every(function (w) { return hay.indexOf(w) >= 0; })) {
              var score = words.reduce(function (n, w) {
                return n + (s.title.toLowerCase().indexOf(w) >= 0 ? 5 : 0) + (page.title.toLowerCase().indexOf(w) >= 0 ? 3 : 0) + 1;
              }, 0);
              hits.push({ score: score, url: page.url + (s.id ? '#' + s.id : ''), title: s.title || page.title, where: page.group + ' / ' + page.title });
            }
          });
        });
        hits.sort(function (a, b) { return b.score - a.score; });
        picked = -1;
        box.innerHTML = hits.length ? hits.slice(0, 12).map(function (h) {
          return '<a href="' + h.url + '">' + escape(h.title) + '<small>' + escape(h.where) + '</small></a>';
        }).join('') : '<div class="none">Nothing found for "' + escape(query) + '"</div>';
        box.classList.add('open');
      });
    }
    input.addEventListener('input', function () { show(input.value.trim()); });
    input.addEventListener('focus', function () { load(); if (input.value.trim()) show(input.value.trim()); });
    input.addEventListener('keydown', function (e) {
      var items = box.querySelectorAll('a');
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        e.preventDefault();
        picked = Math.max(0, Math.min(items.length - 1, picked + (e.key === 'ArrowDown' ? 1 : -1)));
        items.forEach(function (a, n) { a.classList.toggle('active', n === picked); });
      } else if (e.key === 'Enter' && items.length) {
        location.href = items[Math.max(0, picked)].getAttribute('href');
      } else if (e.key === 'Escape') {
        box.classList.remove('open'); input.blur();
      }
    });
    document.addEventListener('click', function (e) { if (!e.target.closest('.search')) box.classList.remove('open'); });
    document.addEventListener('keydown', function (e) {
      if ((e.key === 'k' && (e.ctrlKey || e.metaKey)) || (e.key === '/' && document.activeElement === document.body)) {
        e.preventDefault(); input.focus(); input.select();
      }
    });
  });
})();
