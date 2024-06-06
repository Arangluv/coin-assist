import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";
export const container = style({
  width: "100%",
  height: "100vh",
  border: `1px solid ${vars.color.primary}`,
});
