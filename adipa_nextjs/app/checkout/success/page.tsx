import { CatalogHeader } from "@/components/catalog/catalog-header";
import { CheckoutSuccess } from "@/components/checkout/checkout-success";

export default function CheckoutSuccessRoute() {
  return (
    <main className="min-h-screen bg-[#faf9ff] pt-[72px] text-[var(--color-ink)] xl:pt-[117px]">
      <CatalogHeader />
      <CheckoutSuccess />
    </main>
  );
}
