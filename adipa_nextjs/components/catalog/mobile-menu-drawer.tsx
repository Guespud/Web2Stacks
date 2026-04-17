"use client";

import Image from "next/image";
import Link from "next/link";

type MobileMenuDrawerProps = {
  navItems: readonly {
    badge: string | null;
    bold: boolean;
    chevron?: boolean;
    href: string;
    label: string;
  }[];
  onClose: () => void;
  open: boolean;
};

export function MobileMenuDrawer({
  navItems,
  onClose,
  open,
}: MobileMenuDrawerProps) {
  return (
    <div
      className={`fixed inset-0 z-50 bg-[#17142a]/44 transition ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      } xl:hidden`}
      onClick={onClose}
    >
      <aside
        className={`absolute right-0 top-0 flex h-full w-[min(82vw,330px)] flex-col overflow-hidden border-l border-[#ece9f5] bg-white shadow-[-12px_0_30px_rgba(17,11,43,0.18)] transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="relative border-b border-[#ece9f5] bg-white px-5 pb-4 pt-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[#8b83b4]">
                Navegacion
              </p>
              <Image
                alt="ADIPA Colombia"
                className="mt-2.5 h-auto w-[124px]"
                height={30}
                src="/assets/logo-colombia.webp"
                width={124}
              />
            </div>

            <button
              aria-label="Cerrar menú"
              className="flex size-10 items-center justify-center rounded-full border border-[#e7e1fb] bg-white text-[#7652ff]"
              onClick={onClose}
              type="button"
            >
              <span className="text-[26px] font-light leading-none">×</span>
            </button>
          </div>

        </div>

        <div className="flex-1 overflow-y-auto px-5 pb-5 pt-4">
          <nav className="overflow-hidden rounded-[16px] border border-[#ece9f5] bg-white">
            {navItems.map((item) => (
              <Link
                key={item.label}
                className="flex min-h-[56px] items-center justify-between gap-4 border-b border-[#ece9f5] px-4 py-3 text-[#27223f] transition hover:bg-[#faf8ff]"
                href={item.href}
                onClick={onClose}
              >
                <span
                  className={
                    item.bold
                      ? "text-[18px] font-extrabold"
                      : "text-[18px] font-semibold"
                  }
                >
                  {item.label}
                </span>

                <span className="flex shrink-0 items-center gap-3">
                  {item.badge ? (
                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em] text-white ${
                        item.badge === "Gratis" ? "bg-[#6d44f7]" : "bg-[#ff4b8f]"
                      }`}
                    >
                      {item.badge}
                    </span>
                  ) : null}
                  {item.chevron ? (
                    <span className="text-[22px] font-light text-[#9a96b0]">›</span>
                  ) : null}
                </span>
              </Link>
            ))}

            <button
              className="flex min-h-[56px] w-full items-center justify-between gap-4 px-4 py-3 text-left text-[#27223f] transition hover:bg-[#faf8ff]"
              type="button"
            >
              <span className="text-[18px] font-semibold">Descubre ADIPA</span>
              <span className="text-[22px] font-light text-[#9a96b0]">›</span>
            </button>
          </nav>
        </div>

        <div className="border-t border-[#ece9f5] bg-white px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4">
          <div className="grid grid-cols-2 gap-2.5">
            <button
              className="h-11 w-full rounded-[10px] bg-[#6d44f7] px-4 text-[14px] font-semibold text-white shadow-[0_10px_20px_rgba(109,68,247,0.18)]"
              type="button"
            >
              Iniciar Sesion
            </button>
            <button
              className="h-11 w-full rounded-[10px] border border-[#ddd4ff] bg-[#faf8ff] px-4 text-[14px] font-semibold text-[#6d44f7]"
              type="button"
            >
              Registrate
            </button>
          </div>

          <div className="mt-3.5 flex items-center justify-between rounded-[12px] border border-[#ece9f5] bg-[#fcfbff] px-4 py-3">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#9a94ba]">
                Contacto rapido
              </p>
              <p className="mt-1 text-[14px] font-semibold text-[#2c2844]">
                Escribenos por WhatsApp
              </p>
            </div>

            <button
              aria-label="WhatsApp"
              className="flex size-11 items-center justify-center rounded-full bg-[#3cc54a] shadow-[0_8px_18px_rgba(60,197,74,0.22)]"
              type="button"
            >
              <Image
                alt=""
                aria-hidden="true"
                height={24}
                src="/assets/icons-whatsapp.svg"
                width={24}
              />
            </button>
          </div>
        </div>
      </aside>
    </div>
  );
}
