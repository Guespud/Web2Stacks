import { CatalogHeader } from "@/components/catalog/catalog-header";
import { CheckoutPage } from "@/components/checkout/checkout-page";

export default function CheckoutRoute() {
  return (
    <main className="min-h-screen bg-[#faf9ff] pt-[72px] text-[var(--color-ink)] xl:pt-[122px]">
      <CatalogHeader />
      <CheckoutPage />
    </main>
  );
}
