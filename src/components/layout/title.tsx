import React from "react";
import { css } from "@emotion/core";

export const Title: React.FCX = ({ children }) => (
  <h1
    className="text-center text-4xl font-bold m-0 leading-tight"
    css={css`
      font-feature-settings: "palt";
    `}
  >
    {children}
  </h1>
);
