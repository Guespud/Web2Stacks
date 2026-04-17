"use client";

import { create } from "zustand";

export type CartLine = {
  id: string;
  price: string;
  priceValue: number;
  quantity: number;
  title: string;
};

type CartStore = {
  addItem: (item: Omit<CartLine, "quantity">) => void;
  clearCart: () => void;
  closeCart: () => void;
  isCartOpen: boolean;
  items: Record<string, CartLine>;
  openCart: () => void;
  removeItem: (id: string) => void;
  totalItems: number;
};

export const useCartStore = create<CartStore>((set) => ({
  items: {},
  isCartOpen: false,
  totalItems: 0,
  addItem: (item) =>
    set((state) => {
      const currentItem = state.items[item.id];

      if (currentItem) {
        return state;
      }

      return {
        items: {
          ...state.items,
          [item.id]: {
            ...item,
            quantity: 1,
          },
        },
        totalItems: state.totalItems + 1,
      };
    }),
  openCart: () => set({ isCartOpen: true }),
  closeCart: () => set({ isCartOpen: false }),
  clearCart: () => set({ isCartOpen: false, items: {}, totalItems: 0 }),
  removeItem: (id) =>
    set((state) => {
      const currentItem = state.items[id];

      if (!currentItem) {
        return state;
      }

      const nextItems = { ...state.items };
      delete nextItems[id];

      return {
        items: nextItems,
        totalItems: Math.max(0, state.totalItems - currentItem.quantity),
      };
    }),
}));
