import './style.css';
import QRCode from 'qrcode';

QRCode.toDataURL('https://bradleyjamesm.github.io/kinsfc/', { width: 300, margin: 1 }).then((url) => {
  const img = document.querySelector('#flyer-qr');
  if (img) img.src = url;
});

const i18n = {
  en: {
    'nav-about': 'About',
    'nav-club': 'Club',
    'nav-events': 'Events',
    'nav-donate': 'Donate',
    'nav-creators': 'Creators',
    'hero-eyebrow': 'a middle-school club',
    'hero-tagline': 'Small crew. Big heart. Real impact.',
    'hero-btn': 'See what we do',
    'about-tag': 'About',
    'about-title': 'Who we are',
    'about-copy':
      '<strong>KIN</strong> — <strong>Kids In Need</strong> — is a student club that levels up our community. We run donation drives, collect school supplies, and host small fundraisers all year. Simple idea, big payoff: a little support changes everything.',
    'about-m1': 'Help kids in our community',
    'about-m2': 'Collect school supplies',
    'about-m3': 'Host clothing drives',
    'about-m4': 'Run small fundraisers',
    'club-tag': 'SFC Club',
    'club-title': 'Find us',
    'club-line':
      'Come to our club in <span class="highlight highlight-pink">room 6205</span> or <span class="highlight highlight-green">Mr. Kaleta\u2019s room</span> to help kids in need.',
    'club-t1': 'Meetings at lunch',
    'club-t2': 'All students welcome',
    'club-t3': 'Only on Fridays',
    'donate-tag': 'Where We Donate',
    'donate-title': 'How your help lands',
    'donate-note': 'We donate to Olive Crest.',
    'donate-intro': 'Your donations go straight to local kids who need them most:',
    'donate-c1-title': 'School Supplies',
    'donate-c1-body': 'Backpacks, notebooks, and pencils so every student starts the year prepared.',
    'donate-c2-title': 'Warm Clothes',
    'donate-c2-body': 'Coats, socks, and winter gear to keep kids warm through the season.',
    'donate-c3-title': 'Toys & Books',
    'donate-c3-body': 'New or gently-used toys and books to bring a little joy and imagination.',
    'footer-name': 'KIN · Kids In Need',
    'credits-title': 'Created by',
    'credits-1': 'Owen Rapkin — C.E.O',
    'credits-2': 'Easton Burns — Senior C.E.O',
    'credits-3': 'Jack Borton — Vice C.E.O',
    'credits-4': 'Bradley Miller — C.T.O',
    'credits-5': 'Charlie Wallace — Helper',
  },
  es: {
    'nav-about': 'Sobre Nosotros',
    'nav-club': 'Club',
    'nav-events': 'Eventos',
    'nav-donate': 'Donar',
    'nav-creators': 'Creadores',
    'hero-eyebrow': 'un club de secundaria',
    'hero-tagline': 'Equipo pequeño. Gran corazón. Impacto real.',
    'hero-btn': 'Mira lo que hacemos',
    'about-tag': 'Sobre Nosotros',
    'about-title': 'Quiénes somos',
    'about-copy':
      '<strong>KIN</strong> — <strong>Kids In Need</strong> — es un club de estudiantes que apoya a nuestra comunidad. Organizamos campañas de donación, recolectamos útiles escolares y hacemos pequeñas recaudaciones todo el año. Idea simple, gran resultado: un poco de apoyo lo cambia todo.',
    'about-m1': 'Ayudamos a niños de nuestra comunidad',
    'about-m2': 'Recolectamos útiles escolares',
    'about-m3': 'Organizamos campañas de ropa',
    'about-m4': 'Hacemos pequeñas recaudaciones',
    'club-tag': 'Club SFC',
    'club-title': 'Encuéntranos',
    'club-line':
      'Ven a nuestro club en el <span class="highlight highlight-pink">salón 6205</span> o al <span class="highlight highlight-green">salón del Sr. Kaleta</span> para ayudar a niños que lo necesitan.',
    'club-t1': 'Reuniones durante el almuerzo',
    'club-t2': 'Todos los estudiantes son bienvenidos',
    'club-t3': '¡Solo los viernes!',
    'donate-tag': 'Dónde Donamos',
    'donate-title': 'Cómo llega tu ayuda',
    'donate-note': 'Donamos a Olive Crest.',
    'donate-intro': 'Tus donaciones van directamente a los niños locales que más lo necesitan:',
    'donate-c1-title': 'Útiles Escolares',
    'donate-c1-body': 'Mochilas, cuadernos y lápices para que cada estudiante empiece el año preparado.',
    'donate-c2-title': 'Ropa de Abrigo',
    'donate-c2-body': 'Chaquetas, calcetines y ropa de invierno para mantener abrigados a los niños.',
    'donate-c3-title': 'Juguetes y Libros',
    'donate-c3-body': 'Juguetes y libros nuevos o usados en buen estado para traer alegría e imaginación.',
    'footer-name': 'KIN · Kids In Need',
    'credits-title': 'Creado por',
    'credits-1': 'Owen Rapkin — C.E.O',
    'credits-2': 'Easton Burns — C.E.O Senior',
    'credits-3': 'Jack Borton — Vice C.E.O',
    'credits-4': 'Bradley Miller — C.T.O',
    'credits-5': 'Charlie Wallace — Ayudante',
  },
};

let lang = 'en';

const toggleButton = document.querySelector('#lang-toggle');

function applyLanguage() {
  document.documentElement.lang = lang;
  toggleButton.textContent = lang === 'en' ? 'ES' : 'EN';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = i18n[lang][el.dataset.i18n];
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    el.innerHTML = i18n[lang][el.dataset.i18nHtml];
  });
}

toggleButton.addEventListener('click', () => {
  lang = lang === 'en' ? 'es' : 'en';
  applyLanguage();
});

applyLanguage();