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
      fill="none"
      height="30"
      viewBox="0 0 24 24"
      width="30"
    >
      <path
        d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.8"
      />
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
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.02)_100%)]" />
        <div className="absolute left-[4.8%] top-[50.5%] h-[220px] w-[380px] bg-white/8 [clip-path:polygon(17%_0,81%_0,95%_66%,48%_66%,41%_100%,0_100%,0_78%)]" />
        <div className="absolute left-[26.2%] top-[-12%] h-[162%] w-[124px] -skew-x-[19deg] bg-white/10" />
        <div className="absolute left-[34.8%] top-[-14%] h-[168%] w-[86px] -skew-x-[19deg] bg-white/7" />
      </div>

      <div className="relative mx-auto flex w-full max-w-[1280px] flex-col items-center px-4 py-14 text-center text-white xl:px-6 xl:py-20">
        <h1 className="max-w-4xl text-[30px] font-extrabold leading-[1.08] tracking-[-0.03em] md:text-[44px]">
          Cursos de Psicología con Certificado en 2026
        </h1>
        <p className="mt-5 max-w-[34rem] text-[15px] leading-7 font-normal text-white/90 md:text-[17px]">
          Vive la mejor experiencia de aprendizaje y potencia tus conocimientos a
          través de nuestros cursos y diplomados
        </p>

        <div className="mt-8 flex w-full max-w-[640px] items-center border-b border-white/75 px-0 pb-2">
          <input
            aria-label="Buscar por temática"
            className="h-10 w-full bg-transparent text-[16px] font-black leading-none tracking-[-0.035em] text-white antialiased outline-none placeholder:text-white/0 md:text-[18px]"
            onChange={(event) => onSearchChange?.(event.target.value)}
            placeholder="Buscar"
            value={searchValue}
            type="search"
          />
          <span className="pb-1 text-white">
            <SearchIcon />
          </span>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 text-[13px] text-white/95 md:gap-3 md:text-[14px]">
          <span className="font-medium">Buscar:</span>
          {tags.map((tag) => (
            <button
              key={tag}
              className="rounded-[8px] border border-white/80 bg-white/8 px-3.5 py-1.5 text-[12px] font-medium text-white transition hover:bg-white/14 md:px-4 md:text-[13px]"
              onClick={() => onTagSelect?.(tag)}
              type="button"
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
