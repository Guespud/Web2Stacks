import Image from "next/image";
import Link from "next/link";

import {
  footerContact,
  footerCountries,
  footerLinkGroups,
  footerSocialLinks,
  footerUtilityLinks,
  type FooterLink,
} from "@/lib/footer-data";


type FooterLinkGroupProps = {
  links: FooterLink[];
  title: string;
};

function SocialIcon({
  network,
}: {
  network: (typeof footerSocialLinks)[number]["network"];
}) {
  const common = {
    fill: "none",
    height: 18,
    stroke: "currentColor",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    strokeWidth: 1.8,
    viewBox: "0 0 24 24",
    width: 18,
  };

  switch (network) {
    case "facebook":
      return (
        <svg {...common}>
          <path d="M14 8h2V4h-2.5C10.9 4 9 5.9 9 8.5V11H7v4h2v5h4v-5h2.4l.6-4H13v-1.9c0-.7.3-1.1 1-1.1Z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="4" y="4" width="16" height="16" rx="4" />
          <circle cx="12" cy="12" r="3.5" />
          <path d="M17.5 6.5h.01" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <path d="M20 9.5c0-1.2-.9-2.2-2.1-2.3C16.4 7 14.4 7 12 7s-4.4 0-5.9.2C4.9 7.3 4 8.3 4 9.5v5c0 1.2.9 2.2 2.1 2.3 1.5.2 3.5.2 5.9.2s4.4 0 5.9-.2c1.2-.1 2.1-1.1 2.1-2.3v-5Z" />
          <path d="m10 10 5 2-5 2v-4Z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M7 9v8M7 6.5h.01M11 17V9h4a3 3 0 0 1 3 3v5M11 12a3 3 0 0 1 3-3" />
        </svg>
      );
    case "spotify":
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
          <path d="M8 10.5c2.8-1 5.6-.9 8 .5M8.7 13.2c2.2-.7 4.4-.6 6.4.4M9.5 15.7c1.7-.5 3.3-.4 4.8.3" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...common}>
          <path d="M14 5v8.5a2.5 2.5 0 1 1-2.5-2.5" />
          <path d="M14 5c.8 1.7 2.1 2.7 4 3" />
        </svg>
      );
  }
}

function FooterLinkGroup({ links, title }: FooterLinkGroupProps) {
  return (
    <section>
      <h3 className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#a8afe6]">
        {title}
      </h3>
      <div className="mt-4">
        {links.map((link) => (
          <Link
            key={link.label}
            className="block rounded-[8px] px-2 py-1.5 text-[13px] font-medium text-white/88 transition hover:bg-white/6 hover:text-white"
            href={link.href}
            target={link.href.startsWith("http") ? "_blank" : undefined}
          >
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function CatalogFooter() {
  return (
    <footer className="bg-[#474b69] text-white">
      <section className="mx-auto w-full max-w-[1280px] px-4 pb-10 pt-10 xl:px-6 xl:pb-10 xl:pt-14">
        <div className="grid gap-6 xl:grid-cols-[280px_minmax(0,1fr)_300px] xl:gap-8">
          <div className="rounded-[18px] border border-white/8 bg-white/[0.03] p-5 md:p-6">
            <Image
              alt="ADIPA"
              className="h-auto w-[162px] brightness-0 invert"
              height={44}
              src="/assets/logo-colombia.webp"
              width={162}
            />

            <p className="mt-6 text-[15px] font-bold text-white">
              Estamos presentes en:
            </p>

            <div className="mt-4">
              {footerCountries.map((country) => (
                <Link
                  key={country.label}
                  className="flex items-center gap-3 rounded-[10px] px-2 py-2 text-[15px] font-medium text-white/92 transition hover:bg-white/6 hover:text-white"
                  href={country.href}
                  target="_blank"
                >
                  <span className="text-[18px]">{country.flag}</span>
                  <span>{country.label}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {footerLinkGroups.map((group) => (
                <FooterLinkGroup
                  key={group.title}
                  links={group.links}
                  title={group.title}
                />
              ))}
            </div>

            <div className="grid gap-5 rounded-[18px] border border-white/8 bg-white/[0.03] p-5 xl:grid-cols-[1.2fr_0.8fr]">
              <div>
                <h3 className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#a8afe6]">
                  Contacto
                </h3>
                <div className="mt-4 space-y-2 text-[14px] leading-7 text-white/90">
                  <p><span className="font-bold">CO</span> {footerContact.phone}</p>
                  <p>{footerContact.emails.join(" - ")}</p>
                  <p>{footerContact.address}</p>
                </div>
              </div>

              <div>
                <h3 className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#a8afe6]">
                  Enlaces útiles
                </h3>
                <div className="mt-4">
                  {footerUtilityLinks.map((link) => (
                    <Link
                      key={link.label}
                      className="block rounded-[8px] px-2 py-1.5 text-[14px] text-white/92 underline underline-offset-2 transition hover:bg-white/6 hover:text-white"
                      href={link.href}
                      target="_blank"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <aside className="rounded-[18px] border border-white/8 bg-white/[0.03] p-5 md:p-6">
            <h3 className="text-[15px] font-extrabold uppercase leading-7 text-white">
              Regístrate en nuestro newsletter
            </h3>

            <div className="mt-4 space-y-3">
              <label className="block">
                <span className="mb-1.5 block text-[13px] font-bold text-white">
                  Nombre<span className="text-[#ff4a4a]">*</span>
                </span>
                <input
                  className="h-10 w-full rounded-[8px] border border-white/10 bg-white px-3 text-[#27223f] outline-none"
                  type="text"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-[13px] font-bold text-white">
                  Correo<span className="text-[#ff4a4a]">*</span>
                </span>
                <input
                  className="h-10 w-full rounded-[8px] border border-white/10 bg-white px-3 text-[#27223f] outline-none"
                  type="email"
                />
              </label>

              <label className="block">
                <span className="mb-1.5 block text-[13px] font-bold leading-6 text-white">
                  ¿Cuántos correos al mes deseas recibir?
                  <span className="text-[#ff4a4a]">*</span>
                </span>
                <select className="h-10 w-full rounded-[8px] border border-white/10 bg-white px-3 text-[#a7a9b4] outline-none">
                  <option>Selecciona</option>
                  <option>1 a 2 correos</option>
                  <option>3 a 4 correos</option>
                  <option>5 o más correos</option>
                </select>
              </label>
            </div>

            <button
              className="mt-5 inline-flex h-10 items-center justify-center rounded-[8px] bg-[#78cafd] px-6 text-[14px] font-bold text-white transition hover:brightness-105"
              type="button"
            >
              Enviar
            </button>

            <p className="mt-5 text-[14px] leading-7 text-white/88">
              ©Adipa 2026 - Todos los derechos reservados
            </p>
          </aside>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-end gap-4 border-t border-white/10 pb-10 pt-6">
          {footerSocialLinks.map((link) => (
            <Link
              key={link.label}
              aria-label={link.label}
              className="flex size-9 items-center justify-center rounded-full bg-white text-[17px] font-bold text-[#474b69] transition hover:scale-[1.04]"
              href={link.href}
              target="_blank"
            >
              <SocialIcon network={link.network} />
            </Link>
          ))}
        </div>
      </section>
    </footer>
  );
}
