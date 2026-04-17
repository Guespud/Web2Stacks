"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState, useTransition } from "react";

import { CourseThumbnail } from "@/components/catalog/course-thumbnail";
import { formatCop, getCartItems, getCartTotal } from "@/lib/cart-utils";
import { useCartStore } from "@/lib/cart-store";

export function CheckoutPage() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [paymentStep, setPaymentStep] = useState<"idle" | "processing">("idle");
  const clearCart = useCartStore((state) => state.clearCart);
  const items = useCartStore((state) => state.items);

  const cartItems = useMemo(() => getCartItems(items), [items]);
  const total = useMemo(() => getCartTotal(items), [items]);

  const handlePay = () => {
    if (cartItems.length === 0 || paymentStep === "processing") {
      return;
    }

    setPaymentStep("processing");

    window.setTimeout(() => {
      clearCart();
      startTransition(() => {
        router.push("/checkout/success");
      });
    }, 900);
  };

  if (cartItems.length === 0) {
    return (
      <section className="mx-auto flex w-full max-w-[1280px] px-4 py-10 xl:px-6">
        <div className="w-full rounded-[24px] border border-[#e7e3f7] bg-white px-8 py-14 text-center shadow-[0_20px_60px_rgba(34,22,87,0.08)]">
          <span className="inline-flex rounded-full bg-[#f3efff] px-4 py-1 text-[12px] font-bold uppercase tracking-[0.08em] text-[#6f49ff]">
            Carrito vacío
          </span>
          <h1 className="mt-5 text-[30px] font-black tracking-[-0.03em] text-[#27223f]">
            No hay cursos para continuar la compra
          </h1>
          <p className="mx-auto mt-3 max-w-[540px] text-[16px] leading-7 text-[#726d8d]">
            Agrega uno o más cursos desde el catálogo y vuelve aquí para revisar el
            resumen de tu compra.
          </p>
          <Link
            className="mt-8 inline-flex h-12 items-center justify-center rounded-[10px] bg-[linear-gradient(90deg,#6d44f7_0%,#7a52ff_100%)] px-6 text-[15px] font-semibold text-white shadow-[0_12px_30px_rgba(111,73,255,0.24)]"
            href="/"
          >
            Ir al inicio
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 py-8 xl:px-6 xl:py-10">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-start">
        <div className="min-w-0 flex-1 rounded-[24px] border border-[#e7e3f7] bg-white p-5 shadow-[0_20px_60px_rgba(34,22,87,0.08)] xl:p-7">
          <div className="border-b border-[#ece9f5] pb-5">
            <span className="inline-flex rounded-full bg-[#f3efff] px-4 py-1 text-[12px] font-bold uppercase tracking-[0.08em] text-[#6f49ff]">
              Paso final
            </span>
            <h1 className="mt-4 text-[30px] font-black tracking-[-0.03em] text-[#27223f]">
              Revisa tu compra
            </h1>
            <p className="mt-2 max-w-[620px] text-[15px] leading-7 text-[#726d8d]">
              Verifica los cursos agregados antes de confirmar el pago. Este flujo
              limpia el carrito al completar la compra y te devuelve una pantalla de
              confirmación.
            </p>
          </div>

          <div className="mt-6 space-y-4">
            {cartItems.map((item) => (
              <article
                key={item.id}
                className="flex flex-col gap-4 rounded-[20px] border border-[#ece9f5] bg-[#fcfbff] p-4 md:flex-row md:items-center"
              >
                <CourseThumbnail
                  className="h-[110px] w-full rounded-[16px] border border-[#e4dff8] md:w-[160px]"
                  showBadge={false}
                />

                <div className="min-w-0 flex-1">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8a84a8]">
                    Curso agregado
                  </p>
                  <h2 className="mt-2 text-[20px] font-black leading-[1.15] tracking-[-0.03em] text-[#27223f]">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-[14px] text-[#726d8d]">
                    Acceso individual, un cupo por curso.
                  </p>
                </div>

                <div className="md:text-right">
                  <p className="text-[12px] font-semibold uppercase tracking-[0.08em] text-[#8a84a8]">
                    Precio
                  </p>
                  <p className="mt-2 text-[26px] font-black tracking-[-0.04em] text-[#27223f]">
                    {item.price}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        <aside className="w-full rounded-[24px] border border-[#ddd7f5] bg-[linear-gradient(180deg,#453c62_0%,#504a74_100%)] p-5 text-white shadow-[0_24px_60px_rgba(20,15,52,0.28)] xl:sticky xl:top-[146px] xl:max-w-[360px] xl:p-6">
          <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.08em] text-[#cfd3ff]">
            Resumen
          </span>
          <h2 className="mt-4 text-[26px] font-black tracking-[-0.03em] text-white">
            Total a pagar
          </h2>

          <div className="mt-6 space-y-4 rounded-[18px] border border-white/10 bg-white/6 p-4">
            <div className="flex items-center justify-between gap-4 text-[14px] text-[#d8dbf4]">
              <span>Cursos</span>
              <span>{cartItems.length}</span>
            </div>
            <div className="flex items-center justify-between gap-4 text-[14px] text-[#d8dbf4]">
              <span>Subtotal</span>
              <span>${formatCop(total)} COP</span>
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-white/10 pt-4">
              <span className="text-[14px] font-semibold text-white">Total</span>
              <span className="text-[28px] font-black tracking-[-0.04em] text-white">
                ${formatCop(total)}
              </span>
            </div>
          </div>

          <button
            className="mt-6 flex h-12 w-full items-center justify-center rounded-[10px] bg-[linear-gradient(90deg,#6d44f7_0%,#7a52ff_100%)] text-[15px] font-semibold text-white shadow-[0_14px_28px_rgba(111,73,255,0.3)] disabled:cursor-not-allowed disabled:opacity-70"
            disabled={isPending || paymentStep === "processing"}
            onClick={handlePay}
            type="button"
          >
            {paymentStep === "processing" ? "Procesando pago..." : "Pagar"}
          </button>

          <Link
            className="mt-3 flex h-12 w-full items-center justify-center rounded-[10px] border border-white/18 bg-white/8 text-[15px] font-semibold text-white transition hover:bg-white/12"
            href="/"
          >
            Seguir comprando
          </Link>
        </aside>
      </div>
    </section>
  );
}
