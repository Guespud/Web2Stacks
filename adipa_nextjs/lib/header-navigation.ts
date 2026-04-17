export const headerNavItems = [
  { label: "Cursos", href: "/", badge: null, active: false, bold: false },
  { label: "Congreso", href: "/", badge: "Nuevo", active: true, bold: true },
  { label: "Diplomados", href: "/", badge: null, active: false, bold: false },
  { label: "Acreditaciones", href: "/", badge: null, active: false, bold: false },
  {
    label: "Sesiones Magistrales",
    href: "/",
    badge: "Nuevo",
    active: true,
    bold: true,
  },
  { label: "Seminarios", href: "/", badge: "Gratis", active: false, bold: false },
  { label: "Recursos", href: "/", badge: null, active: false, bold: false, chevron: true },
  { label: "Contacto", href: "#contacto", badge: null, active: false, bold: false },
] as const;
