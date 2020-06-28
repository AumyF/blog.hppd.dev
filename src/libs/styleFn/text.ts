import { Length, Percentage } from "./length";
import { format, formatProptery } from "./general";
import { css } from "@emotion/core";

export const fontSize = (value: Length | Percentage) =>
  formatProptery("font-size", value);

export type letterSpacingValue = Length | "normal";
export const letterSpacing = (value: letterSpacingValue) =>
  formatProptery("letter-spacing", value);
