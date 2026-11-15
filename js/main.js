/* Portfolio Outman Skikin — bouton FR/EN, carrousel de projets, animations.
   Le HTML contient déjà la version française (pour le SEO) ; ce script la remplace
   par la version anglaise quand on clique sur « EN », et inversement.
   ⚠ Si vous modifiez un texte français, changez-le à la fois dans index.html et ici. */
(function () {
  'use strict';

  var SKILLS = {
    dev: ['React', 'Next.js', 'Vue 3', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express.js', 'API REST', 'JWT', 'Python', 'Java', 'Spring Boot'],
    ai: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'TensorFlow/Keras', 'scikit-learn', 'OpenCV', 'NumPy', 'pandas'],
    auto: ['n8n', 'Make', 'Zapier', 'Webhooks', 'MCP', 'Claude Code', 'Codex'],
    data: ['MySQL', 'PostgreSQL', 'Prisma', 'Firebase', 'SQL', 'Git', 'GitLab', 'Docker', 'Linux']
  };

  var T = {
    fr: {
      meta: {
        title: 'Outman Skikin — Ingénieur informatique & IA, stage PFE 2027',
        description: 'Élève ingénieur en informatique et IA à Marrakech : développement full-stack, machine learning et automatisation. Disponible en stage PFE dès février 2027.'
      },
      skip: 'Aller au contenu', navLabel: 'Navigation principale', langLabel: 'Langue du site',
      nav1: 'Parcours', nav2: 'Projets', nav3: 'Compétences', nav4: 'Contact',
      avail: 'Disponible · Stage PFE dès février 2027',
      lines: [['Je conçois des', ''], ['solutions logicielles', ''], ['utiles, ', 'quel que soit'], ['', 'le secteur.']],
      sub: 'Développement full-stack, machine learning, deep learning et LLM, automatisation de workflows et systèmes d’information. Curieux et adaptable, je souhaite rejoindre une équipe en ESN, dans le conseil, l’industrie, l’automobile ou la finance. Basé à Marrakech, mobile.',
      b1: 'Me contacter', b2: 'Voir les projets', b3: 'Télécharger mon CV',
      photoAlt: 'Portrait d’Outman Skikin à Marrakech',
      caption: 'Élève ingénieur en informatique et systèmes d’information — Université Privée de Marrakech',
      openL: 'Ouvert à',
      sectors: ['ESN & conseil', 'Automobile', 'Industrie', 'Banque & finance', 'Télécoms', 'E-commerce', 'Santé'],
      statsLabel: 'Chiffres clés',
      stats: [
        { v: 5, l: 'expériences en entreprise', s: '' },
        { v: 3, l: 'langues', s: 'arabe, français C1, anglais B2' },
        { v: 2027, l: 'diplôme d’ingénieur', s: '' },
        { v: 5, l: 'projets présentés', s: '' }
      ],
      e1: 'Profil', e2: 'Parcours', e3: 'Projets', e4: 'Compétences', e5: 'Contact',
      profT: 'Un profil polyvalent, du code au processus métier.',
      areas: [
        { t: 'Applications web', d: 'Next.js, React et API REST Express, MySQL/Prisma, authentification JWT, gestion des rôles, tableaux de bord temps réel.' },
        { t: 'Machine learning & IA', d: 'Modèles de machine learning et deep learning (vision par ordinateur), entraînement et intégration de LLM.' },
        { t: 'Automatisation', d: 'Workflows et agents IA pour la prospection, les newsletters, les RH et la finance.' }
      ],
      tlT: 'Des expériences variées : développement, IA, automatisation et SI.',
      exp: [
        { date: 'Juil. – Août 2026', kind: 'Stage PFA', role: 'Développeur web full-stack', org: 'Norsys Afrique, Marrakech', text: 'Projet ABEED : gestion des bénéficiaires en Next.js/React, API Express, MySQL/Prisma ; JWT, bcryptjs, rôles ; formulaire en 6 étapes, tableau de bord temps réel (SSE) ; GitLab.' },
        { date: 'Janv. – Juin 2026', kind: 'Freelance, à distance', role: 'Développeur en automatisation', org: 'NoCode IA Toulouse', text: 'Prospection automatisée avec Google Gemini ; application de suivi des performances.' },
        { date: 'Mars – Sept. 2025', kind: 'PFE de licence', role: 'Développement & automatisation', org: 'iaweb.dev', text: 'Agents IA B2B, demandes d’absence RH avec PDF automatique, classification d’e-mails, rapprochement bancaire, rapports d’analyse de risques (OpenAI, Airtable), scoring de fraude.' },
        { date: 'Sept. – Oct. 2024', kind: 'Stage', role: 'Stagiaire automatisation', org: 'Havet Digital, Lesquin (France)', text: 'Newsletter automatisée de bout en bout, qualification et segmentation des contacts.' },
        { date: 'Mai – Juil. 2023', kind: 'Stage', role: 'Stagiaire informatique', org: 'Groupe Alliances', text: 'Requêtes SQL, extraction de données, maintenance de systèmes.' }
      ],
      pjT: 'Une sélection de projets.', prev: 'Projet précédent', next: 'Projet suivant', visit: 'Voir',
      projects: [
        { cat: 'Plateforme IA', name: 'HD Automatisation', desc: 'Plateforme d’automatisation IA et no-code : assistant conversationnel et outils HD Leads, Newsletter, Ads, Images, WorkFlow.', tags: ['Agents IA', 'Workflows', 'Gemini', 'No-code'], link: 'https://hdautomatisation.fr', domain: 'hdautomatisation.fr' },
        { cat: 'Deep learning', name: 'Reconnaissance d’émotions', desc: 'Classification de 7 expressions faciales (FER-2013), OpenCV, TensorFlow/Keras, interface Flask.', tags: ['FER-2013', 'OpenCV', 'TensorFlow/Keras', 'Flask'], link: '', domain: '7 expressions · FER-2013' },
        { cat: 'Application web', name: 'UPM Events', desc: 'Gestion d’événements universitaires, Firebase/Firestore, Google GenAI.', tags: ['Firebase', 'Firestore', 'Google GenAI'], link: '', domain: 'Université Privée de Marrakech' },
        { cat: 'Immobilier', name: 'Live in Marrakech', desc: 'Plateforme immobilière avec administration, filtres et carte interactive.', tags: ['React', 'TypeScript'], link: 'https://liveinmarrakech.com', domain: 'liveinmarrakech.com' },
        { cat: 'Restauration', name: 'Josef Marrakech', desc: 'Site de boulangerie-pâtisserie et bistrot, carte digitale.', tags: ['React', 'TypeScript', 'Tailwind'], link: 'https://josef.ma', domain: 'josef.ma' }
      ],
      skT: 'Compétences et formation.',
      skills: [
        { h: 'Développement', items: SKILLS.dev },
        { h: 'IA & data', items: SKILLS.ai },
        { h: 'Agents IA & automatisation', items: SKILLS.auto },
        { h: 'Données & outils', items: SKILLS.data }
      ],
      eduT: 'Formation',
      edu: [
        { y: '2022–2027', a: 'Cycle ingénieur en informatique et systèmes d’information, parcours IA', b: 'Université Privée de Marrakech' },
        { y: '2021–2023', a: 'Licence en informatique', b: '' },
        { y: '2021', a: 'Baccalauréat sciences physiques', b: '' }
      ],
      certT: 'Certifications, langues et engagements',
      cg: [
        { h: 'Certifications', items: [['AI for Marketing', '— LinkedIn, 2026'], ['L’essentiel de Spring Boot', '— LinkedIn, 2026']] },
        { h: 'Langues', items: [['Arabe', '— natif'], ['Français', '— C1'], ['Anglais', '— B2']] },
        { h: 'Engagements', items: [['UPM IT Club', '— vice-président'], ['ROAD Amal', '— secrétaire général'], ['Kech Art', '— membre actif']] }
      ],
      ctT: 'Vous recrutez un stagiaire PFE ?',
      ctP: 'Développement logiciel, data & IA, automatisation, systèmes d’information ou conseil : je suis ouvert à tous les secteurs et disponible à partir de février 2027.',
      foot: '© 2026 Outman Skikin · Marrakech, Maroc', top: 'Haut de page'
    },
    en: {
      meta: {
        title: 'Outman Skikin — Computer & AI engineering student, 2027 internship',
        description: 'Computer science and AI engineering student in Marrakech: full-stack development, machine learning and automation. Available for a final-year internship from February 2027.'
      },
      skip: 'Skip to content', navLabel: 'Main navigation', langLabel: 'Site language',
      nav1: 'Experience', nav2: 'Projects', nav3: 'Skills', nav4: 'Contact',
      avail: 'Available · Final-year internship from February 2027',
      lines: [['I build useful', ''], ['software solutions, ', ''], ['', 'whatever'], ['', 'the industry.']],
      sub: 'Full-stack development, machine learning, deep learning and LLMs, workflow automation and information systems. Curious and adaptable, I want to join a team at an IT services firm, in consulting, industry, automotive or finance. Based in Marrakech, open to relocation.',
      b1: 'Get in touch', b2: 'View projects', b3: 'Download my CV (FR)',
      photoAlt: 'Portrait of Outman Skikin in Marrakech',
      caption: 'Engineering student in computer science and information systems — Université Privée de Marrakech',
      openL: 'Open to',
      sectors: ['IT services & consulting', 'Automotive', 'Industry', 'Banking & finance', 'Telecoms', 'E-commerce', 'Healthcare'],
      statsLabel: 'Key figures',
      stats: [
        { v: 5, l: 'work experiences', s: '' },
        { v: 3, l: 'languages', s: 'Arabic, French C1, English B2' },
        { v: 2027, l: 'engineering degree', s: '' },
        { v: 5, l: 'featured projects', s: '' }
      ],
      e1: 'Profile', e2: 'Experience', e3: 'Projects', e4: 'Skills', e5: 'Contact',
      profT: 'A versatile profile, from code to business process.',
      areas: [
        { t: 'Web applications', d: 'Next.js, React and Express REST APIs, MySQL/Prisma, JWT authentication, role management, real-time dashboards.' },
        { t: 'Machine learning & AI', d: 'Machine learning and deep learning models (computer vision), LLM training and integration.' },
        { t: 'Automation', d: 'AI workflows and agents for prospecting, newsletters, HR and finance.' }
      ],
      tlT: 'Varied experience: development, AI, automation and information systems.',
      exp: [
        { date: 'Jul. – Aug. 2026', kind: 'Second-year internship', role: 'Full-stack web developer', org: 'Norsys Afrique, Marrakech', text: 'ABEED project: beneficiary management in Next.js/React, Express API, MySQL/Prisma; JWT, bcryptjs, roles; 6-step form, real-time dashboard (SSE); GitLab.' },
        { date: 'Jan. – Jun. 2026', kind: 'Freelance, remote', role: 'Automation developer', org: 'NoCode IA Toulouse', text: 'Automated prospecting with Google Gemini; performance-tracking application.' },
        { date: 'Mar. – Sep. 2025', kind: 'Bachelor’s final project', role: 'Development & automation', org: 'iaweb.dev', text: 'B2B AI agents, HR leave requests with automatic PDF, email classification, bank reconciliation, risk-analysis reports (OpenAI, Airtable), fraud scoring.' },
        { date: 'Sep. – Oct. 2024', kind: 'Internship', role: 'Automation intern', org: 'Havet Digital, Lesquin (France)', text: 'End-to-end automated newsletter, contact qualification and segmentation.' },
        { date: 'May – Jul. 2023', kind: 'Internship', role: 'IT intern', org: 'Groupe Alliances', text: 'SQL queries, data extraction, systems maintenance.' }
      ],
      pjT: 'A selection of projects.', prev: 'Previous project', next: 'Next project', visit: 'Visit',
      projects: [
        { cat: 'AI platform', name: 'HD Automatisation', desc: 'AI and no-code automation platform: conversational assistant and the HD Leads, Newsletter, Ads, Images and WorkFlow tools.', tags: ['AI agents', 'Workflows', 'Gemini', 'No-code'], link: 'https://hdautomatisation.fr', domain: 'hdautomatisation.fr' },
        { cat: 'Deep learning', name: 'Emotion recognition', desc: 'Classification of 7 facial expressions (FER-2013), OpenCV, TensorFlow/Keras, Flask interface.', tags: ['FER-2013', 'OpenCV', 'TensorFlow/Keras', 'Flask'], link: '', domain: '7 expressions · FER-2013' },
        { cat: 'Web application', name: 'UPM Events', desc: 'University event management, Firebase/Firestore, Google GenAI.', tags: ['Firebase', 'Firestore', 'Google GenAI'], link: '', domain: 'Université Privée de Marrakech' },
        { cat: 'Real estate', name: 'Live in Marrakech', desc: 'Real-estate platform with an admin back office, filters and an interactive map.', tags: ['React', 'TypeScript'], link: 'https://liveinmarrakech.com', domain: 'liveinmarrakech.com' },
        { cat: 'Food & hospitality', name: 'Josef Marrakech', desc: 'Website for a bakery, patisserie and bistro, with a digital menu.', tags: ['React', 'TypeScript', 'Tailwind'], link: 'https://josef.ma', domain: 'josef.ma' }
      ],
      skT: 'Skills and education.',
      skills: [
        { h: 'Development', items: SKILLS.dev.map(function (s) { return s === 'API REST' ? 'REST APIs' : s; }) },
        { h: 'AI & data', items: SKILLS.ai },
        { h: 'AI agents & automation', items: SKILLS.auto },
        { h: 'Data & tools', items: SKILLS.data }
      ],
      eduT: 'Education',
      edu: [
        { y: '2022–2027', a: 'Engineering degree in computer science and information systems, AI track', b: 'Université Privée de Marrakech' },
        { y: '2021–2023', a: 'Bachelor’s degree in computer science', b: '' },
        { y: '2021', a: 'Baccalaureate, physical sciences', b: '' }
      ],
      certT: 'Certifications, languages and involvement',
      cg: [
        { h: 'Certifications', items: [['AI for Marketing', '— LinkedIn, 2026'], ['L’essentiel de Spring Boot', '— LinkedIn, 2026']] },
        { h: 'Languages', items: [['Arabic', '— native'], ['French', '— C1'], ['English', '— B2']] },
        { h: 'Involvement', items: [['UPM IT Club', '— vice-president'], ['ROAD Amal', '— secretary general'], ['Kech Art', '— active member']] }
      ],
      ctT: 'Hiring a final-year intern?',
      ctP: 'Software development, data & AI, automation, information systems or consulting: I’m open to every sector and available from February 2027.',
      foot: '© 2026 Outman Skikin · Marrakech, Morocco', top: 'Back to top'
    }
  };

  var COVER_BG = ['#DDE5F3', '#EEE6D6', '#DFE8E0', '#E6E2F1', '#F1E4DB'];
  var ARROW_OUT = '<svg class="ar" width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M5 11L11 5M6 5h5v5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>';

  var state = { lang: 'fr', idx: 0 };
  var reduced = false;
  try { reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches; } catch (e) {}

  function $(s, root) { return (root || document).querySelector(s); }
  function $$(s, root) { return Array.prototype.slice.call((root || document).querySelectorAll(s)); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function li(items) { return items.map(function (x) { return '<li>' + esc(x) + '</li>'; }).join(''); }

  /* ---------- Rendu des listes traduites ---------- */
  function renderLists(t) {
    $('#h-hero').innerHTML = t.lines.map(function (l) {
      return '<span class="ln"><span class="ln-in">' + esc(l[0]) + (l[1] ? '<em class="acc">' + esc(l[1]) + '</em>' : '') + '</span></span>';
    }).join('');

    $('#open-list').innerHTML = li(t.sectors);

    $('#stats').innerHTML = t.stats.map(function (s) {
      return '<div class="stat"><p class="stat-v disp tnum" data-count="' + s.v + '">' + s.v + '</p><p class="stat-l">' + esc(s.l) + '</p>' +
        (s.s ? '<p class="stat-s">' + esc(s.s) + '</p>' : '') + '</div>';
    }).join('');

    $('#areas').innerHTML = t.areas.map(function (a, i) {
      return '<div class="area"><h3 class="area-h disp"><span class="area-n tnum">' + pad(i + 1) + '</span>' + esc(a.t) +
        '</h3><p class="area-d">' + esc(a.d) + '</p></div>';
    }).join('');

    $('#tl-list').innerHTML = t.exp.map(function (x) {
      return '<li class="tl-item"><div class="tl-left"><p class="tl-date tnum">' + esc(x.date) + '</p><p class="tl-kind">' + esc(x.kind) +
        '</p></div><div class="tl-mid" aria-hidden="true"><span class="tl-dot"></span></div><div class="tl-right"><h3 class="tl-role disp">' +
        esc(x.role) + '</h3><p class="tl-org">' + esc(x.org) + '</p><p class="tl-text">' + esc(x.text) + '</p></div></li>';
    }).join('');

    $('#pj-tabs').innerHTML = t.projects.map(function (p, i) {
      return '<button class="pj-tab" type="button" role="tab" aria-selected="false" aria-controls="pj-stage" data-i="' + i + '"><span class="pj-tab-n tnum">' +
        pad(i + 1) + '</span>' + esc(p.name) + '</button>';
    }).join('');
    $('#pj-cover').innerHTML = t.projects.map(function (p, i) {
      return '<div class="pj-panel pj-cv" data-i="' + i + '"><div class="pj-cv-top"><span class="tnum">' + pad(i + 1) + '</span><span>' + esc(p.cat) +
        '</span></div><div class="pj-cv-rule"></div><p class="pj-cv-name disp">' + esc(p.name) + '</p><p class="pj-cv-dom">' + esc(p.domain) + '</p></div>';
    }).join('');
    $('#pj-desc').innerHTML = t.projects.map(function (p, i) {
      return '<div class="pj-panel" data-i="' + i + '"><p class="pj-cat">' + esc(p.cat) + '</p><h3 class="pj-name disp">' + esc(p.name) +
        '</h3><p class="pj-text">' + esc(p.desc) + '</p><ul class="tags">' + li(p.tags) + '</ul>' +
        (p.link ? '<a class="lnk" href="' + esc(p.link) + '" target="_blank" rel="noopener"><span class="ul">' + esc(t.visit + ' ' + p.domain) + '</span>' + ARROW_OUT + '</a>' : '') +
        '</div>';
    }).join('');

    $('#sk-cols').innerHTML = t.skills.map(function (k) {
      return '<div><h3 class="sk-h disp">' + esc(k.h) + '</h3><ul class="sk-list">' + li(k.items) + '</ul></div>';
    }).join('');

    $('#edu').innerHTML = t.edu.map(function (e) {
      return '<div class="edu"><p class="edu-y tnum">' + esc(e.y) + '</p><div><p class="edu-a">' + esc(e.a) + '</p>' +
        (e.b ? '<p class="edu-b">' + esc(e.b) + '</p>' : '') + '</div></div>';
    }).join('');

    $('#cg').innerHTML = t.cg.map(function (g) {
      return '<div class="cg"><p class="cg-h">' + esc(g.h) + '</p><ul>' + g.items.map(function (it) {
        return '<li class="cg-li">' + esc(it[0]) + ' <span>' + esc(it[1]) + '</span></li>';
      }).join('') + '</ul></div>';
    }).join('');
  }

  /* ---------- Langue ---------- */
  function setLang(lang) {
    if (!T[lang] || lang === state.lang) return;
    state.lang = lang;
    var t = T[lang];
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    var desc = $('meta[name="description"]');
    if (desc) desc.setAttribute('content', t.meta.description);

    $$('[data-i18n]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n')];
      if (v != null) el.textContent = v;
    });
    $$('[data-i18n-aria]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n-aria')];
      if (v != null) el.setAttribute('aria-label', v);
    });
    $$('[data-i18n-alt]').forEach(function (el) {
      var v = t[el.getAttribute('data-i18n-alt')];
      if (v != null) el.setAttribute('alt', v);
    });
    $('#lang').setAttribute('data-lang', lang);
    $$('#lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    });

    renderLists(t);
    showSlide(state.idx);
    $$('.stat-v').forEach(function (el) { el.textContent = el.getAttribute('data-count'); });
    onScroll();
  }

  /* ---------- Carrousel de projets ---------- */
  function showSlide(i) {
    var n = T[state.lang].projects.length;
    state.idx = (i + n) % n;
    var k = state.idx;
    $('#pj-cur').textContent = pad(k + 1);
    $('#pj-bar').style.transform = 'scaleX(' + (k + 1) / n + ')';
    $('#pj-cover').style.backgroundColor = COVER_BG[k];
    $$('#pj-tabs .pj-tab').forEach(function (b, j) {
      b.setAttribute('aria-selected', j === k ? 'true' : 'false');
      b.tabIndex = j === k ? 0 : -1;
    });
    $$('#pj-cover .pj-panel, #pj-desc .pj-panel').forEach(function (p) {
      var on = +p.getAttribute('data-i') === k;
      p.classList.toggle('is-on', on);
      if (p.parentNode.id === 'pj-desc') {
        p.setAttribute('aria-hidden', on ? 'false' : 'true');
        $$('a', p).forEach(function (a) { a.tabIndex = on ? 0 : -1; });
      }
    });
  }

  function initCarousel() {
    $('#pj-prev').addEventListener('click', function () { showSlide(state.idx - 1); });
    $('#pj-next').addEventListener('click', function () { showSlide(state.idx + 1); });
    $('#pj-tabs').addEventListener('click', function (e) {
      var b = e.target.closest('.pj-tab');
      if (b) showSlide(+b.getAttribute('data-i'));
    });
    $('#pj').addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      showSlide(state.idx + (e.key === 'ArrowRight' ? 1 : -1));
      if (document.activeElement && document.activeElement.classList.contains('pj-tab')) {
        var cur = $('#pj-tabs .pj-tab[data-i="' + state.idx + '"]');
        if (cur) cur.focus();
      }
    });
    // glissé au doigt sur mobile
    var tx = null, ty = null, stage = $('#pj-stage');
    stage.addEventListener('touchstart', function (e) {
      var t = e.touches[0]; tx = t.clientX; ty = t.clientY;
    }, { passive: true });
    stage.addEventListener('touchend', function (e) {
      if (tx == null) return;
      var t = e.changedTouches[0], dx = t.clientX - tx, dy = t.clientY - ty;
      if (Math.abs(dx) > 40 && Math.abs(dx) > Math.abs(dy)) showSlide(state.idx + (dx < 0 ? 1 : -1));
      tx = null;
    }, { passive: true });
    showSlide(0);
  }

  /* ---------- Bandeaux de logos (liste doublée pour une boucle continue) ----------
     data-items = "fichier:Nom|…", logos dans assets/logos/<fichier>.svg (Simple Icons, CC0). */
  function initMarquee() {
    ['#mq1', '#mq2'].forEach(function (id) {
      var el = $(id), items = el.getAttribute('data-items').split('|');
      function tiles(cls) {
        return items.map(function (it) {
          var k = it.indexOf(':'), file = it.slice(0, k), name = it.slice(k + 1);
          return '<div class="' + cls + '"><img src="assets/logos/' + esc(file) + '.svg" width="40" height="40" alt="" decoding="async"><span>' +
            esc(name) + '</span></div>';
        }).join('');
      }
      el.innerHTML = tiles('lg') + tiles('lg lg-dup');
    });
  }

  /* ---------- Apparition au défilement + compteurs ---------- */
  function countUp(el) {
    var target = +el.getAttribute('data-count'), t0 = null;
    function step(now) {
      if (t0 == null) t0 = now;
      var k = Math.min(1, (now - t0) / 900), e = 1 - Math.pow(1 - k, 3);
      el.textContent = String(Math.round(target * e));
      if (k < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function initReveal() {
    var rv = $$('.rv');
    if (reduced || !('IntersectionObserver' in window)) {
      rv.forEach(function (el) { el.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add('in'); io.unobserve(en.target); }
      });
    }, { rootMargin: '0px 0px -8% 0px', threshold: 0.08 });
    rv.forEach(function (el) { io.observe(el); });

    var stats = $('#stats');
    $$('.stat-v', stats).forEach(function (el) { el.textContent = '0'; });
    var so = new IntersectionObserver(function (entries) {
      if (entries[0].isIntersecting) {
        $$('.stat-v', stats).forEach(countUp);
        so.disconnect();
      }
    }, { threshold: 0.4 });
    so.observe(stats);
  }

  /* ---------- En-tête compact + frise du parcours ---------- */
  var ticking = false;
  function onScroll() {
    var y = window.scrollY || window.pageYOffset;
    $('#hdr').classList.toggle('is-scrolled', y > 40);

    if (reduced) { $$('.tl-item').forEach(function (it) { it.classList.add('is-on'); }); return; }
    var tl = $('#tl'), r = tl.getBoundingClientRect(), vh = window.innerHeight;
    var line = vh * 0.6;
    var p = Math.max(0, Math.min(1, (line - r.top) / Math.max(1, r.height - 56)));
    $('#tl-fill').style.transform = 'scaleY(' + p.toFixed(4) + ')';
    $$('.tl-item').forEach(function (it) {
      var d = $('.tl-dot', it).getBoundingClientRect();
      it.classList.toggle('is-on', d.top < line);
    });
  }
  function requestScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(function () { ticking = false; onScroll(); });
  }

  /* ---------- Initialisation ---------- */
  function init() {
    $$('#lang button').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
    });
    initMarquee();
    initCarousel();
    initReveal();
    onScroll();
    window.addEventListener('scroll', requestScroll, { passive: true });
    window.addEventListener('resize', requestScroll);
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
