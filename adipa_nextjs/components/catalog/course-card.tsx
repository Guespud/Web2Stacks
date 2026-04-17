"use client";

import { CourseThumbnail } from "@/components/catalog/course-thumbnail";
import { useCartStore } from "@/lib/cart-store";
import type { Course } from "@/lib/course-data";

type CourseCardProps = {
  course: Course;
};

function AddToCartIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="currentColor"
      height="20"
      viewBox="0 0 20 20"
      width="20"
    >
      <mask
        height="20"
        id="add-cart-mask"
        maskUnits="userSpaceOnUse"
        style={{ maskType: "luminance" }}
        width="20"
        x="0"
        y="0"
      >
        <path d="M20 0H0v20h20V0Z" fill="currentColor" />
      </mask>
      <g fill="currentColor" mask="url(#add-cart-mask)">
        <path d="M5.833 20a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333ZM14.167 20a1.667 1.667 0 1 0 0-3.333 1.667 1.667 0 0 0 0 3.333ZM19.167 2.5H17.5V.833a.833.833 0 1 0-1.667 0V2.5h-1.666a.833.833 0 0 0 0 1.667h1.666v1.666a.833.833 0 1 0 1.667 0V4.167h1.667a.833.833 0 0 0 0-1.667Z" />
        <path d="M18.142 8.105a.828.828 0 0 0-.968.672 2.5 2.5 0 0 1-2.46 2.056H4.515l-.783-6.666h7.101a.833.833 0 0 0 0-1.667H3.535L3.5 2.207A2.5 2.5 0 0 0 1.018 0H.833a.833.833 0 0 0 0 1.667h.185a.833.833 0 0 1 .828.735l1.147 9.75a4.167 4.167 0 0 0 4.138 3.681h8.702a.834.834 0 0 0 0-1.666H7.131A2.5 2.5 0 0 1 4.773 12.5h9.941a4.167 4.167 0 0 0 4.101-3.427.832.832 0 0 0-.673-.968Z" />
      </g>
    </svg>
  );
}

function TrashIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="18"
      viewBox="0 0 24 24"
      width="18"
    >
      <path
        d="M4 7h16M9.5 11.5v5M14.5 11.5v5M6.5 7l1 11a2 2 0 0 0 2 1.8h5a2 2 0 0 0 2-1.8l1-11M9 7V4.8c0-.4.3-.8.8-.8h4.4c.4 0 .8.3.8.8V7"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

function GoToCartIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="18"
      viewBox="0 0 24 24"
      width="18"
    >
      <path
        d="M9 15 16.5 7.5M11 7h6v6M15 13.5V17a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 1-1h3.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
    </svg>
  );
}

function CalendarIcon() {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      height="14"
      viewBox="0 0 24 24"
      width="14"
    >
      <path
        d="M7 3v2M17 3v2M4 9h16M6 5h12a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm3 7h1.5v1.5H9V12Zm0 3h1.5v1.5H9V15Zm4-3h1.5v1.5H13V12Zm0 3h1.5v1.5H13V15Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1.8"
      />
    </svg>
  );
}

export function CourseCard({ course }: CourseCardProps) {
  const addItem = useCartStore((state) => state.addItem);
  const openCart = useCartStore((state) => state.openCart);
  const removeItem = useCartStore((state) => state.removeItem);
  const quantity = useCartStore((state) => state.items[course.title]?.quantity ?? 0);

  return (
    <article className="overflow-hidden rounded-[12px] border border-[#e3e0f2] bg-white shadow-[0_10px_22px_rgba(31,22,87,0.07)]">
      <CourseThumbnail className="aspect-[1.68/1]" mode={course.mode} />

      <div className="space-y-4 px-4 py-4 md:px-5 md:py-5">
        <div className="space-y-3">
          <h3 className="line-clamp-3 text-[17px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#27223f] md:min-h-[76px] md:text-[16px]">
            {course.title}
          </h3>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[12px] text-[#696482]">
            <span className="flex items-center gap-1.5">
              <span className="text-[#7552ff]">
                <CalendarIcon />
              </span>
              <span>Inicio: {course.startDate}</span>
            </span>
            <span className="flex items-center gap-1.5">
              <span className="text-[10px] text-black">●</span>
              <span>{course.status ?? "En progreso"}</span>
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <span className="text-[19px] font-black tracking-[-0.03em] text-[#27223f]">
              {course.price}
            </span>
            {course.discount ? (
              <span className="rounded-sm bg-[#31ace1] px-1.5 py-0.5 text-[8px] font-bold text-white">
                {course.discount}
              </span>
            ) : null}
          </div>

          <div className="flex items-center gap-2.5">
            <button
              className="flex h-11 flex-1 items-center justify-center rounded-[8px] border border-[#7352ff] bg-white px-3 text-[14px] font-bold text-[#27223f]"
              type="button"
            >
              Ver detalle +
            </button>
            {quantity === 0 ? (
              <button
                aria-label={`Agregar ${course.title}`}
                className="flex size-11 items-center justify-center rounded-[8px] bg-[#6f49ff] text-white shadow-[0_8px_18px_rgba(111,73,255,0.28)]"
                onClick={() =>
                  addItem({
                    id: course.title,
                    price: course.price,
                    priceValue: course.priceValue,
                    title: course.title,
                  })
                }
                type="button"
              >
                <AddToCartIcon />
              </button>
            ) : (
              <div className="flex items-center gap-2">
                <button
                  aria-label="Ir al carrito"
                  className="flex size-11 items-center justify-center rounded-[8px] bg-[#6f49ff] text-white shadow-[0_8px_18px_rgba(111,73,255,0.28)]"
                  onClick={openCart}
                  type="button"
                >
                  <GoToCartIcon />
                </button>
                <button
                  aria-label={`Eliminar ${course.title}`}
                  className="flex size-11 items-center justify-center rounded-[8px] bg-[#6f49ff] text-white shadow-[0_8px_18px_rgba(111,73,255,0.28)]"
                  onClick={() => removeItem(course.title)}
                  type="button"
                >
                  <TrashIcon />
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </article>
  );
}
