import { createContext, useEffect, useState } from "react";
import Test from "./Test";

export const ThemeContext = createContext();

function ThemeProvider() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <Test />
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
