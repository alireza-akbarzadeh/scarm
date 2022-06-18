import { createContext, useEffect, useState, useContext } from "react";
import { ThemeProvider } from "styled-components";
import { dark, light } from "../theme";
import GlobalStyles from "../GlobalStyles ";
import { ContextProvider } from "./ContextProvider";

export const ThemePreferenceContext = createContext({
  theme: "light",
  toggleTheme: () => {},
});

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
