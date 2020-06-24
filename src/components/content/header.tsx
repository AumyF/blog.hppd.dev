import React from "react";
import { css } from "@emotion/core";

export const Header: React.FCX = ({ className, children }) => (
  <h1
    className={className}
    css={css`
      text-align: center;
      font-size: 3em;
      margin: 0;
    `}
  >
    {children}
  </h1>
);
