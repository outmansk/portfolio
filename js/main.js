/* Portfolio Outman Skikin — bouton FR/EN, carrousel de projets, slider de compétences.
   Le HTML contient déjà la version française (pour le SEO) ; ce script la remplace
   par la version anglaise quand on clique sur « EN », et inversement.
   ⚠ Si vous modifiez un texte français, changez-le à la fois dans index.html et ici. */
(function () {
  'use strict';

  var T = {
    fr: {
      meta: {
        title: 'Outman Skikin — Ingénieur informatique & IA, stage PFE 2027',
        description: 'Élève ingénieur en informatique et IA à Marrakech : développement full-stack, machine learning et automatisation. Disponible en stage PFE dès février 2027.'
      },
      nav: { exp: 'Parcours', projects: 'Projets', skills: 'Compétences', contact: 'Contact' },
      skip: 'Aller au contenu',
      status: 'Disponible · Stage PFE dès février 2027',
      kicker: 'Élève ingénieur en informatique et systèmes d’information — Université Privée de Marrakech',
      photoAlt: 'Photo d’Outman Skikin, élève ingénieur en informatique et IA',
      title1: 'Je conçois des solutions logicielles',
      title2: 'utiles, quel que soit le secteur.',
      sub: 'Développement full-stack, machine learning, deep learning et LLM, automatisation de workflows et systèmes d’information. Curieux et adaptable, je souhaite rejoindre une équipe en ESN, dans le conseil, l’industrie, l’automobile ou la finance. Basé à Marrakech, mobile.',
      openTo: 'Ouvert à :',
      sectors: ['ESN & conseil', 'Automobile', 'Industrie', 'Banque & finance', 'Télécoms', 'E-commerce', 'Santé'],
      cta1: 'Me contacter', cta2: 'Voir les projets', cvLabel: 'Télécharger mon CV',
      facts: [
        { v: '5', l: 'expériences en entreprise' },
        { v: '3', l: 'langues : arabe, français C1, anglais B2' },
        { v: '2027', l: 'diplôme d’ingénieur' },
        { v: '5', l: 'projets présentés' }
      ],
      focusTitle: 'Un profil polyvalent, du code au processus métier.',
      focus: [
        { title: 'Applications web', text: 'Next.js, React et API REST Express, bases MySQL/Prisma, authentification JWT, gestion des rôles et tableaux de bord temps réel.' },
        { title: 'Machine learning & IA', text: 'Entraînement de modèles de machine learning et de deep learning (vision par ordinateur), entraînement et intégration de LLM pour classifier, rédiger et personnaliser.' },
        { title: 'Automatisation', text: 'Automatisation de workflows et agents IA pour la prospection, les newsletters, les RH et la finance : de la collecte de données jusqu’à l’action.' }
      ],
      expTitle: 'Des expériences variées : développement, IA, automatisation et SI.',
      exp: [
        { period: 'Juil. – Août 2026', place: 'Marrakech · Sur site', role: 'Développeur web full-stack', company: 'Norsys Afrique',
          points: ['Projet ABEED : application de gestion des bénéficiaires avec Next.js/React, API REST Express.js et MySQL/Prisma.', 'Authentification JWT, hachage bcryptjs et gestion des rôles utilisateur / administrateur.', 'Formulaire en six étapes, tableau de bord temps réel avec SSE et tests fonctionnels.', 'Travail en équipe sur GitLab : gestion des versions, branches et merge requests.'],
          tagline: 'Stage PFA · Next.js, React, Express, MySQL, Prisma, GitLab' },
        { period: 'Janv. – Juin 2026', place: 'Freelance · À distance', role: 'Développeur en automatisation', company: 'NoCode IA Toulouse',
          points: ['Système de prospection automatisée : collecte de données, workflows automatisés et personnalisation avec Google Gemini.', 'Application web de suivi des performances.'],
          tagline: 'Workflows, agents IA, Gemini' },
        { period: 'Mars – Sept. 2025', place: 'PFE de licence', role: 'Développement & automatisation', company: 'iaweb.dev',
          points: ['Workflows d’automatisation et agents IA pour des besoins B2B.', 'Traitement des demandes d’absence RH avec génération automatique de PDF.', 'Classification d’e-mails et rapprochement de données bancaires.', 'Rapports d’aide à l’analyse des risques post-opératoires (OpenAI, Airtable).', 'Traitement de dossiers de sinistres et scoring de suspicion de fraude.'],
          tagline: 'Agents IA, GPT-4o, JavaScript, Python' },
        { period: 'Sept. – Oct. 2024', place: 'Lesquin, France · Sur site', role: 'Stagiaire automatisation', company: 'Havet Digital',
          points: ['Newsletter automatisée de bout en bout : collecte des leads, envoi et relance.', 'Qualification et segmentation automatisées des contacts.'],
          tagline: 'Lead generation, emailing, automatisation' },
        { period: 'Mai – Juil. 2023', place: 'Stage', role: 'Stagiaire informatique', company: 'Groupe Alliances',
          points: ['Rédaction de requêtes SQL et extraction de données.', 'Participation à la maintenance de systèmes existants.'],
          tagline: 'SQL, Merise' }
      ],
      projTitle: 'Une sélection de projets.',
      prevLabel: 'Projet précédent', nextLabel: 'Projet suivant',
      projects: [
        { kind: 'Plateforme IA', title: 'HD Automatisation', text: 'Plateforme d’automatisation IA et no-code : assistant conversationnel et suite d’outils HD Leads, HD Newsletter, HD Ads, HD Images et HD WorkFlow.', url: 'https://hdautomatisation.fr/', linkLabel: 'Voir le site', tags: ['Agents IA', 'Workflows', 'Gemini', 'No-code'] },
        { kind: 'Deep learning', title: 'Reconnaissance d’émotions', text: 'Classification de sept expressions faciales à partir de FER-2013 : détection de visages OpenCV, préparation des données, entraînement et évaluation TensorFlow/Keras, interface Flask.', url: '', linkLabel: '', tags: ['TensorFlow', 'Keras', 'OpenCV', 'Flask'] },
        { kind: 'Application web', title: 'UPM Events', text: 'Gestion d’événements universitaires : comptes et rôles, base Firebase/Firestore et assistance contextuelle avec Google GenAI.', url: '', linkLabel: '', tags: ['Firebase', 'Firestore', 'Google GenAI'] },
        { kind: 'Immobilier', title: 'Live in Marrakech', text: 'Plateforme immobilière avec espace d’administration, filtres de recherche et carte interactive.', url: 'https://liveinmarrakech.com/', linkLabel: 'Voir le site', tags: ['React', 'TypeScript', 'Carte interactive'] },
        { kind: 'Restauration', title: 'Josef Marrakech', text: 'Site de boulangerie-pâtisserie et bistrot avec carte digitale et galerie de produits.', url: 'https://josef.ma/', linkLabel: 'Voir le site', tags: ['React', 'TypeScript', 'Tailwind CSS'] }
      ],
      stackTitle: 'Compétences.',
      row2: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'TensorFlow', 'OpenCV', 'Python', 'Création d’agents IA', 'n8n', 'Make', 'Zapier', 'Automatisation de workflows', 'Claude Code', 'Codex', 'MCP'],
      stack: [
        { title: 'Développement', line: 'React, Next.js, Vue 3, JavaScript, TypeScript, Tailwind CSS, Node.js, Express.js, API REST, JWT, Python, Java, Spring Boot' },
        { title: 'IA & data', line: 'Machine Learning, Deep Learning, Computer Vision, TensorFlow/Keras, scikit-learn, OpenCV, NumPy, pandas' },
        { title: 'Agents IA & automatisation', line: 'Création d’agents IA, automatisation de workflows, n8n, Make, Zapier, webhooks, intégrations API, MCP, Claude Code, Codex' },
        { title: 'Données & outils', line: 'MySQL, PostgreSQL, Prisma, Firebase, SQL, Git, GitLab, Docker, Linux' }
      ],
      eduTag: 'Formation',
      eduSchool: 'Université Privée de Marrakech',
      eduText: 'Cycle ingénieur en informatique et systèmes d’information, parcours Intelligence artificielle (2022 – 2027, dernière année). Licence en informatique – Développement logiciel et systèmes automatisés (2021 – 2023). Baccalauréat sciences physiques (2021).',
      certTag: 'Certifications, langues & engagements',
      certs: [{ name: 'AI for Marketing', meta: 'LinkedIn · 2026' }, { name: 'L’essentiel de Spring Boot', meta: 'LinkedIn · 2026' }, { name: 'Arabe · Français · Anglais', meta: 'Natif · C1 · B2' }, { name: 'UPM IT Club', meta: 'Vice-président' }, { name: 'ROAD Amal', meta: 'Secrétaire général' }, { name: 'Kech Art', meta: 'Membre actif' }],
      ctaTitle: 'Vous recrutez un stagiaire PFE ?',
      ctaText: 'Développement logiciel, data & IA, automatisation, systèmes d’information ou conseil : je suis ouvert à tous les secteurs et disponible à partir de février 2027.',
      footer: 'Marrakech, Maroc'
    },
    en: {
      meta: {
        title: 'Outman Skikin — Computer & AI engineering student, 2027 internship',
        description: 'Computer science and AI engineering student in Marrakech: full-stack development, machine learning and automation. Available for a final-year internship from February 2027.'
      },
      nav: { exp: 'Experience', projects: 'Projects', skills: 'Skills', contact: 'Contact' },
      skip: 'Skip to content',
      status: 'Available · Final-year internship from February 2027',
      kicker: 'Engineering student in computer science and information systems — Private University of Marrakech',
      photoAlt: 'Photo of Outman Skikin, computer science and AI engineering student',
      title1: 'I build software solutions',
      title2: 'that matter, in any industry.',
      sub: 'Full-stack development, machine learning, deep learning and LLMs, workflow automation and information systems. Curious and adaptable, I want to join a team in IT services, consulting, manufacturing, automotive or finance. Based in Marrakech, open to relocation.',
      openTo: 'Open to:',
      sectors: ['IT services & consulting', 'Automotive', 'Manufacturing', 'Banking & finance', 'Telecoms', 'E-commerce', 'Healthcare'],
      cta1: 'Get in touch', cta2: 'See projects', cvLabel: 'Download my CV (FR)',
      facts: [
        { v: '5', l: 'professional experiences' },
        { v: '3', l: 'languages: Arabic, French C1, English B2' },
        { v: '2027', l: 'engineering degree' },
        { v: '5', l: 'featured projects' }
      ],
      focusTitle: 'A versatile profile, from code to business process.',
      focus: [
        { title: 'Web applications', text: 'Next.js, React and Express REST APIs, MySQL/Prisma databases, JWT authentication, role management and real-time dashboards.' },
        { title: 'Machine learning & AI', text: 'Training machine learning and deep learning models (computer vision), plus LLM training and integration to classify, write and personalise.' },
        { title: 'Automation', text: 'Workflow automation and AI agents for prospecting, newsletters, HR and finance: from data collection all the way to action.' }
      ],
      expTitle: 'Varied experience: development, AI, automation and IS.',
      exp: [
        { period: 'Jul – Aug 2026', place: 'Marrakech · On-site', role: 'Full-stack web developer', company: 'Norsys Afrique',
          points: ['ABEED project: beneficiary management app with Next.js/React, Express.js REST API and MySQL/Prisma.', 'JWT authentication, bcryptjs hashing and user / admin role management.', 'Six-step form, real-time dashboard with SSE and functional tests.', 'Team collaboration on GitLab: version control, branches and merge requests.'],
          tagline: 'Internship · Next.js, React, Express, MySQL, Prisma, GitLab' },
        { period: 'Jan – Jun 2026', place: 'Freelance · Remote', role: 'Automation developer', company: 'NoCode IA Toulouse',
          points: ['Automated prospecting system: data collection, automated workflows and personalisation with Google Gemini.', 'Performance-tracking web application.'],
          tagline: 'Workflows, AI agents, Gemini' },
        { period: 'Mar – Sep 2025', place: 'Bachelor’s final project', role: 'Development & automation', company: 'iaweb.dev',
          points: ['Automation workflows and AI agents for B2B needs.', 'HR leave-request processing with automatic PDF generation.', 'Email classification and bank-data reconciliation.', 'Reports supporting post-operative risk analysis (OpenAI, Airtable).', 'Insurance-claim processing and fraud-suspicion scoring.'],
          tagline: 'AI agents, GPT-4o, JavaScript, Python' },
        { period: 'Sep – Oct 2024', place: 'Lesquin, France · On-site', role: 'Automation intern', company: 'Havet Digital',
          points: ['End-to-end automated newsletter: lead collection, sending and follow-ups.', 'Automated contact qualification and segmentation.'],
          tagline: 'Lead generation, emailing, automation' },
        { period: 'May – Jul 2023', place: 'Internship', role: 'IT intern', company: 'Groupe Alliances',
          points: ['Writing SQL queries and extracting data.', 'Contributing to the maintenance of existing systems.'],
          tagline: 'SQL, Merise' }
      ],
      projTitle: 'Selected projects.',
      prevLabel: 'Previous project', nextLabel: 'Next project',
      projects: [
        { kind: 'AI platform', title: 'HD Automatisation', text: 'AI and no-code automation platform: a conversational assistant and a suite of tools — HD Leads, HD Newsletter, HD Ads, HD Images and HD WorkFlow.', url: 'https://hdautomatisation.fr/', linkLabel: 'Visit site', tags: ['AI agents', 'Workflows', 'Gemini', 'No-code'] },
        { kind: 'Deep learning', title: 'Emotion recognition', text: 'Seven-class facial-expression classification on FER-2013: OpenCV face detection, data preparation, TensorFlow/Keras training and evaluation, and a Flask interface.', url: '', linkLabel: '', tags: ['TensorFlow', 'Keras', 'OpenCV', 'Flask'] },
        { kind: 'Web app', title: 'UPM Events', text: 'University event management: accounts and roles, a Firebase/Firestore backend and contextual assistance with Google GenAI.', url: '', linkLabel: '', tags: ['Firebase', 'Firestore', 'Google GenAI'] },
        { kind: 'Real estate', title: 'Live in Marrakech', text: 'Real-estate platform with an admin area, search filters and an interactive map.', url: 'https://liveinmarrakech.com/', linkLabel: 'Visit site', tags: ['React', 'TypeScript', 'Interactive map'] },
        { kind: 'Hospitality', title: 'Josef Marrakech', text: 'Bakery, patisserie and bistro website with a digital menu and product gallery.', url: 'https://josef.ma/', linkLabel: 'Visit site', tags: ['React', 'TypeScript', 'Tailwind CSS'] }
      ],
      stackTitle: 'Skills.',
      row2: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'TensorFlow', 'OpenCV', 'Python', 'AI agent development', 'n8n', 'Make', 'Zapier', 'Workflow automation', 'Claude Code', 'Codex', 'MCP'],
      stack: [
        { title: 'Development', line: 'React, Next.js, Vue 3, JavaScript, TypeScript, Tailwind CSS, Node.js, Express.js, REST APIs, JWT, Python, Java, Spring Boot' },
        { title: 'AI & data', line: 'Machine Learning, Deep Learning, Computer Vision, TensorFlow/Keras, scikit-learn, OpenCV, NumPy, pandas' },
        { title: 'AI agents & automation', line: 'AI agent development, workflow automation, n8n, Make, Zapier, webhooks, API integrations, MCP, Claude Code, Codex' },
        { title: 'Data & tools', line: 'MySQL, PostgreSQL, Prisma, Firebase, SQL, Git, GitLab, Docker, Linux' }
      ],
      eduTag: 'Education',
      eduSchool: 'Private University of Marrakech',
      eduText: 'Engineering degree in computer science and information systems, Artificial Intelligence track (2022 – 2027, final year). Bachelor’s in computer science – software development and automated systems (2021 – 2023). Baccalaureate in physical sciences (2021).',
      certTag: 'Certifications, languages & involvement',
      certs: [{ name: 'AI for Marketing', meta: 'LinkedIn · 2026' }, { name: 'Spring Boot Essentials', meta: 'LinkedIn · 2026' }, { name: 'Arabic · French · English', meta: 'Native · C1 · B2' }, { name: 'UPM IT Club', meta: 'Vice-president' }, { name: 'ROAD Amal', meta: 'Secretary general' }, { name: 'Kech Art', meta: 'Active member' }],
      ctaTitle: 'Hiring a final-year intern?',
      ctaText: 'Software development, data & AI, automation, information systems or consulting: I am open to every industry and available from February 2027.',
      footer: 'Marrakech, Morocco'
    }
  };

  // Couleurs des couvertures du carrousel [fond, texte], une par projet.
  var PALETTE = [['#DCE3FA', '#14235F'], ['#F3E3D3', '#5A2A10'], ['#F6EDC8', '#4A3A05'], ['#D8EEE6', '#0D4A3A'], ['#ECE6F6', '#3A2563']];
  var ROW1 = ['React', 'Next.js', 'Vue 3', 'TypeScript', 'Node.js', 'Express.js', 'Java', 'Spring Boot', 'Tailwind CSS', 'PostgreSQL', 'MySQL', 'Prisma', 'Firebase', 'Docker', 'Git', 'GitLab', 'Linux'];

  var state = { lang: 'fr', idx: 0 };

  function $(sel) { return document.querySelector(sel); }
  function $$(sel) { return Array.prototype.slice.call(document.querySelectorAll(sel)); }
  function esc(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function get(obj, path) {
    return path.split('.').reduce(function (o, k) { return o == null ? o : o[k]; }, obj);
  }
  function pad(k) { return k < 10 ? '0' + k : '' + k; }

  /* ---------- Rendu des listes ---------- */
  function renderLists(t) {
    $('#sectors').innerHTML = t.sectors.map(function (s) {
      return '<span class="band-item">' + esc(s) + '</span>';
    }).join('');

    $('#facts').innerHTML = t.facts.map(function (f) {
      return '<div class="fact"><span class="fact-v">' + esc(f.v) + '</span><span class="fact-l">' + esc(f.l) + '</span></div>';
    }).join('');

    $('#focus').innerHTML = t.focus.map(function (c) {
      return '<div class="focus-item"><h3>' + esc(c.title) + '</h3><p>' + esc(c.text) + '</p></div>';
    }).join('');

    $('#exp-list').innerHTML = t.exp.map(function (e) {
      return '<article class="exp"><div class="exp-meta"><span class="exp-period">' + esc(e.period) +
        '</span><span class="exp-place">' + esc(e.place) + '</span></div><div class="exp-body"><h3>' + esc(e.role) +
        ' <span class="accent">— ' + esc(e.company) + '</span></h3><ul>' +
        e.points.map(function (p) { return '<li>' + esc(p) + '</li>'; }).join('') +
        '</ul><p class="exp-tag">' + esc(e.tagline) + '</p></div></article>';
    }).join('');

    $('#stack').innerHTML = t.stack.map(function (s) {
      return '<div class="stack-item"><h3>' + esc(s.title) + '</h3><p>' + esc(s.line) + '</p></div>';
    }).join('');

    $('#certs').innerHTML = t.certs.map(function (c) {
      return '<div class="cert"><span>' + esc(c.name) + '</span><span class="cert-meta">' + esc(c.meta) + '</span></div>';
    }).join('');

    renderMarquee(t);
  }

  /* ---------- Slider de compétences (liste doublée pour une boucle continue) ---------- */
  function chips(list, cls, withDot) {
    function one(label, hidden) {
      return '<span class="chip ' + cls + '"' + (hidden ? ' aria-hidden="true"' : '') + '>' +
        (withDot ? '<span class="chip-dot" aria-hidden="true"></span>' : '') + esc(label) + '</span>';
    }
    return list.map(function (s) { return one(s, false); }).join('') +
           list.map(function (s) { return one(s, true); }).join('');
  }
  function renderMarquee(t) {
    $('#mq1').innerHTML = chips(ROW1, 'chip-light', true);
    $('#mq2').innerHTML = chips(t.row2, 'chip-dark', false);
  }

  /* ---------- Carrousel de projets ---------- */
  function renderTabs(t) {
    $('#tabs').innerHTML = t.projects.map(function (p, i) {
      return '<button type="button" class="tab" role="tab" id="tab-' + i + '" aria-controls="slide" aria-selected="false" tabindex="-1" data-i="' + i + '">' + esc(p.title) + '</button>';
    }).join('');
    $('#dots').innerHTML = t.projects.map(function () { return '<span></span>'; }).join('');
  }

  function renderSlide() {
    var t = T[state.lang];
    var n = t.projects.length;
    var i = state.idx;
    var p = t.projects[i];
    var pal = PALETTE[i % PALETTE.length];
    var counter = pad(i + 1) + ' / ' + pad(n);

    var cover = $('#cover');
    cover.style.background = pal[0];
    cover.style.color = pal[1];
    $('#cover-kind').textContent = p.kind;
    $('#cover-title').textContent = p.title;
    $('#cover-count').textContent = counter;
    $('#counter').textContent = counter;
    $('#slide-title').textContent = p.title;
    $('#slide-text').textContent = p.text;
    $('#slide-tags').innerHTML = p.tags.map(function (tag) { return '<span class="tag">' + esc(tag) + '</span>'; }).join('');

    var link = $('#slide-link');
    if (p.url) {
      link.hidden = false;
      link.href = p.url;
      $('#slide-link-label').textContent = p.linkLabel;
    } else {
      link.hidden = true;
      link.removeAttribute('href');
    }

    $$('#tabs .tab').forEach(function (b, k) {
      b.setAttribute('aria-selected', k === i ? 'true' : 'false');
      b.tabIndex = k === i ? 0 : -1;
    });
    $('#slide').setAttribute('aria-labelledby', 'tab-' + i);
    $$('#dots span').forEach(function (d, k) { d.className = k === i ? 'on' : ''; });
  }

  function go(i) {
    var n = T[state.lang].projects.length;
    state.idx = (i + n) % n;
    renderSlide();
  }

  /* ---------- Langue ---------- */
  function setLang(lang) {
    if (!T[lang]) return;
    state.lang = lang;
    var t = T[lang];
    document.documentElement.lang = lang;
    document.title = t.meta.title;
    var desc = $('meta[name="description"]');
    if (desc) desc.setAttribute('content', t.meta.description);

    $$('[data-i18n]').forEach(function (el) {
      var v = get(t, el.getAttribute('data-i18n'));
      if (v != null) el.textContent = v;
    });
    $$('[data-i18n-aria]').forEach(function (el) {
      var v = get(t, el.getAttribute('data-i18n-aria'));
      if (v != null) el.setAttribute('aria-label', v);
    });
    $$('[data-i18n-alt]').forEach(function (el) {
      var v = get(t, el.getAttribute('data-i18n-alt'));
      if (v != null) el.setAttribute('alt', v);
    });
    $$('.lang button').forEach(function (b) {
      b.setAttribute('aria-pressed', b.getAttribute('data-lang') === lang ? 'true' : 'false');
    });

    renderLists(t);
    renderTabs(t);
    renderSlide();
  }

  /* ---------- Initialisation ---------- */
  function init() {
    $$('.lang button').forEach(function (b) {
      b.addEventListener('click', function () { setLang(b.getAttribute('data-lang')); });
    });
    $('#prev').addEventListener('click', function () { go(state.idx - 1); });
    $('#next').addEventListener('click', function () { go(state.idx + 1); });
    $('#tabs').addEventListener('click', function (e) {
      var b = e.target.closest('.tab');
      if (b) go(+b.getAttribute('data-i'));
    });
    $('#tabs').addEventListener('keydown', function (e) {
      if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
      e.preventDefault();
      go(state.idx + (e.key === 'ArrowRight' ? 1 : -1));
      var active = $('#tab-' + state.idx);
      if (active) active.focus();
    });

    // Le HTML est déjà en français : on complète seulement ce qui dépend du script.
    renderMarquee(T.fr);
    renderTabs(T.fr);
    renderSlide();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
