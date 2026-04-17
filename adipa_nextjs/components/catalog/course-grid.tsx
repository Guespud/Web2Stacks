import { CourseCard } from "@/components/catalog/course-card";
import { COURSE_SORT_OPTIONS, type SortOption } from "@/lib/catalog-config";
import type { Course } from "@/lib/course-data";

type CourseGridProps = {
  courses: Course[];
  onClearSearch?: () => void;
  onSortChange?: (value: SortOption) => void;
  searchValue?: string;
  sortBy?: SortOption;
};

export function CourseGrid({
  courses,
  onClearSearch,
  onSortChange,
  searchValue = "",
  sortBy = "all",
}: CourseGridProps) {
  const hasNoResults = courses.length === 0;

  return (
    <div className="min-w-0 flex-1">
      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-[12px] font-bold text-[var(--color-brand)]">
            Cursos que te permitirán potenciar tu carrera.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <span className="text-[12px] font-semibold text-[var(--color-muted)]">
            Ordenar por
          </span>
          {COURSE_SORT_OPTIONS.map((option) => (
            <button
              key={option.value}
              className={`inline-flex h-9 items-center rounded-sm px-3 text-[12px] font-semibold transition ${
                sortBy === option.value
                  ? "bg-[var(--color-brand)] text-white shadow-[0_10px_20px_rgba(109,68,247,0.18)]"
                  : "bg-white text-[var(--color-muted)] hover:bg-[var(--color-brand-soft)] hover:text-[var(--color-brand)]"
              }`}
              onClick={() => onSortChange?.(option.value)}
              type="button"
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {hasNoResults ? (
        <div className="overflow-hidden rounded-[16px] border border-[#e8e3fb] bg-[linear-gradient(180deg,#fcfbff_0%,#f7f4ff_100%)] shadow-[0_16px_40px_rgba(77,52,184,0.08)]">
          <div className="h-1 w-full bg-[linear-gradient(90deg,#6d44f7_0%,#35a8f5_100%)]" />
          <div className="px-6 py-8 md:px-8 md:py-10">
            <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#efe9ff] text-[#6d44f7]">
              <svg
                aria-hidden="true"
                fill="none"
                height="24"
                viewBox="0 0 24 24"
                width="24"
              >
                <path
                  d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 1 0-15 7.5 7.5 0 0 1 0 15Z"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                />
              </svg>
            </div>

            <h3 className="text-[24px] font-extrabold tracking-[-0.02em] text-[#27223f]">
              No se encontraron cursos
            </h3>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-[#6f6a89]">
              No encontramos resultados para{" "}
              <span className="font-bold text-[#27223f]">
                {searchValue.trim() || "tu búsqueda"}
              </span>
              . Intenta con otro término, revisa la ortografía o limpia el filtro
              para volver a explorar el catálogo completo.
            </p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                className="inline-flex h-11 items-center justify-center rounded-[8px] bg-[#6d44f7] px-5 text-[14px] font-semibold text-white shadow-[0_12px_24px_rgba(109,68,247,0.2)]"
                onClick={onClearSearch}
                type="button"
              >
                Limpiar búsqueda
              </button>
              <span className="text-[13px] text-[#7f7a98]">
                Prueba con términos como{" "}
                <span className="font-semibold text-[#6d44f7]">
                  autismo, trauma o depresión
                </span>
                .
              </span>
            </div>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-x-4 gap-y-5 md:grid-cols-2 xl:grid-cols-3">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
      )}
    </div>
  );
}
