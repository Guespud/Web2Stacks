import type { FilterState, SortOption } from "@/lib/catalog-config";
import type { Course } from "@/lib/course-data";

export function filterAndSortCourses(params: {
  courses: Course[];
  filters: FilterState;
  query: string;
  sortBy: SortOption;
}) {
  const { courses, filters, query, sortBy } = params;
  const normalizedQuery = query.trim().toLowerCase();

  const matchingCourses = !normalizedQuery
    ? courses
    : courses.filter((course) => {
        const searchableText = [
          course.title,
          course.description,
          course.category,
          course.school,
          course.mode,
          course.startDate,
          ...course.tags,
        ]
          .join(" ")
          .toLowerCase();

        return searchableText.includes(normalizedQuery);
      });

  const filteredCourses = matchingCourses.filter((course) => {
    const matchesArea =
      filters.areas.length === 0 || filters.areas.includes(course.area);
    const matchesProgram =
      filters.programTypes.length === 0 ||
      filters.programTypes.includes(course.category);
    const matchesMode =
      filters.modes.length === 0 || filters.modes.includes(course.mode);
    const matchesCategory =
      filters.categories.length === 0 ||
      filters.categories.some((category) => course.tags.includes(category));
    const matchesPrice =
      course.priceValue >= filters.priceRange[0] &&
      course.priceValue <= filters.priceRange[1];
    const matchesHours =
      course.hours >= filters.hourRange[0] &&
      course.hours <= filters.hourRange[1];
    const matchesDiscount =
      course.discountValue >= filters.discountRange[0] &&
      course.discountValue <= filters.discountRange[1];

    const matchesRanking =
      !filters.ranking ||
      (filters.ranking === "Nuevos lanzamientos" && course.isNew) ||
      (filters.ranking === "Más populares" && course.isPopular) ||
      (filters.ranking === "Top 10" && course.isTop) ||
      (filters.ranking === "Ofertas Flash" && course.isFlash);

    return (
      matchesArea &&
      matchesProgram &&
      matchesMode &&
      matchesCategory &&
      matchesPrice &&
      matchesHours &&
      matchesDiscount &&
      matchesRanking
    );
  });

  const sortedCourses = [...filteredCourses];

  switch (sortBy) {
    case "highest-price":
      sortedCourses.sort((a, b) => b.priceValue - a.priceValue);
      break;
    case "lowest-price":
      sortedCourses.sort((a, b) => a.priceValue - b.priceValue);
      break;
    case "nearest-date":
      sortedCourses.sort((a, b) => a.startDateValue - b.startDateValue);
      break;
    default:
      break;
  }

  return sortedCourses;
}
