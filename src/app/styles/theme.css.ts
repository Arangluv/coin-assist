/* eslint-disable */

import { createGlobalTheme } from "@vanilla-extract/css";

// dark mode와 light mode 관계없이 적용되는 스타일들
export const global = createGlobalTheme(":root", {
  fontSize: {
    XXLarge: "4rem",
    XLarge: "48px",
    large: "36px",
    medium: "22px",
    regular: "18px",
    middleSmall: "16px",
    small: "14px",
    micro: "12px",
  },
  fontWeight: {
    normal: "400",
    medium: "500",
    large: "700",
  },
  color: {
    background: "#16181E",
    text: "#FCFDFC",
    accent: "#7D38EC",
    secondary: "#888884",
    primary: "#7D38EC",
    border: "#858687",
    secondaryText: "#858687",
    success: "#21B957",
    fail: "#F04856",
  },
});

export const vars = { ...global };
