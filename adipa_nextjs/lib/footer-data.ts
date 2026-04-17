export type FooterLink = {
  href: string;
  label: string;
};

export type FooterLinkGroup = {
  links: FooterLink[];
  title: string;
};

export const footerCountries: FooterLink[] = [
  { href: "https://adipa.cl/", label: "Chile" },
  { href: "https://adipa.co/", label: "Colombia" },
  { href: "https://adipa.mx/", label: "México" },
  { href: "https://adipa.co/", label: "Global" },
];

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Programas",
    links: [
      { href: "https://adipa.co/cursos/", label: "Cursos" },
      { href: "https://adipa.co/seminarios/", label: "Seminarios" },
      { href: "https://adipa.co/diplomados/", label: "Diplomados" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { href: "https://adipa.co/blog/", label: "Noticias" },
      { href: "https://adipa.co/glosario/", label: "Glosario" },
      { href: "https://adipa.co/podcast-adipados/", label: "Podcast Adipados" },
    ],
  },
  {
    title: "Conoce ADIPA",
    links: [
      { href: "https://adipa.co/sobre-adipa/", label: "Sobre ADIPA" },
      { href: "https://adipa.co/escuelas/", label: "Escuelas" },
      { href: "https://adipa.co/docentes/", label: "Docentes" },
      { href: "https://adipa.co/blog/", label: "Adiprensa" },
    ],
  },
  {
    title: "Escuelas",
    links: [
      { href: "/", label: "Educación y Neurodesarrollo" },
      { href: "/", label: "Salud Mental Adultos" },
      { href: "/", label: "Psicología Organizacional" },
      { href: "/", label: "Salud Mental Infantojuvenil" },
      { href: "/", label: "Psicosocial Jurídica" },
    ],
  },
];

export const footerUtilityLinks: FooterLink[] = [
  {
    href: "https://adipa.co/ayuda-psicologica/",
    label: "¿Necesitas ayuda psicológica?",
  },
  {
    href: "https://adipa.co/terminos-y-condiciones/",
    label: "Términos y condiciones",
  },
  {
    href: "https://adipa.co/centro-de-ayuda/",
    label: "Centro de Ayuda",
  },
];

export const footerContact = {
  address: "Bogotá: Cra 13 # 93 - 35, Oficina OV-494.",
  emails: ["info@adipa.co", "sac@adipa.co"],
  phone: "+573144718655",
};

export const footerSocialLinks = [
  { href: "https://www.facebook.com/", label: "Facebook", network: "facebook" },
  { href: "https://www.instagram.com/", label: "Instagram", network: "instagram" },
  { href: "https://www.youtube.com/", label: "YouTube", network: "youtube" },
  { href: "https://www.linkedin.com/", label: "LinkedIn", network: "linkedin" },
  { href: "https://open.spotify.com/", label: "Spotify", network: "spotify" },
  { href: "https://www.tiktok.com/", label: "TikTok", network: "tiktok" },
] as const;
