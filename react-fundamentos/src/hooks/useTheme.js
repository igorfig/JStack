import React, { useState, createContext, useContext } from "react";

const ThemeContext = createContext("dark");

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  function handleToggleTheme() {
    setTheme((prevState) => (prevState === "dark" ? "light" : "dark"));
  }

  return (
    <ThemeContext.Provider value={{ theme, handleToggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  return context;
}
