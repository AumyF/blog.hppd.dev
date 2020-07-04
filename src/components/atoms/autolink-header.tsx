import { css } from "@emotion/core";
import React from "react";

export type HeaderAutoLinkProps = {};

export const HeaderAutoLink: React.FCX<HeaderAutoLinkProps> = props => (
  <a
    {...props}
    css={css`
      float: left;
      margin-left: calc(-0.2em + -25px);
      color: var(--foreground);
      svg {
        display: inline;
        transform: scale(1.2);
      }
    `}
  >
    {props.children}
  </a>
);
