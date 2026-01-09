import { createContext, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem("cart")) || [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (item) => {
    toast.success("Item added successfully 🎉");
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);
      return exists
        ? prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        )
        : [...prev, { ...item, qty: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id, value) => {
    const qty = Math.max(1, Number(value));
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: qty } : item
      )
    );
  };

  // 🔥 memoized context value
  const value = useMemo(
    () => ({
      cart,
      addToCart,
      removeFromCart,
      updateQty,
    }),
    [cart]
  );

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}
