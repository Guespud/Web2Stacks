import Image from "next/image";
import Link from "next/link";

import { descubreAdipaItems, recursosSubItems } from "@/lib/header-navigation";

type NavItem = {
  active: boolean;
  badge: string | null;
  bold: boolean;
  chevron?: boolean;
  href: string;
  label: string;
  pinkBg?: boolean;
};

type HeaderDesktopProps = {
  navItems: readonly NavItem[];
  onOpenCart: () => void;
  totalItems: number;
};

export function HeaderDesktop({ navItems, onOpenCart, totalItems }: HeaderDesktopProps) {
  return (
    <div className="mx-auto hidden w-full max-w-[1280px] px-4 xl:block xl:px-6">
      {/* Primary row: logo + search + login/cart */}
      <div className="flex min-h-[72px] items-center gap-6 py-3">
        <Link href="https://adipa.co" className="shrink-0 leading-none">
          <Image
            alt="ADIPA"
            className="h-auto w-[182px]"
            height={35}
            priority
            src="/assets/logo-colombia.webp"
            width={182}
          />
        </Link>

        <div className="flex flex-1 items-center">
          <form action="https://adipa.co" className="w-full">
            <div className="flex h-[38px] w-full overflow-hidden rounded-[4px] border border-[#35a8f5] bg-white">
              <input
                id="header-search"
                className="w-full px-4 text-[14px] text-[#53506a] outline-none placeholder:text-[#a19db5]"
                name="s"
                placeholder="¿Qué quieres aprender?"
                type="text"
                autoComplete="off"
              />
              <button
                aria-label="Buscar"
                className="flex w-12 shrink-0 items-center justify-center bg-[#35a8f5]"
                type="submit"
              >
                <Image
                  alt=""
                  aria-hidden="true"
                  height={18}
                  src="/assets/icon-search-menu.png"
                  width={18}
                />
              </button>
            </div>
          </form>
        </div>

        <div className="flex shrink-0 items-center gap-5 text-[14px]">
          <a
            href="https://adipa.co/sesion/"
            rel="nofollow"
            className="font-bold text-[#27223f] hover:text-[#6d44f7]"
          >
            Iniciar Sesión
          </a>
          <a
            href="https://adipa.co/registro/"
            rel="nofollow"
            className="font-medium text-[#4e4a68] hover:text-[#6d44f7]"
          >
            Regístrate
          </a>

          {/* Search icon */}
          <button
            aria-label="Buscar"
            className="flex size-8 items-center justify-center"
            type="button"
          >
            <Image
              alt=""
              aria-hidden="true"
              height={18}
              src="/assets/icon-search-menu.png"
              width={18}
            />
          </button>

          {/* Cart */}
          <button
            aria-label="Carrito"
            className="relative flex items-center justify-center"
            onClick={onOpenCart}
            type="button"
          >
            <Image
              alt=""
              aria-hidden="true"
              height={21}
              src="/assets/icon-main-cart.png"
              width={20}
            />
            {totalItems > 0 && (
              <span className="absolute -right-2 -top-1 min-w-4 rounded-full bg-[#6d44f7] px-1 text-center text-[10px] font-bold leading-4 text-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Secondary row: WhatsApp + Descubre ADIPA + nav items + coupon */}
      <div className="flex min-h-[44px] items-center justify-between gap-4 border-t border-[#f0edf9] py-1">
        {/* Left: WhatsApp icon + Descubre ADIPA dropdown */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href="https://api.whatsapp.com/send?phone=+573144718655&text=Hola, me quiero contactar desde ADIPA"
            target="_blank"
            rel="nofollow noreferrer"
            title="Whatsapp Adipa"
            className="flex items-center justify-center"
          >
            <Image
              alt="Teléfono"
              height={26}
              src="/assets/icons-whatsapp.svg"
              width={26}
            />
          </a>

          {/* Descubre ADIPA dropdown */}
          <div className="group/descubre relative">
            <button
              className="flex items-center gap-1 text-[14px] font-medium text-[#53506a] hover:text-[#27223f]"
              type="button"
            >
              <span>Descubre ADIPA</span>
              <span className="text-[10px]">▼</span>
            </button>
            <div className="invisible absolute left-0 top-full z-50 pt-1 group-hover/descubre:visible">
              <div className="w-[200px] overflow-hidden rounded-[6px] border border-[#ece9f5] bg-white shadow-[0_8px_24px_rgba(17,11,43,0.14)]">
                {descubreAdipaItems.map((item) =>
                  item.children.length > 0 ? (
                    <div key={item.label} className="group/sub relative">
                      <button className="flex w-full items-center justify-between px-4 py-2.5 text-left text-[13px] text-[#27223f] hover:bg-[#faf8ff]">
                        <span>{item.label}</span>
                        <span className="text-[11px] text-[#9a96b0]">›</span>
                      </button>
                      <div className="invisible absolute left-full top-0 z-50 group-hover/sub:visible">
                        <div className="ml-1 w-[200px] overflow-hidden rounded-[6px] border border-[#ece9f5] bg-white shadow-[0_8px_24px_rgba(17,11,43,0.14)]">
                          {item.children.map((child) => (
                            <a
                              key={child.label}
                              href={child.href}
                              className="block px-4 py-2.5 text-[13px] text-[#27223f] hover:bg-[#faf8ff]"
                            >
                              {child.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2.5 text-[13px] text-[#27223f] hover:bg-[#faf8ff]"
                    >
                      {item.label}
                    </a>
                  )
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Center/Right: main nav items */}
        <nav className="flex flex-wrap items-center gap-5 text-[14px] font-medium text-[#5b566f]">
          {navItems.map((item) =>
            item.label === "Recursos" ? (
              <div key={item.label} className="group/recursos relative">
                <button
                  className="relative flex items-center gap-1 text-[14px] font-medium text-[#5b566f] hover:text-[#27223f]"
                  type="button"
                >
                  {item.badge && (
                    <span
                      className={`absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-[3px] px-1.5 py-[1px] text-[8px] font-extrabold uppercase tracking-[0.06em] text-white ${
                        item.badge === "Gratis" ? "bg-[#6d44f7]" : "bg-[#ff2f7d]"
                      }`}
                    >
                      {item.badge}
                    </span>
                  )}
                  <span>Recursos</span>
                  <span className="text-[10px]">▼</span>
                </button>
                <div className="invisible absolute right-0 top-full z-50 pt-1 group-hover/recursos:visible">
                  <div className="w-[190px] overflow-hidden rounded-[6px] border border-[#ece9f5] bg-white shadow-[0_8px_24px_rgba(17,11,43,0.14)]">
                    {recursosSubItems.map((sub) => (
                      <a
                        key={sub.label}
                        href={sub.href}
                        className="block px-4 py-2.5 text-[13px] text-[#27223f] hover:bg-[#faf8ff]"
                      >
                        {sub.label}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.label}
                href={item.href}
                className={`relative flex items-center gap-1 ${
                  item.pinkBg ? "rounded-[4px] bg-[#fff0f5] px-2 py-0.5" : ""
                } ${item.active ? "font-extrabold text-[#27223f]" : ""} ${
                  item.bold ? "font-bold" : ""
                }`}
              >
                {item.badge && (
                  <span
                    className={`absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-[3px] px-1.5 py-[1px] text-[8px] font-extrabold uppercase tracking-[0.06em] text-white ${
                      item.badge === "Gratis" ? "bg-[#6d44f7]" : "bg-[#ff2f7d]"
                    }`}
                  >
                    {item.badge}
                  </span>
                )}
                <span>{item.label}</span>
              </Link>
            )
          )}
        </nav>

      </div>
    </div>
  );
}
