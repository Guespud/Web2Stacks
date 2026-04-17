import Image from "next/image";
import Link from "next/link";

type HeaderMobileProps = {
  onOpenCart: () => void;
  onOpenMenu: () => void;
  totalItems: number;
};

export function HeaderMobile({
  onOpenCart,
  onOpenMenu,
  totalItems,
}: HeaderMobileProps) {
  return (
    <div className="mx-auto flex h-[68px] w-full items-center justify-between px-4 xl:hidden">
      <button
        aria-label="Abrir menú"
        className="flex size-9 items-center justify-center text-[#6f49ff]"
        onClick={onOpenMenu}
        type="button"
      >
        <span className="relative block h-[18px] w-[30px]">
          <span className="absolute left-0 top-0 h-[3px] w-full rounded-full bg-current" />
          <span className="absolute left-0 top-[7px] h-[3px] w-full rounded-full bg-current" />
          <span className="absolute left-0 top-[14px] h-[3px] w-full rounded-full bg-current" />
        </span>
      </button>

      <Link href="/" className="min-w-0 leading-none">
        <Image
          alt="ADIPA Colombia"
          className="h-auto w-[124px]"
          height={30}
          priority
          src="/assets/logo-colombia.webp"
          width={124}
        />
      </Link>

      <div className="flex items-center gap-2.5 text-[#6f49ff]">
        <button
          aria-label="Buscar"
          className="flex size-9 items-center justify-center rounded-full bg-[#35a8f5] text-[17px] text-white shadow-[0_8px_18px_rgba(53,168,245,0.22)]"
          type="button"
        >
          ⌕
        </button>
        <button
          aria-label="Carrito"
          className="relative flex size-9 items-center justify-center rounded-full bg-[#f4f1ff]"
          onClick={onOpenCart}
          type="button"
        >
          <Image
            alt=""
            aria-hidden="true"
            className="h-auto w-[22px]"
            height={22}
            src="/assets/icon-main-cart.png"
            width={22}
          />
          {totalItems > 0 ? (
            <span className="absolute -right-1 -top-1 min-w-4 rounded-full bg-white px-1 text-center text-[11px] font-bold leading-4 text-[#6f49ff]">
              {totalItems}
            </span>
          ) : null}
        </button>
      </div>
    </div>
  );
}
