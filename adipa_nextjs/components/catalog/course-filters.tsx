"use client";

import {
  DISCOUNT_BOUNDS,
  HOUR_BOUNDS,
  type CatalogFilterGroup,
  type FilterState,
} from "@/lib/catalog-config";

type CourseFiltersProps = {
  groups: CatalogFilterGroup[];
  onClearFilters: () => void;
  onToggleAccordion: (section: string) => void;
  onUpdateFilter: (updater: (state: FilterState) => FilterState) => void;
  openSections: string[];
  priceBounds: [number, number];
  state: FilterState;
};

function Chevron({ open }: { open: boolean }) {
  return (
    <span
      className={`flex size-8 items-center justify-center rounded-full border transition ${
        open
          ? "border-[#dcd6ff] bg-[#f3f0ff] text-[#6d44f7]"
          : "border-transparent bg-transparent text-[#b2b6c8]"
      }`}
    >
      <svg
        aria-hidden="true"
        className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
        fill="none"
        height="16"
        viewBox="0 0 16 16"
        width="16"
      >
        <path
          d="M3 6l5 5 5-5"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
        />
      </svg>
    </span>
  );
}

function RangeSection({
  labelEnd,
  labelStart,
  max,
  min,
  onChange,
  value,
}: {
  labelEnd: string;
  labelStart: string;
  max: number;
  min: number;
  onChange: (value: [number, number]) => void;
  value: [number, number];
}) {
  return (
    <div className="rounded-[12px] bg-[#fcfdff] px-3 pb-2 pt-3">
      <div className="mb-3 flex items-center justify-between text-[15px] font-bold text-[#687590]">
        <span>{labelStart}</span>
        <span>-</span>
        <span>{labelEnd}</span>
      </div>
      <div className="relative h-8">
        <div className="absolute top-1/2 h-1 w-full -translate-y-1/2 rounded-full bg-[#c9ecff]" />
        <div
          className="absolute top-1/2 h-1 -translate-y-1/2 rounded-full bg-[#48c2ff]"
          style={{
            left: `${((value[0] - min) / (max - min)) * 100}%`,
            right: `${100 - ((value[1] - min) / (max - min)) * 100}%`,
          }}
        />
        <input
          className="absolute left-0 top-0 h-8 w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-thumb]:-mt-2 [&::-webkit-slider-thumb]:size-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-[#42c3ff]"
          max={max}
          min={min}
          onChange={(event) =>
            onChange([
              Math.min(Number(event.target.value), value[1]),
              value[1],
            ])
          }
          type="range"
          value={value[0]}
        />
        <input
          className="absolute left-0 top-0 h-8 w-full appearance-none bg-transparent [&::-webkit-slider-runnable-track]:h-1 [&::-webkit-slider-runnable-track]:bg-transparent [&::-webkit-slider-thumb]:-mt-2 [&::-webkit-slider-thumb]:size-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border-4 [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:bg-[#42c3ff]"
          max={max}
          min={min}
          onChange={(event) =>
            onChange([
              value[0],
              Math.max(Number(event.target.value), value[0]),
            ])
          }
          type="range"
          value={value[1]}
        />
      </div>
    </div>
  );
}

