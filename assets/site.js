/* Playa Grande Gym — site behaviour
 *
 * SITE holds every business fact the page shows that wasn't in the brief.
 * Anything left empty renders as a yellow "TODO" marker on the page and a
 * console warning, so nothing ships with an invented value.
 */
const SITE = {
  whatsapp: "",            // international format, digits only, e.g. "50688887777"
  email: "",               // e.g. "hola@playagrandegym.com"
  instagram: "",           // handle without @, e.g. "playagrandegym"
  address: "Playa Grande, Guanacaste, Costa Rica", // refine with street / landmark directions
  hours: { en: "", es: "" }, // e.g. { en: "Mon–Sat 6am–7pm", es: "Lun–Sáb 6am–7pm" }
  prices: {
    day:  { en: "", es: "" }, // e.g. { en: "$15 / day", es: "$15 / día" }
    week: { en: "", es: "" }, // e.g. { en: "$60 / week", es: "$60 / semana" }
  },
};

/* ---------- translations (English lives in the HTML) ---------- */
const ES = {
  "skip": "Ir al contenido",
  "nav.training": "Entrenamiento",
  "nav.club": "Club de Mujeres",
  "nav.visitors": "Visitantes",
  "nav.gym": "El Gym",
  "nav.contact": "Contáctanos",

  "hero.eyebrow": "Playa Grande · Guanacaste · Costa Rica",
  "hero.title": "Cuerpo fuerte.<br>Alma <span>tropical</span>.",
  "hero.lead": "Un gimnasio de fuerza pequeño y amigable, rodeado de naturaleza, a pocos minutos de la playa. No somos un gimnasio comercial — somos un espacio de entrenamiento donde todos te conocen por tu nombre.",
  "hero.cta1": "Únete al Club de Fuerza para Mujeres",
  "hero.cta2": "¿De visita? Compra un pase",

  "intro.title": "No es un gym grande. <em>Es uno mejor.</em>",
  "intro.lead": "Lo mantenemos pequeño a propósito. Ambiente relajado, una comunidad unida y todo lo que necesitas para un gran entrenamiento de fuerza.",
  "v1.title": "Pequeño y cercano",
  "v1.body": "Un espacio íntimo y una comunidad amigable. Sin multitudes, sin filas para el rack, sin juicios.",
  "v2.title": "Entorno tropical",
  "v2.body": "Entrena rodeado de naturaleza — palmeras, pájaros y aire fresco en lugar de luces fluorescentes y espejos.",
  "v3.title": "Todo lo que necesitas",
  "v3.body": "Rack de sentadillas, prensa de piernas, bancos, mancuernas y pesas libres. Todo para entrenar fuerza en serio.",

  "train.eyebrow": "Opciones de entrenamiento",
  "train.title": "Encuentra tu forma de entrenar",
  "c1.tag": "Programa insignia",
  "c1.title": "Club de Fuerza para Mujeres",
  "c1.body": "Entrenamiento de fuerza en grupo pequeño tres días por semana, con ciclos estructurados de seis semanas.",
  "c1.f1": "<b>3×</b> por semana",
  "c1.f2": "Ciclos de <b>6 semanas</b>",
  "c1.f3": "<b>Máx. 6</b> mujeres",
  "c1.link": "Más información →",
  "c2.title": "Gimnasio Libre",
  "c2.body": "Entrenamiento de fuerza independiente para residentes y visitantes que prefieren seguir su propia rutina.",
  "c2.link": "Pregunta por la membresía →",
  "c3.title": "Entrenamiento Personal",
  "c3.body": "Sesiones individuales para quienes buscan una guía más personalizada, corrección de técnica y un plan hecho a su medida.",
  "c3.link": "Reserva una sesión →",
  "c4.title": "Pases para Visitantes",
  "c4.body": "Acceso flexible por día o por semana para quienes visitan Playa Grande. Mantén tu rutina en vacaciones.",
  "c4.link": "Ver pases →",

  "club.eyebrow": "Club de Fuerza para Mujeres",
  "club.title": "Más fuertes, juntas.",
  "club.lead": "Entrenamiento de fuerza en grupo pequeño para mujeres que quieren progresar de verdad en un grupo que las apoya. Cada sesión tiene un propósito, cada ciclo se construye sobre el anterior.",
  "club.s1.t": "Días por semana",
  "club.s1.b": "Sesiones constantes y estructuradas — el ritmo que construye fuerza duradera.",
  "club.s2.t": "Semanas por ciclo",
  "club.s2.b": "Cada ciclo sigue una progresión planificada, para que veas y sientas la diferencia.",
  "club.s3.t": "Mujeres por grupo, máximo",
  "club.s3.b": "Lo suficientemente pequeño para una atención real. Lo suficientemente grande para una gran energía.",
  "club.cta": "Reserva tu lugar en el próximo ciclo",
  "club.caption": "Seis lugares por grupo. Nada más.",
  "club.wk1": "Semana 1",
  "club.wk6": "Semana 6",

  "vis.eyebrow": "Pases para visitantes",
  "vis.title": "¿De vacaciones en Playa Grande?<br><em>No te saltes el día de pierna.</em>",
  "vis.lead": "Surf en la mañana, pesas en la tarde. Ven un día o entrena con nosotros toda la semana — sin compromisos a largo plazo.",
  "vis.day": "Pase Diario",
  "vis.day.b": "Acceso completo al gimnasio por un día. Ideal para una sesión entre días de playa.",
  "vis.week": "Pase Semanal",
  "vis.week.b": "Siete días de acceso. Mantén tu entrenamiento durante toda tu estadía.",
  "vis.cta": "Pregunta por un pase",

  "gym.eyebrow": "El gimnasio",
  "gym.title": "Todo para un gran entrenamiento de fuerza.",
  "gym.lead": "Compacto, bien equipado y hecho para levantar. Sea cual sea tu programa, aquí tienes lo que necesitas.",
  "eq.rack": "Rack de sentadillas",
  "eq.press": "Prensa de piernas",
  "eq.db": "Mancuernas",
  "eq.free": "Pesas libres",
  "eq.bench": "Bancos",
  "eq.more": "Y más equipo de fuerza",

  "ct.eyebrow": "Contáctanos",
  "ct.title": "Ven a entrenar con nosotros.",
  "ct.lead": "Cuéntanos qué te interesa y te responderemos con horarios, precios y disponibilidad.",
  "ct.where": "Dónde",
  "ct.hours": "Horario",
  "f.title": "Envíanos un mensaje",
  "f.name": "Tu nombre",
  "f.interest": "Me interesa",
  "f.o.club": "Club de Fuerza para Mujeres",
  "f.o.open": "Gimnasio Libre",
  "f.o.pt": "Entrenamiento Personal",
  "f.o.day": "Pase Diario",
  "f.o.week": "Pase Semanal",
  "f.when": "¿Cuándo? (opcional)",
  "f.when.ph": "ej. la próxima semana, 3–10 dic",
  "f.msg": "¿Algo más? (opcional)",
  "f.send": "Enviar por WhatsApp",

  "foot.tag": "Gym pequeño. Fuerza grande. Pura vida.",
};

