import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

export interface CartItem {
  product_id: string;
  product_name: string;
  product_image: string;
  product_price: number;
  product_quantity: number;
}

export interface CartState {
  items: CartItem[];
}

interface CartStore extends CartState {
  addToCart: (item: CartItem) => void;
  removeFromCart: (productId: string) => void;
  clearCart: () => void;
  increaseQuantity: (productId: string) => void;
  decreaseQuantity: (productId: string) => void;
  getTotalItems: () => number;
  getTotalPrice: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],

      addToCart: (item) => {
        set((state) => {
          const existingItem = state.items.find(
            (cartItem) => cartItem.product_id === item.product_id,
          );

          if (existingItem) {
            return {
              items: state.items.map((cartItem) =>
                cartItem.product_id === item.product_id
                  ? {
                      ...cartItem,
                      product_quantity:
                        cartItem.product_quantity + item.product_quantity,
                    }
                  : cartItem,
              ),
            };
          }

          return {
            items: [...state.items, item],
          };
        });
      },

      removeFromCart: (productId) => {
        set((state) => ({
          items: state.items.filter((item) => item.product_id !== productId),
        }));
      },

      clearCart: () => set({ items: [] }),

      increaseQuantity: (productId) => {
        set((state) => ({
          items: state.items.map((item) =>
            item.product_id === productId
              ? { ...item, product_quantity: item.product_quantity + 1 }
              : item,
          ),
        }));
      },

      decreaseQuantity: (productId) => {
        set((state) => ({
          items: state.items
            .map((item) =>
              item.product_id === productId
                ? { ...item, product_quantity: item.product_quantity - 1 }
                : item,
            )
            .filter((item) => item.product_quantity > 0),
        }));
      },

      getTotalItems: () =>
        get().items.reduce((total, item) => total + item.product_quantity, 0),

      getTotalPrice: () =>
        get().items.reduce(
          (total, item) =>
            total + item.product_price * item.product_quantity,
          0,
        ),
    }),
    {
      name: "crave-cart-storage",
      storage: createJSONStorage(() => AsyncStorage),
      partialize: (state) => ({ items: state.items }),
    },
  ),
);
