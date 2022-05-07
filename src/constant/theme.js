export const base = {
  breakpoints: {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xll: "1536px",
  },
  space: ["0px", "2px", "4px", "8px", "16px", "32px", "64px"],
  fonts: {
    heading: "Inter, system-ui, sans-serif",
    body: "Inter, system-ui, sans-serif",
  },
  fontSizes: ["12px", "14px", "16px", "20px", "24px"],
};
export const light = {
  primary: "#1A429c",
  secondary: "#5195EA",
  blue_500: "#0449e9",
  blue_800: "#1b214a",
  blue_600: "#323645",
  gray_200: "#EDEDee",
  gray_500: "#9c9da2",
  gray_600: "#666b79",
  gray_700: "#595b63",
  darkCyan: "#0b0c11",
  border: "#deebf1",
  background: "#ffffff",
  body: "#f1f1f1",
  text: "#121620",
};
export const dark = {
  primary: "#1A429c",
  secondary: "#5195EA",
  blue_500: "#0449e9",
  blue_800: "#1b214a",
  blue_900: "#282a37",
  gray_500: "#9c9da2",
  gray_200: "#EDEDee",
  gary_700: "#595b63",
  darkCyan: "#0b0c11",
  background: "#1f2023",
  border: "#303236",
  body: "#121620",
  text: "#f1f1f1",
};

export const COLORS = {
  primary: "#001F2D",
  secondary: "#4D626C",
  white: "#FFF",
  gray: "#74858C",
};

export const SIZES = {
  base: 8,
  small: 12,
  font: 14,
  medium: 16,
  large: 18,
  extraLarge: 24,
};

export const FONTS = {
  bold: "InterBold",
  semiBold: "InterSemiBold",
  medium: "InterMedium",
  regular: "InterRegular",
  light: "InterLight",
};

export const SHADOWS = {
  light: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  medium: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,

    elevation: 7,
  },
  dark: {
    shadowColor: COLORS.gray,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 14,
  },
};