const MSG = {
  en: {
    hello: "Hi Playa Grande Gym! My name is",
    interested: "I'm interested in",
    when: "When",
    sendEmail: "Send via email",
    needName: "Please add your name.",
    opened: "Opening WhatsApp…",
    openedMail: "Opening your email app…",
    noChannel: "TODO: no WhatsApp number or email set in SITE (assets/site.js) — this form can't send yet.",
  },
  es: {
    hello: "¡Hola Playa Grande Gym! Me llamo",
    interested: "Me interesa",
    when: "Cuándo",
    sendEmail: "Enviar por correo",
    needName: "Por favor escribe tu nombre.",
    opened: "Abriendo WhatsApp…",
    openedMail: "Abriendo tu correo…",
    noChannel: "TODO: falta el número de WhatsApp o el correo en SITE (assets/site.js) — el formulario aún no puede enviar.",
  },
};

/* ---------- language ---------- */
const EN = {};
let lang = "en";

function storeGet(k) { try { return localStorage.getItem(k); } catch { return null; } }
function storeSet(k, v) { try { localStorage.setItem(k, v); } catch { /* storage unavailable */ } }

function setLang(next) {
  lang = next === "es" ? "es" : "en";
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (!(key in EN)) EN[key] = el.innerHTML;
    const val = lang === "es" ? ES[key] : EN[key];
    if (val === undefined) console.warn(`[i18n] missing ES key: ${key}`);
    el.innerHTML = val ?? EN[key];
  });
  document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
    const key = el.dataset.i18nPh;
    if (!(key in EN)) EN[key] = el.placeholder;
    el.placeholder = lang === "es" ? (ES[key] ?? EN[key]) : EN[key];
  });

  document.querySelectorAll(".lang button").forEach((b) =>
    b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));

  renderFacts();
  storeSet("pgg-lang", lang);
}

/* ---------- business facts ---------- */
function todo(el, label) {
  el.textContent = `TODO: ${label}`;
  el.classList.add("todo");
  el.removeAttribute("href");
}
function fact(el, text, href) {
  el.textContent = text;
  el.classList.remove("todo");
  if (href) { el.href = href; if (/^https?:/.test(href)) { el.target = "_blank"; el.rel = "noopener"; } }
}

