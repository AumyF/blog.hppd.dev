import { css } from "@emotion/core";

export type cssprop =
  | string
  | "font-size"
  | "letter-spacing"
  | "width"
  | "height"
  | "max-width";

type WithUnit = [number, string];

export const format: (o: WithUnit | string | number) => string = value =>
  typeof value === "string" || typeof value === "number"
    ? `${value}`
    : `${value[0]}${value[1]}`;

export const formatProptery = <T>(
  prop: cssprop,
  value: WithUnit | string | number
) => css`${prop}:${format(value)};`;
