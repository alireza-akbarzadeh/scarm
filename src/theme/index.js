import { useContext } from "react";
import { ThemePreferenceContext } from "../context/ThemeContext";
import { dark } from "./dark";
import { light } from "./light";
const useTheme = () => {
  const { theme, toggleTheme } = useContext(ThemePreferenceContext);
  return {
    theme: theme === "light" ? light : dark,
    toggleTheme,
    themeName: theme,
  };
};

export { useTheme, light, dark };
