import React from "react";
import { css } from "@emotion/core";

export const Header: React.FCX = ({ className, children }) => (
  <h1
    className={className}
    css={css`
      text-align: center;
      font-size: 3em;
      font-weight: 600;
      margin: 0;
      font-feature-settings: "palt";
    `}
  >
    {children}
  </h1>
);
