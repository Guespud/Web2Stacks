"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import { descubreAdipaItems, recursosSubItems } from "@/lib/header-navigation";

type NavItem = {
  badge: string | null;
  bold: boolean;
  chevron?: boolean;
  href: string;
  label: string;
  pinkBg?: boolean;
};

type MobileMenuDrawerProps = {
  navItems: readonly NavItem[];
  onClose: () => void;
  open: boolean;
};

export function MobileMenuDrawer({ navItems, onClose, open }: MobileMenuDrawerProps) {
  const [subMenu, setSubMenu] = useState<"recursos" | "descubre" | null>(null);
  const [descubreChild, setDescubreChild] = useState<string | null>(null);

  function handleClose() {
    setSubMenu(null);
    setDescubreChild(null);
    onClose();
  }

  function handleBack() {
    if (descubreChild) {
      setDescubreChild(null);
    } else {
      setSubMenu(null);
    }
  }

  const showBack = subMenu !== null;

  return (
    <div
      className={`fixed inset-0 z-50 transition ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      } xl:hidden`}
      style={{ backgroundColor: "rgba(23,20,42,0.44)" }}
      onClick={handleClose}
    >
      <aside
        className={`absolute left-0 top-0 flex h-full w-[min(82vw,330px)] flex-col overflow-hidden border-r border-[#ece9f5] bg-white shadow-[12px_0_30px_rgba(17,11,43,0.18)] transition-transform duration-300 ease-out ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative border-b border-[#ece9f5] bg-white px-5 pb-4 pt-4">
          <div className="flex items-center justify-between gap-4">
            {/* Back button */}
            {showBack ? (
              <button
                aria-label="Volver"
                className="flex items-center gap-1 text-[13px] font-semibold text-[#6d44f7]"
                onClick={handleBack}
                type="button"
              >
                <span className="text-[18px] font-light">‹</span>
                <span>Volver</span>
              </button>
            ) : (
              <Image
                alt="ADIPA"
                className="h-auto w-[120px]"
                height={30}
                src="/assets/logo-colombia.webp"
                width={150}
              />
            )}

            <button
              aria-label="Cerrar menú"
              className="flex size-10 items-center justify-center rounded-full border border-[#e7e1fb] bg-white text-[#7652ff]"
              onClick={handleClose}
              type="button"
            >
              <span className="text-[26px] font-light leading-none">×</span>
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5 pb-5 pt-4">
          <nav className="overflow-hidden rounded-[16px] border border-[#ece9f5] bg-white">
            {/* Main menu */}
            {subMenu === null && (
              <>
                {navItems.map((item) => (
                  item.label === "Recursos" ? (
                    <button
                      key={item.label}
                      className="flex min-h-[56px] w-full items-center justify-between gap-4 border-b border-[#ece9f5] px-4 py-3 text-left text-[#27223f] transition hover:bg-[#faf8ff]"
                      onClick={() => setSubMenu("recursos")}
                      type="button"
                    >
                      <span className="text-[18px] font-semibold">{item.label}</span>
                      <span className="text-[22px] font-light text-[#9a96b0]">›</span>
                    </button>
                  ) : (
                    <Link
                      key={item.label}
                      className={`flex min-h-[56px] items-center justify-between gap-4 border-b border-[#ece9f5] px-4 py-3 text-[#27223f] transition hover:bg-[#faf8ff] ${
                        item.pinkBg ? "bg-[#fff5f8]" : ""
                      }`}
                      href={item.href}
                      onClick={handleClose}
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
                      {item.badge && (
                        <span
                          className={`rounded-full px-2.5 py-1 text-[10px] font-extrabold uppercase tracking-[0.08em] text-white ${
                            item.badge === "Gratis" ? "bg-[#6d44f7]" : "bg-[#ff2f7d]"
                          }`}
                        >
                          {item.badge}
                        </span>
                      )}
                    </Link>
                  )
                ))}
                {/* Descubre ADIPA */}
                <button
                  className="flex min-h-[56px] w-full items-center justify-between gap-4 px-4 py-3 text-left text-[#27223f] transition hover:bg-[#faf8ff]"
                  onClick={() => setSubMenu("descubre")}
                  type="button"
                >
                  <span className="text-[18px] font-semibold">Descubre ADIPA</span>
                  <span className="text-[22px] font-light text-[#9a96b0]">›</span>
                </button>
              </>
            )}

            {/* Recursos sub-menu */}
            {subMenu === "recursos" && (
              <>
                <div className="border-b border-[#ece9f5] px-4 py-3">
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#9a94ba]">
                    Recursos
                  </p>
                </div>
                {recursosSubItems.map((sub) => (
                  <a
                    key={sub.label}
                    href={sub.href}
                    className="flex min-h-[52px] items-center border-b border-[#ece9f5] px-4 py-3 text-[16px] font-semibold text-[#27223f] hover:bg-[#faf8ff]"
                    onClick={handleClose}
                  >
                    {sub.label}
                  </a>
                ))}
              </>
            )}

            {/* Descubre ADIPA sub-menu */}
            {subMenu === "descubre" && descubreChild === null && (
              <>
                <div className="border-b border-[#ece9f5] px-4 py-3">
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#9a94ba]">
                    Descubre ADIPA
                  </p>
                </div>
                {descubreAdipaItems.map((item) =>
                  item.children.length > 0 ? (
                    <button
                      key={item.label}
                      className="flex min-h-[56px] w-full items-center justify-between gap-4 border-b border-[#ece9f5] px-4 py-3 text-left text-[#27223f] transition hover:bg-[#faf8ff]"
                      onClick={() => setDescubreChild(item.label)}
                      type="button"
                    >
                      <span className="text-[18px] font-semibold">{item.label}</span>
                      <span className="text-[22px] font-light text-[#9a96b0]">›</span>
                    </button>
                  ) : (
                    <a
                      key={item.label}
                      href={item.href}
                      className="flex min-h-[56px] items-center border-b border-[#ece9f5] px-4 py-3 text-[18px] font-semibold text-[#27223f] hover:bg-[#faf8ff]"
                      onClick={handleClose}
                    >
                      {item.label}
                    </a>
                  )
                )}
              </>
            )}

            {/* Descubre ADIPA child sub-menu */}
            {subMenu === "descubre" && descubreChild !== null && (
              <>
                <div className="border-b border-[#ece9f5] px-4 py-3">
                  <p className="text-[12px] font-extrabold uppercase tracking-[0.12em] text-[#9a94ba]">
                    {descubreChild}
                  </p>
                </div>
                {descubreAdipaItems
                  .find((i) => i.label === descubreChild)
                  ?.children.map((child) => (
                    <a
                      key={child.label}
                      href={child.href}
                      className="flex min-h-[52px] items-center border-b border-[#ece9f5] px-4 py-3 text-[16px] font-semibold text-[#27223f] hover:bg-[#faf8ff]"
                      onClick={handleClose}
                    >
                      {child.label}
                    </a>
                  ))}
              </>
            )}
          </nav>
        </div>

        {/* Footer: login + register */}
        <div className="border-t border-[#ece9f5] bg-white px-5 pb-[max(1.25rem,env(safe-area-inset-bottom))] pt-4">
          <div className="grid grid-cols-2 gap-2.5">
            <a
              href="https://adipa.co/sesion/"
              className="flex h-11 w-full items-center justify-center rounded-[10px] bg-[#6d44f7] px-4 text-[14px] font-semibold text-white shadow-[0_10px_20px_rgba(109,68,247,0.18)]"
              rel="nofollow"
            >
              Iniciar Sesión
            </a>
            <a
              href="https://adipa.co/registro/"
              className="flex h-11 w-full items-center justify-center rounded-[10px] border border-[#ddd4ff] bg-[#faf8ff] px-4 text-[14px] font-semibold text-[#6d44f7]"
              rel="nofollow"
            >
              ¡Regístrate!
            </a>
          </div>

          <div className="mt-3.5 flex items-center justify-between rounded-[12px] border border-[#ece9f5] bg-[#fcfbff] px-4 py-3">
            <div>
              <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[#9a94ba]">
                Contacto rápido
              </p>
              <p className="mt-1 text-[14px] font-semibold text-[#2c2844]">
                Escríbenos por WhatsApp
              </p>
            </div>
            <a
              href="https://api.whatsapp.com/send?phone=+573144718655&text=Hola, me quiero contactar desde ADIPA"
              target="_blank"
              rel="nofollow noreferrer"
              aria-label="WhatsApp"
              className="flex size-11 items-center justify-center rounded-full bg-[#3cc54a] shadow-[0_8px_18px_rgba(60,197,74,0.22)]"
            >
              <Image
                alt=""
                aria-hidden="true"
                height={24}
                src="/assets/icons-whatsapp.svg"
                width={24}
              />
            </a>
          </div>
        </div>
      </aside>
    </div>
  );
}
