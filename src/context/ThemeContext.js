import { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { light, dark } from "../constant/theme";
import GlobalStyles from "../GlobalStyles ";
import { ContextProvider } from "./ContextProvider";

export const ThemePreferenceContext = createContext();

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const isDarkTheme = theme === "dark";

  const toggleTheme = () => {
    const updatedTheme = isDarkTheme ? "light" : "dark";
    setTheme(updatedTheme);
    localStorage.setItem("theme", updatedTheme);
  };
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    if (savedTheme && ["dark", "light"].includes(savedTheme)) {
      setTheme(savedTheme);
    } else if (prefersDark) {
      setTheme("dark");
    }
  }, []);

  return (
    <ThemePreferenceContext.Provider value={{ theme, setTheme, toggleTheme }}>
      <ThemeProvider theme={isDarkTheme ? dark : light}>
        <GlobalStyles />
        <ContextProvider>{children}</ContextProvider>
      </ThemeProvider>
    </ThemePreferenceContext.Provider>
  );
};

export default ThemeContext;
