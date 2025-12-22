// src/context/AuthContext.js
import { useEffect,createContext, useState } from "react";
export const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("access"))
  );
  const [cart, setCart] = useState(() => {
    return JSON.parse(localStorage.getItem('cart')) || []
  });

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart]);

  console.log(cart)
  const addToCart = (item) => {
    setCart((prev) => {
      const exists = prev.find((p) => p.id === item.id);

      if (exists) {
        return prev.map((p) =>
          p.id === item.id ? { ...p, qty: p.qty + 1 } : p
        );
      } else {
        return [...prev, { ...item, qty: 1 }];
      }
    });
  };
  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const updateQty = (id, value) => {
    const qty = Math.max(1, Number(value));
    setCart(prevcart => prevcart.map(item => item.id === id ? { ...item, quantity: qty } : item)
    );
  };

  const login = (access) => {
    console.log(access)
    localStorage.setItem("access",access);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        cart,
        setCart,
        addToCart,
        removeFromCart,
        updateQty,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
