import { CatalogPageClient } from "@/components/catalog/catalog-page-client";
import { CatalogHeader } from "@/components/catalog/catalog-header";
import { featuredTags, filterGroups, courses } from "@/lib/course-data";

export default function Home() {
  return (
    <main className="min-h-screen bg-white pt-[72px] text-(--color-ink) xl:pt-[117px]">
      <CatalogHeader />
      <CatalogPageClient
        courses={courses}
        featuredTags={featuredTags}
        filterGroups={filterGroups}
      />
    </main>
  );
}
