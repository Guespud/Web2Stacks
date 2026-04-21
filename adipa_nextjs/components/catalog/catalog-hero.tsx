type CatalogHeroProps = {
  onTagSelect?: (value: string) => void;
  onSearchChange?: (value: string) => void;
  searchValue?: string;
  tags: string[];
};

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height="16"
      viewBox="0 0 20 20"
      width="16"
    >
      <path d="M8.5 2a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13Zm0-2a8.5 8.5 0 1 0 5.33 15.12l4.02 4.02a1 1 0 0 0 1.42-1.42l-4.02-4.02A8.5 8.5 0 0 0 8.5 0Z" />
    </svg>
  );
}

export function CatalogHero({
  onTagSelect,
  onSearchChange,
  searchValue = "",
  tags,
}: CatalogHeroProps) {
  return (
    <section className="relative isolate overflow-hidden bg-[linear-gradient(90deg,#6843f7_0%,#744cff_48%,#6f47fb_100%)]">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.05)_0%,rgba(255,255,255,0.02)_100%)]" />
      </div>

      <div className="relative mx-auto w-full max-w-[1400px] px-5 py-10 text-center text-white md:px-10 md:py-16">
        <div className="mx-auto max-w-[1120px]">
          <div className="mx-auto max-w-[1120px]">
            <h1 className="mx-auto max-w-none text-[36px] font-semibold leading-[48px] text-white md:text-[38px] md:leading-[48px]">
              Cursos de Psicología con Certificado en 2026
            </h1>
            <p className="mx-auto mt-5 max-w-[760px] text-[14px] font-normal leading-[26px] text-white/88 md:text-[14px]">
              Vive la mejor experiencia de aprendizaje y potencia tus conocimientos a
              través de nuestros cursos y diplomados
            </p>
          </div>

          <div className="mx-auto mt-10 w-full max-w-[620px]">
            <form
              className="w-full"
              onSubmit={(event) => event.preventDefault()}
            >
              <div className="w-full border-b border-white/75 pb-2">
                <div className="flex min-h-[44px] items-center">
                  <span
                    aria-hidden="true"
                    className="mr-2 inline-block h-[25px] w-[2px] animate-[hero-caret-blink_1s_infinite] rounded-full bg-white"
                  />
                  <input
                    aria-label="Buscar por temática"
                    autoComplete="off"
                    className="w-full border-0 bg-transparent px-2 pr-12 text-[24px] font-bold leading-none text-white outline-none placeholder:text-white/0"
                    onChange={(event) => onSearchChange?.(event.target.value)}
                    placeholder="Buscar"
                    type="search"
                    value={searchValue}
                  />
                  <span className="shrink-0 px-[15px] text-white">
                    <SearchIcon />
                  </span>
                </div>
              </div>

              <div className="mt-9 flex flex-wrap items-center justify-center gap-x-[10px] gap-y-[8px] text-[14px] text-white/95">
                <p className="mb-0 text-white">Buscar:</p>
                <div className="flex flex-wrap items-center justify-center">
                  {tags.map((tag) => (
                    <button
                      key={tag}
                      className="mx-[5px] mb-[5px] inline-block rounded-[7px] border border-white bg-white/30 px-[10px] text-[13px] font-medium leading-[26px] text-white transition hover:bg-white/40"
                      onClick={() => onTagSelect?.(tag)}
                      type="button"
                    >
                      <span>{tag}</span>
                    </button>
                  ))}
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
