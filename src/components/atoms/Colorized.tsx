import React from "react";
import { css } from "@emotion/core";
import scheme, { colors } from "../../styles/colorScheme";

export type ColorrizedProps = {
  color: colors;
};

export const Colored: React.FC<ColorrizedProps> = ({ children, color }) => (
  <span
    css={css`
      color: ${scheme[color]};
    `}
  >
    {children}
  </span>
);
