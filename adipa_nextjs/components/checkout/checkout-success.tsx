"use client";

import Link from "next/link";

export function CheckoutSuccess() {
  return (
    <section className="mx-auto flex w-full max-w-[1280px] px-4 py-10 xl:px-6">
      <div className="w-full rounded-[28px] border border-[#e6e2f8] bg-[linear-gradient(135deg,#f5f1ff_0%,#ffffff_45%,#f7f9ff_100%)] px-8 py-16 text-center shadow-[0_24px_80px_rgba(34,22,87,0.1)]">
        <span className="inline-flex rounded-full bg-[#6f49ff] px-4 py-1 text-[12px] font-bold uppercase tracking-[0.08em] text-white">
          Pago confirmado
        </span>
        <h1 className="mt-6 text-[34px] font-black tracking-[-0.04em] text-[#27223f]">
          Gracias por tu compra
        </h1>
        <p className="mx-auto mt-4 max-w-[620px] text-[16px] leading-7 text-[#726d8d]">
          Tu compra fue registrada correctamente. El carrito ya fue limpiado y
          puedes volver al catálogo principal para seguir explorando nuevos cursos.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 md:flex-row">
          <Link
            className="inline-flex h-12 items-center justify-center rounded-[10px] bg-[linear-gradient(90deg,#6d44f7_0%,#7a52ff_100%)] px-6 text-[15px] font-semibold text-white shadow-[0_12px_30px_rgba(111,73,255,0.24)]"
            href="/"
          >
            Ir al inicio
          </Link>
          <Link
            className="inline-flex h-12 items-center justify-center rounded-[10px] border border-[#d9d3f4] bg-white px-6 text-[15px] font-semibold text-[#27223f]"
            href="/checkout"
          >
            Ver checkout vacío
          </Link>
        </div>
      </div>
    </section>
  );
}
