/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type CartItem = {
  productId: string;
  name: string;
  size: string;
  quantity: number;
  image?: string;
};

type AddToCartInput = Omit<CartItem, "quantity"> & { quantity?: number };

type CartContextValue = {
  items: CartItem[];
  totalItems: number;
  addItem: (item: AddToCartInput) => void;
  removeItem: (productId: string, size: string) => void;
  setQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
};

const CART_STORAGE_KEY = "kkt_cart_v1";

function safeParseCart(json: string | null): CartItem[] {
  if (!json) return [];
  try {
    const raw = JSON.parse(json) as unknown;
    if (!Array.isArray(raw)) return [];
    const mapped = raw.map((item): CartItem | null => {
        if (!item || typeof item !== "object") return null;
        const maybe = item as Partial<CartItem>;
        if (
          typeof maybe.productId !== "string" ||
          typeof maybe.name !== "string" ||
          typeof maybe.size !== "string"
        ) {
          return null;
        }
        const quantity = typeof maybe.quantity === "number" ? maybe.quantity : 1;
        const normalizedQty = Number.isFinite(quantity) ? Math.max(1, Math.floor(quantity)) : 1;
        const image = typeof maybe.image === "string" ? maybe.image : undefined;
        const base: CartItem = {
          productId: maybe.productId,
          name: maybe.name,
          size: maybe.size,
          quantity: normalizedQty,
        };
        if (image) base.image = image;
        return base;
      });
    return mapped.filter((x): x is CartItem => x !== null);
  } catch {
    return [];
  }
}

function loadCart(): CartItem[] {
  if (typeof window === "undefined") return [];
  return safeParseCart(window.localStorage.getItem(CART_STORAGE_KEY));
}

function persistCart(items: CartItem[]) {
  if (typeof window === "undefined") return;
  if (items.length === 0) {
    window.localStorage.removeItem(CART_STORAGE_KEY);
    return;
  }
  window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
}

const CartContext = createContext<CartContextValue | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => loadCart());

  useEffect(() => {
    persistCart(items);
  }, [items]);

  // Keep in sync if multiple tabs/windows are open.
  useEffect(() => {
    const onStorage = (e: StorageEvent) => {
      if (e.key !== CART_STORAGE_KEY) return;
      setItems(safeParseCart(e.newValue));
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

    const addItem: CartContextValue["addItem"] = (input) => {
      const qty = input.quantity ?? 1;
      const addQty = Number.isFinite(qty) ? Math.max(1, Math.floor(qty)) : 1;
      setItems((prev) => {
        const idx = prev.findIndex((p) => p.productId === input.productId && p.size === input.size);
        if (idx === -1) {
          return [
            ...prev,
            {
              productId: input.productId,
              name: input.name,
              size: input.size,
              quantity: addQty,
              image: input.image,
            },
          ];
        }
        const next = [...prev];
        next[idx] = { ...next[idx], quantity: next[idx].quantity + addQty };
        return next;
      });
    };

    const removeItem: CartContextValue["removeItem"] = (productId, size) => {
      setItems((prev) => prev.filter((p) => !(p.productId === productId && p.size === size)));
    };

    const setQuantity: CartContextValue["setQuantity"] = (productId, size, quantity) => {
      const q = Number.isFinite(quantity) ? Math.floor(quantity) : 1;
      if (q <= 0) {
        removeItem(productId, size);
        return;
      }
      setItems((prev) =>
        prev.map((p) =>
          p.productId === productId && p.size === size ? { ...p, quantity: q } : p
        )
      );
    };

    const clearCart: CartContextValue["clearCart"] = () => setItems([]);

    return { items, totalItems, addItem, removeItem, setQuantity, clearCart };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