export function CourseFilters({
  groups,
  onClearFilters,
  onToggleAccordion,
  onUpdateFilter,
  openSections,
  priceBounds,
  state,
}: CourseFiltersProps) {
  const [minPrice, maxPrice] = priceBounds;

  const areaGroup = groups.find((group) => group.title === "Área temática");
  const programGroup = groups.find((group) => group.title === "Tipo de programa");
  const modeGroup = groups.find((group) => group.title === "Modalidad");
  const categoryGroup = groups.find((group) => group.title === "Categoría");
  const rankingGroup = groups.find((group) => group.title === "Ranking cursos");

  const sections = [
    {
      key: "areas",
      title: "Área Temática",
      content: (
        <div className="space-y-2 pt-3">
          {areaGroup?.options.map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-start gap-3 rounded-[8px] px-1 py-0.5 text-[13px] leading-7 text-[#7180a0] transition hover:bg-[#f8f7ff]"
            >
              <input
                checked={state.areas.includes(option)}
                className="mt-1.5 size-5 rounded-[4px] border-[#c8cfdf] text-[#48c2ff]"
                onChange={() =>
                  onUpdateFilter((current) => ({
                    ...current,
                    areas: current.areas.includes(option)
                      ? current.areas.filter((item) => item !== option)
                      : [...current.areas, option],
                  }))
                }
                type="checkbox"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      ),
    },
    {
      key: "programs",
      title: "Tipo de programa",
      content: (
        <div className="space-y-2 pt-3">
          {programGroup?.options.map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-3 rounded-[8px] px-1 py-0.5 text-[13px] leading-7 text-[#7180a0] transition hover:bg-[#f8f7ff]"
            >
              <input
                checked={state.programTypes.includes(option)}
                className="size-5 rounded-[4px] border-[#c8cfdf] text-[#48c2ff]"
                onChange={() =>
                  onUpdateFilter((current) => ({
                    ...current,
                    programTypes: current.programTypes.includes(option)
                      ? current.programTypes.filter((item) => item !== option)
                      : [...current.programTypes, option],
                  }))
                }
                type="checkbox"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      ),
    },
    {
      key: "modes",
      title: "Modalidad",
      content: (
        <div className="space-y-2 pt-3">
          {modeGroup?.options.map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-3 rounded-[8px] px-1 py-0.5 text-[13px] leading-7 text-[#7180a0] transition hover:bg-[#f8f7ff]"
            >
              <input
                checked={state.modes.includes(option)}
                className="size-5 rounded-[4px] border-[#c8cfdf] text-[#48c2ff]"
                onChange={() =>
                  onUpdateFilter((current) => ({
                    ...current,
                    modes: current.modes.includes(option)
                      ? current.modes.filter((item) => item !== option)
                      : [...current.modes, option],
                  }))
                }
                type="checkbox"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      ),
    },
    {
      key: "price",
      title: "Rango de Precio",
      content: (
        <RangeSection
          labelEnd={`$${maxPrice.toLocaleString("es-CO")}`}
          labelStart={`$${state.priceRange[0].toLocaleString("es-CO")}`}
          max={maxPrice}
          min={minPrice}
          onChange={(value) =>
            onUpdateFilter((current) => ({ ...current, priceRange: value }))
          }
          value={state.priceRange}
        />
      ),
    },
    {
      key: "hours",
      title: "Rango de Horas",
      content: (
        <RangeSection
          labelEnd={`${state.hourRange[1]}`}
          labelStart={`${state.hourRange[0]}`}
          max={HOUR_BOUNDS[1]}
          min={HOUR_BOUNDS[0]}
          onChange={(value) =>
            onUpdateFilter((current) => ({ ...current, hourRange: value }))
          }
          value={state.hourRange}
        />
      ),
    },
    {
      key: "discount",
      title: "Rango de Descuentos",
      content: (
        <RangeSection
          labelEnd={`${state.discountRange[1]}`}
          labelStart={`${state.discountRange[0]}`}
          max={DISCOUNT_BOUNDS[1]}
          min={DISCOUNT_BOUNDS[0]}
          onChange={(value) =>
            onUpdateFilter((current) => ({ ...current, discountRange: value }))
          }
          value={state.discountRange}
        />
      ),
    },
    {
      key: "categories",
      title: "Categoría",
      content: (
        <div className="space-y-2 pt-3">
          {categoryGroup?.options.map((option) => (
            <label
              key={option}
              className="flex cursor-pointer items-center gap-3 rounded-[8px] px-1 py-0.5 text-[13px] leading-7 text-[#7180a0] transition hover:bg-[#f8f7ff]"
            >
              <input
                checked={state.categories.includes(option)}
                className="size-5 rounded-[4px] border-[#c8cfdf] text-[#48c2ff]"
                onChange={() =>
                  onUpdateFilter((current) => ({
                    ...current,
                    categories: current.categories.includes(option)
                      ? current.categories.filter((item) => item !== option)
                      : [...current.categories, option],
                  }))
                }
                type="checkbox"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      ),
    },
  ];

  return (
    <aside className="hidden w-[292px] shrink-0 xl:mt-14.5 xl:block">
      <div className="rounded-[28px] border border-[#f0eef9] bg-white p-7 shadow-[0_18px_40px_rgba(31,22,87,0.055)]">
        <div className="space-y-3 border-b border-[#eceef6] pb-7">
          {rankingGroup?.options.map((option) => (
            <button
              key={option}
              className={`block text-left text-[15px] font-extrabold transition ${
                state.ranking === option ? "text-[#6d44f7]" : "text-[#232041]"
              }`}
              onClick={() =>
                onUpdateFilter((current) => ({
                  ...current,
                  ranking: current.ranking === option ? null : option,
                }))
              }
              type="button"
            >
              {option}
              {option === "Ofertas Flash" ? " ⚡" : ""}
            </button>
          ))}
        </div>

        <div className="flex items-center justify-between pb-4 pt-6">
          <h3 className="text-[15px] font-medium text-[#a1a1b6]">Filtros</h3>
        </div>

        <div className="space-y-0.5">
          {sections.map((section) => {
            const isOpen = openSections.includes(section.key);

            return (
              <section
                key={section.key}
                className="border-b border-[#f1eff7] py-1 last:border-b-0"
              >
                <button
                  className={`flex w-full items-center justify-between py-4 text-left text-[16px] font-extrabold ${
                    isOpen ? "text-[#6d44f7]" : "text-[#261f53]"
                  }`}
                  onClick={() => onToggleAccordion(section.key)}
                  type="button"
                >
                  <span>{section.title}</span>
                  <Chevron open={isOpen} />
                </button>
                {isOpen ? section.content : null}
              </section>
            );
          })}
        </div>

        <button
          className="mt-6 flex h-13 w-full items-center justify-center rounded-[12px] bg-[#f1efff] text-[16px] font-semibold text-[#7a5cff] transition hover:bg-[#ece7ff]"
          onClick={onClearFilters}
          type="button"
        >
          Borrar filtros
        </button>
      </div>
    </aside>
  );
}
