/* =========================================================
   Nada Alrbeihat | Portfolio
   1. Translation dictionary (EN / AR)
   2. Theme switcher        (mandatory feature)
   3. Language switcher (bonus: EN / AR with RTL)
   4. Mobile menu
   5. Contact form validation
   ========================================================= */

/* ---------- 1. Translation dictionary ---------- */
const translations = {
  en: {
    pageTitle: "Nada Alrbeihat | Portfolio",
    nav_about: "About",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_training: "Training",
    training_title: "Training",
    latest_badge: "Currently training",
    t42_title: "Web Development & Cybersecurity at 42 Amman",
    t42_org: "42 Amman, a Crown Prince Foundation program, in partnership with the Abdulla Al Ghurair Foundation",
    t42_desc: "A tuition-free training program in web development and cybersecurity at 42 Amman, a Crown Prince Foundation program within the global 42 network, in partnership with the Abdulla Al Ghurair Foundation. I am still enrolled. It is project-based with no teachers: learning happens peer to peer, and every exercise is reviewed and defended in front of fellow students.",
    t42_tag1: "Linux & shell",
    t42_tag2: "Git",
    t42_tag3: "HTML & CSS",
    t42_tag4: "JavaScript",
    t42_tag6: "Cybersecurity",
    t42_tag5: "Peer evaluation",
    tr1_title: "Cyber Advance for Women in MENA",
    tr1_org: "Correlation One, remote · June to November 2025",
    tr1_desc: "A 22-week program covering networking, security controls, threat analysis, incident response and risk management, with 16 labs and projects and 17 real-world case studies.",
    tr2_title: "Masar Training Program",
    tr2_org: "National Cybersecurity Center, Jordan",
    tr2_desc: "Hands-on cybersecurity training delivered by Jordan's national center.",
    tr3_title: "Advanced GRC Course",
    tr3_org: "Green Circle, Youth Grow Activity",
    tr3_desc: "Governance, risk and compliance, including a GRC training track certificate.",
    edu_title: "Education",
    edu_org: "Al-Balqa Applied University",
    edu_desc: "B.Sc. in Cybersecurity, 2026.",
    certs_title: "Certifications",
    cert_ccna: "CCNA (Cisco)",
    cert_linux: "Linux 101",
    cert_sumo: "SUMO Robotics Workshop",
    cert_active: "Active Defense: The New Frontier in Cybersecurity",

    nav_hobbies: "Hobbies",
    nav_contact: "Contact",
    aria_lang: "Switch language to Arabic",
    aria_theme: "Switch between light and dark theme",
    aria_menu: "Open or close the menu",
    langButton: "العربية",

    hero_hello: "Hi, I'm",
    hero_name: "Nada Alrbeihat",
    hero_role: "Cybersecurity student & web developer",
    hero_bio: "I'm a CompTIA Security+ certified cybersecurity student trained at Jordan's National Cybersecurity Center. I build secure, responsive web projects, support students with disabilities as a volunteer, and write about national cybersecurity events as a technology journalist.",
    hero_cv: "Download CV",
    hero_contact: "Get in touch",
    photoAlt: "Nada sitting in a blue vintage café",

    skills_title: "Skills",
    skill_python: "Full-stack apps, bots and automation.",
    skill_js: "DOM manipulation and interactive pages.",
    skill_html: "Semantic markup, Flexbox, responsive design.",
    skill_cpp: "Core programming and database queries.",
    skill_net_t: "Networking",
    skill_net: "TCP/IP, VLANs, firewalls, VPNs (CCNA).",
    skill_linux_t: "Linux",
    skill_linux: "Ubuntu and Kali, command line workflows.",
    skill_sec_t: "Security & GRC",
    skill_sec: "Risk assessment, access control, secure coding.",
    skill_git: "Version control with clear, step-by-step commits.",

    projects_title: "Projects",
    p0_title: "Project 00: Linux & Git",
    p0_desc: "Four shell and Git exercises, including a file-management script.",
    p1_title: "Project 01: HTML",
    p1_desc: "Six exercises building web pages with semantic HTML.",
    p2_title: "Project 02: Web pages",
    p2_desc: "Seven exercises building and styling web pages.",
    p3_title: "Project 03: JavaScript",
    p3_desc: "Five exercises bringing pages to life with JavaScript.",
    p4_title: "Phyrexian Keyboard",
    p4_desc: "An Android keyboard app for Magic: The Gathering fans.",
    view_project: "View on GitHub",

    hobbies_title: "Hobbies",
    hob1_t: "Cybersecurity labs",
    hob1: "Practicing forensics, cryptography and threat analysis.",
    hob2_t: "Tech writing",
    hob2: "Covering national cybersecurity events as a journalist.",
    hob3_t: "Volunteering",
    hob3: "Supporting students with disabilities through technology.",
    hob4_t: "Robotics",
    hob4: "Exploring embedded systems and SUMO robot logic.",

    contact_title: "Contact",
    contact_text: "Have a question or an opportunity? Send me a message and I'll reply as soon as I can.",
    form_name: "Name",
    form_name_ph: "Your name",
    form_email: "Email",
    form_email_ph: "you@example.com",
    form_message: "Message",
    form_message_ph: "Write your message here",
    form_send: "Send message",
    form_error_empty: "Please fill in every field.",
    form_error_email: "Please enter a valid email address.",
    form_success: "Thank you! Your message is ready to send.",

    footer_copy: "© 2026 Nada Alrbeihat. Built from scratch with HTML, CSS and JavaScript.",
    footer_email: "Email"
  },

  ar: {
    pageTitle: "ندى الربيحات | الملف الشخصي",
    nav_about: "نبذة عني",
    nav_skills: "المهارات",
    nav_projects: "المشاريع",
    nav_training: "التدريب",
    training_title: "التدريب",
    latest_badge: "أتدرّب حاليًا",
    t42_title: "تطوير الويب والأمن السيبراني في 42 عمّان",
    t42_org: "42 عمّان، أحد برامج مؤسسة ولي العهد، بالشراكة مع مؤسسة عبدالله الغرير",
    t42_desc: "برنامج تدريبي مجاني في تطوير الويب والأمن السيبراني ضمن 42 عمّان، وهو أحد برامج مؤسسة ولي العهد ضمن شبكة 42 العالمية، بالشراكة مع مؤسسة عبدالله الغرير. ما زلت ملتحقة به. التعلم قائم على المشاريع وبدون معلمين: يتم بين الزملاء، وكل تمرين تتم مراجعته والدفاع عنه أمام الطلاب.",
    t42_tag1: "لينكس وShell",
    t42_tag2: "Git",
    t42_tag3: "HTML وCSS",
    t42_tag4: "JavaScript",
    t42_tag6: "الأمن السيبراني",
    t42_tag5: "التقييم بين الزملاء",
    tr1_title: "Cyber Advance للنساء في الشرق الأوسط وشمال أفريقيا",
    tr1_org: "Correlation One، عن بُعد · حزيران إلى تشرين الثاني 2025",
    tr1_desc: "برنامج مدته 22 أسبوعًا يغطي الشبكات وضوابط الأمن وتحليل التهديدات والاستجابة للحوادث وإدارة المخاطر، مع 16 مختبرًا ومشروعًا و17 دراسة حالة واقعية.",
    tr2_title: "برنامج مسار التدريبي",
    tr2_org: "المركز الوطني للأمن السيبراني، الأردن",
    tr2_desc: "تدريب عملي في الأمن السيبراني يقدمه المركز الوطني في الأردن.",
    tr3_title: "دورة GRC المتقدمة",
    tr3_org: "الدائرة الخضراء (Green Circle)، نشاط Youth Grow",
    tr3_desc: "الحوكمة وإدارة المخاطر والامتثال، مع شهادة تدريب في مسار GRC.",
    edu_title: "التعليم",
    edu_org: "جامعة البلقاء التطبيقية",
    edu_desc: "بكالوريوس في الأمن السيبراني، 2026.",
    certs_title: "الشهادات",
    cert_ccna: "CCNA (سيسكو)",
    cert_linux: "Linux 101",
    cert_sumo: "ورشة روبوتات السومو",
    cert_active: "Active Defense: The New Frontier in Cybersecurity",

    nav_hobbies: "الهوايات",
    nav_contact: "تواصل معي",
    aria_lang: "تغيير اللغة إلى الإنجليزية",
    aria_theme: "التبديل بين الوضع الفاتح والداكن",
    aria_menu: "فتح القائمة أو إغلاقها",
    langButton: "English",

    hero_hello: "مرحبًا، أنا",
    hero_name: "ندى الربيحات",
    hero_role: "طالبة أمن سيبراني ومطوّرة ويب",
    hero_bio: "أنا طالبة أمن سيبراني حاصلة على شهادة CompTIA Security+، تدرّبت في المركز الوطني للأمن السيبراني في الأردن. أبني مشاريع ويب آمنة ومتجاوبة، وأتطوع لدعم الطلاب ذوي الإعاقة، وأكتب كصحفية تقنية عن فعاليات الأمن السيبراني الوطنية.",
    hero_cv: "تحميل السيرة الذاتية",
    hero_contact: "تواصل معي",
    photoAlt: "ندى تجلس في مقهى قديم أزرق اللون",

    skills_title: "المهارات",
    skill_python: "تطبيقات متكاملة وبوتات وأتمتة.",
    skill_js: "التعامل مع DOM وبناء صفحات تفاعلية.",
    skill_html: "ترميز دلالي وFlexbox وتصميم متجاوب.",
    skill_cpp: "برمجة أساسية واستعلامات قواعد البيانات.",
    skill_net_t: "الشبكات",
    skill_net: "TCP/IP وVLANs والجدران النارية وVPN (CCNA).",
    skill_linux_t: "لينكس",
    skill_linux: "Ubuntu وKali وسير عمل سطر الأوامر.",
    skill_sec_t: "الأمن والحوكمة (GRC)",
    skill_sec: "تقييم المخاطر والتحكم بالوصول والبرمجة الآمنة.",
    skill_git: "التحكم بالإصدارات مع commits واضحة ومتدرجة.",

    projects_title: "المشاريع",
    p0_title: "المشروع 00: لينكس وGit",
    p0_desc: "أربعة تمارين Shell وGit، منها سكربت لإدارة الملفات.",
    p1_title: "المشروع 01: HTML",
    p1_desc: "ستة تمارين لبناء صفحات ويب بـ HTML دلالي.",
    p2_title: "المشروع 02: صفحات الويب",
    p2_desc: "سبعة تمارين لبناء صفحات الويب وتنسيقها.",
    p3_title: "المشروع 03: JavaScript",
    p3_desc: "خمسة تمارين لإضافة التفاعل للصفحات باستخدام JavaScript.",
    p4_title: "لوحة مفاتيح فيريكسية",
    p4_desc: "تطبيق لوحة مفاتيح أندرويد لمحبي لعبة Magic: The Gathering.",
    view_project: "عرض على GitHub",

    hobbies_title: "الهوايات",
    hob1_t: "مختبرات الأمن السيبراني",
    hob1: "التدرّب على التحليل الجنائي والتشفير وتحليل التهديدات.",
    hob2_t: "الكتابة التقنية",
    hob2: "تغطية فعاليات الأمن السيبراني الوطنية كصحفية.",
    hob3_t: "العمل التطوعي",
    hob3: "دعم الطلاب ذوي الإعاقة من خلال التكنولوجيا.",
    hob4_t: "الروبوتات",
    hob4: "استكشاف الأنظمة المدمجة ومنطق روبوتات السومو.",

    contact_title: "تواصل معي",
    contact_text: "لديك سؤال أو فرصة؟ أرسل لي رسالة وسأرد عليك بأسرع وقت.",
    form_name: "الاسم",
    form_name_ph: "اسمك",
    form_email: "البريد الإلكتروني",
    form_email_ph: "you@example.com",
    form_message: "الرسالة",
    form_message_ph: "اكتب رسالتك هنا",
    form_send: "إرسال الرسالة",
    form_error_empty: "يرجى تعبئة جميع الحقول.",
    form_error_email: "يرجى إدخال بريد إلكتروني صحيح.",
    form_success: "شكرًا لك! رسالتك جاهزة للإرسال.",

    footer_copy: "© 2026 ندى الربيحات. تم بناؤه من الصفر باستخدام HTML وCSS وJavaScript.",
    footer_email: "البريد"
  }
};

