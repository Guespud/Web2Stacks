import Image from "next/image";
import Link from "next/link";

type HeaderDesktopProps = {
  navItems: readonly {
    active: boolean;
    badge: string | null;
    bold: boolean;
    chevron?: boolean;
    href: string;
    label: string;
  }[];
  onOpenCart: () => void;
  totalItems: number;
};

export function HeaderDesktop({
  navItems,
  onOpenCart,
  totalItems,
}: HeaderDesktopProps) {
  return (
    <div className="mx-auto hidden w-full max-w-[1280px] px-4 xl:block xl:px-6">
      <div className="flex min-h-[72px] items-center gap-8 py-3">
        <Link href="/" className="shrink-0 leading-none">
          <Image
            alt="ADIPA Colombia"
            className="h-auto w-[130px]"
            height={68}
            priority
            src="/assets/logo-colombia.webp"
            width={130}
          />
        </Link>

        <div className="flex min-w-[420px] flex-1 items-center">
          <label className="sr-only" htmlFor="header-search">
            Buscar
          </label>
          <div className="flex h-[38px] w-full overflow-hidden rounded-[4px] border border-[#35a8f5] bg-white">
            <input
              id="header-search"
              className="w-full px-4 text-[14px] text-[#53506a] outline-none placeholder:text-[#a19db5]"
              placeholder="¿Qué quieres aprender?"
              type="search"
            />
            <button
              aria-label="Buscar"
              className="flex w-12 items-center justify-center bg-[#35a8f5] text-xl text-white"
              type="button"
            >
              ⌕
            </button>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-6 text-[15px] font-semibold text-[#27223f]">
          <span>Iniciar Sesión</span>
          <div className="flex items-center gap-2">
            <span className="font-medium text-[#4e4a68]">Regístrate</span>
            <button
              aria-label="Carrito"
              className="relative flex h-8 w-8 items-center justify-center"
              onClick={onOpenCart}
              type="button"
            >
              <Image
                alt=""
                aria-hidden="true"
                className="h-auto"
                height={20}
                src="/assets/icon-main-cart.png"
                width={20}
              />
              {totalItems > 0 ? (
                <span className="absolute -right-1 -top-1 min-w-4 rounded-full bg-white px-1 text-center text-[10px] font-bold leading-4 text-[#6f49ff]">
                  {totalItems}
                </span>
              ) : null}
            </button>
          </div>
        </div>
      </div>

      <div className="flex min-h-[44px] items-center justify-between gap-8 py-1">
        <button
          className="flex shrink-0 items-center gap-2 text-[14px] font-medium text-[#53506a]"
          type="button"
        >
          <Image
            alt=""
            aria-hidden="true"
            height={16}
            src="/assets/icons-whatsapp.svg"
            width={16}
          />
          <span>Descubre ADIPA</span>
          <span className="text-[10px]">▼</span>
        </button>

        <nav className="flex flex-wrap items-end justify-end gap-6 text-[15px] font-medium text-[#5b566f]">
          {navItems.map((item) => (
            <Link
              key={item.label}
              className={`relative flex items-center gap-1 ${
                item.active ? "font-extrabold text-[#27223f]" : ""
              }`}
              href={item.href}
            >
              {item.badge ? (
                <span
                  className={`absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-[3px] px-1.5 py-[1px] text-[8px] font-extrabold uppercase tracking-[0.06em] text-white ${
                    item.badge === "Gratis" ? "bg-[#6d44f7]" : "bg-[#ff2f7d]"
                  }`}
                >
                  {item.badge}
                </span>
              ) : null}
              <span>{item.label}</span>
              {item.label === "Recursos" ? (
                <span className="text-[10px]">▼</span>
              ) : null}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
