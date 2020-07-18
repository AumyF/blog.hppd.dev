import React from "react";
import { css } from "@emotion/core";

export const HorizontalLine: React.FCX<JSX.IntrinsicElements["hr"]> = props => (
  <hr
    className="my-4"
    css={css`
      border: none;
      border-bottom: 1px solid var(--border);
    `}
    {...props}
  />
);
