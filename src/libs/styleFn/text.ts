import { Length, Percentage } from "./length";
import { formatProptery } from "./general";

export const fontSize = (value: Length | Percentage) =>
  formatProptery("font-size", value);

export type letterSpacingValue = Length | "normal";
export const letterSpacing = (value: letterSpacingValue) =>
  formatProptery("letter-spacing", value);
