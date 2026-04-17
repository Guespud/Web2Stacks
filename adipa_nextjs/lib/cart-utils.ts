import type { CartLine } from "@/lib/cart-store";

export function getCartItems(items: Record<string, CartLine>) {
  return Object.values(items);
}

export function getCartTotal(items: Record<string, CartLine>) {
  return getCartItems(items).reduce(
    (sum, item) => sum + item.priceValue * item.quantity,
    0,
  );
}

export function formatCop(value: number) {
  return new Intl.NumberFormat("es-CO").format(value);
}
