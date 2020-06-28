import { css } from "@emotion/core";

export type LengthUnitAbsolute = "px" | "cm" | "mm" | "Q" | "in" | "pc" | "pt";
export type LengthUnitFont =
  | "cap"
  | "ch"
  | "em"
  | "ex"
  | "ic"
  | "lh"
  | "rem"
  | "rlh";
export type LengthUnitViewPort = "vh" | "vw" | "vi" | "vb" | "vmin" | "vmax";
export type LengthUnit =
  | LengthUnitFont
  | LengthUnitViewPort
  | LengthUnitAbsolute;

export type Length = [number, LengthUnit];

export type Percentage = number;
export const formatPercentage = (n: Percentage) => `${n}%`;
