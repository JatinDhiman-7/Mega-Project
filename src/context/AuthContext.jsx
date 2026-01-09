// src/context/AuthContext.js
import { useEffect, createContext, useState, useMemo } from "react";
import { toast } from "react-toastify";
import { logoutUser } from "../api/auth";
import { useNavigate } from "react-router-dom";
export const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(
    Boolean(localStorage.getItem("access"))
  );
  const login = (access) => {
    // console.log(access)
    localStorage.setItem("access", access);
    setIsLoggedIn(true);
  };

  const logout = () => {
    logoutUser()
    localStorage.removeItem("access");
    localStorage.removeItem("refresh");
    setIsLoggedIn(false);
  };
  const value = useMemo(() => ({
    isLoggedIn,
    login,
    logout,
  }), [isLoggedIn]);
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}
