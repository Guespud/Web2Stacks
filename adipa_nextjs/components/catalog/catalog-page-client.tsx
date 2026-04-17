"use client";

import { useDeferredValue, useMemo, useState } from "react";

import { CatalogCta } from "@/components/catalog/catalog-cta";
import { CatalogFooter } from "@/components/catalog/catalog-footer";
import { CatalogFaq } from "@/components/catalog/catalog-faq";
import { ContactForm } from "@/components/catalog/contact-form";
import { CatalogHero } from "@/components/catalog/catalog-hero";
import { CatalogSuggestionBanner } from "@/components/catalog/catalog-suggestion-banner";
import { CourseFilters } from "@/components/catalog/course-filters";
import { CourseGrid } from "@/components/catalog/course-grid";
import {
  DEFAULT_FILTER_STATE,
  PRICE_BOUNDS,
  type CatalogFilterGroup,
  type FilterState,
  type SortOption,
} from "@/lib/catalog-config";
import { filterAndSortCourses } from "@/lib/catalog-query";
import type { Course } from "@/lib/course-data";

type CatalogPageClientProps = {
  courses: Course[];
  featuredTags: string[];
  filterGroups: CatalogFilterGroup[];
};

export function CatalogPageClient({
  courses,
  featuredTags,
  filterGroups,
}: CatalogPageClientProps) {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortOption>("all");
  const [openSections, setOpenSections] = useState<string[]>([]);
  const [filters, setFilters] = useState<FilterState>(DEFAULT_FILTER_STATE);
  const deferredSearch = useDeferredValue(search);

  const filteredCourses = useMemo(
    () =>
      filterAndSortCourses({
        courses,
        filters,
        query: deferredSearch,
        sortBy,
      }),
    [courses, deferredSearch, filters, sortBy],
  );

  return (
    <>
      <CatalogHero
        onTagSelect={setSearch}
        onSearchChange={setSearch}
        searchValue={search}
        tags={featuredTags}
      />
      <section className="mx-auto flex w-full max-w-[1280px] gap-6 px-4 py-8 xl:px-6">
        <CourseFilters
          groups={filterGroups}
          onClearFilters={() => setFilters(DEFAULT_FILTER_STATE)}
          onToggleAccordion={(section) =>
            setOpenSections((current) =>
              current[0] === section ? [] : [section],
            )
          }
          onUpdateFilter={(updater) => setFilters((current) => updater(current))}
          openSections={openSections}
          priceBounds={PRICE_BOUNDS}
          state={filters}
        />
        <CourseGrid
          courses={filteredCourses}
          onClearSearch={() => setSearch("")}
          onSortChange={setSortBy}
          searchValue={search}
          sortBy={sortBy}
        />
      </section>
      <CatalogCta />
      <CatalogSuggestionBanner />
      <CatalogFaq />
      <ContactForm />
      <CatalogFooter />
    </>
  );
}
