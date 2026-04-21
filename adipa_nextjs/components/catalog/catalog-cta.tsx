export function CatalogCta() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 pb-12 xl:px-6 xl:pb-16">
      <div className="relative overflow-hidden rounded-[24px] bg-[linear-gradient(180deg,#f3f4ff_0%,#ecefff_100%)] px-5 py-12 text-center shadow-[0_20px_40px_rgba(86,70,180,0.08)] md:px-10 xl:px-16 xl:py-18">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.78)_0%,rgba(255,255,255,0.18)_34%,rgba(255,255,255,0)_68%)]" />
          <div className="pointer-events-none absolute bottom-0 left-1/2 hidden h-[240px] w-[430px] -translate-x-1/2 md:block">
            <div className="absolute bottom-0 left-[14%] h-[92%] w-[26%] bg-white/18 [clip-path:polygon(72%_0,100%_0,34%_100%,0_100%)]" />
            <div className="absolute bottom-0 right-[14%] h-[92%] w-[26%] bg-white/18 [clip-path:polygon(0_0,28%_0,100%_100%,66%_100%)]" />
            <div className="absolute bottom-[14%] left-1/2 h-[72px] w-[160px] -translate-x-1/2 bg-white/28 [clip-path:polygon(16%_0,84%_0,100%_100%,0_100%)]" />
            <div className="absolute bottom-0 left-[32%] h-full w-[22%] -skew-x-[16deg] bg-white/28" />
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
