export type SortOption = "all" | "highest-price" | "lowest-price" | "nearest-date";

export type FilterState = {
  areas: string[];
  categories: string[];
  discountRange: [number, number];
  hourRange: [number, number];
  modes: string[];
  priceRange: [number, number];
  programTypes: string[];
  ranking: string | null;
};

export type CatalogFilterGroup = {
  options: string[];
  title: string;
};

export const PRICE_BOUNDS: [number, number] = [0, 2200000];
export const HOUR_BOUNDS: [number, number] = [8, 350];
export const DISCOUNT_BOUNDS: [number, number] = [0, 100];

export const DEFAULT_FILTER_STATE: FilterState = {
  areas: [],
  categories: [],
  discountRange: DISCOUNT_BOUNDS,
  hourRange: HOUR_BOUNDS,
  modes: [],
  priceRange: PRICE_BOUNDS,
  programTypes: [],
  ranking: null,
};

export const COURSE_SORT_OPTIONS = [
  { label: "Todos", value: "all" },
  { label: "Mayor Precio", value: "highest-price" },
  { label: "Menor Precio", value: "lowest-price" },
  { label: "Más próximo", value: "nearest-date" },
] as const;