/* ---------- Shared state ---------- */
const root = document.documentElement;
let currentLang = "en";
let formStatusKey = null; // remembers the last form message so it can be re-translated

/* Small helpers: localStorage can fail in private mode, so we wrap it */
function saveSetting(key, value) {
  try { localStorage.setItem(key, value); } catch (e) { /* ignore */ }
}
function loadSetting(key) {
  try { return localStorage.getItem(key); } catch (e) { return null; }
}

/* ---------- 2. Theme switcher ----------
   User click -> "click" event fires -> toggleTheme() callback
   -> data-theme attribute changes on <html> -> CSS variables change
   -> background and colors update instantly. */
const themeButton = document.getElementById("theme-toggle");

function applyTheme(theme) {
  root.setAttribute("data-theme", theme);
  themeButton.setAttribute("aria-pressed", String(theme === "dark"));
  saveSetting("theme", theme);
}

function toggleTheme() {
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  applyTheme(next);
}

themeButton.addEventListener("click", toggleTheme);

/* ---------- 3. Language switcher ---------- */
const langButton = document.getElementById("lang-toggle");
const formStatus = document.getElementById("form-status");

function applyLanguage(lang) {
  currentLang = lang;
  const dict = translations[lang];

  // Document language and direction (RTL for Arabic)
  root.setAttribute("lang", lang);
  root.setAttribute("dir", lang === "ar" ? "rtl" : "ltr");
  document.title = dict.pageTitle;

  // Text content
  document.querySelectorAll("[data-i18n]").forEach(function (el) {
    const key = el.dataset.i18n;
    if (dict[key] !== undefined) el.textContent = dict[key];
  });

  // Input placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
    const key = el.dataset.i18nPlaceholder;
    if (dict[key] !== undefined) el.placeholder = dict[key];
  });

  // Accessibility labels
  document.querySelectorAll("[data-i18n-aria]").forEach(function (el) {
    const key = el.dataset.i18nAria;
    if (dict[key] !== undefined) el.setAttribute("aria-label", dict[key]);
  });

  // The button shows the OTHER language
  langButton.textContent = dict.langButton;

  // Image alt text
  document.querySelectorAll("[data-i18n-alt]").forEach(function (el) {
    const key = el.dataset.i18nAlt;
    if (dict[key] !== undefined) el.alt = dict[key];
  });

  // Re-translate any visible form message
  if (formStatusKey) formStatus.textContent = dict[formStatusKey];

  saveSetting("lang", lang);
}

