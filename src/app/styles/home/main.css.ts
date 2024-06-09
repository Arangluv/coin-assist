import { style } from "@vanilla-extract/css";
import { vars } from "@style/theme.css";

export const scroll_hidden = style({
  overflowX: "hidden",
  overflowY: "scroll",
  "::-webkit-scrollbar": {
    width: 10,
  },
  "::-webkit-scrollbar-thumb": {
    backgroundColor: vars.color.accent,
    borderRadius: 10,
  },
  "::-webkit-scrollbar-track": {
    backgroundColor: vars.color.border,
    borderRadius: 10,
  },
});

export const main_layout_container = style({
  display: "grid",
  gridTemplateRows: "15vh minmax(85vh, auto) 15vh",
  gridTemplateColumns: "10vw 80vw 10vw",
});
