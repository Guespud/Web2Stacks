"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo } from "react";

import { CourseThumbnail } from "@/components/catalog/course-thumbnail";
import { formatCop, getCartItems, getCartTotal } from "@/lib/cart-utils";
import { useCartStore } from "@/lib/cart-store";

type CartDrawerProps = {
  open: boolean;
};

export function CartDrawer({ open }: CartDrawerProps) {
  const router = useRouter();
  const closeCart = useCartStore((state) => state.closeCart);
  const items = useCartStore((state) => state.items);
  const removeItem = useCartStore((state) => state.removeItem);
  const totalItems = useCartStore((state) => state.totalItems);

  const cartItems = useMemo(() => getCartItems(items), [items]);
  const totalAmount = useMemo(() => getCartTotal(items), [items]);

  const handleContinueCheckout = () => {
    closeCart();
    router.push("/checkout");
  };

  return (
    <div
      className={`fixed inset-0 z-[60] bg-[#2f2f2f]/45 transition ${
        open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
      }`}
      onClick={closeCart}
    >
      <aside
        className={`absolute right-0 top-0 flex h-full w-full max-w-[380px] flex-col bg-white shadow-[-20px_0_50px_rgba(0,0,0,0.18)] transition-transform ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="flex items-center justify-between border-b border-[#ece9f5] px-5 py-4 md:px-6 md:py-5">
          <div>
            <h2 className="text-[20px] font-extrabold text-[#27223f]">Carrito</h2>
            <p className="text-[12px] text-[#7b7697]">
              {totalItems} {totalItems === 1 ? "curso agregado" : "cursos agregados"}
            </p>
          </div>
          <button
            aria-label="Cerrar carrito"
            className="text-[32px] font-light leading-none text-[#7652ff]"
            onClick={closeCart}
            type="button"
          >
            ×
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4 md:px-6 md:py-5">
          {cartItems.length === 0 ? (
            <div className="rounded-[10px] border border-dashed border-[#d8d2f4] bg-[#faf8ff] px-5 py-8 text-center text-[14px] text-[#7b7697]">
              Aún no has agregado cursos al carrito.
            </div>
          ) : (
            <div className="space-y-4">
              {cartItems.map((item) => (
                <article
                  key={item.id}
                  className="flex gap-3 rounded-[12px] border border-[#ece9f5] p-3 md:gap-4"
                >
                  <CourseThumbnail
                    className="h-20 w-24 rounded-[8px]"
                    showBadge={false}
                  />
                  <div className="min-w-0 flex-1">
                    <h3 className="line-clamp-3 text-[14px] font-bold leading-5 text-[#27223f]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-[16px] font-black text-[#27223f]">
                      {item.price}
                    </p>
                    <button
                      className="mt-3 text-[12px] font-bold text-[#6f49ff]"
                      onClick={() => removeItem(item.id)}
                      type="button"
                    >
                      Eliminar
                    </button>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>

        <div className="border-t border-[#ece9f5] px-5 py-4 md:px-6 md:py-5">
          <div className="mb-4 rounded-[12px] border border-[#ece9f5] bg-[#faf8ff] p-4">
            <div className="flex items-center justify-between gap-4 text-[13px] text-[#726d8d]">
              <span>Cursos</span>
              <span className="font-semibold text-[#27223f]">{cartItems.length}</span>
            </div>
            <div className="mt-2 flex items-center justify-between gap-4 text-[13px] text-[#726d8d]">
              <span>Subtotal</span>
              <span className="font-semibold text-[#27223f]">
                ${formatCop(totalAmount)} COP
              </span>
            </div>
            <div className="mt-3 flex items-center justify-between gap-4 border-t border-[#ece9f5] pt-3">
              <span className="text-[14px] font-bold text-[#27223f]">Total</span>
              <span className="text-[22px] font-black tracking-[-0.03em] text-[#27223f]">
                ${formatCop(totalAmount)}
              </span>
            </div>
          </div>

          <button
            className="h-12 w-full rounded-[8px] bg-[linear-gradient(90deg,#6d44f7_0%,#7a52ff_100%)] text-[15px] font-semibold text-white disabled:cursor-not-allowed disabled:opacity-55"
            disabled={cartItems.length === 0}
            onClick={handleContinueCheckout}
            type="button"
          >
            Continuar compra
          </button>

          {cartItems.length === 0 ? (
            <Link
              className="mt-3 flex justify-center text-[13px] font-medium text-[#726d8d]"
              href="/"
              onClick={closeCart}
            >
              Ir al catálogo
            </Link>
          ) : null}
        </div>
      </aside>
    </div>
  );
}
