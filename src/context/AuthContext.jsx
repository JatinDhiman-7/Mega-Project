// src/context/AuthContext.js
import { createContext, useState } from "react";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("userToken"))
  );
  const [cart, setCart] = useState([]);
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

  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty: qty } : item))
    );
  };

  const login = (token) => {
    localStorage.setItem("userToken", token);
    setIsLoggedIn(true);
  };

  const logout = () => {
    localStorage.removeItem("userToken");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        login,
        logout,
        cart,
        addToCart,
        removeFromCart,
        updateQty,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
