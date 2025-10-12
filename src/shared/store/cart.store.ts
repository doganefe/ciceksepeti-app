import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { CartState, CartItem } from "../types/cart.types";

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,

      addToCart: (product) => {
        const { items } = get();
        const existingItem = items.find((item) => item.id === product.id);

        if (existingItem) {
          set({
            items: items.map((item) =>
              item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
            ),
            totalItems: get().totalItems + 1,
          });
        } else {
          const newItem: CartItem = { ...product, quantity: 1 };
          set({
            items: [...items, newItem],
            totalItems: get().totalItems + 1,
          });
        }
      },

      removeFromCart: (productId) => {
        const { items } = get();
        const itemToRemove = items.find((item) => item.id === productId);

        if (itemToRemove) {
          set({
            items: items.filter((item) => item.id !== productId),
            totalItems: get().totalItems - itemToRemove.quantity,
          });
        }
      },

      updateQuantity: (productId, quantity) => {
        const { items } = get();
        const existingItem = items.find((item) => item.id === productId);

        if (!existingItem) return;

        if (quantity <= 0) {
          get().removeFromCart(productId);
          return;
        }

        const quantityDifference = quantity - existingItem.quantity;

        set({
          items: items.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
          totalItems: get().totalItems + quantityDifference,
        });
      },

      clearCart: () => {
        set({
          items: [],
          totalItems: 0,
        });
      },

      getItemQuantity: (productId) => {
        const { items } = get();
        const item = items.find((item) => item.id === productId);
        return item ? item.quantity : 0;
      },
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({
        items: state.items,
        totalItems: state.totalItems,
      }),
    }
  )
);

