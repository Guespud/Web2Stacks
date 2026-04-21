type NavItem = {
  readonly label: string;
  readonly href: string;
  readonly badge: string | null;
  readonly active: boolean;
  readonly bold: boolean;
  readonly chevron?: boolean;
  readonly pinkBg?: boolean;
};

export const desktopNavItems: readonly NavItem[] = [
  { label: "Recursos", href: "#", badge: null, active: false, bold: false, chevron: true },
  { label: "Seminarios", href: "https://adipa.co/seminarios/", badge: "Gratis", active: false, bold: false },
  { label: "Congreso", href: "https://adipa.co/congreso/", badge: "Nuevo", active: false, bold: true, pinkBg: true },
  { label: "Acreditaciones", href: "https://adipa.co/acreditaciones/", badge: null, active: false, bold: false },
  { label: "Sesiones Magistrales", href: "https://adipa.co/sesiones-magistrales/", badge: "Nuevo", active: false, bold: true },
  { label: "Diplomados", href: "https://adipa.co/cursos/?type_program=diplomados", badge: null, active: false, bold: false },
  { label: "Cursos", href: "https://adipa.co/cursos/", badge: null, active: true, bold: false },
];

export const mobileNavItems: readonly NavItem[] = [
  { label: "Cursos", href: "https://adipa.co/cursos/", badge: null, active: true, bold: false },
  { label: "Congreso", href: "https://adipa.co/congreso/", badge: "Nuevo", active: false, bold: true, pinkBg: true },
  { label: "Diplomados", href: "https://adipa.co/cursos/?type_program=diplomados", badge: null, active: false, bold: false },
  { label: "Acreditaciones", href: "https://adipa.co/acreditaciones/", badge: null, active: false, bold: false },
  { label: "Sesiones Magistrales", href: "https://adipa.co/sesiones-magistrales/", badge: "Nuevo", active: false, bold: true },
  { label: "Seminarios", href: "https://adipa.co/seminarios/", badge: "Gratis", active: false, bold: false },
  { label: "Recursos", href: "#", badge: null, active: false, bold: false, chevron: true },
];

export const recursosSubItems = [
  { label: "Ebooks Gratuitos", href: "https://adipa.co/recursos/ebooks/" },
  { label: "Glosario", href: "https://adipa.co/glosario/" },
  { label: "Investigaciones", href: "https://adipa.co/investigacion/" },
  { label: "Noticias", href: "https://adipa.co/noticias/" },
  { label: "Newsletter", href: "https://adipa.co/newsletter/" },
  { label: "Podcast Adipados", href: "https://adipa.co/adipados/" },
];

export const descubreAdipaItems = [
  {
    label: "Nosotros",
    href: "#",
    children: [
      { label: "Sobre ADIPA", href: "https://adipa.co/quienes-somos/" },
      { label: "Escuelas", href: "https://adipa.co/escuelas/" },
      { label: "Docentes", href: "https://adipa.co/docentes/" },
      { label: "Impacto", href: "https://adipa.co/impacto/" },
      { label: "Trabaja con Nosotros", href: "https://adipa.co/trabaja-con-nosotros/" },
    ],
  },
  {
    label: "Comunidad",
    href: "#",
    children: [
      { label: "Testimonios", href: "https://adipa.co/experiencias/" },
    ],
  },
  {
    label: "Beneficios",
    href: "#",
    children: [
      { label: "Beneficios", href: "https://adipa.co/beneficios-adipa/" },
      { label: "Curso Gratis de regalo", href: "https://adipa.co/noticias/curso-gratis-cumpleanos/" },
    ],
  },
  { label: "Prensa", href: "https://adipa.co/adiprensa/", children: [] },
];

// backward compat
export const headerNavItems = desktopNavItems;