langButton.addEventListener("click", function () {
  applyLanguage(currentLang === "en" ? "ar" : "en");
});

/* ---------- 4. Mobile menu ---------- */
const menuButton = document.getElementById("menu-toggle");
const navLinks = document.getElementById("main-nav");

menuButton.addEventListener("click", function () {
  const isOpen = navLinks.classList.toggle("is-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
});

navLinks.querySelectorAll("a").forEach(function (link) {
  link.addEventListener("click", function () {
    navLinks.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
  });
});

/* ---------- 5. Contact form validation ---------- */
const form = document.getElementById("contact-form");

function showFormMessage(key, type) {
  formStatusKey = key;
  formStatus.textContent = translations[currentLang][key];
  formStatus.className = "form-status " + type;
}

form.addEventListener("submit", function (event) {
  event.preventDefault(); // stop the page from reloading

  const fields = [form.elements.name, form.elements.email, form.elements.message];
  let hasEmpty = false;

  fields.forEach(function (field) {
    const empty = field.value.trim() === "";
    field.classList.toggle("is-invalid", empty);
    if (empty) hasEmpty = true;
  });

  if (hasEmpty) {
    showFormMessage("form_error_empty", "is-error");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(form.elements.email.value.trim())) {
    form.elements.email.classList.add("is-invalid");
    showFormMessage("form_error_email", "is-error");
    return;
  }

  showFormMessage("form_success", "is-success");
  form.reset();
});

/* ---------- Start-up: restore saved settings ---------- */
const savedTheme = loadSetting("theme");
if (savedTheme === "dark" || savedTheme === "light") applyTheme(savedTheme);

const savedLang = loadSetting("lang");
if (savedLang === "ar") applyLanguage("ar");