const warned = new Set();
function warnOnce(key) {
  if (warned.has(key)) return;
  warned.add(key);
  console.warn(`[SITE] missing value: ${key} — set it in assets/site.js`);
}

function renderFacts() {
  document.querySelectorAll("[data-contact]").forEach((el) => {
    const k = el.dataset.contact;
    if (k === "whatsapp") {
      SITE.whatsapp ? fact(el, "+" + SITE.whatsapp.replace(/^(\d{3})(\d{4})(\d{4})$/, "$1 $2 $3"), `https://wa.me/${SITE.whatsapp}`)
                    : (todo(el, "WhatsApp number"), warnOnce("whatsapp"));
    } else if (k === "email") {
      SITE.email ? fact(el, SITE.email, `mailto:${SITE.email}`) : (todo(el, "email"), warnOnce("email"));
    } else if (k === "instagram") {
      SITE.instagram ? fact(el, "@" + SITE.instagram, `https://instagram.com/${SITE.instagram}`)
                     : (todo(el, "Instagram handle"), warnOnce("instagram"));
    } else if (k === "address") {
      SITE.address ? fact(el, SITE.address) : (todo(el, "address"), warnOnce("address"));
    } else if (k === "hours") {
      SITE.hours[lang] ? fact(el, SITE.hours[lang]) : (todo(el, "opening hours"), warnOnce("hours"));
    }
  });

  document.querySelectorAll("[data-price]").forEach((el) => {
    const k = el.dataset.price;
    const p = SITE.prices[k]?.[lang];
    p ? fact(el, p) : (todo(el, `${k} pass price`), warnOnce(`prices.${k}`));
  });

  const send = document.querySelector('#enquiry [type="submit"]');
  if (send && !SITE.whatsapp && SITE.email) send.textContent = MSG[lang].sendEmail;
}

/* ---------- nav ---------- */
function initNav() {
  const burger = document.querySelector(".burger");
  const links = document.getElementById("navLinks");
  const close = () => { links.classList.remove("is-open"); burger.setAttribute("aria-expanded", "false"); };
  burger.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    burger.setAttribute("aria-expanded", String(open));
  });
  links.addEventListener("click", (e) => { if (e.target.closest("a")) close(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });

  document.querySelectorAll(".lang button").forEach((b) =>
    b.addEventListener("click", () => setLang(b.dataset.lang)));
}

/* ---------- enquiry form ---------- */
function initForm() {
  const form = document.getElementById("enquiry");
  const note = document.getElementById("enquiryNote");

  // Program links preselect the form's "interested in" field
  document.querySelectorAll("[data-msg]").forEach((a) =>
    a.addEventListener("click", () => { form.interest.value = a.dataset.msg; }));

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const t = MSG[lang];
    const name = form.name.value.trim();
    if (!name) {
      form.name.setAttribute("aria-invalid", "true");
      form.name.focus();
      note.textContent = t.needName;
      return;
    }
    form.name.removeAttribute("aria-invalid");

    const interest = form.interest.selectedOptions[0].textContent.trim();
    const lines = [`${t.hello} ${name}.`, `${t.interested}: ${interest}.`];
    if (form.when.value.trim()) lines.push(`${t.when}: ${form.when.value.trim()}.`);
    if (form.msg.value.trim()) lines.push("", form.msg.value.trim());
    const text = lines.join("\n");

    if (SITE.whatsapp) {
      note.textContent = t.opened;
      window.open(`https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(text)}`, "_blank", "noopener");
    } else if (SITE.email) {
      note.textContent = t.openedMail;
      location.href = `mailto:${SITE.email}?subject=${encodeURIComponent(interest)}&body=${encodeURIComponent(text)}`;
    } else {
      note.textContent = t.noChannel;
      note.className = "enquiry__note todo";
      console.warn("[SITE] enquiry form has no channel: set SITE.whatsapp or SITE.email");
    }
  });
}

/* ---------- reveal on scroll ---------- */
function initReveal() {
  if (!("IntersectionObserver" in window)) return;
  const els = document.querySelectorAll(".value, .card, .pass, .steps li, .club__visual, .equipment li, .enquiry");
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add("is-in"); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  els.forEach((el, i) => {
    el.classList.add("reveal");
    el.style.transitionDelay = `${(i % 4) * 70}ms`;
    io.observe(el);
  });
}

/* ---------- boot ---------- */
document.getElementById("year").textContent = new Date().getFullYear();
initNav();
initForm();
initReveal();
setLang(storeGet("pgg-lang") || ((navigator.language || "").toLowerCase().startsWith("es") ? "es" : "en"));
