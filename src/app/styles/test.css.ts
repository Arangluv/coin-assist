import { style } from "@vanilla-extract/css";
import { vars } from "./theme.css";

export const container = style({
  width: "100%",
  height: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
});

export const wrapper = style({
  width: "10%",
  height: "10%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: vars.color.background,
  border: `1px solid ${vars.color.border}`,
});
export const wrapper_primary = style({
  width: "10%",
  height: "10%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: vars.color.primary,
  border: `1px solid ${vars.color.border}`,
});
export const wrapper_accent = style({
  width: "10%",
  height: "10%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: vars.color.accent,
  border: `1px solid ${vars.color.border}`,
});

export const text = style({
  color: vars.color.text,
});

export const sub_text = style({
  color: vars.color.secondaryText,
});
