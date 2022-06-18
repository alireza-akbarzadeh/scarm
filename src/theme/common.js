export const COLORS = {
  primary: "#001F2D",
  secondary: "#4D626C",
  white: "#FFF",
  gray: "#74858C",
};
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
  FontWIGHT: {
    Font_100: "100",
    Font_200: "200",
    Font_300: "300",
    Font_400: "400",
    Font_500: "500",
    Font_600: "600",
    Font_700: "700",
    Font_800: "800",
    Font_900: "900",
    Font_bold: "bold",
  },
  Typography: {
    Font_xs: 8,
    Font_sm: 12,
    Font_base: 14,
    Font_md: 16,
    Font_lg: 18,
    Font_xl: 24,
  },
  BOX_SHADOW: {
    sm: {
      shadowColor: COLORS.gray,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    md: {
      shadowColor: COLORS.gray,
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7,
    },
    lg: {
      shadowColor: COLORS.gray,
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,

      elevation: 14,
    },
  },
};
