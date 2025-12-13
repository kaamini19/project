import React, { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const login = (credentials) => {
    // placeholder: replace with real API call
    // for demo: accept email "admin@example.com"
    if (credentials.email === "admin@example.com") {
      setUser({ email: credentials.email, role: "admin" });
      navigate("/admin");
      return true;
    }
    return false;
  };

  const logout = () => {
    setUser(null);
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

// helper hook
export function useAuth() {
  return useContext(AuthContext);
}
