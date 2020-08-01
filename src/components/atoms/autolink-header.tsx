import { css } from "@emotion/core";
import React from "react";

export type HeaderAutoLinkProps = {};

export const HeaderAutoLink: React.FCX<HeaderAutoLinkProps> = props => (
  <a
    {...props}
    css={css`
      float: left;
      left: -20px;
      position: absolute;
      svg {
        fill: var(--foreground);
        display: inline;
        transform: scale(1.2);
      }
    `}
  />
);
