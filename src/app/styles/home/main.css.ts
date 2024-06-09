import { style } from "@vanilla-extract/css";
import { vars } from "@style/theme.css";

export const main_layout_container = style({
  display: "grid",
  gridTemplateRows: "10vh minmax(90vh, auto) 10vh",
  gridTemplateColumns: "10vw 80vw 10vw",
});
