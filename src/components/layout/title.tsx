import { css } from '@emotion/react';
import React from "react";

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
