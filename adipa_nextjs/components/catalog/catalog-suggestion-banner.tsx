export function CatalogSuggestionBanner() {
  return (
    <section className="mx-auto w-full max-w-[1280px] px-4 pb-14 xl:px-6 xl:pb-20">
      <div className="rounded-[24px] bg-[#6f4cff] px-5 py-7 text-white shadow-[0_22px_44px_rgba(109,68,247,0.2)] md:px-8 xl:px-10 xl:py-9">
        <div className="flex flex-col gap-7 xl:flex-row xl:items-center xl:justify-between">
          <div className="flex min-w-0 flex-col gap-5 xl:flex-row xl:items-start xl:gap-8">
            <div className="flex shrink-0 items-start gap-3">
              <div className="mt-1 flex size-11 items-center justify-center rounded-[14px] bg-white/14 backdrop-blur-sm md:size-12">
                <svg
                  aria-hidden="true"
                  fill="none"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                >
                  <path
                    d="M12 3v18M3 12h18"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2.2"
                  />
                </svg>
              </div>
              <div>
                <p className="text-[12px] font-extrabold uppercase tracking-[0.16em] text-white/72">
                  Sugerencias
                </p>
                <h3 className="mt-2 max-w-[280px] text-[24px] font-extrabold leading-[1] tracking-[-0.035em] md:text-[31px]">
                  ¿Tienes una idea para un nuevo curso?
                </h3>
              </div>
            </div>

            <p className="max-w-[760px] text-[14px] leading-6 text-white/92 md:text-[16px] md:leading-8">
              En ADIPA valoramos tus sugerencias. Ayúdanos a crear el contenido
              que te gustaría aprender. Si tienes una propuesta para un curso que
              te gustaría ver en nuestra plataforma, compártela con nosotros y
              contribuye a nuestra comunidad de aprendizaje.
            </p>
          </div>

          <div className="flex shrink-0 flex-col items-start gap-3 xl:items-end">
            <button
              className="inline-flex h-12 w-full items-center justify-center rounded-[10px] bg-white px-6 text-[15px] font-semibold text-[#6b46f7] shadow-[0_14px_28px_rgba(255,255,255,0.14)] transition hover:-translate-y-0.5 md:h-13 md:w-auto md:px-8 md:text-[16px]"
              type="button"
            >
              Sugerir un curso
            </button>
            <p className="max-w-[18rem] text-[12px] font-medium text-white/70">
              Tu propuesta puede convertirse en el próximo lanzamiento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
