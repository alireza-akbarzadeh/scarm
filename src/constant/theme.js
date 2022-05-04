export const base = {
  breakpoints: ["600px", "768px", "992px", "1200px"],
  space: ["0px", "2px", "4px", "8px", "16px", "32px", "64px"],
  fonts: {
    heading: "Inter, system-ui, sans-serif",
    body: "Inter, system-ui, sans-serif",
  },
  fontSizes: ["12px", "14px", "16px", "20px", "24px"],
};
export const light = {
  primary: "#4851f4",
  background: "#ffffff",
  nav: "#f8f8f8",
  border: "#deebf1",
  body: "#f1f1f1",
  text: "#121620",
};
export const dark = {
  primary: "#4851f4",
  background: "#1f2023",
  nav: "#27282b",
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
