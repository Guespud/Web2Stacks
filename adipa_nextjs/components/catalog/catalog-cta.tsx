export function CatalogCta() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 pb-12 xl:px-6 xl:pb-16">
      <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#f2f3ff_0%,#eef0ff_100%)] px-5 py-12 text-center shadow-[0_20px_40px_rgba(86,70,180,0.08)] md:px-10 xl:px-16 xl:py-18">
        <div className="absolute inset-0">
          <div className="absolute left-1/2 top-[-8%] h-[140%] w-[90px] -translate-x-1/2 -skew-x-[16deg] bg-white/40" />
          <div className="absolute bottom-[-8%] left-1/2 h-[150px] w-[280px] -translate-x-[10%] bg-[#e8e9fb] [clip-path:polygon(24%_0,84%_0,100%_100%,0_100%)]" />
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 text-[170px] font-black leading-none text-white/35 md:bottom-4 md:text-[240px]">
            A
          </div>
        </div>

        <div className="relative mx-auto max-w-3xl">
          <p className="text-[14px] font-extrabold uppercase tracking-[0.16em] text-[#6d44f7]">
            Cursos
          </p>
          <h2 className="mt-4 text-[28px] font-extrabold leading-[1.08] tracking-[-0.03em] text-[#27223f] md:text-[42px]">
            Domina tu conocimiento con nuestro programas certificados de ADIPA
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-7 text-[#73708e] md:mt-6 md:text-[18px] md:leading-8">
            Comienza a fortalecer tus habilidades gracias un equipo comprometido
            contigo, y con la salud mental del mundo.
          </p>

          <button
            className="mt-7 inline-flex h-12 w-full items-center justify-center rounded-[10px] bg-[linear-gradient(90deg,#6d44f7_0%,#7a52ff_100%)] px-6 text-[15px] font-semibold text-white shadow-[0_14px_26px_rgba(109,68,247,0.24)] md:mt-8 md:h-13 md:w-auto md:px-8 md:text-[17px]"
            type="button"
          >
            Ver todos los cursos
          </button>
        </div>
      </div>
    </section>
  );
}
