import { style } from "@vanilla-extract/css";
import { vars } from "@style/theme.css";

export const header_container = style({
  gridColumn: "1 / 4",
  gridRow: "1 / 2",
  display: "grid",
  gridTemplateColumns: "10vw 80vw 10vw",
  backgroundColor: vars.color.background,
});
