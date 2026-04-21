import Image from "next/image";
import Link from "next/link";

type HeaderMobileProps = {
  onOpenCart: () => void;
  onOpenMenu: () => void;
  totalItems: number;
};

export function HeaderMobile({ onOpenCart, onOpenMenu, totalItems }: HeaderMobileProps) {
  return (
    <div className="mx-auto flex h-[68px] w-full items-center justify-between px-4 xl:hidden">
      {/* Hamburger */}
      <button
        aria-label="Abrir menú"
        className="flex size-9 items-center justify-center"
        onClick={onOpenMenu}
        type="button"
      >
        <div className="header__ham flex flex-col gap-[5px]">
          <span className="block h-[3px] w-[26px] rounded-full bg-[#27223f]" />
          <span className="block h-[3px] w-[26px] rounded-full bg-[#27223f]" />
          <span className="block h-[3px] w-[26px] rounded-full bg-[#27223f]" />
        </div>
      </button>

      {/* Logo centered */}
      <Link href="https://adipa.co" className="leading-none">
        <Image
          alt="ADIPA"
          className="h-auto w-[150px]"
          height={35}
          priority
          src="/assets/logo-colombia.webp"
          width={182}
        />
      </Link>

      {/* Right: search + cart */}
      <div className="flex items-center gap-2">
        <button
          aria-label="Buscar"
          className="flex size-9 items-center justify-center"
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
        <button
          aria-label="Carrito"
          className="relative flex size-9 items-center justify-center"
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
            <span className="absolute -right-1 -top-1 min-w-4 rounded-full bg-[#6d44f7] px-1 text-center text-[10px] font-bold leading-4 text-white">
              {totalItems}
            </span>
          )}
        </button>
      </div>
    </div>
  );
}
